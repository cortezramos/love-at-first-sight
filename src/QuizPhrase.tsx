import { SubmitHandler, useForm } from "react-hook-form";
import { FormGroup, Label, Button } from "reactstrap";
import { toast } from "sonner";
import { useGlobalActions } from "./hooks/useGlobalActions";
import { useAppSelector } from "./store-slice/storeAdapter";

export interface QuizPhraseProps {
  phrase: string;
}

export const QuizPhrase = () => {
  const { phraseOkIsOk } = useGlobalActions();
  const { phrase } = useAppSelector((state) => state.globalStore);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<QuizPhraseProps>();

  const handleQuiz: SubmitHandler<QuizPhraseProps> = (data) => {
    if (data.phrase !== phrase) {
      toast.error("Frase incorrecta");
      phraseOkIsOk(false);
      reset();
      return;
    }

    phraseOkIsOk(true);
    toast.success("Frase correcta");
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleQuiz)}>
        <FormGroup>
          <Label>Ingresa tus iniciales</Label>
          <input
            className="form-control"
            autoComplete="off"
            placeholder="Ingresa iniciales..."
            type="text"
            id="phrase"
            {...register("phrase", { required: true })}
          ></input>
          <div>
            {errors && (
              <p style={{ color: "red" }}>
                {errors.phrase?.type === "required" ? "Campo requerido" : ""}
              </p>
            )}
          </div>
          <Button color="primary" type="submit">
            Validar
          </Button>
        </FormGroup>
      </form>
    </>
  );
};

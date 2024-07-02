import { SubmitHandler, useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/config";
import { toast } from "sonner";
import { Button, FormGroup, Label } from "reactstrap";

export interface NewUrlProps {
  url: string;
  phrase: string;
}

export const NewUrl = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<NewUrlProps>();

  const sendUrl: SubmitHandler<NewUrlProps> = (data) => {
    if (data.phrase !== "DAPM") {
      toast.error("Frase incorrecta");
      return;
    }

    const urlRef = collection(db, "songs");
    addDoc(urlRef, {
      url: data.url,
    });
    reset();
    toast.success("Url agregada correctamente");
  };

  return (
    <form onSubmit={handleSubmit(sendUrl)}>
      <FormGroup>
        <Label>Ingresa URL de video </Label>
        <input
          className="form-control"
          autoComplete="off"
          placeholder="Ingresa url de video..."
          type="text"
          id="url"
          {...register("url", { required: true })}
        ></input>

        <Label>Ingresa frase </Label>
        <input
          className="form-control"
          autoComplete="off"
          placeholder="Ingresa frase de confirmación..."
          type="text"
          id="url"
          {...register("phrase", { required: true })}
        ></input>
        <div>
          {errors && (
            <p style={{ color: "red" }}>
              {errors.url?.type === "required" ? "Campo requerido" : ""}
            </p>
          )}
        </div>
        <Button type="submit" color="info">
          Agregar cancion
        </Button>
      </FormGroup>
    </form>
  );
};

import { SubmitHandler, useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/config";
import { toast } from "sonner";

export interface NewUrlProps {
  url: string;
}

export const NewUrl = () => {
  const { register, handleSubmit, reset } = useForm<NewUrlProps>();

  const sendUrl: SubmitHandler<NewUrlProps> = (data) => {
    const urlRef = collection(db, "songs");
    addDoc(urlRef, {
      url: data.url,
    });
    toast.success("Url agregada correctamente");
    reset();
  };

  return (
    <div>
      <h6>Agregar video</h6>
      <form onSubmit={handleSubmit(sendUrl)}>
        <label htmlFor="url">Agregar tu url: </label>
        <input
          type="text"
          placeholder="Ingresa tu video..."
          id="url"
          autoComplete="off"
          {...register("url", { required: true })}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

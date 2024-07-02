import { Button, Progress } from "reactstrap";
import { useAppSelector } from "./store-slice/storeAdapter";
import { useGlobalActions } from "./hooks/useGlobalActions";
import { toast } from "sonner";

export const InitQuiz = () => {
  const { acceptanceRate } = useAppSelector((state) => state.globalStore);
  const { sumAcceptanceRate, initQuiz, validFinish } = useGlobalActions();

  const handleOk = () => {
    sumAcceptanceRate("+");
  };

  const handleNoOk = () => {
    sumAcceptanceRate("-");
  };

  const handleSend = () => {
    if (acceptanceRate < 80) {
      validFinish(false);
      toast.error(
        "Tu indice de aceptación esta por debajo del 80%, por favor responde con sinceridad."
      );
    } else {
      validFinish(true);
      initQuiz(false);
      toast.success(
        "Tu indice de aceptación es del 80% o superior, gracias por responder."
      );
    }
  };

  return (
    <>
      <p>Favor responder las siguientes preguntas.</p>
      <p>
        1. Estando a mi lado ¿Te has sentido amada?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        2. Estando a mi lado ¿Te has sentido importante?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        3. Estando a mi lado ¿Te has sentido respetada?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        4. Estando a mi lado ¿Te has sentido valorada?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        5. Estando a mi lado ¿Te has sentido protegida?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        6. Estando a mi lado ¿Te has sentido tomada encuenta?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        7. Estando a mi lado ¿Te has sentido admirada?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        8. Estando a mi lado ¿Te has sentido escuchada?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        9. Estando a mi lado ¿Te has sentido feliz?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        10. Estando a mi lado ¿Te has sentido feliz?
        <br />
        <br />
        <button onClick={handleOk}>Si</button>
        <button onClick={handleNoOk}>No</button>
      </p>
      <p>
        Indice de aceptación
        <Progress animated color="success" value={acceptanceRate} />
      </p>
      <p>
        <span style={{ color: "red", fontSize: "150%" }}>A</span>ndrea, gracias
        por responder esta encuesta, ¿Deseas enviar el resultado?.
        <br />
        <Button color="success" onClick={handleSend}>
          Enviar
        </Button>
      </p>
      <p>
        PD: Las preguntas 9 y 10 no estan repetidas es porque deseo que te
        sientas feliz.
      </p>
      <p>PD del PD: Sin pd no soy yo y sin pd del pd menos.</p>
      <p>
        PD del PD del PD: Este código no fue escrito con tachones, fue escrito
        con bugs.
      </p>
      <p>PD del PD del PD del PD: TE AMO.</p>
    </>
  );
};

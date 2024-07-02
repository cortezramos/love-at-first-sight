import { Button } from "reactstrap";
import { useGlobalActions } from "./hooks/useGlobalActions";

export const QuizLove = () => {
  const { openModal, phraseOkIsOk, initQuiz } = useGlobalActions();

  const handleOk = () => {
    initQuiz(true);
  };

  const handleNoOk = () => {
    initQuiz(false);
    phraseOkIsOk(false);
    openModal(false);
  };

  return (
    <>
      <p>
        Hola <span style={{ color: "red", fontSize: "150%" }}>A</span>ndrea, el
        siuguiente es un cuestionario para saber si has llevado los ultimos 42
        días llenos de felicidad. ¿Quien cuenta los días? tal vez y solo tal
        vez, un enamorado empedernido.
        <br />
        <br />
        Toma en cuenta que debes responder todas las preguntas.
        <br />
        <br />
        <br />
        <br />
        ¿Deseas continuar con la encuesta?
        <Button color="success" onClick={handleOk}>
          Si
        </Button>
        <Button color="danger" onClick={handleNoOk}>
          No
        </Button>
      </p>
    </>
  );
};

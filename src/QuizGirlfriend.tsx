import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { QuizPhrase } from "./QuizPhrase";
import { useAppSelector } from "./store-slice/storeAdapter";
import { QuizLove } from "./QuizLove";
import { useGlobalActions } from "./hooks/useGlobalActions";
import { InitQuiz } from "./InitQuiz";
import { FinishQuiz } from "./FinishQuiz";

export const QuizGirlfriend = () => {
  const { modalOpen, phraseOk, initQuiz, finishQuiz } = useAppSelector(
    (state) => state.globalStore
  );
  const { openModal } = useGlobalActions();

  const handleQuiz = () => {
    openModal(true);
  };

  const toggle = () => {
    openModal(!modalOpen);
  };

  return (
    <>
      <Button outline color="success" onClick={handleQuiz}>
        Iniciar encuesta
      </Button>

      <Modal isOpen={modalOpen} toggle={toggle}>
        <ModalHeader>Encuesta!!!</ModalHeader>
        <ModalBody>
          {!phraseOk && <QuizPhrase />}
          {phraseOk && !initQuiz && !finishQuiz && <QuizLove />}
          {initQuiz && <InitQuiz />}
          {finishQuiz && <FinishQuiz />}
        </ModalBody>
        <ModalFooter>{"<3"}</ModalFooter>
      </Modal>
    </>
  );
};

import { setAccpetanceRate, setFinishQuiz, setInitQuiz, setModalOpen, setPhraseOk, setResetAcceptanceRate } from "../store-slice/globalSlice";
import { useAppDispatch } from "../store-slice/storeAdapter";

export const useGlobalActions = () => {
    const dispatch = useAppDispatch();

    const openModal = (value: boolean) => {
        dispatch(setModalOpen(value));

    }

    const phraseOkIsOk = (value: boolean) => {
        dispatch(setPhraseOk(value));
    };

    const initQuiz = (value: boolean) => {
        dispatch(setInitQuiz(value));
    }

    const sumAcceptanceRate = (value: string) => {
        dispatch(setAccpetanceRate(value));
    };

    const resetAcceptanceRate = () => {
        dispatch(setResetAcceptanceRate());
    }

    const validFinish = (value: boolean) => {
        dispatch(setFinishQuiz(value))
    }

    return {
        openModal,
        phraseOkIsOk,
        initQuiz,
        sumAcceptanceRate,
        resetAcceptanceRate,
        validFinish
    };
};
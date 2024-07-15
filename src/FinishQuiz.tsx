import { Badge, Button, Label } from "reactstrap";
import { useAppSelector } from "./store-slice/storeAdapter";
import { useState } from "react";

export const FinishQuiz = () => {
  const [view, setView] = useState(false);
  const [sheSayYes, setSheSayYes] = useState(false);

  const { acceptanceRate } = useAppSelector((state) => state.globalStore);

  return (
    <>
      <p>
        <div>
          <p>Tengo un presente para ti</p>
          <p>Significado de los Cisnes</p>
          <p>- La purificación y limpieza de la persona y de su vida.</p>
          <p>
            - Armonía por lo que es el símbolo de muchos poetas, pintores,
            cineastas, artesanos o músicos, entre otros.
          </p>
          <p>-Autorreconocimiento para descubrir esa belleza interior.</p>
          <p>
            - Tutor de personas porque les ayuda a encontrar su camino y su
            sitio en el mundo.
          </p>
          <p>- Fidelidad en las relaciones. </p>
        </div>
        Tu indice de aceptación es del <Badge> {acceptanceRate} </Badge> /{" "}
        <Badge> 100 </Badge> gracias por responder. Derivado de la respuesta a
        las preguntas, y dado que el indice de aceptación es alto. Se ha
        desbloqueado la ultima pregunta.
        <br />
        <br />
        <Button color="primary" outline onClick={() => setView(!view)}>
          Ver pregunta
        </Button>
      </p>
      {view && (
        <div>
          <p>
            <Label>¿Quieres ser mi novia?</Label>
            <br />
            <br />
            <Button color="success" onClick={() => setSheSayYes(!sheSayYes)}>
              Si
            </Button>
            <br />
            o
            <br />
            <Button color="success" onClick={() => setSheSayYes(!sheSayYes)}>
              Si
            </Button>
          </p>
        </div>
      )}
      {sheSayYes && (
        <div>
          <p>
            Prometo aprovechar esta optrunidad a tu lado, solo deseo hacerte
            mejor y amarte todos los días de mi vida. Tu no lo sabes pero
            mientras estas acostada en la cama emponchada con frío y yo cerca de
            la chimenea, te veo y estoy programando esto y creeme cada tecla que
            presiono la hago con el alma porque desde allí viene este
            sentimiento y prometo dartela hasta el ultimo día de mi vida
          </p>
          <p>
            Desde que te conocí, no deje nada al azar todo lo construí. Tenía
            una oportunidad para pedirte esto pero también tu tenías una sola
            respuesta
          </p>
          <p>
            Eres un 1000 pero cuando sonries es la confirmacion del infinito
          </p>
        </div>
      )}
    </>
  );
};

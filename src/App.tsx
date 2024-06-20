import letter from "./assets/letters.svg";

import "./App.css";
import { Video } from "./Video";
import { NewUrl } from "./NewUrl";

function App() {
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={letter} className="logo react" alt="Logo" />
        </a>
      </div>
      <h2>
        Amor a primera vista, para{" "}
        <span style={{ color: "red", fontSize: "150%" }}>A</span>ndrea{" "}
      </h2>
      <div className="card">
        <h4>Investigacion según la IA basado en un resumen de articulos</h4>
        <p style={{ textAlign: "left" }}>
          El amor a primera vista es un flechazo repentino, una conexión
          instantánea y una atracción inmediata entre dos personas que se ven
          por primera vez. Es un sentimiento intenso y apasionado que surge
          inmediatamente después de conocer a alguien y que puede llevar a una
          relación romántica. Aunque el amor a primera vista es una experiencia
          emocionante, no siempre es una base sólida para una relación duradera.
          A menudo, el amor a primera vista se basa en la atracción física y la
          química inicial, y puede ser difícil de mantener a medida que se
          desarrolla una relación más profunda. Sin embargo, el amor a primera
          vista puede ser el comienzo de una conexión significativa y duradera
          entre dos personas que se sienten atraídas entre sí desde el primer
          momento en que se conocen.
        </p>
      </div>

      <div className="card">
        <h4>Experiencia de un amor a primera vista</h4>
        <p style={{ textAlign: "left" }}>
          Surge cuando no lo esperas y entonces de la nada conoces a una persona
          y empiezas a notar sus detalles, sus gestos, su ceja, su sonrisa esa
          bendita sonrisa que te cambiara todo. Acto seguido tienes la
          oportunidad de hablar con esa persona y empiezas a notar esa conexión
          rara, sin explicaciones pero especial e inicias a hablar y notas
          enseguida que es interesante, con una forma de pensar unica, notas que
          es inteligente, ya para ese momento aún no sabes sobre sus
          sentimientos pero ya conoces sus intereses y te quedas atrapado
          esperando que por favor este soltera pero piensas "claro que no",
          mientras la vez te dices con ese rostro y esa intelegencia "claro que
          no", pero no preguntas sería confianzudo y en un momento de suerte por
          azares de la platica notas que esta soltera sonries por dentro y te
          dices "porque me hizo feliz saberlo, si no sabes si tendras una
          oportunidad". Y surge la duda del porque sientes que la quieres seguir
          conociendo y el porque sucede con esa extraña. Finalmente no quieres
          que se termine el momento solo quieres seguirla escuchando que el
          cajero de mcdonalds se retrase, que se pinche una llanta, que haya
          tráfico pero no, solo finaliza el momento y es hora de irse. Luego
          camino a casa te preguntas por esa persona y antes de dormir sonreiras
          porque harás lo posible por volverla a ver, inventaras ese "plan con
          maña". No pides su número porque para ese momento ya tenías planeado
          que no dejarías al azar obtenerlo, encima no quieres solo escribirle
          un par de mensajes vacios en whatsapp quieres enviarle una carta que
          la haga sentir especial que note lo unico y especial que fue conocerle
          y solo quieres escucharla volverla a ver aunque fuera por 2 minutos.
        </p>
        <p>
          <span style={{ color: "red", fontSize: "150%" }}>A</span>ndrea, no
          encontre mayor información de la que ya sabes ni una verdad absoluta
          sobre el amor a primera vista. Pero me quedo con esta experiencia
          espero te sirva para tu investigación sobre el tema y espero también
          que la chicha que describren en la misma no haya salido huyendo y
          espero que se sigan viendo y conociendo.
        </p>
        <span style={{ color: "red", fontSize: "150%" }}>N</span>uestras
        primeras canciones
        <div className="card">
          <NewUrl />
        </div>
        <div className="card">
          <Video />
        </div>
        <p>No dudes ni por un minuto de mis sentimientos</p>
        <p>Despues de ti, el resto del mundo me parece simple</p>
      </div>
    </>
  );
}

export default App;

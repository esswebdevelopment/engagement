import useReveal from "../hooks/useReveal.js";
import { boasvindas } from "../data/boasvindas.js";
import "../styles/boasvindas.css";

// Seção branca com a moldura ornamentada e o texto de boas-vindas dentro.
// É a primeira seção que sobe por cima da capa.
export default function Boasvindas() {
  const [ref, visivel] = useReveal(0.2);

  return (
    <section
      ref={ref}
      className={`boasvindas ${visivel ? "boasvindas--visible" : ""}`}
      aria-labelledby="boasvindas-titulo"
    >
      {/* a moldura é desenhada pelo CSS (border-image); cresce junto com o texto */}
      <div className="boasvindas__moldura">
        <h2 id="boasvindas-titulo" className="boasvindas__titulo">
          {boasvindas.titulo}
        </h2>

        {boasvindas.paragrafos.map((texto) => (
          <p key={texto.slice(0, 24)} className="boasvindas__texto">
            {texto}
          </p>
        ))}

        <p className="boasvindas__fecho">{boasvindas.fecho}</p>
      </div>
    </section>
  );
}
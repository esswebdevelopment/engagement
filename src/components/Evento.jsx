import monograma from "../assets/monograma.svg";
import evento from "../data/evento.js";
import useReveal from "../hooks/useReveal.js";
import useScrolled from "../hooks/useScrolled.js";
import "../styles/evento.css";

export default function Evento({ entered }) {
  const [ref, visivel] = useReveal(0.3);
  const rolou = useScrolled();
  // a renda só aparece depois de entrar no site E de começar a rolar
  const mostrarRenda = entered && rolou;

  const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    evento.mapaBusca
  )}`;

  return (
    <section
      ref={ref}
      className={`evento ${visivel ? "evento--visible" : ""}`}
      aria-labelledby="evento-title"
    >
      <div
        className={`evento__renda ${mostrarRenda ? "evento__renda--visible" : ""}`}
        aria-hidden="true"
      />

      <div className="evento__inner">
        <h2 id="evento-title" className="evento__title">
          {evento.titulo}
        </h2>

        <p className="evento__text">{evento.mensagem}</p>
        <p className="evento__names">{evento.assinatura}</p>

        <p className="evento__venue">{evento.local}</p>

        <div className="evento__info">
          <p>
            {evento.data}, {evento.horario}
          </p>
          <p className="evento__address">{evento.endereco}</p>
        </div>

        <a
          className="evento__map"
          href={mapaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir no Google Maps
        </a>

        <img
          className="evento__monogram"
          src={monograma}
          alt=""
          width="40"
          height="43"
        />
      </div>
    </section>
  );
}
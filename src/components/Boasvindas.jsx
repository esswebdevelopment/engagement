import useReveal from "../hooks/useReveal.js";
import textoBoas from "../assets/text_boas_preto.svg";
import "../styles/boasvindas.css";

// Texto da imagem, para leitores de tela
const TEXTO_ALT =
  "Ter você aqui torna essa ocasião ainda mais significativa. Preparamos tudo com muito carinho para que esta noite seja repleta de sorrisos, abraços, boas lembranças e momentos que ficarão guardados para sempre em nossos corações. Com muito carinho, seja bem-vindo(a) à nossa celebração!";

// Seção branca com a moldura ornamentada e o texto de boas-vindas dentro.
// É a primeira seção que sobe por cima da capa.
export default function Boasvindas() {
  const [ref, visivel] = useReveal(0.2);

  return (
    <section
      ref={ref}
      className={`boasvindas ${visivel ? "boasvindas--visible" : ""}`}
      aria-label="Boas-vindas"
    >
      {/* a moldura é desenhada pelo CSS (border-image) e se ajusta ao tamanho do texto */}
      <div className="boasvindas__moldura">
        <img className="boasvindas__texto" src={textoBoas} alt={TEXTO_ALT} />
      </div>
    </section>
  );
}
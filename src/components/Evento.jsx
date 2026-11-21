import info from "../assets/info.svg";
import useReveal from "../hooks/useReveal.js";
import "../styles/evento.css";

// Maps: busca pelo nome + endereço do espaço (confirmado: Rua Dona Veridiana, 661, Higienópolis, CEP 01238-010)
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Veridiana Pizzaria, Rua Dona Veridiana, 661, Higienópolis, São Paulo, 01238-010"
  );

const MENU_URL = "https://www.veridiana.com.br/cardapio/04-pizzas";

// texto da imagem, para leitores de tela
const TEXTO_INFO =
  "Veridiana Higienópolis — São Paulo. 30 de Janeiro de 2027, às 19h00. Rua Dona Veridiana, 661, 01238-010.";

export default function Evento() {
  const [ref, visivel] = useReveal(0.3);

  return (
    <section
      ref={ref}
      className={`evento ${visivel ? "evento--visible" : ""}`}
      aria-label="Informações do evento"
    >
      <div className="evento__card">
        <img className="evento__info" src={info} alt={TEXTO_INFO} />

        {/* links invisíveis sobre os botões desenhados na imagem */}
        <a
          className="evento__link evento__link--maps"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir a localização no Google Maps"
        />
        <a
          className="evento__link evento__link--menu"
          href={MENU_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver o cardápio da Veridiana"
        />
      </div>
    </section>
  );
}
/** @format */
import * as S from "../../styles/styles";

export default function Card({ image, title, description, id }) {
  return (
    <S.Card>
      <img src={image} alt="img" />
      <div>
        <h2>
          {id}. {title}
        </h2>
        <p>{description}</p>
        <a href="">Veja mais</a>
      </div>
    </S.Card>
  );
}

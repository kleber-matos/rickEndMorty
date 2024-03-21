/** @format */
// "https://rickandmortyapi.com/api/episode"
import logo from "../../assets/logo.png";
import * as S from "../../styles/styles";
import Seach from "../Seach";

export default function Main() {
  return (
    <S.Main>
      <S.Logo src={logo} alt="logo" />
      <Seach />
    </S.Main>
  );
}

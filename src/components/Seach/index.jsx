/** @format */
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/index";
import * as S from "../../styles/styles";

const Seach = () => {
  const [personagens, setPersonagens] = useState([]);
  const [busca, setBusca] = useState("");
  async function buscaDados() {
    try {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          //console.log(response.data.results);
          setPersonagens(response.data.results);
        });
    } catch (error) {
      console.log("erro", error);
    } finally {
      console.log("finally");
    }
  }

  useEffect(() => {
    buscaDados();
  }, []);

  const searchFilter = personagens.filter((user) =>
    user.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <S.Container>
      <S.Buscas>
        <h3>Personagens</h3>
        <input
          placeholder="buscar personagem..."
          onChange={(e) => setBusca(e.target.value)}
          type="text"
        />
      </S.Buscas>

      <S.BoxCard>
        {searchFilter.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            image={item.image}
            title={item.name}
            description={item.location.name}
          />
        ))}
      </S.BoxCard>
    </S.Container>
  );
};

export default Seach;

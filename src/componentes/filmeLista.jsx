import React from "react";
import styled from "styled-components";
import FilmeCard from "./filmeCard";

const ListaContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;



const FilmeLista = ({ filmes }) => {
  return (
    <ListaContainer>
      {filmes.map((filme) => (
        <FilmeCard key={filme.id} filme={filme} />
      ))}
    </ListaContainer>
  );
};

export default FilmeLista;
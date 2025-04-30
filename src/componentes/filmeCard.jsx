import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  color: white;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  background: #333; /* Cor de fallback */
`;

const CardContent = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0 0 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  color: #f5c518;

  span {
    font-weight: bold;
  }
`;

const DetailsButton = styled.button`
  background: linear-gradient(135deg, #f47521 0%, #e50914 100%);
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
`;

const FilmeCard = ({ filme }) => {
  // Verifica se o filme existe e tem os dados necessários
  if (!filme) return null;

  const posterUrl = filme.poster_path 
    ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Poster+Não+Disponível';

  return (
    <CardContainer>
      <PosterImage 
        src={posterUrl} 
        alt={filme.title ? `Poster de ${filme.title}` : 'Poster de filme'}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/500x750?text=Poster+Não+Disponível';
        }}
      />
      <CardContent>
        <Title>{filme.title || 'Título não disponível'}</Title>
        <Rating>
          ⭐ <span>{filme.vote_average?.toFixed(1) || 'N/A'}</span>
        </Rating>
        <Link to={`/detalhes/${filme.id}`}><DetailsButton>Ver Detalhes</DetailsButton></Link>
        
      </CardContent>
    </CardContainer>
  );
};

export default FilmeCard;   
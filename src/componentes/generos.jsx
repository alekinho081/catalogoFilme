import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos com styled-components
const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

const GenreButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const GenreButton = styled.button`
  background: ${({ active }) => (active ? '#e50914' : '#f0f0f0')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ? '#c40812' : '#ddd')};
  }
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const MovieCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 1rem;
`;

const MovieTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #f5c518;
  font-weight: bold;
  margin-top: 0.5rem;
`;

// Lista de gêneros (você pode buscar isso da API também)
const genres = [
  { id: 28, name: 'Ação' },
  { id: 12, name: 'Aventura' },
  { id: 16, name: 'Animação' },
  { id: 35, name: 'Comédia' },
  { id: 80, name: 'Crime' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Família' },
  { id: 14, name: 'Fantasia' },
  { id: 36, name: 'História' },
  { id: 27, name: 'Terror' },
];

const Generos = () => {
  const [generoEscolhido, setGeneroEscolhido] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Buscar filmes por gênero
  useEffect(() => {
    if (!generoEscolhido) {
      setMovies([]);
      return;
    }

    const fetchMoviesByGenre = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=8b681afdd0f244adfc5679820f8b0c91&with_genres=${generoEscolhido}&language=pt-BR`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [generoEscolhido]);

  const handleGenreClick = (generoId) => {
    setGeneroEscolhido(generoId === generoEscolhido ? null : generoId);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/detalhes/${movieId}`);
  };

  return (
    <Container>
      <Title>Filtrar por Gênero</Title>
      
      <GenreButtons>
        {genres.map((genre) => (
          <GenreButton
            key={genre.id}
            active={generoEscolhido === genre.id}
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </GenreButton>
        ))}
      </GenreButtons>

      {loading && <p>Carregando filmes...</p>}

      {generoEscolhido && !loading && (
        <>
          <h2>
            Filmes de {genres.find(g => g.id === generoEscolhido)?.name}
            {movies.length > 0 && ` (${movies.length})`}
          </h2>
          
          {movies.length > 0 ? (
            <MoviesGrid>
              {movies.map((movie) => (
                <MovieCard key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                  <MoviePoster
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/500x750?text=Poster+Não+Disponível'
                    }
                    alt={movie.title}
                  />
                  <MovieInfo>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieRating>
                      ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
                    </MovieRating>
                  </MovieInfo>
                </MovieCard>
              ))}
            </MoviesGrid>
          ) : (
            <p>Nenhum filme encontrado neste gênero.</p>
          )}
        </>
      )}
    </Container>
  );
};

export default Generos;
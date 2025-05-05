import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Detalhes = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem('favoritos')) || []);

  useEffect(() => {
    const buscarDetalhes = async () => {
      try {
        const resposta = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=8b681afdd0f244adfc5679820f8b0c91&language=pt-BR`
        );
        if (!resposta.ok) throw new Error("Filme não encontrado");
        const dados = await resposta.json();
        setFilme(dados);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    };

    buscarDetalhes();
  }, [id]);

  if (carregando) return <div>Carregando...</div>;
  if (erro) return <div>Erro: {erro}</div>;
  if (!filme) return <div>Filme não encontrado</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
        <img
          src={
            filme.poster_path
              ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
              : "https://via.placeholder.com/500x750?text=Poster+Não+Disponível"
          }
          alt={`Poster de ${filme.title}`}
          style={{ width: "300px", borderRadius: "8px" }}
        />
        <div>
          <h1>{filme.title}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>⭐ {filme.vote_average.toFixed(1)}</span>
            <span>{new Date(filme.release_date).toLocaleDateString()}</span>
          </div>
          <div style={{ 
            margin: "15px 0", 
            display: "flex", 
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            {filme.genres.map((genero) => (
              <div
                key={genero.id}
                style={{
                  background: "#e50914",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {genero.name}
              </div>
            ))}
            
            <FavoriteIcon 
              sx={{
                background: "#e50914",
                color: "white",
                padding: "6px",
                borderRadius: "20px",
                fontSize: "20px",
                height: "38px",
                width: "50px",
                boxSizing: "border-box",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} 
              onClick={() => {
                const novosFavoritos = [...favoritos, filme.id];
                setFavoritos([novosFavoritos])
                localStorage.setItem('favoritos', JSON.stringify(favoritos))

                
                      
              }}
            />

          </div>
          <p style={{ lineHeight: "1.6" }}>{filme.overview}</p>
        </div>
      </div>
      <button
        onClick={() => window.history.back()}
        style={{
          background: "#e50914",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Voltar
      </button>
    </div>
  );
};

export default Detalhes;
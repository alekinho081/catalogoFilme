import React from 'react';
import FilmeLista from './filmeLista';
import { useState, useEffect } from 'react';



const Filmes = () => {
    let [movies, setMovies] = useState([])
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await
                    fetch('https://api.themoviedb.org/3/movie/popular?api_key=8b681afdd0f244adfc5679820f8b0c91');
                const data = await res.json();
                setMovies(data.results);
                console.log(data.results)
            } catch (err) {
                setError('Erro ao carregar filmes.');
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);




    return (
        <div className="filmes-page">
            <h1>Filmes populares</h1>
            <FilmeLista filmes={movies} />
        </div>
    );
};

export default Filmes;
import React from "react";
import Filmes from "../componentes/filmes";

const Home = () => {

    const filmesTeste = [
        {
          id: 1,
          titulo: "Interestelar",
          nota: 8.4,
          posterUrl: "https://image.tmdb.org/t/p/w500/9OI5QafBzi3BZtO1k6eqXckaZvw.jpg",
          ano: 2014
        },
        {
          id: 2,
          titulo: "O Poderoso Chefão",
          nota: 8.7,
          posterUrl: "https://image.tmdb.org/t/p/w500/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
          ano: 1972
        },
        {
          id: 3,
          titulo: "Clube da Luta",
          nota: 8.4,
          posterUrl: "https://image.tmdb.org/t/p/w500/1QfHHRfxt2W8S0v3pUqjFk8QzNe.jpg",
          ano: 1999
        },
        {
          id: 4,
          titulo: "Parasita",
          nota: 8.5,
          posterUrl: "https://image.tmdb.org/t/p/w500/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
          ano: 2019
        },
        {
          id: 5,
          titulo: "Coringa",
          nota: 8.3,
          posterUrl: "https://image.tmdb.org/t/p/w500/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg",
          ano: 2019
        },
        {
          id: 6,
          titulo: "O Senhor dos Anéis: O Retorno do Rei",
          nota: 8.5,
          posterUrl: "https://image.tmdb.org/t/p/w500/mYmIxO9pyT5C1XcGjp8wFZ5XUKr.jpg",
          ano: 2003
        },
        {
          id: 7,
          titulo: "Pulp Fiction",
          nota: 8.5,
          posterUrl: "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
          ano: 1994
        },
        {
          id: 8,
          titulo: "A Origem",
          nota: 8.4,
          posterUrl: "https://image.tmdb.org/t/p/w500/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
          ano: 2010
        },
        {
          id: 9,
          titulo: "Matrix",
          nota: 8.2,
          posterUrl: "https://image.tmdb.org/t/p/w500/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg",
          ano: 1999
        },
        {
          id: 10,
          titulo: "Titanic",
          nota: 7.9,
          posterUrl: "https://image.tmdb.org/t/p/w500/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg",
          ano: 1997
        },
        {
          id: 11,
          titulo: "O Iluminado",
          nota: 8.2,
          posterUrl: "https://image.tmdb.org/t/p/w500/xazWoLeYxG6XSP7H0JU4op5xQFX.jpg",
          ano: 1980
        },
        {
          id: 12,
          titulo: "Os Infiltrados",
          nota: 8.2,
          posterUrl: "https://image.tmdb.org/t/p/w500/lm4xH0YwFbVvTgdtau0thoKRRRi.jpg",
          ano: 2006
        }
      ];

    return( 
        <section>
        <Filmes />    

        </section>


    )
}

export default Home
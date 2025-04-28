import React from "react";
import { Cabecalho } from "./componentes/cabecalho.jsx";
import { Outlet } from "react-router-dom";
import Rodape from "./componentes/rodape.jsx";


export const Layout = () => {
    return(
        <div>
                <Cabecalho />
               
                <main>

                    <Outlet />

                </main>


                
                
                
                <Rodape />

        </div>

    )
}

export default Layout
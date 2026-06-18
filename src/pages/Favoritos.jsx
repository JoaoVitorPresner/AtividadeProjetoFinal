import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Favoritos() {

  const [favoritos,
    setFavoritos] =
    useState([]);

  useEffect(() => {

    const dados =

      JSON.parse(
        localStorage.getItem(
          "favoritos"
        )
      ) || [];

    setFavoritos(dados);

  }, []);

  function removerFavorito(id){

    const novaLista =

      favoritos.filter(
        item =>
        item.id !== id
      );

    setFavoritos(
      novaLista
    );

    localStorage.setItem(
      "favoritos",
      JSON.stringify(
        novaLista
      )
    );

  }

  return (
    <>
      <Header />

      <main
        style={{
          padding:"30px"
        }}
      >

        <h1>
          ⭐ Meus Favoritos
        </h1>

        <br />

        {
          favoritos.length > 0
          ?

          favoritos.map((item)=>(

            <div

              key={item.id}

              style={{

                background:"white",

                padding:"20px",

                borderRadius:"12px",

                marginBottom:"15px",

                boxShadow:
                "0 4px 12px rgba(0,0,0,.1)"

              }}

            >

              <h3>
                💪 {item.nome}
              </h3>

              <p>🎯 {item.categoria}</p>

              <br />

              <button

                onClick={() =>
                  removerFavorito(
                    item.id
                  )
                }

                style={{

                  background:"#dc2626",

                  color:"white",

                  border:"none",

                  padding:"10px",

                  borderRadius:"8px",

                  cursor:"pointer"

                }}

              >

                ❌ Remover

              </button>

            </div>

          ))

          :

          <p>
            Nenhum exercício favoritado.
          </p>

        }

      </main>

      <Footer />
    </>
  );
}
import { Contract, getContractUrl } from "../../constants/contract";

const featuresData = {
  Home: [
    {
      key: "pago",
      header: "PAGA CON DINERO O MATIC",
      content:
        "Fácil y rápido. Recibe tu NFT en tu wallet y si no tienes te \
                explicamos cómo crearte uno. La venta de esta colección \
                estará abierta hasta el 16 de Enero de 2022. ¡Luego no se \
                venderá nunca más!",
      imgSrc: "/images/payment_methods.png",
    },
    {
      key: "disenos",
      header: "24 DISEÑOS EXCLUSIVOS",
      content:
        "“Estrella sobre un volcán dormido” está formada por 24 obras \
                únicas. Cuando compras un NFT, ¡no sabes cuál te va a \
                tocar! Algunas de estas variaciones son menos probables \
                que te toquen, haciendo algunas de ellas más “raras” que \
                otras (esto hace que coleccionar un poco más divertido). \
                ",
      footer: (
        <p>
          <a className="black_link" href="/coleccion">
            En esta página
          </a>{" "}
          puedes ver el porcentaje de rarezas de cada obra.
        </p>
      ),
      imgSrc: "/images/collage.png",
    },
    {
      key: "causa_social",
      header: "APOYO ECONÓMICO A LA PALMA",
      content:
        "En apoyo a la catástrofe humana y material del volcán de \
      La Palma, se donará el 80% de la recaudación al Cabildo \
      de La Palma.",
      footer: (
        <p>
          Lee más sobre la causa social {" "}
          <a className="black_link" href="/causa">
            aquí.
          </a>
        </p>
      ),
      imgSrc: "/images/volcan.png",
    },
    {
      key: "premio_gordo",
      header: "EL PREMIO GORDO: \
      NFT COLECCIONISTA Y LÁMINA FÍSICA",
      content:
        "Entre todos los los dueños de la colección “Estrella sobre \
      un volcán dormido”, se sorteará la única unidad de NFT Coleccionista formado por los colores oro, plata y bronce y su versión \
      física firmada por Octavio del Toro.",
      footer: "",
      imgSrc: "/images/ganador.png",
    },
  ],

  NFT: [
    {
      key: "rarezas",
      header: "RAREZAS",
      content:
        "Cuando compras un NFT, ¡no sabes cuál te va \
      a tocar! Algunas de estas variaciones son\
      menos probable que te toquen, haciendo algunas de ellas más “raras” que otras (esto\
      hace que coleccionar un poco más divertido)",
      footer: "",
      imgSrc: "/images/rarities.png",
    },
    {
      key: "tecnologia",
      header: "TECNOLOGÍA",
      content: (
        <>
          <p>
            <ul>
            <li>Diseño digital: ProCreate en iPad </li>
            <li>
              Cuadro físico: lámina 46x54cm en papel Hahnemühle<br></br>
              Hemp 290g usando tintas pigmentadas minerales
            </li>
            <li>Blockchain: Polygon</li>
            <li>
              <a href={getContractUrl()} target="_blank">
                {"Smart contract"}
              </a>
            </li>
            </ul>
          </p>
        </>
      ),
      footer: "",
      imgSrc: "/images/polygon.png",
    },
    {
      key: "edicion_exclusiva",
      header: "EDICIÓN EXCLUSIVA",
      content:
        "El número de unidades a vender es ilimitado  \
      pero la colección estará abierta hasta el 16 de \
      Enero de 2022. Luego, nunca más se volverán a \
      vender nuevas unidades. Cuando finalice la \
      venta, sortearemos entre todos los participantes el NFT Coleccionista (formado por los colores oro, plata y bronce) y la versión física de la \
      obra.",
      footer: "",
      imgSrc: "/images/exclusive.png",
    },
  ],
  causa: [
    {
      key: "causa",
      header:
        "Los objetivos del proyecto “Estrella sobre un volcán dormido” son:",
      content: (
        <>
          Promover el arte local canario mediante la tecnología blockchain;
          <br></br>
          Democratizar el acceso a la compra de una obra digital a usuarios que
          nunca han comprado un NFT;<br></br>
          Gamificar la venta y apremiar a los compradores con versiones físicas
          y digitales limitadas de la colección;<br></br>
          Visibilizar y apoyar acciones solidarias para los afectados por el
          volcán de La Palma.<br></br>
        </>
      ),
      footer: "",
      imgSrc: "",
    },
  ],
};

export default featuresData;

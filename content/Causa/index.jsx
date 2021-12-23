import {Container, Row, Col} from "react-bootstrap";
import PayCTA from "../../components/PayCTA";
import TeamGrid from "../../components/TeamGrid";


const Causa = () => {
  return (
    <Container>
      <Row className="text-center">
      <h1>Una buena causa</h1>
      </Row>
      
      <Row>
      Los objetivos del proyecto “Estrella sobre un volcán dormido” son:
      <p></p>
      <ul>
        <li>Promover el arte local canario mediante la tecnología blockchain;
        </li>
        <li>Democratizar el acceso a la compra de una obra digital a usuarios 
          que nunca han comprado un NFT;
        </li>
        <li>Gamificar la venta y apremiar a los compradores con versiones físicas 
          y digitales limitadas de la colección;  
        </li>
        <li>
        Visibilizar y apoyar acciones solidarias para los afectados por el volcán de La Palma.
        </li>
      </ul>
      El 80% de la recaudación irá destinada a acciones solidarias para los afectados por el volcán de La Palma.
      </Row>

      <Row className="text-center">
      <h2>Conoce más sobre el proyecto directamente por los fundadores</h2>
      <video width="200p" height="400p" controls>
            <source src="videos/LaPalma_9x16.mp4" type="video/mp4"></source>
          </video>
      </Row>

      <Row className="text-center">
        <h2>NUESTRO EQUIPO</h2>
        <TeamGrid></TeamGrid>
      </Row>


      
      <Row className="text-center" style = {{backgroundColor: "black"}}>
        <h2>CON EL APOYO DE:</h2>

        <Col>
          <img src="/images/lecover.webp" width="200p" height="auto"></img>
        </Col>
        <Col>
          <img src="/images/fotoarte.png" width="200p" height="auto"></img>
        </Col>
      </Row>



      <Row className="text-center">
        <h2>¡HAZTE CON ESTA PIEZA ÚNICA!</h2>
        <PayCTA></PayCTA>
      </Row>
    </Container>
  );
};

export default Causa;

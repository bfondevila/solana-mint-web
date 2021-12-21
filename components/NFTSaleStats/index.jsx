import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";

const NFTSaleStats = () => {

  // temp. Must be filled by backend  
  const totalSales = '5.480€'
  const lastSale = '53 minutos'
  const daysToDeadline = 4
  const hoursToDeadline = 0
  const minToDeadline = 34
  const secToDeadline = 10

  return (
    <Container className="text-center">
      <p>{totalSales} han sido recaudados para La Palma, la última compra hace {lastSale}</p>
      <p>La venta finaliza en {daysToDeadline} días, {hoursToDeadline} horas, {minToDeadline} minutos, {secToDeadline} segundos</p>
    </Container>
  );
};

export default NFTSaleStats;

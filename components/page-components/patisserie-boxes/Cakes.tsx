import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { DefaultWrapper, Paragraph, SubTitle } from "../shared/SharedComponents";

const CakesWrapper = styled(DefaultWrapper)`
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const PaddedCol = styled(Col)`
  padding: 20px;
`;

const Line = styled.hr`
  width: 90%;
  margin: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Cakes = () => (
  <CakesWrapper>
    <Container>
      <Row>
        <PaddedCol md={4}>
          <h3>Chocolate Pecan</h3>
          <Line />
          <Paragraph>Brown Sugar Crumble, Pecan Praline, Chocolate Joconde, Dark Chocolate Mousse, Chocolate Ganache</Paragraph>
        </PaddedCol>
        <PaddedCol md={4}>
          <h3>Mango Almond</h3>
          <Line />
          <Paragraph>Almond Dacquoise, White Chocolate Bavarian Mousse, Mango Compote, Mango Mirror Glaze</Paragraph>
        </PaddedCol>
        <PaddedCol md={4}>
          <h3>St Honore</h3>
          <Line />
          <Paragraph>Vanilla Caramel, Creme Chilboust, Freeze Dried Raspberries</Paragraph>
        </PaddedCol>
      </Row>
    </Container>
  </CakesWrapper>
)
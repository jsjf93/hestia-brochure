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
          <h3>Salted Caramel Hazelnut</h3>
          <Line />
          <Paragraph>Hazelnut mousseline, milk chocolate mousse, hazelnut dacquoise, salted caramel centre</Paragraph>
        </PaddedCol>
        <PaddedCol md={4}>
          <h3>Passionfruit Coconut Tart</h3>
          <Line />
          <Paragraph>Passionfruit pate de fruit, coconut mousse, mango gel, toasted coconut</Paragraph>
        </PaddedCol>
        <PaddedCol md={4}>
          <h3>Carrot Opera</h3>
          <Line />
          <Paragraph>Spiced carrot sponge, layers of lime and cream cheese creme de beurre</Paragraph>
        </PaddedCol>
      </Row>
    </Container>
  </CakesWrapper>
)
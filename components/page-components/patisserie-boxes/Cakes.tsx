import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { DefaultWrapper, Paragraph } from "../shared/SharedComponents";

const CakesWrapper = styled(DefaultWrapper)`
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const PaddedCol = styled(Col)`
  padding: 20px 0;
`;

export const Cakes = () => (
  <CakesWrapper>
    <Container>
      <Row>
        <PaddedCol md={4}>
          <h2>Salted Caramel Hazelnut</h2>
          <Paragraph>Hazelnut mousseline, milk chocolate mousse, hazelnut dacquoise, salted caramel center</Paragraph>
        </PaddedCol>
        <PaddedCol md={4}>
          <h2>Passionfruit Coconut Tart</h2>
          <Paragraph>Passionfruit pate de fruit, coconut mousse, mango gel, toasted coconut</Paragraph>
        </PaddedCol>
        <PaddedCol md={4}>
          <h2>Carrot Opera</h2>
          <Paragraph>Spiced carrot sponge, layers of lime and cream cheese creme de beurre</Paragraph>
        </PaddedCol>
      </Row>
    </Container>
  </CakesWrapper>
)
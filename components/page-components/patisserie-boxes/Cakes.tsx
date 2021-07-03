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

const H3 = styled.h3`
  min-height: 66px;
`;

export const Cakes = () => (
  <CakesWrapper>
    <Container>
      <Row>
        <PaddedCol md={4}>
          <H3>Honey Chamomile</H3>
          <Line />
          <Paragraph>Honey and Chamomile Sponge, Pear Cremeux, Honey Mousse, Honey Glaze</Paragraph>
        </PaddedCol>
        <PaddedCol md={4}>
          <H3>Salted Caramel Peanut Tart</H3>
          <Line />
          <Paragraph>Peanut Mousseline, Salted Caramel Creme Diplomat, Salted Caramel</Paragraph>
        </PaddedCol>
        <PaddedCol md={4}>
          <H3>Black Forest</H3>
          <Line />
          <Paragraph>Chocolate Guinness Sponge, Black Cherry Cremeux, Mascapone Creme Patisserie, Cherry Glaze</Paragraph>
        </PaddedCol>
      </Row>
    </Container>
  </CakesWrapper>
)
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Anchor, DefaultWrapper, Paragraph, SubTitle, TitleWrapper } from '../components/page-components/shared/SharedComponents';

const CenteredParagraph = styled(Paragraph)`
  text-align: center;
`;

const StyledCol = styled(Col)`
  text-align: center;
  font-family: 'Work Sans', sans-serif;
`;

const Image = styled.img`
  width: 100%;
  padding-bottom: 20px;
`;

const SmallTreats = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Small Treats</h1>
      </TitleWrapper>

      <DefaultWrapper>
        <Container>
          <Row>
            <Col md={4}>
              <Image src="images/Cupcakes1.jpg" alt="Cupcakes" />
            </Col>
            <Col md={4}>
              <Image src="images/Cupcakes2.jpg" alt="Cupcakes" />
            </Col>
            <Col md={4}>
              <Image src="images/Cupcakes3.jpg" alt="Cupcakes" />
            </Col>
          </Row>

          <SubTitle>Cupcakes</SubTitle>
          <CenteredParagraph>6 cupcakes from £20</CenteredParagraph>
          <CenteredParagraph>Based on Hestia's signature cake flavours</CenteredParagraph>
          <CenteredParagraph>
            For more elaborate or personalised decoration please get in touch via the <Anchor href='#'>contact</Anchor> page to receive a quote
          </CenteredParagraph>

          <Row>
            <StyledCol sm={4}>&#9679; Madagascan Vanilla</StyledCol>
            <StyledCol sm={4}>&#9679; Sticky Toffee</StyledCol>
            <StyledCol sm={4}>&#9679; Carrot Cream Cheese</StyledCol>
            <StyledCol sm={4}>&#9679; Lemoni</StyledCol>
            <StyledCol sm={4}>&#9679; Peanut Salted Caramel</StyledCol>
            <StyledCol sm={4}>&#9679; Raspberry Pistachio</StyledCol>
            <StyledCol sm={4}>&#9679; Dark Chocolate Cherry</StyledCol>
            <StyledCol sm={4}>&#9679; Triple Chocolate</StyledCol>
            <StyledCol sm={4}>&#9679; Coconut Passionfruit</StyledCol>
            <StyledCol sm={4}>&#9679; Walnut Mocha</StyledCol>
            <StyledCol sm={4}>&#9679; Banana Custard</StyledCol>
          </Row>
        </Container>
      </DefaultWrapper>
    </Layout>
  );
}

export default SmallTreats;

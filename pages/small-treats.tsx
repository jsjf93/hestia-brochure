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

const Subtitle = styled.h2`
  text-align: center;
`;

const Hr = styled.hr`
  margin: 2rem;
`;

const Spacing = styled.div`
  margin: 0 0 20px 0;
`;

const SmallTreats = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Small Treats</h1>
      </TitleWrapper>

      <DefaultWrapper>

        <Container>
          <Subtitle>Cupcakes</Subtitle>
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

          <CenteredParagraph>Based on Hestia's signature cake flavours</CenteredParagraph>

          <br /> 
          
          <CenteredParagraph>6 cupcakes from £20</CenteredParagraph>
          <CenteredParagraph>12 cupcakes from £35</CenteredParagraph>
          <CenteredParagraph>Greater quantities are available on request</CenteredParagraph>

          <br />

          <CenteredParagraph>
            For more elaborate, personalised decoration or larger orders, please get in touch via the <Anchor href='/contact'>contact</Anchor> page to receive a quote.
          </CenteredParagraph>

          <br />

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
            <StyledCol sm={{ span: 4, offset: 4 }}>&#9679; Banana Custard</StyledCol>
          </Row>

          <Hr />

          <Subtitle>Marshmallow Brownies and Blondies</Subtitle>

          <Spacing>
            <CenteredParagraph>A layer of marshmallow fluff sandwiched between two layers of brownie or blondie, what's not to love?!</CenteredParagraph>
            <CenteredParagraph>Available gluten free upon request.</CenteredParagraph>
          </Spacing>

          <Spacing>
            <Row>
              <Col md={4}>
                <Image src="images/pbj-blondie.jpg" alt="PBJ Blondie" />
                <Spacing>
                  <CenteredParagraph>Peanut Butter marshmallow fluff between two layers of brown butter blondie with raspberry pate de fruit and salted peanuts</CenteredParagraph>
                </Spacing>
              </Col>
              <Col md={4}>
                <Image src="images/salted-caramel-brownie.jpg" alt="Salted Caramel Brownie" />
                <Spacing>
                  <CenteredParagraph>Salted caramel marshmallow fluff between two layers of chocolate brownie with salted caramel sauce and chocolate chips</CenteredParagraph>
                </Spacing>
              </Col>
              <Col md={4}>
                <Image src="images/blondie-marshmallow.jpg" alt="Blondies" />
                <Spacing>
                  <CenteredParagraph>Rhubarb marshmallow fluff and vanilla custard between two layers of custard blondie</CenteredParagraph>
                </Spacing>
              </Col>
            </Row>
          </Spacing>

          <CenteredParagraph>All are £15 for a box of 6.</CenteredParagraph>

        </Container>
      </DefaultWrapper>
    </Layout>
  );
}

export default SmallTreats;

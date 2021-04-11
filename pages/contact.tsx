import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Anchor, Paragraph, SubTitle, TitleWrapper } from '../components/page-components/shared/SharedComponents';

const StyledContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  padding: 10px 0;
`;

const BoldParagraph = styled(Paragraph)`
  font-weight: bold;
`;

const StyledCol = styled(Col)`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Contact = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Contact</h1>
      </TitleWrapper>

      <StyledContainer>
        <Row>
          <StyledCol md={5}>
            <h3>To order</h3>
            <Paragraph>Email: <Anchor href="mailto:info@hestia-patisserie">info@hestia-patisserie</Anchor></Paragraph>
            <Paragraph>
              Include information about products you are interesting in ordering from the following pages;&nbsp;
              <Anchor href="/celebration-cakes">Celebration Cakes</Anchor>,&nbsp;
              <Anchor href="/patisserie-boxes">Patisserie Boxes</Anchor>,&nbsp;
              <Anchor href="/afternoon-tea">Afternoon Tea</Anchor>,&nbsp;
              <Anchor href="/smores-kits">S'mores Kits</Anchor>,&nbsp;
              <Anchor href="/tea-cakes">Tea Cakes</Anchor> and&nbsp;
              <Anchor href="/small-treats">Cupcakes</Anchor>,
              or even a bespoke dessert.
            </Paragraph>
            <br />
            <BoldParagraph>Please remember to include any information about allergy or dietary requirements (e.g. dairy, gluten, nuts).</BoldParagraph>
            <Paragraph>Please specify if you would like an order to be delivered or if you would like to collect it.</Paragraph>
            <Paragraph>If you would like an order to be delivered, please include a delivery address.</Paragraph>
            <Paragraph>Please note, most products need at least 5 days notice, for celebration cakes, please book no later than two weeks in advance.</Paragraph>
          </StyledCol>

          <StyledCol md={7}>
            <h3>Delivery map</h3>
            <Paragraph>Central Circle (Wymondham, Morley St Botolph, Ashwellthorpe) = £3</Paragraph>
            <Paragraph>Middle Circle (Central Norwich, Taverham, Banham) = £5</Paragraph>
            <Paragraph>Outer Circle (Acle, Swaffham, Thetford, Diss) = £10</Paragraph>
            <BoldParagraph>Delivery for special, large orders further away can be quoted for</BoldParagraph>
            <Image src="images/DeliveryMapSqr.png" alt="Delivery map" />
          </StyledCol>
        </Row>
      </StyledContainer>
    </Layout>
  );
}

export default Contact;

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

const TeaCakes = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Tea Cakes</h1>
      </TitleWrapper>

      <DefaultWrapper>
        <Container>
          <SubTitle>Smaller cakes based on Hestia's signature flavours</SubTitle>
          <CenteredParagraph>6" sponge (10 - 12 slices).</CenteredParagraph>
          <CenteredParagraph>Prices start from £20.</CenteredParagraph>

          <br />

          <CenteredParagraph>
            For more elaborate or personalised decoration please get in touch via the <Anchor href='#'>contact</Anchor> page to receive a quote.
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
            <StyledCol sm={4}>&#9679; Banana Custard</StyledCol>
          </Row>
        </Container>
      </DefaultWrapper>
    </Layout>
  );
}

export default TeaCakes;

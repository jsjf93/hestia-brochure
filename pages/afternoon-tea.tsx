import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout';
import { BoxInfo } from '../components/page-components/shared/BoxInfo';
import { MonthlySelection } from '../components/page-components/shared/MonthlySelection';
import { DefaultWrapper, Paragraph, TitleWrapper } from '../components/page-components/shared/SharedComponents';

const TextWrapper = styled(DefaultWrapper)`
  padding: 40px 0px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const StyledContainer = styled(Container)`
  padding-top: 30px;

  @media (max-width: 500px) {
    padding-bottom: 30px;
  }
`;

const AfternoonTea = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Afternoon Tea</h1>
      </TitleWrapper>

      <MonthlySelection title="Selection" image="images/afternoon-tea.JPG" />

      <TextWrapper>
        <BoxInfo />
        <StyledContainer>
          <Row>
            <Col sm={6}>
              <Paragraph>2 x Sour Cherry and Almond Scones</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Banana Chocolate Macarons</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Clotted Cream</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Strawberry Jam</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Peanut Butter Blondie, Raspberry Jelly, Chocolate Marshmallow Stack</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Whipped White Chocolate Ganache and Lemon Curd</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Clipper English Breakfast Tea Bags</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Hibuscus Rhubard and Custard Financier</Paragraph>
            </Col>
          </Row>
        </StyledContainer>
      </TextWrapper>
    </Layout>
  );
}

export default AfternoonTea;

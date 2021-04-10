import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout';
import { MonthlySelection } from '../components/page-components/shared/MonthlySelection';
import { DefaultWrapper, Paragraph, TitleWrapper } from '../components/page-components/shared/SharedComponents';

const TextWrapper = styled(DefaultWrapper)`
  padding: 40px 20px;
  text-align: center;
`;


const AfternoonTea = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Afternoon Tea</h1>
      </TitleWrapper>

      <MonthlySelection title="Selection" image="images/afternoon-tea.JPG" />

      <TextWrapper>
        <h3>Afternoon Tea Box feeds two people</h3>

        <Container>
          <Row>
            <Col sm={6}>
              <Paragraph>2 x Sour Cherry and Almond Scones</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Banoffee Macarons</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Clotted Cream</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Peanut Butter Stack</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Strawberry Jam</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Lemon Cheesecake with Whipped White Chocolate</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Clipper English Breakfast Tea Bags</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Rhubard and Custard Financier</Paragraph>
            </Col>
          </Row>
        </Container>
      </TextWrapper>
    </Layout>
  );
}

export default AfternoonTea;

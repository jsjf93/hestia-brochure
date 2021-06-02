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
        <h1>Sweet Afternoon Tea</h1>
      </TitleWrapper>

      <MonthlySelection title="Selection" image="images/afternoon-tea.JPG" disableMonth={false} />

      <TextWrapper>
        <BoxInfo price="£25" />
        <StyledContainer>
          <Row>
            <Col sm={6}>
              <Paragraph>2 x Lemon and Blueberry Scones</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Tiptree Lemon Curd</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Clotted Cream</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Semi Frozen Peanut Butter and Banana Cheesecake</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Caramel Latte Macarons</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Lime and Coconut Tartlets</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x Mini Victoria Sponges</Paragraph>
            </Col>
            <Col sm={6}>
              <Paragraph>2 x English Breakfast Clipper Tea Bags</Paragraph>
            </Col>
          </Row>
        </StyledContainer>
      </TextWrapper>
    </Layout>
  );
}

export default AfternoonTea;

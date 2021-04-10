import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TitleWrapper } from '../components/page-components/shared/SharedComponents';
import { SmoresKit } from '../components/page-components/smores-kits/SmoresKit';

const kits = [
  {
    image: 'images/VanillaMarshmallowSqr.jpg',
    text: ['8 x Vanilla Bean Marshmallow', '16 x Graham Crackers', '100g Dark Chocolate Ganache', '2 x Tea lights', '8 x Wooden Skewers'],
    alt: 'Vanilla Bean Marshmallow Kit',
    price: '£15',
  },
  {
    image: 'images/MixedMarshmallowSqr.jpg',
    text: ['4 x Vanilla Bean Marshmallow', '4 x Strawberry and Basil Marshmallow', '16 x Graham Crackers', '100g Dark Chocolate Ganache', '100g Salt and Pepper Ganache', '2 x Tea lights', '8 x Wooden Skewers'],
    alt: 'Vanilla Bean Marshmallow Kit',
    price: '£20',
  },
  {
    image: 'images/StrawberryMarshmallowSqr.jpg',
    text: ['8 x Strawberry and Basil Marshmallow', '16 x Graham Crackers', '100g Salt and Pepper Chocolate Ganache', '2 x Tea lights', '8 x Wooden Skewers'],
    alt: 'Vanilla Bean Marshmallow Kit',
    price: '£16',
  },
]

const StyledContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const SmoresKits = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>S'Mores Kits</h1>
      </TitleWrapper>
      
      <StyledContainer>
        <Row>
          {kits.map(kit => (
            <Col md={4} key={kit.image}>
              <SmoresKit {...kit} />
            </Col>
          ))}
        </Row>
      </StyledContainer>
    </Layout>
  );
}

export default SmoresKits;

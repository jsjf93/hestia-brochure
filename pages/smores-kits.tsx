import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout';
import { TitleWrapper } from '../components/page-components/shared/SharedComponents';
import { SmoresKit } from '../components/page-components/smores-kits/SmoresKit';

const kits = [
  {
    image: 'images/ChocolateMarshmallowSqr.jpg',
    text: ['8 x Chocolate Marshmallows', 'Graham Crackers', 'Milk Chocolate Shards'],
    alt: 'Chocolate Marshmallow Kit',
    price: '£15',
  },
  {
    image: 'images/VanillaMarshmallowSqr.jpg',
    text: ['8 x Vanilla Bean Marshmallows', 'Graham Crackers', '100g Dark Chocolate Shards'],
    alt: 'Vanilla Bean Marshmallow Kit',
    price: '£15',
  },
  {
    image: 'images/RaspberryMarshmallowSqr.jpg',
    text: ['8 x Raspberry and Champagne Marshmallows', 'Graham Crackers', 'White Chocolate Shards'],
    alt: 'Raspberry Marshmallow Kit',
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

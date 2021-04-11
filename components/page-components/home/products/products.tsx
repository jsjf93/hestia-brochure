import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Product from '../product/product';

const categories: { image: string, text: string }[] = [
  {
    image: '/images/SquareChocolateDrip.jpg',
    text: 'Celebration Cakes'
  },
  {
    image: '/images/SquarePat.jpg',
    text: 'Patisserie Boxes'
  },
  {
    image: '/images/SquareAT.jpg',
    text: 'Afternoon Tea Boxes'
  },
  {
    image: '/images/SquareMallow.jpg',
    text: 'S\'mores Kits'
  },
  {
    image: '/images/SquareCarrot.jpg',
    text: 'Tea Cakes'
  },
  {
    image: '/images/SquareCupcake.jpg',
    text: 'Cupcakes'
  },
];

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Products() {
  return (
      <StyledContainer>
        <Row>
          {categories.map(item => (
            <Col sm={4} key={item.image}>
              <Product image={item.image} text={item.text} />
            </Col>
          ))}
        </Row>
      </StyledContainer>
  );
}

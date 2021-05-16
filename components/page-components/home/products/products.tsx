import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Product from '../product/product';

const categories: { image: string, text: string, link: string }[] = [
  {
    image: '/images/SquareChocolateDrip.jpg',
    text: 'Celebration Cakes',
    link: '/celebration-cakes',
  },
  {
    image: '/images/SquarePat.jpg',
    text: 'Patisserie Boxes',
    link: '/patisserie-boxes',
  },
  {
    image: '/images/SquareAT.jpg',
    text: 'Afternoon Tea Boxes',
    link: '/afternoon-tea',
  },
  {
    image: '/images/SquareMallow.jpg',
    text: 'S\'mores Kits',
    link: '/smores-kits',
  },
  {
    image: '/images/SquareCarrot.jpg',
    text: 'Tea Cakes',
    link: '/tea-cakes',
  },
  {
    image: '/images/SquareCupcake.jpg',
    text: 'Small Treats',
    link: '/small-treats',
  },
];

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledCol = styled(Col)`
  margin-bottom: 50px;
`;

export default function Products() {
  return (
      <StyledContainer>
        <Row>
          {categories.map(item => (
            <StyledCol md={4} key={item.image}>
              <Product image={item.image} text={item.text} link={item.link} />
            </StyledCol>
          ))}
        </Row>
      </StyledContainer>
  );
}

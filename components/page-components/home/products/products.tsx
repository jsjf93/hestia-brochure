import { Container } from "react-bootstrap";
import { ProductData } from "../../../../common/interfaces";
import Product from '../product/product';

const categories: { image: string, text: string }[] = [
  {
    image: '/images/brownbuttersponge.png',
    text: 'Celebration Cakes'
  },
  {
    image: '/images/chocolateguinness.png',
    text: 'Patisserie Boxes'
  },
  {
    image: '/images/cinnamonbun.png',
    text: 'Afternoon Tea Boxes'
  },
  {
    image: '/images/lemonmeringue.png',
    text: 'S\'mores Kits'
  },
  {
    image: '/images/saltedcaramel.png',
    text: 'Tea Cakes'
  },
  {
    image: '/images/vanillasponge.png',
    text: 'Small Treats'
  },
];

export default function Products() {
  return (
      <Container style={styles.productsContainer}>
        {categories.map(item => (
          <Product key={item.image} image={item.image} text={item.text} />
        ))}
      </Container>
  );
}

const styles = {
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  } as React.CSSProperties,
  buttonContainer: {
    width: '100%',
    textAlign: 'center',
    fontSize: '32px',
    padding: '20px 0 40px 0'
  } as React.CSSProperties
};

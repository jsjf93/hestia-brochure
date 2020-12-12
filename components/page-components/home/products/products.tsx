import Link from "next/link";
import { Container } from "react-bootstrap";
import Product from '../product/product';

export default function Products() {
  return (
    <>
      <Container style={styles.productsContainer}>
        <Product image={'/cakes/saltedcaramel.png'} text="Salted Caramel Brownie" cost="£4.00" />
        <Product image={'/cakes/chocolateguinness.png'} text="Chocolate Guiness Cake" cost="£4.00" />
        <Product image={'/cakes/brownbuttersponge.png'} text="Brown Butter Spongecake" cost="£4.00" />
        <Product image={'/cakes/cinnamonbun.png'} text="Cinnamon Bun" cost="£4.00" />
        <Product image={'/cakes/lemonmeringue.png'} text="Lemon Meringue" cost="£4.00" />
        <Product image={'/cakes/vanillasponge.png'} text="Vanilla Spongecake" cost="£4.00" />
      </Container>

      <div style={styles.buttonContainer}>
        <Link href="/">
          <a>More...</a>
        </Link>
      </div>
    </>
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
    padding: "20px 0"
  } as React.CSSProperties
};

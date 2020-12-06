import { Container } from "react-bootstrap";
import Product from '../product/product';

export default function Products() {
  return (
    <Container>
      <Product image={'/cakes/saltedcaramel.png'} text="Salted Caramel Brownie" cost="£4.00" />
    </Container>
  );
}

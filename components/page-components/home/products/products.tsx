import Link from "next/link";
import { Container } from "react-bootstrap";
import { ProductData } from "../../../../common/interfaces";
import Product from '../product/product';

type Props = {
  allProductsData: ProductData[];
}

export default function Products(props: Props) {
  return (
    <>
      <Container style={styles.productsContainer}>
        {props.allProductsData.map(cake => (
          <Product key={cake.id} image={cake.image} text={cake.name} cost={cake.price} />
        ))}
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
    padding: '20px 0 40px 0'
  } as React.CSSProperties
};

import { GetStaticProps } from 'next';
import { Jumbotron } from 'react-bootstrap';
import { ProductData } from '../common/interfaces';
import Button from '../components/form-components/button/button';
import Layout from '../components/layout';
import About from '../components/page-components/home/about-row/about';
import Information from '../components/page-components/home/information-row/information';
import Products from '../components/page-components/home/products/products';
import { useWindowSize } from '../hooks/useWindowSize';
import { getProductsData } from '../lib/products';

type Props = {
  allProductsData: ProductData[];
}

export default function Home() {
  const size = useWindowSize();
  const matches = size?.width <= 768;

  return (
    <Layout>
      <Jumbotron style={styles.jumbotron(matches) as React.CSSProperties} />

      <Products />
      <About />
      <Information />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allProductsData = getProductsData();

  return {
    props: {
      allProductsData
    }
  };
}

const styles = {
  jumbotron: (smallWindow: boolean) => ({
    background: `url('./hero-cake.jpg')`,
    backgroundSize: 'cover',
    height: smallWindow ? 300 : 500,
    width: '100%',
    backgroundPosition: smallWindow ? '0% 20%' : '20% 10%',
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  })
};

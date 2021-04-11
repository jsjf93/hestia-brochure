import { GetStaticProps } from 'next';
import { Jumbotron } from 'react-bootstrap';
import Layout from '../components/layout';
import About from '../components/page-components/home/about-row/about';
import Information from '../components/page-components/home/information-row/information';
import Products from '../components/page-components/home/products/products';
import { useWindowSize } from '../hooks/useWindowSize';
import { getProductsData } from '../lib/products';

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

const styles = {
  jumbotron: (smallWindow: boolean) => ({
    background: `url('./images/hero-domes.jpg')`,
    backgroundSize: 'cover',
    height: smallWindow ? 250 : 450,
    width: '100%',
    backgroundPosition: smallWindow ? '40% 40%' : '40% 40%',
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  })
};

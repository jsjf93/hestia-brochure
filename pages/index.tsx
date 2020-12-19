import { useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Button from '../components/form-components/button/button';
import Layout from '../components/layout';
import About from '../components/page-components/home/about-row/about';
import Information from '../components/page-components/home/information-row/information';
import Products from '../components/page-components/home/products/products';
import { useWindowSize } from '../hooks/useWindowSize';

export default function Home() {
  const size = useWindowSize();
  const matches = size?.width <= 768;

  return (
    <Layout>
      <Jumbotron style={styles.jumbotron(matches) as React.CSSProperties}>
        <h1>Hero text here</h1>
        <h2>Text here</h2>
        <Button
          variant='primary'
          color='white'
          text='CALL TO ACTION'
          onClick={() => undefined}
        />
      </Jumbotron>

      <Products />
      <About />
      <Information />
    </Layout>
  );
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

import { useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Button from '../components/form-components/button/button';
import Layout from '../components/layout';
import About from '../components/page-components/home/about-row/about';
import Information from '../components/page-components/home/information-row/information';
import Products from '../components/page-components/home/products/products';

export default function Home() {
  let mediaMatch: MediaQueryList;

  if (typeof window !== 'undefined') {
    mediaMatch = window.matchMedia('(max-width: 768px)');
  }
  const [matches, setMatches] = useState(!!mediaMatch?.matches);

  useEffect(() => {
    const handler = event => setMatches(event.matches);
    mediaMatch.addEventListener('change', handler);

    return () => mediaMatch.removeEventListener('change', handler);
  }, []);

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

import { Jumbotron } from 'react-bootstrap';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div style={{ background: `url('./hero-cake.jpg')`, backgroundSize: 'cover', height: 500, width: '100%' }}>
      </div>
    </Layout>
  );
}


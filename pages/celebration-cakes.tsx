import styled from 'styled-components'
import Layout from '../components/layout';
import { Cakes } from '../components/page-components/celebration-cakes/Cakes';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;

const Celebration = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Celebration Cakes</h1>
      </Wrapper>
      <Cakes />
    </Layout>
  );
}

export default Celebration;

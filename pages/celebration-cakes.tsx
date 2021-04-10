import styled from 'styled-components'
import Layout from '../components/layout';
import { AllergyHelp } from '../components/page-components/celebration-cakes/AllergyHelp';
import { Cakes } from '../components/page-components/celebration-cakes/Cakes';
import { Pricing } from '../components/page-components/celebration-cakes/Pricing';
import { secondary } from '../styles/settings/colors';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${secondary.alabaster};
`;

const Celebration = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Celebration Cakes</h1>
      </TitleWrapper>
      <Cakes />
      <AllergyHelp />
      <Pricing />
    </Layout>
  );
}

export default Celebration;

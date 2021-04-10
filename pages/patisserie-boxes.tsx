import styled from 'styled-components';
import Layout from '../components/layout';
import { Cakes } from '../components/page-components/patisserie-boxes/Cakes';
import { MonthlySelection } from '../components/page-components/shared/MonthlySelection';
import { AlabasterWrapper, Paragraph, TitleWrapper } from '../components/page-components/shared/SharedComponents';

const TextWrapper = styled(AlabasterWrapper)`
  padding: 40px 0;
  text-align: center;
`;

const Patisserie = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Patisserie</h1>
      </TitleWrapper>

      <MonthlySelection title="Selection Box" image="images/petisserie.jpg" />

      <TextWrapper>
        <Paragraph>Each box contains two of each dessert.</Paragraph>
        <Paragraph>£20</Paragraph>
        <Paragraph>Available for collection or local delivery every two weeks. Please enquire for dates</Paragraph>
      </TextWrapper>

      <Cakes />
    </Layout>
  );
}

export default Patisserie;

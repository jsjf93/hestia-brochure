import styled from 'styled-components';
import Layout from '../components/layout';
import { Cakes } from '../components/page-components/patisserie-boxes/Cakes';
import { PatisserieBox } from '../components/page-components/patisserie-boxes/PatisserieBox';
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

      <PatisserieBox />

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

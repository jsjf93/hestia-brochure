import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Cakes } from '../components/page-components/patisserie-boxes/Cakes';
import { BoxInfo } from '../components/page-components/shared/BoxInfo';
import { MonthlySelection } from '../components/page-components/shared/MonthlySelection';
import { DefaultWrapper, TitleWrapper } from '../components/page-components/shared/SharedComponents';

const TextWrapper = styled(DefaultWrapper)`
  padding: 40px 0px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const StyledContainer = styled(Container)`
  padding-top: 30px;

  @media (max-width: 500px) {
    padding-bottom: 30px;
  }
`;

const Patisserie = () => {
  return (
    <Layout>
      <TitleWrapper>
        <h1>Patisserie</h1>
      </TitleWrapper>

      <MonthlySelection title="Selection Box" image="images/petisserie.jpg" disableMonth={true} />

      <TextWrapper>
        <BoxInfo price="£20" />
        <StyledContainer>
          <Cakes />
        </StyledContainer>
      </TextWrapper>
    </Layout>
  );
}

export default Patisserie;

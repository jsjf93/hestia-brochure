import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import InfoItem from '../home/information-row/info-item';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Cakes = () => (
  <Container>
    <Wrapper>
      {cakes.map(cake => (
        <InfoItem key={cake.text} {...cake} />
      ))}
    </Wrapper>
  </Container>
);

const cakes: { text: string, image: string }[] = [
  { text: 'Madasccan Raspberry', image: 'images/cakeicons/MadasccanRaspberry.png' },
  { text: 'Dark Chocolate Cherry', image: 'images/cakeicons/DarkChocolateCherry.png' },
  { text: 'Lemon', image: 'images/cakeicons/Lemon.png' },
  { text: 'Coconut and Passionfruit', image: 'images/cakeicons/CoconutAndPassionfruit.png' },
  { text: 'Raspberry Pistachio', image: 'images/cakeicons/RaspberryPistachio.png' },
  { text: 'Triple Chocolate', image: 'images/cakeicons/TripleChocolate.png' },
  { text: 'Banana Custard', image: 'images/cakeicons/BananaCustard.png' },
  { text: 'Walnut', image: 'images/cakeicons/WalnutMocha.png' },
  { text: 'Carrot', image: 'images/cakeicons/Carrot.png' },
  { text: 'Peanut Caramel', image: 'images/cakeicons/PeanutCaramel.png' },
  { text: 'Sticky Toffee', image: 'images/cakeicons/StickyToffee.png' },
];

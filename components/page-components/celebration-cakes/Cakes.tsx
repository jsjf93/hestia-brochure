import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import InfoItem from '../home/information-row/info-item';

const StyledContainer = styled(Container)`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const cakes = [
  { text: 'Vanilla bean sponge layered with vanilla buttercream and raspberry jam', title: 'Madagascan Raspberry', image: 'images/cakeicons/MadasccanRaspberry.png' },
  { text: 'Chocolate guinness sponge layered with dark chocolate cremeaux and black cherry jam', title: 'Dark Chocolate Cherry', image: 'images/cakeicons/DarkChocolateCherry.png' },
  { text: 'Lemon sponge layered with lemon buttercream and lemon curd', title: 'Lemoni', image: 'images/cakeicons/Lemon.png' },
  { text: 'Coconut sponge layered with passionfruit curd and coconut buttercream', title: 'Coconut and Passionfruit', image: 'images/cakeicons/CoconutAndPassionfruit.png' },
  { text: 'Pistachio sponge layered with raspberry cremeaux and pistachio buttercream', title: 'Raspberry Pistachio', image: 'images/cakeicons/RaspberryPistachio.png' },
  { text: 'Chocolate sponge layered with chocolate cremeaux and white chocolate buttercream', title: 'Triple Chocolate', image: 'images/cakeicons/TripleChocolate.png' },
  { text: 'Banana sponge layered with vanilla custard and caramel buttercream', title: 'Banana Custard', image: 'images/cakeicons/BananaCustard.png' },
  { text: 'Coffee and walnut sponge layered with chocolate ganache and coffee buttercream', title: 'Walnut', image: 'images/cakeicons/WalnutMocha.png' },
  { text: 'Spiced carrot sponge layered with cream cheese buttercream and carrot jam', title: 'Carrot Cream Cheese', image: 'images/cakeicons/Carrot.png' },
  { text: 'Brown butter sponge layered with peanut ganache and salted caramel buttercream', title: 'Peanut Salted Caramel', image: 'images/cakeicons/PeanutCaramel.png' },
  { text: 'Sticky toffee sponge layered with toffee buttercream and toffee sauce', title: 'Sticky Toffee', image: 'images/cakeicons/StickyToffee.png' },
  { text: 'Custom orders are welcome too!', title: 'Custom cake', image: 'images/cakeicons/Custom.png' },
];

export const Cakes = () => (
  <StyledContainer>
    <Row>
      {cakes.map(cake => (
        <Col key={cake.image} sm={4}>
          <InfoItem {...cake} />
        </Col>
      ))}
    </Row>
  </StyledContainer>
);


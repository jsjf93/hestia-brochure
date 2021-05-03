import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Anchor } from '../../shared/SharedComponents';

const StyledCard = styled(Card)`
  text-align: center;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 90%;
  height: auto;
`;

const Title = styled(Card.Title)`
  font-size: 24px;
  margin: 0;
  padding: 10px 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);

  ${StyledCard}:hover & {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
  }
`;

type Props = {
  image: string;
  text: string;
  link: string;
}

export default function Product(props: Props) {
  return (
    <Anchor href={props.link}>
      <StyledCard>
        <Img src={props.image} alt={props.text} />
        <Title>{props.text}</Title>
      </StyledCard>
    </Anchor>
  );
}

import styled from "styled-components";
import { Paragraph } from "../shared/SharedComponents";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  padding-bottom: 20px;
`;

const Price = styled(Paragraph)`
  font-weight: bold;
`;

const Line = styled.hr`
  width: 30px;
  margin: 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

type Props = {
  image: string;
  text: string[];
  price: string;
  alt: string;
};

export const SmoresKit = ({ image, text, price, alt }: Props) => {
  return (
    <Wrapper>
      <Image src={image} alt={alt} />
      {text.map(t => <Paragraph key={t}>{t}</Paragraph>)}
      <Line />
      <Price>{price}</Price>
    </Wrapper>
  )
};

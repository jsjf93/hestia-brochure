import styled from "styled-components";
import { AlabasterWrapper, Paragraph } from "./SharedComponents";

const TextWrapper = styled(AlabasterWrapper)`
  padding: 40px 0;
  text-align: center;
`;

type Props = {
  price: string;
}

export const BoxInfo = ({ price }: Props) => (
  <TextWrapper>
    <Paragraph>Each box contains two of each dessert.</Paragraph>
    <Paragraph>{price}</Paragraph>
    <Paragraph>Available for collection or local delivery Tuesday to Saturday. Please enquire to book.</Paragraph>
  </TextWrapper>
);

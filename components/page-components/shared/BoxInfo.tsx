import styled from "styled-components";
import { AlabasterWrapper, Paragraph } from "./SharedComponents";

const TextWrapper = styled(AlabasterWrapper)`
  padding: 40px 0;
  text-align: center;
`;

export const BoxInfo = () => (
  <TextWrapper>
    <Paragraph>Each box contains two of each dessert.</Paragraph>
    <Paragraph>£25</Paragraph>
    <Paragraph>Available for collection or local delivery every two weeks. Please enquire for dates.</Paragraph>
  </TextWrapper>
);

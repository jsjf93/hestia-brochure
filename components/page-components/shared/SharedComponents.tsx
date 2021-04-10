import styled from "styled-components";
import { secondary } from "../../../styles/settings/colors";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${secondary.alabaster};
`;

export const Paragraph = styled.p`
  font-family: 'Work Sans', 'sans-serif';
  margin-bottom: 0;
`;

export const DefaultWrapper = styled.div`
  padding: 20px 0;
`;

export const AlabasterWrapper = styled(DefaultWrapper)`
  background-color: ${secondary['alabaster']};
`;

export const SubTitle = styled.h2`
  text-align: center;
`;

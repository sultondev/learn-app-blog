import styled from "styled-components";

interface Props {
  className?: string;
  color?: string;
  borderClr?: string;
  bgClr?: string;
  padding?: string;
}
export const TagWrapper = styled.button`
  color: ${(props: Props) => props?.color || "black"};
  background-color: ${(props: Props) => props?.bgClr || "#f1f1f1"};
  border-radius: 12px;
  margin-right: 4px;
  border: 1px solid ${(props: Props) => props?.borderClr || "none"};
  line-height: auto;
  padding: ${(props: Props) => props?.padding || "2px 8px"};
`;

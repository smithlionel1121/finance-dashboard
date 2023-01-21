import styled from "styled-components";

export const Table = styled.table`
  border: thin solid black;
`;

export const Th = styled.th`
  padding: 8px 12px;
`;

export const Td = styled.td<{ isCurrency?: boolean }>`
  padding: 8px 12px;
  ${(props) => props.isCurrency && "text-align: end;"}
`;

export const THead = styled.thead`
  border: thin solid black;
  background: black;
  color: white;
`;
export const TBody = styled.tbody`
  border: thin solid black;
`;

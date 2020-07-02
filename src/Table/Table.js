import React from "react";
import styled from "styled-components";
import { getColor } from "../utils/colors";
import { defaultTheme } from "../Theme";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

export const StyledThead = styled.thead`
  border-bottom: 2px solid
    ${({ theme, color = "default" }) => getColor({ theme, color })};
`;

StyledThead.defaultProps = {
  theme: defaultTheme,
};

export const StyledTh = styled.th`
  font-size: 16px;
  color: ${({ theme, color = "default" }) => getColor({ theme, color })};
  text-align: center;
  padding-bottom: 15px;
`;

StyledTh.defaultProps = {
  theme: defaultTheme,
};

export const StyledTd = styled.td`
  font-size: 16px;
  color: ${({ theme, color }) => getColor({ theme, color })};
  text-align: center;
  padding-top: 15px;
`;

StyledTd.defaultProps = {
  theme: defaultTheme,
};

export const StyledTr = styled.tr``;

const Table = ({
  headers = [],
  onHeaderClick = () => {},
  data = [],
  emptyTableText = "No hay resultados",
  Thead: CustomThead = StyledThead,
  Th: CustomTh = StyledTh,
  Td: CustomTd = StyledTd,
  Tr: CustomTr = StyledTr,
  className,
}) => {
  return (
    <StyledTable className={className}>
      <CustomThead>
        <tr>
          {headers.map((header, key) => (
            <CustomTh key={key} onClick={() => onHeaderClick(header)}>
              {header.name}
            </CustomTh>
          ))}
        </tr>
      </CustomThead>
      <tbody>
        {data.length > 0 ? (
          data.map((dataRow, key) => (
            <CustomTr key={key}>
              {headers.map((header, key) => (
                <CustomTd key={key}> {dataRow[header.property]}</CustomTd>
              ))}
            </CustomTr>
          ))
        ) : (
          <CustomTr>
            <CustomTd colSpan={headers.length + 1}>{emptyTableText}</CustomTd>
          </CustomTr>
        )}
      </tbody>
    </StyledTable>
  );
};

export default Table;

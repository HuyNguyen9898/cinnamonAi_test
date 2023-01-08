import styled from "styled-components"

export const TableWrapper = styled.div<{ height: number }>`
  position: relative;
  overflow: auto;
  height: ${({ height }) => height? `${height}px` : "unset"};
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;   /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TableComponent = styled.table`
  table-layout: auto;
  width: 100%;
  border-spacing: unset;
`

export const TableHead = styled.thead`
  height: 44px;
  font-size: 14px;
  line-height: 19px;
`

export const HeadColumn = styled.th`
  text-align: start;
  padding: 0 0 0 24px;
`

export const TableBody = styled.tbody`
  background-color: #fff;
`

export const NoData = styled.div`
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const TableRow = styled.tr<{ isSelected?: boolean }>`
  background-color: ${({ isSelected }) => isSelected? "#ebf8ff !important" : "transparent"};
  
  &:hover {
    background-color: #f7fafc;
  }
`

export const TableData = styled.td`
  height: 59px;
  padding: 0 0 0 24px;
  border-top: 1px solid #d4d4d4;
  font-size: 14px;
  line-height: 19px;
`

export const CheckBox = styled.input`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  margin: 0;
  outline: none;
`
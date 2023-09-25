import styled from '@emotion/styled'

type SelectableTableCellProps = {
  selected: boolean
}

type SelectableTableHeaderProps = {
  width?: number
}

const SelectableTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const SelectableTableHeader = styled.th<SelectableTableHeaderProps>`
  cursor: pointer;
  width: ${(props) => (props.width ? props.width + 'px' : 'auto')};

  svg {
    display: inline-block;
    position: relative;
    top: 6px;
  }
`

const SelectableTableRow = styled.tr``

const SelectableTableCell = styled.td<SelectableTableCellProps>`
  padding: 10px;
  background: ${(props) => (props.selected ? '#666666' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  cursor: pointer;
`

export {
  SelectableTable,
  SelectableTableHeader,
  SelectableTableCell,
  SelectableTableRow,
}

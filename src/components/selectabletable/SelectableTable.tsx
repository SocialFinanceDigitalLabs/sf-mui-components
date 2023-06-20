import React, { useState } from 'react'

import {
  SelectableTable as SelectableTableComponent,
  SelectableTableRow,
  SelectableTableCell,
} from './SelectableTable.styles'

export interface SelectableTableProps {
  rows: unknown[][]
  headers: string[]
  onRowSelect: (row: unknown[]) => void
}

const SelectableTable = (props: SelectableTableProps): JSX.Element => {
  const { rows, onRowSelect, headers } = props

  const [selectedRow, setSelectedRow] = useState<null | string>(null)

  const renderCell = (
    cell: string,
    idx: number,
    key: string,
    row: unknown[]
  ) => {
    return (
      <SelectableTableCell
        selected={key === selectedRow}
        key={`${key}-${idx}`}
        onClick={() => {
          setSelectedRow(key)
          onRowSelect(row)
        }}
      >
        {cell}
      </SelectableTableCell>
    )
  }

  const renderRow = (row: unknown[], idx: number) => {
    const key = `row-${row[0]}-${idx}`

    return (
      <SelectableTableRow key={key}>
        {row.map((cell, cidx) => {
          return renderCell(cell as string, cidx, key, row)
        })}
      </SelectableTableRow>
    )
  }

  return (
    <SelectableTableComponent>
      <thead>
        <tr>
          {headers.map((header) => {
            return (
              <th key={`selectable-table-header-header-${header}`}>{header}</th>
            )
          })}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, idx) => {
          return renderRow(row, idx)
        })}
      </tbody>
    </SelectableTableComponent>
  )
}

export default SelectableTable

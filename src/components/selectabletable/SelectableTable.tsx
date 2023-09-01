import React, { useState, useEffect } from 'react'

import {
  SelectableTable as SelectableTableComponent,
  SelectableTableHeader,
  SelectableTableRow,
  SelectableTableCell,
} from './SelectableTable.styles'

export interface SelectableTableProps {
  rows: unknown[][]
  headers: string[]
  onRowSelect: (row: unknown[], selectedRowKey: string | null) => void
  initiallySelectedRow?: string
}

const SelectableTable = (props: SelectableTableProps): JSX.Element => {
  const { rows, onRowSelect, headers, initiallySelectedRow } = props

  const initialRows = () => {
    return [...rows].map((row: unknown[], idx) => {
      row.push(idx)

      return row // return row with the static key added as an extra element at the end of the array
    })
  }

  const [rowSet, setRowSet] = useState<unknown[][]>(initialRows)

  const [selectedRow, setSelectedRow] = useState<null | string>(
    initiallySelectedRow || null
  )

  const sortRows = (col: number): void => {
    const sortedRows = [...rowSet].sort((a, b) => {
      if (a[col] === b[col]) {
        return 0
      }

      // eslint-disable-next-line
      // @ts-ignore
      return a[col] < b[col] ? -1 : 1
    })

    setRowSet(sortedRows)
  }

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
          const value = key === (selectedRow as string) ? null : key
          setSelectedRow(value)
          onRowSelect(row, value)
        }}
      >
        {cell}
      </SelectableTableCell>
    )
  }

  const renderRow = (row: unknown[]) => {
    const key = `row-${row[row.length - 1]}`

    return (
      <SelectableTableRow key={key}>
        {row.map((cell, cidx) => {
          if (cidx === row.length - 1) {
            return null
          }
          return renderCell(cell as string, cidx, key, row)
        })}
      </SelectableTableRow>
    )
  }

  return (
    <SelectableTableComponent>
      <thead>
        <tr>
          {headers.map((header, idx) => {
            return (
              <SelectableTableHeader
                key={`selectable-table-header-header-${header}`}
                onClick={() => {
                  sortRows(idx)
                }}
              >
                {header}
              </SelectableTableHeader>
            )
          })}
        </tr>
      </thead>

      <tbody>
        {rowSet.map((row) => {
          return renderRow(row)
        })}
      </tbody>
    </SelectableTableComponent>
  )
}

export default SelectableTable

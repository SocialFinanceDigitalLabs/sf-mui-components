import React, { useState, useEffect } from 'react'

import {
  SelectableTable as SelectableTableComponent,
  SelectableTableHeader,
  SelectableTableRow,
  SelectableTableCell,
} from './SelectableTable.styles'

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'

export interface SelectableTableProps {
  rows: unknown[][]
  headers: string[] | HeaderItem[]
  onRowSelect: (row: unknown[], selectedRowKey: string | null) => void
  initiallySelectedRow?: string
}

enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

type HeaderItem = {
  label: string
  width?: number
}

const SelectableTable = (props: SelectableTableProps): JSX.Element => {
  const { rows, onRowSelect, headers, initiallySelectedRow } = props

  const initialRows = () => {
    return rows
  }

  const [rowSet, setRowSet] = useState<unknown[][]>(initialRows)
  const [sortColumn, setSortColumn] = useState(0)
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.DESC
  )

  const [selectedRow, setSelectedRow] = useState<null | string>(
    initiallySelectedRow || null
  )

  useEffect(() => {
    setRowSet(doSort(sortColumn, SortDirection.DESC, rows))
  }, [rows])

  const doSort = (
    col: number,
    direction: SortDirection,
    rowsToSort: unknown[][]
  ): unknown[][] => {
    return [...rowsToSort].sort((a, b) => {
      if (a[col] === b[col]) {
        return 0
      }

      if (direction === SortDirection.ASC) {
        // eslint-disable-next-line
        // @ts-ignore
        return a[col] < b[col] ? -1 : 1
      }

      // eslint-disable-next-line
      // @ts-ignore
      return a[col] < b[col] ? 1 : -1
    })
  }

  const sortRows = (col: number, direction: SortDirection): void => {
    setRowSet(doSort(col, direction, rowSet))
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
    const key = `row-${row.join('-')}`

    return (
      <SelectableTableRow key={key}>
        {row.map((cell, cidx) => {
          return renderCell(cell as string, cidx, key, row)
        })}
      </SelectableTableRow>
    )
  }

  const renderHeaders = () => {
    return headers.map((header, idx) => {
      return (
        <SelectableTableHeader
          width={typeof header === 'string' ? undefined : header.width}
          key={`selectable-table-header-header-${header}`}
          onClick={() => {
            let currSortDirection = sortDirection

            if (idx === sortColumn) {
              currSortDirection =
                currSortDirection === SortDirection.ASC
                  ? SortDirection.DESC
                  : SortDirection.ASC
            } else {
              setSortColumn(idx)
              currSortDirection = SortDirection.DESC
            }

            setSortDirection(currSortDirection)

            sortRows(idx, currSortDirection)
          }}
        >
          {typeof header === 'string' ? header : header.label}
          {sortDirection === SortDirection.DESC && sortColumn === idx ? (
            <ArrowDropUp />
          ) : (
            <ArrowDropDown />
          )}
        </SelectableTableHeader>
      )
    })
  }

  return (
    <SelectableTableComponent>
      <thead>
        <tr>{renderHeaders()}</tr>
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

import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectableTable from '../components/selectabletable'

export default {
  title: 'Components/SelectableTable',
  component: SelectableTable,
} as ComponentMeta<typeof SelectableTable>

const SelectableTableInst: ComponentStory<typeof SelectableTable> = () => {
  const rows = [
    ['hello 2', 'world 1'],
    ['hello 1', 'world 2'],
  ]

  const initialRows = () => {
    return rows
  }

  const [rowState, setRowState] = useState(initialRows)

  const headers = ['Hello', 'World']

  const handleClick = () => {
    const newRows = [...rowState]

    newRows.push([
      `hello ${Math.ceil(Math.random() * (500 - 300) + 3)}`,
      `world ${Math.ceil(Math.random() * (500 - 300) + 3)}`,
    ])

    setRowState(newRows)
  }

  return (
    <>
      <SelectableTable
        rows={rowState}
        headers={headers}
        onRowSelect={() => {
          alert('selected row')
        }}
      />
      <p>
        <button onClick={handleClick}>Add row</button>
      </p>
    </>
  )
}

const SelectableTableInitiallySelected: ComponentStory<
  typeof SelectableTable
> = () => {
  const rows = [
    ['hello', 'world'],
    ['hello', 'world'],
  ]

  const headers = ['Hello', 'World']

  return (
    <>
      <SelectableTable
        rows={rows}
        headers={headers}
        onRowSelect={(row, key) => {
          console.log(key)
        }}
        initiallySelectedRow="row-hello-1"
      />
    </>
  )
}

export {
  SelectableTableInst as SelectableTable,
  SelectableTableInitiallySelected,
}

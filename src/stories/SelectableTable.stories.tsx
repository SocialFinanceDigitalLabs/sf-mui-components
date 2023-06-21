import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectableTable from '../components/selectabletable'

export default {
  title: 'Components/SelectableTable',
  component: SelectableTable,
} as ComponentMeta<typeof SelectableTable>

const SelectableTableInst: ComponentStory<typeof SelectableTable> = () => {
  const rows = [
    ['hello', 'world'],
    ['hello', 'world'],
  ]

  const headers = ['Hello', 'World']

  return (
    <SelectableTable
      rows={rows}
      headers={headers}
      onRowSelect={(row) => {
        alert('selected row')
      }}
    />
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
    <SelectableTable
      rows={rows}
      headers={headers}
      onRowSelect={(row, key) => {
        console.log(key)
      }}
      initiallySelectedRow="row-hello-1"
    />
  )
}

export {
  SelectableTableInst as SelectableTable,
  SelectableTableInitiallySelected,
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '../components/table'

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const TableInst: ComponentStory<typeof Table> = (props) => {
  const rows = [
    { cells: ['hello 1', 'world 1'] },
    { cells: ['hello 2', 'world 2'] },
  ]

  const headers = ['Hello', 'World']

  const allProps = { ...props, rows, headers }

  return <Table {...allProps} />
}

export { TableInst as Table }

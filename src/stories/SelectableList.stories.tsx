import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectableList from '../components/selectablelist'

export default {
  title: 'SelectableList',
  component: SelectableList,
} as ComponentMeta<typeof SelectableList>

const SelectableListInst: ComponentStory<typeof SelectableList> = () => {
  const props = {
    values: [
      { value: 'ItemOne', label: 'Item One' },
      { value: 'ItemTwo', label: 'Item Two' },
    ],
    onItemSelected: function () {
      console.log('on item selected')
    },
  }

  return <SelectableList {...props} />
}

export { SelectableListInst as SelectableList }

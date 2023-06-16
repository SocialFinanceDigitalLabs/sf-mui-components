import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DateSelect from '../../components/inputs/dateselect'

export default {
  title: 'Date Select',
  component: DateSelect,
  argTypes: {},
} as ComponentMeta<typeof DateSelect>

const DateSelectInst: ComponentStory<typeof DateSelect> = (props) => {
  return <DateSelect {...props} />
}

export { DateSelectInst as DateSelect }

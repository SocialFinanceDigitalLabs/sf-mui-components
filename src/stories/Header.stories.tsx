import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from '../components/header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Title!',
    },
    chip: {
      control: 'text',
      defaultValue: 'Chip!',
    },
  },
} as ComponentMeta<typeof Header>

const HeaderInst: ComponentStory<typeof Header> = (props) => {
  return <Header {...props} />
}

export { HeaderInst as Header }

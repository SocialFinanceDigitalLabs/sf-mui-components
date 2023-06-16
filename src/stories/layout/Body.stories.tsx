import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Body } from '../../components/layout'

export default {
  title: 'Components/Layout/Body',
  component: Body,
  argTypes: {
    chip: {
      control: 'text',
      defaultValue: 'Chip',
    },
    title: {
      control: 'text',
      defaultValue: 'Title',
    },
  },
} as ComponentMeta<typeof Body>

const BodyInst: ComponentStory<typeof Body> = (props) => {
  const allProps = { ...props, children: <div>Hello, world</div> }

  return <Body {...allProps} />
}

export { BodyInst as Body }

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Block from '../components/block'

export default {
  title: 'Components/Block',
  component: Block,
  argTypes: {
    spacing: {
      options: ['block', 'blockLarge', 'blockExtraLarge'],
      control: { type: 'radio' },
      defaultValue: 'block',
    },
  },
} as ComponentMeta<typeof Block>

const BlockInst: ComponentStory<typeof Block> = (props) => {
  return (
    <>
      <Block {...props}>Playground example</Block>
      <p>New content</p>
    </>
  )
}

export { BlockInst as Block }

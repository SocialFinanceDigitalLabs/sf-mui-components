import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonPopover from '../components/buttonpopover'

export default {
  title: 'Components/Button Popover',
  component: ButtonPopover,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Popover Label!',
    },
  },
} as ComponentMeta<typeof ButtonPopover>

const ButtonPopoverInst: ComponentStory<typeof ButtonPopover> = (props) => {
  const allProps = {
    children: <div>Hello, world!</div>,
    ...props,
  }

  return <ButtonPopover {...allProps} />
}

export { ButtonPopoverInst as ButtonPopover }

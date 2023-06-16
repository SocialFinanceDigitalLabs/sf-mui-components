import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Expando from '../components/expando'

export default {
  title: 'Expando',
  component: Expando,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Expando Title!',
    },
    id: {
      table: {
        disable: true,
      },
    },
    Icon: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    defaultExpanded: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Expando>

const ExpandoInst: ComponentStory<typeof Expando> = (props) => {
  const allProps = {
    ...props,
  }

  allProps.children = <div>Hello, world</div>

  return <Expando {...allProps} />
}

const ExpandoOpen: ComponentStory<typeof Expando> = (props) => {
  const allProps = {
    ...props,
  }

  allProps.children = <div>Hello, world</div>
  allProps.defaultExpanded = true

  return <Expando {...allProps} />
}

export { ExpandoInst as Expando, ExpandoOpen }

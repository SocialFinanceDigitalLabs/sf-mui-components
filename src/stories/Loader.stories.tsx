import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Loader from '../components/loader'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Loader',
  component: Loader,
  argTypes: {
    type: {
      options: ['inline', 'cover'],
      control: { type: 'radio' },
      defaultValue: 'inline',
    },
    label: {
      control: 'text',
      defaultValue: 'Loading!',
    },
  },
} as ComponentMeta<typeof Loader>

const LoaderInst: ComponentStory<typeof Loader> = (props) => {
  return <Loader {...props} />
}

export { LoaderInst as Loader }

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
} as ComponentMeta<typeof Loader>

export const Inline: ComponentStory<typeof Loader> = () => (
  <Loader type="inline" />
)

export const Cover: ComponentStory<typeof Loader> = () => (
  <Loader type="cover" />
)

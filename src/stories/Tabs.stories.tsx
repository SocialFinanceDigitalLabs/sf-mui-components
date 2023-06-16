import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tabs from '../components/tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const TabsInst: ComponentStory<typeof Tabs> = () => {
  const headers = [{ label: 'Tab1' }, { label: 'Tab2' }]

  const bodies = [<div>Tab1 content</div>, <div>Tab2 content</div>]

  return (
    <Tabs
      headers={headers}
      bodies={bodies}
      id="sample-tabs"
      onChange={(num) => {
        alert(`tab changed to ${num}`)
      }}
    />
  )
}

export { TabsInst as Tabs }

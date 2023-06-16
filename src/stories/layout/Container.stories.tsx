import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container } from '../../components/layout'

export default {
  title: 'Components/Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const ContainerInst: ComponentStory<typeof Container> = (props) => {
  const allProps = { ...props, children: <div>Hello, world</div> }

  return <Container {...allProps} />
}

export { ContainerInst as Container }

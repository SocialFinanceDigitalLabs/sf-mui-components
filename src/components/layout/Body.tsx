import Header, { HeaderProps } from '../../components/header'
import React, { ReactNode } from 'react'

import { PageWrapper } from './Layout.styles'
interface BodyProps extends HeaderProps {
  children: ReactNode
}

const Body = (props: BodyProps): JSX.Element => {
  const { children, title, chip } = props

  return (
    <div>
      <Header title={title} chip={chip} />
      <PageWrapper>{children}</PageWrapper>
    </div>
  )
}

export default Body

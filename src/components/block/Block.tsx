/** @jsxImportSource @emotion/react */

import React from 'react'
import { Box } from '@mui/material'

import { Layout } from './Block.styles'

type Styling = {
  [key: string]: string
}

type BlockProps = {
  children: React.ReactNode
  spacing?: 'block' | 'blockLarge' | 'blockExtraLarge'
  styling?: Styling
}

const Block = (props: BlockProps): JSX.Element => {
  const { children, spacing, styling } = props

  const style = styling ? { ...styling } : {}

  return (
    <Box style={style} css={Layout[spacing || 'block']}>
      {children}
    </Box>
  )
}

export default Block

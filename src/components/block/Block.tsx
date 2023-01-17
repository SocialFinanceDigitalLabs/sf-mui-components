/** @jsxImportSource @emotion/react */

import React from 'react'
import { Box } from '@mui/material'

import { Layout } from './Block.styles'

interface BlockProps {
  children: React.ReactNode
  spacing?: 'block' | 'blockLarge' | 'blockExtraLarge'
}

const Block = (props: BlockProps): JSX.Element => {
  const { children, spacing } = props

  return <Box css={Layout[spacing || 'block']}>{children}</Box>
}

export default Block

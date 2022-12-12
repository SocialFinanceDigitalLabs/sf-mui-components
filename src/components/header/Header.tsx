/** @jsxImportSource @emotion/react */

import React from 'react'
import { AppBar, Box, Chip, Toolbar, Typography } from '@mui/material'

import { SupHeader, BetaChip } from './Header.styles'

export interface HeaderProps {
  title: string
  chip?: string
}

const Header = (props: HeaderProps): JSX.Element => {
  const { title, chip } = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      {chip && (
        <SupHeader>
          <Chip color="primary" css={BetaChip.chip} label={chip} />
          <Typography variant="body2"></Typography>
        </SupHeader>
      )}
      <AppBar position="relative" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

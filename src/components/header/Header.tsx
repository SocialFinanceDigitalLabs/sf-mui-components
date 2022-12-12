/** @jsxImportSource @emotion/react */

import React from 'react'
import { AppBar, Box, Chip, Toolbar, Typography } from '@mui/material'

import { SupHeader, BetaChip } from './Header.styles'

interface HeaderProps {
  chip?: string
  title: string
}

const Header = (props: HeaderProps): JSX.Element => {
  const { title, chip } = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SupHeader>
        {chip && (
          <Chip
            color="primary"
            css={BetaChip.chip}
            label="STATUS: Running Fake API"
          />
        )}
        <Typography variant="body2"></Typography>
      </SupHeader>
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

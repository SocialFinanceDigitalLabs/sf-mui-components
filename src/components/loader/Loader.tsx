import { CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { LoaderWrapper, LoaderCover, Label } from './Loader.styles'

type LoaderProps = {
  type: 'inline' | 'cover'
  label?: string
}

const Loader = (props: LoaderProps): JSX.Element => {
  const { type, label } = props

  const renderLabel = () => {
    return label ? (
      <Label>
        <Typography>{label}</Typography>
      </Label>
    ) : null
  }

  const renderWrapper = (spinner: React.ReactNode) => {
    if (type === 'inline') {
      return (
        <LoaderWrapper>
          {spinner}
          {renderLabel()}
        </LoaderWrapper>
      )
    }

    return (
      <LoaderCover>
        {spinner}
        {renderLabel()}
      </LoaderCover>
    )
  }

  return renderWrapper(<CircularProgress color="primary" />)
}

export default Loader

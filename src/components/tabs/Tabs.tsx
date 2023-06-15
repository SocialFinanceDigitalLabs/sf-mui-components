import React, { SyntheticEvent, useState } from 'react'
import { Tabs as MuiTabs, Tab, Box } from '@mui/material'

import TabPanel from './TabPanel'

type TabHeader = {
  label: string
}

export interface TabsProps {
  headers: TabHeader[]
  bodies: React.ReactNode[]
  id: string
  overflowPanelY?: boolean
  onChange?: (num: number) => void
}

const Tabs = (props: TabsProps): JSX.Element => {
  const { headers, bodies, id, overflowPanelY, onChange } = props

  const [value, setValue] = useState(0)

  const handleChange = (evt: SyntheticEvent, num: number) => {
    setValue(num)
    if (onChange) {
      onChange(num)
    }
  }

  const renderHeaders = () => {
    return headers.map((header, idx) => {
      return <Tab label={header.label} key={`${id}-${idx}-head`} />
    })
  }

  const renderBodies = () => {
    return bodies.map((body, idx) => {
      return (
        <TabPanel
          id={id}
          hidden={value !== idx}
          index={idx}
          key={`${id}-${idx}-body`}
          overflowY={overflowPanelY}
        >
          {body}
        </TabPanel>
      )
    })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {renderHeaders()}
        </MuiTabs>
      </Box>
      {renderBodies()}
    </Box>
  )
}

export default Tabs

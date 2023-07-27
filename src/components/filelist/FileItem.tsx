import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Checkbox from '@mui/material/Checkbox'
import DescriptionIcon from '@mui/icons-material/Description'

import { FileItemType } from './FileList'

interface FileItemProps {
  selected: boolean
  onChange: () => void
}

const FileItem = (props: FileItemType & FileItemProps): JSX.Element => {
  return (
    <ListItem
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={() => {
            props.onChange()
          }}
          checked={props.selected}
          inputProps={{ 'aria-labelledby': '...' }}
        />
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>

        <ListItemText primary={props.name} />
      </ListItemButton>
    </ListItem>
  )
}

export default FileItem

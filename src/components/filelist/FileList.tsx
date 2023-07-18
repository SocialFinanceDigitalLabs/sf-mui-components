import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Checkbox from '@mui/material/Checkbox'
import DescriptionIcon from '@mui/icons-material/Description'

const FileList = (): JSX.Element => {
  return (
    <div>
      <List>
        <ListItem
          secondaryAction={
            <Checkbox
              edge="end"
              onChange={() => {
                console.log('')
              }}
              checked={false}
              inputProps={{ 'aria-labelledby': '...' }}
            />
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>

            <ListItemText primary="File" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )
}

export default FileList

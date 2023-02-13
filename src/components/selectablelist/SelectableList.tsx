import React, { useState, useCallback } from 'react'
import { Box, Button, List } from '@mui/material'

import ListItem, { SelectableListItem } from './ListItem'

type SelectableListProps = {
  initialSelectedItems?: string[]
  values: SelectableListItem[]
  onItemSelected: (itemsSelected: string[]) => void
}

const SelectableList = (props: SelectableListProps): JSX.Element => {
  const { values, onItemSelected, initialSelectedItems } = props
  const [selectedItems, setSelectedItems] = useState<string[]>(
    initialSelectedItems || []
  )

  const handleClick = useCallback((value: SelectableListItem) => {
    setSelectedItems((prevSelectedItems) => {
      let newSelectedItems = []

      if (prevSelectedItems.indexOf(value.value) > -1) {
        newSelectedItems = prevSelectedItems.filter((item) => {
          return item !== value.value
        })
      } else {
        newSelectedItems = [value.value, ...prevSelectedItems]
      }

      onItemSelected(newSelectedItems)
      return newSelectedItems
    })
  }, [])

  const handleSelectAllClick = () => {
    setSelectedItems(() => {
      const newSelectedItems = values.map((value) => {
        return value.value
      })
      onItemSelected(newSelectedItems)
      return newSelectedItems
    })
  }

  const handleUnSelectAllClick = () => {
    setSelectedItems(() => {
      onItemSelected([])
      return []
    })
  }

  return (
    <Box>
      <Button
        autoFocus={false}
        disableFocusRipple={true}
        disableRipple
        disabled={selectedItems.length === values.length}
        onClick={handleSelectAllClick}
      >
        Select all
      </Button>
      <Button
        autoFocus={false}
        disableFocusRipple={true}
        disableRipple
        disabled={selectedItems.length === 0}
        onClick={handleUnSelectAllClick}
      >
        Unselect all
      </Button>
      <List>
        {values.map((value: SelectableListItem) => {
          return (
            <ListItem
              onClick={handleClick}
              checked={selectedItems.indexOf(value.value) > -1}
              value={value}
              key={`top-list-${value.value}`}
            />
          )
        })}
      </List>
    </Box>
  )
}

export default SelectableList

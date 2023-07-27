import React, { useState, useEffect } from 'react'
import List from '@mui/material/List'

import FileItem from './FileItem'

export type FileItemType = {
  name: string
  size: number
  type?: 'doc' | 'xls' | 'csv' | 'pdf'
}

export interface FileListProps {
  fileList: FileItemType[]
  onChange: (fileList: FileItemType[]) => void
}

const FileList = (props: FileListProps): JSX.Element => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const { fileList, onChange } = props

  useEffect(() => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => {
        let output = false

        fileList.forEach((fileListItem) => {
          if (`${fileListItem.name}-${fileListItem.size}` === selectedItem) {
            output = true
          }
        })

        return output
      })
    ) // if we've done something externally to selected items, we need to ensure the internal selected list continues to reflect reality.
  }, [fileList])

  const getFilesByKeys = (keys: string[]) => {
    const output: FileItemType[] = []

    keys.forEach((key) => {
      const [name, size] = key.split('-')

      const found = fileList.find((fileItem) => {
        return fileItem.name === name && fileItem.size === Number(size)
      })
      if (found) {
        output.push(found)
      }
    })

    return output
  }

  return (
    <div>
      <List>
        {fileList.map((fileItem: FileItemType) => {
          const key = `${fileItem.name}-${fileItem.size}`

          return (
            <FileItem
              selected={selectedItems.indexOf(key) > -1}
              onChange={() => {
                const newSelectedItems =
                  selectedItems.indexOf(key) > -1
                    ? selectedItems.filter((item) => {
                        return item !== key
                      })
                    : selectedItems.slice().concat([key])

                setSelectedItems(newSelectedItems)
                onChange(getFilesByKeys(newSelectedItems))
              }}
              key={key}
              {...fileItem}
            />
          )
        })}
      </List>
    </div>
  )
}

export default FileList

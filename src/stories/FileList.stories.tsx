import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FileList, { FileItemType } from '../components/filelist'

export default {
  title: 'Components/FileList',
  component: FileList,
} as ComponentMeta<typeof FileList>

const baseFileList: FileItemType[] = [
  { name: 'File name', size: 300, type: 'doc' },
  { name: 'File name 2', size: 500, type: 'doc' },
]

const FileListInst: ComponentStory<typeof FileList> = () => {
  const [fileList, setFileList] = useState(baseFileList)
  const [selectedItems, setSelectedItems] = useState<FileItemType[]>([])

  return (
    <>
      <FileList
        onChange={(changedItems) => {
          setSelectedItems(changedItems)
        }}
        fileList={fileList}
      />
      <button
        onClick={() => {
          const cleanItems = fileList.filter((fileItem) => {
            const fileValues = Object.values(fileItem).sort().join('')
            let output = true

            selectedItems.forEach((selectedItem) => {
              const selectedValues = Object.values(selectedItem).sort().join('')

              if (fileValues === selectedValues) {
                output = false
              }
            })
            return output
          })

          setFileList(cleanItems)
          setSelectedItems([])
        }}
      >
        Delete selected
      </button>
    </>
  )
}

export { FileListInst as FileList }

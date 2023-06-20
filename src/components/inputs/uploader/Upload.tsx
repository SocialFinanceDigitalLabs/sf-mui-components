import React from 'react'
import { useDropzone, Accept } from 'react-dropzone'
import { Box, Paper, List } from '@mui/material'
import { Upload as UploadIcon } from '@mui/icons-material'

import UploadItem, { FileBody } from './UploadItem'
import { DropArea } from './Uploader.styles'

export interface UploadProps {
  onUploadReady: (files: FileList) => void
  fileList: FileList
  label?: string
  maxFiles?: number
  accept?: Accept
}

export interface FileList {
  [key: string]: FileBody | undefined
}

type FileHandle = {
  path: string
  size: number
  lastModified: number
}

const getFileId = (file: FileHandle) => {
  return `${file.path}_${file.lastModified}_${file.size}`
}

const Upload = (props: UploadProps): JSX.Element => {
  const { onUploadReady, fileList } = props

  const onRemoveFile = (id: string) => {
    const newFileList: FileList = {}
    if (Object.keys(fileList).length > 0) {
      Object.values(fileList).forEach((fileListItem) => {
        if (fileListItem && fileListItem.id !== id) {
          newFileList[fileListItem.id] = fileListItem
        }
      })
    }

    onUploadReady(newFileList)
  }

  const onDrop = (acceptedFiles: unknown[]) => {
    const newFileList = { ...fileList }

    acceptedFiles.forEach((file) => {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        const contents = fileReader.result
        const id = getFileId(file as FileHandle)

        newFileList[id] = {
          file: file as File,
          contents,
          id,
        }

        onUploadReady(newFileList)
      }

      fileReader.readAsArrayBuffer(file as Blob)
    })
  }

  const dropzoneConfig: {
    onDrop: (acceptedFiles: unknown[]) => void
    accept?: Accept
    maxFiles?: number
  } = { onDrop }

  if (props.accept) {
    dropzoneConfig.accept = props.accept
  }

  if (props.maxFiles) {
    dropzoneConfig.maxFiles = props.maxFiles
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...dropzoneConfig,
  })

  const renderFileList = () => {
    const files = fileList ? Object.values(fileList) : []

    if (files.length > 0) {
      return (
        <List>
          {files.map((fileListItem) => {
            if (fileListItem) {
              return (
                <UploadItem
                  key={fileListItem.id}
                  file={fileListItem}
                  onRemoveItem={onRemoveFile}
                ></UploadItem>
              )
            }

            return null
          })}
        </List>
      )
    }

    return null
  }

  return (
    <Box>
      <Paper>
        <DropArea {...getRootProps()} active={isDragActive}>
          <input {...getInputProps()} />
          <p>
            <UploadIcon />
          </p>
          {isDragActive ? (
            <p>Drop the files here</p>
          ) : (
            <p>
              {props.label ||
                "Drag 'n' drop some files here, or click to select files"}
            </p>
          )}
        </DropArea>
        <div>{renderFileList()}</div>
      </Paper>
    </Box>
  )
}

export default Upload

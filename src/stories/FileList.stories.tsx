import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FileList from '../components/filelist'

export default {
  title: 'Components/FileList',
  component: FileList,
} as ComponentMeta<typeof FileList>

const FileListInst: ComponentStory<typeof FileList> = () => {
  return <FileList />
}

export { FileListInst as FileList }

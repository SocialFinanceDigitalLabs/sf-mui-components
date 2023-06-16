import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Upload from '../../components/inputs/uploader'

export default {
  title: 'Components/Inputs/Upload',
  component: Upload,
  argTypes: {
    onUploadReady: {
      table: {
        disable: true,
      },
    },
    fileList: {
      table: {
        disable: true,
      },
    },
    accept: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Upload>

const UploadInst: ComponentStory<typeof Upload> = (props) => {
  return <Upload {...props} />
}

export { UploadInst as Upload }

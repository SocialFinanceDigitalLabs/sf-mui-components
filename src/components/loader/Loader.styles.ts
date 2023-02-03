import styled from '@emotion/styled'
import { spacing } from '../../theme/spacing'

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoaderCover = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const Label = styled.div`
  padding-top: ${spacing.m};
`

export { LoaderWrapper, LoaderCover, Label }

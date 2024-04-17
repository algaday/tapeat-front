import { IconButton, TextField } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const StyledInputField = styled.input`
  clip: 'rect(0 0 0 0)';
  clip-path: 'inset(50%)';
  height: 1;
  overflow: 'hidden';
  position: 'absolute';
  bottom: 0;
  left: 0;
  white-space: 'nowrap';
  width: 1;
  display: none;
  position: relative;

  .icon {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: red;
  }
`

export const StyledIcon = styled(IconButton)`
  position: absolute;
`

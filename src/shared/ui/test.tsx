'use client'
import { Button } from '@mui/material'
import styled from 'styled-components'

const TestButton = styled(Button)`
  background-color: red;
`

export default function MuiButton() {
  return <TestButton variant={'outlined'}>MUI Button</TestButton>
}

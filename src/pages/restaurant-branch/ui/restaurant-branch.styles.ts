import styled from 'styled-components'
import NextLink from 'next/link'

export const StyledLink = styled(NextLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

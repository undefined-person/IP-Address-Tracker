import styled from 'styled-components'

import { theme } from 'core/theme/theme'

export const TopBLockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (max-width: ${theme.resolutions.mobile}) {
    justify-content: flex-start;
    padding-top: 30px;
  }
`

export const TopBlockTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
`

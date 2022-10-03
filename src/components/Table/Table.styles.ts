import styled from 'styled-components'

import { theme } from 'core/theme/theme'

export const TableContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 80vw;
  height: 120px;
  top: 35vh;
  overflow: hidden;
  z-index: 5;
  border-radius: 12px;

  @media screen and (max-width: ${theme.resolutions.mobile}) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 35vh;
    top: 20vh;
  }
`

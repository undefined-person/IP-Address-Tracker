import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { theme } from './theme'

export const BaseTheme = createGlobalStyle`
  ${reset}
  
         * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
    color: ${theme.colors.white};
    background-color: ${theme.colors.white};
  }
`

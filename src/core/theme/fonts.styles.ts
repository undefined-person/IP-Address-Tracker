import { createGlobalStyle } from 'styled-components'

import RegularRubikWoff2 from 'assets/fonts/Rubik/rubik-v21-latin-regular.woff2'
import RegularRubikWoff from 'assets/fonts/Rubik/rubik-v21-latin-regular.woff'
import MediumRubikWoff2 from 'assets/fonts/Rubik/rubik-v21-latin-500.woff2'
import MediumRubikWoff from 'assets/fonts/Rubik/rubik-v21-latin-500.woff'
import BoldRubikWoff2 from 'assets/fonts/Rubik/rubik-v21-latin-700.woff2'
import BoldRubikWoff from 'assets/fonts/Rubik/rubik-v21-latin-700.woff'

export const FontsStyles = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: local(''),
    url(${RegularRubikWoff2}) format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${RegularRubikWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* rubik-500 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    src: local(''),
    url(${MediumRubikWoff2}) format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${MediumRubikWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* rubik-700 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: local(''),
    url(${BoldRubikWoff2}) format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */ url(${BoldRubikWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`

import { css } from 'styled-components'

export const rubik = css`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: local(''),
      url('../../assets/fonts/Rubik/rubik-v21-latin-regular.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../../assets/fonts/Rubik/rubik-v21-latin-regular.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* rubik-500 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    src: local(''),
      url('../../assets/fonts/Rubik/rubik-v21-latin-500.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../../assets/fonts/Rubik/rubik-v21-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* rubik-700 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: local(''),
      url('../../assets/fonts/Rubik/rubik-v21-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../../assets/fonts/Rubik/rubik-v21-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`

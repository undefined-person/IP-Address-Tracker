import styled from 'styled-components'

import { theme } from 'core/theme/theme'

export const SearchContainer = styled.div`
  display: flex;
  width: 600px;
  margin-top: 25px;

  @media screen and (max-width: ${theme.resolutions.mobile}) {
    width: 80vw;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  color: ${theme.colors.darkGray};
  font-size: 18px;
  font-weight: 500;
  border-radius: 12px 0 0 12px;
  border: none;
  outline: none;
`

export const SearchButton = styled.button`
  background-color: ${theme.colors.black};
  border: none;
  width: 50px;
  border-radius: 0 12px 12px 0;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${theme.colors.darkGray};
    }
  }
`

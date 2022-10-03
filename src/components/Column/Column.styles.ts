import styled from 'styled-components'

import { theme } from 'core/theme'

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 25px;
  justify-content: center;
  background-color: ${theme.colors.white};
  font-weight: 700;
  border-right: 1px solid ${theme.colors.lightGray};

  @media screen and (max-width: ${theme.resolutions.mobile}) {
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px;
    border-right: none;
  }
`

export const ColumnTitle = styled.h2`
  color: ${theme.colors.gray};
  margin-bottom: 16px;
  font-size: 11px;
  text-transform: uppercase;

  @media screen and (max-width: ${theme.resolutions.mobile}) {
    margin-bottom: 5px;
  }
`

export const ColumnInfo = styled.h3`
  line-height: 120%;
  color: ${theme.colors.black};
`

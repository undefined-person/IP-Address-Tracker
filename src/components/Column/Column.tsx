import React, { FC } from 'react'

import { ColumnContainer, ColumnInfo, ColumnTitle } from './Column.styles'

interface ColumnProps {
  title: string
  info: string
}

export const Column: FC<ColumnProps> = ({ title, info }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <ColumnInfo>{info}</ColumnInfo>
    </ColumnContainer>
  )
}

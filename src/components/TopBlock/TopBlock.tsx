import React, { FC } from 'react'

import { useTypedSelector } from 'core/hooks'

import { Search, Table } from 'components'

import Background from 'assets/images/pattern-bg.png'

import { TopBLockContainer, TopBlockTitle } from './TopBlock.styles'

export const TopBlock: FC = () => {
  const { trackerData } = useTypedSelector((state) => state.tracker)

  return (
    <TopBLockContainer style={{ backgroundImage: `url(${Background})` }}>
      <TopBlockTitle>IP Address Tracker</TopBlockTitle>
      <Search />
      {Object.keys(trackerData).length !== 0 ? <Table /> : null}
    </TopBLockContainer>
  )
}

import React from 'react'

import { useTypedSelector } from 'core/hooks'

import { Column } from 'components'

import { TableContainer } from './Table.styles'

export const Table = () => {
  const { trackerData } = useTypedSelector((state) => state.tracker)

  return (
    <TableContainer>
      <Column title="ip address" info={trackerData.ipAddress} />
      <Column title="location" info={trackerData.location} />
      <Column title="timezone" info={`UTC ${trackerData.timezone}`} />
      <Column title="isp" info={trackerData.isp} />
    </TableContainer>
  )
}

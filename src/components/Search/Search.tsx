import React, { useEffect, useState } from 'react'

import { useAppDispatch } from 'core/hooks'
import { fetchTrackerData } from 'core/store/slices/tracker/actionCreators'

import SearchImg from 'assets/images/icon-arrow.svg'

import { SearchButton, SearchContainer, SearchInput } from './Search.styles'

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSearch = (ipAddress: string) => {
    if (ipAddress) {
      dispatch(fetchTrackerData(ipAddress))
    }
  }

  useEffect(() => {
    dispatch(fetchTrackerData(''))
  }, [])

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search for any IP address"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        value={searchValue}
      />
      <SearchButton onClick={() => handleSearch(searchValue)}>
        <img src={SearchImg} alt="" />
      </SearchButton>
    </SearchContainer>
  )
}

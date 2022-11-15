import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const SearchBar = () => {
  return (
    <div className="search">
      <label htmlFor="searchInput" className="glass">
        <RiSearchLine />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="좋아하는 뮤직비디오를 검색하세요!"
        title="검색"
      />
    </div>
  )
}

export default SearchBar

import React from 'react'
import { SearchBar } from './'
import { SiYoutube } from 'react-icons/si'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <SiYoutube className="icon" />
        MusicVideo Youtube
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont

import React from 'react'
import { SearchBar } from './'
import { Link } from 'react-router-dom'
import { SiYoutube } from 'react-icons/si'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <SiYoutube className="icon" />
          MusicVideo Youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchAPI } from '../utils/fetchAPI'
import { Videos } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <main id="main" className="search">
      <section id="contents">
        <h2 className="result">
          <em>{searchTerm}</em>를 검색하셨군요(●'◡'●)
        </h2>
        <Videos videos={videos} layout="searchColumn" />
      </section>
    </main>
  )
}

export default SearchConts

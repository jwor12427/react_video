import React, { useEffect, useState } from 'react'
import { Category, Videos } from './'
import { fetchAPI } from '../utils/fetchAPI'
import { FaCat } from 'react-icons/fa'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('music')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [selectCategory])

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <FaCat className="icon2" />
          <em>{selectCategory}</em> 페이지
        </h2>
        <Videos videos={videos} layout="mainColumn" />
      </section>
    </main>
  )
}

export default MainConts

import React, { useEffect, useState } from 'react'
import { Category, Videos } from './'
import { fetchAPI } from '../utils/fetchAPI'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('BLACKPINK')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=BLACKPINK`).then((data) =>
      console.log(data)
    )
  }, [])

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
          <em>{selectCategory}</em> 페이지
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts

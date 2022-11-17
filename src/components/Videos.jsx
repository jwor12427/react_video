import React from 'react'

import { VideoCard, Loader } from './'

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader /> //갯수가 없을때 로딩 출력, 에러 뜨지 않게 하기 위해 ?붙임

  return (
    <article className="videos__inner">
      {videos.map((item, idx) => (
        <VideoCard video={item} key={idx} />
      ))}
    </article>
  )
}

export default Videos

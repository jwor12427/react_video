import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  // const {
  //   snippet: { title, channelid, channelTitle },
  //   statistics: { viewCount, likeCount },
  // } = videoDetail
  return (
    <div className="contanier">
      <section className="videoConts">
        <div className="videoRight">
          <div className="video__player">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </div>
          <div className="video__title"></div>
        </div>
        <aside className="videoLeft"></aside>
      </section>
    </div>
  )
}

export default VideoConts

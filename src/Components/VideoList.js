import React from 'react'
import VideoItem from './VideoItem';
import { Grid } from '@mui/material'

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video, id) => <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />);

  return (
    <Grid container spacing={10}>
     {videos && <div className='more_videos'>More videos</div>} 
      {videoList}
    </Grid>
  )
}

export default VideoList
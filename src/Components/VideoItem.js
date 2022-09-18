import React from 'react'
import { Paper, Grid, Typography } from '@mui/material'
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
        <img style={{ margin: '20px' }} alt='thumbnail' src={video.snippet.thumbnails.default.url} />
        <Typography variant='subtitle2'> <b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem
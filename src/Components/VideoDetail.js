import React, { useState, useEffect } from 'react'
import Api from '../Api/Api'
import { Paper, Typography } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
const VideoDetail = ({ video },props) => {

  const [comments, setComments] = useState([]);
  const [stats, setStats] = useState('');

  const apikey = 'AIzaSyC0mEPiqTyDUdP6ifWyIh-uGibCzQ8ec70';


  //for likes and viewco
  async function myStatdata() {
     
     
    const response = await Api.get('videos', {
      params: {
        part: 'statistics',
        id: video.id.videoId,
        key: apikey,
      }
    });
    // console.log(response.data.items[0].statistics);
    setStats(response.data.items[0].statistics);
  }
  useEffect(() => {
   
     
     
    myStatdata();
    // eslint-disable-next-line
  });

  // fetching comment
  const cool = async () => {
    const response = await Api.get('commentThreads', {
      params: {
        part: 'snippet',
        videoId: video.id.videoId,
        maxResults: 10,
        key: apikey,
      }
    });


    // console.log(response.data.items);

    setComments(response.data.items);

  }




  const cumment = comments.map((comment, id) => (

    <div className='container' key={id}>
      <div className='img'> <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='' /></div>
      <div className='text-comment'>
        <h5>
          {comment.snippet.topLevelComment.snippet.authorDisplayName}
        </h5>
        <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
      </div>
    </div>

  ))

  // console.log(stats);

  if (!video) return <div>Loading....</div>
  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;


  return (
    <>
      <Paper elevation={6} style={{ height: '25%' }} onLoad={cool}  >
        <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videosrc} />
      </Paper>
      <Paper elevation={6} style={{}}>
        <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
        {/* <Typography variant="subtitle2"></Typography> */}
        <Typography variant="h6"> {stats.viewCount} views<ThumbUp fontSize="large" style = {{ marginRight: '5px',marginLeft: '20px'}} />{stats.likeCount}
          <ThumbDown fontSize="large" style = {{ marginRight: '5px',marginLeft: '20px'}} />Dislike</Typography>
      
      </Paper>


      {/* statistics section */}
      <div className='statistics'>

      </div>

      {/* comment section */}
      <>
        <h3 className='comments'>Comments   {stats.commentCount}</h3>
        <div>{cumment}</div>
      </>
    </>

  )
}

export default VideoDetail
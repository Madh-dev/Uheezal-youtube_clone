import { useState, useEffect } from 'react';
import './App.css';
import Api from './Api/Api';
import {Search,VideoDetail,VideoList} from './Components';
import { Grid } from '@mui/material';





function App() {

  const apikey = 'AIzaSyC0mEPiqTyDUdP6ifWyIh-uGibCzQ8ec70';
  const [videos, setVideos]= useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);
  useEffect(()=>{
    handleSubmit('IELTS Exam listening leaked');
  },[])
  const onVideoSelect  = (video) =>{
    setselectedVideo(video);
  }
  const handleSubmit = async(searchTerm) =>{
    
    const response = await Api.get('search',{
      params:{
        part: 'snippet',
        maxResults: 10,
        key: apikey,
        q : searchTerm,
      }})
     setVideos(response.data.items);
     setselectedVideo(response.data.items[0]);  
    console.log(response.data.items);
  }


  return (
    <Grid justifyContent="center" container spacing= {10}>
    <Grid item xs={12}>
    <Grid  container spacing= {10} className = 'contain'>
    <Grid item xs={12}>
      <Search onformSubmit= {handleSubmit}/>
    </Grid>
    <Grid item xs={8} className = "videoDetail" >
      <VideoDetail video={selectedVideo} />
    </Grid>
    <Grid item xs={4} className = "videoList">
      <VideoList videos={videos} onVideoSelect = { onVideoSelect} />
    </Grid>
    </Grid>
    </Grid>
   </Grid>
  );
}

export default App;

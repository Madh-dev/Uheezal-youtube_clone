import { useState, useEffect } from 'react';
import './App.css';
import Api from './Api/Api';
import {Search,VideoDetail,VideoList} from './Components';
import { Grid } from '@mui/material';





function App() {

  const apikey = 'AIzaSyC0mEPiqTyDUdP6ifWyIh-uGibCzQ8ec70';
  const [videos, setVideos]= useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(()=>{
    handleSubmit('IELTS Exam listening leaked');
  },[])
  const onVideoSelect  = (video) =>{
    setselectedVideo(video);
  }
  const handleSubmit = async(searchTerm) =>{
    
   
      try{
        const response = await Api.get('search',{
          params:{
            part: 'snippet',
            maxResults: 10,
            key: apikey,
            q : searchTerm,
          }});
        setVideos(response.data.items);
     setselectedVideo(response.data.items[0]);  
      
     setErr(null);
     setLoading(false);
      }
      catch(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setErr(error.response.data.error.errors[0].message);
          setLoading(false);
          
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          setErr(error.request);
          setLoading(false);
        } else {
          // Something happened in setting up the request that triggered an Error
          setErr('Error', error.message);
          setLoading(false);
        }
        // console.log(error.config);
      };
     
    // console.log(response.data.items);
  }


  return (
    <Grid justifyContent="center" container spacing= {10}>
    <Grid item xs={12}>
    <Grid  container spacing= {10} className = 'contain'>
    <Grid item xs={12}>
      <Search onformSubmit= {handleSubmit}/>
    </Grid>
    <Grid item xs={8} className = "videoDetail" >
      <VideoDetail video={selectedVideo} error={err} loading ={loading}/>
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

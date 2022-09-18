import React, { useState } from 'react'
import { Paper, TextField } from '@mui/material';

const Search = ({ onformSubmit }) => {


  const [searchTerm, setSearchTerm] = useState('');
  // URL: https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyC0mEPiqTyDUdP6ifWyIh-uGibCzQ8ec70
  // &part=snippet,contentDetails,statistics,status
  const handlechange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(e.target.value);
  }
  const handleSubmit = (e) => {
    onformSubmit({ searchTerm });
    e.preventDefault();
  }

  return (
    <Paper elevation={6} style={{ padding: '25px' }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search.." onChange={handlechange} />
      </form>

    </Paper>
  )
}

export default Search
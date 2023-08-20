import React from 'react'
import Header from './components/Header'
import InfoHeader from './components/InfoHeader'
import {Box} from '@mui/material'
import Articles from './components/Articles'

function App() {
  return (
    <Box>
      <Header/>
      <InfoHeader/>
      <Articles/>
    </Box>
  )
}

export default App
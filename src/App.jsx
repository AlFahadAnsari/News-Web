import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'


const App = () => {
  const [Category, setCategory] = useState("general")
  
  return (
    <div>
      <Navbar  setCategory={setCategory}/>
      <NewsBoard Category={Category} />
    </div>
  )
}

export default App
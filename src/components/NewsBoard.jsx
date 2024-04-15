import React, { useEffect, useState } from 'react'
import NewsTheme from './NewsTheme'
import img from '../assets/newspic.jpg'

const NewsBoard = ({Category}) => {

  const [Artical, setArtical] = useState([])

  useEffect(() => {

      let url=`https://newsapi.org/v2/top-headlines?country=us&Category=${Category}&apiKey=d346746663ab4e92934b576ad0ffc600`
      
      fetch(url).then(res=>res.json())
      .then(data =>setArtical(data.articles))
      // .catch(err=>{console.error('api error' ,err)})

  }, [Category])
  


  return (
    <>

    <h2 className='text-center my-4'>Latest <span className='badge bg-danger fs-3'>News</span> </h2>  


    {
      Artical.map((news)=>{
        return( < NewsTheme key={news.title} title={news.title.slice(0,50)} description={news.description ?news.description.slice(0,90):'the description is not available' } url={news.url} urlToImage={news.urlToImage ?news.urlToImage : img  }/>) })
    }      

    </>
  )
}

export default NewsBoard
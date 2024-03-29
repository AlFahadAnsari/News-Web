import React from 'react'

const NewsTheme = ({title,description,url,urlToImage}) => {
  return (
  

      <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-3 py-3 " style={{ maxWidth: "345px"}}>
        <img src={urlToImage} style={{height:'200px',width:'310px'}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary text-center">read more</a>
        </div>
      </div>

  
  )
}

export default NewsTheme
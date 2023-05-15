import React from 'react'
import "./Widget.css"
import { FiberManualRecord, Info } from '@mui/icons-material'
const Widget = () => {
    const newsArticle = (heading, subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info/>
        </div>
        {newsArticle("Wallace's real name is Wallicestene", "Top news - 9099 readers")}
        {newsArticle("This is not the real LinkedIn", "Top news - 543 readers")}
        {newsArticle("New jobs at Google", "Tech news - 934 readers")}
        {newsArticle("Tesla unveils a new model", "Cars & Auto - 3453 readers")}
        {newsArticle("Redux is up and running", "Code - 2133 readers")}
        {newsArticle("Bitcoin drops by $22K", "Crypto - 9345 readers")}
    </div>
  )
}

export default Widget
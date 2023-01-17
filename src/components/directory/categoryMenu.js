import React from 'react'
import CategoryItem from '../categoryItem/categoryItem'
import './categoryMenu.styles.scss'

const Categorymenu = ({categories}) => {
    
  return (
    <div className="categories-container">
      {categories.map(({id,title,imageUrl})=>(
      <CategoryItem key={id}
      title = {title}
      imageUrl = {imageUrl}/>
      ))}    
    </div>
  )
}

export default Categorymenu
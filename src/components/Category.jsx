import React from 'react'
import { categories } from '../utils/content'

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? '#e94560' : 'transparent',
          }} //카테고리 이름과 내가선택한 카테고리가 같을 경우 배경색 바꿔 주는거
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}
export default Category

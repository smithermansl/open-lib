import React from 'react'
import categories from '../../../utilities/filterCategories'
import FilterCategory from './FilterCategory'

const Sidebar = () => {
  return (
    <div id="sidebar">
      {
        categories && categories.map(category => {
          return (
            <FilterCategory
              key={category.name}
              category={category} />
          )
        })
      }
    </div>
  )
}

export default Sidebar

import React from 'react'

const FilterCategory = props => {
  const { name, options } = props.category
  return (
    <div className="filter-category">
      <h6>{name}</h6>
      {
        options && options.map(option => {
          return (
            <p key={option.name}>{option.name}</p>
          )
        })
      }
    </div>
  )
}

export default FilterCategory

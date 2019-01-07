import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newLanguageFilter } from '../reducers/books'

class FilterCategory extends Component {

  // componentDidMount to get filters from redux store

  changeFilter = e => {
    e.preventDefault()
    const { name } = props.category

    // switch statement, calls correct mapDispatch function
    // based on whether e.target.value is already selected in
    // state.filters + on the value of 'name'
  }

  render () {
    // name = category name / type (i.e. 'Genre')
    const { name, options } = props.category
    return (
      <div className="filter-category">
        <h6>{name}</h6>
        {
          options && options.map(option => {
            return (
              <p
                key={option.value}
                value={option.value}
                onClick={this.changeFilter}>{option.name}</p>
            )
          })
        }
      </div>
    )
  }
}

const mapState = state => ({
  filters: state.filters
})

const mapDispatch = dispatch => ({
  addLangFilter: lang => dispatch(newLanguageFilter(lang))
})

export default connect(null, mapDispatch)(FilterCategory)

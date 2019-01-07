import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { newLanguageFilter } from '../reducers/books'
import { addLangFilter } from '../reducers/books'

class FilterCategory extends Component {
  constructor (props) {
    super (props)
  }

  changeFilter = e => {
    e.preventDefault()
    let lang = e.target.id
    const { addLangFilter, category, filters } = this.props, name = category.name

    // console.log('language code: ', lang, 'category name: ', name)
    // console.log('filters: ', filters)

    switch (name) {
      case 'Language':
        if (filters.languages.indexOf(lang) === -1) {
          console.log('in the if statement')
          addLangFilter(lang)
        }
        // else removeLangFilter(lang)

      // case 'Genre':
      // case 'Type':
    }

  }

  render () {
    // name = category name / type (i.e. 'Genre')
    const { name, options } = this.props.category
    return (
      <div className="filter-category">
        <h6>{name}</h6>
        {
          options && options.map(option => {
            return (
              <p
                key={option.value}
                id={option.value}
                className="filter-option"
                onClick={this.changeFilter}>
                {option.name}
              </p>
            )
          })
        }
      </div>
    )
  }
}

const mapState = state => ({
  filters: state.books.filters
})

const mapDispatch = dispatch => ({
  addLangFilter: lang => dispatch(addLangFilter(lang))
})

export default connect(mapState, mapDispatch)(FilterCategory)

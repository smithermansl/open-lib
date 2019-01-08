import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGenreFilter, addLangFilter, addSubjectFilter, removeLangFilter } from '../reducers/books'

class FilterCategory extends Component {
  constructor (props) {
    super (props)
  }

  changeFilter = e => {
    console.log('change filter fired')
    e.preventDefault()
    let value = e.target.id
    const { addGenreFilter, addLangFilter, addSubjectFilter, category, filters, removeLangFilter } = this.props, name = category.name

    console.log('name: ', name, 'value: ', value)

    switch (name) {
      case 'Genre':
        if (filters.genre.indexOf(value) === -1) {
          addGenreFilter(value)
        }
        // else remove genre filter
        break;

      case 'Language':
        if (filters.language.indexOf(value) === -1) {
          addLangFilter(value)
        } else removeLangFilter(value)
        break;

      case 'Subject':
        if (filters.subject.indexOf(value) === -1) {
          addSubjectFilter(value)
        }
        // else remove subject filter
        break;
    }
  }

  render () {
    const { category, filters } = this.props, { name, options } = category
    
    return (
      <div className="filter-category">
        <h6>{name}</h6>
        {
          options && options.map(option => {
            return (
              <p
                key={option.value}
                id={option.value}
                className={"filter-option " +
                  (filters[name.toLowerCase()].indexOf(option.value) > -1 ? 'active' : null)}
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
  addGenreFilter: genre => dispatch(addGenreFilter(genre)),
  addLangFilter: lang => dispatch(addLangFilter(lang)),
  addSubjectFilter: subject => dispatch(addSubjectFilter(subject)),
  removeLangFilter: lang => dispatch(removeLangFilter(lang))
})

export default connect(mapState, mapDispatch)(FilterCategory)

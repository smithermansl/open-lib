import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGenreFilter, addLangFilter, addSubjectFilter, removeGenreFilter, removeLangFilter, removeSubjectFilter } from '../reducers/books'

class FilterCategory extends Component {
  constructor (props) {
    super (props)
    this.state = {
      open: false
    }
  }

  changeFilter = e => {
    e.preventDefault()
    let value = e.target.id
    const { addGenreFilter, addLangFilter, addSubjectFilter, category, filters, removeGenreFilter, removeLangFilter, removeSubjectFilter } = this.props
    const { name } = category

    switch (name) {
      case 'Genre':
        if (filters.genre.indexOf(value) === -1) {
          addGenreFilter(value)
        } else removeGenreFilter(value)
        break;

      case 'Language':
        if (filters.language.indexOf(value) === -1) {
          addLangFilter(value)
        } else removeLangFilter(value)
        break;

      case 'Subject':
        if (filters.subject.indexOf(value) === -1) {
          addSubjectFilter(value)
        } else removeSubjectFilter(value)
        break;
    }
  }

  dropDown = e => {
    e.preventDefault()
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const { category, filters } = this.props, { name, options } = category
    const { open } = this.state
    
    return (
      <div className="filter-category">
        <h6>{name} </h6>
        <button
          className="drop-down"
          onClick={this.dropDown}>{ open ? '-' : '+' }
          </button>
        {
          options && options.map(option => {
            return open ? (
              <p
                key={option.value}
                id={option.value}
                className={"filter-option " +
                  (filters[name.toLowerCase()].indexOf(option.value) > -1 ? 'active' : null)}
                onClick={this.changeFilter}>
                {option.name}
              </p>
            ) : null
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
  removeGenreFilter: genre => dispatch(removeGenreFilter(genre)),
  removeLangFilter: lang => dispatch(removeLangFilter(lang)),
  removeSubjectFilter: sub => dispatch(removeSubjectFilter(sub))
})

export default connect(mapState, mapDispatch)(FilterCategory)

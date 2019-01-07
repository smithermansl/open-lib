const initialState = {
  list: [],
  filteredList: [],
  selectedBook: {},
  filters: {
    types: [],
    languages: [],
    genres: []
  }
}

const GET_BOOKS = 'GET_BOOKS'
const ADD_LANG_FILTER = 'ADD_FILTER'
const REMOVE_LANG_FILTER = 'REMOVE_FILTER'

const getBooks = books => ({
  type: GET_BOOKS,
  books
})

const addLangFilter = lang => ({
  type: ADD_LANG_FILTER,
  lang
})

const removeLangFilter = lang => ({
  type: REMOVE_LANG_FILTER,
  lang
})

export const fetchBooks = queryStr => {
  return async (dispatch, getState, axios) => {
    try {
      const { data } = await axios.get(`http://openlibrary.org/search.json?${queryStr}`)
      dispatch(getBooks(data.docs))
    } catch (err) {
      console.log('Unable to find books with that search query', err)
    }
  }
}

export const newLanguageFilter = language => {
  return dispatch => {
    try {
      dispatch(addLangFilter(language))
    } catch (err) {
      console.log('Unable to add new language filter', err)
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, list: [ ...action.books ]}

    case ADD_LANG_FILTER:
      return {...state,
        filters: {...state.filters,
        languages: [...state.filters.languages, action.lang],
        filteredList: state.filteredList.filter(book => book.language.indexOf(action.lang) > -1) }}

    default:
      return state
  }
}

export default reducer

import { filterGenre, filterLanguage, filterSubject, totalFilter } from '../../../utilities/filterFunctions'

const initialState = {
  isFetching: false,
  error: false,
  list: [],
  filteredList: [],
  selectedBook: {},
  filters: {
    genre: [],
    subject: [],
    language: []
  }
}

const REQUEST_BOOKS = 'REQUEST_BOOKS'
const GET_BOOKS = 'GET_BOOKS'
const REQUEST_ERROR = 'REQUEST_ERROR'
const SELECT_BOOK = 'SELECT_BOOK'

const ADD_GEN_FILTER = 'ADD_GEN_FILTER'
const ADD_LANG_FILTER = 'ADD_LANG_FILTER'
const ADD_SUBJ_FILTER = 'ADD_SUBJ_FILTER'

const REMOVE_GEN_FILTER = 'REMOVE_GEN_FILTER'
const REMOVE_LANG_FILTER = 'REMOVE_LANG_FILTER'
const REMOVE_SUBJ_FILTER = 'REMOVE_SUBJ_FILTER'


const requesting = () => ({
  type: REQUEST_BOOKS
})

const getBooks = books => ({
  type: GET_BOOKS,
  books
})

const requestError = error => ({
  type: REQUEST_ERROR,
  error
})

export const selectBook = book => ({
  type: SELECT_BOOK,
  book
})

export const addGenreFilter = genre => ({
  type: ADD_GEN_FILTER,
  genre
})

export const addLangFilter = lang => ({
  type: ADD_LANG_FILTER,
  lang
})

export const addSubjectFilter = sub => ({
  type: ADD_SUBJ_FILTER,
  sub
})

export const removeGenreFilter = genre => ({
  type: REMOVE_GEN_FILTER,
  genre
})

export const removeLangFilter = lang => ({
  type: REMOVE_LANG_FILTER,
  lang
})

export const removeSubjectFilter = sub => ({
  type: REMOVE_SUBJ_FILTER,
  sub
})


export const fetchBooks = queryStr => {
  return async (dispatch, getState, axios) => {
    dispatch(requesting())
    try {
      const { data } = await axios.get(`http://openlibrary.org/search.json?${queryStr}`)
      dispatch(getBooks(data.docs))
    } catch (err) {
      console.log('Unable to find books with that search query', err)
      dispatch(requestError(err))
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {...state, isFetching: true, error: false }

    case GET_BOOKS:
      return {...state,
        list: [ ...action.books ],
        filteredList: [ ...action.books ],
        isFetching: false,
        error: false
      }

    case REQUEST_ERROR:
      return {...state, error: true }

    case SELECT_BOOK:
      return {...state, selectedBook: action.book }

    case ADD_GEN_FILTER:
      return {...state,
        filters: {...state.filters,
          genre: [...state.filters.genre, action.genre]
        },
        filteredList: state.filteredList.filter(book => filterGenre(book, action.genre))
      }

    case ADD_LANG_FILTER:
      return {...state,
        filters: {...state.filters,
          language: [...state.filters.language, action.lang]
        },
        filteredList: state.filteredList.filter(book => filterLanguage(book, action.lang))
      }

    case ADD_SUBJ_FILTER:
      return {...state,
        filters: {...state.filters,
          subject: [...state.filters.subject, action.sub]
        },
        filteredList: state.filteredList.filter(book => filterSubject(book, action.sub))
      }

    case REMOVE_GEN_FILTER:
      let filteredGenres = state.filters.genre.filter(gen => gen !== action.genre)
      return {...state,
        filters: {...state.filters, genre: filteredGenres },
        filteredList: state.list.filter(book => totalFilter(book, {...state.filters, genre: filteredGenres }))
      }

    case REMOVE_LANG_FILTER:
      let filteredLangs = state.filters.language.filter(lang => lang !== action.lang)
      return {...state,
        filters: {...state.filters, language: filteredLangs },
        filteredList: state.list.filter(book => totalFilter(book, {...state.filters, language: filteredLangs }))
      }

    case REMOVE_SUBJ_FILTER:
      let filteredSubs = state.filters.subject.filter(sub => sub !== action.sub)
      return {...state,
        filters: {...state.filters, subject: filteredSubs },
        filteredList: state.list.filter(book => totalFilter(book, {...state.filters, subject: filteredSubs }))
      }

    default:
      return state
  }
}

export default reducer

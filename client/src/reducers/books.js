import { filterGenre, filterLanguage, filterSubject, totalFilter } from '../../../utilities/filterFunctions'

const initialState = {
  list: [],
  filteredList: [],
  selectedBook: {},
  filters: {
    genre: [],
    subject: [],
    language: []
  }
}

const GET_BOOKS = 'GET_BOOKS'
const ADD_GEN_FILTER = 'ADD_GEN_FILTER'
const REMOVE_GEN_FILTER = 'REMOVE_GEN_FILTER'
const ADD_LANG_FILTER = 'ADD_LANG_FILTER'
const REMOVE_LANG_FILTER = 'REMOVE_LANG_FILTER'
const ADD_SUBJ_FILTER = 'ADD_SUBJ_FILTER'
const REMOVE_SUBJ_FILTER = 'REMOVE_SUBJ_FILTER'

const getBooks = books => ({
  type: GET_BOOKS,
  books
})

export const addGenreFilter = genre => ({
  type: ADD_GEN_FILTER,
  genre
})

export const addLangFilter = lang => ({
  type: ADD_LANG_FILTER,
  lang
})

export const removeLangFilter = lang => ({
  type: REMOVE_LANG_FILTER,
  lang
})

export const addSubjectFilter = subject => ({
  type: ADD_SUBJ_FILTER,
  subject
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, list: [ ...action.books ], filteredList: [ ...action.books ]}

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
          subject: [...state.filters.subject, action.subject]
        },
        filteredList: state.filteredList.filter(book => filterSubject(book, action.subject))
      }

    case REMOVE_LANG_FILTER:
      return {...state,
        filters: {...state.filters,
          language: state.filters.language.filter(lang => lang !== action.lang)
        },
        filteredList: state.list.filter(book => totalFilter(book, state.filters))
      }

    default:
      return state
  }
}

export default reducer

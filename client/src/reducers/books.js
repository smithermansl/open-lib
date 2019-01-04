const initialState = {
  list: [],
  selectedBook: {}
}

const GET_BOOKS = 'GET_BOOKS'

const getBooks = books => ({
  type: GET_BOOKS,
  books
})

export const fetchBooks = query => {
  return (dispatch, axios) => {
    try {
      const { data } = axios.get(`http://openlibrary.org/search.json?${query}`)
      // http://openlibrary.org/search.json?author=tolkien&title=the+hobbit

      console.log('book data in fetchBooks thunk', data)
      // dispatch(getBooks(data))
    } catch (err) {
      console.log('Unable to find books with that search query', err)
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, list: [ ...action.books ]}
    default:
      return state
  }
}

export default reducer

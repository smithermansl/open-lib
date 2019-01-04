const initialState = {
  list: [],
  selectedBook: {}
}

const GET_BOOKS = 'GET_BOOKS'

const getBooks = books => ({
  type: GET_BOOKS,
  books
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
      return {...state, list: [ ...action.books ]}

    default:
      return state
  }
}

export default reducer

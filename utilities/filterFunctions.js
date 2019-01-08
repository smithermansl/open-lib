export const filterGenre = (book, genre) => {
  return book.subject && book.subject.indexOf(genre) > -1
}

export const filterLanguage = (book, lang) => {
  return book.language && book.language.indexOf(lang) > -1
}

export const filterSubject = (book, subject) => {
  return book.subject && book.subject.indexOf(subject) > -1
}

export const totalFilter = (book, allFilters) => {
  const filters = Object.keys(allFilters)

  return filters.every(filter => {
    return allFilters[filter].every(fil => book[filter] && book[filter].indexOf(fil) >= 0)
  })
}

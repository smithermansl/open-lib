export const filterGenre = (book, genre) => {
  return book.subject && book.subject.indexOf(genre) > -1
}

export const filterLanguage = (book, lang) => {
  return book.language && book.language.indexOf(lang) > -1
}

export const filterSubject = (book, subject) => {
  return book.subject && book.subject.indexOf(subject) > -1
}

export const totalFilter = (book, filters) => {
  return filters.language.forEach(language => book.language &&book.language.indexOf(language) > -1)
  // && filters.subject.forEach(subj => book.subject && book.subject.indexOf(subj) > -1)
  // && filters.genre.forEach(genre => book.subject && book.subject.indexOf(genre) > -1)
}

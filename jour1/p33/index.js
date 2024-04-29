class NotFoundError extends Error {
  constructor() {
    super('page non trouvée')
  }
}


const fetchError = new NotFoundError()

throw fetchError

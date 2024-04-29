class NotFoundError extends Error {
  constructor() {
    super('page non trouvée')
  }
}

export { NotFoundError }

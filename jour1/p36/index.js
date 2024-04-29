import { NotFoundError } from "./error.js"

const fetchError = new NotFoundError()

throw fetchError

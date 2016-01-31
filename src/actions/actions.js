import { COMPLETE_TODO } from '../constants/consts'

export function completeTodo(id) {
  console.log("CREATING ACTION: " + COMPLETE_TODO);
  return { type: COMPLETE_TODO, id}
}
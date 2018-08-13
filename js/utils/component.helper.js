export function fillStateInputs(inputs) {
  const initialState = {}
  inputs.forEach(el => initialState[el.key] = '')
  return initialState
}

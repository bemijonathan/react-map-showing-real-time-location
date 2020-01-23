const initialState = {
  count: 1
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 }
    case 'SUB':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
export default Reducer
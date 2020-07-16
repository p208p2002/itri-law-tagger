const initialState = {
  currentSelectDefendant:undefined
}

function Reducer(state = initialState, action) {
    switch (action.type) {
      case 'SIDE_MENU_SET_CURRENT_SELECT_DEFENDANT':
        return Object.assign({},state,{
          currentSelectDefendant:action.defendant
        })
      default:
        return state
    }
}
  
export default Reducer
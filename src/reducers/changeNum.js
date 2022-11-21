const initialState=0;
const changeTheNumber = (state = initialState,action) => {
  switch(action.type){
    case "INCREAMENT": return state+action.payloadValue;
    case "DECREAMENT": return state-1;
    default: return state;
  }
}
export default changeTheNumber;
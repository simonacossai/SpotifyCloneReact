const artistsongsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ARTIST':
        return action.artist;
      case 'LOAD_MORE_ARTIST':
        return [...state, ...action.artist];
      
    
    default:
        return state;
  }}
  export default artistsongsReducer;
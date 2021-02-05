export default function (state = {}, action) {
    switch (action.type) {
      case "ADD_SONGS_TO_EMINEM":
        console.log(state);
        return {
          ...state,
          eminemSongs: state.eminemSongs.concat(action.payload),
        };
      //pass an id not the whole object
      case "ADD_SONGS_TO_ARIANA":
        return {
            ...state,
            arianaGrandeSongs: state.arianaGrandeSongs.concat(action.payload),
        };
      case "ADD_SONGS_TO_MUSE":
        console.log("adding data to global state");
        return {
          ...state,
          museSongs: state.museSongs.concat(action.payload),
        };
        default:
        return state
    }
  }
  
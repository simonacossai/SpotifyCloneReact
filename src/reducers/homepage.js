export default function (state = {}, action) {
    switch (action.type) {
      case 'STORE_HOMEPAGE_RESULT':
      return {
            ...state,
            firstrow: [action.payload.firstrow],
            secondrow: [action.payload.secondrow],
            thirdrow:[action.payload.thirdrow],
          };
      default:
        return state
    }
  }
  
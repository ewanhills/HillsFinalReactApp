import { SET_ITEMS, ADD_ITEMS, ITEMS_FETCHED, ITEMS_UPDATED, ITEMS_DELETED } from '../components/actions';

export default function games(state = [], action = {}) {
  switch(action.type) {
    case ADD_ITEMS:
      return [
        ...state,
        action.game
      ];

    case ITEMS_UPDATED:
      return state.map(item => {
        if (item._id === action.game._id) return action.game;
        return item;
      });

      case ITEMS_DELETED:
        return state.filter(item => item._id !== action.gameId);

    case ITEMS_FETCHED:
      const index = state.findIndex(item => item._id === action.game._id);
      if (index > -1) {
        return state.map(item => {
          if (item._id === action.game._id) return action.game;
          return item;
        });
      } else {
        return [
          ...state,
          action.game
        ];
      }

    case SET_ITEMS:
      return action.games;
    default: return state;
  }
}
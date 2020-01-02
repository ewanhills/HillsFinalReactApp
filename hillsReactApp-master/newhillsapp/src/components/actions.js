export const SET_ITEMS = 'SET_ITEMS';
export const ADD_ITEMS = 'ADD_ITEMS';
export const ITEMS_FETCHED = 'ITEMS_FETCHED';
export const ITEMS_UPDATED = 'ITEMS_UPDATED';
export const ITEMS_DELETED = 'ITEMS_DELETED';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setItems(games) {
  return {
    type: SET_ITEMS,
    games
  }
}

export function addItems(game) {
  return {
    type: ADD_ITEMS,
    game
  }
}

export function itemsFetched(game) {
  return {
    type: ITEMS_FETCHED,
    game
  }
}

export function itemsUpdated(game) {
  return {
    type: ITEMS_UPDATED,
    game
  }
}


export function itemsDeleted(gameId){
  return {
    type: ITEMS_DELETED,
    gameId
  }
}


export function saveItem(data) {
  return dispatch => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(addItems(data.game)));
  }
}

export function updateGame(data) {
  return dispatch => {
    return fetch(`/api/games/${data._id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(itemsUpdated(data.game)));
  }
}


export function deleteItem(id) {
  return dispatch => {
    return fetch(`/api/games/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(itemsDeleted(id)));
  }
}







export function fetchItems() {
  return dispatch => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => dispatch(setItems(data.games)));
  }
}

export function fetchItem(id) {
  return dispatch => {
    fetch(`/api/games/${id}`)
      .then(res => res.json())
      .then(data => dispatch(itemsFetched(data.game)));
  }
}
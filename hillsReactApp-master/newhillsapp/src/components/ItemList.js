import PropTypes from 'prop-types';
import React from 'react';
import ItemCard from './ItemCard';


export default function ItemList({ games, deleteGame }) {
  const emptyMessage = (
    <p>There are no games yet in your collection.</p>
  );

  const itemList = (
    <div className="ui four cards">
      { games.map(game => <ItemCard game={game} key={game._id} deleteGame={deleteGame} />) }
    </div>
  );

  return (
    <div>
      {games.length === 0 ? emptyMessage : itemList}
    </div>
  );
}

ItemList.propTypes = {
  games: PropTypes.array.isRequired,
  deleteGame: PropTypes.func.isRequired
}
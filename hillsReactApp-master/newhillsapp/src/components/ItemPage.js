import PropTypes from 'prop-types';
import React from 'react';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { fetchItems, deleteItem } from './actions';

class   ItemPage extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <h1>Shop Items</h1>

        <ItemList games={this.props.games} deleteItem={this.props.deleteItem} />
      </div>
    );
  }
}

  ItemPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired

}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchItems, deleteItem })(  ItemPage);
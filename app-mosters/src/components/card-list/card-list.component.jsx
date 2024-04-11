import { Component } from 'react';

import Card from './card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    // console.log(this.props); // This will output both monsters and anything array

    // Component gets re-render based on two conditions
    // 1. When ever the props changes
    // 2. When setState get called
    console.log(this.props.monsters);

    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;

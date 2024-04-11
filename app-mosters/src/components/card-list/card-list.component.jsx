import { Component } from 'react';

class CardList extends Component {
  render() {
    // console.log(this.props); // This will output both monsters and anything array

    // Component gets re-render based on two conditions
    // 1. When ever the props changes
    // 2. When setState get called
    console.log(this.props.monsters);
    console.log('Render from CardList');
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;

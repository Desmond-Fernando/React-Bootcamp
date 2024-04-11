import Card from '../card/card.component';
import './card-list.styles.css';

// const CardList = (props, forwaredRefs) => {
// const CardList = (props) => {
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;

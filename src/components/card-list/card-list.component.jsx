import react from "react";
import './card-list.style.css';
import Card from "../card/card.component";

const CardList = (props) => {

  console.log(props);
  return <div className="card-list">
    {
      props.monsters.map(monster => (
        <Card monster={monster} key={monster.id}/>
        /* { <h1 key={monster.id}>{monster.name}</h1> */
      ))
    }
  </div>;

}

export default CardList;

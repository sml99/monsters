import './card.styles.css';

const Card = ({ monster: { name, email, id } }) => {
   return (
      <div className="card-container" key={id}>
         <img src={`https://robohash.org/robot/${id}?set=set2&size=360x360`} alt={`${name.split(' ')[0]}`} />
         <h2>{name}</h2>
         <p>{email}</p>
      </div>
   );
};

// class Card extends Component {
//    render() {
//       const { name, email, id } = this.props.monster;
//       return (
//          <div className="card-container" key={id}>
//             <img src={`https://robohash.org/robot/${id}?set=set2&size=360x360`} alt={`${name.split(' ')[0]}`} />
//             <h2>{name}</h2>
//             <p>{email}</p>
//          </div>
//       );
//    }
// }

export default Card;

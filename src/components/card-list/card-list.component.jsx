import Card from '../card/card.component'
import './card-list.styles.css'

const CardLsit = ({monsters}) => (
    <div className='card-list'>
        {monsters.map(monster => {
           return <Card monster={monster}/>
        })}
    </div>
);
export default CardLsit;
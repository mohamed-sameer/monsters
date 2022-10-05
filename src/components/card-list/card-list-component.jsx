import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
	<div className="card-list">
		{monsters.map((monster, i) => {
			return <Card monster={monster} key={i} />;
		})}
	</div>
);

export default CardList;

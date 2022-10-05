import './search-box-styles.css';

const SearchBox = ({ className, onChangeHandler }) => (
	<div>
		<input
			className={`search-box ${className}`}
			type="search"
			placeholder="search monsters"
			onChange={onChangeHandler}
		/>
	</div>
);

export default SearchBox;

import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // aplhabetical order
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical order
  //   fruits.sort((a, b) => a.calories - b.calories); // ascending order
  //   fruits.sort((a, b) => b.calories - a.calories); // descending order

  //   const lowCalFruit = fruits.filter((fruit) => fruit.calories < 50); // filter fruits with less than 50 calories
  //   const highCalFruit = fruits.filter((fruit) => fruit.calories >= 50); // filter fruits with 50 or more calories

  const listItems = itemList.map(({ id, name, calories }) => (
    <li key={id}>
      {name}: &nbsp; <b>{calories}</b> calories
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;

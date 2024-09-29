import PropTypes from 'prop-types'


function List(props) {



   // fruits.sort((a , b) => a.name.localeCompare(b.name));  //Alphabetical Order
    //fruits.sort((a, b) => a.calories - b.calories); //Numerical Order

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 80); //filter calories
   // const highCalFruits = fruits.filter(fruit => fruit.calories >= 80); ///filter calories

    const category = props.category //category of the item
    const itemList = props.items //the array of items in App.jsx
 
    const listItems = itemList.map(item =>   <li key={item.id}>
                                            {item.name}:   
                                            <b> {item.calories}</b></li>);

    return(
        <>
            <div className='dividend'>
                <h3 className='list-category'>{category}</h3>
                <ul className='list-items'>{listItems}</ul>
            </div>
        </>
    );

}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                             name: PropTypes.string,
                                             calories: PropTypes.number,
    })),

}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List
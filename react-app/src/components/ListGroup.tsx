function ListGroup() {
    let items = [
        'New york',
        'paris',
        'london',
        'tokyo',
        'mexico city'
    ]

    return (
        //<> wraps everything in it as a fragment automatically
        //items.map is like an array called items, arrow transforms it to list array that displays all items ind
        //key adds a key to each individual item so that adding/removing things dynamically is better 
        //to do anything dynamically, {} are needed
        //when doing: condition && item, result is = to item if true, null if false
        <>
            <h1> List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
             {items.map((item, index) => <li className = "list-group-item" key = {item} onClick={(event) => console.log(event)} >{item}</li>)}
             
            </ul>
        </>
    );
}   

export default ListGroup;
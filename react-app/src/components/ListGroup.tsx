interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: String) => void;
}

import { useState } from "react";

function ListGroup({items, heading, onSelectItem}: Props) {

    //hook, states to react that we'll have data that changes overtime
    const [selectedIndex, setSelectedIndex] = useState(-1);
   

    //event handler
    //const handleClick = (event: MouseEvent) => console.log(event)

    return (
        //<> wraps everything in it as a fragment automatically
        //items.map is like an array called items, arrow transforms it to list array that displays all items ind
        //key adds a key to each individual item so that adding/removing things dynamically is better 
        //to do anything dynamically, {} are needed
        //when doing: condition && item, result is = to item if true, null if false
        //event: MouseEvent is a type annotation to describe the type, event is. 
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
             {items.map((item, index) => <li className = {selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key = {item} onClick={() => {setSelectedIndex(index), onSelectItem(item); } } >{item}</li>)}
             
            </ul>
        </>
    );
}   

export default ListGroup;
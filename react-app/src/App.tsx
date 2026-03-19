import ListGroup from "./components/ListGroup";

function App(){
  let items = [
        'New york',
        'paris',
        'london',
        'tokyo',
        'mexico city'
    ]
    const handleSelectItem = (item: String) => {
      console.log(item);
    }

  return <div> <ListGroup items = {items} heading = "Cities" onSelectItem={handleSelectItem}/> </div>
}

export default App;
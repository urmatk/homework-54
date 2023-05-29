import React, {useState} from 'react';
import './App.css';
import Square from "./components/Square/Square";
import PlayingField from "./components/PlayingField/PlayingField";
import Counter from "./components/Counter/Counter";
import Reset from "./components/Reset/Reset";



function App() {
    const createItems = () => {
        const fields = [];

        for (let i = 1; i <= 36; i++){
            fields.push({hasItem: false, clicked: false})
        }

        const randomIndex = Math.floor(Math.random() * fields.length);
        fields[randomIndex].hasItem = true;
        return fields;
    };

    const [items, setItems] = useState(createItems());
    const [counter, setCounter] = useState(0);

    const openSquare = (index: number) => {
        const itemsCopy = [...items];
        const square = {...items[index]};
        square.clicked = true;
        itemsCopy[index] = square;
        setItems(itemsCopy);
        setCounter(counter + 1);
    };

    const reset = () => {
        setItems(createItems());
        setCounter(0)
    }

  return (
    <div className="App">
        <PlayingField items={items} openSquare={openSquare} />
        <Counter counter={counter}/>
        <Reset restartGame = {() => reset()}/>
    </div>
  );
}

export default App;


// const peopleCopy = [...people];
// const personCopy = {...peopleCopy[1]};
// personCopy.name = 'John Doe';
// peopleCopy[1] = personCopy;
// setPeople(peopleCopy);

import {useState} from "react";

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: false},
    {id: 3, description: "Charger", quantity: 1, packed: true},
];


function App() {
    const [items, setItems] = useState([]);


    function handleAddItems(item) {
        setItems(items => [...items, item]);
    }

    return (
        <div className="app">
            <Logo/>
            <Forms onAddItems={handleAddItems}/>
            <PackingList items={items}/>
            <Stats/>
        </div>
    )
}

function Logo() {
    return (
        <h1>🌴Far Away 🧳</h1>
    )
}

function Forms({onAddItems}) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();

        if(!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now()
        }
        console.log(newItem);

        onAddItems(newItem);

        setDescription('');
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
            >
                {Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
            </select>
            <input
                type="text"
                placeholder="Item..."
                onChange={(e) => setDescription(e.target.value) }
                value={description}
            />
            <button>Add</button>
        </form>
    )
}

function PackingList({items}) {
    return (
        <div className="list">
            <ul>
                {items.map(item => <Item item={item} key={item.id}/>)}
            </ul>
        </div>
    )
}

function Stats() {
    return (
        <footer className="stats">
            🧳 You have X items on your list, and you already packed X (X%)
        </footer>
    )
}

function Item({item}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    )
}

export default App;
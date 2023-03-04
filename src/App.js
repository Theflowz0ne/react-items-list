import React, { useState } from 'react';
import AddItem from './Components/AddItem';
import Color from './Components/Color';

function App() {
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('shoppinglist')),
    );
    const [newItem, setNewItem] = useState('');

    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, item };
        const listItems = [...items, myNewItem];
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    };

    const handleCheck = (id) => {
        const listItems = items.map((item) => {
            if (item.id === id) {
                return (item = { ...item, checked: !item.checked });
            } else {
                return item;
            }
        });
        setItems(listItems);
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    };

    return (
        <>
            <div>
                <AddItem
                    newItem={newItem}
                    setNewItem={setNewItem}
                    handleSubmit={handleSubmit}
                />
                <Color
                    items={items}
                    setItems={setItems}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            </div>
        </>
    );
}

export default App;

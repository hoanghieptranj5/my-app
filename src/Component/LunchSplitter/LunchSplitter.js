import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

const LunchSplitter = () => {
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    name: '',
    price: 0,
    paidBy: '',
  });
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    calculateSharedPrice();
  }, [items]);

  const addPerson = () => {
    if (currentName && !names.includes(currentName)) {
      setNames([...names, currentName]);
      setCurrentName('');
    }
  };

  const addItem = () => {
    if (currentItem.name && currentItem.price > 0 && currentItem.paidBy) {
      setItems([
        ...items,
        { ...currentItem, price: parseFloat(currentItem.price) },
      ]);
      setCurrentItem({ name: '', price: 0, paidBy: '' });
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const calculateSharedPrice = () => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const perPerson = names.length ? total / names.length : 0;

    const payments = names.reduce((acc, name) => {
      acc[name] = items
        .filter((item) => item.paidBy === name)
        .reduce((sum, item) => sum + item.price, 0);
      return acc;
    }, {});

    const balances = names.map((name) => ({
      name,
      balance: payments[name] - perPerson,
    }));

    setBalances(balances);
  };

  return (
    <div className="app-container">
      <h1 className="title">Lunch Splitter</h1>

      <div className="form-section">
        <h2>Add People</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Name"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            className="input"
          />
          <button onClick={addPerson} className="button">
            Add Person
          </button>
        </div>
        <div className="list">
          <h3>People:</h3>
          <ul>
            {names.map((name, index) => (
              <li key={index} className="list-item">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {names.length > 0 && (
        <div className="form-section">
          <h2>Add Items</h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="Item Name"
              value={currentItem.name}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, name: e.target.value })
              }
              className="input"
            />
            <input
              type="number"
              placeholder="Price"
              value={currentItem.price}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, price: e.target.value })
              }
              className="input"
            />
            <select
              value={currentItem.paidBy}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, paidBy: e.target.value })
              }
              className="input"
            >
              <option value="">Paid By</option>
              {names.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <button onClick={addItem} className="button">
              Add Item
            </button>
          </div>

          <div className="list">
            <h3>Items:</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  {item.name} - ${item.price.toFixed(2)} paid by {item.paidBy}
                  <button
                    className="delete-button"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="results-section">
        <h2>Balances</h2>
        <ul className="balances-list">
          {balances.map((balance, index) => (
            <li
              key={index}
              className={`balance-item ${balance.balance > 0 ? 'positive' : 'negative'}`}
            >
              {balance.name}{' '}
              {balance.balance > 0
                ? `is owed $${balance.balance.toFixed(2)}`
                : `owes $${(-balance.balance).toFixed(2)}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LunchSplitter;

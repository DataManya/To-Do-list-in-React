import React from 'react';
import logo from './logo.svg';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faTrash)
library.add(faCircle)
library.add(faCheckCircle)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.text= text;
      }
    })
    this.setState({
      items: items
    })   
  }
  
  handleCheck = (key) =>{
    const items = this.state.items;
    items.map(item=>{      
      if(item.key === key) {
        item.checked = !item.checked;
      }
    })
    this.setState({
      items: items
    })   
  }

  render() {
    return (
      <div className="myApp">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter new task"
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items}
          handleCheck={this.handleCheck}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}></ListItems>
      </div>
    );
  }
}

export default App;

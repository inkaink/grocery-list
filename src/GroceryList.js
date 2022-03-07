import { Component } from "react";
import check from "./check.jpg"

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(event) {
        this.setState({userInput: event});                                      //console.log(event.target.value) - вместо этого прописываем в onChange={(e) => {this.onChangeEvent(e.target.value)}} // позволяет получить доступ к тому, что печатает пользователь в input
    }

    addItem(input) {                                                            // вместо input можно писать что угодно
        if(input === '') {
            alert("Please enter an item")
        }
        else {                                                       
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''})               //console.log(listArray)
        }  
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];                                                           // либо можно прописать listArray.length = 0;
        this.setState({groceryList: listArray})         
    }

    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSumit(e) {                                                              // чтобы страница не перезагружалась
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSumit}>
                    <div className="container">
                        <input type="text" 
                        placeholder="What do you want to buy?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} />
                    </div>
                    <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
                    </div>
                    <ul>
                    {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossWord} key={index}>
                            <img src={check} width="40px" alt="check-box" />
                            {item}</li>
                        ))}
                    </ul>
                    <div className="container">
                    <button onClick={() => this.deleteItem(this.state.userInput)} className="btn delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}
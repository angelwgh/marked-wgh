import React, { Component } from "react";
// import toduItem from './TodoItem'
import ToduItem from "./TodoItem";

class ToduList extends Component{

    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            list: [{
                value: '1',
                id:0
            }]
        }
    }

    add() {
        this.setState({
            list: [...this.state.list, {
                value: this.state.inputValue,
                id: new Date().getTime()
            }],
            inputValue: ''
        })
    }
    del(index) {
        // console.log(index)
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
        })

    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick = { this.add.bind(this) }>click</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <ToduItem del={this.del.bind(this)}  key={item.id} content={{item, index}} />
                            // return <li key={item.id} onClick={this.del.bind(this, index)}>{item.value}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ToduList
import React, { Component } from "react";
import ToduList from './views/ToduList'
// import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 1
        }

    }

    handleClick() {
        console.log(this)
        // this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <ToduList />
            
        );
    }
}

export default App


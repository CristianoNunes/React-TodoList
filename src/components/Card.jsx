import React, { Component } from 'react'
import InputTodo from './InputTodo'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <h1>Todo List</h1>
                <InputTodo />
            </div>
        )
    }
}

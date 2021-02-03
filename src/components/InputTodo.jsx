import React, { Component } from 'react'
import Button from './Button'
import ListTodo from './ListTodo'

export default class InputTodo extends Component {
    render() {
        return (
            <div>
                <div className="boxInputTodo">
                    <input type="text" className="inputTodo" />
                    <Button className={'btnAdd'} value={'Add'} />
                </div>
                <ListTodo />
            </div>
        )
    }
}

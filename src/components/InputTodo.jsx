import React, { Component } from 'react'
import Button from './Button'

export default class InputTodo extends Component {
    render() {
        return (
            <div className="boxInputTodo">
                <input type="text" className="inputTodo" />
                <Button className={'btnAdd'} value={'Add'} />
            </div>
        )
    }
}

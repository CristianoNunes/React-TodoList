import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const { name, id, className, onClick, value } = this.props;
        return (
            <button
                type="button"
                id= { id }
                name={ name }
                className={ className }
                onClick={ onClick }
            >
                { value }
            </button>
        )
    }
}

Button.defaultProps = {
    id: 'button',
    value: '',
    className: '',
    name: 'button',
    onClick: () => console.log(),
};

import React from 'react'

class Counter extends React.Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        <br/>
        Clicked: {JSON.stringify(value)} times
        <br/>
        <br/>
        <button className="btn btn-danger-impl" onClick={onIncrement}>
          +
        </button>
        {' '}
        <button className="btn btn-danger-impl" onClick={onDecrement}>
          -
        </button>
      </p>
    )
  }
}

export default Counter
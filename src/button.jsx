import React, { useState } from 'react'

const classAndHooks = () => {
  const [item, setItem] = useState(1)
  const increment = () => {
    setItem + 1
  }
  const decrement = () => {
    setItem - 1
  }
  return (
    <>
      <button onClick={increment}>증가</button>
      {item}
      <button onClick={decrement}>감소</button>
    </>
  )
}

export default classAndHooks

// 훅스를 사용했을 때와 class 사용했을 때의 차이점을 살펴보자.

class uglyClass extends React.Component {
  state = {
    item: 1,
  }
  render() {
    const { item } = this.useState
    return (
      <>
        <button onClick={this.increment}>증가</button>
        {item}
        <button onClick={this.decrement}>감소</button>
      </>
    )
  }
  increment = () => {
    this.setItem((state) => {
      return {
        item: state.item + 1,
      }
    })
  }
  decrement = () => {
    this.setItem((state) => {
      return {
        item: state.item - 1,
      }
    })
  }
}

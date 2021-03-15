import React, { Component } from 'react'

class MyComponent extends Component {
  state = {
    count1: 0,
    count2: 0,
  }

  onClick = () => {
    const { count1 } = this.state
    this.setState({ // setState가 호출되면서 해당 컴포넌트의 렌더링 재실행
      count1: count1 + 1,
    })
  }
}

class MyComponent extends Component {
  state = {
    count: 0,
  }

  onClick = () => { 
    // 리액트는 setState를 모아서 한번에 병렬로 처리하므로
    // 실제로는 2가 증가하지 않고 1이 증가한다
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
  }

  
  render() {
    console.log('render called') // 1번만 실행된다.
  }

  // 실제로 두번 호출되게 하는 방법
  onClick2 = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    // 두번째 setState의 prevState는 첫번째 setState의 반환값을 기다린다.
    this.setState(prevState => ({count: prevState.count + 1}))
  }
}

class MyComponent extends Component {
  state = {
    count: 0
  }
  
  onClick = () => {
    // setState메서드의 두번째 매개변수는 처리가 끝났을 떄 호출되는 콜백함수가 들어간다.
    this.setState({count: 123}, () => console.log('setCount called'))
  }
}
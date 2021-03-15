import React, { Component } from 'react'
// 5.2.1
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


// 5.2.2
const counter = {
  value: 0,
  increase: function() {
    this.value++;
  }
}

counter.increase() // value: 1
const incFunc1 = counter.increase
incFunc1()
console.log(counter.value) // value: 1
const incFunc2 = counter.increase.bind(counter) //value는 Counter.value로 묶인다.
incFunc2() // value: 2

// 이벤트 처리 메서드의 함수 바인딩을 render 메서드와 생성자에서 구현
class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.onClickInc = this.onClickInc.bind(this)
  }

  // 얘는 this 객체를 쓸 일이 없으므로 바인딩하지 않아도 된다
  onClickHello(e) {
    e.preventDefault()
    alert('hello world')
  }

  // 생성자에 바인딩
  onClickDec(e) {
    const { count } = this.state
    this.setState({ count: count - 1 })
  }

  // 버튼함수 안에 바인딩
  onClickInc(e) {
    const { count } = this.state
    this.setState({ count: count + 1})
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHello} />
        <button onClick={this.onClickDec.bind(this)} />
        <button onClick={this.onClickInc} />
      </div>
    )
  }
}

// 화살표 함수를 사용하면 this가 자동으로 바인딩 된다.
// 클래스 인스턴스가 생성될 때 한번만 바인딩 되므로 렌더링 성능에도 문제가 없다
class MyComponent extends Component {
  constructor(props) {
    super(props)
  }
  // 얘는 this를 안쓰므로 클래스 밖으로 빼도 된다.
  onClickHello = e => {
    e.preventDefault()
    alert('hello world')
  }

  onClickDec = e => {
    const { count } = this.state
    this.setState({ count: count - 1 })
  }

  onClickInc = e => {
    const { count } = this.state
    this.setState({ count: count + 1})
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHello} />
        <button onClick={this.onClickDec.bind(this)} />
        <button onClick={this.onClickInc} />
      </div>
    )
  }
}













class MyComponent extends Component {
  
}
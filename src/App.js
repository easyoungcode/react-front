// import './App.css';
import { Component } from 'react';
import LearningComponets from './components/learning-examples/LearningComponent';
import Counter from './components/learning-examples/counter/Counter';
import TodoApp from './components/todo/TodoApp'

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  )
}

// 컴포넌트 이름은 대문자로 쓰기
// HTML은 소문자로 쓰기
// import에서 기본 컴포넌트가 아닌 걸 쓰고 싶다면 꼭 {} 안에 넣어야 한다!! (FifthComponent처럼)

// property1="value1" property2="value2"
/*
function PlayingWithProps(properties) {
  console.log(properties)
  console.log(properties.property1)
  console.log(properties.property2)

  return (
    <div>Props</div>
  )
}
*/
export default App;

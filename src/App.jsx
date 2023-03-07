import Header from './components/header/Header'
import Content from './components/content/Content'
import Total from './components/total/Total'
import './App.css'

function App() {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State a component'
  const exercises3 = 14

  const content = [
	{part: part1,
	exercise: exercises1},
	{part: part2,
	exercise: exercises2},
	{part: part3,
	exercise: exercises3}
  ]
  
  return (
    <div className="App">
      <Header course={course} />
      <Content contents={content} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App

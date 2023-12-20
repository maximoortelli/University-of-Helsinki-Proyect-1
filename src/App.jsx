import "./Styles/App.css"
import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App= () => {

  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App

import Part from "./Part"

const Content = () => {
    const course = 'Task Done :)'
    console.log(course)
    alert('Task Done :)')

  return (
    <div>
        <Part course={course}/>
        <Part course={course}/>
        <Part course={course}/>
    </div>
  )
}

export default Content
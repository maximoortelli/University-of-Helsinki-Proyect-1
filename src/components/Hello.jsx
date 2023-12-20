

const Hello = (props) => {
    console.log(props)
  return (
    <div>
        <p>
             Hello {props.name}, you are {props.age} years old
        </p>
    </div>
  )
}

export default Hello
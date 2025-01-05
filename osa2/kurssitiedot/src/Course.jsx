const Course = ({ course }) => {
    return (
      <div>
        <SubHeader course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
        {parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        </div>
    )
}

const Total = ({ parts }) => {
    const exercises = parts.map(part =>
        part.exercises
    )
    return (
        <div>
        <b>Total number of exercises: {exercises.reduce(
            (exercises, current) => exercises + current
        )}</b>
        </div>
    )
}

const Part = (props) => {
    return (
      <div>
        <p>
          {props.name} {props.exercises}
        </p>
      </div>
    )
}

const SubHeader = (props) => {
    return (
        <div>
        <h2>{props.course}</h2>
        </div>
    )
}

export default Course

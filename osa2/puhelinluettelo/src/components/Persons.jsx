import Person from './Person'

const Persons = (props) => {
  return (
    <div>
      {props.personsToShow.map(person => (
        <Person
          key={person.id}
          person={person}
          remove={() => props.remove(person.id)}
        />
      ))}
    </div>
  )
}

export default Persons

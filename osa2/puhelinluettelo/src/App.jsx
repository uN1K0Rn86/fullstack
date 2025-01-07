import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterWith, setFilterWith] = useState('')

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      const oldPerson = persons.find(person => person.name === newName)
      const personObject = {
        name: newName,
        number: newNumber,
        id: oldPerson.id
      }
      if (window.confirm(`${oldPerson.name} is already in the phonebook. Replace the number with a new one?`)) {
        personService
          .update(oldPerson.id, personObject)
            .then(changedPerson => {
              setPersons(persons.map(person => person.id !== oldPerson.id ? person : changedPerson))
              setNewName('')
              setNewNumber('')
            })
      }
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const value = event.target.value
    setFilterWith(value)
  }

  const remove = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const personsToShow = filterWith === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterWith.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterWith} onChange={handleFilterChange} />
      <h3>Add new person</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        personsToShow={personsToShow}
        remove={remove}
      />
    </div>
  )
}

export default App

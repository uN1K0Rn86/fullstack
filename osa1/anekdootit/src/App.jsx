import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const Display = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      {props.anecdote}<br/>
      Has {props.votes} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const randomize = () => {
    const newAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(newAnecdote)
  }

  const vote = () => {
    const maxVotes = Math.max(...points)
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    if (copy[selected] > maxVotes) {
      setPopular(selected)
    }
  }
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [popular, setPopular] = useState(0)

  return (
    <div>
      <Display header='Anecdote of the day' anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={vote} text='Vote' />
      <Button handleClick={randomize} text='Next anecdote' />
      <Display header='Most popular anecdote' anecdote={anecdotes[popular]} votes={Math.max(...points)} />
    </div>
  )
}

export default App
import React, { Component, useState, useEffect } from 'react'
import { Add, Sub } from './actions'
import { useSelector, useDispatch } from 'react-redux'
import Learn from './Learn'
import ChatCOmponent from './socket'

const Home = () => {

  // React Hooks setState explanation 

  const [state, setMovies] = useState([{
    name: 'thor'
  }])

  const increment = () => {
    setMovies(p => p.concat({ name: 'jona' }))
  }
  let count = useSelector(state => {
    return state.count
  })
  useEffect(() => {
    console.log('effect')
  }, [count])

  const dispatch = useDispatch()
  let addCount = () => dispatch(Add())
  let subCount = () => dispatch(Sub())

  return (
    <>
      <div className="container">
        {/* <div>
          count: {count}
        </div>
        <button onClick={() => increment()}> + </button>
        <button onClick={() => subCount()}> - </button>
        <Learn count={count} /> */}
        <ChatCOmponent></ChatCOmponent>
      </div>
    </>
  )
}


export default Home
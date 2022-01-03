import React from 'react';
import './App.css'
import './index.css'
import Card from './components/Card'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from './components/queries';



function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS, { variables: { page: 3 } })

  if (loading) return <div className="text-gray-300 text-2xl text-center" >Loading...</div>

  if (error) return <div className="text-gray-300 text-2xl text-center" >Sorry! Something went wrong</div>

  console.log(data)
  return (
    <div className="bg-blue-900 h-full">
      <header className="uppercase font-black text-center sm:text-lg md:text-2xl text-gray-300 h-20 flex justify-center items-center mb-10">
        <h1>Project built with Vite + React + TailwindCSS + Graphql</h1>
      </header>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-10'>
        {data?.characters?.results.map(character =>
          <Card characterObj={character} key={character.id} />
        )}
      </div>
    </div>
  )
}

export default App

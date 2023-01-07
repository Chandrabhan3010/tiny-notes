import React, {useState,useEffect} from 'react'
import "./Home.css"

import Navbar from '../../components/Navbar/Navbar'
import Note from '../../components/Note/Note'

function Home() {

  const[notes, setNotes ]=useState([
    {
      title : "note1",
      content:"this is contents of note 1"
    },
    {
      title :"note2",
      content:"this is contents of note 2"
    },
    {
      title:"note3",
      content:"this is contents of note 3"
    },
    {
      title:"note4",
      content:"this is contents of note 4"
    }
  ])

  return (
    <div>
      <Navbar/>
      <div className='app-title-container'>
          <h1 className='app-title'>Mine Notes </h1>
      </div>

      <div className='notes-container'>
        {
          notes.map((note , index )=>{
            return(<Note title={note.title} content={note.content}/>)
          })
        }
      </div>
    </div>
  )
}

export default Home
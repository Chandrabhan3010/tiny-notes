import React, { useState, useEffect } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Note from "../../components/Note/Note";

function Home() {
  const [notes, setNotes] = useState([
    {
      title: "note",
      content: "you can more note to this list",
    },
  ])

  const [title , setTitle] = useState("")
  const [content , setContent] = useState("")

  function addNote(){

    const newNote={
      "title":title,
      "content":content
    }

    //const temp = notes;
    //temp.push(newNote)
    //setNotes(temp)

    /* setNotes([...notes , {title:title , content:content}]) */
    setNotes([...notes, newNote ])

    alert('note added successfully!')

    setTitle("")
    setContent("")
  }

  return (
    <div>
      {/*    < Navbar/> - this is comment section in which navbar is deleted */}
      <div className="app-title-container">
        <h1 className="app-title">Mine Notes </h1>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="notes-container">
            {notes.map((note, index) => {
              return <Note title={note.title} content={note.content} />;
            })}
          </div>
        </div>
        <div className="col-md-6">
          <div className="note-editor-container">
            <h3 className="text-center">Add Note</h3>
            <form>
              <div>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control mt-4 " placeholder="Note Title"></input>
              </div>
              <div>
                <input type="text" value={content} onChange={(e)=>{setContent(e.target.value)}} className="form-control mt-4" placeholder="Note Description"/>
              </div>
              <div className="d-flex justify-content-center add-note-button-container">
                <button type="button" className="btn btn-primary mt-4" onClick={addNote}>Add Note</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

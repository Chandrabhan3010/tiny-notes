import React, { useState, useEffect } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Note from "../../components/Note/Note";

function Home() {
  const [notes, setNotes] = useState([
    {
      title: "note1",
      content: "this is contents of note 1",
    },
    {
      title: "note2",
      content: "this is contents of note 2",
    },
    {
      title: "note3",
      content: "this is contents of note 3",
    },
    {
      title: "note4",
      content: "this is contents of note 4",
    },
    {
      title: "notes5",
      content: "this is contents of note5",
    },
    {
      title: "notes6",
      content: "this is contents of note6",
    },
    {
      title: "notes7",
      content: "this is contents of note7",
    },
  ]);

  return (
    <div>
      {/*< Navbar/> - this is comment section in which navbar is deleted */}
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
                <input type="text" className="form-control " placeholder="Note Title"></input>
              </div>
              <div>
                <input type="text" className="form-control mt-4" placeholder="Note Description"></input>
              </div>
              <div>
                <button className="btn btn-primary mt-4">Add Note</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import EditMenu from "./EditMenu"

import { axiosWithAuth } from "./../helpers/axiosWithAuth"
import { useHistory, useParams } from "react-router-dom";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, updatedList, setList }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const { id } = useParams()
  const { push } = useHistory()

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
    console.log(color)
  };
  // console.log(colorToEdit.id)
  

  const saveEdit = e => {
    e.preventDefault();
    
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`,colorToEdit)
    .then(res => {
      
      console.log(res)
      console.log(colors)
      setList(!updatedList)
      // updateColors(res.data)
      console.log(colors)
      // push("/bubblespage")
    })
    .then(err => {
      console.log(err)
    })
  };
  

  const deleteColor = color => {
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => {
      console.log(res)
      setList(!updatedList)
      // setColorToEdit(res.data)
      // updateColors(res.data)
    })
    .then(err => {
      console.log(err)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.
import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './style.css'

function MenuDrop(props) {
  const { data } = props

  return (
    <div className="menu-list-drop">
      {
        data.map((item, index) => (
          <ul key={index}>
          {item.map((items, index) => (
            <li key={index}>
              <Link to={items.page}>{items.title}</Link>
            </li>
          ))}
          </ul>
        ))
      }
    </div>
  )
}

export default MenuDrop;

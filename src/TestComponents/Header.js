import React from 'react'
import Button from './Button'
export default function Header({onAdd,showAdd}) {
    return (
      <header className="header">
      <h2>Click The Add Button to Add Anime To The List</h2>
      <Button onClick={onAdd}  text={showAdd?'Close':'Add'}/>
      </header>
    )
}

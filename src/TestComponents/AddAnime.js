import React from 'react'
import { useState } from 'react'
export const AddAnime = ({onAdd}) => {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [completed,setCompleted]=useState(false);
    const [rating,setRating]=useState('');
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!title){
            alert('Add Anime To Continue')
            return
        }
        if(rating<0 || rating>10 || isNaN(rating)){
            alert('Enter a valid rating')
            return
        }
        onAdd({title,desc,completed,rating})
        setTitle('')
        setDesc('')
        setCompleted(false)
        setRating('')
    }
    return (
        <div className="add-anime">
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Anime</label>
                <input type='title' placeholder='Add Anime' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type='title' placeholder='Add Anime description' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Your Rating</label>
                <input type='title' placeholder='/10' value={rating} onChange={(e)=>setRating(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Completed?</label>
                <input type='checkbox' checked={completed} value={completed} onChange={(e)=>setCompleted(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Add Anime' className="btn btn-block"/>
        </form>
        </div>
    )
}

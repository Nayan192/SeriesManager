import React from 'react'
export const SingleAnime = ({anime,OnDelete,fabAnime}) => {
    return (
        <div className={`anime ${anime.completed?'fav':'notfav'}`}>
            <h3>{anime.title}</h3>
            <p>{anime.desc}</p>
            <p>{anime.rating}/10</p>
            <button className="btn" onClick={()=>OnDelete(anime.id)}>Click to delete</button>
        </div>
    )
}

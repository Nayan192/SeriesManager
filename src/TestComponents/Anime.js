import React from 'react'
import {SingleAnime} from "./SingleAnime";
export const Anime = ({animes,OnDelete,fabAnime,onAdd}) => {
    return (
        <div className="try">

            {animes.map((anime,index)=>{
                return <SingleAnime anime={anime} key={index} OnDelete={OnDelete} fabAnime={fabAnime}/>
            })}
            
        </div>
    )
}

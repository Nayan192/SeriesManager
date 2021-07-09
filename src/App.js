import './App.css';
import Header from "./TestComponents/Header";
import {Footer} from "./TestComponents/Footer";
import {Anime} from "./TestComponents/Anime";
import {AddAnime} from "./TestComponents/AddAnime";
import React, { useState,useEffect } from 'react';
function App() {
  const[showAddAnime,setShowAddAnime]=useState(false)
  const [anime, setAnime] = useState([ ]);
  useEffect(()=>{
    const getAnime=async()=>{
      const animeFromServer=await fetchAnimes()
      setAnime(animeFromServer)
    }
    getAnime()
  },[])
//Fetching the data from the json server
  const fetchAnimes=async()=>{
    const res=await fetch('http://localhost:5000/anime')
    const data=await res.json()
    console.log(data)
    return data
  }

  const AddAnim=async(animes)=>{
    const res=await fetch('http://localhost:5000/anime',{
      method:'POST',
    headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(animes),
    })
    const data = await res.json()
    setAnime([...anime,data])
    // const id=Math.floor(Math.random()*10000+1)
    // const newAnime={id,...animes}
    // setAnime([...anime,newAnime])
  }


  const deleteAnime= async(id)=> {
    await fetch(`http://localhost:5000/anime/${id}`,{
      method:'DELETE',
    })
    setAnime(anime.filter((anime)=>anime.id!==id))

  }
  const fetchAnime=async(id)=>{
    const res=await fetch(`http://localhost:5000/anime/${id}`)
    const data=await res.json()
    console.log(data)
    return data
  }

  const favAnime=async(id)=>{
    const animeToFav=await fetchAnime(id)
    const updateFav= {...animeToFav,fav:!animeToFav.fav}
    const res=await fetch(`http://localhost:5000/anime/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(updateFav)
  })
  const data= await res.json()

    setAnime(anime.map((anime)=>
    anime.id===id?{...anime,fav:data.fav}:anime))
  }
  return (
    <>
    <h1 className="heading">Welcome To Anime Recorder!!</h1>
    <div className="line">
    <Header onAdd={()=>setShowAddAnime(!showAddAnime)} showAdd={showAddAnime} />
    {showAddAnime &&<AddAnime onAdd={AddAnim}/>}
    <div className="container">
    {anime.length>0?<Anime animes={anime} OnDelete={deleteAnime} fabAnime={favAnime}/>:<h1>Add Your First Anime</h1>}
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default App;

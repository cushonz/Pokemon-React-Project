import React from 'react'

let url = "https://play.pokemonshowdown.com/sprites/"


export default function Grid (suffix) {
  
  return (

    <div className="container">
      <div className="item"><img src ={pokemon_sprite0}/></div>
      <div className="item"><img src ={pokemon_sprite1}/></div>
      <div className="item"><img src ={pokemon_sprite2}/></div>
      <div className="item"><img src ={pokemon_sprite3}/></div>
      <div className="item"><img src ={pokemon_sprite4}/></div>
      <div className="item"><img src ={pokemon_sprite5}/></div>
    </div>
  )
}

import React from 'react'

let pokemon_sprite0 = "https://play.pokemonshowdown.com/sprites/gen5/aipom-f.png"
let pokemon_sprite1 = "https://play.pokemonshowdown.com/sprites/gen5/beedrill-mega.png"
let pokemon_sprite2 = "https://play.pokemonshowdown.com/sprites/gen5/butterfree-gmax.png"
let pokemon_sprite3 = "https://play.pokemonshowdown.com/sprites/gen5/charizard-megax.png"
let pokemon_sprite4 = "https://play.pokemonshowdown.com/sprites/gen5/darkrai.png"
let pokemon_sprite5 = "https://play.pokemonshowdown.com/sprites/gen5/diancie.png"

export default function Grid () {
  
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

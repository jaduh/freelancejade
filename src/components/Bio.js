import React from 'react'
import { Link } from "gatsby"
import "../styles/global.css"
import Jade from "../images/jade.jpg"


const Bio = () => {
  return (
<div className ="bio-container2">


  <div className="tekst">
    <p>Hi, ik ben Jade en ik help bedrijven als de jouwe impact maken met sterke storytelling en copywriting.
  Doorgaans zie ik in iedereen een mooi mens en in alles een goed verhaal. Momenteel vecht ik met de winter in Antwerpen en wapen ik mij meermaals per dag met een dampende pot thee, schrijfmateriaal en een koekje erbij.

    Vond je deze blog interessant? Schrijf je dan zeker in voor <a href ="https://expert-experimenter-9255.ck.page/209f4ab0d8"> mijn nieuwsbrief</a>.</p>
  </div>
  <img className="bio-image2" src={Jade} alt='' />
</div>

  )
}

export default Bio;

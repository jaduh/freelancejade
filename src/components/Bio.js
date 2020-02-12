import React from 'react'
import { Link } from "gatsby"
import "../styles/global.css"
import Jade from "../images/jade.jpg"


const Bio = () => {
  return (
<div className ="bio-container2">


  <div className="tekst">
    <p>Hi, ik ben Jade en ik zie doorgaans in iedereen een mooi mens en in alles een goed verhaal. Momenteel ben ik nogal geobsedeerd door storytelling, content marketing en het bevechten van de winter in Antwerpen. Mij vind je tegenwoordig standaard bewapend met een pot dampende thee, schrijfmateriaal én een koekje erbij.

    Vond je deze blog interessant? Schrijf je dan zeker in voor <a href ="https://expert-experimenter-9255.ck.page/4769f9e9f1
"> mijn nieuwsbrief</a>.</p>
  </div>
  <img className="bio-image2" src={Jade} alt='' />
</div>

  )
}

export default Bio;

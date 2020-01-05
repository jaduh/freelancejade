import React from "react"
import SEO from "../components/Seo"
import Nav from "../components/Nav"
import ppl from "../images/jade.jpg"
import Passion from "../images/passion.png"

const AboutPage = () => (
  <div>
    <SEO title="About" />
    <Nav />
    <div className = "bio-container">
      <img className="bio-image" src={ppl} alt='' />
      <div className="containy">
        <h1 className="name">Hi, ik ben Jade</h1>
        <p className="short-bio">Mij mag je altijd storen voor een lekker bordje homemade Thai, een mooi verhaal of een goed gesprek over storytelling en content marketing.
</p>
      </div>
    </div>

    <div className="biography-container">
      <p><span>O</span> oit was het mijn droom om journalist te zijn, maar dat hijgen en jagen achter het laatste nieuws bleek niet zo mijn ding.
</p>

      <p>Verhalen maken daarentegen is waar mijn hart wel heerlijk gepassioneerd van klopt. Liefst doe ik hele dagen lang aan luisteren, luisteren, luisteren om vervolgens de juiste boodschap mooi en op maat in een reeks verhalen te verpakken. Heerlijk.
</p>

      <p>Mijn missie is om mensen en bedrijven die het beste voor hebben met de wereld te helpen om hun boodschap bij de juiste mensen over te brengen. Niet als vluchtig vergeten nieuwsfeiten, maar als aantrekkelijke verhalen waar mensen maar niet over uitgepraat raken.
</p>

    </div>
  </div>
)

export default AboutPage

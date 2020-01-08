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
<div className="center-column">
<h3>Meer weten?</h3>
<a href="https://expert-experimenter-9255.ck.page/209f4ab0d8
"><button>Schrijf je in voor mijn nieuwsbrief</button></a>
<a href="/"><h4>Volg mijn blog</h4></a>

<a href="mailto:jadeyorks@gmail.com?Subject=Hoi%20Ik%20moet%20je%20spreken!again" target="_top"><h4>Of praat met mij</h4></a>





</div>
<h2>Omdat ik van lijstjes houd (wie niet?), vind je hieronder een collectie van lijstjes over mij.</h2>
<h4>Leven</h4>
<ul>
  <li>Geboren in Den Haag
  </li>
  <li>Uit bouwjaar ‘86
  </li>
  <li>Woont momenteel in Antwerpen, maar voelt zich soms nog steeds wat Haags en  Paramaribo’s
  </li>
  <li>Zette maar liefst twee keer een lief en temperament vol mensje op de wereld
  </li>
</ul>
<h4>Werk</h4>
<ul>
  <li>Expert in verhalen maken
  </li>
  <li>Sterke storytelling en content marketingskills
  </li>
  <li>Gepassioneerd over het maken van verhalen die oplossingen aanreiken voor problemen
  </li>
  <li>Goede communicatie- en samenwerkingsskills
  </li>
  <li>Ervaring met doelgroepgerichte contentcreatie
  </li>
  <li>Uitmuntende luisterskills
  </li>
</ul>
<h4>Waar ik in wil verbeteren</h4>
<li>E-mailmarketing
</li>
<li>Sterkere video(nabewerkings)skills
</li>
<li>Programmeren van interactieve webapplicaties op maat van een goed verhaal
</li>
    </div>
  </div>
)












export default AboutPage

import React, { Component , Fragment } from 'react'
import as1 from '../images/as1.png'
import vector1 from '../images/vector1.png'

class Content extends Component {
  render() {
    return (
     <>
      <div class="main">
        <p class="cw">L'AGENCE DE MARKETING EVENEMENTIEL <br /> AU SERVICE DE VOTRE MARQUE DANS </p><p class="cr">LA MODE, LA BEAUTE ET LE LUXE </p><p class="cw">. Une Capsul + des innovations hi-tech< br />le cocktail parfait pour (re)faire parler de vous !</p>
      </div>
      <div class="d-flex aft-main">
          <section>
            <p class="title t-1"><span class="pink"> LA REALITE VIRTUELLE </span>POUR REENCHANTER</p>
            <p class="rellive">les marques mode,beauté et luxe</p>
            <p>La crise sanitaire s’éloigne et les restrictions de moins en moins contraignantes ces derniers temps signent le retour d’expériences shopping ou beauté proches de la normalité. Alors maintenant, qu’est-ce qu’on fait?</p>
            <p>
            Charge aux marques du secteur de se repositionner, et aux agences de marketing évènementiel expertes de la mode, de la beauté et du luxe de les accompagner. Notre Capsul est un outil attractif et propice à l’expérience immersive, où renouer des relations spontanées entre individus et enseignes spécialisées…  </p>
          </section>
          <aside>
            <img  class="as1" src={as1} alt="as1"/>
          </aside>
      </div>
      <img  class="v1" src={vector1} alt="vector1" />
      <div class="text-center ">
          <p class="title t-2">FAITES CONFIANCE A NOTRE AGENCE,<br />
          spécialiste du marketing immersif pour les secteurs <br /></p>
          <p class="rellive">mode, beauté et luxe</p>
          
      </div>
      <div class="text-center">
      Bien des choses ont changé, ces derniers temps, dans l’esprit de vos cibles : intérêt grandissant pour la composition des <br /> textiles et cosmétiques consommés, rapport à l’image après des mois d’essayages virtuels… <br />Notre Capsul, équipée de dispositifs de réalité virtuelle (VR) et augmentée (RA), permet
      </div>
      </>
      
    )
  }
}

export default Content
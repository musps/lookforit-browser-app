import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'
import BtnCheckBox from '@appCl/Components/BtnCheckbox'
import BtnLinkYellow from '@appCl/Components/BtnLinkYellow'

const BoxSection = ({title, desc, content}) => (
  <div className='box-section'>
    {typeof title !== 'undefined' &&
      <div className='bs-title'>
        <h1>{title}</h1>
        {typeof desc !== 'undefined' &&
          <h2>{desc}</h2>
        }
      </div>
    }
    <div className='bs-content'>
      {content}
    </div>
  </div>
)

const ContentCarteIdentite = () => (
  <div className='contentCarteIdentite'>
    <CarteIdentiteFace text='Recto' />
    <CarteIdentiteFace text='Verso' />
  </div>
)

const CarteIdentiteFace = ({text}) => (
  <div className='carteFace'>
    <button>
      {text}
      <div className='btnMore'>+</div>
    </button>
  </div>
)

const ItemTransport = ({id, icon, name, speed, selected, onClick}) => {
  const cls = classNames({
    'ltm-item': true,
    'selected': selected
  })

  console.log('onClick', onClick)

  return (
    <div className={cls}>
      <div className='onClick' onClick={onClick} data-id={id} />
      <div className={`icon ${icon}`}></div>
      <label className='name'>{name}</label>
      <label className='speed'>{speed}km/h</label>
    </div>
  )
}

const ContentCharteAgent = ({isChecked, updateCharte}) => (
  <div className='contentCharteAgent'>
    <button className='openPdfCharte'>
      Lire l’intégrité des principes
      <i className='arrowRight' />
    </button>
    <div className='checkboxCharte'>
      <BtnCheckBox value="J'accepte la charte" isChecked={isChecked} onClick={updateCharte} />
    </div>
  </div>
)

const ContentTransportMode = ({data, onClick}) => (
  <div className='contentTransportMode'>

    <ul className='listTransportMode'>
      <ItemTransport id='pieds' icon='icon-pieds' name='A pieds' speed='10' selected={data.pieds} onClick={onClick} />
      <ItemTransport id='velo' icon='icon-velo' name='Vélo' speed='20' selected={data.velo} onClick={onClick} />
      <ItemTransport id='moto' icon='icon-moto' name='Moto' speed='50' selected={data.moto} onClick={onClick} />
      <ItemTransport id='voiture' icon='icon-voiture' name='Voiture' speed='80' selected={data.voiture} onClick={onClick} />
      <ItemTransport id='camion' icon='icon-camion' name='Camion' speed='80' selected={data.camion} onClick={onClick} />
    </ul>
  </div>
)

const BtnSumit = ({name}) => (
  <button className='btnSubmit'>
    {name}
  </button>
)

/**
  * PAGE.
  */

const ProfilAgent = ({data, updateCharte, updateTransportMode}) => (
  <div className='profilAgentPage'>
    <BoxSection
      title="Carte d'identité (Recto/Verso)"
      content={<ContentCarteIdentite />}
    />
    <BoxSection
      title='Vos moyens de déplacement'
      desc="Choississez les modes de transports que vous allez utiliser pour les livraison."
      content={<ContentTransportMode onClick={updateTransportMode} data={data.transport} />}
    />
    <BoxSection
      title='Charte des agents'
      content={<ContentCharteAgent isChecked={data.charte} updateCharte={updateCharte} />}
    />
    <BoxSection
      content={<BtnSumit name='Valider' />}
    />

    <BoxSection
      content={<BtnLinkYellow text='Voir mes informations Profil' location='/app/profil/customer' />}
    />
  </div>
)

export default ProfilAgent
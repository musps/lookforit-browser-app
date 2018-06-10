import React, { Component } from 'react'
import './styles.css'
import BigPanel, { SplitPanel, LinkPanel } from './../../Components/BigPanel'
import InfoPanel, { SubPanel, SubPanelCaptionItem } from './../../Components/InfoPanel'

const AccountLinks = () => (
  <BigPanel>
    <SplitPanel>
      <LinkPanel title="J'ai déjà un compte."
        location='/site/account/login' />
    </SplitPanel>
    <SplitPanel>
      <LinkPanel title='Je veux livrer !'
        location='/site/account/register/delivery_man' />
      <LinkPanel title='Je veux acheter !'
        location='/site/account/register/buyer' />
    </SplitPanel>
  </BigPanel>
)

const InfoPanelDetail = () => (
  <InfoPanel>
    <SubPanel
      title='Comment ça marche ?'
      linkLabel='J’ai compris ! Je veux acheter'
      linkLocation='/site/account/register/buyer'>
      <SubPanelCaptionItem 
        label='Je crée ma commande'
        icon='/assets/imgs/icons/home/worker.svg' />
      <SubPanelCaptionItem 
        label='Je suis mis en relation avec un livreur'
        icon='/assets/imgs/icons/home/worker.svg' />
      <SubPanelCaptionItem 
        label='Le livreur achète ce que j’ai commandé'
        icon='/assets/imgs/icons/home/worker.svg' />
      <SubPanelCaptionItem 
        label='Le livreur m’apporte ma commande au plus vite'
        icon='/assets/imgs/icons/home/worker.svg' />
      <SubPanelCaptionItem 
        label='Je suis livré !'
        icon='/assets/imgs/icons/home/worker.svg' />
    </SubPanel>

    <SubPanel
      title={null}
      linkLabel='J’ai compris ! Je veux livrer'
      linkLocation='/site/account/register/delivery_man'>
      <SubPanelCaptionItem 
        label='Je recois la liste des livraisons disponibles'
        icon='/assets/imgs/icons/home/worker.svg' />
      <SubPanelCaptionItem 
        label='Je suis mis en relation avec un acheteur'
        icon='/assets/imgs/icons/home/worker.svg' />
      <SubPanelCaptionItem 
        label='J’achète le produit de l’acheteur'
        icon='/assets/imgs/icons/home/worker.svg' />
      <SubPanelCaptionItem 
        label='Je livre le produit de l’acheteur'
        icon='/assets/imgs/icons/home/worker.svg' />
      <SubPanelCaptionItem 
        label='Je suis payé !'
        icon='/assets/imgs/icons/home/worker.svg' />
    </SubPanel>
  </InfoPanel>
)

const HomePage = () => (
  <div className="homePage">
    <AccountLinks />
    <InfoPanelDetail />
  </div>
)

export default HomePage

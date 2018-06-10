import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import SideBar, {
  ItemList,
  ItemListTitle,
  ItemListItem,
  ItemListDivider,
  ItemUserInfo
} from '@appCl/Components/SideBar'
import { withRouter } from 'react-router'

const UserInfo = () => (
  <ItemList>
    <ItemUserInfo
      fullName='James Bond'
      addr='Adresse de livraison'
      addrValue='57 Rue des vignes, 75015 Paris' />
  </ItemList>
)

const MenuServices = ({pathName}) => (
  <ItemList>
    <ItemListTitle title='Nos agents à vos services' />
    <ItemListItem 
      label='Livraison sur mesure'
      pathName={pathName}
      location='/app'
      icon='icon-livraison'
    />
    <ItemListItem 
      label='Restauration'
      pathName={pathName}
      icon='icon-restaurant'
      />
    <ItemListItem 
      label='Coursier'
      pathName={pathName}
      icon='icon-coursier'/>
  </ItemList>
)

const MenuAccount = ({pathName}) => (
  <ItemList full>
    <ItemListTitle title='Mon profil' />
    <ItemListItem 
      location='/app/profil/customer'
      pathName={pathName}
      icon='icon-info'
      label='Mes infos'
    />
    <ItemListItem 
      label='Historique'
      location='/app/history/agent'
      pathName={pathName}
      icon='icon-calendrier'
    />
    <ItemListItem 
      label='Favori'
      pathName={pathName}
      icon='icon-favori'
    />
  </ItemList>
)

const MenuHelp = ({pathName}) => (
  <ItemList>
    <ItemListDivider />
    <ItemListItem 
      label='Support'
      isSelected={true}
      icon='icon-aide'
    />
    <ItemListItem 
      label='Déconnexion'
      isSelected={true}
      icon='icon-off'
    />
  </ItemList>
)

const SideBarContainer = props => {
  const pathName = props.location.pathname

  return (
    <SideBar>
      <UserInfo pathName={pathName} />
      <MenuServices pathName={pathName} />
      <MenuAccount pathName={pathName} />
      <MenuHelp />
    </SideBar>
  )
}

export default withApp(withRouter(SideBarContainer))

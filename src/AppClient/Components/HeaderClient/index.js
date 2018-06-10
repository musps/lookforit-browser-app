import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import './styles.css'

const HeaderClient = ({searchBarContent, accountContent}) => (
  <div>
    <header className='headerClient position-NoActionYet'>
      <div className='searchBarContent orderSecond'>
        {searchBarContent}
      </div>
      <div className='accountContent orderFirst'>
        {accountContent}
      </div>
    </header>
  </div>
)

const Icon = ({icon}) => (
  <div className={`iconAccs iconAccsMargin ${icon}`}>
  </div>
)

const IconWithHoverInfo = ({content, isOpen, onClick}) => {
  const toggleStates = classNames({
    onHoverContent: true,
    isOpen: isOpen
  })

  return (
    <div className='iconWithHover iconAccsMargin'>
      <div className='iconAccs icon-actionTwo' onClick={onClick}></div>
      <div className={toggleStates}>
        {content}
      </div>
    </div>
  )
}

const AccountContent = ({content, isOpen, onClick}) => (
  <Fragment>
    <Icon icon='icon-actionOne' />
    <IconWithHoverInfo content={content} isOpen={isOpen} onClick={onClick} />
  </Fragment>
)

const HeaderClientContainer = ({content, isOpen, onClick}) => (
  <HeaderClient
    accountContent={<AccountContent 
        content={content}
        isOpen={isOpen}
        onClick={onClick} />}
  />
)

export const NoProductInCat = () => (
  <div className='noProductInCat'>
    <div className='message'>
      Votre malette est bien vide pour le moment.
    </div>
    <div className='messageMore'>
      Besoin d’inspiration ?
    </div>
  </div>
)

export default HeaderClientContainer

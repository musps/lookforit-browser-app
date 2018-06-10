import React, { Component } from 'react';
import classNames from 'classnames'
import './styles.css'

export const HistoryAgent = ({left, right}) => (
  <div className='historyPageAgent'>
    <div className='hp-title'>
      <h1>Historique des courses</h1>
    </div>

    <div className='hp-content'>
      <div className='left'>
        {left}
      </div>
      <div className='right'>
        {right}
      </div>
    </div>
  </div>
)

export const AgentMonthRecap = () => (
  <div className='agentMonthRecap'>
    <div className='selectedDate'>
      <h1>Avril 2018</h1>
    </div>

    <div className='data'>
      <AMRDataItem
        title='Paiements reçues'
        value='256 €'
        orange={true}
        icon='icon-credit-card-1' />
      <AMRDataItem 
        title='Paiements en attente'
        value='18 €'
        icon='icon-credit-card-2' />
      <AMRDataItem
        title='Nombre de courses'
        value='56'
        icon='icon-courses' />
      <AMRDataAgentRate
        rate='4.8'
      />
    </div>
  </div>
)

export const AMRDataItem = ({title, value, orange, icon}) => {
  const clsValue = classNames({
    'di-value': true,
    'orange': orange
  })
  const clsIcon = classNames({
    'di-icon': true,
    [icon]: icon
  })

  return (
    <div className='data-item'>
      <h1 className='di-title'>{title}</h1>
      <label className={clsValue}>{value}</label>
      <div className={clsIcon}></div>
    </div>
  )
}

export const AMRDataAgentRate = ({rate}) => (
  <div className='data-item'>
    <div className='icon-agent'></div>
    <div className='rating'>
      <div className='rating-icon icon-rating'></div>
      <label className='rating-value'>{rate}</label>
    </div>
  </div>
)

/**
  *
  */

export const RightContent = () => (
  <div className='hap-rightContent'>
    <AgentMonthRecap />
  </div>
)

export const LeftContent = () => (
  <div className='hap-leftContent'>
  </div>
)

export const HistoryAgentPage = () => (
  <HistoryAgent
    right={<RightContent />}
  />
)

/**
  * HISTORY ITEMS
  */
export const HistoryList = ({children}) => (
  <div className='historyListAgent'>
    {children}
  </div>
)

const HistoryItemInfo = ({coursePriceType, coursePrice, courseKm, courseGain}) => (
  <div className='hla-info'>
    <div className='icon mini-icon-restaurant'></div>
    <div className='course-price'>
      <label>{coursePriceType} : {coursePrice} €</label>
    </div>

    <div className='course-km'>
      <label>{courseKm} KM</label>
    </div>

    <div className='course-gain'>
      <label>Gain : {courseGain} €</label>
    </div>
  </div>
)

export const HistoryItem = ({isSelected, dateDay, dateHour, coursePriceType, coursePrice, courseKm, courseGain}) => {
  const cls = classNames({
    'hla-historyItem': true,
    isSelected: isSelected
  })

  return (
    <div className={cls}>
      <div className='left'>
        <div className='date'>
          <label className='day'>{dateDay}</label>
          <label className='hour'>{dateHour}</label>
        </div>
        <div className='map'></div>
      </div>
      <div className='right'>
        <HistoryItemInfo
          coursePriceType={coursePriceType}
          coursePrice={coursePrice}
          courseKm={courseKm}
          courseGain={courseGain}
        />
      </div>
    </div>
  )
}

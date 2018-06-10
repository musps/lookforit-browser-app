import React, { Component, Fragment} from 'react'
import classNames from 'classnames'
import './styles.css'
import BtnTime from '@appCl/Components/BtnTime'
import { Link } from 'react-router-dom'

/**
  * PAGE TEMPLATE
  */

export const HistoryPage = ({children}) => (
  <div className='historyPage'>
    {children}
  </div>
)

export const BtnLocation = ({text, location}) => (
  <Link className='btnLocation' to={location}>{text}</Link>
)

export const HPTitle = ({title, children}) => (
  <div className='hp-title'>
    <h1>{title}</h1>
    {children}
  </div>
)

export const HPContent = ({left, right}) => (
  <div className='hp-content'>
    <div className='hp-c-left'>
      {left}
    </div>
    <div className='hp-c-right'>
      {right}
    </div>
  </div>
)

export const ContentLeft = ({children}) => (
  <div className='contentLeft'>
    {children}
  </div>
)

/**
  * HISTORY LIST
  */
export const HistoryList = ({children}) => (
  <div className='historyList'>
    {children}
  </div>
)

/**
  * COURSE DETAIL
  */

export const CourseDetail = ({isItem, children}) => {
  const cls = classNames({
    courseDetail: true,
    isItem: isItem
  })

  return (
    <div className={cls}>
      {children}
    </div>
  )
}

export const CDHeader = ({date, number}) => (
  <div className='cd-header'>
    <h1>{date}</h1>
    <label>Commande #{number}</label>
  </div>
)

export const CDProducts = ({ticket, detail}) => (
  <div className='cd-products'>
    <div className='cd-p-ticket'>
      {ticket}
    </div>
    <div className='cd-p-detail'>
      {detail}
    </div>
  </div>
)

/**
  * LIST TICKET
  */

export const ListTicket = ({children}) => (
  <div className='listTicket'>
    {children}
  </div>
)

export const LTItem = ({qte, name, price}) => (
  <div className='lt-item'>
    <div className='qte'>{qte}x</div>
    <div className='name'>{name}</div>
    <div className='price'>{price} $</div>
  </div>
)

export const LTPriceInfo = ({name, price}) => (
  <div className='lt-priceInfo'>
    <div className='name'>{name}</div>
    <div className='price'>{price} $</div>
  </div>
)

export const LTDivider = () => (
  <div className='lt-divider'></div>
)

/**
  * BTN FACTURE
  */

export const BtnFacture = ({bc, label, icon}) => {
  const cls = classNames({
    btnFacture: true,
    [bc]: true
  })

  return (
    <button className={cls}>
      <div className={`icon ${icon}`}></div>
      <label className='label'>{label}</label>
    </button>
  )
}

/**
  * DELIVERY INFO
  */
export const CDDeliveryInfoTimeDate = ({title, value}) => (
  <div className='timeDateList'>
    <label className='title'>{title}</label>
    <label className='value'>{value}</label>
  </div>
)

/**
  * CDDeliveryInfo""
  */
export const CDDeliveryInfo = ({hourStart, hourEnd, estimateTime}) => (
  <div className='cd-deliveryInfo'>
    <div className='left'>
      <div className='time'>
        <div className='time-date'>
          <CDDeliveryInfoTimeDate title='Départ' value={hourStart} />
          <CDDeliveryInfoTimeDate title='Arrivé' value={hourEnd} />
        </div>
        <div className='time-min'>
          <BtnTime value={estimateTime} />
        </div>
      </div>
    </div>
    <div className='right'>
    </div>
  </div>
)

/**
  * CDDeliveryMapAndAddrs
  */
export const CDDeliveryMapAndAddrs = ({addrHome, addrDest}) => (
    <div className='cd-deliveryMapAndAddrs'>
      <div className='map'>
        <div className='mapIn'></div>
      </div>
      <div className='addrs'>
        <div className='addr'>
          <div className='icon icon-home'></div>
          <label className='label'>{addrHome}</label>
        </div>
        <div className='addr'>
          <div className='icon icon-dest'></div>
          <label className='label'>{addrDest}</label>
        </div>
      </div>
    </div>
)

/**
  * CDAgentInfo
  */
export const ContactItem = ({icon, text}) => (
  <button className='contactItem'>
    <div className={`icon ${icon}`}></div>
    <label className='text'>{text}</label>
  </button>
)

export const CDAgentInfo = ({agentFullName}) => (
  <div className='cd-agentInfo'>
    <div className='cd-ai-agent'>
      <div className='icon-agent'></div>
      <div className='agent-info'>
        <label className='title'>Votre agent</label>
        <label className='value'>{agentFullName}</label>
      </div>
    </div>
    <div className='cd-ai-contact'>
      <ContactItem icon='icon-stars' text='Noter cette course' />
      <ContactItem icon='icon-buble' text='Un problème ? Contactez le service client' />
    </div>
  </div>
)

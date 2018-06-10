import React, { Component, Fragment } from 'react';
import {
  HistoryPage,
  HPTitle,
  HPContent,
  CourseDetail,
  CDHeader,
  CDProducts,
  ListTicket,
  LTItem,
  LTPriceInfo,
  LTDivider,
  BtnFacture,
  CDDeliveryInfo,
  CDDeliveryMapAndAddrs,
  CDAgentInfo,
  BtnLocation
} from '@appCl/Components/History'
import {
  AgentMonthRecap,
  HistoryList,
  HistoryItem
} from '@appCl/Components/History/Agent'
import './styles.css'

const Ticket = () => (
  <ListTicket>
    <LTItem qte='1' name='Banane rose avec des tâches' price='3,99' />
    <LTItem qte='2' name='Orange de New York' price='4,10' />
    <LTItem qte='1' name='Kiwi de l’espace' price='5,00' />
    <LTDivider />
    <LTPriceInfo name='Total' price='18,04' />
  </ListTicket>
)

const TicketAgent = () => (
  <ListTicket>
    <LTPriceInfo name='Remboursement' price='18,04' />
    <LTPriceInfo name='Frais de service' price='1,50' />
    <LTPriceInfo name='Bonus météo' price='0,00' />
  </ListTicket>
)
const TicketAgentTT = () => (
  <div className='ticketAgentTT' >
    <label>Gain</label>
    <div className='total'>
      <label>3,45 €</label>
    </div>
  </div>
)

const Course = () => (
  <Fragment>
    <AgentMonthRecap />

    <CourseDetail>
      <CDHeader date='Vendredi 5 Avril 2018' number='DJO515' />
      <CDDeliveryInfo
        hourStart='10h00'
        hourEnd='10h30'
        estimateTime='30 mins'
      />
      <CDDeliveryMapAndAddrs
        addrHome='3, Rue des Maurais 75012 PARIS'
        addrDest='120, Rue Alfonse Braud 75012 PARIS'
      />
      <CDProducts
        ticket={<Ticket />}
      />
      <CDProducts
        ticket={<TicketAgent />}
        detail={<TicketAgentTT />}
      />
    </CourseDetail>
  </Fragment>
)

const CourseList = () => (
  <HistoryList>
    <HistoryItem isSelected={false} dateDay='15/04/2018' dateHour='20h20'
      coursePriceType='Prix payé' coursePrice='10,00' courseKm='2,06' courseGain='2,00'
    />
    <HistoryItem isSelected={true} dateDay='15/04/2018' dateHour='20h20'
      coursePriceType='Prix de la course' coursePrice='10,00' courseKm='2,06' courseGain='2,00'
    />
    <HistoryItem isSelected={false} dateDay='15/04/2018' dateHour='20h20'
      coursePriceType='Prix payé' coursePrice='10,00' courseKm='2,06' courseGain='2,00'
    />
  </HistoryList>
)

const HistoryAgentPage = () => (
  <HistoryPage>
    <HPTitle title='Historique des courses'>
      <BtnLocation text='Historique des commandes' location='/app/history/customer' />
    </HPTitle>
    <HPContent
      left={<CourseList />}
      right={<Course />}
    />
  </HistoryPage>
)

export default HistoryAgentPage

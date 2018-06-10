import React, { Component, Fragment} from 'react'
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
  HistoryList,
  HistoryItem,
  SearchBar
} from '@appCl/Components/History/Customer'

const Ticket = () => (
  <ListTicket>
    <LTItem qte='1' name='Banane rose avec des tâches' price='3,99' />
    <LTItem qte='2' name='Orange de New York' price='4,10' />
    <LTItem qte='1' name='Kiwi de l’espace' price='5,00' />
    <LTDivider />
    <LTPriceInfo name='Livraison' price='4,95' />
    <LTPriceInfo name='Total' price='18,04' />
  </ListTicket>
)

const Detail = ({bc}) => (
  <div className='detailTicket'>
    <div className='btnList'>
      <BtnFacture label='Facture' icon='icon-facture' />
      <BtnFacture label='Ticket' icon='icon-receipt' />
    </div>
  </div>
)

const Course = () => (
  <CourseDetail>
    <CDHeader date='Vendredi 5 Avril 2018' number='DJO515' />
    <CDProducts
      ticket={<Ticket />}
      detail={<Detail />}
    />
    <CDDeliveryInfo
      hourStart='10h00'
      hourEnd='10h30'
      estimateTime='30 mins'
    />
    <CDDeliveryMapAndAddrs
      addrHome='3, Rue des Maurais 75012 PARIS'
      addrDest='120, Rue Alfonse Braud 75012 PARIS'
    />
    <CDAgentInfo agentFullName='Samuel Richard' />
  </CourseDetail>
)

const CourseList = () => (
  <HistoryList>
    <SearchBar />
    <HistoryItem title='title' shop='shop'date='date' price='price' isSelected={false} />
    <HistoryItem title='title' shop='shop'date='date' price='price' isSelected={true} />
    <HistoryItem title='title' shop='shop'date='date' price='price' isSelected={false} />
    <HistoryItem title='title' shop='shop'date='date' price='price' isSelected={false} />
  </HistoryList>
)

const HistoryCustomerPage = () => (
  <HistoryPage>
    <HPTitle title='Historique des commandes'>
            <BtnLocation text='Historique des courses' location='/app/history/agent' />
    </HPTitle>
    <HPContent
      left={<CourseList />}
      right={<Course />}
    />
  </HistoryPage>
)

export default HistoryCustomerPage

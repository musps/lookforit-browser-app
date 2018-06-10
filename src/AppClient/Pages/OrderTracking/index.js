import React, { Component } from 'react'
import './styles.css'

const FilArianeInfo = ({cmdOrder}) => (
  <div className='filArianeInfo'>
    <h1 className='infoCmd'>Suivi de la commande <b>#{cmdOrder}</b></h1>
  </div>
)

const OrderStatus = ({title, content}) => (
  <div className='orderStatus'>
    <div className='header'>
      <h1>{title}</h1>
    </div>
    <div className='content'>
      {content}
    </div>
  </div>
)

const OrderStatusContent = () => (
  <div className='orderStatusContent'>
    <IconInfo icon='icon-statusHome' label="L'agent est en route" />
    <Line />
    <IconInfo icon='icon-statusShop' label="L'agent est arrivé en magasin" />
    <Line />
    <IconInfo icon='icon-statusDelivered' label="L'agent est devant chez vous !" />
  </div>
)

const IconInfo = ({icon, label}) => (
  <div className='iconInfo'>
    <div className={`icon iconCover ${icon}`}></div>
    <label>{label}</label>
  </div>
)

const Line = () => (
  <div className='line'></div>
)

const OrderInfo = ({order, map}) => (
  <div className='orderInfo'>
    <div className='order'>
      {order}
    </div>
    <div className='map'>
      {map}
    </div>
  </div>
)

const OrderContent = ({title, orderProducts}) => (
  <div className='orderContent'>
    <h1>{title}</h1>
    {orderProducts}
  </div>
)


const OrderContact = ({children}) => (
  <div className='orderContact'>
    {children}
  </div>
)

const OrderContactItem = ({icon, label}) => (
  <div className='orderContactItem'>
    {icon !== false && 
      <div className={`icon ${icon}`}></div>
    }
    <label>{label}</label>
  </div>
)

const OrderContactFull = () => (
  <OrderContact>
    <OrderContactItem icon={false} label='Un problème ?' />
    <OrderContactItem icon='icon-phone' label='Contactez l’agent par téléphone' />
  </OrderContact>
)

const ShopList = ({children}) => (
  <ul className='shopList'>
    {children}
  </ul>
)

const ShopProduct = ({qte, name, price}) => (
  <li className='shopProduct'>
    <label className='qte'>{qte}x</label>
    <label className='name'>{name}</label>
    <label className='price'>{price} $</label>
  </li>
)

const ShopProductStore = ({name}) => (
  <li className='shopInfo'>
    <div className='icon'></div>
    <label>{name}</label>
  </li>
)

const ShopProductDivider = () => (
  <div className='shopProductDivider' />
)

const ShopProductAmount = ({children}) => (
  <li className='shopProductAmount'>
    {children}
  </li>
)

const ShopProductAmountCible = ({name, price}) => (
  <div className='cible'>
    <label className='name'>{name}</label>
    <label className='price'>{price} $</label>
  </div>
)

const OrderProductList = () => (
  <div className='orderProductList'>

    <ShopList>
      <ShopProductStore name='Sephora' />
      <ShopProduct qte='1' name='J’adore - Eau de Parfum ' price='66,50' />
      <ShopProduct qte='1' name='Guerlain - Pack parfum et maquillages ' price='59,50' />
      <ShopProductDivider />

      <ShopProductAmount>
        <ShopProductAmountCible name='Livraison' price='5,00' />
        <ShopProductAmountCible name='Total' price='124,50' />
      </ShopProductAmount>

    </ShopList>

  </div>
)

const OrderTrackingPage = () => (
  <div className='pageOrderTracking'>
    <FilArianeInfo cmdOrder='DJO515' />
    <OrderStatus title='Status' content={<OrderStatusContent />} />
    <OrderInfo order={<OrderContent 
        title='Nous vous remercions pour votre commande'
        orderProducts={<OrderProductList />} />}
    />
    <OrderContactFull />
  </div>
)

export default OrderTrackingPage

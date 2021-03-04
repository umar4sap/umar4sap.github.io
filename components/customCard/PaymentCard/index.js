import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './sadqahcardstyles.css'

import BankLogo from '../SadaqahLogo/Banklogo'

import BrandLogo from '../BrandLogo/brandLogos'

const cardClasses = (bank, model, type, flipped, className) => {
  const cardClassName = `${bank}-${model}-${type}`

  return classNames(
    "card",
    "sadaqah-normal-black",
    {
      "flipped": flipped,
      "sadaqah-normal-black": (bank && model && type),
    },
    className,
  )
}


const formatCardNumber = cardNumber =>
  cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')

const PaymentCard = ({
  bank,
  model,
  type,
  number,
  cvv,
  expiration,
  holderName,
  brand,
  flipped,
  className,
}) => (
  <div className="wrapper">
    <div className={cardClasses("sadaqah", "normal", "black", false, className)}>
   
      <div className="front">
        <BankLogo
          bank={bank}
          model={model}
          type={type}
        />
        
        <div className="chip" >
          <div className="horizontalLine" />
          <div className="verticalLine" />
        </div>
        <div className="number">
          {formatCardNumber(number)}
        </div>
        <div className="expiration">
          {expiration}
        </div>
        <div className="holderName">
          {holderName}
        </div>
        <BrandLogo
          brand={brand}
          bank={bank}
          model={model}
          type={type}
        />
      </div>
      <div className="back">
        <div className="cvv">
          {cvv}
        </div>
      </div>
    </div>
    </div>

)

PaymentCard.propTypes = {
  bank: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  brand: PropTypes.string,
  number: PropTypes.string,
  cvv: PropTypes.string,
  holderName: PropTypes.string,
  expiration: PropTypes.string,
  flipped: PropTypes.bool,
  className: PropTypes.string,
}

PaymentCard.defaultProps = {
  bank: '',
  model: '',
  type: '',
  brand: '',
  number: '•••• •••• •••• ••••',
  cvv: '•••',
  holderName: 'Nome Completo',
  expiration: 'MM/AA',
  flipped: false,
  className: null,
}

export default PaymentCard

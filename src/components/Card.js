import React, {useRef} from 'react'
import "./Card.scss"
function Card({cardDetails,index}) {
    const cardRef=useRef();
  return (
        <div className="card" id={`card${index+1}`} ref={cardRef}>
            <div className="card-inner">
                <div className="front" style={{background : `linear-gradient(45deg, ${cardDetails.gradient.color1}, ${cardDetails.gradient.color2})`}}>
                    <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img"/>
                    <div className="row">
                        <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px"/>
                        <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px"/>
                    </div>
                    <div className="row card-no">
                        {cardDetails.number}
                    </div>
                    <div className="row card-holder">
                        <p>CARD HOLDER</p>
                        <p>VALID TILL</p>
                    </div>
                    <div className="row name">
                        <p>{cardDetails.holderName}</p>
                        <p>{cardDetails.validity}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Card;
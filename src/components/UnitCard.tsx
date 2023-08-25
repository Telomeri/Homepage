import React from 'react';
import '../assets/css/UnitCard.css'; 

interface UnitCardInt {
    imageaddress: string,
    header: string,
    text: string;
    relatedLink: string;
    relatedLinkHeader: string;
}

const UnitCard: React.FC<UnitCardInt> = (props) => {
  return (
    <div className='unit-card'>
        <a>
            <picture> 
                <img className='unit-card-thumbnail' src={props.imageaddress} alt="placeholder"/>
            </picture>
            <div className="unit-card-content">
                <h2>{props.header}</h2>
                <p>{props.text}</p>
            </div>
            <h4>
                <a href={props.relatedLink}>{props.relatedLinkHeader}</a>
            </h4>
        </a>
    </div>
  );
};

export default UnitCard;
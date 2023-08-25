import React from 'react';
import UnitCardContainer from './UnitCardContainer';

import '../assets/css/LandingPage.css'; 

interface LandingPageInt {
    name: string,
    major: string,
    degree: string;
}

const LandingPage: React.FC<LandingPageInt> = (props) => {
  return (
    <div>
        <div>
        <h1 className='introduction-name'>{props.name}</h1>
        <div>
            <h2 className='introduction-degree'>{props.major}</h2>
            <h2 className='introduction-degree'>{props.degree}</h2>
        </div>
        </div>
        <UnitCardContainer/>
    </div>
    
  );
};

export default LandingPage;
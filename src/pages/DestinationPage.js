import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './DestinationPage.css';

export default function DestinationPage() {
   const data = require('../data.json').destinations;

   const [destination, setDestination] = useState(data[0].name);
   const selectedDestination = data.find((i) => i.name === destination);
   const planet = require(`../${selectedDestination.images.png}`);
   return (
      <Fragment>
         <Helmet>
            <title>Destination</title>
         </Helmet>
         <div className="destination container">
            <div className="left-div">
               <h3 className="numbered-title">
                  <span>01 </span>PICK YOUR DESTINATION
               </h3>
               <div className="planet-container">
                  <img src={planet} alt="planet" />
               </div>
            </div>
            <div className="right-div">
               <ul className="destination-nav">
                  {data.map((i) => (
                     <li
                        className={destination === i.name ? 'active' : ''}
                        onClick={() => setDestination(i.name)}
                        key={i.name}
                     >
                        {i.name}
                     </li>
                  ))}
               </ul>
               <h1>{selectedDestination.name}</h1>
               <p>{selectedDestination.description}</p>
               <div className="stats">
                  <div>
                     <p>AVG. DISTANCE</p>
                     <h3>{selectedDestination.distance}</h3>
                  </div>
                  <div>
                     <p>EST. TRAVEL TIME</p>
                     <h3>{selectedDestination.travel}</h3>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
}

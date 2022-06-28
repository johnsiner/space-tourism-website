import React, { Fragment, useState } from 'react';
import './TechnologyPage.css';
import { Helmet } from 'react-helmet-async';

export default function TechnologyPage() {
   const data = require('../data.json').technology;

   const [technology, setTechnology] = useState(data[0].name);
   const selectedTechnology = data.find((i) => i.name === technology);
   const technologyImageDesktop = require(`../${selectedTechnology.images.portrait}`);
   const technologImageMobile = require(`../${selectedTechnology.images.landscape}`);

   return (
      <Fragment>
         <Helmet>
            <title>Technology</title>
         </Helmet>
         <h3 className="technology numbered-title mobile">
            <span>03 </span>space launch 101
         </h3>
         <div className="technology container">
            <div className="left-div">
               <h3 className="numbered-title">
                  <span>03 </span>space launch 101
               </h3>
               <div className="sub-left">
                  <div className="technology-nav">
                     {data.map((i, index) => (
                        <button
                           key={i.name}
                           onClick={() => setTechnology(i.name)}
                           className={i.name === technology ? 'active' : ''}
                        >
                           {index + 1}
                        </button>
                     ))}
                  </div>
                  <div className="technology-details">
                     <h3>the terminology...</h3>
                     <h1>{selectedTechnology.name}</h1>
                     <p>{selectedTechnology.description}</p>
                  </div>
               </div>
            </div>
            <div className="right-div">
               <img
                  src={technologyImageDesktop}
                  alt={selectedTechnology.name}
                  className="desktop-img"
               />
               <img
                  src={technologImageMobile}
                  alt={selectedTechnology.name}
                  className="mobile-img"
               />
            </div>
         </div>
      </Fragment>
   );
}

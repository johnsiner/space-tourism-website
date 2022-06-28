import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './CrewPage.css';

export default function CrewPage() {
   const data = require('../data.json').crew;

   const [crewMember, setCrewMember] = useState(data[0].name);
   const selectedCrewMember = data.find((i) => i.name === crewMember);
   const crewMemberImage = require(`../${selectedCrewMember.images.png}`);
   return (
      <Fragment>
         <Helmet>
            <title>Crew</title>
         </Helmet>
         <h3 className="numbered-title mobile">
            <span>02 </span>Meet your crew
         </h3>
         <div className="crew container">
            <div className="left-div">
               <h3 className="numbered-title">
                  <span>02 </span>Meet your crew
               </h3>
               <div className="crew-details">
                  <h2>{selectedCrewMember.role}</h2>
                  <h1>{selectedCrewMember.name}</h1>
                  <p>{selectedCrewMember.bio}</p>
               </div>
               <div className="crew-nav">
                  {data.map((i) => (
                     <button
                        className={i.name === crewMember ? 'active' : ''}
                        onClick={() => setCrewMember(i.name)}
                        key={i.name}
                     ></button>
                  ))}
               </div>
            </div>
            <div className="right-div">
               <img src={crewMemberImage} alt={selectedCrewMember.name} />
            </div>
         </div>
      </Fragment>
   );
}

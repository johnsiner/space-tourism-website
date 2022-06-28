import React, { Fragment } from 'react';
import './HomePage.css';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
   const navigate = useNavigate();

   return (
      <Fragment>
         <Helmet>
            <title>Home</title>
         </Helmet>
         <div className="homepage container">
            <div className="description">
               <h3>SO, YOU WANT TO TRAVEL TO</h3>
               <h1>SPACE</h1>
               <p>
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
               </p>
            </div>
            <div className="button-container">
               <button
                  className="large-button"
                  onClick={() => navigate('/destination')}
               >
                  EXPLORE
               </button>
            </div>
         </div>
      </Fragment>
   );
}

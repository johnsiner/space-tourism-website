import './App.css';
import logo from './assets/shared/logo.svg';
import hambugerIcon from './assets/shared/icon-hamburger.svg';
import closeIcon from './assets/shared/icon-close.svg';
import {
   NavLink,
   Route,
   Routes,
   useLocation,
   useNavigate,
} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
   const navigate = useNavigate();
   const [menuOpened, setMenuOpened] = useState(false);
   const location = useLocation().pathname;
   let image;
   switch (location) {
      case '/':
         image = 'home-img';
         break;
      case '/destination':
         image = 'destination-img';
         break;
      case '/crew':
         image = 'crew-img';
         break;
      case '/technology':
         image = 'technology-img';
         break;
      default:
         image = 'home-img';
   }

   return (
      <div className={`app ${image}`}>
         <header className="app-header">
            {menuOpened && (
               <div
                  className="modal"
                  onClick={() => setMenuOpened(false)}
               ></div>
            )}
            <div className="logo-container">
               <img
                  src={logo}
                  alt="logo"
                  onClick={() => {
                     navigate('/');
                  }}
               ></img>
            </div>
            <button
               className="mobile-nav-toggle"
               onClick={() => setMenuOpened((state) => !state)}
            >
               {menuOpened ? (
                  <img src={closeIcon} alt="menu"></img>
               ) : (
                  <img src={hambugerIcon} alt="menu"></img>
               )}
            </button>
            <nav className={menuOpened ? 'mobile-opened' : ''}>
               <ul className="primary-navigation">
                  <li>
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                           isActive ? 'nav-link active' : 'nav-link'
                        }
                     >
                        <span>00</span>
                        home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/destination"
                        className={({ isActive }) =>
                           isActive ? 'nav-link active' : 'nav-link'
                        }
                     >
                        <span>01</span>
                        destination
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/crew"
                        className={({ isActive }) =>
                           isActive ? 'nav-link active' : 'nav-link'
                        }
                     >
                        <span>02</span>
                        crew
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/technology"
                        className={({ isActive }) =>
                           isActive ? 'nav-link active' : 'nav-link'
                        }
                     >
                        <span>03</span>
                        technology
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </header>
         <main>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/destination" element={<DestinationPage />} />
               <Route path="/crew" element={<CrewPage />} />
               <Route path="/technology" element={<TechnologyPage />} />
            </Routes>
         </main>
      </div>
   );
}

export default App;

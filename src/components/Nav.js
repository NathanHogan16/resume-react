import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import { NavLink } from "react-router-dom";

function Nav(props) {

  //  const {
  // //   categories = [],
  // //   setCurrentCategory,
  // //   currentCategory,
  //    contactSelected,
  //    setContactSelected,
  //    portfolioSelected,
  //    resumeSelected,
  //    aboutSelected,
  //    setAboutSelected,
  //    setPortfolioSelected,
  //    setResumeSelected
  //  } = props;

  // // useEffect(() => {
  // //   document.title = currentCategory.name;
  // // }, [currentCategory]);
    
  
  //   return (
  //     <header className="flex-row px-1">
  //       <nav>
  //         <ul className="flex-row">
  //           <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
  //             <span onClick= {setAboutSelected}>
  //             About
  //             </span>
  //           </li>
  //           <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
  //             <span onClick={setPortfolioSelected}>Portfolio</span>
  //           </li>
  //           <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
  //             <span onClick={ setResumeSelected}>Resume</span>
  //           </li>
  //           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
  //             <span onClick={setContactSelected}>Contact</span>
  //           </li>
  //           {/* {categories.map((category) => (
  //             <li className={`mx-1 ${
  //                 currentCategory.name === category.name && !contactSelected && `navActive`
  //                 }`} key={category.name}>
  //               <span
  //                 onClick={() => {
  //                   setCurrentCategory(category);
  //                   setContactSelected(false);
  //                 }}
  //               >
  //                 {(category.name)}
  //               </span>
  //             </li>
  //           ))} */}
  //         </ul>
  //       </nav>
  //     </header>
  //   );

  return (
    <header className="flex items-center">
      <div className="justyfy-items-center">
        <nav>
          <NavLink to="/" exact>
            About
          </NavLink>
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink to="/resume">
            Resume
          </NavLink>
          <NavLink to="/contactus">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )

   }
  
  export default Nav;
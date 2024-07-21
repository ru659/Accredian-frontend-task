import { useState } from "react";
import RefferelButton from "../Button/RefferelButton";
import DropDownButton from "./DropDownButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';



const Nav =()=>{

    const [navigation, setNavigation] = useState(false);
     const navItems = [{id:1,text:'Refer&Earn'},{id:2,text:'Resourses'},{id:3,text:'About Us'}]
     const handleClick = () => {
        setNavigation(!navigation);
      };
    

    return(
        <div className="p-2 mx-auto flex h-16 
         items-center justify-between border-b-2">
        <div className="flex items-center gap-2">
            
            <div className="">
                    <h1 className="text-blue-500 font-semibold text-xl">accredian</h1>
            </div>
                
                <div className="">
                    <DropDownButton/>
                </div>

        </div>

        <div className="items-center hidden md:flex gap-2">
            <a  href="#"className="focus:outline-none focus:ring hover:text-blue-500">Refer & Earn</a>
            <a href="#" className="focus:outline-none focus:ring hover:text-blue-500">Resourses</a>
            <a href="#" className="focus:outline-none focus:ring hover:text-blue-500">About Us</a>
            <a href="#"className="w-[100px] p-2 m-3 text-center rounded-md  border focus:outline-none focus:ring hover:text-blue-500">Login</a>
            <RefferelButton text="Try For Free"/>

            
        </div>
        <div onClick={handleClick} className="md:hidden z-10">
          {!navigation ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !navigation
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-blue-500 flex flex-col justify-center items-center'
          }
        >
          {navItems.map((item) => (
            <li key={item.id} className="px-4 cursor-pointer py-6 text-4xl">
              {item.text}
            </li>
          ))}
        </ul>
      </div>



    );
}

export default Nav;
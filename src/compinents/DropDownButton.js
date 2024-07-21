import React,{useState} from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";


const DropDownButton = () => {

    const list = ['React', 'Python', 'Javascript' ,'Ruby'];
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  

  return (
    <div className='relative flex items-center w-[120px]  rounded-lg'>
      <button onClick={toggleDropdown} className='absolute text-white justify-between flex right-0 rounded-md bg-blue-500 w-full items-center border-4 border-transparent tracking-normal'>
        Courses
      {!isOpen ?  (

          <AiOutlineCaretDown className='h-4'/>
      ):( <AiOutlineCaretUp className="h-4"/>)
    }
      </button>
      {isOpen && (
  <div className='bg-blue-500 absolute top-4 flex flex-col items-start rounded-lg w-full'>
    {list.map((e, index) => (
      <div key={index} className='text-white flex w-full justify-between p-2'>
       <h3> {e}</h3>
      </div>
    ))}
  </div>
)}


    </div>
  )
}

export default DropDownButton;
 
import React, { useState } from 'react';

const ReferralButton = ({ text }) => {
  const [showModal, setShowModal] = useState(false);
 const[formData,setFormData] = useState(
    {      referrerName:'',

            referrerEmail: '',

            refereeName: '',

            refereeEmail: '',
}
);

const handleChange = (e)=>{
  const {name,value} = e.target;
  setFormData(pre=>({...pre,[name]:value}))
  console.log(formData);
}
const handleSubmit = (e)=>{
  e.preventDefault();
  if(!formData.referrerName || !formData.referrerEmail || !formData.refereeName || !formData.refereeEmail){
    alert('please fill out the form');
    return;
  }
  setShowModal(false);

}

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className='bg-blue-500 w-[120px] items-center text-white rounded-md border-4 border-transparent tracking-normal'
      >
        {text}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-opacity-20 outline-none focus:outline-none">
            <div className="relative w-auto md:w-[700px] my-6 mx-auto max-w-7xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-300 outline-none focus:outline-none">

                <form  className="w-full max-w-sm p-2 m-2" onSubmit={handleSubmit}>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="referrerName">
                        Referrer’s Name
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="referrerName" name='referrerName' value={formData.referrerName} type="text"  required/>
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="referrerEmail">
                        Referrer’s Email
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="referrerEmail" name='referrerEmail' value={formData.referrerEmail} type="email" required />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="refereeName">
                        Referee’s Name
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input  onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="refereeName" name='refereeName' value={formData.refereeName} type="text"  required/>
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="refereeEmail">
                        Referee’s Email
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="refereeEmail"  name='refereeEmail' value={formData.refereeEmail} type="email" required/>
                    </div>

                  </div>
                                      <div class="md:w-2/3">
                                      <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save 
                  </button>
                    </div>

                </form>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ReferralButton;

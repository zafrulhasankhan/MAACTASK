import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function CreateRegion(props) {
  // const token = useSelector(state => state.token);
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');


  const [region, setRegion] = useState('')
  const handleSUbmit = (e) => {

    e.preventDefault()
    const body = {
      name: region
    };

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json' // Set content type to JSON
    };

    axios.post('https://staging-api.erpxbd.com/api/v1/region', body, { headers })
      .then(res => {
        console.log(res.data);
        if (res.data.status == "success") {
          alert("Region created successfully");
          navigate('/getRegion');
        }
        else {
          alert("Try again");
          navigate('/createRegion');
        }
      })
      .catch(err => {

        console.error(err);
        // You can handle errors here
      });

  }
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    alert('You have been logged out.');
    navigate('/login');
  
  };
  return (
    <div className="flex flex-col bg-slate-50">
      <div className="flex gap-0 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex justify-center items-center px-16 py-3 bg-white max-md:px-5">

        </div>
        <div className="flex gap-1 py-4 pr-6 pl-20 text-sm text-gray-600 whitespace-nowrap bg-white shadow-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">

          <div className="self-start mt-5">
            <button onClick={handleLogout} className="flex-grow justify-center px-6 py-3 text-white bg-red-700 rounded-lg max-md:px-5">
              Logout
            </button>
          </div>

        </div>
      </div>
      <div className="flex gap-0 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-0 justify-between">
          <div className="flex flex-col flex-1 pt-7 pb-12 bg-white">
            <div className="self-start ml-5 text-xs font-semibold text-gray-500 max-md:ml-2.5">
              MENU
            </div>
            <div className="flex flex-col pt-3 pb-11 pl-5 mt-5 w-full text-sm bg-white text-neutral-500 max-md:pl-5">
              <div className="flex gap-4 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/073c859f3c61cb69f1670b8700bbaa3c09fe5728b387c53ac58dbda3ab51aa07?"
                  className="w-6 aspect-square"
                />
                <div className="flex-auto my-auto">Geo Information</div>
              </div>
              <div className="flex gap-5 justify-between self-end mt-3 max-w-full text-blue-700 whitespace-nowrap w-[191px]">
                <div className="ml-12">
                  <Link to="/createRegion" className="mr-4 text-white-500">
                    Region
                  </Link>
                </div>
                <div className="w-2.5 h-6 bg-blue-700" />
              </div>
              <div className="self-start ml-12 mt-3.5 ml-10 max-md:ml-2.5">
                <Link to="/createArea" className="mr-4 text-white-500">
                  Area
                </Link>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3f759946156a22f74bfa44587928f001f478489646a406afb110fa53a6f1e7b?"
            className="self-start mt-5 w-6 aspect-square"
          />
        </div>
        <div className="flex flex-col flex-1 self-start mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col ml-10 max-w-full leading-[150%] w-[1032px]">
            <div className="text-xl font-bold text-slate-900 max-md:max-w-full">
              Create Region
            </div>
            <div className="flex gap-1.5 items-center self-start mt-3 text-sm text-slate-500">
              <div className="self-stretch my-auto">Geo</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9de4580e68eb5542a3ec36c4897194a7f10f3014bef6db06a4bd307bef51a7?"
                className="self-stretch aspect-square w-[18px]"
              />
              <div className="self-stretch my-auto">Geo List</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9de4580e68eb5542a3ec36c4897194a7f10f3014bef6db06a4bd307bef51a7?"
                className="self-stretch aspect-square w-[18px]"
              />
              <div className="grow self-stretch my-auto text-blue-700 whitespace-nowrap">
                Create Geo
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-7 mx-6 mt-9 text-sm whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-neutral-200 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex flex-col items-center justify-center mr-10 px-12 py-12 mt-10 max-w-full text-lg whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-neutral-200 text-zinc-600 w-[475px] max-md:w-full max-md:px-5">
                <form onSubmit={handleSUbmit} className="w-full">
                  <div className="font-bold text-2xl mb-3">Region</div>

                  <div>
                    <input
                      type="text"
                      className='form-control w-full py-4 pr-16 pl-3 mt-3 bg-white rounded-xl border border-gray-300 border-solid max-md:pr-5'
                      onChange={(e) => setRegion(e.target.value)}
                      placeholder='Enter Region'
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-8 py-3 text-lg text-white rounded-xl border border-indigo-500 border-solid bg-sky-950 max-md:mt-10"
                  >
                    Add Region
                  </button>
                </form>
              </div>
            </div>



          </div>
          <div className="flex gap-5 justify-between p-6 w-full text-sm bg-gray-100 mt-[716px] text-slate-500 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div>2022 © MAAC</div>
            <div className="flex gap-5 justify-between">
              <div className="grow whitespace-nowrap">Contact Us</div>
              <div>Privacy Policy</div>
              <div className="grow whitespace-nowrap">Terms & Condition</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CreateRegion;
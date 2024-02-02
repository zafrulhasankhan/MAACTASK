import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../Datatable/Datatable';
import { Link,useNavigate  } from 'react-router-dom';
function GetRegion(props) {

  const [regionList, setRegionList] = useState([]);
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    
    const storedToken = sessionStorage.getItem('token'); 
   
    if (storedToken) {
      setToken(storedToken);
      fetchRegionList(storedToken);
    } 
    
  }, []);

  const fetchRegionList = (token) => {
    const headers = {
      Authorization: `Bearer ${token}`
    };

    axios.get('https://staging-api.erpxbd.com/api/v1/region/20/1', { headers })
      .then(res => {
        console.log(res.data.region);
        setRegionList(res.data.region); // Set region list state with response data
      })
      .catch(err => {
        console.error('Error fetching region list:', err);
        // Handle error
      });
  };

  const columns = [
    {
      Header: 'Sl No',
      accessor: 'id',
    },
    {
      Header: 'Region',
      accessor: 'name',
    },

  ];
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
                  <Link to="/getRegion" className="mr-4 text-white-500">
                    Region
                  </Link>
                </div>
                <div className="w-2.5 h-6 bg-blue-700" />
              </div>
              <div className="self-start ml-12 mt-3.5 ml-10 max-md:ml-2.5">
                <Link to="/getArea" className="mr-4 text-white-500">
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
          <div className="flex gap-5 justify-between mx-8 whitespace-nowrap leading-[150%] max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-col">
              <div className="text-xl font-bold text-slate-900">
                Region List
              </div>
              <div className="flex gap-1.5 justify-between items-center mt-3.5 text-sm">
                <div className="grow self-stretch my-auto text-slate-500">
                  Geo
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9de4580e68eb5542a3ec36c4897194a7f10f3014bef6db06a4bd307bef51a7?"
                  className="self-stretch aspect-square w-[18px]"
                />
                <div className="grow self-stretch my-auto text-blue-700">
                  Geo List
                </div>
              </div>
            </div>
            <div className="justify-center self-start px-4 py-2 text-base text-white rounded-xl bg-sky-950">
              <Link to="/createRegion" className="mr-4 text-white-500">
                + Create New
              </Link>
            </div>
          </div>
          <div className="flex flex-col py-7 mx-6 mt-9 text-sm whitespace-nowrap bg-white rounded-xl border border-solid shadow-2xl border-neutral-200 max-md:mr-2.5 max-md:max-w-full">

            <DataTable data={regionList.map((region, index) => ({ id: index + 1, name: region.name }))} columns={columns} />
          </div>
          <div className="flex gap-5 justify-between p-6 mt-80 w-full text-sm bg-gray-100 text-slate-500 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
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

export default GetRegion;


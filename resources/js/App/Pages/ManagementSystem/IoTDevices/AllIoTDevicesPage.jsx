import React, {useEffect, useContext} from 'react'
import IoTDevicesTable from './Components/IoTDevicesTable';

import { IoTDeviceContext } from '../../../Context/IoTDeviceContext';
import Search from '../../../MainComponents/Search';
import Spinner from '../../../MainComponents/Spinner';
import { GeneralContext } from '../../../Context/GeneralContext';

const AllIoTDevicesPage = () => {
  const { loading, message, getAllIoTDevices, IoTDevices } = useContext(IoTDeviceContext);
  const { getContent, content } = useContext(GeneralContext);

  useEffect(async () => {
    await getAllIoTDevices();
    await getContent();
  }, []);

  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-lg text-blue-dark mb-5">All IoTDevices</h1>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : !loading && content && (<>
        {(!(IoTDevices.length>=1) || message==='There is not any device') ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-center font-extrabold text-2xl">{`There is not any IoTDevice`}</h1>
          </div>
        ) : null}

        {IoTDevices.length >= 1 ? (
          <>
            <Search array={IoTDevices} />
            <IoTDevicesTable />
          </>
        ) : null}
      </>)}
    </div>
  )
}

export default AllIoTDevicesPage

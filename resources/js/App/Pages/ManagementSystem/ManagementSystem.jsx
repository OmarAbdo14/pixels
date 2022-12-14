import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import Sidebar from '../../MainComponents/Sidebar';
import Accounts from './Accounts/Accounts';
import IoTDevices from './IoTDevices/IoTDevices';
import Observers from './Observers/Observers';
import Users from './Users/Users';


const ManagementSystem = () => {

  return (
    <div className="row flex-nowrap w-full mx-0">
      <Sidebar />
      <main className="bg-gray-light col px-0">
          <div className='float-right mr-14 w-40 h-44 pt-10 d-inline-block'>
            <img src={`../../../../../public/images/pixels-logo.jpeg`} className="rounded-2xl d-block" />
          </div>
          <div className='clear-both'></div>
        <Switch>
          <Route path={`/managementSystem/IoTDevices`} >
            <IoTDevices  />
          </Route>

          <Route path={`/managementSystem/observers`} >
            <Observers  />
          </Route>

          <Route path={`/managementSystem/users`} >
            <Users  />
          </Route>

          <Route path={`/managementSystem/accounts`} >
            <Accounts  />
          </Route>

          <Redirect to={`/not-found`} />
        </Switch>
      </main>
    </div>
  )
}

export default ManagementSystem


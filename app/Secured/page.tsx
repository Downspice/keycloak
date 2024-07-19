import { Centrifuge } from 'centrifuge';
import PrivateRoute from '../../helpers/PrivateRoute';
import React from 'react';
import { WS_ENDPOINT } from '../constants';
import { getConnectionToken } from '../apis';


const Secured = () => {
  let centrifuge: Centrifuge | null = null;
  console.log("new Centrifuge")
      centrifuge = new Centrifuge(WS_ENDPOINT, {
        getToken: getConnectionToken,
        debug: true
      })
 return (
   <div>
     <PrivateRoute>
      


       <h1 className="text-black text-4xl flex justify-center pt-3">Welcome to the Protected Page.</h1>
     </PrivateRoute>
   </div>
 );
};

export default Secured;
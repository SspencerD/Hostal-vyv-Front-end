import React from 'react';
import { Provider } from 'react-redux';
import { Approuter } from './routers/Approuter';
import { store } from './components/store/store';



export const HostalApp = () => {
    return (
        <div>


            <Provider store={store}>
                <Approuter/>
            
            </Provider>

            
        </div>
    )
}

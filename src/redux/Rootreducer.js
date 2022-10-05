import React from 'react';

let initialState={
    activeTab:1
}
const Rootreducer=(state=initialState,action)=>{
    switch(action.type)
    {   
        case "changeTabIndex" :{
            console.log("in")
            return {...state,activeTab:action.payload}
        }
            
        default:return state
    }
}

export default Rootreducer
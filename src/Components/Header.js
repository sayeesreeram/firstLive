import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import { useSelector,useDispatch } from 'react-redux';

const useStyles=makeStyles({
  header:{
   paddingTop:"8vh",
   display:"flex",
   marginLeft:"35%",
   width:"30%",
   justifyContent:"space-between",
   color:"white",
   font:"24px Work Sans",
  },
  individualEl:{
    cursor:"pointer"
  },
  active:{
    textDecoration:"underline red",
    textDecorationThickness:"5px",
    textDecorationSkipInk:"none",
    zIndex:"9999"
  }
})

function Header() {
    const activeTab=useSelector((state)=>state.activeTab)
    const classes=useStyles()
    const dispatch=useDispatch();
    useEffect(()=>{
        
    },[])
  return (
    <div className={classes.header}>
        <div className={`${classes.individualEl} ${activeTab==1&&classes.active}`} onClick={()=>{dispatch({type:"changeTabIndex",payload:1})}}>Home</div>
        <div className={`${classes.individualEl} ${activeTab==2&&classes.active}`} onClick={()=>dispatch({type:"changeTabIndex",payload:2})}>Projects</div>
        <div className={`${classes.individualEl} ${activeTab==3&&classes.active}`} onClick={()=>dispatch({type:"changeTabIndex",payload:3})}>Experience</div>
    </div>
  )
}

export default Header
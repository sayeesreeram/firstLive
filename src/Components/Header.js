import React from 'react'
import { makeStyles } from '@mui/styles';

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
    const classes=useStyles()
  return (
    <div className={classes.header}>
        <div className={`${classes.individualEl} ${classes.active}`}>Home</div>
        <div className={`${classes.individualEl} ${classes.active}`}>Projects</div>
        <div className={`${classes.individualEl} ${classes.active}`}>Experience</div>
    </div>
  )
}

export default Header
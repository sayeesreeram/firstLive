import React from 'react'
import { makeStyles } from '@mui/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles({
    firstSectionContent: {
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        alignItems: "center",
        marginTop: "35vh",
        height: "54vh",
        textAlign:"center" 
    }
})


function FirstSection() {
    const style = useStyles()


    return (
        <div className={style.firstSectionContent}>
            <div>
                <div style={{ color: "yellow", font: "50px Work Sans",fontWeight:"700" }}>Hi, My Name is Sayee Sree Ram G</div>
                <div style={{textAlign:"center" }}>
                <div style={{ marginTop: "3%", color: "white", font: "24px Work Sans" }}>A Software Developer with a passion in learning </div>
                <div style={{ color: "white", font: "24px Work Sans" }}>and implementing </div>
                </div>
                <div style={{ display: "flex", marginTop: "3vh", justifyContent: "space-between",width:"20%",marginLeft:"40%" }}>
                    <LinkedInIcon style={{ color: "white", fontSize: "35px", margin: "5px", cursor: "pointer" }} />
                    <GitHubIcon style={{ color: "white", fontSize: "35px", margin: "5px", cursor: "pointer" }} />
                    <EmailIcon style={{ color: "white", fontSize: "35px", margin: "5px", cursor: "pointer"}} />
                </div>
            </div>
        </div>
    )
}

export default FirstSection
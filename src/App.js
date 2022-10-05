import { makeStyles } from '@mui/styles';
import Header from './Components/Header';

const useStyles = makeStyles({
  app: {
    height: "auto",
    width: "100%",
    overflowX:"hidden"
  },
  firstSection:{
    height:"auto",
    backgroundColor: "#23297a"
  },
  firstSectionContent:{
    display:"flex",
    flexDirection:"column",
    width:"100vw",
    alignItems:"center",
    marginTop:"35vh",
    height:"54vh"
  }
})

function App() {
  const style = useStyles()
  return (
    <div className={style.app}>
      <div className={style.firstSection}>
        <Header />
        <div className={style.firstSectionContent}>
            <div style={{color:"yellow",font:"40px Work Sans"}}>Hi, My Name is Sayee Sree Ram G</div>
            <div style={{marginTop:"3%",color:"white",font:"24px Work Sans"}}>A Software Developer with a passion in learning </div>
            <div style={{color:"white",font:"24px Work Sans"}}>and implementing </div>
        </div>
      </div>
    </div>
  );
}

export default App;

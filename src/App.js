import { makeStyles } from '@mui/styles';
import Header from './Components/Header';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useSelector } from 'react-redux';
import FirstSection from './Components/FirstSection';

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
  const activeTab=useSelector((state)=>state.activeTab)
  return (
    <div className={style.app}>
      <div className={style.firstSection}>
        <Header />
        {activeTab==1&&<FirstSection/>}
      </div>
    </div>
  );
}

export default App;

import './TopBar.scss'
import {PersonPin , Mail } from "@mui/icons-material";


const TopBar = ({open,setopen}) => {
  return (
    <div className={"TopBar " + (open && "active")}>
      <div className="wrap">
        <div className="left">
          <a href="#work" className='logo'>
            Portf
          </a>
          <div className="item">
            <PersonPin  className='icon' />
            <span>
              +91 111111
            </span>

          </div>
          <div className="item">
            <Mail  className='icon' / >
            <span>
              port@gmail
            </span>

          </div>
        </div>
        <div className="right">
          <div className="line" onClick={()=>{setopen(!open)}}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopBar

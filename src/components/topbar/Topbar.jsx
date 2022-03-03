import "./topbar.scss"
import {Person, Mail, GitHub} from "@material-ui/icons"
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            
            <div className="left">
                <a href="#intro" className="logo">genius.</a>
                <div className="itemContainer">
                    <Person className="icon"></Person>
                    <span>+12 234 3452</span>
                </div>

                <div className="itemContainer">
                    <Mail className="icon"></Mail>
                    <span>admin@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <GitHub className="icon"></GitHub>
                    <span href="link">github.com</span>

                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
        </div>
    )
}

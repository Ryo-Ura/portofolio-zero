import "./topbar.scss"
import {Mail, GitHub} from "@material-ui/icons"
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            
            <div className="left">
                <a href="#intro" className="logo">Ryosuke Urawa.</a>

                <div className="itemContainer">
                    <Mail className="icon"></Mail>
                    <span>urawaryosuke@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <GitHub className="icon"></GitHub>
                    <a href="https://github.com/Ryo-Ura" className="clickable">
                        <span href="link">github</span>
                    </a>

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

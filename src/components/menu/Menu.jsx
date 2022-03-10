import "./menu.scss"
import {LinkedIn, Mail, GitHub} from "@material-ui/icons"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">intro</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portofolio">portofolio</a>
            </li>
            {/* <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">testimonials</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">contact</a>
            </li> */}
        </ul>
        <ul>
            <li className="contact">
                <div className="itemContainer">
                    <LinkedIn className="icon" fontSize="small"></LinkedIn>
                    <a href="https://www.linkedin.com/in/ryosuke-roy-urawa-63a19a223/" className="clickable">
                        <span href="link">@Ryosuke</span>
                    </a>
                </div>

                <div className="itemContainer">
                    <Mail className="icon" fontSize="small"></Mail>
                    <span>urawaryosuke@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <GitHub className="icon" fontSize="small"></GitHub>
                    <a href="https://github.com/Ryo-Ura" className="clickable">
                        <span href="link">github</span>
                    </a>

                </div>
            </li>
        </ul>
    </div>
    )
}

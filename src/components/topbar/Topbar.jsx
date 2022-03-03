import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
export default function Topbar() {
    return (
        <div className='topbar'>
        <div className="wrapper">
            
            <div className="left">
                <a href="#intro" className="logo">genius.</a>
                <div className="itemContainer">
                    <Person className="icon"></Person>
                    <span>+12 234 3452</span>

                <div className="itemContainer">
                    <Mail className="icon"></Mail>
                    <span>admin@gmail.com</span>
                </div>
                </div>
            </div>
            <div className="right">right</div>
        </div>
        </div>
    )
}

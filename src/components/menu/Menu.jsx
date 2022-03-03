import "./menu.scss"

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
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">testimonials</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">contact</a>
            </li>
        </ul>
    </div>
    )
}

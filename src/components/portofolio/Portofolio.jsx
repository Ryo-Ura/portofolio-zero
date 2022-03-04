import PortofolioList from "../portofolioList/PortofolioList";
import "./portofolio.scss"
import { useEffect, useState } from "react";
import { featuredPortofolio, webPortofolio, mobilePortofolio } from "../../data";

export default function Portofolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ];

  useEffect(()=>{
    switch (selected) {
      case "featured":
        setData(featuredPortofolio);
        break;
      case "web":
        setData(webPortofolio);
        break;
      case "mobile":
        setData(mobilePortofolio);
        break;
      default:
        break;
    }
  }, [selected])
  return (
    <div className='portofolio' id="portofolio">
      <h1>Portofolio</h1>
      <ul>
        {list.map((item)=>(
          <PortofolioList title = {item.title} active = {selected === item.id} setSelected = {setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
      {data.map(d=>(
          <div className="item">
              <img src = {d.img} alt="" />
              <h3>{d.title}</h3>
          <h5><a href={d.alt}>git repo</a></h5>
          </div>
        ))}
      </div>

    </div>
  )
}

import PortofolioList from "../portofolioList/PortofolioList";
import "./portofolio.scss"
import { useEffect, useState } from "react";

export default function Portofolio() {
  const [selected, setSelected] = useState("featured")
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

  return (
    <div className='portofolio' id="portofolio">
      <h1>Portofolio</h1>
      <ul>
        {list.map((item)=>(
          <PortofolioList title = {item.title} active = {selected === item.id} setSelected = {setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg/1200px-%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg" alt="Відьомські пороги на світанку.jpg"  />
        <h3>Image</h3>
        </div>
        <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg/1200px-%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg" alt="Відьомські пороги на світанку.jpg"  />
        <h3>Image</h3>
        </div>
        <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg/1200px-%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg" alt="Відьомські пороги на світанку.jpg"  />
        <h3>Image</h3>
        </div>
        <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg/1200px-%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg" alt="Відьомські пороги на світанку.jpg"  />
        <h3>Image</h3>
        </div>
        <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg/1200px-%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg" alt="Відьомські пороги на світанку.jpg"  />
        <h3>Image</h3>
        </div>
        <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg/1200px-%D0%92%D1%96%D0%B4%D1%8C%D0%BE%D0%BC%D1%81%D1%8C%D0%BA%D1%96_%D0%BF%D0%BE%D1%80%D0%BE%D0%B3%D0%B8_%D0%BD%D0%B0_%D1%81%D0%B2%D1%96%D1%82%D0%B0%D0%BD%D0%BA%D1%83.jpg" alt="Відьомські пороги на світанку.jpg"  />
        <h3>Image</h3>
        </div>
      </div>

    </div>
  )
}

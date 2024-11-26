import { cards } from "../../data";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="section__container hero__container">
        {cards.map((card,index)=>(
            <div key={index} className="hero__card">
                <div className="hero__card-img">
                    <img src={card.image} alt="" />
                </div>
                <div className="hero__content ">
                    <span>{card.trend}</span>
                    <h3>{card.title}</h3>
                    <a href="" className="flex items-center"> Discover More <ArrowRight size={15}  /></a>
                </div>
            </div>
        ))}
    </section>
)
}

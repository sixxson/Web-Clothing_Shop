import { BiSupport } from "react-icons/bi";
import { BsCoin, BsTruck } from "react-icons/bs";

export default function PromoBanner() {
    return (
        <div className="section__container banner__container">
            <div className="banner__card">
                <span>
                    <BsTruck size={35} />
                </span>
                <h4>Free Delivery</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="banner__card">
                <span>
                    <BsCoin size={35} />
                </span>
                <h4>Free Delivery</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="banner__card">
                <span>
                    <BiSupport size={35} />
                </span>
                <h4>Free Delivery</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.

                </p>
            </div>

        </div>
    )
}

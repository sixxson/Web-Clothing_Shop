import delas from '../../../assets/deals.png'
import Countdown from './CountDowns'


export default function DealsSection() {

    return (
        <section className="section__container deals__container">
            <div className="deals__image    ">
                <img src={delas} alt="" />
            </div>
            <div className="deals__content">
                <h5 className='uppercase'>get up to 20% Discount</h5>
                <h4>Deals of this Month</h4>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi aspernatur libero provident inventore, facilis ratione aliquam ab! Laudantium quidem iusto optio rem iure? Iusto,
                    asperiores sunt. Eos repudiandae cum illo?asdasdahdakshdjajkd
                    asdaksdladk 
                </p>
                <Countdown initialSeconds={3 * 24 * 60 * 60} />
            </div>
        </section>
    )
}

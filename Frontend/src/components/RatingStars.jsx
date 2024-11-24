
import PropTypes from 'prop-types';
import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im'
const RatingStars = ({ rating }) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<ImStarFull key={i} size={20} />)
        } else if (i - 0.5 <= rating) {
            stars.push(<ImStarHalf key={i} size={20} />)
        } else {
            stars.push(<ImStarEmpty key={i} size={20} />)
        }
    }
    return (
        <div className="product__rating flex justify-center mt-2">{stars}</div>
    )
}

RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default RatingStars;


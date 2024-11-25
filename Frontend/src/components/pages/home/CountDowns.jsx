import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

const Countdown = ({ initialSeconds }) => {
    // State lưu số giây còn lại
    const [timeLeft, setTimeLeft] = useState(initialSeconds);

    useEffect(() => {
        // Dừng khi thời gian hết
        if (timeLeft <= 0) return;

        // Giảm số giây mỗi giây
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        // Dọn dẹp khi component unmount hoặc thay đổi `timeLeft`
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Chuyển đổi giây thành ngày, giờ, phút, giây
    const formatTime = () => {
        const days = Math.floor(timeLeft / (3600 * 24));
        const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime();

    return (
        <>
            {timeLeft > 0 ? (
                <div className="deals__countdown flex-wrap">
                    <div className="deals__countdown__card">
                        <h4>{days}</h4>
                        <p>Days</p>
                    </div>
                    <div className="deals__countdown__card">
                        <h4>{hours}</h4>
                        <p>Hours</p>
                    </div>
                    <div className="deals__countdown__card">
                        <h4>{minutes}</h4>
                        <p>Mins</p>
                    </div>
                    <div className="deals__countdown__card">
                        <h4>{seconds}</h4>
                        <p>Secs</p>
                    </div>
                </div>
            ) : (
                <div className="deals__countdown flex-wrap">
                    <h4 className="bg-primary text-white ">Time Out</h4>
                </div>
            )}
        </>
    );
};

Countdown.propTypes = {
    initialSeconds: PropTypes.number.isRequired,
};

export default Countdown;
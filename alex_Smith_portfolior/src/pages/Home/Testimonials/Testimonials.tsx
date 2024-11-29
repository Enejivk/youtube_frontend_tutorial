import React from "react"
import testimonialPicture1 from '.././../../assets/personal/10001.jpg'
import testimonialPicture2 from '.././../../assets/personal/10002.jpg'
import testimonialPicture3 from '.././../../assets/personal/10003.jpg'
import styles from './Testimonials.module.css'
import { useScrollHandler } from '../../../Components/handleScroll'
import SectionSubtitle from '../../../Components/SectionSubtitle/SectionSubtitle'

interface TestimonialCardProp {
    image: string,
    text: string,
    name: string,
    profession: string,
}

const TestimonialCard: React.FC<TestimonialCardProp> = ({
    image,
    text,
    name,
    profession,
}) => {
    return (
        <div className={styles.testimonialCard}>
            <img src={image} alt="Testimonial image" />
            <div className={styles.testimonialCardText}>
                <p>{text}</p>
                <h2>{name}</h2>
                <i>{profession}</i>
            </div>

        </div>

    )
}

const Testimonials = () => {
    const {
        teRef,
        handleMouseMove,
        handleMouseLeave,
        handleMouseUp,
        handleMouseDown,
    } = useScrollHandler();

    return (
        <div className={styles.testimonialSection}>
            <SectionSubtitle
                title='Testimonials'
            />
            <div
                className={styles.testimonialContainer}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                ref={teRef}
            >
                <TestimonialCard
                    image={testimonialPicture1}
                    text="Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.."
                    name="John Doe"
                    profession="Medical Doctor"
                />
                <TestimonialCard
                    image={testimonialPicture2}
                    text="Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam."
                    name="John Doe"
                    profession="Medical Doctor"
                />
                <TestimonialCard
                    image={testimonialPicture3}
                    text="Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam."
                    name="John Doe"
                    profession="Medical Doctor"
                />
            </div>
        </div>
    );
};

export default Testimonials;
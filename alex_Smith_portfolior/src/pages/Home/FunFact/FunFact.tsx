import React from 'react'
import star from '../../../assets/personal/Vector.png'
import heart from '../../../assets/personal/Icon-1.png'
import time from '../../../assets/personal/Icon.png'
import cup from '../../../assets/personal/Vector-1.png'
import styles from './FunFact.module.css'
interface FunFactCardProps {
    image: string;
    title: string;
    value: string;
}

const FunFactCard: React.FC<FunFactCardProps> = ({ image, title, value }) => {
    return (
        <div className={styles.funFactCard}>
            <img src={image} alt="fun Fact Icon" />
            <h2>{title}</h2>
            <h1>{value}</h1>
        </div>
    )
}

const FunFact = () => {
    return (
        <div className={styles.FunFactSection}>
            <h1></h1>
            <div className={styles.funFactCardContainer}>
                <FunFactCard
                    image={star}
                    title='Awards Won'
                    value='15'
                />
                <FunFactCard
                    image={time}
                    title='Happy Clients'
                    value='578'
                />
                <FunFactCard
                    
                    image={heart}
                    title='Working Hours'
                    value='4,780'
                />
                <FunFactCard
                    image={cup}
                    title='Coffee Consumed'
                    value='1,286'
                />
            </div>
        </div>
    )
}

export default FunFact

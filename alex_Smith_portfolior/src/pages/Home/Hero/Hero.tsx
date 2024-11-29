import styles from './Hero.module.css'
import heroImage from '../../../assets/personal/10012.jpg'

const Hero = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.userPicture}>
                <img src={heroImage} alt="personal picture" />
            </div>

            <div className={styles.heroText}>
                <p>Frontend-developer</p>
                <h1>Alex Smith</h1>
                <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                    convallis, risus non condimentum gravida, odio mauris ullamcorper
                    felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
                    placerat sapien pretium eu.
                </p>
                <div className={styles.heroButtons}>
                    <button>Download CV</button>
                    <button>Contact</button>
                </div>

            </div>
        </div>
    )
}

export default Hero

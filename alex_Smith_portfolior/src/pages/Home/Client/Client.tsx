import image1 from '../../../assets/personal/10004.png'
import image2 from '../../../assets/personal/10005.png'
import image3 from '../../../assets/personal/10006.png'
import image4 from '../../../assets/personal/10007.png'
import image5 from '../../../assets/personal/10008.png'
import image6 from '../../../assets/personal/10009.png'
import image7 from '../../../assets/personal/10010.png'
import styles from './Client.module.css'
import SectionSubtitle from '../../../Components/SectionSubtitle/SectionSubtitle'
import { useScrollHandler } from '../../../Components/handleScroll'

const Client = () => {
    const client = [image1, image2, image3, image4, image5, image6, image7]
    const { teRef,
        handleMouseMove,
        handleMouseLeave,
        handleMouseUp,
        handleMouseDown,
    } = useScrollHandler()
    return (
        <div className={styles.clientSection}>
            <SectionSubtitle title='Client'/>
            <div
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={teRef}

                className={styles.clientLogos}>
                {client.map((value) => {
                    return <div>
                        <img src={value} alt="client images" />
                    </div>
                })}
            </div>
        </div>
        
    )
}

export default Client

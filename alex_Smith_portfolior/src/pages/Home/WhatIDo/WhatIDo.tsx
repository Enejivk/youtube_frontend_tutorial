import React from 'react'
import styles from './WhatIDo.module.css'
import webdev from '../../../assets/personal/webdev.png'
import ecommers from '../../../assets/personal/ecommers.png'
import marketing from '../../../assets/personal/marketing.png'
import copywritting from '../../../assets/personal/copyWritting.png'
import SectionSubtitle from '../../../Components/SectionSubtitle/SectionSubtitle'

interface WhatIDoCardProps {
    image: string;
    title: string;
    description: string;
}
const WhatIDoCard: React.FC<WhatIDoCardProps> = ({ image, title, description }) => {
    return (
        <div className={styles.whatIdoCard}>
            <div className={styles.whatIdoCardImage}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.whatIdoCardText}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}

const WhatIDo = () => {
    return (
        <div className={styles.whatIdoEntireContainer}>
            <SectionSubtitle title='What I do' />    
            <div className={styles.whatIDoContainer}>
                <WhatIDoCard
                    image={webdev}
                    title="Web Development"
                    description="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
                />
                <WhatIDoCard image={ecommers}
                    title="E-commers"
                    description="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex." />
                <WhatIDoCard
                    image={marketing}
                    title="Marketing"
                    description="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex." />
                <WhatIDoCard
                    image={copywritting}
                    title="Copywritting"
                    description="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex." />
            </div>
        </div>

    )
}

export default WhatIDo

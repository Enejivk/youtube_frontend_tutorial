import React from "react"
import styles from './SectionSubtitle.module.css'

interface SectionTitleProp {
    title: string
}
const SectionSubtitle: React.FC<SectionTitleProp> = ({ title }) => {
    return (
        <div className={styles.tick}>
            <h2>{title}</h2>
        </div>
    )
}

export default SectionSubtitle

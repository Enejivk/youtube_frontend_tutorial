import React from 'react'
import styles from './SectionTitle.module.css'

interface SectionTitleProp {
    title: string
    otherText?: string
}
const SectionTitle: React.FC<SectionTitleProp> = ({
    title = "Resume", otherText = '2 experience' }) => {
    return (
        <div className={styles.sectionTitle}>
            <h1>{title}</h1>
            {otherText && (<p className={styles.otherText}>{otherText}</p>)}
        </div>
    )
}

export default SectionTitle

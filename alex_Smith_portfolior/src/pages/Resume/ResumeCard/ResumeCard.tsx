import React from 'react'
import styles from './Resume.module.css'
import SectionSubtitle from '../../../Components/SectionSubtitle/SectionSubtitle'

interface ResumeCardProp {
    date?: string,
    location?: string,
    description?: string,
    title?: string
}
const ResumeCard: React.FC<ResumeCardProp> = ({
    date = "2009",
    location = "University of Studies",
    description = "Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuerelacus arcu quis felis.Etiam interdum erat non enim venenatis fermentum.",
    title = "UI Design"
}) => {
    return (
        <div className={styles.resumeCard}>
            <div className={styles.dateAndLocation}>
                <span className={styles.date}>
                    {date}
                </span>
                <p className={styles.location}>{location}</p>
            </div>
            <div className={styles.description}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            
        </div>
    )
}


const ExperienceAndResume = () => {
    return <div className={styles.eductionAndExperience}>
        <div>
            <SectionSubtitle title='Education' />
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
        </div>
        <div>
            <SectionSubtitle title='Experience' />
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
        </div>
    </div>
}
export default ExperienceAndResume

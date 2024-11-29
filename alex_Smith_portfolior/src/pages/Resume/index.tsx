import NavBar from '../../Components/Nav/NavBar'
import SectionTitle from '../../Components/SectionTittle/SectionTitle'
import SectionSubtitle from '../../Components/SectionSubtitle/SectionSubtitle'
import ExperienceAndResume from './ResumeCard/ResumeCard'
import Certificate from './Certificate/Certificate'

const index = () => {
    return (
        <div>
            <NavBar />
            <SectionTitle
                title='Resume'
                otherText='8 Years of Experience'
            />
            <ExperienceAndResume />
            <Certificate />
            
        </div>
    )
}

export default index

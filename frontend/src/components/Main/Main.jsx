import './MainMobile.css'
import './MainDesktop.css'
import NavBar from '../NavBar/NavBar'
import SectionHero from '../SectionHero/SectionHero'
import SectionServices from '../SectionServices/SectionServices'
import SectionOptions from '../SectionOptions/SectionOptions'
import Footer from '../Footer/Footer'

export default function Main(){
    return(
        <main>
            <NavBar/>
            <SectionHero/>
            <SectionServices/>
            <SectionOptions/>
            <Footer/>
        </main>
    )
}
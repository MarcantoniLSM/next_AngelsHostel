import './SectionHeroMobile.css'
import './SectionHeroDesktop.css'

export default function SectionHero(){
    return(
        <section className='sectionHero'>
            <img src='./assets/images/icon_play.svg'/>
            <h1>Descubra e surpreenda-se!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Et, ex expedita. Rerum exercitationem consequatur nostrum possimus accusantium? 
            </p>
            <button>Acessar</button>
        </section>
    )
}
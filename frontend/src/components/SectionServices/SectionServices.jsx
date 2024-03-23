import Card from '../Card/Card'
import './SectionServices.css'

export default function SectionServices(){
    return(
        <section className='sectionServices'>
            <Card 
                src='./assets/images/home (1).png'
                alt='Hospedagem'
                title='Hospedagem'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Eligendi cupiditate placeat sequi! Aliquam sit est, ipsam quisquam pariatur qui quasi,
                  doloremque illo et aperiam alias?
'
                />
            <Card 
                src='./assets/images/map.png'
                alt='Localização'
                title='Localização'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Eligendi cupiditate placeat sequi! Aliquam sit est, ipsam quisquam pariatur qui quasi,
                  doloremque illo et aperiam alias?
'
                />
            <Card 
                src='./assets/images/restaurant.png'
                alt='Restaurantes'
                title='Restaurantes'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Eligendi cupiditate placeat sequi! Aliquam sit est, ipsam quisquam pariatur qui quasi,
                  doloremque illo et aperiam alias?
'
                />
            <Card 
                src='./assets/images/chat.png'
                alt='Fale conosco'
                title='Fale conosco'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Eligendi cupiditate placeat sequi! Aliquam sit est, ipsam quisquam pariatur qui quasi,
                  doloremque illo et aperiam alias?
'
                />

        </section>
    )
}
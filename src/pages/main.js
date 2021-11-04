import Header from '../components/app/header/header'

import keyboard from '../img/keyboard.png'
import cloud from '../img/cloud.png'
import clock from '../img/clock.png'
import light from '../img/light.png'
import box from '../img/box.png'

import window from '../img/window.png'
import tools from '../img/tools_panel.png'

import PopularRender from '../components/app/popularItems/popularRender'

import '../stylesheet/css/mobile/main.css'

export default Main=>{
    return(
        <div className="main">
            <Header></Header>
            <div className="main_wrapper">
                <div className="container">
                    <h1>
                        Планируете сделать принт?
                        Вы пришли по адресу
                    </h1>
                    <p>
                        Reklem - только оптовая работа высокого качества с индивидуальным подходом.
                        Работаем с 2008 года.
                    </p>
                    <a href="/"><button>Перейти в каталог</button></a>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <img src={keyboard} alt="keyboard"/>
                    <h1>
                        Пара слов о нас,
                        производстве
                        и брендинге
                    </h1>
                    <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта.</p>
                    <p>
                        В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта опыт мы упускаем,
                        что ключевые особенности структуры проекта.
                    </p>
                    <a href="/">
                        <button>О компании</button>
                    </a>
                </div>
            </div>
            <div className="info">
                <div className="container">
                    <div className="constructor">
                        <div className="constructor_item">
                            <img src={cloud} alt="item"/>
                            <h3>Онлайн конструктор</h3>
                            <p>С конструктором создавайте свои уникальные дизайны</p>
                        </div>
                        <div className="constructor_item">
                            <img src={clock} alt="item"/>
                            <h3>Принт за 24 часа</h3>
                            <p>Некоторые заказы можем произвести быстрее суток</p>
                        </div>
                        <div className="constructor_item">
                            <img src={light} alt="item"/>
                            <h3>Быстрая доставка</h3>
                            <p>Сотрудничаем с быстрыми и надежными службами</p>
                        </div>
                        <div className="constructor_item">
                            <img src={box} alt="item"/>
                            <h3>Только ОПТ</h3>
                            <p>Работаем на большие объемы брендинга</p>
                        </div>
                    </div>
                    <div className="place">
                        <div className="window">
                            <img src={window} alt="img"/>
                            <img src={tools} alt="img" className="tools"/>
                        </div>
                        <h2>Разместите свое изображение как хотите</h2>
                        <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности.</p>
                        <button>
                            Доступно через компьютер
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.305 3.6105C14.4331 3.80458 14.4118 4.06832 14.2409 4.23917L8.11266 10.3674C8.04985 10.4302 7.97142 10.4752 7.88547 10.4976L5.33319 11.1643C5.24994 11.1861 5.16414 11.1856 5.08351 11.1651C4.9978 11.1433 4.91796 11.0988 4.85328 11.0341C4.72776 10.9086 4.6782 10.7259 4.72306 10.5542L5.38973 8.00189C5.40937 7.92669 5.44624 7.85241 5.49723 7.79414L11.6482 1.64645C11.702 1.5926 11.7669 1.55231 11.8375 1.52775C11.8898 1.50955 11.9453 1.5 12.0017 1.5C12.1344 1.5 12.2615 1.55268 12.3553 1.64645L14.2409 3.53206C14.2653 3.55647 14.2867 3.58278 14.305 3.6105ZM13.1803 3.88562L12.0017 2.70711L6.32297 8.38588L5.90632 9.98106L7.50149 9.56439L13.1803 3.88562Z" fill="#B3B3B3"/>
                                <path d="M13.096 11.4402C13.2783 9.8818 13.3363 8.31252 13.27 6.74719C13.2668 6.67225 13.295 6.59932 13.348 6.54628L14.0036 5.89072C14.0842 5.81013 14.2219 5.86129 14.2294 5.97503C14.3527 7.8348 14.306 9.70302 14.0892 11.5564C13.9315 12.9047 12.8486 13.9614 11.5073 14.1113C9.1962 14.3696 6.80731 14.3696 4.49626 14.1113C3.15489 13.9614 2.072 12.9047 1.9143 11.5564C1.63794 9.19351 1.63794 6.80649 1.9143 4.44362C2.072 3.09527 3.15489 2.03859 4.49626 1.88867C6.24943 1.69273 8.04739 1.64543 9.82218 1.74677C9.93657 1.75331 9.98871 1.89172 9.9077 1.97273L9.246 2.63443C9.19353 2.6869 9.12159 2.71507 9.04744 2.71257C7.56316 2.66251 6.06879 2.71915 4.60734 2.88249C3.7206 2.98159 3.01027 3.68134 2.90753 4.55979C2.6402 6.84547 2.6402 9.15452 2.90753 11.4402C3.01027 12.3187 3.7206 13.0184 4.60734 13.1175C6.84457 13.3676 9.15895 13.3676 11.3962 13.1175C12.2829 13.0184 12.9932 12.3187 13.096 11.4402Z" fill="#B3B3B3"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <PopularRender></PopularRender>
            <div className="services">
                <div className="container">
                    <div className="caption">
                        <h2>Популярные услуги</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

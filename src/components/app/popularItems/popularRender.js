import PopularItem from "./popularItem";

import cup from '../../../img/cup.png'
import pen from '../../../img/pen.png'


export default PopularRender=>{
    return(
        <div className="popular_items">
            <div className="container">
                <h2>Популярные и новые товары</h2>
                <div className="popularItems_wrapper">
                    <PopularItem
                        img = {cup}
                        name="Кружка под сублимацию 'Стандарт'"
                    />
                    <PopularItem
                        img = {pen}
                        name="Эко-ручка"
                    />
                    <PopularItem
                        img = {cup}
                        name="Кружка под сублимацию 'Стандарт'"
                    />
                    <PopularItem
                        img = {pen}
                        name="Эко-ручка"
                    />
                    <PopularItem
                        img = {cup}
                        name="Кружка под сублимацию 'Стандарт'"
                    />
                    <PopularItem
                        img = {pen}
                        name="Эко-ручка"
                    />
                </div>
            </div>
        </div>
    )
}

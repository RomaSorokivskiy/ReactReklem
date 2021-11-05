import OptionItem from '../optionItem/optionItem'

import laser from '../../../img/laser.png'
import water from '../../../img/water.png'
import press from '../../../img/press.png'
import roller from '../../../img/roller.png'

export default OptionRender=>{
    return(
        <div className="option_wrapper">
            <OptionItem
                img = {laser}
                name="Гравировка"
                desc="Нанесем на изделия логотип, рисунок или надпись"
            />
            <OptionItem
                img = {water}
                name="Шелкография"
                desc="Изображения высоко качества на любых материалах"
            />
            <OptionItem
                img = {press}
                name="Тиснение"
                desc="Нанесения рельефного рисунка"
            />
            <OptionItem
                img = {roller}
                name="Тампопечать"
                desc="Перенос изображения с помощью силиконового валика"
            />
        </div>
    )
}

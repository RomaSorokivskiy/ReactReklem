import logo from '../../../img/logo.png'

import menu from '../../../img/menu.png'
import phone from '../../../img/phone.png'
import cart from '../../../img/cart.png'
import user from '../../../img/user.png'

export default Header=>{
    return(
        <header>
            <div className="container">
                <a href="/"><img src={logo} alt="logo"/></a>
            </div>
            <nav>
                <ul>
                    <li><a href="/"><img src={user} alt="icon"/></a></li>
                    <li><a href="/"><img src={cart} alt="icon"/></a></li>
                    <li><a href="/"><img src={phone} alt="icon"/></a></li>
                    <li><a href="/"><img src={menu} alt="icon"/></a></li>
                </ul>
            </nav>
        </header>
    )
}

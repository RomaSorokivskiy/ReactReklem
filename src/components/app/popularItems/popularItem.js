export default function PopularItem(props){
    return(
        <div className="popular_item" >
            <img src={props.img} alt="item"/>
            <h3>{props.name}</h3>
            <button>Вид +</button>
        </div>
    )
}

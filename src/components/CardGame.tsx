
import './styles/styles.css'
function CardGame() {
    const twoDArray:number[][]=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];


  return (
    <div>
      <h1>Card Game</h1>
        {twoDArray.map((element:number[])=> <><div className="Card-Box">{element.map((item)=> <p className="card">{item}</p>)}<br/></div></>)}
    </div>
  )
}

export default CardGame
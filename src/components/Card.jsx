import React from 'react'

const Card = (props) => {
  return (
   <>
    <div className='d-flex'>
    <div className="card " style={{width: '18rem'}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.tit}</h5>
    <p class="card-text">{props.des}</p>
    <p class='card-text'>{props.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
   </>
  )
}

export default Card
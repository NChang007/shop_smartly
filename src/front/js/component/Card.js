import { ListItem } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  let name = props.item.name
  let price = props.item.price
  return (
    <div className="card" style={{"width": "12rem"}}>
        <Link to={"/ViewItem/" + props.type + props.id}>
          <img src={props.item.img} className="card-img-top card-img" alt="..."/>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
        {/* <button className="btn btn-primary" onClick={()=>actions.addToBudgetBuddy(name, price)}>budget</button> */}
    </div>
  )
}

export default Card
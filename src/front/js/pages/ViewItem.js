import React, { useContext, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

    
function ViewItem() {
    const {store, actions} = useContext(Context)
    const [value, setValue] = useState()
    let params = useParams()
    let type = params.type
    let item = null
    if(type == "specials"){
        item = actions.getSpecials(parseInt(params.id))
        console.log(item);
    }else if(type == "electronics"){
        item = actions.getElectronics(parseInt(params.id))
    }else{
        item = actions.getHomeStuff(parseInt(params.id))
    }
    
    
    
    return (  
            <div className='viewitemPageContainer'>
                <img 
                    className="viewPageImg"
                    src={item.img} alt="..." 
                />
                <div className='midSection'>
                    <h1><strong>{item.name}</strong></h1>
                    <h6>We scoured the internet looking for the best options for you.
                        <br/>
                        This is what we found 
                        <br/>
                        Enjoy the best Prices we could find
                    </h6>
                    <div className="input-group mb-3 ">
                        <select className="custom-select costSelect" id="inputGroupSelect02">
                            <option selected>Choose Price...</option>
                            <option value="1">Amazon {item.amazonCost}</option>
                            <option value="2">Walmart {item.walmartCost}</option>
                            <option value="3">Targer {item.targetCost}</option>
                        </select>
                    </div>
                    <h5>
                        <strong>Item Description</strong>
                        <br/>
                        {item.description}
                    </h5>
                    <button className="btn btn-info">Add to Cart</button>
                    <button className="btn btn-info">Add to Budget Buddy</button>
                </div>
            </div>

  );
}

export default ViewItem;
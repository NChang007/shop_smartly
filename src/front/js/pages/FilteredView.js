import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

const FilteredView = () => {
    const { store, actions } = useContext(Context);
  return (
    <div className="">
        {store.filteredSpecials.map((item, idx) => {
            return (
                <div className="itemDiv" key={idx}>
                    <Card 
                        item={item} 
                        id={idx} 
                        type="specials" 
                        // search={searchHash}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default FilteredView
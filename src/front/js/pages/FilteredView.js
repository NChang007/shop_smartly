import React from 'react'

const FilteredView = () => {
  return (
    <div className="itemCont">
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
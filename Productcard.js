import React from 'react'

export const Productcard = () => {
  return (
    <div>
        {props.produtlist.map((pro)=>{
            return(
                <li>{pro.title},{pro.price},{pro.rating}</li>
            )
            
        })}
    </div>
  )
}
export default Productcard
/* eslint-disable no-undef */
import React from 'react'
export default function Card(props) {
    let bg_img = `url(${props.images})`
    let { title,newPrice,Name,calories,amount} = props
    return (
     <div className="card">
            <div className="warpper">
                <div className="card_img" style={{ "backgroundImage": bg_img }}></div>
                <div className="cardInfo">
                <div className="a">
                    <h1>{Name}</h1>
                    <p>{calories}</p>
                    <h4>{amount}</h4>
                </div>
                    <p>{title}</p>
                    <div className="action">
                        <div className="priceGroup">
                            <p className="price newPrice">{newPrice}</p>
                        </div>
                        <button type="button" className="z">Add to cart</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
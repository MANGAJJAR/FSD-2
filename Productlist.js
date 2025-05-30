import React from 'react'
import Productlist from './Productcard'
import Productcard from './Productcard'

export default function Productlist() {

    var products = [{
        'title':'Iphone 15',
        'price':89000,
        'rating':4.17},
    {
        'title':'Iphone 14',
        'price':79000,
        'rating':6.17},
    {
        'title':'Iphone 12',
        'price':59000,
        'rating':2.17},
    {
        'title':'Iphone 9',
        'price':59000,
        'rating':3.17}]

  return (
    <div>
        <h1>Details of Products</h1>
        <Productcard productlist = {products}/>
    
    </div>
  )
}

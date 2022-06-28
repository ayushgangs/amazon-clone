import React from 'react'
import objArr from '../../object.js'
import ShirtComp from './ShirtComp.js'

export default function Shirts({addShirt}) {
    let arr= objArr.filter(ele => ele.type== 'shirt')
    return (
    <>
        <ShirtComp data={{arr,addShirt}}/>
    </>
  )
}

import React from 'react'
import obj from '../../object.js'
import PantComp from './PantComp'

export default function Pants({addPant}) {
  let pant= obj.filter(ele => ele.type=='pant')
  console.log(pant)
  return (
    <>
        <PantComp data={{pant,addPant}}/>
    </>    
  )
}

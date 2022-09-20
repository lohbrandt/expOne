import React from 'react'

import Image, { ImageData } from '../Image'


type SlideProps = {
  images : [ImageData]
}

type Position = {
  x: number
  y: number
}

const Slide = (props:SlideProps) => {
  // const [position, setPosition] = React.useState<Position>()
  const [index, setIndex] = React.useState<number>(0)

  const onTick = ()=>{
    //move to next

  }

  const ImageStack = props.images.map( (image,idx) => {
    <Image class='slides' src={image.src} alt=`image_${String(idx)}`/>
  } )

  return (
    <>
      {ImageStack}
    </>
  )
}
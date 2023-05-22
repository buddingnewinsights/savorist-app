import Image from 'next/image'
import { FC } from 'react'

import { Button } from './ui/button'
import { LocationProps } from '@/types'

interface CardItemProps {
  item: LocationProps
}

const CardItem: FC<CardItemProps> = ({ item }) => {
  return (
    <>
      <Image
        src={item.image}
        alt={item.city}
        width={460}
        height={390}
        className="w-screen duration-500"
      />
      <h1 className="mx-2 leading-5 font-serif scroll-m-20 text-[20px] sm:text-3xl md:text-4xl lg:text-[44px] font-medium tracking-normal lg:text-5xl">
        {item.city}
      </h1>
      <Button variant="outline" size="sm" className="w-1/3 mx-2">
        <span className="font-sans text-[10px] sm:text-sm md:text-md lg:text-lg">
          {item.country}
        </span>
      </Button>
      <p className="font-sans text-[10px] sm:text-sm md:text-md lg:text-lg leading-7 [&:not(:first-child)]:mt-6">
        {item.description}
      </p>
    </>
  )
}

export default CardItem

import { FC, useState } from 'react'

interface CardItemsProps {}

import { locations } from '@/constants/constants'
import { ArrowLeft, ArrowRight, Dot } from 'lucide-react'
import CardItem from './CardItem'

const CardItems: FC<CardItemsProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? locations.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === locations.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="relative flex flex-col items-center justify-start h-[680px] w-full gap-5 overflow-hidden">
      <div
        style={{ transform: `translate: (-${currentIndex * 100})` }}
        className="inline-flex items-center justify-start gap-5"
      >
        {locations.map((loc, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="flex flex-col h-full gap-5 transition duration-300 cursor-pointer justify-stretch"
          >
            <CardItem item={loc} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between w-full sm:hidden">
        {/* Left Arrow */}
        <div className="flex p-2 text-2xl text-black cursor-pointer ">
          <ArrowLeft onClick={prevSlide} size={30} />
        </div>
        <div className="flex items-center justify-center gap-3">
          {locations.map((loc, slideIndex) => (
            <Dot
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              size={48}
              className={`${slideIndex === currentIndex ? 'text-black' : ''} text-black/40`}
            />
          ))}
        </div>
        {/* Right Arrow */}
        <div className="flex p-2 text-2xl text-black cursor-pointer ">
          <ArrowRight onClick={nextSlide} size={24} />
        </div>
      </div>
    </div>
  )
}

export default CardItems

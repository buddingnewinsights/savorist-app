import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type LocationProps = {
  city: string
  country: string
  image: StaticImageData
  description: string
}

export type SectionProps = {
  image: StaticImageData
}

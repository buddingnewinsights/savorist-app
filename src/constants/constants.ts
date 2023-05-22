import { img5, img6, img7 } from '@/assest'
import { LocationProps } from '@/types'
import { ReactNode } from 'react'

export const locations: LocationProps[] = [
  {
    city: 'Barcelona',
    country: 'Spain',
    image: img5,
    description:
      'From brilliant museums to dazzling nightlife to Gaudí gems, Barcelona is a city that keeps on giving',
  },
  {
    city: 'Bali',
    country: 'Spain',
    image: img6,
    description: `Bali has a new verve - there's more on offer than pretty landscapes`,
  },
  {
    city: 'Santa Barbara',
    country: 'USA',
    image: img7,
    description: `Perfect weather, beautiful buildings, excellent bars and restaurants, and activities for all tastes and budgets make Santa Barbara a must-see place for visitors to Southern California.`,
  },
]

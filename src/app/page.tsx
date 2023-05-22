'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  img1,
  img2,
  img3,
  img4,
  img8,
  img9,
  img10,
  img11,
  tiktok,
  facebook,
  instagram,
  twitter,
  linkedin,
} from '@/assest'
import Card from '@/components/Card'
import { SectionProps } from '@/types'
import { CollapsibleDemo } from '@/components/CollapsibleDemo'

const sections: SectionProps[] = [
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
]

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-6 lg:px-8 max-w-8xl">
      <div className="grid grid-cols-1 gap-6 border-b border-black pb-9 lg:grid-cols-2">
        <div className="flex flex-col gap-4 justify-evenly">
          <div className="flex flex-col gap-4">
            <h1 className="mx-2 leading-5 font-serif scroll-m-20 text-[20px] sm:text-3xl md:text-4xl lg:text-[44px] font-medium tracking-wide lg:text-5xl">
              Welcome to{' '}
              <span className="font-serif italic font-bold  text-[20px] sm:text-3xl md:text-4xl lg:text-[44px]">
                Savorist
              </span>{' '}
              - The place for{' '}
              <span className="font-serif italic  text-[20px] sm:text-3xl md:text-4xl lg:text-[44px]">
                finding 👀, saving & sharing
              </span>{' '}
              all your favorite spots ✌.
            </h1>
            <Image src={img2} alt="photo-8" height={485} className="w-full" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="mx-2 leading-5 font-serif scroll-m-20 text-[20px] sm:text-3xl md:text-4xl lg:text-[44px] font-medium tracking-normal lg:text-5xl">
              <span className="font-serif italic font-bold  text-[20px] sm:text-3xl md:text-4xl lg:text-[44px]">
                Savorist
              </span>{' '}
              - is a new kind of platform built around the places you love.
            </h1>
            <Image src={img4} alt="photo-8" height={485} className="w-full" />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4">
          <div className="flex flex-col gap-4">
            <Image src={img1} alt="photo-8" height={485} className="w-full" />
            <h1 className="mx-2 leading-5 font-serif scroll-m-20 text-[20px] sm:text-3xl md:text-4xl lg:text-[44px] font-medium tracking-normal lg:text-5xl">
              How it works.
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <Image src={img3} alt="photo-8" height={485} className="w-full" />
            <h1 className="mx-2 leading-5 font-serif scroll-m-20 text-[20px] sm:text-3xl md:text-4xl lg:text-[44px] font-medium tracking-normal lg:text-5xl">
              For exploring the areas you’ve never been, and discovering spots you wish you had
              always known about...
            </h1>
          </div>
        </div>
      </div>

      <div className="py-6 border-b border-black lg:py-8">
        <Card />
      </div>

      <div className="py-6 border-b border-black lg:py-8">
        <div className="flex flex-col gap-5 ">
          <h1 className="mx-2 leading-5 font-serif scroll-m-20 text-[20px] sm:text-3xl md:text-4xl lg:text-[44px] font-medium tracking-normal lg:text-5xl">
            @the.savorist 👀
          </h1>
          <div className="grid items-center justify-center grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-4">
            {sections.map((section, index) => (
              <div className="relative" key={index}>
                <Image src={section.image} alt={`photo- ${index}`} width={460} height={460} />
                <div className="absolute top-5 right-5">
                  <Instagram size={30} color="white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-6 lg:py-8 max-w-8xl">
        <div className="items-center justify-between flex-grow gap-10 sm:flex sm:flex-grow">
          <div className="flex flex-col w-full gap-3 sm:gap-5">
            <h1 className="leading-5 font-sans font-bold scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
              Stay in the know
            </h1>
            <p className="leading-5 font-sans font-bold scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
              Please choose the activities you’re interested in:
            </p>
            <CollapsibleDemo />
            <div className="flex items-center justify-center w-full py-2 border-b border-black sm:w-3/4">
              <p className="w-full  leading-5 font-sans font-medium scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
                Subscribe to our mailing list...
              </p>
              <Send size={24} color="black" className="w-4 rotate-45 sm:w-6" />
            </div>
          </div>

          <div className="flex flex-col justify-center w-full h-full gap-2 items-between sm:gap-10">
            <p className="my-auto leading-5 font-sans font-medium scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
              About Us
            </p>
            <p className="my-auto leading-5 font-sans font-medium scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
              Say Hi
            </p>
            <p className="my-auto leading-5 font-sans font-medium scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
              In The News
            </p>
            <p className="my-auto leading-5 font-sans font-medium scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
              Privacy/Terms
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full gap-2 sm:justify-start sm:gap-5">
            <p className="leading-5 font-sans font-medium scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
              Find Us
            </p>
            <div className="flex items-center justify-center gap-5 mx-atuo sm:justify-start">
              <Image src={facebook} alt="facebook" className="w-4 sm:w-full" />
              <Image src={instagram} alt="instagram" className="w-4 sm:w-full" />
              <Image src={twitter} alt="twitter" className="w-4 sm:w-full" />
              <Image src={linkedin} alt="linkedin" className="w-4 sm:w-full" />
              <Image src={tiktok} alt="tiktok" className="w-4 sm:w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page

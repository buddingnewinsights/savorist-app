'use client'

import { type FC, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
import { logo } from '@/assest'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-6 mx-auto max-w-8xl lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="w-auto h-8" src={logo} alt="logo" width={32} height={32} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Button asChild variant="outline">
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              About Us
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Say Hi
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              In The News
            </Link>
          </Button>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="outline">
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 w-36">
              Log in
            </Link>
          </Button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">savorist</span>
              <Image className="w-auto h-8" src={logo} alt="logo" width={32} height={32} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col py-6 space-y-2">
                <Link
                  href="#"
                  className="block px-3 py-2 -mx-3 font-serif text-base font-medium leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 -mx-3 font-serif text-base font-medium leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Say Hi
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 -mx-3 font-serif text-base font-medium leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  In The News
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 -mx-3 font-serif text-base font-medium leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Privacy/Terms
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar

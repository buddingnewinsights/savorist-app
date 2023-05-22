'use client'

import * as React from 'react'
import { ChevronsUpDown, Plus, X } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-48 sm:w-[350px] space-y-2">
      <Button asChild variant="outline" className="w-full">
        <div className="flex items-center justify-center px-4 space-x-4">
          <h4 className="w-full text-sm font-medium text-slate-400 text-center leading-5 font-sans scroll-m-20 text-[8px] sm:text-sm md:text-md lg:text-[15px] tracking-normal lg:text-5xl">
            I want to...
          </h4>
          <CollapsibleTrigger asChild>
            <button className="p-0 w-9">
              <ChevronsUpDown className="w-4 h-4" />
              <span className="sr-only">Toggle</span>
            </button>
          </CollapsibleTrigger>
        </div>
      </Button>
      <CollapsibleContent className="space-y-2">
        <div className="flex items-center px-6 py-3 font-mono text-sm text-center border-b border-black">
          <label
            htmlFor="terms"
            className="w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Go do something
          </label>
          <Checkbox className="rounded-full" id="terms" />
        </div>
        <div className="flex items-center px-6 py-3 font-mono text-sm text-center border-b border-black">
          <label
            htmlFor="terms"
            className="w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Go to a restaurant
          </label>
          <Checkbox className="rounded-full" id="terms" />
        </div>
        <div className="flex items-center px-6 py-3 font-mono text-sm text-center border-b border-black">
          <label
            htmlFor="terms"
            className="w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Go to a bar
          </label>
          <Checkbox className="rounded-full" id="terms" />
        </div>
        <div className="flex items-center px-6 py-3 font-mono text-sm text-center border-b border-black">
          <label
            htmlFor="terms"
            className="w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Go sightseeing
          </label>
          <Checkbox className="rounded-full" id="terms" />
        </div>
        <div className="flex items-center px-6 py-3 font-mono text-sm text-center border-b border-black">
          <label
            htmlFor="terms"
            className="w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Go shopping
          </label>
          <Checkbox className="rounded-full" id="terms" />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

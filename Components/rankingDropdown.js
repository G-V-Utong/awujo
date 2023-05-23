import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MyRankingDropdown() {

  return (
    <Menu as="div" className="md:hidden relative inline-block text-left font-Inter">
      <div>
        <Menu.Button className="inline-flex w-full justify-center lg:gap-x-1.5 rounded-md bg-none lg:px-3 lg:py-2 text-sm text-white hover:text-gray-500">
          <h1 className=''>
            All
          </h1> 
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  All 
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  This week
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  My connection
                </Link>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )}
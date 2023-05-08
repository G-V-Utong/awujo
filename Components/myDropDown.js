import { Menu } from '@headlessui/react'
import { FaAngleDown } from 'react-icons/fa';

export default function MyDropdown() {

  const AngleDown = () => <FaAngleDown className='ml-2' />


  return (
    <Menu>
      <Menu.Button className='text-md items-center xl:flex hidden'>stanleywest<AngleDown/></Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
        )};
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )};
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )}
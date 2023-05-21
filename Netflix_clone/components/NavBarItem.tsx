import React from 'react'
interface NavBarItemProps {
    label : string
}
const NavBarItem : React.FC<NavBarItemProps> = ({
    label
}) => {
  return (
    <div className=' text-gray-300 hover:text-white cursor-pointer transition'>
      {label}
    </div>
  )
}

export default NavBarItem

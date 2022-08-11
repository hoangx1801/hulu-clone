/* eslint-disable jsx-a11y/alt-text */
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'

import React from 'react';
import Image from 'next/image';
import HeaderItems from './HeaderItems';

function Header() {
  return (
    <header className='header flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-row justify-evenly max-w-2xl'>
            <HeaderItems title='HOME' Icon={HomeIcon} />
            <HeaderItems title='TRENDING' Icon={LightningBoltIcon} />
            <HeaderItems title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItems title='COLLECTIONS' Icon={CollectionIcon} />
            <HeaderItems title='SEARCH' Icon={SearchIcon} />
            <HeaderItems title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image 
            className='object-contain'
            src='https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png' 
            width={200} 
            height={100} 
        />
    </header>
  )
}

export default Header
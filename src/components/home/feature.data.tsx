import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Access to Food Delivery Options',
    description: 'Easily compare and access a wide range of food delivery services in one place',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Save Money on Food Delivery',
    description: 'Find the most affordable food delivery options and save on your orders',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Convenient and Flexible Ordering',
    description: 'Order food at your convenience and enjoy flexible delivery options',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Expert Advice and Assistance',
    description: 'Get guidance and support from food delivery experts for a better experience',
    icon: <ContactSupportIcon />,
  },
]

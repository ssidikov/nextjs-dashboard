import SideNav from '../ui/dashboard/sidenav'
import { Metadata } from 'next'

/* eslint-disable */
const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-x-auto md:p-12'>{children}</div>
    </div>
  )
}

import type { Metadata } from 'next'
import HomeDestinationShowcase from '@/components/home/HomeDestinationShowcase'

export const metadata: Metadata = {
  title: 'Aurora - Luxury Travel',
  description: 'Curated journeys across rare landscapes, quiet escapes, and unforgettable stays.',
}

export default function HomePage() {
  return <HomeDestinationShowcase />
}

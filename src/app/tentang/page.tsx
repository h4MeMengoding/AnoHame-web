/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'

import { Separator } from '@/components/ui/separator'
import { BASEURL } from '@/lib/api'
import { AboutContent } from '@/modules/AboutPage/AboutContent'

export const metadata: Metadata = {
  title: 'Infomasi Mengenai AnoHame',
  alternates: {
    canonical: `${BASEURL}/tentang`,
  },
  description:
    'Informasi dasar mengenai aplikasi AnoHame. Kumpulkan berbagai pertanyaan dari siapa saja secara anonim',
  openGraph: {
    description:
      'Informasi dasar mengenai aplikasi AnoHame. Kumpulkan berbagai pertanyaan dari siapa saja secara anonim',
    title: 'Infomasi Mengenai AnoHame',
  },
  twitter: {
    title: 'Infomasi Mengenai AnoHame',
    description:
      'Informasi dasar mengenai aplikasi AnoHame. Kumpulkan berbagai pertanyaan dari siapa saja secara anonim',
  },
}

export default async function AboutPage() {
  return (
    <main className="w-full container py-8">
      <div className="w-full space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Tentang AnoHame</h2>
        <p className="text-muted-foreground">
          Informasi dasar mengenai platform AnoHame
        </p>
      </div>

      <Separator className="my-6" />

      <AboutContent />
    </main>
  )
}

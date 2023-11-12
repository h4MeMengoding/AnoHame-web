/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'

import { Separator } from '@/components/ui/separator'
import { BASEURL } from '@/lib/api'
import { TncContent } from '@/modules/KebijakanPage/TncContent'

export const metadata: Metadata = {
  title: 'Ketentuan Layanan | AnoHame',
  alternates: {
    canonical: `${BASEURL}/ketentuan-layanan`,
  },
  description:
    'Ketentuan penggunaan layanan di aplikasi AnoHame. Kumpulkan berbagai pertanyaan dari siapa saja secara anonim',
  openGraph: {
    description:
      'Ketentuan penggunaan layanan di aplikasi AnoHame. Kumpulkan berbagai pertanyaan dari siapa saja secara anonim',
    title: 'Ketentuan Layanan | AnoHame',
  },
  twitter: {
    title: 'Ketentuan Layanan | AnoHame',
    description:
      'Ketentuan penggunaan layanan di aplikasi AnoHame. Kumpulkan berbagai pertanyaan dari siapa saja secara anonim',
  },
}

export default async function PrivasiPage() {
  return (
    <main className="w-full container py-8">
      <div className="w-full space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Ketentuan Layanan</h2>
        <p className="text-muted-foreground">
          Ketentuan penggunaan layanan di aplikasi AnoHame
        </p>
      </div>

      <Separator className="my-6" />
      <TncContent />
    </main>
  )
}

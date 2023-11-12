'use client'

import { useEffect } from 'react'

import { trackEvent } from '@/lib/firebase'

export const PrivacyContent = () => {
  useEffect(() => {
    trackEvent('view privacy page')
  }, [])

  return (
    <div className="w-full flex flex-col gap-4">
      <p className="mb-4">
        Kami di <b>AnoHame</b> menyadari bahwa Anda mengharapkan privasi dan
        keamanan dalam hal informasi yang mengidentifikasi Anda secara pribadi
        dan memungkinkan Anda untuk dihubungi secara individu (Informasi
        Pribadi). Kami mengadopsi kebijakan privasi online berikut karena kami
        memahami kebutuhan untuk melindungi informasi yang mungkin Anda berikan
        kepada kami di situs web kami.
      </p>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">
          🔹 Mengapa <b>AnoHame</b> meminta informasi tentang Anda
        </h2>
        <p>
          <b>AnoHame</b> mengumpulkan dan menyimpan Informasi Pribadi tentang
          Anda hanya ketika Anda telah berkomunikasi dengan kami melalui email
          (kami akan mengumpulkan alamat email Anda), ketika Anda mendaftar
          untuk menggunakan layanan <b>AnoHame</b> (kami akan menanyakan nama
          dan alamat email Anda), dan saat Anda mendaftar untuk layanan berbayar
          (kami akan meminta informasi umum seperti nama, alamat email, alamat
          penagihan, dan informasi kartu kredit Anda). Kami menggunakan
          informasi tersebut untuk bertransaksi bisnis dengan Anda dan
          memberikan layanan yang diminta dari waktu ke waktu, serta peningkatan
          layanan, kontak, dan penelitian.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">
          🔹 Bagaimana <b>AnoHame</b> melindungi informasi Anda
        </h2>
        <p>
          Informasi yang kami terima dari Anda dilindungi dari akses tidak sah
          setelah kami menerimanya. Kami membatasi akses ke informasi Anda hanya
          untuk karyawan yang memiliki alasan bisnis untuk mengaksesnya. Saat
          mengumpulkan informasi keuangan dari Anda, kami menggunakan perangkat
          lunak lapisan soket aman (SSL). Terlepas dari upaya kami yang terus
          menerus dan berkembang untuk melindungi informasi pribadi Anda, kami
          tidak dapat menjamin keamanan Informasi Pribadi Anda. Anda mengakui
          dan setuju bahwa kami tidak memberikan jaminan seperti itu.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">🔹 Penyimpanan data</h2>
        <p>
          Kami tidak menggunakan vendor pihak ketiga dan mitra hosting untuk
          menyediakan perangkat keras, perangkat lunak, jaringan, penyimpanan,
          dan teknologi terkait yang diperlukan untuk menjalankan{' '}
          <b>AnoHame</b>. Kami memiliki kode, database, dan semua hak atas
          aplikasi
          <b>AnoHame</b>, Anda memegang semua hak atas data Anda.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">🔹 Pengunaan Cookies</h2>
        <p>
          Kami menggunakan cookie. Cookies adalah bagian kecil dari informasi
          yang disimpan oleh browser Anda di hard drive komputer Anda. Kami
          menggunakan cookie sehingga situs web kami dapat mengingat Anda dan
          menyediakan konten yang paling mungkin Anda minta. Kami juga
          menggunakan cookie untuk mengumpulkan informasi statistik tentang
          situs web kami, seperti waktu yang dihabiskan pengguna di suatu situs
          dan halaman yang paling sering mereka kunjungi. Statistik tersebut
          tidak mengandung Informasi Pribadi. Kami juga akan menggunakan cookie
          untuk tujuan periklanan dan pemasaran ulang.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">🔹 Tautan ke situs web lain</h2>
        <p>
          Situs web kami mungkin berisi tautan ke dan dari situs web lain.
          Beberapa tautan mungkin dalam bentuk iklan tampilan. Kami tidak dapat
          menjamin bahwa situs web selain situs web kami akan menghormati dan
          melindungi Informasi Pribadi Anda seperti yang kami lakukan. Untuk
          perlindungan Anda sendiri, Anda harus mengunjungi dan membaca
          pernyataan / kebijakan privasi situs web lain saat Anda
          mengunjunginya. Kami tidak bertanggung jawab atas konten situs web
          selain situs web kami.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">🔹 Persetujuan Anda</h2>
        <p>
          Ketika Anda memberikan Informasi Pribadi kepada kami, Anda menyetujui
          pengumpulan dan penggunaan informasi ini oleh <b>AnoHame</b>.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">🔹 Penyingkapan</h2>
        <p>
          Kami tidak akan menjual atau mendistribusikan Informasi Pribadi Anda
          kecuali untuk menyediakan produk atau layanan yang Anda minta, jika
          kami memiliki izin, atau diperlukan untuk berbagi informasi untuk
          menyelidiki, mencegah, atau mengambil tindakan terkait aktivitas
          ilegal, dugaan penipuan, situasi yang melibatkan potensi ancaman
          terhadap keamanan fisik siapa pun, pelanggaran Persyaratan Layanan,
          atau sebagaimana diwajibkan oleh hukum.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">🔹 Transfer Bisnis</h2>
        <p>
          Jika <b>AnoHame</b>, atau secara substansial semua asetnya
          diakuisisi, atau dalam hal yang tidak mungkin terjadi ketika kami
          keluar dari bisnis atau dinyatakan pailit, Informasi Pribadi akan
          menjadi salah satu aset yang dialihkan atau diakuisisi oleh pihak
          ketiga. Anda mengakui bahwa transfer tersebut dapat terjadi, dan bahwa
          setiap pihak yang mengakuisisi <b>AnoHame</b>
          dapat terus menggunakan Informasi Pribadi sebagaimana diatur dalam
          kebijakan ini.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-xl font-bold">🔹 Perubahan</h2>
        <p>
          Kami mungkin memperbarui kebijakan ini secara berkala. Kami akan
          memberi tahu Anda tentang perubahan signifikan dalam cara kami
          memperlakukan informasi pribadi dengan mengirimkan pemberitahuan ke
          alamat email utama yang ditentukan di akun pemegang akun utama{' '}
          <b>AnoHame</b>
          Anda atau dengan menempatkan pemberitahuan yang mencolok di situs
          kami.
        </p>
      </div>

      <p className="mb-4">
        Pertanyaan tentang kebijakan privasi kami dapat ditujukan ke
        tanyaajaapp@gmail.com
      </p>

      <p className="mb-4">
        <small>
          <i>Terakhir diperbarui pada 15 September 2023</i>
        </small>
      </p>
    </div>
  )
}

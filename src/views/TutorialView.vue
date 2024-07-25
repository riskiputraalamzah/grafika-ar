<script setup>
import { inject } from "vue";
const { dispatchAr } = inject("ar");
</script>
<template>
  <div class="top container">
    <div class="step">
      <h2>Langkah 1</h2>
      <img
        @click="dispatchAr('https://mywebar.com/p/Project_4_kmxzwbx2sy')"
        src="/img/panci.png"
        alt="Gambar Peralatan 1"
      />
      <div>
        <p>
          Panci adalah alat memasak yang terbuat dari berbagai bahan seperti
          stainless steel, aluminium, atau teflon, dan memiliki berbagai ukuran
          dan bentuk. Untuk merebus mie, panci yang ideal adalah yang memiliki
          ukuran cukup besar untuk menampung air yang cukup agar mie dapat
          terendam sepenuhnya dan matang merata.
        </p>

        <p><strong>Tips Penggunaan</strong></p>
        <ul>
          <li>
            <strong>Pengisian Air</strong>: Isi panci dengan air hingga sekitar
            2/3 penuh untuk mencegah air meluap saat mendidih.
          </li>
          <li>
            <strong>Pemanasan Awal</strong>: Panaskan air hingga mendidih
            sebelum memasukkan mie untuk memastikan mie matang secara merata dan
            tidak lengket satu sama lain.
          </li>
          <li>
            <strong>Pengadukan</strong>: Sesekali aduk mie selama proses memasak
            untuk mencegah mie saling menempel dan memastikan semua mie matang
            merata.
          </li>
          <li>
            <strong>Pembilasan</strong>: Setelah mie matang, tiriskan dan bilas
            dengan air dingin jika perlu, untuk menghentikan proses memasak dan
            mencegah mie terlalu lembek.
          </li>
        </ul>
      </div>
    </div>
    <div class="step">
      <h2>Langkah 2</h2>
      <img
        @click="dispatchAr('https://mywebar.com/p/Project_3_fb23mbj776')"
        src="/img/kompor.png"
        alt="Gambar Peralatan 2"
      />
      <div>
        <p>
          Kompor gas adalah alat memasak yang menggunakan gas (biasanya LPG)
          sebagai sumber bahan bakar. Kompor ini terdiri dari satu atau lebih
          tungku yang dapat dinyalakan dengan pemantik. Keuntungan kompor gas
          meliputi kontrol suhu yang cepat dan mudah serta biaya operasional
          yang relatif rendah.
        </p>

        <p><strong>Penjelasan Penggunaan</strong></p>
        <ol>
          <li>
            <strong>Isi panci dengan air</strong>: Isi panci dengan jumlah air
            yang cukup untuk merebus mie. Biasanya, satu liter air cukup untuk
            setiap 100 gram mie.
          </li>
          <li>
            <strong>Panaskan air di atas kompor</strong>: Letakkan panci berisi
            air di atas kompor gas dan nyalakan kompor. Biarkan air mendidih.
          </li>
          <li>
            <strong>Masukkan mie ke dalam panci</strong>: Setelah air mendidih,
            masukkan mie ke dalam panci dan aduk dengan penjepit atau sendok
            kayu agar tidak saling menempel.
          </li>
          <li>
            <strong>Tutup panci</strong>: Jika diperlukan, tutup panci untuk
            menjaga panas dan mempercepat proses perebusan.
          </li>
          <li>
            <strong>Rebus mie sesuai instruksi</strong>: Rebus mie sesuai dengan
            waktu yang tertera pada kemasan, biasanya sekitar 3-5 menit, sambil
            sesekali diaduk.
          </li>
          <li>
            <strong>Angkat mie</strong>: Setelah matang, angkat mie menggunakan
            penjepit atau saringan, tiriskan airnya, dan mie siap untuk
            dihidangkan.
          </li>
        </ol>
      </div>
    </div>
    <div class="step">
      <h2>Langkah 3</h2>
      <img
        @click="dispatchAr('https://mywebar.com/p/Project_1_vxiw9ba1vo')"
        src="/img/mie-jadi.png"
        alt="Gambar Peralatan 3"
      />
      <div>
        <p>
          Mie siap untuk disajikan. Menggunakan panci dan kompor, proses
          pembuatan mie dimulai dari memanaskan air hingga mendidih, memasak mie
          hingga matang, dan meniriskannya sebelum disajikan dengan bumbu
          pilihan
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top {
  padding: calc(2vmin + 100px) 0;
}

.step {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

.step h2 {
  color: #555;
  font-size: 1.5em;
  margin-bottom: 10px;
  font-weight: 500;
}

.step img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 15px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.step p,
.step li {
  font-size: 1.1em;
  line-height: 1.5;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
}

.step li {
  text-align: left;
  margin-left: 10px;
}
@media (min-width: 768px) {
  .step {
    flex-direction: row;
    align-items: flex-start;
  }

  .step img {
    max-width: 50%;
    margin-right: 20px;
  }

  .step p {
    text-align: left;
  }
}
</style>

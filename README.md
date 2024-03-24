## SETUP PROJECT

Aplikasi ini stabil di Node.js versi ~v21 dan menggunakan TypeScript versi ^v5. Pastikan sistem Anda tools sebagai berikut sebelum menjalankan aplikasi:

- Node.js ~v21
- TypeScript ^v5
- MySql
- NPM (`recomend`)

## INSTALASI

Untuk menginstal aplikasi, ikuti langkah-langkah berikut:

1. **Clone repositori ini ke dalam direktori lokal.**

2. **Install dependensi menggunakan npm:**

```bash{copy}
npm install
```

3. **Setup database url koneksi pada folder**

```bash{copy}
apps/api/.env
format ada pada file apps/api/.env.example
```

4. **Terapkan Schema ke Database, pastikan pada root folder kemudian jalankan:**

```bash{copy}
npm run push
```

5. **Melakukan seeding ke Database**

```bash{copy}
npm run seed
```

6. **Aplikasi Siap Dijalankan**

## RUNING APLIKASI

Terdapat 2 cara menjalankan aplikasi yaitu Development dan Production, berikut keterangan lebih detail:

### Development

1. **Jalankan aplikasi dengan menggunakan code berikut pada root folder:**

```bash{copy}
npm run dev
```

2. **Pada mode ini, front end dan back end berjalan pada port yang berbeda**

   > frontend :5173 (default)

   > backend :3001

### Production

1. **Jalankan aplikasi dengan menggunakan code berikut pada root folder:**

```bash{copy}
npm run build
npm run start
```

2. **Pada mode ini aplikasi bekerja dalam monorepo, applikasi bisa diakses pada port :3001**

```bash{copy}
    http://localhost:3001/#/login untuk login
```

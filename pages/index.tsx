import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      <Head>
        <title>Home | Gestión de Proyectos</title>
      </Head>

      <p>Página Index</p>
      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin de usuarios</a>
      </Link>
      <div>
        <i className='fas fa-home'></i>
      </div>
    </div>
  )
}

export default Home

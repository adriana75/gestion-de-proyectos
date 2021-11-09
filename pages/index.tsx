import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      Hola mundo

      <p>Página Index</p>
      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin de usuarios</a>
      </Link>
    </div>
  )
}

export default Home

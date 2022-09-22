import Link from 'next/link'
import Nav from './Nav'



export default function Header() {
  return (
  <>
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h2>CrocoDeal</h2>
        </Link>
      </div>
	  <Nav />
    </header>
  </>
  )
}

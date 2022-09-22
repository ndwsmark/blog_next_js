import Link from 'next/link'

function Footer() {    
	return (  
		
		<footer>
			<div className='container'>
				<Link href='/' passHref>
				<h2>CrocoDeal</h2>
				</Link>
			</div>
		</footer> 
	)
}
export default Footer


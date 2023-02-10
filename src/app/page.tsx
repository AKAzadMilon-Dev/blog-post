import Link from 'next/link'
import styles from '../styles/home.module.css'

export default async function Home(){
  return <div className={styles.home}>
    <div>
      <div><h1>Hi, My name is AK Azad Milon!</h1></div>
    <div>
      <Link href="/blog">Check My Blog</Link>
    </div>
    <div>
      <Link href="/contact">Contact me</Link>
    </div>
    </div>
    
  </div>
}
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import styles from '../components/layouts/MainLayout.module.css'

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className="title">
        Ir al  <Link href="/">Home!</Link>
      </h1>

      <p className="description">
        Get started by editing
        <code className="code">pages/contact.js</code>
      </p>

    </MainLayout>
  )
}
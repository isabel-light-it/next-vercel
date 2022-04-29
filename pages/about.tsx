import Link from 'next/link'
import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from '../components/layouts/MainLayout';
import styles from '../components/layouts/MainLayout.module.css'

export default function AboutPage() {
  return (
    <>
      <h1 className={styles.title}>
        Ir al  <Link href="/">Home!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout( page:JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
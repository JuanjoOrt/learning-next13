import styles from './page.module.css'
import LoginForm from '@/app/()login/LoginForm'
import { AuthProvider } from '@/components/AuthProvider'


export default function Home() {

  return (
    <AuthProvider>
      <main className={styles.main}>
        <LoginForm />
      </main>
    </AuthProvider>
  )
}

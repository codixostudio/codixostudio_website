import Header from './Header'
import Footer from './Footer'

export default function Layout({children}){
  return (
    <div>
      <Header />
      <main className="container py-12">{children}</main>
      <Footer />
    </div>
  )
}

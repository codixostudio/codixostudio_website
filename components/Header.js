import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Codixo Studio" width={40} height={40} className="rounded" />
          <span className="font-semibold">Codixo Studio</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="header-link">Home</Link>
          <Link href="/about" className="header-link">About</Link>
          <Link href="/services" className="header-link">Services</Link>
          <Link href="/projects" className="header-link">Projects</Link>
          <Link href="/contact" className="header-link">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

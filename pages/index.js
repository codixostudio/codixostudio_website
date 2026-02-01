import Layout from '../components/Layout'

export default function Home(){
  return (
    <Layout>
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">We build delightful digital products</h1>
          <p className="mt-4 text-gray-600">Codixo Studio designs and develops accessible, high-performance web apps and brand experiences. We focus on design, engineering, and measurable outcomes.</p>
          <div className="mt-6 flex gap-3">
            <a href="/projects" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">View projects</a>
            <a href="/contact" className="inline-flex items-center px-4 py-2 border rounded-md text-gray-700">Contact us</a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded shadow">UI & Product Design</div>
            <div className="bg-white p-3 rounded shadow">Web & Mobile Development</div>
            <div className="bg-white p-3 rounded shadow">Branding & Identity</div>
            <div className="bg-white p-3 rounded shadow">Consulting & Strategy</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/logo.png" alt="Codixo Studio" width={220} height={220} />
        </div>
      </section>
    </Layout>
  )
}

import Layout from '../components/Layout'

export default function Services(){
  const services = ['Product Design','Frontend & Backend','Branding','Strategy & Workshops']
  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Services</h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(s => <li key={s} className="bg-white p-4 rounded shadow">{s}</li>)}
      </ul>
    </Layout>
  )
}

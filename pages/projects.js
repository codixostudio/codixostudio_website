import Layout from '../components/Layout'

export default function Projects(){
  const projects = [
    {title:'Project One',desc:'A modern web app'},
    {title:'Project Two',desc:'Brand + design system'},
  ]
  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

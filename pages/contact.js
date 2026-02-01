import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contact(){
  const [status,setStatus] = useState('')
  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(Object.fromEntries(form)) })
    if(res.ok) setStatus('Message sent!')
    else setStatus('Error sending message')
  }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-4 max-w-xl">
        <label className="block">Name<input name="name" required className="mt-1 block w-full p-2 border rounded" /></label>
        <label className="block mt-3">Email<input name="email" type="email" required className="mt-1 block w-full p-2 border rounded" /></label>
        <label className="block mt-3">Message<textarea name="message" rows="5" required className="mt-1 block w-full p-2 border rounded" /></label>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Send message</button>
        </div>
        {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
      </form>
    </Layout>
  )
}

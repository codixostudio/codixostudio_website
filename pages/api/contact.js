export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end()
  try{
    // In production: validate inputs and send via email provider (SendGrid, Mailgun, etc.)
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    console.log('Contact form submitted:', body)
    return res.status(200).json({ok:true})
  }catch(e){
    console.error(e)
    return res.status(500).json({error:'server error'})
  }
}

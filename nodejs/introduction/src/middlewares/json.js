export async function json(req, res) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.bosy = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }
  res.setHeader('Content-type', 'application/json')
}
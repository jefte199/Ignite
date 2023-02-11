await json(req, res)
import { routes } from './routes.js'

const route = routes.find(route => {
  return route.method === method && route.path.test(url)
})

if (route) {
  const routeParams = req.url.match(route.path)

  console.log(routeParams);

  return route.handle(req, res)
}
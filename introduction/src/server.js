await json(req, res)

const route = routes.find(route => {
  return route.method === method && route.path.test(url)
})

if (route) {
  const routeParams = req.url.match(route.path)

  console.log(routeParams);

  return route.handler(req, res)
}
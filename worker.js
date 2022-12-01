export const api = {
  icon: '🚀',
  name: 'experiment.do',
  description: 'Experimentation & A/B Testing API',
  url: 'https://experiment.do/api',
  type: 'https://apis.do/startup',
  endpoints: {
    listCategories: 'https://experiment.do/api',
    getCategory: 'https://experiment.do/:type',
  },
  site: 'https://experiment.do',
  login: 'https://experiment.do/login',
  signup: 'https://experiment.do/signup',
  subscribe: 'https://experiment.do/subscribe',
  repo: 'https://github.com/drivly/experiment.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://experiment.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})

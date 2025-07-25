import { createServerFileRoute } from '@tanstack/solid-start/server'
import { createMiddleware, json } from '@tanstack/solid-start'
import type { User } from '~/utils/users'

const userLoggerMiddleware = createMiddleware({ type: 'request' }).server(
  async ({ next, request }) => {
    console.info('In: /users')
    const result = await next()
    result.response.headers.set('x-users', 'true')
    console.info('Out: /users')
    return result
  },
)

const testParentMiddleware = createMiddleware({ type: 'request' }).server(
  async ({ next, request }) => {
    console.info('In: testParentMiddleware')
    const result = await next()
    result.response.headers.set('x-test-parent', 'true')
    console.info('Out: testParentMiddleware')
    return result
  },
)

const testMiddleware = createMiddleware({ type: 'request' })
  .middleware([testParentMiddleware])
  .server(async ({ next, request }) => {
    console.info('In: testMiddleware')
    const result = await next()
    result.response.headers.set('x-test', 'true')

    // if (Math.random() > 0.5) {
    //   throw new Response(null, {
    //     status: 302,
    //     headers: { Location: 'https://www.google.com' },
    //   })
    // }

    console.info('Out: testMiddleware')
    return result
  })

let queryURL = 'https://jsonplaceholder.typicode.com'

if (import.meta.env.VITE_NODE_ENV === 'test') {
  queryURL = `http://localhost:${import.meta.env.VITE_EXTERNAL_PORT}`
}

export const ServerRoute = createServerFileRoute('/api/users')
  .middleware([testMiddleware, userLoggerMiddleware, testParentMiddleware])
  .methods({
    GET: async ({ request }) => {
      console.info('Fetching users... @', request.url)
      const res = await fetch(`${queryURL}/users`)
      if (!res.ok) {
        throw new Error('Failed to fetch users')
      }

      const data = (await res.json()) as Array<User>

      const list = data.slice(0, 10)

      return json(list.map((u) => ({ id: u.id, name: u.name, email: u.email })))
    },
  })

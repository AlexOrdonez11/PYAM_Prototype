import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import chatHandler from './api/chat.js'

function localChatApi() {
  return {
    name: 'local-chat-api',
    configureServer(server) {
      server.middlewares.use('/api/chat', (request, response, next) => {
        if (request.method !== 'POST') {
          return chatHandler(request, response)
        }

        let rawBody = ''
        request.on('data', (chunk) => {
          rawBody += chunk
        })
        request.on('end', () => {
          try {
            request.body = JSON.parse(rawBody || '{}')
            void chatHandler(request, response)
          } catch {
            response.statusCode = 400
            response.setHeader('Content-Type', 'application/json; charset=utf-8')
            response.end(JSON.stringify({ error: 'Invalid JSON request.' }))
          }
        })

        return undefined
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), localChatApi()],
})

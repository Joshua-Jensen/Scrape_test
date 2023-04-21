import { AuthController } from './Controllers/AuthController.js';
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
}



import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest'

const interceptor = new ClientRequestInterceptor()

// Enable the interception of requests.
interceptor.apply()

// Listen to any "http.ClientRequest" being dispatched,
// and log its method and full URL.
interceptor.on('request', (request, requestId) => {
  console.log(request.method, request.url)
})

// Listen to any responses sent to "http.ClientRequest".
// Note that this listener is read-only and cannot affect responses.
interceptor.on('response', (response, request) => {
  console.log('response to %s %s was:', request.method, request.url, response)
})
// @ts-ignore
window.app = new App()

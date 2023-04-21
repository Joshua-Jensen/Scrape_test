import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import { worker } from './mocks/browser'

worker.start()


// create a new XHR object
var xhr = new XMLHttpRequest()

// open a new GET request to the URL of the search request
xhr.open('GET', 'https://www.albertsons.com/shop/search-results.html?', true)

// set a callback function to handle the XHR response
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // get the value of the "request-id" header from the response
      var requestId = xhr.getResponseHeader('request-id')
      console.log('request-id:', requestId)
    } else {
      console.log('Error:', xhr.status)
    }
  }
}

// send the XHR request
xhr.send()


const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router)
  .mount('#app')

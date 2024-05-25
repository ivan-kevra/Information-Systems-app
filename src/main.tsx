import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app/app'
import '@/styles/index.scss'
import { Provider } from 'react-redux'

import "@fontsource/inter/500.css"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from './app/store'



createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="662563569216-fdvgo7rc55gfg194mu47kqnqhtg9nt42.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </Provider>


  </StrictMode>
)
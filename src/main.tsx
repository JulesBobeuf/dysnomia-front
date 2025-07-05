import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './contexts/AuthContext'

import './i18n.ts'
import './index.css'
import { PageProvider } from './contexts/NumberPage';
const root:HTMLElement | null = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(
    <AuthProvider>
        <StrictMode>
        <BrowserRouter>
          <PageProvider>
            <App />
          </PageProvider>
        </BrowserRouter>
      </StrictMode>
    </AuthProvider>,
  )
}

else {
  console.log("Error : root is null");
}

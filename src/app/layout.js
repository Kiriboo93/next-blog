import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { ThemeContextProvider } from '../context/ThemeContext';
import ThemeProvider from '../providers/ThemeProvider';
import AuthProvider from '../providers/AuthProvider';

// Internationalization
const inter = Inter({ subsets: ['latin'] })

// Page metadata
export const metadata = {
  title: 'Roberto Dev Diary',
  description: 'Dev diary of Roberto Luquero about game development',
}

/**
 * Layout for all the pages.
 * @param {*} param0 children to draw.
 * @returns Layout for the pages.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

import Footer from '@components/Footer'
import Header from '@components/Header'

const Layout = ({ children }) => {
  return (
    <div className="app flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-1 px-16 py-8">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

// Added Layout Default Proptypes
Layout.propTypes = {
  children: '',
}
export default Layout

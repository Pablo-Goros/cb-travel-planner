import { About } from './components/About'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PrivacyDialog, TermsDialog } from './components/LegalDialog'
import { Services } from './components/Services'
import { useLegalDialogs } from './hooks/useLegalDialogs'
import { useSectionReveal } from './hooks/useSectionReveal'

function App() {
  const { activeDialog, openDialog, closeDialog } = useLegalDialogs()
  useSectionReveal()

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <ContactSection />
      </main>
      <Footer onOpenLegal={openDialog} />

      <PrivacyDialog
        open={activeDialog === 'privacy'}
        onRequestClose={closeDialog}
      />
      <TermsDialog
        open={activeDialog === 'terms'}
        onRequestClose={closeDialog}
      />
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const WHATSAPP = 'https://wa.me/5518999999999?text=Olá%2C%20Renata!%20Quero%20saber%20mais%20sobre%20as%20soluções%20da%20RM%20Consultoria.'

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Consórcio', to: '/consorcio-imobiliario' },
  { label: 'Financiamento', to: '/financiamento-imobiliario' },
  { label: 'Construção', to: '/financiamento-construcao' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(13,69,131,0.97)' : '#0d4583',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <RMLogo />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: location.pathname === link.to ? '#e8960a' : 'rgba(255,255,255,0.85)',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 500,
                  fontSize: 15,
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: 6,
                  transition: 'color 0.2s, background 0.2s',
                  backgroundColor: location.pathname === link.to ? 'rgba(232,150,10,0.12)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.to) {
                    (e.target as HTMLElement).style.color = '#ffffff'
                    ;(e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.08)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.to) {
                    (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)'
                    ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 8,
                backgroundColor: '#e8960a',
                color: '#ffffff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
                padding: '8px 20px',
                borderRadius: 6,
                transition: 'background-color 0.2s, transform 0.15s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.backgroundColor = '#d4870a'
                ;(e.target as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.backgroundColor = '#e8960a'
                ;(e.target as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Falar com a RM
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            aria-label="Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'none',
            }}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: '#0a3870',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '16px 24px 24px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: 'block',
                color: location.pathname === link.to ? '#e8960a' : 'rgba(255,255,255,0.85)',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                fontSize: 17,
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              marginTop: 16,
              backgroundColor: '#e8960a',
              color: '#ffffff',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: 16,
              textDecoration: 'none',
              padding: '12px 20px',
              borderRadius: 6,
              textAlign: 'center',
            }}
          >
            Falar com a RM
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

function RMLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 8,
          backgroundColor: 'rgba(255,255,255,0.15)',
          border: '1.5px solid rgba(255,255,255,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Fraunces, serif',
            fontWeight: 700,
            fontSize: 18,
            color: '#ffffff',
            letterSpacing: '-0.5px',
          }}
        >
          RM
        </span>
      </div>
      <div>
        <div
          style={{
            fontFamily: 'Fraunces, serif',
            fontWeight: 700,
            fontSize: 16,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.3px',
          }}
        >
          RM Consultoria
        </div>
        <div
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 400,
            fontSize: 10.5,
            color: 'rgba(255,255,255,0.65)',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
          }}
        >
          Imobiliária
        </div>
      </div>
    </div>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="19" y1="5" x2="5" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="17" x2="20" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}

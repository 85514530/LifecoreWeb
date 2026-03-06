import { useState } from 'react'
import { Menu, X } from 'lucide-react'


import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Product', href: '/product' },
        { name: 'About Us', href: '/about' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Lifecore Logo" className="h-8 w-auto" />
                        <span className="text-xl font-bold tracking-tight text-foreground">Lifecore</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

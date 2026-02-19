
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto py-8 px-4 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src={logo} alt="CardLife Logo" className="h-8 w-auto" />
                            <span className="text-xl font-bold tracking-tight text-foreground">CardLife</span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Most reliable gift card trading platform. Safe, fast, and secure.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Product</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/product" className="hover:text-primary">Features</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} CardLife. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

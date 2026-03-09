
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto py-8 px-4 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src={logo} alt="Lifecore Logo" className="h-8 w-auto" />
                            <span className="text-xl font-bold tracking-tight text-foreground">Lifecore</span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Operated by Hong Kong Cardlife Technology Co., Limited. A leading provider of innovative enterprise software solutions.
                        </p>
                        <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                            <p><strong>Registered Address:</strong> UNIT 617 6/F KING CTR 5-9 KA HING RD, KWAI CHUNG, NT, HK</p>
                            <p>Tel: +852 95341938</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Product</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/product" className="hover:text-primary transition-colors">Features</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
                    <span>&copy; 2026 Hong Kong Cardlife Technology Co., Limited. All Rights Reserved.</span>
                    <span>BRC: 79841839</span>
                </div>
            </div>
        </footer>
    )
}

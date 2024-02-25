import { Link } from "@nextui-org/react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Footer() {
    return (
        <div className="w-full flex bg-gray-700 px-12 gap-48 text-white py-16">
            <div className="flex flex-col space-y-6">
                <div className="font-semibold pb-3 text-gray-200">Company</div>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} href="/">Home</Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} href="/solutions">Solutions</Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} href="/about">About</Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} href="/contact">Contact</Link>
            </div>
            <div className="flex flex-col space-y-6">
                <div className="font-semibold pb-3 text-gray-200">Solutions</div>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} href="/">Talent Acquisition</Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} href="/solutions">Consulting & Advisory</Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} href="/about">Training & Development</Link>
            </div>
            <div className="flex flex-col space-y-6">
                <div className="font-semibold pb-3 text-gray-200">Find Us</div>
                <p className="whitespace-pre">{'Miami Beach, FL\n33139'}</p>
            </div>
            <div className="flex flex-col space-y-6">
                <div className="font-semibold pb-3 text-gray-200">Follow Us</div>
                <LinkedInIcon fontSize="large" />
            </div>
        </div>
    )
}
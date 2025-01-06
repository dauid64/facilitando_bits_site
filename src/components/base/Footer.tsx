import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="shadow bg-slate-900">
            <div className="w-full mx-auto max-w-screen-xl h-16 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Carlos David.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="https://www.linkedin.com/in/carlos-david-castro-de-souza-neto-795a83210" className="hover:underline me-4 md:me-6 flex"><CiLinkedin size={20} />LinkedIn</Link>
                    </li>
                    <li>
                        <Link href="https://lattes.cnpq.br/0137678114955696" className="hover:underline me-4 md:me-6 flex"><FaRegAddressBook size={18} />Lattes</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
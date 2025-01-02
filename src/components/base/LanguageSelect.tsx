"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import {Link} from '@/i18n/routing';

interface LanguageSelectProps {
    className?: string;
}

export default function LanguageSelect({ className }: Readonly<LanguageSelectProps>) {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('SelectLanguage');

    return (
        <div className={`${className ?? ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <IoLanguage size={24}/>
            </button>
            <div className="relative">
                {isOpen && (
                    <div className={`absolute z-10 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 flex flex-col gap-1 left-1/2 transform -translate-x-1/2 `}>
                        <ul className="py-2 text-sm text-gray-200 dark:text-gray-200">
                            <li>
                                <Link href="/" locale="pt" className="block px-4 py-2 hover:bg-gray-600">{t('pt')}</Link>
                            </li>
                            <li>
                                <Link href="/" locale="en" className="block px-4 py-2 hover:bg-gray-600">{t('en')}</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
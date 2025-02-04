import { useLocale, useTranslations } from "next-intl";
import Link from "../common/Link";
import styles from "./Header.module.css";
import LanguageSelect from "./LanguageSelect";

interface HeaderItemsProps {
    open: boolean;
}

export default function HeaderItems({
    open
}: Readonly<HeaderItemsProps>) {
    const t = useTranslations('Header');
    const locale = useLocale();

    return (
        <>
            <div className={`flex gap-5 items-center ${styles.btnsLinks} ${open ? styles.open : ""}  ${open ? "mb-3 flex-col gap-1" : ""}`}>
                <Link href={"/"} className="text-md" content={t("posts")}/>
                <Link href={`/${locale}/sobre`} className="text-md" content={t("about")}/>
            </div>
            <div className={`flex flex-col items-center`}>
                <LanguageSelect className={`${styles.selectLanguage} ${open ? styles.open : ""}`}/>
            </div>
        </>

    );
}
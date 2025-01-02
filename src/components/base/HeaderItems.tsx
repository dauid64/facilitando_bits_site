import Link from "../common/Link";
import styles from "./Header.module.css";
import LanguageSelect from "./LanguageSelect";

interface HeaderItemsProps {
    open: boolean;
}

export default function HeaderItems({
    open
}: Readonly<HeaderItemsProps>) {
  return (
    <>
        <div className={`flex gap-5 items-center ${styles.btnsLinks} ${open ? styles.open : ""}  ${open ? "mb-3 flex-col gap-1" : ""}`}>
            <Link href={"/"} className="text-md" content="Posts"/>
            <Link href={"/"} className="text-md" content="Sobre"/>
        </div>
        <div className={`flex flex-col items-center`}>
            <LanguageSelect className={`${styles.selectLanguage} ${open ? styles.open : ""}`}/>
        </div>
    </>

  );
}
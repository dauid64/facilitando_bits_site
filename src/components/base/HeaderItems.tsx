import Link from "../common/Link";
import Select from "../common/Select";
import styles from "./Header.module.css";

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
            <Select className={`${styles.selectLanguage} ${open ? styles.open : ""}`}>
                <option value="US">Português</option>
                <option value="CA">Inglês</option>
            </Select>
        </div>
    </>

  );
}
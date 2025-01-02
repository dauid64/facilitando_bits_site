"use client";

import { FaBars } from "react-icons/fa6";
import styles from "./Header.module.css";
import { useState } from "react";
import HeaderItems from "./HeaderItems";

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    return (
        <header className="bg-slate-900 text-white p-4 w-full">
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-center bg-orange-500 rounded-full justify-center text-center" style={{ width: 40, height: 40 }}></div>
                <HeaderItems open={false}/>
                <button className={styles.btnMobile} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <FaBars/>
                </button>
            </div>

            {isOpenMenu && (
                <div className="flex flex-col items-center">
                    <HeaderItems open={true}/>
                </div>
            )}
        </header>
    )
}
"use client";

import { Post } from "@/models/post";
import { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { useLocale, useTranslations } from "next-intl";

export default function ListPost() {
    const locale = useLocale();
    const [posts, setPosts] = useState<Post[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null);
    const [prevUrl, setPrevUrl] = useState<string | null>(null);
    const [total, setTotal] = useState<number>(0);

    const t = useTranslations('listPost');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsFetch = await fetch(
                  `${process.env.NEXT_PUBLIC_SERVER_URL}/article?language=${locale}`
                );
                if (postsFetch.ok) {
                  const data = await postsFetch.json();
                  
                  setPosts(data.results as Post[]);
                  setNextUrl(data.next as string);
                  setPrevUrl(data.previous as string);
                  setTotal(data.count as number);
                } else {
                  console.error(postsFetch);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [locale]);

    async function nextPage() {
        console.log(nextUrl)
        try {
            const postsFetch = await fetch(nextUrl as string);
            if (postsFetch.ok) {
                const data = await postsFetch.json();
                
                setPosts(data.results as Post[]);
                setNextUrl(data.next as string);
                setPrevUrl(data.previous as string);
            } else {
                console.error(postsFetch);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function prevPage() {
        try {
            const postsFetch = await fetch(prevUrl as string);
            if (postsFetch.ok) {
                const data = await postsFetch.json();
                
                setPosts(data.results as Post[]);
                setNextUrl(data.next as string);
                setPrevUrl(data.previous as string);
            } else {
                console.error(postsFetch);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="m-16">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center">
            {posts.map((post) => {
                return <CardPost post={post} key={post.id} />;
            })}
            {posts.length === 0 && (
                <div className="text-center">
                <h1 className="text-2xl font-bold">{t('empty')}</h1>
                </div>
            )}
            </div>
            {posts.length != 0 && (
                <div className="flex flex-col items-center mt-5">

                <span className="text-sm text-gray-700 dark:text-gray-400">
                    {t('total')} <span className="font-semibold text-gray-900 dark:text-white">{total}</span>
                </span>
        
                <div className="flex items-center justify-center">
                <button disabled={!prevUrl} onClick={prevPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {t("prev")}
                </button>

                <button disabled={!nextUrl} onClick={nextPage} className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {t("next")}
                </button>        
                </div>
            </div>
            )}
        </div>
    );
}
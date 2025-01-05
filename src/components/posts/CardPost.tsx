import { Post } from "@/models/post";
import { useLocale, useTranslations } from "next-intl";
import Image from 'next/image'
import Link from 'next/link'

interface CardPostProps {
    post: Post;
}

export default function CardPost(props: Readonly<CardPostProps>) {
    const t = useTranslations("Posts");
    const locale = useLocale();

    const post = props.post;

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between" style={{height: "29rem"}}>
            <Image src={"/example.jpg"} alt="imagem do post" className="rounded-t-lg" width={382} height={255}/>
            <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                </div>
                <div>
                <Link href={`${locale}/artigos/${post.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {t("readMore")}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
                </div>
            </div>
        </div>
    )
}
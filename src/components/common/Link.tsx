import NextLink from "next/link";

interface LinkProps {
    href: string;
    content: string;
    className?: string;
}

export default function Link({
    href,
    content,
    className
}: Readonly<LinkProps>) {
    return (
        <NextLink href={href} className={`hover:text-slate-300 ${className ?? ""}`}>{content}</NextLink>
    )
}
import NextLink from "next/link";

interface LinkProps {
    href: string;
    content: string;
}

export default function Link({
    href,
    content
}: Readonly<LinkProps>) {
    return (
        <NextLink href={href}>{content}</NextLink>
    )
}
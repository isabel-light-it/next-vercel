import React, { PropsWithChildren } from 'react';
import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'


const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

type Props = {
    text: string;
    href: string;
};

const ActiveLink: React.FC<PropsWithChildren<Props>> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>  {text} </a>
        </Link >
    )
}

export default ActiveLink
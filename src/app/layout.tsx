import React, { type ReactNode } from 'react';
import Header from '@/common/frame/Header';
import './globals.css';

type LayoutProps = {
    children: ReactNode;
};

export const metadata = {
    title: 'Ficree',
    description: 'A simple Next.js application with a custom layout',
    keywords: 'Next.js, React, Layout, Header',
    authors: [{ name: 'suzuki taisei', url: 'https://yourwebsite.com' }],
    creator: 'suzuki taisei',
};

export default function RootLayout(props: LayoutProps) {
    return (
        <html lang="ja">
            <body>
                <Header />
                <div>{props.children}</div>
            </body>
        </html>
    );
}

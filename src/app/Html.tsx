import React from 'react';

interface HtmlProps {
    scripts: string[];
    title: string;
    criticalCss: string;
    styleHref?: string;
    children: React.ReactNode;
}

const Html: React.FC<HtmlProps> = ({ scripts, criticalCss, styleHref, children, title }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" />
                {styleHref && <link rel="stylesheet" href={`/${styleHref}`} />}
                {criticalCss && <style type="text/css">{criticalCss}</style>}
                {scripts.map(src => (
                    <script async type="module" src={`/${src}`} key={src}></script>
                ))}
                <title>{title}</title>
            </head>
            <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<b>Enable JavaScript to run this app.</b>`,
                    }}
                />
                <div id="root">{children}</div>
            </body>
        </html>
    );
};

export default Html;

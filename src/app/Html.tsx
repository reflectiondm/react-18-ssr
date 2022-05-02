import React from 'react';

interface HtmlProps {
    scripts: string[];
    title: string;
    children: React.ReactElement;
}

const Html: React.FC<HtmlProps> = ({ scripts, children, title }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" />
                {/* <link rel="stylesheet" href={assets["main.css"]} /> */}
                {scripts.map(src => (
                    <script async src={src} key={src}></script>
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

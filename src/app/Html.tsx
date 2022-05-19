import React from 'react';

interface HtmlProps {
    scripts: string[];
    title: string;
    appString: string;
    criticalCss: string;
    styleHref?: string;
}

const Html: React.FC<HtmlProps> = ({ scripts, criticalCss, styleHref, appString, title }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" />
                {styleHref && <link rel="stylesheet" href={`/styles/${styleHref}`} />}
                <style type="text/css">{criticalCss}</style>
                {scripts.map(src => (
                    <script async src={`/${src}`} key={src}></script>
                ))}
                <title>{title}</title>
            </head>
            <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<b>Enable JavaScript to run this app.</b>`,
                    }}
                />
                <div id="root" dangerouslySetInnerHTML={{ __html: appString }}></div>
            </body>
        </html>
    );
};

export default Html;

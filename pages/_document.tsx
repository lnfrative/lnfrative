import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Infrative</title>
                </Head>
                <body>
                    <div id="overlay" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

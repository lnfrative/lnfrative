import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html className="dark">
                <Head />
                <body>
                    <div id="overlay" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

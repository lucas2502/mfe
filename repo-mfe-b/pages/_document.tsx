import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { flushChunks, FlushedChunks } from '@module-federation/nextjs-mf/utils'

export default class MyDocument extends Document<{ chunks: any }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const chunks = await flushChunks()
    return {
      ...initialProps,
      chunks
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          {/* 👇 Corrigido: prop obrigatória */}
          <FlushedChunks chunks={this.props.chunks} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

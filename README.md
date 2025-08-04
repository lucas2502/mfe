
```
bankly-mfe

├─ docker-compose.yaml
├─ repo-mfe-a
│  ├─ .env
│  ├─ .next
│  │  ├─ BUILD_ID
│  │  ├─ build-manifest.json
│  │  ├─ cache
│  │  │  ├─ .tsbuildinfo
│  │  │  ├─ swc
│  │  │  │  └─ plugins
│  │  │  │     └─ v7_macos_aarch64_0.104.41
│  │  │  └─ webpack
│  │  │     ├─ client-production
│  │  │     │  ├─ 0.pack
│  │  │     │  ├─ 1.pack
│  │  │     │  ├─ 2.pack
│  │  │     │  ├─ index.pack
│  │  │     │  └─ index.pack.old
│  │  │     └─ server-production
│  │  │        ├─ 0.pack
│  │  │        ├─ 1.pack
│  │  │        ├─ 2.pack
│  │  │        ├─ index.pack
│  │  │        └─ index.pack.old
│  │  ├─ export-marker.json
│  │  ├─ images-manifest.json
│  │  ├─ next-minimal-server.js.nft.json
│  │  ├─ next-server.js.nft.json
│  │  ├─ package.json
│  │  ├─ prerender-manifest.js
│  │  ├─ prerender-manifest.json
│  │  ├─ react-loadable-manifest.json
│  │  ├─ required-server-files.json
│  │  ├─ routes-manifest.json
│  │  ├─ server
│  │  │  ├─ chunks
│  │  │  │  ├─ 152-22d281b0afb46968.js
│  │  │  │  ├─ 158-872626f8e4bfbc24.js
│  │  │  │  ├─ 163.js
│  │  │  │  ├─ 201-47829b11e670e339.js
│  │  │  │  ├─ 23-0cec42fb57621c62.js
│  │  │  │  ├─ 315-9cd1ac4ee5301423.js
│  │  │  │  ├─ 356.js
│  │  │  │  ├─ 400.js
│  │  │  │  ├─ 402-9b723e958a47b942.js
│  │  │  │  ├─ 445.js
│  │  │  │  ├─ 487.js
│  │  │  │  ├─ 527-92311d9b631f03d3.js
│  │  │  │  ├─ 606-8c49f99be8982d6e.js
│  │  │  │  ├─ 664.js
│  │  │  │  ├─ 675.js
│  │  │  │  ├─ 685-59a903b65de38b7e.js
│  │  │  │  ├─ 8-cc724235709f75b2.js
│  │  │  │  ├─ 860-adaee6b6f7b5b742.js
│  │  │  │  ├─ 893-c27b7932ef5bca20.js
│  │  │  │  ├─ 93-5441283173af08b4.js
│  │  │  │  ├─ 930-f08b0102588d0e65.js
│  │  │  │  ├─ 990.js
│  │  │  │  ├─ __federation_expose_AppA-a2a0bc4d8323a437.js
│  │  │  │  ├─ font-manifest.json
│  │  │  │  ├─ mf-manifest.json
│  │  │  │  ├─ mf-stats.json
│  │  │  │  └─ remoteEntry.js
│  │  │  ├─ federated-stats.json
│  │  │  ├─ font-manifest.json
│  │  │  ├─ functions-config-manifest.json
│  │  │  ├─ mfe_a.js.nft.json
│  │  │  ├─ middleware-build-manifest.js
│  │  │  ├─ middleware-manifest.json
│  │  │  ├─ middleware-react-loadable-manifest.js
│  │  │  ├─ next-font-manifest.js
│  │  │  ├─ next-font-manifest.json
│  │  │  ├─ noop.js
│  │  │  ├─ noop.js.nft.json
│  │  │  ├─ pages
│  │  │  │  ├─ 404.html
│  │  │  │  ├─ 404.js.nft.json
│  │  │  │  ├─ 500.html
│  │  │  │  ├─ 500.js.nft.json
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _app.js.nft.json
│  │  │  │  ├─ _document.js
│  │  │  │  ├─ _document.js.nft.json
│  │  │  │  ├─ _error.js
│  │  │  │  ├─ _error.js.nft.json
│  │  │  │  ├─ index.html
│  │  │  │  └─ index.js.nft.json
│  │  │  ├─ pages-manifest.json
│  │  │  └─ webpack-runtime.js
│  │  ├─ ssr
│  │  │  ├─ 152-22d281b0afb46968.js
│  │  │  ├─ 158-872626f8e4bfbc24.js
│  │  │  ├─ 163.js
│  │  │  ├─ 201-47829b11e670e339.js
│  │  │  ├─ 23-0cec42fb57621c62.js
│  │  │  ├─ 315-9cd1ac4ee5301423.js
│  │  │  ├─ 356.js
│  │  │  ├─ 400.js
│  │  │  ├─ 402-9b723e958a47b942.js
│  │  │  ├─ 445.js
│  │  │  ├─ 487.js
│  │  │  ├─ 527-92311d9b631f03d3.js
│  │  │  ├─ 606-8c49f99be8982d6e.js
│  │  │  ├─ 664.js
│  │  │  ├─ 675.js
│  │  │  ├─ 685-59a903b65de38b7e.js
│  │  │  ├─ 8-cc724235709f75b2.js
│  │  │  ├─ 860-adaee6b6f7b5b742.js
│  │  │  ├─ 893-c27b7932ef5bca20.js
│  │  │  ├─ 93-5441283173af08b4.js
│  │  │  ├─ 930-f08b0102588d0e65.js
│  │  │  ├─ 990.js
│  │  │  ├─ __federation_expose_AppA-a2a0bc4d8323a437.js
│  │  │  ├─ font-manifest.json
│  │  │  ├─ mf-manifest.json
│  │  │  ├─ mf-stats.json
│  │  │  └─ remoteEntry.js
│  │  ├─ static
│  │  │  ├─ chunks
│  │  │  │  ├─ 102.15b275233122041d.js
│  │  │  │  ├─ 118.aa4c9067cf9c98da.js
│  │  │  │  ├─ 152.80608482201df270.js
│  │  │  │  ├─ 163.2c8769b48fa453a4.js
│  │  │  │  ├─ 256.dcaa5ffb3c39da46.js
│  │  │  │  ├─ 411-213015c349527db1.js
│  │  │  │  ├─ 431.313cc303f2ea2d40.js
│  │  │  │  ├─ 445.7a70174c78f2b1bd.js
│  │  │  │  ├─ 527.c81c5a907e091428.js
│  │  │  │  ├─ 59.9c06f44e37b006f5.js
│  │  │  │  ├─ 590.476dd4df66eee962.js
│  │  │  │  ├─ 634.68638af659fea0e6.js
│  │  │  │  ├─ 664.a2d3aba9c0b2d507.js
│  │  │  │  ├─ 675.ddf926566a29d0d5.js
│  │  │  │  ├─ 8.e87209b473b1ef1c.js
│  │  │  │  ├─ 860.071250ba9224c7fe.js
│  │  │  │  ├─ 903.af30bb7a73a7d079.js
│  │  │  │  ├─ 93.1b7725e0ce80500d.js
│  │  │  │  ├─ __federation_expose_AppA.b088206c1270d11e.js
│  │  │  │  ├─ federated-stats.json
│  │  │  │  ├─ framework-312fbfb4656590b9.js
│  │  │  │  ├─ main-5be244436105386c.js
│  │  │  │  ├─ mf-manifest.json
│  │  │  │  ├─ mf-stats.json
│  │  │  │  ├─ noop-296eabd444c13bdc.js
│  │  │  │  ├─ pages
│  │  │  │  │  ├─ 404-2c173ad5ddbd7f96.js
│  │  │  │  │  ├─ 500-2bb24e782d6db0f9.js
│  │  │  │  │  ├─ _app-4f689e6efa9485c0.js
│  │  │  │  │  ├─ _error-1bd1b4fcbabe42c9.js
│  │  │  │  │  └─ index-406743477e44189e.js
│  │  │  │  ├─ polyfills-c67a75d1b6f99dc8.js
│  │  │  │  ├─ remoteEntry.js
│  │  │  │  └─ webpack-8228c2c29da4c7f6.js
│  │  │  ├─ he6-dgfExIafbFrbWgIkx
│  │  │  │  ├─ _buildManifest.js
│  │  │  │  └─ _ssgManifest.js
│  │  │  └─ ssr
│  │  │     ├─ 152-22d281b0afb46968.js
│  │  │     ├─ 158-872626f8e4bfbc24.js
│  │  │     ├─ 163.js
│  │  │     ├─ 201-47829b11e670e339.js
│  │  │     ├─ 23-0cec42fb57621c62.js
│  │  │     ├─ 315-9cd1ac4ee5301423.js
│  │  │     ├─ 356.js
│  │  │     ├─ 400.js
│  │  │     ├─ 402-9b723e958a47b942.js
│  │  │     ├─ 445.js
│  │  │     ├─ 487.js
│  │  │     ├─ 527-92311d9b631f03d3.js
│  │  │     ├─ 606-8c49f99be8982d6e.js
│  │  │     ├─ 664.js
│  │  │     ├─ 675.js
│  │  │     ├─ 685-59a903b65de38b7e.js
│  │  │     ├─ 8-cc724235709f75b2.js
│  │  │     ├─ 860-adaee6b6f7b5b742.js
│  │  │     ├─ 893-c27b7932ef5bca20.js
│  │  │     ├─ 93-5441283173af08b4.js
│  │  │     ├─ 930-f08b0102588d0e65.js
│  │  │     ├─ 990.js
│  │  │     ├─ __federation_expose_AppA-a2a0bc4d8323a437.js
│  │  │     ├─ font-manifest.json
│  │  │     ├─ mf-manifest.json
│  │  │     ├─ mf-stats.json
│  │  │     └─ remoteEntry.js
│  │  └─ trace
│  ├─ Dockerfile
│  ├─ components
│  │  └─ AppA.tsx
│  ├─ next-env.d.ts
│  ├─ next.config.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ pages
│  │  ├─ 404.tsx
│  │  ├─ 500.tsx
│  │  ├─ _document.tsx
│  │  ├─ _error.tsx
│  │  └─ index.tsx
│  ├─ tsconfig.json
│  └─ webpack.config.js
├─ repo-mfe-b
│  ├─ .env
│  ├─ .next
│  │  ├─ BUILD_ID
│  │  ├─ build-manifest.json
│  │  ├─ cache
│  │  │  ├─ .tsbuildinfo
│  │  │  ├─ swc
│  │  │  │  └─ plugins
│  │  │  │     └─ v7_macos_aarch64_0.104.41
│  │  │  └─ webpack
│  │  │     ├─ client-production
│  │  │     │  ├─ 0.pack
│  │  │     │  ├─ index.pack
│  │  │     │  └─ index.pack.old
│  │  │     └─ server-production
│  │  │        ├─ 0.pack
│  │  │        ├─ index.pack
│  │  │        └─ index.pack.old
│  │  ├─ export-marker.json
│  │  ├─ images-manifest.json
│  │  ├─ next-minimal-server.js.nft.json
│  │  ├─ next-server.js.nft.json
│  │  ├─ package.json
│  │  ├─ prerender-manifest.js
│  │  ├─ prerender-manifest.json
│  │  ├─ react-loadable-manifest.json
│  │  ├─ required-server-files.json
│  │  ├─ routes-manifest.json
│  │  ├─ server
│  │  │  ├─ chunks
│  │  │  │  ├─ 152-22d281b0afb46968.js
│  │  │  │  ├─ 158-872626f8e4bfbc24.js
│  │  │  │  ├─ 163.js
│  │  │  │  ├─ 201-47829b11e670e339.js
│  │  │  │  ├─ 23-0cec42fb57621c62.js
│  │  │  │  ├─ 315-9cd1ac4ee5301423.js
│  │  │  │  ├─ 356.js
│  │  │  │  ├─ 400.js
│  │  │  │  ├─ 402-9b723e958a47b942.js
│  │  │  │  ├─ 445.js
│  │  │  │  ├─ 487.js
│  │  │  │  ├─ 527-92311d9b631f03d3.js
│  │  │  │  ├─ 606-8c49f99be8982d6e.js
│  │  │  │  ├─ 664.js
│  │  │  │  ├─ 675.js
│  │  │  │  ├─ 685-59a903b65de38b7e.js
│  │  │  │  ├─ 8-cc724235709f75b2.js
│  │  │  │  ├─ 860-adaee6b6f7b5b742.js
│  │  │  │  ├─ 893-c27b7932ef5bca20.js
│  │  │  │  ├─ 93-5441283173af08b4.js
│  │  │  │  ├─ 930-f08b0102588d0e65.js
│  │  │  │  ├─ 990.js
│  │  │  │  ├─ __federation_expose_AppB-b48d533b83db90d7.js
│  │  │  │  ├─ font-manifest.json
│  │  │  │  ├─ mf-manifest.json
│  │  │  │  ├─ mf-stats.json
│  │  │  │  └─ remoteEntry.js
│  │  │  ├─ federated-stats.json
│  │  │  ├─ font-manifest.json
│  │  │  ├─ functions-config-manifest.json
│  │  │  ├─ mfe_b.js.nft.json
│  │  │  ├─ middleware-build-manifest.js
│  │  │  ├─ middleware-manifest.json
│  │  │  ├─ middleware-react-loadable-manifest.js
│  │  │  ├─ next-font-manifest.js
│  │  │  ├─ next-font-manifest.json
│  │  │  ├─ noop.js
│  │  │  ├─ noop.js.nft.json
│  │  │  ├─ pages
│  │  │  │  ├─ 404.html
│  │  │  │  ├─ 404.js.nft.json
│  │  │  │  ├─ 500.html
│  │  │  │  ├─ 500.js.nft.json
│  │  │  │  ├─ _app.js
│  │  │  │  ├─ _app.js.nft.json
│  │  │  │  ├─ _document.js
│  │  │  │  ├─ _document.js.nft.json
│  │  │  │  ├─ _error.js
│  │  │  │  ├─ _error.js.nft.json
│  │  │  │  ├─ index.html
│  │  │  │  └─ index.js.nft.json
│  │  │  ├─ pages-manifest.json
│  │  │  └─ webpack-runtime.js
│  │  ├─ ssr
│  │  │  ├─ 152-22d281b0afb46968.js
│  │  │  ├─ 158-872626f8e4bfbc24.js
│  │  │  ├─ 163.js
│  │  │  ├─ 201-47829b11e670e339.js
│  │  │  ├─ 23-0cec42fb57621c62.js
│  │  │  ├─ 315-9cd1ac4ee5301423.js
│  │  │  ├─ 356.js
│  │  │  ├─ 400.js
│  │  │  ├─ 402-9b723e958a47b942.js
│  │  │  ├─ 445.js
│  │  │  ├─ 487.js
│  │  │  ├─ 527-92311d9b631f03d3.js
│  │  │  ├─ 606-8c49f99be8982d6e.js
│  │  │  ├─ 664.js
│  │  │  ├─ 675.js
│  │  │  ├─ 685-59a903b65de38b7e.js
│  │  │  ├─ 8-cc724235709f75b2.js
│  │  │  ├─ 860-adaee6b6f7b5b742.js
│  │  │  ├─ 893-c27b7932ef5bca20.js
│  │  │  ├─ 93-5441283173af08b4.js
│  │  │  ├─ 930-f08b0102588d0e65.js
│  │  │  ├─ 990.js
│  │  │  ├─ __federation_expose_AppB-b48d533b83db90d7.js
│  │  │  ├─ font-manifest.json
│  │  │  ├─ mf-manifest.json
│  │  │  ├─ mf-stats.json
│  │  │  └─ remoteEntry.js
│  │  ├─ static
│  │  │  ├─ UQNJPH9tf9GHpkoU14BXF
│  │  │  │  ├─ _buildManifest.js
│  │  │  │  └─ _ssgManifest.js
│  │  │  ├─ chunks
│  │  │  │  ├─ 102.c333a00fe5101ed4.js
│  │  │  │  ├─ 118.376150c50afc37fd.js
│  │  │  │  ├─ 152.f97c6739500017fa.js
│  │  │  │  ├─ 163.939c4d3b6fbe237c.js
│  │  │  │  ├─ 256.ed98c8c02576c8be.js
│  │  │  │  ├─ 411-55e0587d76a8d347.js
│  │  │  │  ├─ 431.6a99a0e53abe2f4c.js
│  │  │  │  ├─ 445.49394d2948a532ce.js
│  │  │  │  ├─ 527.7b9ed7b1f2dd480b.js
│  │  │  │  ├─ 59.13c8d90ce10e74fe.js
│  │  │  │  ├─ 590.50ff6440cb91c1b2.js
│  │  │  │  ├─ 634.223acea1cc234433.js
│  │  │  │  ├─ 664.8a3278e3c706d989.js
│  │  │  │  ├─ 675.de2ba81542d14cee.js
│  │  │  │  ├─ 8.3f283255343317f0.js
│  │  │  │  ├─ 860.24d6c82c2e97f52a.js
│  │  │  │  ├─ 903.9d79bdba34585f5f.js
│  │  │  │  ├─ 93.7bcb58585bad9c6a.js
│  │  │  │  ├─ __federation_expose_AppB.06852da8587fc57a.js
│  │  │  │  ├─ federated-stats.json
│  │  │  │  ├─ framework-9ad2c72fea344fcc.js
│  │  │  │  ├─ main-0b37166702bcd393.js
│  │  │  │  ├─ mf-manifest.json
│  │  │  │  ├─ mf-stats.json
│  │  │  │  ├─ noop-48c376c4dc13a97a.js
│  │  │  │  ├─ pages
│  │  │  │  │  ├─ 404-ae89e01299e53deb.js
│  │  │  │  │  ├─ 500-921c63f2dfa3abba.js
│  │  │  │  │  ├─ _app-3cd0340ccf68b6f5.js
│  │  │  │  │  ├─ _error-7563de54edcf86b6.js
│  │  │  │  │  └─ index-3168f0b96ecfb190.js
│  │  │  │  ├─ polyfills-c67a75d1b6f99dc8.js
│  │  │  │  ├─ remoteEntry.js
│  │  │  │  └─ webpack-bdee218642fd0cbc.js
│  │  │  └─ ssr
│  │  │     ├─ 152-22d281b0afb46968.js
│  │  │     ├─ 158-872626f8e4bfbc24.js
│  │  │     ├─ 163.js
│  │  │     ├─ 201-47829b11e670e339.js
│  │  │     ├─ 23-0cec42fb57621c62.js
│  │  │     ├─ 315-9cd1ac4ee5301423.js
│  │  │     ├─ 356.js
│  │  │     ├─ 400.js
│  │  │     ├─ 402-9b723e958a47b942.js
│  │  │     ├─ 445.js
│  │  │     ├─ 487.js
│  │  │     ├─ 527-92311d9b631f03d3.js
│  │  │     ├─ 606-8c49f99be8982d6e.js
│  │  │     ├─ 664.js
│  │  │     ├─ 675.js
│  │  │     ├─ 685-59a903b65de38b7e.js
│  │  │     ├─ 8-cc724235709f75b2.js
│  │  │     ├─ 860-adaee6b6f7b5b742.js
│  │  │     ├─ 893-c27b7932ef5bca20.js
│  │  │     ├─ 93-5441283173af08b4.js
│  │  │     ├─ 930-f08b0102588d0e65.js
│  │  │     ├─ 990.js
│  │  │     ├─ __federation_expose_AppB-b48d533b83db90d7.js
│  │  │     ├─ font-manifest.json
│  │  │     ├─ mf-manifest.json
│  │  │     ├─ mf-stats.json
│  │  │     └─ remoteEntry.js
│  │  └─ trace
│  ├─ Dockerfile
│  ├─ components
│  │  └─ AppB.tsx
│  ├─ next-env.d.ts
│  ├─ next.config.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ pages
│  │  ├─ 404.tsx
│  │  ├─ 500.tsx
│  │  ├─ _document.tsx
│  │  ├─ _error.tsx
│  │  └─ index.tsx
│  ├─ tsconfig.json
│  └─ webpack.config.js
└─ repo-shell-app
   ├─ .env
   ├─ .next
   │  ├─ cache
   │  │  ├─ .tsbuildinfo
   │  │  ├─ swc
   │  │  │  └─ plugins
   │  │  │     └─ v7_macos_aarch64_0.104.41
   │  │  └─ webpack
   │  │     ├─ client-production
   │  │     │  ├─ 0.pack
   │  │     │  ├─ 1.pack
   │  │     │  ├─ 2.pack
   │  │     │  ├─ 3.pack
   │  │     │  ├─ 4.pack
   │  │     │  ├─ index.pack
   │  │     │  └─ index.pack.old
   │  │     └─ server-production
   │  │        ├─ 0.pack
   │  │        ├─ 1.pack
   │  │        ├─ 2.pack
   │  │        ├─ 3.pack
   │  │        ├─ index.pack
   │  │        └─ index.pack.old
   │  └─ package.json
   ├─ Dockerfile
   ├─ components
   │  ├─ Header.tsx
   │  ├─ Home.tsx
   │  └─ Sidebar.tsx
   ├─ declarations.d.ts
   ├─ next-env.d.ts
   ├─ next.config.js
   ├─ package-lock.json
   ├─ package.json
   ├─ pages
   │  ├─ 404.tsx
   │  ├─ 500.tsx
   │  ├─ _document.tsx
   │  ├─ _error.tsx
   │  ├─ index.tsx
   │  ├─ mfe-a.tsx
   │  └─ mfe-b.tsx
   ├─ public
   │  └─ routes.json
   ├─ tsconfig.json
   └─ webpack.config.js

```

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
         remotes: {
          mfe_a: `mfe_a@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          mfe_b: `mfe_b@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        exposes: {},
        filename: 'static/chunks/remoteEntry.js',
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true }
        },
      })
    );
    return config;
  },
};


const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe_b',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './AppB': './components/AppB',
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true }
        },
        extraOptions: {
          exposePages: false
        }
      })
    );
    return config;
  }
};
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe_b',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './AppB': './components/AppB',
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true }
        },
        extraOptions: {
          exposePages: false
        }
      })
    );
    return config;
  }
};

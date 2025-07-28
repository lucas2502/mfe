MFE com SSR – Viabilidade e Alternativas (2025)
1. Contexto
O objetivo inicial deste projeto é criar uma arquitetura baseada em Micro Frontends (MFE) com Server-Side Rendering (SSR), aproveitando tecnologias modernas como React, Vite, Module Federation e um modelo distribuído de aplicações independentes, compostas em um host.
No entanto, a tentativa de implementar MFE com suporte completo a SSR revelou-se tecnicamente inviável com o conjunto de ferramentas inicialmente proposto.

2. Por que é tão difícil fazer MFE com SSR?
2.1. Module Federation foi criado para client-side
O Module Federation (MF) surgiu no Webpack 5 para compartilhamento de módulos entre projetos em tempo de execução, mas com foco em client-side rendering (CSR).
2.2. SSR exige execução e renderização do código no servidor
No SSR, o código precisa ser executado do lado do servidor antes de ser enviado ao cliente. Isso significa:
O host precisa ser capaz de importar e renderizar os MFEs no servidor (Node.js).


Os MFEs precisam expor componentes ou rotas que sejam executáveis no server, não apenas em tempo de navegador.


2.3. React 18 + SSR + Streaming dificultam ainda mais
React 18 trouxe streaming para SSR, o que muda a forma como o React lida com a renderização assíncrona. Isso gera incompatibilidades com bibliotecas que não estão preparadas para SSR puro (como a maioria dos setups com Module Federation).

3. Estado atual de @module-federation/nextjs-mf (2025)
O plugin @module-federation/nextjs-mf, criado para trazer suporte a MFEs no Next.js com SSR, está sem manutenção ativa e quebrado em versões mais recentes do Next.js.
Problemas conhecidos:
Incompatibilidades com Next.js 13+ (app router e server components).


Dependência de internals instáveis do Next.js.


Dificuldade de integração com layouts, streaming e cache de SSR.


Conclusão: não é recomendado usar @module-federation/nextjs-mf em 2025 para projetos de produção com SSR.

4. Alternativas realistas em 2025
4.1. Turborepo + Remote Components (Recomendado)
Em vez de MFEs com Module Federation, a estrutura com monorepo + Remote Components via HTTP/JSON + SSR via Next.js tem se mostrado mais estável e produtiva.
Benefícios:
Suporte nativo a SSR via Next.js.


Compartilhamento de componentes via API (ou CDN).


Independência de deploy entre times.


Escalabilidade com menos complexidade.


Totalmente suportado em monorepo (Turborepo).


Como funciona:
Cada time mantém seu próprio app Next.js (ou páginas) com SSR.


Componentes remotos são buscados via HTTP e renderizados dinamicamente.


Design System pode ser um pacote npm ou lib compartilhada.


A composição ocorre no server do app host ou gateway.



4.2. Single Runtime com SSR por rota
Outro modelo viável é usar um orquestrador de rotas (como Edge Functions, Nginx ou Fastify/Express com React SSR) que direcione para múltiplos apps SSR independentes:
Cada app renderiza SSR com seu próprio servidor.


O gateway compartilha autenticação, sessão e roteamento.


Padrão semelhante ao microserviços backend.



4.3. Client-Side MFEs com fallback para SSR parcial
Se aceitar degradação de SSR, é possível usar MFEs com React no client e carregar dinamicamente os apps via Federation, com um SSR parcial apenas no shell.
Limitações:
SEO prejudicado.


Performance do Time-to-Interactive aumenta.


Problemas de acessibilidade.



5. Conclusão e Recomendação
Após análise técnica:
Module Federation com SSR não é viável para produção em 2025.


Ferramentas que suportavam isso estão desatualizadas ou instáveis.


A abordagem monorepo com SSR em apps independentes (Next.js + Turborepo + Remote Components) é a mais segura, escalável e alinhada com o estado atual do ecossistema.



6. Referências
React 18 SSR docs


Turborepo documentation


Remote React components


Discussions on Module Federation + SSR




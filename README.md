# Portfólio — Luiz Eduardo Baganha

Portfólio pessoal feito com Next.js, React e TypeScript. Inclui uma página inicial e estudos de caso para o **Gerenciador de consultório** e o **Sistema de gerenciamento de filas**.

## Executar localmente

Requer Node.js 20.9 ou superior e npm.

```powershell
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificar e publicar

```powershell
npm run typecheck
npm run build
npm start
```

O projeto usa o App Router do Next.js. O botão PT/EN no cabeçalho salva o idioma em um cookie e mantém a escolha ao navegar entre páginas. Português é o idioma padrão.

Para editar os textos da interface, altere os blocos `pt` e `en` em `src/lib/i18n.ts`. Os textos dos projetos em português ficam em `src/lib/projects.ts`; as versões em inglês ficam em `src/lib/projects-en.ts`, associadas pelo `slug`. Links, tecnologias e imagens são compartilhados. O currículo atualizado está em `public/`.

## Estrutura

- `src/app/page.tsx`: página inicial.
- `src/app/projetos/[slug]/page.tsx`: estudo de caso por projeto.
- `src/components/`: cabeçalho, rodapé e imagens dos projetos.
- `src/app/globals.css`: estilos, responsividade e animações.

As capturas dos projetos foram feitas nas aplicações locais com dados fictícios e ficam em `public/projects/`.

# Chess.Live

Site para encontrar streamers do [Chess.com](https://www.chess.com/) que estão ao vivo agora. A lista vem da [API pública de streamers](https://api.chess.com/pub/streamers), com busca instantânea e links para Twitch e perfil.

## Funcionalidades

- Carrega a lista automaticamente ao abrir a página
- Streamers ao vivo primeiro, depois offline, ambos em ordem alfabética
- Busca em tempo real pelo username
- Atualização manual da lista
- Tema claro/escuro (segue o sistema na primeira visita e fica salvo no navegador)
- Layout mobile-first: 1 coluna no celular, 2 no tablet, 4 no desktop
- Infinite scroll no celular e no tablet; paginação de 10 itens no desktop
- Estados de loading, erro e lista vazia

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## Como rodar

Requisitos: Node.js 20+.

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173).

Outros comandos:

```bash
npm run build    # build de produção
npm run preview  # preview do build
npm run lint     # ESLint
```

## API

Os dados são fornecidos pela API pública oficial do Chess.com:

```
GET https://api.chess.com/pub/streamers
```

Não há backend: o frontend faz o `fetch` direto no navegador.

## Autor

Desenvolvido por [Pablo Yuri](https://github.com/pylopes).

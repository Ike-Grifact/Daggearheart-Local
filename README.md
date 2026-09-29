# IKHE — Ficha Viva v0.3

Protótipo **print-first**: o navegador serve para configurar o personagem; a saída final é um kit A4 colorido para jogo presencial.

## O que já funciona

- Criador guiado em 7 etapas, com Feiticeiro e Ladino como classes-piloto.
- Drakona e Fungril como ancestralidades-piloto.
- Comunidades Aristocrática (Highborne) e Fora da Lei (Slyborne).
- Atributos, Evasão, PV, Fadiga, Esperança, Proficiência e limiares derivados.
- Armas físicas e mágicas de nível 1, incluindo Espada Luminosa, Lâmina Sombria e Katana.
- Armaduras de nível 1.
- Duas cartas de domínio escolhidas para o loadout.
- Compêndio pesquisável offline.
- Ficha A4, folha de 6 cartas recortáveis ajustada para caber integralmente na página e referência rápida.
- Modo econômico de tinta.
- Biblioteca de múltiplos personagens salva localmente, com autosave, criar/duplicar/excluir e exportação/importação `.ikhe.json`.
- PWA/cache offline quando hospedado por HTTPS (ex.: GitHub Pages).

## Rodar localmente

```bash
python -m http.server 8080
```

Depois abra `http://localhost:8080`.

## GitHub Pages

Em **Settings → Pages**, publique a branch `main` a partir da raiz (`/`). Abra o site uma vez com internet; depois o Service Worker guarda os arquivos para uso offline.

## Dados do compêndio

Nesta versão publicada no GitHub Pages, o aplicativo foi empacotado localmente em `bundle/chunk-*.js`, sem CDN, banco externo ou API obrigatória.

## Nota de licença

> This product includes materials from the Daggerheart System Reference Document 2.0, © Critical Role, LLC. under the terms of the Darrington Press Community Gaming (DPCGL) License. More information can be found at https://www.daggerheart.com. There are no previous modifications by others.

A apresentação e a localização parcial em português são modificações deste protótipo. Não utiliza arte nem trade dress oficial.

## O que entrou na v0.3

- 9 classes do núcleo, 18 ancestralidades e 9 comunidades.
- 189 cartas de domínio.
- 189 armas no banco do protótipo (188 entradas do núcleo + 1 Katana IKHE homebrew).
- 34 armaduras, 60 itens e 60 consumíveis.
- Filtros de compêndio.
- Recomendações iniciais por classe.
- Equipamento filtrado pelo Patamar disponível ao nível.
- Migração automática dos personagens locais da v0.2.
- Kit de Mesa A4 com 6 cartas por folha (2 × 3).

As recomendações de classe são presets didáticos e continuam totalmente editáveis.

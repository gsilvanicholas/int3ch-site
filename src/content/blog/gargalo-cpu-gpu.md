---
title: "O que é 'gargalo' de CPU/GPU e como saber se o seu PC tem um"
description: "Entenda de forma simples o que causa gargalo entre processador e placa de video, e como identificar antes de fazer upgrade errado."
pubDate: 2026-09-14
tags: ["hardware", "guia"]
cover: "/blog/gargalo-cover.svg"
---

"Gargalo" é o termo mais usado (e mais mal explicado) quando o assunto é montar ou fazer upgrade de PC. A ideia central é simples: **seu PC só vai tão rápido quanto a peça mais lenta permite**.

## O que causa gargalo, na prática

Todo frame de jogo passa por dois trabalhos principais:

1. **CPU** calcula física, IA, lógica do jogo e prepara as instruções
2. **GPU** desenha o frame na tela

Se a CPU é fraca demais pra "alimentar" a GPU rápido o suficiente, a placa de vídeo fica ociosa esperando — isso é gargalo de CPU. Se a GPU é o limite, ela fica no talo (quase 100% de uso) e a CPU sobra — isso é gargalo de GPU, e é o cenário mais comum e mais desejável.

## Como identificar

- Abra o gerenciador de tarefas (ou um monitor de hardware) enquanto joga
- Se a **GPU está perto de 100%** de uso e a CPU sobra: normal, esperado, seu sistema está balanceado
- Se a **CPU está no limite** e a GPU fica bem abaixo de 100%: aí sim você tem gargalo de processador — trocar de placa de vídeo nesse cenário não vai ajudar tanto

## O erro mais comum

Trocar a placa de vídeo por uma mais cara esperando mais FPS, sem checar se o processador aguenta acompanhar. Resultado: gasto alto, ganho pequeno. Antes de qualquer upgrade de GPU, vale a pena confirmar que sua CPU não é o limite — principalmente em resoluções mais baixas (Full HD), onde o processador pesa mais na equação do que em 1440p/4K.

## Resumo prático

Upgrade de placa de vídeo rende mais em resoluções altas (1440p, 4K). Upgrade de processador rende mais em resoluções baixas (Full HD) ou em jogos que dependem muito de física/simulação (estratégia, simulação, mundo aberto denso).

---
nav_order: 3
title: Parceiros
has_children: true
has_toc: false
permalink: /pt/docs/partners/
---
# Parceiros
{: .no_toc }

## Índice
{: .no_toc .text-delta }

1. TOC
{:toc}

## O que é um Parceiro DSPLAY?

Um **Parceiro DSPLAY** é um tipo especial de cliente que pode ter outros clientes (filhos) sob a sua conta.

A conta do parceiro tem privilégios de administrador sobre as contas filhas. Ela pode:
- Definir o máximo de terminais permitidos para os filhos
- Definir o máximo de espaço de armazenamento que os filhos podem usar
- Ativar/desativar contas filhas
- Gerenciar usuários nas contas filhas
- Ter uma página de cadastro própria para clientes. Veja os detalhes [aqui](./create_children/)

## API do DSPLAY para parceiros

Como parceiro, você pode integrar os seus sistemas com o DSPLAY. A API de [Cadastro personalizado](./create_children/) registra contas filhas direto do seu site, e cada uma é vinculada à sua conta imediatamente.

<figure class="fig"><img src="{{ '/docs/partners/create_children/assets/flow.jpg' | relative_url }}" alt="Um usuário preenche um formulário de cadastro no site do parceiro, o servidor do parceiro chama POST /createChildAccount no servidor do DSPLAY e envia um e-mail de confirmação"><figcaption>O fluxo de cadastro.</figcaption></figure>

## Cobrança

As contas de parceiros são cobradas pelo total de terminais ativos, armazenamento extra usado, QR Codes e qualquer outro tipo de recurso cobrável usado por seus filhos.

>A DSPLAY não impõe nenhuma restrição ao modelo de preços que os parceiros praticam com seus clientes.

---
nav_order: 4
title: Serviços JSON
has_children: true
permalink: /pt/docs/json-services/
---
# Serviços JSON

Qualquer dado acessível por HTTP pode estar numa tela DSPLAY. Um Serviço JSON é a integração inteira: um endpoint que retorna JSON e um [template](../html-templates) que o renderiza.

```
seus dados  →  seu endpoint  →  player DSPLAY  →  seu template  →  a tela
```

Níveis de estoque, números de fila, painéis de vendas, leituras de sensores, uma API interna: se dá para retornar como JSON, dá para exibir. Seu serviço não depende do DSPLAY, ele só acrescenta alguns campos de controle ao JSON.

## Três passos

1. **Retorne JSON.** Qualquer endpoint HTTP que responda no [formato de resposta](#formato-da-resposta) abaixo.
2. **Renderize.** Um template que lê `dsplay_media.result`.
3. **Conecte.** No CMS, crie uma mídia JSON Service com a URL do endpoint (e headers, para chaves de API) e selecione o template.

O [exemplo](./example) traz um serviço e um template completos em poucas linhas.

## Formato da resposta

A resposta deve ser um objeto JSON. O player só olha para três chaves de controle; todo o resto é seu, e o objeto inteiro é entregue ao template como `dsplay_media.result`.

```js
{
  expiresAt: '2026-10-11T18:00:00.000Z', // Quando o resultado expira (ISO 8601, UTC). O player busca novamente após esse momento
  showOutdated: true, // Continua exibindo o resultado após expirar, até que um novo chegue (padrão: false)
  error: { message: 'Algo deu errado' }, // Presente apenas em caso de falha. A mídia não é exibida
  data: {}, // Seu payload. O nome é uma convenção, use as chaves que quiser
}
```

`validity` é aceito no lugar de `expiresAt` por serviços legados, em ISO 8601 ou em `yyyy-MM-dd HH:mm:ss`.

## Como o player o utiliza

- **Busca:** o player chama a URL na primeira vez que a mídia é preparada após o app iniciar, e novamente sempre que o resultado expirar. Ele guarda o último resultado no dispositivo, então a mídia continua funcionando offline enquanto o resultado for válido (ou `showOutdated` for true).
- **Exibição:** a mídia só é reproduzida quando há um resultado não expirado (ou com `showOutdated: true`) e sem `error`. Caso contrário, ela é pulada.
- **Sem `expiresAt`:** o resultado nunca expira, então o player só busca novamente quando o app reinicia. Defina-o para controlar a frequência de atualização dos dados.
- **Erros:** retorne uma chave `error`. O status HTTP é ignorado quando o corpo é JSON, então pode ser qualquer um. O player tenta novamente após `expiresAt`, ou após 30 minutos se você não enviar um.
- **Relógio do dispositivo:** um resultado só é considerado válido se a data do dispositivo estiver correta.

## Requisição

O player envia um `GET` para a URL configurada na mídia, com os headers configurados na mídia (use-os para chaves de API e tokens).

A URL pode usar variáveis `${...}`, expandidas a cada requisição:

| Variável | Valor |
|---|---|
| `project.id`, `project.key`, `project.name` | Informações do projeto |
| `project.tags.<tag>` | Valor da tag do projeto |
| `terminal.name`, `terminal.modified` | Informações do terminal |
| `terminal.tags.<tag>` | Valor da tag do terminal |
| `terminal.lat`, `terminal.lon` | Localização do terminal (a do dispositivo, se disponível) |

Por exemplo, `https://my.service/weather?lat=${terminal.lat}&lon=${terminal.lon}` retorna dados para a localização de cada terminal.

## No template

A resposta do serviço está em `dsplay_media.result`. Os campos que o player adiciona à mídia estão listados em [JSON Service](../html-templates/dsplay_media/json-service).

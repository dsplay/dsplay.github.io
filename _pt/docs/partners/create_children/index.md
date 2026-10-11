---
parent: Parceiros
nav_order: 1
permalink: /pt/docs/partners/create_children/
title: Cadastro personalizado
---
# Cadastro personalizado

Como parceiro oficial da DSPLAY, você pode cadastrar contas filhas direto do seu próprio site. Dessa forma, a conta filha fica vinculada à sua imediatamente.

## Fluxo de cadastro personalizado

![Flow]({{ '/docs/partners/create_children/assets/flow.jpg' | relative_url }})

>**IMPORTANTE!**
>
>A requisição `/createChildAccount` deve SEMPRE SER FEITA A PARTIR DE UM SERVIÇO BACK-END, porque a `projectKey` não pode ser exposta na UI.

## URL do endpoint

Se você é um parceiro oficial da DSPLAY, a URL para cadastrar contas filhas aparece na visualização de informações do seu projeto.

O formato da URL é este:
```
https://manager.dsplay.tv/project/createChildAccount/<sua_project_key>
```

## Requisição

### Headers

- **`Accept-Language`**
  - descrição: O idioma em que você quer receber as mensagens de erro de validação.
  - obrigatório: `false`
  - Os valores suportados atualmente são `en_us` (padrão) e `pt_br`


### Exemplo

Você deve enviar uma requisição `HTTP POST` como a seguinte:

```json
{
  "company": {
    "name": "A Child Account",
    "website": "https://achildaccount.com",
    "phone": "+55 11 111 111 111",
    "email": "main@achildaccount.com",
    "address": {
      "address": "Some Street",
      "number": "100b",
      "city": "Some City",
      "state": "Some State",
      "countryCode": "br",
      "postalCode": "11111-111"
    }
  },
  "billingInfo": {
    "accountType": "personal|business",
    "birthDate": "1980-01-01T00:00:00Z",
    "taxId": "<seu id fiscal>",
    "email": "main@myawesomecompany.com",
    "phone": "+55 22 222 222 222",
    "address": {
      "address": "Another Address",
      "number": "5",
      "city": "Another City",
      "state": "Another State",
      "countryCode": "br",
      "postalCode": "22222-222",
      "addressExtra": "Another Neighborhood",
    },
    "payment": {
      "method": "bank-slip|booklet|payment-link|subscription|credit-card|bank-transfer",
      "frequency": 12,
      "day": 1,
      "withholdingPct": 0
    }
  },
  "user": {
    "name": "Child Company's Main User Name",
    "email": "manager@achildaccount.com",
    "username": "manager",
    "password": "v3ry5tr0ngp455w0rd",
    "active": true
  },
  "settings": {
    "timezone": "America/Recife",
    "theme": "dsplay-light-neutral",
    "maxTerminals": 10,
    "quota": 1024,
    "active": true,
    "evaluationPeriodDays": 15,
    "qrCodesEnabled": true,
    "terminalStatusNotificationEnabled": false
  }
}
```

### Parâmetros

- **`company`** (`object`)
  - `name` (`string`)
    - obrigatório: `true`
    - descrição: O nome da nova conta.
  - `website` (`string`)
    - obrigatório: `true`
    - descrição: O site da empresa.
  - `phone` (`string`)
    - obrigatório: `true`
    - descrição: O telefone da empresa.
  - `email` (`string`)
    - obrigatório: `true`
    - descrição: O e-mail principal da empresa.
  - `address` (`object`)
    - `address` (`string`)
      - obrigatório: `true`
      - descrição: O endereço da empresa.
    - `number` (`string`)
      - obrigatório: `true`
      - descrição: O número do endereço da empresa.
    - `city` (`string`)
      - obrigatório: `true`
      - descrição: A cidade do endereço da empresa.
    - `state` (`string`)
      - obrigatório: `true`
      - descrição: O estado da empresa.
    - `countryCode` (`string`)
      - obrigatório: `true`
      - descrição: O código do país da empresa. Deve ser um código de país válido no padrão [ISO-3166 2-alpha](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
    - `postalCode` (`string`)
      - obrigatório: `true`
      - descrição: O código postal da empresa.
- **`billingInfo`** (`object`)
  - `accountType` (`string`)
    - obrigatório: `true`
    - descrição: O tipo da conta. Os valores válidos são `personal` ou `business`.
  - `birthDate` (`string`)
    - obrigatório: `true` para o tipo de conta `personal`
    - descrição: A data de nascimento do titular da conta. Deve estar no formato [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601).
  - `taxId` (`string`)
    - obrigatório: `true`
    - descrição: O ID fiscal da conta.
  - `email` (`string`)
    - descrição: O e-mail de cobrança, caso seja diferente do da empresa.
    - padrão: `company.email`
  - `phone` (`string`)
    - descrição: O telefone de cobrança, caso seja diferente do da empresa.
    - padrão: `company.phone`
  - `address` (`object`)
    - `address` (`string`)
      - descrição: O endereço de cobrança, caso seja diferente do da empresa.
    - `number` (`string`)
      - descrição: O número do endereço de cobrança, caso seja diferente do da empresa.
    - `city` (`string`)
      - descrição: A cidade do endereço de cobrança, caso seja diferente da da empresa.
    - `state` (`string`)
      - descrição: O código do estado do endereço de cobrança, caso seja diferente do da empresa.
    - `countryCode` (`string`)
      - descrição: O código do país do endereço de cobrança, caso seja diferente do da empresa. Deve ser um código de país válido no padrão [ISO-3166 2-alpha](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
    - `postalCode` (`string`)
      - descrição: O código postal do endereço de cobrança, caso seja diferente do da empresa
    - `addressExtra` (`string`)
      - obrigatório: `true` se `countryCode` for `br`
      - descrição: O bairro do endereço de cobrança
  - `payment` (`object`)
    - `method` (`string`)
      - obrigatório: `true`
      - descrição: O método de pagamento preferido. Os valores válidos são: `bank-slip`, `booklet`, `payment-link`, `subscription`, `credit-card` ou `bank-transfer`
    - `frequency` (`float`)
      - obrigatório: `true`
      - descrição: O número de faturas que este cliente receberá por ano. Alguns exemplos:
        - `0.5` significa uma fatura a cada 2 anos
        - `1` significa fatura anual
        - `3` significa fatura quadrimestral, e assim por diante
        - `6` significa fatura semestral
        - `12` significa fatura mensal
    - `day` (`integer`)
      - obrigatório: `true`
      - descrição: O dia preferido para pagamento.
    - `withholdingPct` (`float`)
      - obrigatório: `true`
      - descrição: O percentual de retenção na fonte.
  - **`user`** (`object`)
    - `name` (`string`)
      - obrigatório: `true`
      - descrição: O nome do usuário principal da conta da empresa filha.
    - `email` (`string`)
      - obrigatório: `true`
      - descrição: O e-mail do usuário principal da conta da empresa filha.
    - `username` (`string`)
      - obrigatório: `true`
      - descrição: O nome de usuário do usuário principal da conta da empresa filha.
    - `password` (`string`)
      - obrigatório: `true`
      - descrição: A senha do usuário principal da conta da empresa filha.
    - `active` (`boolean`)
      - descrição: Se o usuário ficará ativo ou não após a criação.
      - padrão: `false`
  - **`settings`** (`object`)
    - `timezone` (`string`)
      - obrigatório: `true`
      - descrição: O valor deve ser um [Unix Timezone]() válido.
    - `theme` (`string`)
      - obrigatório: `true`
      - descrição: O tema da UI da conta. Os valores válidos são: `dsplay-light`, `dsplay-neutral-light`, `dsplay-dark` ou `classic`.
      - padrão: O tema do Parceiro DSPLAY é aplicado automaticamente às suas contas filhas se nenhum for especificado
    - `maxTerminals` (`integer`)
      - obrigatório: `true`
      - descrição: O número máximo de terminais que a conta filha pode ativar. Passe `null` para ilimitado.
    - `quota` (`integer`)
      - obrigatório: `true`
      - descrição: O espaço máximo de armazenamento (em bytes) que a conta filha pode usar. Passe `null` para ilimitado.
    - `active` (`boolean`)
      - obrigatório: `true`
      - descrição: Se a conta filha ficará ativa ou não após a criação.
    - `evaluationPeriodDays` (`integer`)
      - obrigatório: `true`
      - descrição: O período de avaliação (em dias) da conta filha.
    - `qrCodesEnabled` (`boolean`)
      - obrigatório: `true`
      - descrição: Se a conta filha tem a funcionalidade de QR Codes habilitada.
    - `terminalStatusNotificationEnabled` (`boolean`)
      - obrigatório: `true`
      - descrição: Se a conta filha tem as notificações de status de terminal habilitadas.


## Resposta

### Exemplo de sucesso

```json
{
  "status": 200,
  "data": {
    "parent": {
      "id": "1",
      "name": "My Awesome Company"
    },
    "project": {
      "name": "A Child Account",
      "id": 19,
      "key": "7c08662f0eeb0946801b24dc999b4714e1810f99b4871601c49e51de82a9865d",
      "address": {
        "address": "Some Street",
        "number": "100b",
        "city": "Some City",
        "state": "Some State",
        "countryCode": "br",
        "country": "Brazil",
        "postalCode": "11111-111"
      },
      
      "creation": "2023-05-31T00:00:00+00:00",
      "expiration": "2023-06-18T00:00:00+00:00",
      "active": true,
      "evaluation": true,
      "qrCodesEnabled": true,
      "theme": "dsplay-light-neutral",
      "parentId": "1",
      "maxTerminals": 10,
      "quota": 1024,
      "terminalStatusNotificationEnabled": true,
      "links": [
        "http:\/\/ds.myawesomecompany.com\/project\/19",
        "https:\/\/manager.dsplay.tv\/project\/19"
      ]
    },
    "billingInfo": {
      "accountType": "personal",
      "taxId": "<seu id fiscal>",
      "email": "main@achildaccount.com",
      "phone": "+55 22 222 222 222",
      "address": {
        "address": "Another Address",
        "number": "5",
        "city": "Another City",
        "state": "Another State",
        "countryCode": "br",
        "country": "Brazil",
        "postalCode": "22222-222",
        "addressExtra": "Another Neighborhood",
      },
      "payment": {
        "method": "bank-slip",
        "frequency": 12,
        "day": 1,
        "withholdingPct": 0
      }
    },
    "user": {
      "id": 25,
      "name": "Child Company's Main User Name",
      "email": "manager@achildaccount.com",
      "username": "manager",
      "registration": "2023-05-31T00:00:00+00:00",
      "active": false,
      "activationCode": "64775e8f5b989",
      "activationLinks": [
        "http:\/\/ds.myawesomecompany.com\/user\/activate?email=manager%40achildaccount.com&activationCode=64775e8f5b989",
        "https:\/\/manager.dsplay.tv\/user\/activate?email=manager%40achildaccount.com&activationCode=64775e8f5b989"
      ]
    }
  }
}
```

### Exemplo de erro

```json
{
  "status": 400,
  "message": "Erros de validação",
  "errors": {
    "user": {
      "username": [
        "Nome de usuário já em uso"
      ],
      "email": [
        "E-mail já em uso"
      ]
    }
  }
}
```
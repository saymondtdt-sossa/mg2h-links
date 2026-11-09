# MG2H Links

Utilitário de linha de comando para gerar os três links de divulgação da MAYGOTOHELL com a mesma campanha e uma origem distinta por canal.

```sh
node links.mjs
node links.mjs editorial-01
```

Use Node.js 18 ou posterior. A saída é JSON com as URLs prontas para copiar. O argumento opcional identifica uma peça publicitária e aceita até 48 letras minúsculas, números, hífens e sublinhados.

| Origem | Meio |
| --- | --- |
| Instagram | `organic_social` |
| Facebook | `organic_social` |
| GitHub | `referral` |

Os parâmetros UTM viajam na URL. A medição de visitas e pedidos depende de uma ferramenta de análise configurada para recebê-los. O utilitário funciona localmente e apenas imprime os links.

## Projeto relacionado

A MAYGOTOHELL (MG2H) apresenta alta-costura, joias, chaveiros e acessórios. [Conheça a vitrine da MG2H](https://maygotohell-mg2h.saymondtdt.chatgpt.site/?utm_source=github&utm_medium=referral&utm_campaign=mg2h_lancamento).

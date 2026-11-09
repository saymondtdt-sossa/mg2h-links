const store = 'https://maygotohell-mg2h.saymondtdt.chatgpt.site/'
const campaign = 'mg2h_lancamento'
const media = {
  instagram: 'organic_social',
  facebook: 'organic_social',
  github: 'referral',
}

const content = process.argv[2]

if (process.argv.length > 3 || (content !== undefined && !/^[a-z0-9_-]{1,48}$/.test(content))) {
  console.error('Uso: node links.mjs [identificador-da-peca-publicitaria]')
  process.exitCode = 1
} else {
  const links = {}
  for (const [channel, medium] of Object.entries(media)) {
    const url = new URL(store)
    url.searchParams.set('utm_source', channel)
    url.searchParams.set('utm_medium', medium)
    url.searchParams.set('utm_campaign', campaign)
    if (content) url.searchParams.set('utm_content', content)
    links[channel] = url.href
  }
  console.log(JSON.stringify(links, null, 2))
}

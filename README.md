# hopae-did-resolver
Resolves a did using did-resolver from DIF.

## Using Hopae
```javascript
const resolver = require('hopae-did-resolver')
resolver.resolve('did:ethr:baobab:').then(doc => console.log(doc))
```

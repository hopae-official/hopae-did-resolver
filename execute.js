
const { Resolver } = require('did-resolver');

const ethr = require('ethr-did-resolver');
const web = require('web-did-resolver');
// const sov = require('sov-did-resolver');

const ethrProviderConfig = { 
    networks: [
        { name: 'baobab', rpcUrl: 'https://api.baobab.klaytn.net:8651/', registry: '0xa8362C41286C9fd65B79e42b11DEA4B502B4865a' }
    ]
}
const webProviderConfig = {
    networks: [
    ]
}

const did = 'did:ethr:baobab:0x4f843a10a618076f0f3fff79c2bd3505f409c1c1';

const ethrDidResolver = ethr.getResolver(ethrProviderConfig)
const webDidResolver = web.getResolver(webProviderConfig)

const resolver = new Resolver({
    ...ethrDidResolver,
    ...webDidResolver
});

resolver.resolve(did).then(console.log);
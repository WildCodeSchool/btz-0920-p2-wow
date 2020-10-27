const fs = require('fs');
const realmsEu = JSON.parse(fs.readFileSync('./realms_eu.json', 'utf8'))
const realmsUs = JSON.parse(fs.readFileSync('./realms_us.json', 'utf8'))
const realmsTw = JSON.parse(fs.readFileSync('./realms_tw.json', 'utf8'))
const realmsKr = JSON.parse(fs.readFileSync('./realms_kr.json', 'utf8'))

const realmsFiles = [
  { file: realmsEu, zone: 'eu' },
  { file: realmsUs, zone: 'us' },
  { file: realmsTw, zone: 'tw' },
  { file: realmsKr, zone: 'kr' }
];
let tab = [];

//curl https://raider.io/api/connected-realms\?region\=eu > req.js

fs.appendFile('./realms.json', '{ ', (err) => {
  console.log(err ? 'Error :' + err : '{ ajouté')
})

realmsFiles.forEach((realm) => {
  const { realms } = realm.file.realmListing

  for (let i = 0; i < realms.length; i++) {
  console.log(realms[i].connectedRealms)
    const { connectedRealms } = realms[i]
  console.log(connectedRealms)
    
    for (let j = 0; j < connectedRealms.length; j++) {
      const temp = connectedRealms[j]

      // tab.push(temp);
      // console.log(temp)
        tab.push({
          name: temp.name,
          slug: temp.slug
        })
    }
  }

  fs.appendFile(
    './realms.json',
    ` '${realm.zone}': [` +
      tab.map((serveur) => {
        return JSON.stringify(serveur);
      }) +
      '], ',
    (err) => {
      console.log(err ? 'Error :' + err : 'ok');
    }
  );
  tab = [];
});
fs.appendFile('./realms.json', '}', (err) => {
  console.log(err ? 'Error :' + err : '} ajouté');
});

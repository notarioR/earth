require('dotenv').config();
const fs = require('fs');
const path = require('path');
const got = require('got');

const LIMIT = 250;

const checkins = [];

const start = (offset = 0) => {
  const URL = "https://api.foursquare.com/v2/"
  console.log('Requesting checkins at offset: ' + offset);
  got(URL +'users/self/checkins', {
    json: true,
    query: {
      oauth_token: process.env.ACCESS_TOKEN_FOURSQUARE,
      limit: LIMIT,
      offset,
      v: '20161201',
      m: 'swarm'
    }
  }).then(({body}) => {
    const { items } = body.response.checkins;
    console.log(items)
    if (!items || !items.length){
      console.log('No more items.');
      const FILE = path.resolve(__dirname, '../data/checkins.json');
      console.log('DONE: writing file ' + FILE);
      fs.writeFileSync(FILE, JSON.stringify(checkins, null, '\t'));
      return;
    };

    const firstCreatedAt = items[0].createdAt;
    const date = new Date(firstCreatedAt*1000);
    console.log(`Batch #${offset}: ${date.toDateString()}`);


    items.forEach((item, i) => {
      try {
        const {venue, createdAt, timeZoneOffset, photos} = item;
        if (!venue) return;
        const {id, name, location} = venue;
        if (!location) return;
        const {lat, lng, country, cc} = location;
        const itemDate = new Date(createdAt*1000);
        checkins.push({id, name, lat, lng, country, cc, createdAt, timeZoneOffset, photos});
      } catch (e){
        console.warn(item);
      }
    });
    // getTips('4b26840df964a520bb7c24e3')

    start(offset+LIMIT);
  }).catch((e) => console.warn(e)); 

 //   function getTips(id){
 //    got(URL +'venues/'+id+'/tips', {
 //      json: true,
 //      query: {
 //        oauth_token: process.env.ACCESS_TOKEN_FOURSQUARE,
 //        limit: LIMIT,
 //        offset: 0,
 //        v: '20161201',
 //        m: 'swarm'
 //    }
 //   }).then( function callback(response){
 //     console.log(response.body.response);
 //   }).catch((e) => console.log(e));
 // };

};
start();

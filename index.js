import Redis from 'ioredis'

const redis = new Redis({ password: 'password' });

redis.set('name', 'Woolley')
redis.get('name', (err, result) => {
  console.log(result);
})
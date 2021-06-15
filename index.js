import Redis from 'ioredis'
import Strings from './strings'
import Hashes from './hashes'

const redis = new Redis({ password: 'password' });

Strings(redis);
Hashes(redis);
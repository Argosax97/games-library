import mongoose, { ConnectOptions, Mongoose } from 'mongoose';

/**
 * Environment variables are validated and typed early.
 */
const MONGODB_URI: string = process.env.MONGO_DB_URI!;
const MONGODB_DB: string = process.env.MONGO_DB_NAME!;

if (!MONGODB_URI)
  throw new Error('❌ Missing MONGO_DB_URI in environment variables');
if (!MONGODB_DB)
  throw new Error('❌ Missing MONGO_DB_NAME in environment variables');

/**
 * Define a global type to ensure cached connection persists between HMR reloads
 * and remains type-safe.
 */
declare global {
  var _mongooseCache:
    | {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      }
    | undefined;
}

/**
 * Use global cache to prevent multiple connections during hot reloads (dev mode).
 */
if (!global._mongooseCache) {
  global._mongooseCache = { conn: null, promise: null };
}

const cached = global._mongooseCache;

/**
 * Establish a MongoDB connection using Mongoose.
 * Returns the existing connection if already connected.
 */
export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const options: ConnectOptions = {
      dbName: MONGODB_DB,
      autoIndex: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, options);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

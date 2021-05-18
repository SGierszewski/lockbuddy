import { Collection, MongoClient } from "mongodb";

let client: MongoClient;

export const connectDatabase = async (url: string): Promise<void> => {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  // verifys that we have access to all databases and get a list
  //   const databasesList = await client.db().admin().listDatabases();
  //   console.log(databasesList);
};

export const getCollection = (name: string): Collection => {
  return client.db().collection(name);
};

export const disconnectDatabase = async (): Promise<void> => {
  await client.close();
};

import { MongoClient } from "mongodb";

export const connectDatabase = async (url: string): Promise<void> => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  // verifys that we have access to all databases and get a list
  const databasesList = await client.db().admin().listDatabases();
  console.log(databasesList);
};

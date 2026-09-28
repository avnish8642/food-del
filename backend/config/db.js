import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://avnishrawat8642_db_user:68o8RGdj8RgtzEVg@ac-yivypko-shard-00-00.zyr1cry.mongodb.net:27017,ac-yivypko-shard-00-01.zyr1cry.mongodb.net:27017,ac-yivypko-shard-00-02.zyr1cry.mongodb.net:27017/?ssl=true&replicaSet=atlas-hrerml-shard-0&authSource=admin&appName=food-del",
    )
    .then(() => {
      console.log("DB connected");
    });
};
//mongodb://avnishrawat8642_db_user:<db_password>@ac-yivypko-shard-00-00.zyr1cry.mongodb.net:27017,ac-yivypko-shard-00-01.zyr1cry.mongodb.net:27017,ac-yivypko-shard-00-02.zyr1cry.mongodb.net:27017/?ssl=true&replicaSet=atlas-hrerml-shard-0&authSource=admin&appName=Cluster0
//mongodb://avnishrawat8642_db_user:68o8RGdj8RgtzEVg@ac-yivypko-shard-00-00.zyr1cry.mongodb.net:27017,ac-yivypko-shard-00-01.zyr1cry.mongodb.net:27017,ac-yivypko-shard-00-02.zyr1cry.mongodb.net:27017/?ssl=true&replicaSet=atlas-hrerml-shard-0&authSource=admin&appName=food-del
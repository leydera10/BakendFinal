import dotenv from 'dotenv';

dotenv.config();


export default {
    persistence: process.env.PERSISTENCE,
    mongo_url: process.env.DB_CONNECTION_STRING,
    port: process.env.PORT
};





/*import dotenv from 'dotenv';

dotenv.config();

export default {
    persistence: process.env.PERSISTENCE,
    mongo_url: `mongodb+srv://leiderasis30:M2UCwmWsQlIGwGKC@cluster0.f7btw4v.mongodb.net/?retryWrites=true&w=majority`,
    port: process.env.PORT
};*/


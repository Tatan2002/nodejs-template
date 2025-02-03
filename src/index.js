import connectDB from "#config/db.js";
import '#config/env.js';
import httpServer from "#config/https.js";


const bootstrap = async () => {
    
    await connectDB(process.env.MONGODB_URL);

    httpServer.listen(process.env.PORT, () => {
        console.log(`Servidor escuchando en el puerto ${process.env.port}`)
    });
};

bootstrap()
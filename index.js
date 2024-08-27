import { app } from "./app.js";
<<<<<<< HEAD:src/index.js
import { appconfig } from "./config/appconfig.js";
import { connectdb } from "./database/dbconnect.js";
import SocketIoServerConnection from "./socket.js";
=======
import { appconfig } from "./src/config/appconfig.js";
import { connectdb } from "./src/database/dbconnect.js";
>>>>>>> origin/main:index.js

(async () => {
  try {
    await connectdb();

    app.get("/", (_, res) => {
      res.status(200).json({
        status: "success",
      });
    });

    const appServer = app.listen(appconfig.PORT, () => {
      console.log(
        `Server started at http://localhost:${appconfig.PORT || 3030}/`
      );
    });

    SocketIoServerConnection(appServer);
  } catch (error) {
    console.log(error);
  }
})();

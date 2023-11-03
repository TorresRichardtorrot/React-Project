import app from "./app.js";
import { connetDB } from "./db.js";
import { PORT } from "./config.js";

app.listen(PORT || 9080);
console.log(">>> *** Servidor *** <<<", PORT);
connetDB();

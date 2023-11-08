import { reactive } from "vue";
import infoDatabase from "./db.json";

export const store = reactive ({
    message: 'Ciao mondo',
    products: infoDatabase.products
})
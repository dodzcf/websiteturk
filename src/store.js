import { createStore} from "redux";

import num from "./reducer/index";

const store = createStore(num);

export default store;
import { buildHeader } from "./buildHeader.js";
// import { hookAllListeners } from "./AddListeners/start.js";

const runAfterDomLoad = () => {
    buildHeader();

    // hookAllListeners();
};

export { runAfterDomLoad };

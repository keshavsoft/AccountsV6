import { buildHeader } from "./buildHeader.js";

const runAfterDomLoad = () => {
    buildHeader().then();
};

export { runAfterDomLoad };

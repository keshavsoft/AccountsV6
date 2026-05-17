import { buildHeader } from "./buildHeader.js";

const runAfterDomLoad = () => {
    buildHeader();
};

export { runAfterDomLoad };

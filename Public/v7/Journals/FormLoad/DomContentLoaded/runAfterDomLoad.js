import BuildMenuItem from "./BuildMenuItem/index.js";

const runAfterDomLoad = () => {
    BuildMenuItem().then();
};

export { runAfterDomLoad };

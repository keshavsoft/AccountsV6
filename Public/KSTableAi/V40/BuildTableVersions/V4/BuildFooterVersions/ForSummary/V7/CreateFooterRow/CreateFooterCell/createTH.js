const createTH = ({ inKey }) => {
    // Create table header cell
    const th = document.createElement("th");
    // Attach key for sorting / identification
    th.innerHTML = inKey;

    // Return configured header cell
    return th;
};

export { createTH };
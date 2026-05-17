import applyWidth from "./applyWidth.js";
import getTotal from "./getTotal.js";
import getFormattedTotal from "./getFormattedTotal.js";

const createTH = ({
    inKey,
    inShowTotal = false,
    inData,
    inShowThousandsSeperator = false,
    inWidth
}) => {

    const th = document.createElement("th");

    applyWidth({
        th,
        inWidth
    });

    if (inShowTotal) {

        const total = getTotal({
            inData,
            inKey
        });

        const formattedTotal =
            getFormattedTotal({
                inTotal: total,
                inShowThousandsSeperator
            });

        th.innerHTML = formattedTotal;

    };

    return th;

};

export default createTH;
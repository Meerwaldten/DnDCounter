import fs from "fs";


function renderPage(page, config={}) {
    const nav = fs.readFileSync("public/components/nav.html").toString()
    .replace(("$TAB_TITLE"), config.tabTitle || "Hej med dig")
    .replace("$CSS_LINK", config.cssLink || "");

    const footer = fs.readFileSync("public/components/footer.html").toString();

    return nav + page + footer;
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage
};
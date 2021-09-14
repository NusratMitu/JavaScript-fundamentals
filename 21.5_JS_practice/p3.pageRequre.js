function pageRequirements(numOfFirstbook, numOfSecoundbook, numOfThirdbook) {
    const firstbookPages = 100;
    const secondbookPages = 200;
    const thirdbookPages = 300;
    const totalPageRequre = firstbookPages * numOfFirstbook + secondbookPages * numOfSecoundbook + thirdbookPages * numOfThirdbook;
    return totalPageRequre;
}

console.log('total page', pageRequirements(5, 2, 1));
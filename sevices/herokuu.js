const HTTP = require("http");

const wakeUpDyno = (url, interval) => {
    setTimeout(() => { 

        try { 
            HTTP.get(url, () => {
                console.log(`Making HTTP request to ${url}...`)
            });
        }
        catch (err) {
            console.log(`Error fetching ${url}`);
        }
        finally {
            wakeUpDyno(url, interval);
        }

    }, interval);
};

module.exports = wakeUpDyno
import EasyList from "./Classes/easyList";

function main() {
    console.log('EasyList v0.0.0');

    const easyList = new EasyList({
        anchor: 'autocomplete',
        // endpoint: simpleArray,
        endpoint:{
            targetJSON: 'countries.json',
            needle: 'name'
        },
        // endpoint:{
        //     targetURL: `http://192.168.25.20/countries`,
        //     needle: 'name'
        // },
        listMax: 5,
        highlight: true,
    });

}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}

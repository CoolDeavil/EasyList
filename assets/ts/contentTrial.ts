import EasyList from "./Classes/easyList";
import Content from "./Classes/content";

function main() {
    console.log('Content v0.0.0');


    const c = new Content({
        anchor: document.querySelector('.canvas')
    });

    let list = document.createElement('ul');
    list.className = 'eList';
    for(let i=0;i<20;i++){
        let item = document.createElement('li');
        item.className ='eItem';
        item.innerHTML = `<div> Autocomplete result ${i+1} </div>`;
        list.appendChild(item);
    }

    console.log(list);
    c.load(list);

    document.querySelectorAll('.btn').forEach((btn:any)=>{

        btn.addEventListener('click', (e:Event)=>{
            e.preventDefault();
            switch ((e.target as HTMLElement).dataset.action) {
                case 'prev':
                    c.previous();
                    break;
                case 'next':
                    c.next();
                    break;
                default:
                    break;

            }
        }, false);
    })


}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}

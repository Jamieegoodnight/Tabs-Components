
class Tablink {
    constructor(x){
    this.x=x;
    this.data=this.x.dataset.tab;
    this.tabItem=document.querySelector(`.tabs-item[data-set]='${this.data}'`);
    this.tabItem=new TabItem(this.tabItem);
    this.x.addEventListener('click', () => this.select());
    }
    select(){
        const links=document.querySelectorAll('.tabs-link');
        links.forEach(x=>x.classList.remove('tabs-item-selected'));
        this.x.classList.add('tabs-item-selected');
        this.x.display();
    }
}

class TabItem {
    constructor(x){
        this.x=x;
    }
    display(){
        const items=document.querySelectorAll('tabs-item');
        items.forEach(x=>x.classList.remove('tabs-item-selected'));
        this.x.classList.add('tabs-item-selected');
    }
}








const links=document.querySelector('tabs-link');
links.forEach(x => new Tablink(x));
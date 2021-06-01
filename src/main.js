function buttonClick(text) {
    window.alert(text);
    console.log(text);
}

class YouTube {
    constructor(){
        this.name = 'YouTube';
        this.button_id = '';
        this.text_box_id = '';
    }
}

class Discord {
    constructor(){
        this.name = 'Discord';
        this.button_id = '';
        this.text_box_id = '';
    }
}

class NonMatchClass {
    constructor(){
        this.name = 'NotMatch';
        this.button_id = '';
        this.text_box_id = '';
    }
}

// add some class.

function checkSite() {
    console.log(location.hostname);
    var hostname = location.hostname;
    console.log(hostname);
    if(hostname == 'www.youtube.com') {
        console.log('This is YouTube');
        return new YouTube()
    } else {
        console.log('対応していません');
        return new NonMatchClass();
    }
}

let site = checkSite();
console.log(site.name);

var site_name = document.getElementById('aaaa');
console.log(site_name);
site_name.innerText = site.name;

// var button_id = site.button_id;
// let button = document.getElementById(button_id);
// button.onclick = ButtonClick('function JavaScript!!!');

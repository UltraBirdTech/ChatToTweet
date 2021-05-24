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

// add some class.

function checkSite() {
    console.log(location.hostname);
    var hostname = location.hostname;
    console.log(hostname);
    if(hostname == 'www.youtube.com') {
        console.log('This is YouTube')
        return YouTube()
    } else {
        console.log('対応していません')
    }
}

let site = checkSite();
console.log(site.name);

//let button = document.getElementById('');
//button.onclick = ButtonClick('function JavaScript!!!');

function changeMode(size,weight,transform,background,color) {
    return () => {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.transform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}


function main() {
    let spooky =changeMode(9,'bold','uppercase','pink','green');
    let darkMode = changeMode(12,'bold','capitalize','black','white');
    let screamMode = changeMode(12,'normal','lowercase','white','black');

    let text_p = document.createElement('p');
    text_p.textContent = "Welcome Holberton!";
    // create DOM node
    let spooky_btn = document.createElement('button')
    spooky_btn.textContent = 'Spooky'
    let Dark_mode_btn = document.createElement('button')
    Dark_mode_btn.textContent = "Dark mode"
    let Scream_mode_btn = document.createElement('button');
    Scream_mode_btn.textContent = 'Scream mode'
    let features = [text_p,spooky_btn,Dark_mode_btn,Scream_mode_btn];
    for (let i = 0; i < features.length;i++) {
        document.body.appendChild(features[i]);
    };
    let btn_to_handle = [spooky_btn,Dark_mode_btn,Scream_mode_btn]
    
    btn_to_handle.forEach((e) => {
        e.addEventListener('click',() => {
            //passing args to change mode from main function (closure mechanism)
            if(e.textContent === 'Spooky') {
                spooky();
            }else if(e.textContent === 'Dark mode') {
                darkMode()
            }else {
                screamMode()
            }
        })
    })
}

main()
function addCMD(){
    var key = document.getElementById("key");
    var strKey = key.options[key.selectedIndex].value;
    var weapon = document.getElementById("weapon");
    var strWeapon = weapon.options[weapon.selectedIndex].value;
    var scriptbox = document.getElementById("script");
    var nades = "";
    var he = document.getElementById("he");
    var flash = document.getElementById("flashbang");
    var doubleflash = document.getElementById("doubleflash");
    var smoke = document.getElementById("smoke");
    var ammo = "";
    var prim = document.getElementById("primammo");
    var sec = document.getElementById("secammo");
    if(he.checked)
        nades = nades + ";buy hegrenade";
    if(flash.checked){
        nades = nades + ";buy flashbang";
        if(doubleflash.checked)
            nades = nades + ";buy flashbang";
        }
    if(smoke.checked)
        nades = nades + ";buy smokegrenade";
    if(prim.checked)
        ammo = ammo + ";buy primammo";
    if(secammo.checked)
        ammo = ammo + ";buy secammo";

    scriptbox.value = scriptbox.value + "bind \"" + strKey + "\" \"" + strWeapon + nades + ammo + "\"\n"; 
}
function downloadScript(){
    //js download code
    var data = document.getElementById("script").value;
    var txtBlob = new Blob([data], {type:'text/plain'});
    var saveAs = "buyscript.cfg";
    var dLink = document.createElement("a");
    dLink.download = saveAs;
    dLink.innerHTML = "Download Link";
    dLink.href = window.URL.createObjectURL(txtBlob);
    dLink.onclick = destroyClickedElement;
    dLink.style.display = "none";
    document.body.appendChild(dLink);
    dLink.click();
}
function destroyClickedElement(event){
    document.body.removeChild(event.target);
}


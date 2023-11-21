function openmanu() {

    if( document.getElementById("line1").style.rotate != "45deg"){

        document.getElementById("mb_menu").style.right = "0px";


        document.getElementById("line1").style.rotate = "45deg";
        document.getElementById("line1").style.translate = "0";
        document.getElementById("line1").style.top = "10px";
        document.getElementById("line2").style.rotate = "-45deg";
        document.getElementById("line2").style.translate = "0";
        document.getElementById("line2").style.bottom = "15px";
}else{

        document.getElementById("mb_menu").style.right = "-45%";

        document.getElementById("line1").style.rotate = "0deg";
        document.getElementById("line1").style.translate = "0";
        document.getElementById("line1").style.top = "0px";
        document.getElementById("line2").style.rotate = "0deg";
        document.getElementById("line2").style.translate = "0";
        document.getElementById("line2").style.bottom = "0px";

}
    }

function next(){

    if(document.getElementById("item_slide").style.left != '-100%') {
        document.getElementById("item_slide").style.left = '-100%';
    }else{
        document.getElementById("item_slide").style.left = '0%';
    }

    

}

function previous() {

    if(document.getElementById("item_slide").style.left != '0%') {
    document.getElementById("item_slide").style.left = '0%';
    }else{
        document.getElementById("item_slide").style.left = '-100%';
    }

}

    
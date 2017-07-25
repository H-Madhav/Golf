var i, tabcontent, tablinks, defaultOpen, viewImg, imgModal, close;

tabcontent = document.getElementsByClassName("howTo");
tablinks = document.getElementsByClassName("tab");
defaultOpen = document.getElementById("defaultOpen");
viewImg = document.getElementById('viewImg');
imgModal = document.getElementById('imgModal');
close = document.getElementById("close");

function openLearn(evt, task){

	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    };
    document.getElementById(task).style.display = "flex";
    evt.currentTarget.className += " active";
};


if (defaultOpen) {
    defaultOpen.click();
};

viewImg.onclick = function(){
    imgModal.style.height = "100%";
};

close.onclick = function(){
    imgModal.style.height = "0";
};

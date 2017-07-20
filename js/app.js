function openLearn(evt, task){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("howTo");
	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(task).style.display = "flex";
    evt.currentTarget.className += " active";
};

document.getElementById("defaultOpen").click();
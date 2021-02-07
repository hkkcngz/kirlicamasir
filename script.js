function arastir(str) {

    if (str.length == 0) {
        document.getElementById("camasirListesi").innerHTML = "";
        document.getElementById("camasirListesi").style.display = "none";
        return;
    } else {

        ////// filter
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("arama");
        filter = input.value.toUpperCase();
        ul = document.getElementById("camasirListesi");
        li = ul.getElementsByTagName("li");
        ul.style.display = "block";
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
        ////// filter

    }
}

function toggle(id) {
    var x = document.getElementById(id);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function ekle() {
    var camasirList, entry, listItem, aciklama, link, etiket;
    camasirList = document.getElementById('camasirListesi');

    makeLink = document.createElement('a');
    makeTag  = document.createElement('c');
    makeListItem = document.createElement('li');

    infoName = prompt('Linkin Adı', 'Altın Gün - Caney');
    infoTag  = prompt('Etiket', 'youtube, ders, komik...');
    infoLink = prompt('Link', '#');

    makeLink.appendChild(document.createTextNode(infoName));
    makeTag.appendChild(document.createTextNode(infoTag));
    makeLink.setAttribute('href', infoLink);
    
    makeLink.appendChild(makeTag);
    makeListItem.appendChild(makeLink);
    camasirList.appendChild(makeListItem);
}
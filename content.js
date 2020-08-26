var elements = document.getElementsByTagName('*');
var subWords = [
    ["Krishin Wadhwani", "Inferior candidate for secretary"], // Note the quotes around "10%"
    ["Julian Weng", "Julian(the only qualified candidate for secretary)"],
    ["Taha", "Julian's loyal voter"],
    ["Brian", "Julian's loyal voter"],
    ["Gary", "Julian's loyal voter"],
    ["Adam", "Julian's loyal voter"],
    ["James", "Julian's loyal voter"],
    ["Hey All", "Hello sheep who are going to vote for me"],
    ["secretary", "Julian's natural position"],
    ["video", "electoral gimmick"],
    ["https://docs.google.com/…/1-4U_AitYgkcMXPJxuNL0c4y6RQl…/edit", "joebiden.com/join"],
    // etc..
];
setTimeout(dewit,200);
function dewit() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node1 = element.childNodes[j];
            replaceText(node1);
            replacePhotos(node1);
            for (var k = 0; k < node1.childNodes.length; k++) {
                var node2 = node1.childNodes[k];
                replacePhotos(node2);
            }
        }
    }
    setTimeout(second,2000);
}
function second(){
    elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node1 = element.childNodes[j];
            replaceVideo(node1);
            for (var k = 0; k < node1.childNodes.length; k++) {
                var node2 = node1.childNodes[k];
                replaceVideo(node2);
            }
        }
    }
}
function replaceText(node) {
    if (node.nodeType === 3) {
        for (var p = 0; p < subWords.length; p++) {
            var text = node.nodeValue
            var replacedText = text.replace(subWords[p][0], subWords[p][1]);
            if (text != replacedText) {
                node.replaceWith(document.createTextNode(replacedText));
            }
        }
    }
}

function replacePhotos(node) {
    if (node.nodeType == 1) {
        if (node.tagName == 'IMG') {
            var ran = Math.random();
            if (ran < 0.33) {
                node.src = "https://i.imgur.com/BG6kH5N.png" //Vote Julian for secretary
            } else if (ran < 0.66) {
                node.src = "https://i.imgur.com/603QDmk.png" //Biden
            } else {
                node.src = "https://i.imgur.com/NwIWnZq.png" //he'll get jobs back
            }
        } 
    }
}
function replaceVideo(node){
    if (node.tagName == "VIDEO") {
        node.src = "https://ia601602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.ogv"
        console.log(node.className);
    }
}
function loopThroughTrickies(){
    for (var i = 0; i < trickies.length; i++) {
        var node = trickies[i];
        console.log(node.src);
        node.src = "https://ia601602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.ogv"
    }
}
// for (var l = 0; l < node2.childNodes.length; l++) {
//     var node = node2.childNodes[l];
//     replaceMedia(node);
//     for (var z = 0; z < node.childNodes.length; z++) {
//         var nodez = node.childNodes[z];
//         replaceMedia(nodez);
//         for (var x = 0; x < nodez.childNodes.length; x++) {
//             var nodex = nodez.childNodes[x];
//             replaceMedia(nodex);
//         }
//     }
// }
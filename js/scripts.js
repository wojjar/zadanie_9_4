//small Tree
function drawSmallTree(h) {
    for (var i=1; i<=h; i++) {
        var star = " ";
        for (var j=0; j<=i-1; j++) {
             star += "*";  
        }
    console.log(star);
    }
};
drawSmallTree(5);

// Tree
function drawTree(h) {
    for (var i=1; i<=h; i++) {
        var star =" ";
        for (var j=1; j<=h-i; j++) {
             star +=" "; 
        }
        for (var j=1; j<=2*i-1; j++) {
            star += "*";  
       }
    console.log(star);
    }
};
drawTree(5);
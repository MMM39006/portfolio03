var n = 0;
function postFunction(){
    var Text = document.getElementById("text1").value;
    n++;
    if(n == 1){
        document.getElementById("topic1").value = Text;
        document.getElementById("topic1").innerHTML = Text;
    }
    if(n == 2){
        document.getElementById("comment1").value = Text;
        document.getElementById("comment1").innerHTML = Text;
    }
    if(n == 3){
        document.getElementById("comment2").value = Text;
        document.getElementById("comment2").innerHTML = Text;
    }
    if(n >= 4){
        alert("เกินปุยมุ้ย");
    }
    console.log(n);
}

function clearFunction(){
    n = 0;
    ClearTextInput();
    ClearTopic1();
    ClearComment1();
    ClearComment2();
}

function ClearTextInput(){
    document.getElementById("text1").value = null;
    document.getElementById("text1").innerHTML = null;
}

function ClearTopic1(){
    document.getElementById("topic1").value = null;
    document.getElementById("topic1").innerHTML = null;
}

function ClearComment1(){
    document.getElementById("comment1").value = null;
    document.getElementById("comment1").innerHTML = null;
}

function ClearComment2(){
    document.getElementById("comment2").value = null;
    document.getElementById("comment2").innerHTML = null;
}

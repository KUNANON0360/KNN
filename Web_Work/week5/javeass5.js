var topic1 = document.getElementById("topic1");
var comment1 = document.getElementById("comment1");
var comment2 = document.getElementById("comment2");

topic1 = 0;
comment1 = 0;
comment2 = 0;
alert("มีอะไรที่อยากพิมพ์ไหม");
function postFunction() { 
    
    var text1 = document.getElementById("text1").value
    if (topic1 == 0) 
    {
        document.getElementById("topic1").innerText = text1
        topic1 = text1
        alert("ส่งข้อความแล้ว ต้องการส่งใหม่หรือไม่ ? ");
    }
    else if (comment1 == 0) 
    {
        document.getElementById("comment1").innerText = text1
        comment1 = text1
       alert("ส่งข้อความแล้ว ต้องการส่งใหม่ครั้งที่ 2 หรือไม่ ?");
    }
    else if (comment2 == 0) 
    {
        document.getElementById("comment2").innerText = text1
        comment2 = text1
        alert("ส่งข้อความแล้ว ต้องการส่งใหม่ครั้งสุดท้ายหรือไม่ ?");
    }
}

function clearFunction() 
{ 
    alert("ลบข้อความให้กลายเป็นอดีตแล้ว...");
    topic1 = 0;
    comment1 = 0;
    comment2 = 0;
    document.getElementById("topic1").innerText = "";
    document.getElementById("comment1").innerText = "";
    document.getElementById("comment2").innerText = "";
    document.getElementById("text1").value = "";
}



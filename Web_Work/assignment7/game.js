window.onload = pageLoad;

function pageLoad(){
	// สร้างตัวแปรเก็บปุ่ม start จาก id ไว้เพื่อเรียก function startGame
	var startButton = document.getElementById("start");

	//คำสั่งเรียก function เมื่อ Click ปุ่มนี้ จากตัวแปรที่เราตั้งไว้
	startButton.onclick = startGame
}

function startGame(){
	alert("Game Start");

	//Call this 2 Function
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*30; 
	var x = document.getElementById('clock'); //ตัวแปรไว้สำหรับโชว์เวลา

	//setting timer using "setInterval" function
	timer = setInterval(timeCount, TIMER_TICK); // => setInterval(ชื่อฟังก์ชั่นที่จะให้มันทำ , เวลาในหน่วย ms แต่จารเค้ากำหนดให้แล้วคือ TIMER_TICK)
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		console.log(allbox.length);
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		second = second - 1;//ลดเวลา 1 วิ
		x.innerHTML =second; //โชว์เวลา

		// ถ้า" ไม่มีกล่องเหลือแล้ว และ เวลายังเหลืออยู่จะขึ้นว่า You win!" และทำการ clear screen และหยุดการทำงานของ setInterval
		if(allbox.length == 0 && second > 0 ){ 	// .length สำหรับบอกว่า กล่องมีอยู่กี่กล่อง
			//โชว์ว่า You win
			alert("Mission Success ! ");

			//clearInterval(ชื่อตัวแปรที่ทำ setInterval อยู่) เพื่อสั่งให้หยุดการทำงานของ setInterval
			clearInterval(timer);
		}

		// ถ้า "ยังมีกล่องเหลืออยู่ และ เวลาหมด จะบอกว่า Game over" และทำการ clear screen และหยุดการทำงานของ setInterval
		else if(allbox.length > 0 && second == 0 ){
			//โชว์ว่า You lose
			alert("Mission Failed !");

			//clearInterval(ชื่อตัวแปรที่ทำ setInterval อยู่) เพื่อสั่งให้หยุดการทำงานของ setInterval
			clearInterval(timer);

			//ทำเรียก function clear screen 
			clearScreen();
		}
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่   
	var numbox = document.getElementById("numbox").value; //ตัวแปรเก็บค่า numbox จาก id ****อย่าลืม  .value จากการดึงข้อมูลมาจาก input
	var gameLayer = document.getElementById("game-layer"); //ตัวแปรที่อยู๋ของ game-layer (สี่เหลี่ยม) จาก id
	var colorDrop = document.getElementById("color").value; //ตัวแปรเก็บสีที่เลือก    ****อย่าลืม  .value จากการดึงข้อมูลมาจาก input
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div"); //ไว้สร้าง tag ขึ้นมา (createElement)
		tempbox.className = "square"; //สร้าง class สำหรับตกแต่งกล่อง (จารกำหนดเป็น square) ใน div ที่เพิ่งสร้างไว้ ในตัวแปร tempbox
		tempbox.id = "box"+i;

		//random กล่องว่าจะวางตรงไหน
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";

		//add style color จากค่าที่เราเก็บค่าสีไว้ (baclground Color)
		tempbox.style.backgroundColor = colorDrop

		//add element to HTML node ด้วยการใช้ appendChild() มันจะไปใส่ tempbox เพิ่มลงใน html
		gameLayer.appendChild(tempbox); 

		//function สำหรับลบกล่องเมื่อเรา click
		bindBox(tempbox);
	}
}

function bindBox(box){ 	// box = tempbox
	//สร้างตัวแปรที่เก็บกล่องทั้งหมด
	var gameLayer = document.getElementById("game-layer");

	//เมื่อกดแล้ว กล่องจะหายไป ด้วยการใช้ removeChild()  มันจะไปลบ tempbox ใน html
	box.onclick = function(){
		gameLayer.removeChild(box) 
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var gameLayer = document.getElementById("game-layer"); //ตัวสี่เหลี่ยม
	var allbox = document.querySelectorAll("#game-layer div"); //div ที่ได้จาก tempbox

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		gameLayer.removeChild(allbox[i]) //[i] ลบ (removeChild) div ตั้งแต่ตัวแรกถึงตัวสุดท้าย หรือ ตัวที่หลือใน game Layer

	}
}
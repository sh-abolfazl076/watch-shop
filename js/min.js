// let slideIndex=1;


// //اسلایدر
// function setSlide(input,index){
//     slideIndex=index;
//     let item=document.querySelector(`#${input}`)
//     let slides=[...document.querySelector('.slide').children ];
//         slides.forEach((element)=>{
//         element.classList.remove('active')
//     } ),
//     item.classList.add('active');
// }

// setInterval(()=>{
//     slideIndex +=1;
//     if (slideIndex==3){
//         slideIndex=1;
//     }
//     setSlide(`slide${slideIndex}`,slideIndex)
// },5000)

function setClike(){

    // document.querySelector(".btn-shop").addEventListener('click', (e) => {
    //         console.log("title") 
    //     })
    // let a = document.children
    // let newImg = $(this).siblings("img").attr("src");
    // console.log(a)
    // let newImg = $(".btn-shop").siblings("img").attr("src");
    // console.log(newImg)
}



function shop(){
    
    let title =document.querySelectorAll('.btn-shop')
    console.log(title) 

    // title.addEventListener('click', (e) => {
    //             console.log("t") 
    // })
    // title.forEach((element)=>{
    //     console.log(title)
    // } ),
    
    $(".btn-shop").click(function ali1(){
        console.log('a')
        let newi = 2;
        let newImg = $(this).siblings("img").attr("src");
        // let newTitle = $(this).siblings("a").children("span").text();
        // let newTitle2 = $(this).siblings("span").text();
        return newi
    })
    let a = ali1()
    
    const now = new click()
    console.log(now)
    
    // function ali2(){
    //     console.log('as')
    //     let newImg = 22;
    //     // let newTitle = $(this).siblings("a").children("span").text();
    //     // let newTitle2 = $(this).siblings("span").text();
    //     return newImg
    // }

    // let a = ali2()
    // // let b  = ali2[newImg]
    // console.log(a)

    
    // function shop2(){
    //     const x = document.querySelector(".shop-sec")
    //     x.id="font";
    //     console.log(x)
    
    // }
    // shop2()
}

shop()

// var oForm = document.forms[0] ; // get the first form
// var oOtherForm = document.forms["formZ"] ; // get the form whose name
// console.log(oForm)

// let a = new shop(this.newImg)





// //
// document.querySelector("#sec-card-2").addEventListener("mouseenter", (e) => {
//     document.querySelector("#img-card").src="img/main-sec-card-1.png"
//     console.log("a")
// })
// document.querySelector("#sec-card-2").addEventListener("mouseleave", (e) => {
//     document.querySelector("#img-card").src="img/main-sec2-card1.png"
// })
// //
// //
// document.querySelector("#sec-card-3").addEventListener("mouseenter", (e) => {
//     console.log("s")
//     document.querySelector("#img-card2").src="img/main-sec-card-2.png"
// })
// document.querySelector("#sec-card-3").addEventListener("mouseleave", (e) => {
//     document.querySelector("#img-card2").src="img/main-sec2-card2.png"
// })
// //
// //
// document.querySelector("#sec-card-4").addEventListener("mouseenter", (e) => {

//     document.querySelector("#img-card3").src="img/main-sec-card-3.png"
// })
// document.querySelector("#sec-card-4").addEventListener("mouseleave", (e) => {
//     document.querySelector("#img-card3").src="img/main-sec2-card3.png"
// })
// //
// //
// document.querySelector("#sec-card-5").addEventListener("mouseenter", (e) => {
//     console.log("aq")
//     document.querySelector("#img-card4").src="img/main-sec-card-4.png"
// })
// document.querySelector("#sec-card-5").addEventListener("mouseleave", (e) => {
//     document.querySelector("#img-card4").src="img/main-sec2-card3.png"
// })
// //




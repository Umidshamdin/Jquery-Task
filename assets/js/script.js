$(function () {


    // let text= $("h1").text("sss")

    // console.log(text);


    // let list = $("#exam");


    // list.click(function () {
    //     console.log("sss");
    // })
    let ul = $("#list")
    let list = $("#list li")
    let btn = $("#button")

    // let count=1;
    // btn.click(function(){
    //     let newLi= $(`<li class="list-group-item">${count}</li>`);
    //     ul.prepend(newLi)
    //     count++
    // })



    // $(document).on("click","#list li",function(){
    //     console.log("sss");
    // })


    $(document).on("click","#play",function(){
        $(".box").slideToggle()
    })

    $(document).on("click", "#play", function () {
        $("p").show("slow", function () {
            alert("Salam")
        })
    })

    $(document).on("click", "#stop", function () {
        $("p").hide("slow", function () {
            alert("Sagol")
        })
    })





































})
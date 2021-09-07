AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost", ()=>{
            this.handleMarkerLost();
        })
    },
    handleMarkerFound: function(){
        var buttondiv = document.getElementById("button-div");
        buttondiv.style.display = "flex"
        var ratingButton = document.getElementById("rating_button");
        var orderButton = document.getElementById("order_button");
        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Rate Dish",
                text:"Work in progress"
            })
        })
        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for your order!!",
                text:"your order will be served soon at your table"
            })
        })
    },
    handleMarkerLost: function(){
        var buttondiv = document.getElementById("button-div");
        buttondiv.style.display = "none"
    }
})

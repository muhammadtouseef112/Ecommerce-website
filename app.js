function signup(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(name)
    console.log(email)
    console.log(password)
  if(!name || !email || !password){
    alert("please fill")
    return
  }

       var Data = []

       Data.push(name ,email , password )
       window.localStorage.setItem("Data" , JSON.stringify(Data))

    window.location.href = "./login.html"
}

function login(){
    var email2 = document.getElementById("email2").value;
    var pass2 = document.getElementById("password2").value;
      
    var getData = window.localStorage.getItem("Data")
         getData = JSON.parse(getData)
    if(getData[1] === email2 && getData[2] === pass2){
        alert("login succesfully")
          window.location.href = "home.html"
    }else{
        alert("Enter signup email & password")
    } 
}
 function order(){
     alert("Items Stored Successfully")
    var obj = [{
        ID : 1,
        Name :document.getElementById("name"),
        product : "Grocery",
        priZe : "2500 pkr",
        Role : "Customer",
        Items : ["Rice","Salt","Daal","Tomato","Chicken","Soaps"],
    }]
    console.log(obj)
    window.localStorage.setItem("products",JSON.stringify(obj) )
}
function order1(){
    alert("Items Stored Successfully")
    var obj1 = {
        ID : 2,
        Name : window.localStorage.getItem("name"),
        Product : "Wardrobe",
        Prize : "10000",
        Role : "Customer",
        Items : ["Shalwar Kameez","Coat Pant","Jeans Pant","T-shirts"]
    }
    arrays.push(obj1)
    console.log(obj1)
    window.localStorage.setItem("products" , JSON.stringify(obj1))
}
function order2(){
    alert("Items Stored Successfully")
    var obj2 = {
        ID: 3,
        Name : window.localStorage.getItem("name"),
        Product : "Books",
        Prize : "1000",
        Role : "Customer",
        Items : ["Copies","Books","Generals"]
    }
    window.localStorage.setItem("products" , JSON.stringify(obj2))
    console.log(obj2)
}
function orderhere(){
    alert("Items Stored Successfully")
    var obj4 = {
        ID: 4,
        Name : window.localStorage.getItem("name"),
        Product : "Grocery",
        Prize : "2500",
        Role : "Customer",
        Items : ["Vegetable","Oils","Rice"]
    }
    window.localStorage.setItem("products" , JSON.stringify(obj4))
    console.log(obj4)
}
function orderhere1(){
    alert("Items Stored Successfully")
    var obj5 = {
        ID: 5,
        Name : window.localStorage.getItem("name"),
        Product : "Sports",
        Prize : "10000",
        Role : "Customer",
        Items : ["Bat","Ball","Gloves","Paths","Kit"]
    }
    window.localStorage.setItem("products" , JSON.stringify(obj5))
    console.log(obj5)
}
function orderhere2(){
    alert("Items Stored Successfully")
    var obj6 = {
        ID: 6,
        Name : window.localStorage.getItem("name"),
        Product : "wardrobe",
        Prize : "5000",
        Role : "Customer",
        Items : ["Coat Pant","Shalwar Kameez","Shorts"]
    }
    window.localStorage.setItem("products" , JSON.stringify(obj6))
    console.log(obj6)
}
function orderhere3(){
    alert("Items Stored Successfully")
    var obj7 = {
        ID: 7,
        Name : window.localStorage.getItem("name"),
        Product : "Pants",
        Prize : "1000",
        Role : "Customer",
        Items : ["Jeans Pant","Cotton Pant","Denim Pant"]
    }
    window.localStorage.setItem("products" , JSON.stringify(obj7))
    console.log(obj7)
}
function orderhere4(){
    alert("Items Stored Successfully")
    var obj8 = {
        ID: 8,
        Name : window.localStorage.getItem("name"),
        Product : "trousers",
        Prize : "1500",
        Role : "Customer",
        Items : ["Addids","Nike","Puma"]
    }
    window.localStorage.setItem("products" , JSON.stringify(obj8))
    console.log(obj8)
}
function orderhere5(){
    alert("Items Stored Successfully")
    var obj9 = {
        ID: 9,
        Name : window.localStorage.getItem("name"),
        product : "T-shirts",
        Prize : "2000",
        Role : "Customer",
        Items : ["Half Slip","Full Slip","Down Shoulders"]
    }
    window.localStorage.setItem("products" , JSON.stringify(obj9))
    console.log(obj9)
}
function Navbar() {
    let navbar = document.createElement("div")
    navbar.innerHTML = `
    <!-- first navbar -->
    <div class="top">
        <div class="top-child">
            <a href="">Offers</a><a href="">Fanbook</a><a href="">
                <> Download App
            </a><a href="">TriBe Membership</a>
        </div>
        <div class="top-child">
            <a href="">Contact Us</a><a href="">Track Order</a>
        </div>
    </div>  
      
    <!-- second navbar -->

    <div class="s-sec-top">

        <div class="sec-top">

            <!-- logo -->
            <div class="sec-top-child">
                <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" class="logo">
            </div>


            <!-- men women mobile cover -->
            <div class="sec-top-child-a"> <a href="prod.html">MEN</a><a href="prod2.html">WOMEN</a><a href="mobile.html">MOBILE COVERS</a> </div>


            <!-- search,  -->
            <div class="sec-top-child-icon">
                <div class="search">
                    <i class='bx bx-search-alt-2'></i>
                    <input type="text" placeholder="Search by product, category pr colle">
                </div>


                <!-- login -->
                <div class="login" id="loginSection">
                   <a href="login.html" id="loginLink">Login</a>
                
                    <i class='bx bx-heart'></i>
                     <a href="cart.html"><i class='bx bx-shopping-bag'></i></a>
                </div>

            </div>
        </div>
    </div>



    <!-- third navbar -->

    <div class="third-top">
        
        <a href="">LIVE NOW</a>

        <a href="prod.html">MEN</a>


        <a href="prod2.html">WOMEN</a>

        <a href="accessories.html">ACCESSORIES</a>

        <a href="https://shop.bewakoof.com/pages/bewakoof-12th-birthday-bash">LIVE NOW</a>

        <a href="">HEAVY DUTY</a>

        <a href="">BEWAKOOF AIR</a>

        <a href="">OFFICIAL MERCH</a>

        <a href="">PLUS SIZE</a>

    </div>
    `
}
 export {Navbar}

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

var Selector=(e)=>document.querySelector(e);

let html = Selector(".main-main")
let logins= Selector("#nav-cta")
let logo = Selector(".logo")
let home2 =Selector(".nav-link")
let date = Selector(".date")

// date.innerText=new Date()

logins.addEventListener("click",()=>{
    setTimeout(login,1000);
});
logo.addEventListener("click",()=>{
    setTimeout(home,1000);
});
home2.addEventListener("click",()=>{
    setTimeout(home,1000);
});

function login(){
    html.innerHTML="";
    newHtml=`	<form class="box">
                    <h1>LOG IN</h1>
                    <input class="text" type="text" placeholder="username">
                    <input class="pass" type="password" placeholder="password">
                    <input class="sumbit" type="submit" value="submit">
                </form>
        `
    document.querySelector("body").style.background="#191919";
    html.insertAdjacentHTML("afterbegin",newHtml);

}

function home(){
    html.innerHTML="";
    newHtml=`
                <section class="over">
                    <div>Welcome to 9eyes</div>
                    <hr>
                    <div>your vision is our mission</div>
                </section>
                <section class="hero"></section>
                <section class="demo-content">
                    <div class="res-store">
                        <img class="res-icon" src="https://img.icons8.com/carbon-copy/100/000000/add-user-male.png"/>
                        <a href="./login/log.html"><div class="res-title">REGISTER YOUR STORE</div></a>
                    </div>
                </section>
            
                <section class="begin-adventure" id="begin-adventure">
                    <div class="">
                        <div class="adventure-grid">
                            <!-- adventure grid item #1 -->
                            <div class="adventure-grid-item grid-text">
                                <main>
                                    <h1><span>9</span> EYE </h1>
                                    <h3>Your Vision | <span>OUR MISSION</span></h3>
                                    <p>your hard-earned money is not going to take care of your eyes 9eye will! </p>
                                    <a href="#" class="btn">Apply Now</a>
                                </main>
                            </div>
                            <!-- adventure grid item #2  -->
                            <div class="adventure-grid-item">
                                <img src="./img/image3.jpg" alt="" srcset="">
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section>
                    <div class="">
                        <div class="adventure-grid last-grid">
                            <!-- adventure grid item #1 -->
                            <div class="adventure-grid-item grid-text box-1">
                                <main>
                                    <h1><span>book</span> <br> us </h1>
                                    <hr>
                                    <p>+91 *****##### </p>
                                    <a href="#" class="btn">Apply Now</a>
                                </main>
                            </div>
                            <!-- adventure grid item #2  -->
                            <div class="adventure-grid-item grid-text box-2">
                                <main>
                                    <h1><span>visit</span> <br> us </h1>
                                    <hr>
                                    <p>At your nearest 9eye </p>
                                    <a href="./login/log.html" class="btn">contact us</a>
                                </main>
                            </div>
                            <div class="adventure-grid-item grid-text box-3">
                                <main>
                                    <h1><span>tell</span> <br> us </h1>
                                    <hr>
                                    <p>rate store </p>
                                    <a href="#" class="btn">rate us</a>
                                </main>
                            </div>
                        </div>
                        
                    </div>
                </section>
            `
    document.querySelector("body").style.background="white";
    html.insertAdjacentHTML("afterbegin",newHtml);
        
}



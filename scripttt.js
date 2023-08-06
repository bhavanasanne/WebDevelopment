var emailArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";

            regTab.style.backgroundColor="rgb(12, 132, 189)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

            loginTab.style.backgroundColor="rgb(12, 132, 189)";
            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

        }


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
                
            }
            else{
                alert(email + " is already register.");
                return ;
            }
        }
    function login() {
        var email = document.getElementById("se").value;
        var password = document.getElementById("sp").value;
    
        // Check if the email and password match
        var i = emailArray.indexOf(email);
        if (i !== -1 && passwordArray[i] === password) {
            // Redirect to the next page
            window.location.href = "dashboard.html";
        } else {html {
            font-family: Noto Serif, serif;
            font-size: 10px;
            font-weight: 150;
            color: #fcf7f7;
            background: url(https://img.freepik.com/free-vector/gradient-connection-background_52683-116652.jpg)
            }
            body {
            font-size: 1.6rem;
            margin: 0 auto;
            width: 70vw;
            text-align: center;
            }
            @media (max-width: 768px) {
            body {
            width: 100vw;
            }
            }
            @media (min-width: 1200px) {
            body {
            max-width: 700px;
            }
            }
            a {
            color: #fcf6f6;
            text-decoration: none;
            }
            h1 {
            font-family: Noto Sans JP, sans-serif;
            font-size: 4rem;
            color: hsl(0, 29%, 97%);
            }
            .subtitle {
            font-family: Noto Sans JP, sans-serif;
            font-size: 2rem;
            color: #f1eeee; 
            }
            h2 {
            font-family: Noto Sans JP, sans-serif;
            font-size: 2.8rem;
            margin: 50px 0 25px 0;
            text-align: center;
            }
            h3 {
            font-family: Noto Sans JP, sans-serif;
            font-size: 2rem;
            font-weight: 600;
            margin: 40px 0 5px 0;
            color: rgb(245, 239, 239);
            }
            section {
            text-align: left;
            }
            #image {
            display: block;
            max-width: 50%;
            height: auto;
            margin: 0 auto;
            border-radius: 25px;
            }
            #img-caption {
            font-family: Noto Sans JP, sans-serif;
            margin-top: 20px;
            }
            
            
            blockquote {
            font-family: Special Elite, sans-serif;
            font-size: 2.25rem;
            background-color: #f7f3f3d0;
            margin: 30px 3% 0 3%;
            padding: 10px 0% 20px 0%;
            max-width: auto;
            height: auto;
            border-radius: 25px;
            background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0IBwcHCAgHBwcHBxYHBwcHBw8ICQcKIBEWIiARExMYKCggGCYlGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDisZFRk3KysrLS0rKystKysrKysrKysrKysrKystKysrKysrKystKysrKysrKysrKysrKysrK//AABEIALMBGQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQT/xAAWEAEBAQAAAAAAAAAAAAAAAAAAEQH/xAAZAQEBAQEBAQAAAAAAAAAAAAABAAIFBAP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8Aoo+74goGoBFBiKKCiioxFAGAoDBQTUBQGAKDAFRiKoDAFBiKCagKsBiLBQYigjAUBjAor1OdEiioooAwUAYCgMBRGAoGoAoMRRUYiigxFAGCgjAUgagRQGAojAFBgCgosURjAKPU50BQGAKjEVQGAKDAFBiKCagooKKAMBRGAKDEWLAGAomoAoMRRQYiioxFAGAoDGEFetzoiigxFFBiKCMBQGAoGhQBgCowBQYikVGJFFBgCgxFBNQFigooAwFAYCiMBYAsCivU50RQRgKAwFAYCiMAUNRFBGCkUGJFFBiKAMBRGAsA0RQBgKIwBQYiigkBQYgojGEFepzoAqMBQGAKDEUE1AVYDEWADBQRgKAwBYDAUBgCpqIooMRRQUUEYCgMBQNQFFUwKK9TnRFAGAojAFgMCKBqAojAFBgCwGIsURgCgxFANQFVFFAGAoDAUBgKKmAoDAFDUYBR63NgCgxFiwBgKJqAKDEUWAxFgqMRQBgoAwFE1AUBgCgwBUYiiggoDAFRiKEDUBQFgUivW5sICgxFAGCgmoCxQUUAYCgMBRGAoCAoMRRU1EUUGIooMRQRgKAwIsA0CiMAUGMCg9TmwFEYCwBIoBqAKjAFBiKKCAoMRRU1EUUGIooMRQRgKAwCKiQFBAUNRFAGAsVGMARXqc0FAYAqaiKKDEUUFFBGCgDAUDUBREFAYAoMAWIxIooKKKDEUE1AWKDEigDAUBjCA9bmCgmgAFQAVABFBNCgCoAKgImKAIKIgAKgBpQARcBFQARQBAEX/9k=)
            }
            cite {
            font-family: Noto Sans JP, sans-serif;
            font-size: 1.6rem;
            }
            
            
            .source-image {
            width: 200px;
            height: 100px;
            border-radius: 15px;
            background-color: rgb(245, 241, 241);
            margin: 0 10px 50px 10px;
            }
            .lift-animation {
            box-shadow: 0 1px 2px #f0eeeebd;
            -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            margin-bottom: 30px;
            }
            .lift-animation::after {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 15px 15px #f7f5f5a4; opacity: 0;
            -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            }
            .lift-animation:hover {
            box-shadow: 15px 15px 15px rgba(252, 248, 248, 0.808);
            -webkit-transform: scale(1.03, 1.03);
            transform: scale(1.03, 1.03);
            }
            .lift-animation:hover::after {
            opacity: 1;
            }
            
            alert("Invalid credentials. Please try again.");
        }
    }
        function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }

            alert("email is send to your email check it in 24hr. \n Thanks");
            document.getElementById("fe").value ="";
        }
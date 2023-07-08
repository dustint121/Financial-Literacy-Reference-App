class SideMenu extends HTMLElement {
    constructor() {
      super();
    }
  
  

  connectedCallback() {
    this.innerHTML = `
        <style>
            .sidenav a, .dropdown-btn {
                padding: 6px 8px 6px 16px;
                text-decoration: none;
                font-size: 20px;
                color: #818181;
                display: block;
                border: none;
                background: none;
                width: 100%;
                text-align: left;
                cursor: pointer;
                outline: none;
            }
          .sidenav a:hover, .dropdown-btn:hover {
            color: #f1f1f1;
          }    
          .dropdown-container {
            display: none;
            background-color: #262626;
            padding-left: 8px;
          } 
          .fa-caret-down {
            float: right;
            padding-right: 8px;
          }
          .content {
            display: none;
          }
        </style>

        <div class="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
                <button class="dropdown-btn">Dropdown <i class="fa fa-caret-down"></i>   </button>
                <div class="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            <a href="#contact">Search</a>
        </div>
        <script>
            console.log("hi");
            var dropdown = document.getElementsByClassName("dropdown-btn");
            var i; 
            for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                } else {
                dropdownContent.style.display = "block";
                }
            });
            }
        </script>
        `;
    }


}


  customElements.define('side-menu', SideMenu);
  
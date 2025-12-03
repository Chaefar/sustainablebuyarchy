// document.querySelector(".tab").addEventListener("click", function () {
//     console.log("Tab Clicked")
//     if (this.checked){
//         document.querySelector("").style.display = "block"
//     }else{
//         document.querySelector("").style.display = "none"
//     }
// });

document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');

                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
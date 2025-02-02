// scroll button functionality
window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById("scrollBtn").style.display = "block";
            } else {
                document.getElementById("scrollBtn").style.display = "none";
            }
        }

        function scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

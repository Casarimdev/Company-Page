let text = document.getElementById("elementEl")
            

        function typeWriter(el) {
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';
            textArray.forEach((letter, i) =>
                setTimeout(() => (el.innerHTML += letter), 95 * i)
            );

            text.style.content = "" 

            // setInterval(() => typeWriter(el), 8000);

        }
        
        typeWriter(text);    
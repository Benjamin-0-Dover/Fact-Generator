var facts = ["", "",]// <====Facts go here inside the ""
            function newFact() {
                const fact = returnFact()
                
                document.getElementById('fact').innerText = fact;
            }

            function returnFact() {
                var fact = facts[Math.floor(Math.random() * facts.length)];

                return fact;
            } 

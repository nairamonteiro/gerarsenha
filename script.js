        const senhaCaixa = document.getElementById("password");
        const comprimento = 12;
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const numeros = "0123456789";
        const simbolos = "!@#$%^&*()-_=+[{]}\\|;:,<.>/?";
        const todos = upperCase + lowerCase + numeros + simbolos;

        function criarPassword() {
            let password = "";
            for (let i = 0; i < comprimento; i++) {
                let aleatorio = Math.floor(Math.random() * 4);
                switch (aleatorio) {
                    case 0:
                        password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
                        break;
                    case 1:
                        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
                        break;
                    case 2:
                        password += numeros.charAt(Math.floor(Math.random() * numeros.length));
                        break;
                    case 3:
                        password += simbolos.charAt(Math.floor(Math.random() * simbolos.length));
                        break;
                }
            }
            senhaCaixa.value = password;
        }

    function copiarPassword(){
        senhaCaixa.select();
        navigator.clipboard.writeText(senhaCaixa.value);
        alert("Senha copiada para a área de transferência!");
    }
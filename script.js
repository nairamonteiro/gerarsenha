//variavéis
    const passwordBox = document.getElementById("password");
    const length = 12;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[{]}\\|;:\,<.>/?";
    const allChars = upperCase + lowerCase + numbers + symbols;

//funções
//criação de senha
    function createPassword(){
        let password = "";
                for(let i = 0; i < length; i++){
                    let randomNumber = Math.floor(Math.random() * 4);
                    switch(randomNumber){
                        case 0:
                            password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
                            break;
                        case 1:
                            password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
                            break;
                        case 2:
                            password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                            break;
                        case 3:
                            password += symbols.charAt(Math.floor(Math.random() * symbols.length));
                            break;
                    }
                }
                passwordBox.value = password;

                while (length > password.length){
                    passwordBox.value += allChars.charAt(Math.floor(Math.random() * allChars.length));
                }
    }

//copiar senha
    function copyPassword(){
        passwordBox.select();
        navigator.clipboard.writeText(passwordBox.value);
    }
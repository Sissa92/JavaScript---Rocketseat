//1º Exercicio:
<html>
    <head>
        <title> JavaScript</title>
    </head>
    <body>    
        <script>  
            var rua = "Rua dos Pinheiros";
            var numero = 1293;
            var bairro = "Centro";
            var cidade = "São Paulo";
            var uf = "SP";

            var endereço = {
                rua: "Rua dos Pinheiros",
                numero: 1293,
                bairro: "Centro",
                cidade: "São Paulo",
                uf: "SP"
            };
            console.log("O usuario mora em " + cidade +"/" + uf +", no bairro " + bairro +", na rua " + rua + " com nº " + numero +"!" );
        </script>
    </body>
</html>
-------------------------------------------------------------------------------------
//2º Exercicio:
<html>
    <head>
        <title> JavaScript</title>
    </head>
    <body>    
        <script>  
             function pares (x, y)  {
                for (var i = x; i <= y; i++) {
                    if (i % 2 === 0) {
                    console.log(i);
                    }
                }
                };
                pares(32, 321);
        </script>
    </body>
</html>
-------------------------------------------------------------------------------------
//3º Exercicio:
<html>
    <head>
        <title> JavaScript</title>
    </head>
    <body>    
        <script>  
            function temHabilidade (skills) {
                if (skills.indexOf("Javascript") !== -1) {
                    return console.log("Tem a skill");
                } else {
                    console.log("Não tem a skill");
                    }
                };
            var skills = ["Javascript", "ReactJS", "React Native"];
            temHabilidade(skills);
        </script>
    </body>
</html>
--------------------------------------------------------------------------------------
//4º Exercicio:
<html>
    <head>
        <title> JavaScript</title>
        <meta charset="UTF-8">
    </head>
    <body>    
        <script>  
            function experiencia(ano) {
                switch (true){
                    case idade >= 0 && idade <= 1:
                        console.log(" Você tem " + idade + " anos de experiência : Iniciante! "); 
                    break;
                    case idade >= 1 && idade <= 3:
                        console.log(" Você tem " + idade + " anos de experiência : Intermediário! "); 
                    break;
                    case idade >= 3 && idade <= 6:
                        console.log(" Você tem " + idade + " anos de experiência : Avançado! "); 
                    break;
                    default: 
                    console.log(" Você tem " + idade + " anos de experiência : Jedi Master! ");
                    break;
                }
            };
            var idade = 4;
            experiencia(idade);

// experiencia(1);
           // experiencia(4);
           // experiencia(5);
           // experiencia(8);
 
            // De 0-1 ano: Iniciante
            // De 1-3 anos: Intermediário
            // De 3-6 anos: Avançado
            // De 7 acima: Jedi Master
        </script>
    </body>
</html>


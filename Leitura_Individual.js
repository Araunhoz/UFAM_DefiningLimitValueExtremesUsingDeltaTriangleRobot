
    //fs.readFile(caminho_novo_novo, 'utf8' ,function(err, data){  
    //  if(err){
    //  return console.log("Erro ao ler arquivo");
    //}   
    


    var shell = require('shelljs');
    var select = require('xpath.js')
    , dom = require('xmldom').DOMParser
    var fs = require("fs");
    //var o =-32;
    //var p = 6;
    var z= -155;
    //var par_x =-32;
    //var par_y= 6;
    //var p =6;
    //for (var y = 20; y > -21; y--) {  
        //for (var x = -33; x < 26; x++) {
    for (var x = -33; x < 26; x++) {  
        for (var y = 20; y > -21; y--) {                   
            var caminho = 'C:\\Windows\\Temp\\Dump\\window_dump';
            var caminho_novo = caminho.concat('_coord ',x.toString());
            var caminho_novo_novo = caminho_novo.concat(',',y.toString()); 
            console.log(caminho_novo_novo);
            //console.log("Fora: ",x,y)
            var data= fs.readFileSync(caminho_novo_novo, 'utf8');              
            
                var doc = new dom().parseFromString(data)    
                var nodes = select(doc, "//node")
                function print_a(node) {
                    return {
                        "id":node.getAttribute('resource-id'),
                        "text":node.getAttribute('text'),
                    }     
                }
        
                const orderIds = nodes.map(print_a);
                const text = nodes.map(print_a);
                   
                //var choice  = text[40].text
                //var tecla;
    
                var choice = text[37].text  // x - +
                var tecla;
    
                switch(choice){
                    
                    case '+':
                        var acerto = 'S';
                        var tecla = '+';
                        shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);
                        break;
                    // case '2':
                    //     var acerto = 'S';
                    //     var tecla = '2';
                    //     shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);
                    //     break;
                    // case '3':
                    //     var acerto = 'S';
                    //     var tecla = '3';
                    //     shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);
                    //     break
                    // case '4':
                    //     var acerto = 'S';
                    //     var tecla = '4';
                    //     shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);
                    //     break
                    // case '5':
                    //     var acerto = 'S';
                    //     var tecla = '5';
                    //     shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);
                    //     break
                    // case '6':
                    //     var acerto = 'S';
                    //     var tecla = '6';
                    //     shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);
                    //     break
                    // case '7':
                    //     var acerto = 'S';
                    //     tecla ='7';
                    //     shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);
                    //     break
                    // case '8':
                    //     var acerto = 'S';
                    //     var tecla = '8';
                    //     shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);
                    //     break
                    // case '9':
                    //     var acerto = 'S';
                    //     var tecla = '9';
                    //     shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);                    
                    //     break                                 
                    default:
                         var acerto = 'F';
                         var tecla = '+';
                         shell.exec('python ola.py ' +tecla + ' ' + x +' '+ y +' ' + z +' ' + acerto);  
    
                        
                             
                     }    
        }
    }
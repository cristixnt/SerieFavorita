var temporadas = [];

var temp1 = {
    id: 1,
    sinopsis: "En el pequeño y aburrido pueblo de <b>Hawkins</b>, unan noche desaparece un niño llamado Will Byers. Su madre Joyce <sub>(Winona Ryder)</sub> no descansará hasta que encuentren a su hijo. Los amigos de su hijo, Mike <sub>(Finn Wolfhard)</sub>, Dustin <sub>(Gaten Matarazzo)</sub> y Lucas <sub>(Caleb McLaughlin)</sub> salen a buscarle pero encuentran a una extraña niña <sub>(Millie Bobby Brown)</sub>. La desaparición de Will les llevará a descubrir los experimentos sobrenaturales de un laboratorio secreto del Gobierno cercano al pueblo.",
    ep: 8,
    fecha: "15/07/2016"
}
var temp2 = {
    id: 2,
    sinopsis: "En la segunda temporada, vemos <mark>Hawkins</mark> un año después de los acontecimientos de la primera temporada. Will Byers <sup>(Noah Schnapp)</sup> vuelve tras haber estado en <mark>El otro lado</mark>. La noche de Halloween, Will ve una silueta monstruosa en el cielo. Como ya nos mostraba la escena final de la anterior temporada, Will aun tiene dentro de él parte del hogar del <strong>Demogorgon</strong>. Su familia y amigos vuelven a unirse para salvarle. Dustin y Lucas conocen a Max <sup>(Sadie Sink)</sup>, una chica del colegio, que incluirán en su grupo. Aunque no están todos: Mike sigue en busca de Once <sup>(Millie Bobby Brown)</sup>.",
    ep: 9,
    fecha: "15/07/2016"
}
var temp3 = {
    id: 3,
    sinopsis: "La tercera temporada se centra en un verano <del>típico</del> en Hawkins con el grupo de amigos intentando rehacer su vida cuando un descubrimiento de Dustin en una emisión de la radio pone en peligro las vidas de todos.<br>Ahora, todos tendrán que reunir sus fuerzas para luchar contra el <b>Azotamentes</b>, cuya fuerza crece por momentos, y evitar que el mundo peligre, estando su futuro en el subsuelo.",
    ep: 8,
    fecha: "15/07/2016"
}

temporadas.push(temp1);
temporadas.push(temp2);
temporadas.push(temp3);

function verTemporada(id){
    $("#exampleModalLabel").text("Temporada "+ id)
    $.each(temporadas, function (i, temp){
        if (temp.id == id){
            $("#sinopsis").empty();
            $("#sinopsis").append("<p>"+temp.sinopsis+"</p>");
            $("#episodios").empty();
            $("#episodios").append("<p>"+temp.ep+" Episodios</p>");
        }
    });
    $("table tbody").empty();
    if(id == 1){
        var markup = "<tr><td>1</td><td>La desaparición de Will Byers</td><td>15 de julio, 2016</td><td>49 min</td></tr>";
        $("table tbody").append(markup);
        markup = "<tr><td>2</td><td>La loca de la Calle Maple</td><td>15 de julio, 2016</td><td>56 min</td></tr>";
        $("table tbody").append(markup);
        markup = "<tr><td>3</td><td>Todo está bien</td><td>15 de julio, 2016</td><td>52 min</td></tr>";
        $("table tbody").append(markup);
    } 
    
    if(id == 2){
        var markup = "<tr><td>1</td><td>MADMAX</td><td>27 de octubre, 2017</td><td>48 min</td></tr>";
        $("table tbody").append(markup);
        markup = "<tr><td>2</td><td>Dulce o truco, bicho raro</td><td>27 de octubre, 2017</td><td>56 min</td></tr>";
        $("table tbody").append(markup);
        markup = "<tr><td>3</td><td>El renacuajo</td><td>27 de octubre, 2017</td><td>51 min</td></tr>";
        $("table tbody").append(markup);
    }  

    if(id == 3){
        var markup = "<tr><td>1</td><td>¿Me Copias, Suzie?</td><td>4 de julio, 2019</td><td>51 min</td></tr>";
        $("table tbody").append(markup);
        markup = "<tr><td>2</td><td>Ratas de centro comercial</td><td>4 de julio, 2019</td><td>50 min</td></tr>";
        $("table tbody").append(markup);
        markup = "<tr><td>3</td><td>El caso de la guardavidas perdida</td><td>4 de julio, 2019</td><td>50 min</td></tr>";
        $("table tbody").append(markup);
    }  

    $("#modalCapitulos").modal('show');
}
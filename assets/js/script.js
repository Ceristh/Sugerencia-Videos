const funcionPublicaIIFE = (()=>{

    function inyectarVideo(url,id){
        var container_iframe = document.getElementById(id);
        container_iframe.innerHTML = `<iframe width="560" height="315" src=${url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

    return {
        inyectarDesdeIIFEE:
            function(url,id){
                        inyectarVideo(url,id)
            }
    }
})();

class Multimedia{    
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url;
    }
    get url(){
        return this.getUrl();
    }
        
    set url(nueva_url){
        this.setUrl(nueva_url);
    }
    setInicio(){
        console.log("Este método es para realizar un cambio en la URL del video");
    }
}

class Reproductor extends Multimedia{    
    constructor(url, id){
        super(url)
        this._id = ()=>id;
    }
    playMultimedia(){
        funcionPublicaIIFE.inyectarDesdeIIFEE(this.url, this._id());
    }
    setInicio(time){
        var nuevaURL=`${this.url}?start=${time}`
        console.log(nuevaURL);
        funcionPublicaIIFE.inyectarDesdeIIFEE(nuevaURL, this._id());
    }
}

$(function () {
    url_musica = "https://www.youtube.com/embed/9G9CPZ8Zd7k";
    url_peliculas = "https://www.youtube.com/embed/vyM9GuEE9co";
    url_series = "https://www.youtube.com/embed/XTuxnHpEqhU";

    musicaReproductor = new Reproductor (url_musica, "musica");
    peliculasReproductor = new Reproductor (url_peliculas, "peliculas");
    seriesReproductor = new Reproductor (url_series, "series");

    musicaReproductor.setInicio(50);
    peliculasReproductor.playMultimedia();
    seriesReproductor.playMultimedia();
})


//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    _image;
    _title;
    _url;

    constructor (image, title, url) {
        this._image = "./img/" + image;
        this._title = title;
        this._url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(arr); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(arr); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(arr){
        if (Carousel._sequence > arr.length - 1) {
            Carousel._sequence = 0;
        }

        this.MontaImagem(arr[Carousel._sequence]);
        Carousel._sequence++;
    }

    static MontaImagem(carousel) {
        var div = document.querySelector("#carousel");
        var img = document.createElement("img");
        var link = this.MontaLink(carousel._url);

        div.innerHTML = "";

        img.setAttribute('src', carousel._image);
        link.appendChild(img);
        div.appendChild(link);

        this.MontaTitle(carousel);
    }

    static MontaTitle(carousel) {
        var div = document.querySelector("#carousel-title");

        div.innerHTML = "";

        var link = this.MontaLink(carousel._url);
        link.textContent = carousel._title;

        div.appendChild(link);
    }

    static MontaLink(url) {
        var a = document.createElement("a");
        a.setAttribute('href', url);

        return a;
    }

    get image() {
        return this._image;
    }

    set image(image) {
        this._image = image;
    }

    get title() {
        return this._title;
    }
    
    set title(title) {
        this._title = title;
    }

    get url() {
        return this._url;
    }
    
    set url(url) {
        this._url = url;
    }


};

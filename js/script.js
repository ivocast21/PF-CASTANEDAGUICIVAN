const items = document.querySelectorAll(".item");
let imageURLs = [
    "../media/galeria-media/22.png",
    "../media/galeria-media/23.png",
    "../media/galeria-media/24.png",
    "../media/galeria-media/25.png",
    "../media/galeria-media/26.png",
    "../media/galeria-media/11.png",
    "../media/galeria-media/15.png"
];

let deviceType = "";
let events = {
    mouse: {
        start: "mouseover",
        end: "mouseout",
    },
    touch: {
        start: "touchstart",
        end: "touchend",
    },
};

const isTouchDevice = () => {
    try{
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }
    catch(e){
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice() ;

items.forEach((item,index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imageURLs[index]);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    item.appendChild(img);

        item.style.flex = "1";
        item.style.transition = "flex 0.8s ease";

        item.addEventListener(events[deviceType].start, () => {
            item.style.flex = "4";
        })
        item.addEventListener(events[deviceType].end, () => {
            item.style.flex = "1";
        })
});

// Seccion FAQS

// El JS de la seccion de los FAQS va a estar alojado en el respectivo HTMl debido a posibles errores de confusion.
import templ from "./section-template.html";  // импортируем из ./hello/hello-template
export default function section() {

    
    $("h2").css("color", "green");
    $(templ).appendTo("#hello-section")
}



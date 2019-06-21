import template from "./hello-template.html";  // импортируем из ./hello/hello-template
import $ from'jquery';

export default function sayHi() {

    $("#hello-section").append(template);

}



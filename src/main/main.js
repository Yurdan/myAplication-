
import form from "./form.html";
import cart from "./cart_template.html";

const addMain = () => {
    $(form).insertAfter($(".header-nav-row")).hide();
};

const createPostContainer = (post) => {
    const postContainer = $("<div>")
        .addClass("col-3")
        .addClass("main-post-container")
        .attr('id', 'main-post-container')
        .append(cart);

    const name = $(postContainer).find("#name");
    $(name).text(post.name);
    
    const age = $(postContainer).find("#age");
    $(age).text(post.age);

    const address =$(postContainer).find("#address");
    $(address).text(post.address);

    const learning = $(postContainer).find("#learning");
    $(learning).text(post.learning);

    const level = $(postContainer).find("#level");
    $(level).text(post.level);

    $(postContainer).appendTo("#main-cards-container");
};
const renderSections = (array) => {
    array.forEach(function (item) {
        createPostContainer(item);
    }
    )
}

export { createPostContainer, addMain, renderSections};







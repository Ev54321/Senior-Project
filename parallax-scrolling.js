window.addEventListener("scroll", function() {
    const distance = this.window.scrollY;
    this.document.querySelector("header").styletransform = `translateY(${distance * 1}px)`;
    this.document.querySelector(
        ".container"
    ).style.transform = `translateY(${distance * 0.3}px`;
    this.setTimeout(() => {
        this.document.querySelector("section h3").classList.add("animate-me");
    }, 400);
}); 
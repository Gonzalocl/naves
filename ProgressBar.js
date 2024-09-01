class ProgressBar {
    size;
    color;

    progress = 0;
    bar;

    constructor(size = 100, color = "#000064") {
        this.size = size;
        this.color = color;

        this.bar = document.createElement("div");
        this.bar.style.position = "fixed";
        this.bar.style["inset-block-end"] = 0;
        this.bar.style["inset-inline-start"] = 0;
        this.bar.style.height = 100;
        this.bar.style.width = 0;
        this.bar.style["background-color"] = this.color;
        document.body.appendChild(this.bar);
    }

    step(step = 1) {
        this.progress += step;
        this.bar.style.width = (this.progress/this.size)*100 + "%";
    }

    close() {
        document.body.removeChild(this.bar);
    }
}
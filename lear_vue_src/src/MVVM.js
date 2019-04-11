function Vue(options){
    this.data = options.data;
    var data = this.data;
    observe(data,this);
    var id = options.el;
    var dom = new Compile(document.getElementById(id),this);
    document.getElementById(id).appendChild(dom);
}
function Compile(node,vm){
    if(node){
        this.$frag = this.nodeToFragment(node,vm);
        return this.$frag;
    }
}

Compile.prototype = {
    nodeToFragment: function(node,vm){
        var self = this;
        var frag = document.createDocumentFragment();
        var child;
        while(child = node.firstChild){
            self.compileElement(child,vm);
            frag.append(child);
        }
        return frag;
    },
    compileElement:function(node,vm){
        var reg = /\{\{.*\}\}/;

        //节点类型为元素
        if(node.nodeType === 1){
            var attr = node.attributes;
            for(var i=0;i<attr.length;i++){
                if(attr[i].nodeName == 'v-mode'){
                    var name = attr[i].nodeValue;
                    node.addEventListener('input',function(e){
                        vm[name] = e.target.value;
                    });

                    new Watcher(vm,node,name,'value');
                }
            }
        }

        if(node.nodeType === 3){
            if(reg.test(node.nodeValue)){
                var name = RegExp.$1;
                name = name.trim();
                new Watcher(vm,node,name,'nodeValue')
            }
        }
    }
}
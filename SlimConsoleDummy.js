(function (con) {
    // the dummy function
    function dummy() {};
    
    for(var methods = ['error','info','log','warn'], func; func = methods.pop();) {
        con[func] = con[func] || dummy;
    }
}(window.console=window.console = {})); 
// we do this crazy little dance so that the `console` object
// inside the function is a name that can be shortened to a single
// letter by the compressor to make the compressed script as tiny
// as possible.
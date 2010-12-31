(function (con) {
    // the dummy function
    var dummy = function () {},
        // console methods that may exist
        methods = [
            'error',
            'info',
            'log',
            'warn'
        ],
        i = methods.length;
    while (i--) {
        con[methods[i]] || (con[methods[i]] = dummy);
    }
}((window.console) || (window.console = {}))); 
// we do this crazy little dance so that the `console` object
// inside the function is a name that can be shortened to a single
// letter by the compressor to make the compressed script as tiny
// as possible.
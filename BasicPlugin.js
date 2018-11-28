/**
 * Created by za-sumeng on 2018/11/26.
 */
function BasicPlugin(options){
    options = options || {};
    console.log(options);
}

BasicPlugin.prototype.apply = function ( compiler ) {
    var hooks = compiler.hooks;

    console.dir(BasicPlugin);
    hooks.watchRun.tapAsync('basic-plugin', function ( compilation, callback ) {
        console.log(callback);
        callback();
    })
};

module.exports = BasicPlugin;
/**
 * Created by za-sumeng on 2018/11/26.
 */
class FileListPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', ( compilation, callback ) => {
            var filelist = 'In this build:\n\n';

            for (var filename in compilation.assets) {
                filelist += ('- ' + filename + '\n');
            }

            compilation.assets['filelist.md'] = {
                source() {
                    return filelist;
                },
                size() {
                    return filelist.length;
                }
            };

            callback();
        })
    }
}

module.exports = FileListPlugin;
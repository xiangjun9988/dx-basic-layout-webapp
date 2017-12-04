fis.hook('relative');
fis.match('**', {
    relative: true
})
// 配置环境
fis.match('**/*.less',{
    parser:'less',
    rExt:'.css'
});
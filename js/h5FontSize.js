(function(win) {
        var doc = win.document;
        var docEl = doc.documentElement;
        var tid;

        function addStyleImportant(){//解决weui的html font-size优先级问题
                var docHtml = doc .getElementsByTagName('html')[0];
                var res = docHtml.getAttribute('style');
                var result = res.replace(/font-size[\w\W]+?px/g, function(word){
                        var nweWord = res+word+'!important;'
                        docHtml.setAttribute('style',nweWord);
                });

        }
        function refreshRem() {
                var width = docEl.getBoundingClientRect().width;
                if (width > 768) { // 最大宽度
                        width = 768;
                }
                var rem = width / 10; // 将屏幕宽度分成10份， 1份为1rem
                docEl.style.fontSize = rem + 'px';
                //解决weui的html font-size优先级问题
                addStyleImportant();
                ///rem用font-size:75px来进行换算
        }

        win.addEventListener('resize', function() {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 1);
        }, false);
        win.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                        clearTimeout(tid);
                        tid = setTimeout(refreshRem, 1);
                }
        }, false);

        refreshRem();

})(window);
var org = $("#form-iframe")
    org.onload = function () {
        //解决打开高度太高的页面后再打开高度较小页面滚动条不收缩
        org.style.height = '0px';
        var iDoc = org.contentDocument || org.document
        var height = calcPageHeight(iDoc)
        if (height < 850) {
            height = 850;
        }
        org.style(height, height + 'px')
    }
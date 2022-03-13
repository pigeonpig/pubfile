"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
var kk = {
        showRightMenu: function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                o = $("#rightMenu");
            o.css("top", t + "px").css("left", n + "px"), e ? (o.show(), stopMaskScroll()) : o.hide()
        }, hideRightMenu: function () {
            kk.showRightMenu(!1), $("#rightmenu-mask").attr("style", "display: none")
        }
    },
    rmWidth = $("#rightMenu").width(),
    rmHeight = $("#rightMenu").height();
kk.reloadrmSize = function () {
    rmWidth = $("#rightMenu").width(), rmHeight = $("#rightMenu").height()
};
var domhref = "",
    domImgSrc = "";

function downloadImage(e, c) {
    btf.snackbarShow("请稍后，即将开始下载"), kk.hideRightMenu(), setTimeout(function () {
        var i = new Image;
        i.setAttribute("crossOrigin", "anonymous"), i.onload = function () {
            var e = document.createElement("canvas");
            e.width = i.width, e.height = i.height, e.getContext("2d").drawImage(i, 0, 0, i.width, i.height);
            var t = e.toDataURL("image/png"),
                n = document.createElement("a"),
                o = new MouseEvent("click");
            n.download = c || "photo", n.href = t, n.dispatchEvent(o)
        }, i.src = e, btf.snackbarShow("图片已添加盲水印，请遵守版权协议")
    }, "5000")
}

function stopMaskScroll() {
    document.getElementById("rightmenu-mask") && document.getElementById("rightmenu-mask").addEventListener("mousewheel", function (e) {
        e.preventDefault()
    }, !1), document.getElementById("rightMenu") && document.getElementById("rightMenu").addEventListener("mousewheel", function (e) {
        e.preventDefault()
    }, !1)
}
window.oncontextmenu = function (e) {
    if (768 < document.body.clientWidth) {
        var t = e.clientX + 10,
            n = e.clientY,
            o = $(".rightMenuOther"),
            i = $("#menu-copytext"),
            c = $("#menu-newwindow"),
            a = $("#menu-copylink"),
            r = $("#menu-copyimg"),
            d = $("#menu-search"),
            h = $("#menu-searchBaidu"),
            u = e.target.href,
            l = e.target.currentSrc;
        return o.show(), selectTextNow ? (i.show(), d.show(), h.show(), o.hide()) : (i.hide(), h.hide(), d.hide()), u ? (c.show(), a.show(), o.hide(), domhref = u) : (c.hide(), a.hide()), l ? (r.show(), o.hide(), domImgSrc = l) : r.hide(), kk.reloadrmSize(), t + rmWidth > window.innerWidth && (t -= rmWidth), n + rmHeight > window.innerHeight && (n -= rmHeight), kk.showRightMenu(!0, n, t), $("#rightmenu-mask").attr("style", "display: flex"), !1
    }
}, kk.switchDarkMode = function () {
    kk.hideRightMenu(), "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(), saveToLocal.set("theme", "dark", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(), saveToLocal.set("theme", "light", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)), "function" == typeof utterancesTheme && utterancesTheme(), "object" === ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && window.loadFBComment(), window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(function () {
        return window.disqusReset()
    }, 200)
}, document.addEventListener("DOMContentLoaded", function () {
    var i, e = GLOBAL_CONFIG.translate,
        t = GLOBAL_CONFIG.Snackbar,
        n = e.defaultEncoding,
        o = e.translateDelay,
        c = (e.msgToTraditionalChinese, e.msgToSimplifiedChinese, n),
        a = "translate-chn-cht",
        r = void 0 === saveToLocal.get(a) ? n : Number(saveToLocal.get("translate-chn-cht")),
        d = void 0 !== GLOBAL_CONFIG.Snackbar;

    function h(e) {
        return "" === e || null == e ? "" : 1 === c && 2 === r ? function (e) {
            for (var t = "", n = m(), o = s(), i = 0; i < e.length; i++) 1e4 < e.charCodeAt(i) && -1 !== o.indexOf(e.charAt(i)) ? t += n.charAt(o.indexOf(e.charAt(i))) : t += e.charAt(i);
            return t
        }(e) : 2 === c && 1 === r ? function (e) {
            for (var t = "", n = m(), o = s(), i = 0; i < e.length; i++) 1e4 < e.charCodeAt(i) && -1 !== n.indexOf(e.charAt(i)) ? t += o.charAt(n.indexOf(e.charAt(i))) : t += e.charAt(i);
            return t
        }(e) : e
    }

    function u(e) {
        for (var t = "object" === _typeof(e) ? e.childNodes : document.body.childNodes, n = 0; n < t.length; n++) {
            var o = t.item(n);
            0 < "||BR|HR|".indexOf("|" + o.tagName + "|") || o === i || ("" !== o.title && null != o.title && (o.title = h(o.title)), "" !== o.alt && null != o.alt && (o.alt = h(o.alt)), "" !== o.placeholder && null != o.placeholder && (o.placeholder = h(o.placeholder)), "INPUT" === o.tagName && "" !== o.value && "text" !== o.type && "hidden" !== o.type && (o.value = h(o.value)), 3 === o.nodeType ? o.data = h(o.data) : u(o))
        }
    }

    function l() {
        1 === r ? (c = 1, r = 2, saveToLocal.set(a, r, 2), u(), d && btf.snackbarShow(t.cht_to_chs)) : 2 === r && (c = 2, r = 1, saveToLocal.set(a, r, 2), u(), d && btf.snackbarShow(t.chs_to_cht))
    }

    function k() {
        (i = document.getElementById("menu-translate")) && (c !== r && setTimeout(u, o), i.addEventListener("click", l, !1))
    }
    k(), document.addEventListener("pjax:complete", k)
}), kk.copyUrl = function (e) {
    $("body").after("<input id='copyVal'></input>");
    var t = e,
        n = document.getElementById("copyVal");
    n.value = t, n.select(), n.setSelectionRange(0, n.value.length), document.execCommand("copy"), $("#copyVal").remove()
}, kk.rightmenuCopyText = function (e) {
    navigator.clipboard && navigator.clipboard.writeText(e), kk.hideRightMenu()
};
var selectTextNow = "";

function selceText() {
    var e = document.selection ? document.selection.createRange().text : window.getSelection() + "";
    selectTextNow = e || ""
}
document.onmouseup = document.ondbclick = selceText, $("#menu-backward").on("click", function () {
    window.history.back(), kk.hideRightMenu()
}), $("#menu-forward").on("click", function () {
    window.history.forward(), kk.hideRightMenu()
}), $("#menu-refresh").on("click", function () {
    window.location.reload()
}), $("#menu-top").on("click", function () {
    btf.scrollToDest(0, 500), kk.hideRightMenu()
}), $(".menu-link").on("click", kk.hideRightMenu), $("#menu-darkmode").on("click", kk.switchDarkMode), $("#menu-home").on("click", function () {
    window.location.href = window.location.origin
}), $("#rightmenu-mask").on("click", kk.hideRightMenu), $("#menu-translate").on("click", function () {
    kk.hideRightMenu(), translateInitialization()
}), $("#menu-copy").on("click", function () {
    var e = window.location.href;
    kk.copyUrl(e), btf.snackbarShow("复制本页链接地址成功"), kk.hideRightMenu()
}), $("#menu-copytext").on("click", function () {
    kk.rightmenuCopyText(selectTextNow), btf.snackbarShow("复制成功，请遵守版权声明")
}), $("#menu-newwindow").on("click", function () {
    window.open(domhref), kk.hideRightMenu()
}), $("#menu-copylink").on("click", function () {
    kk.rightmenuCopyText(domhref), btf.snackbarShow("已复制链接地址")
}), $("#menu-copyimg").on("click", function () {
    downloadImage(domImgSrc, "zhheo")
}), $("#menu-searchBaidu").on("click", function () {
    btf.snackbarShow("即将跳转到百度搜索"), setTimeout(function () {
        window.open("https://www.baidu.com/s?wd=" + selectTextNow)
    }, "2000"), kk.hideRightMenu()
});

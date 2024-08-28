/** VERSION: 1.6.23.**/
/** Please don't modify or unzip this content. It will be updated regularly **/
var BoostPFS = function (t) {
  function e(e) {
    for (var i, a, l = e[0], s = e[1], c = e[2], p = 0, f = []; p < l.length; p++) a = l[p], Object.prototype.hasOwnProperty.call(r, a) && r[a] && f.push(r[a][0]), r[a] = 0;
    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
    for (u && u(e); f.length;) f.shift()();
    return o.push.apply(o, c || []), n()
  }

  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], i = !0, l = 1; l < n.length; l++) {
        var s = n[l];
        0 !== r[s] && (i = !1)
      }
      i && (o.splice(e--, 1), t = a(a.s = n[0]))
    }
    return t
  }

  var i = {}, r = {0: 0}, o = [];

  function a(e) {
    if (i[e]) return i[e].exports;
    var n = i[e] = {i: e, l: !1, exports: {}};
    return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
  }

  a.m = t, a.c = i, a.d = function (t, e, n) {
    a.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
  }, a.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, a.t = function (t, e) {
    if (1 & e && (t = a(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) a.d(n, i, function (e) {
      return t[e]
    }.bind(null, i));
    return n
  }, a.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return a.d(e, "a", e), e
  }, a.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, a.p = "";
  var l = window.webpackJsonpBoostPFS = window.webpackJsonpBoostPFS || [], s = l.push.bind(l);
  l.push = e, l = l.slice();
  for (var c = 0; c < l.length; c++) e(l[c]);
  var u = s;
  return o.push([186, 1]), n()
}({
  1: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(37), n(23), n(39), n(30), n(10), n(62), n(93), n(94), n(78), n(79), n(108), n(167), n(44), n(11), n(95), n(169), n(21), n(40), n(45), n(13), n(146), n(22), n(53), n(38), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(2), a = n(3), l = {
      isFullWidthMobile: function () {
        return w.isMobile() && "style1" == o.a.getSettingValue("search.suggestionMobileStyle")
      }, isStyle2: function () {
        return !w.isMobile() && "style2" === o.a.getSettingValue("search.suggestionStyle")
      }, isStyle3: function () {
        return !w.isMobile() && "style3" === o.a.getSettingValue("search.suggestionStyle")
      }
    }, s = {
      checkExistFilterOptionParam: function () {
        for (var t in Globals.queryParams) if (t.indexOf("pf_") > -1) return !0;
        return !1
      }, encodeURIParamValue: function (t) {
        return encodeURIComponent(t).replace(/&/g, "%26").replace(/'/g, "%27").replace(/\*/g, "%2A")
      }
    }, c = (n(111), n(8));

    function u(t) {
      return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    var p = function () {
      return o.a.getSettingValue("general.paginationTypeAdvanced")
    }, f = function () {
      return "load_more" == o.a.getSettingValue("general.paginationType")
    }, h = function () {
      return "infinite" == o.a.getSettingValue("general.paginationType")
    }, y = {
      getSortingList: function () {
        var t = o.a.getSettingValue("general.sortingList"), e = o.a.getSettingValue("general.customSortingList");
        if ("" != e) for (var n = (t = e.trim().split("|")).length - 1; n >= 0; n--) "" == t[n] && t.splice(n, 1);
        var i = o.a.getSettingValue("general.extraSortingList");
        if (i && (t = t.concat(i.split("|"))), w.isSearchPage()) {
          var r = w.findIndexArray("manual", t);
          r >= 0 && t.splice(r, 1)
        } else if (!w.isCollectionPage()) {
          var a = w.findIndexArray("relevance", t);
          a >= 0 && t.splice(a, 1)
        }
        for (var l = {}, s = 0; s < t.length; s++) {
          var u = c.a.sortingList[t[s]];
          if (i.length > 0 && i.indexOf(t[s]) > -1) {
            var p = t[s].replace(/-/g, "_");
            u = c.a[p]
          }
          if (l[t[s]] = u, c.a.sortByOptions) {
            var f = c.a.sortByOptions[t[s]];
            f && f.length > 0 && (l[t[s]] = f)
          }
        }
        return l
      },
      getDefaultSorting: function (t) {
        var e = o.a.getSettingValue("default_sort_order"), n = "";
        return "object" == u(e) && void 0 !== t && ((n = e[t = t.toString()]) || (n = "search" == t ? "relevance" : e.all)), n
      },
      getProductMetafield: function (t, e, n) {
        if (t.hasOwnProperty("metafields")) {
          var i = t.metafields.filter((function (t) {
            return t.namespace == e && t.key == n
          }));
          if (void 0 !== i[0]) return i[0].value
        }
        return null
      },
      isAdvancedPaginationType: p,
      buildProductItemUrl: function (t, e) {
        var n = w.getWindowLocation().search.substring(1), i = window.location.pathname, r = i.split("/"), a = "";
        Shopify && Shopify.routes && Shopify.routes.root && "/" != Shopify.routes.root ? a = Shopify.routes.root.replace(/\/$/, "") : r.indexOf(boostPFSAppConfig.general.current_locale) > -1 && (a = "/" + boostPFSAppConfig.general.current_locale);
        var l = "object" === u(t) && t.hasOwnProperty("handle") ? t.handle : t;
        if (e = void 0 !== e ? e : o.a.getSettingValue("general.addCollectionToProductUrl")) {
          if ("/" == i || w.isSearchPage() || w.isVendorPage() || w.isTypePage()) return (s = a + "/collections/all/products/") + l;
          if (w.isTagPage()) {
            var s = a + "/collections/", c = r.indexOf("collections") + 1;
            return r.length >= 4 ? s + r[c] + "/products/" + l : "/collections/all/products/" + l
          }
          if (n.indexOf("cache:") > -1) {
            var p = "all", f = n.split("&")[0].split("?")[0].split("collections/");
            return f.length > 1 && (p = f[1].indexOf("/") > -1 ? f[1].split("/")[0] : f[1]), "/collections/" + (p = p.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/g, "")) + "/products/" + l
          }
          c = r.indexOf("collections") + 1, s = a + "/collections/";
          return void 0 !== r[2] ? s + r[c] + "/products/" + l : window.location.pathname + "/products/" + l
        }
        return a + "/products/" + l
      },
      buildProductItemVendorUrl: function (t) {
        return window.location.protocol + "//" + window.location.hostname + "/collections/vendors?q=" + s.encodeURIParamValue(t)
      },
      removePageParamFromUrl: function (t) {
        return a.a.queryParams.hasOwnProperty("page") && (t = t.replace("&page=" + a.a.queryParams.page, "").replace("?page=" + a.a.queryParams.page + "&", "?").replace("?page=" + a.a.queryParams.page, "")), t
      },
      removeCollectionScopeParamFromUrl: function (t) {
        return a.a.queryParams.hasOwnProperty("collection_scope") && (t = t.replace("&collection_scope=" + a.a.queryParams.collection_scope, "")), t
      },
      buildToolbarLink: function (t, e, n) {
        var i = window.location.origin + window.location.pathname;
        switch (t) {
          case"page":
          case"limit":
          case"sort":
          case"display":
            if ("page" == t && 1 == n) break;
            i += "?" + t + "=" + n
        }
        return i
      },
      isDefaultPaginationType: function () {
        return "default" == o.a.getSettingValue("general.paginationType")
      },
      isLoadMorePaginationType: f,
      isInfiniteLoadingPaginationType: h,
      isLoadPreviousPagePaginationType: function () {
        return (f() || h()) && p() && o.a.getSettingValue("general.activeLoadPreviousPage")
      },
      isNoFilterResult: function (t, e) {
        return t <= 0 && !("init" === e && o.a.getSettingValue("general.productAndVariantAvailable") && o.a.getSettingValue("general.availableAfterFiltering"))
      },
      compileShopifyProductVariables: function (t, e) {
        return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/{{product.title}}/g, t.title)).replace(/{{product.vendor}}/g, t.vendor)).replace(/{{product.url}}/g, w.buildProductItemUrl(t))).replace(/{{product.available}}/g, t.available)).replace(/{{product.compare_at_price}}/g, w.formatMoney(t.compare_at_price_min))).replace(/{{product.compare_at_price_min}}/g, w.formatMoney(t.compare_at_price_min))).replace(/{{product.compare_at_price_max}}/g, w.formatMoney(t.compare_at_price_max))).replace(/{{product.description}}/g, void 0 !== t.body_html && null != t.body_html ? t.body_html : "")).replace(/{{product.handle}}/g, t.handle)).replace(/{{product.id}}/g, t.id)).replace(/{{product.price}}/g, w.formatMoney(t.price_min))).replace(/{{product.price_max}}/g, w.formatMoney(t.price_max))).replace(/{{product.price_min}}/g, w.formatMoney(t.price_min))).replace(/{{product.template_suffix}}/g, void 0 !== t.template_suffix && null != t.template_suffix ? t.template_suffix : "")).replace(/{{product.percent_sale_min}}/g, t.percent_sale_min > 0 ? t.percent_sale_min : "")).replace(/{{product.type}}/g, t.product_type)).replace(/{{product.sku}}/g, void 0 !== t.skus && null != t.skus && t.skus.length > 0 ? t.skus[0] : "")
      },
      compileShopifyProductMetafield: function (t, e) {
        if (-1 != e.indexOf("product.metafields")) {
          var n = e.match(/\{\{product.metafields(.*?)\}\}/g), i = 0, r = "", o = "", a = "", l = "";
          if (n.length > 0) {
            i = n.length;
            for (var s = 0; s < i; s++) 4 == (o = n[s].replace(/\{\{/g, "").replace(/\}\}/g, "").split(".")).length && (r = o[2], a = o[3], l = w.getProductMetafield(t, r, a) || "", e = e.replaceAll(n[s], l))
          }
        }
        return e
      }
    };

    function d(t) {
      return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    var g = function (t, e) {
      t || (t = boostPFSConfig.general.no_image_url);
      e = void 0 !== e ? e : "large";
      for (var n = o.a.getSettingValue("general.imageExtension"), i = 0; i < n.length; i++) t = t.replace("." + n[i] + "?", "_" + e + "." + n[i] + "?");
      return t
    }, m = function () {
      return r()("<p>" + boostPFSConfig.shop.money_format + "</p>").text().replace(/{{[^}]*}}/g, "")
    }, b = null, v = function () {
      return P.getWindowLocation().href.includes("webcache.googleusercontent.com") ? P.getWindowLocation().search.indexOf("search?") > -1 : window.location.pathname.indexOf("/search") > -1
    }, S = function (t, e) {
      e || (e = P.getWindowLocation().href), t = t.replace(/[\[\]]/g, "\\$&");
      var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
      return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }, O = function (t, e, n, i) {
      if (null != n) {
        for (var r = 0; r < e.length; r++) if (void 0 !== i && 0 == i && (e[r][n] = e[r][n].toLowerCase(), t = t.toLowerCase()), e[r][n] == t) return r
      } else for (r = 0; r < e.length; r++) if (void 0 !== i && 0 == i && (e[r] = e[r].toLowerCase(), t = t.toLowerCase()), e[r] == t) return r;
      return -1
    }, T = function (t) {
      if (t && "string" == typeof t) {
        var e = t.replace(/<.*?>/g, "");
        return e = e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#36;/g, "$").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\$/g, "&#36;"), e
      }
      return ""
    }, P = {
      escape: function (t, e) {
        return e = e ? "&#13;" : "\n", ("" + t).replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r\n/g, e).replace(/[\r\n]/g, e)
      },
      unescape: function (t) {
        return ("" + t).replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
      },
      findIndexArray: O,
      getParam: S,
      getSearchTerm: function () {
        return S(a.a.searchTermKey)
      },
      getValueInObjectArray: function (t, e, n, i) {
        void 0 === n && (n = "key"), void 0 === i && (i = "values");
        var r = O(t, e, n);
        return r > -1 && e[r].hasOwnProperty(i) ? e[r][i] : ""
      },
      getFilePath: function (t, e, n) {
        e = void 0 !== e ? e : "png", n = void 0 !== n ? n : "";
        var i = a.a.fileUrl.split("?")[0];
        return i += t + "." + e + (n ? "?v=" + n : "")
      },
      getNumberDecimals: function (t) {
        var e = t.toString().split(".");
        return e.length > 1 ? e[1].length : 0
      },
      isMobile: function () {
        return b || (b = r()(window).width(), r()(window).on("resize", (function () {
          b = r()(window).width()
        }))), b <= o.a.getSettingValue("general.breakpointMobile")
      },
      isMobileDevice: function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      },
      isTablet: function () {
        return b || (b = r()(window).width(), r()(window).on("resize", (function () {
          b = r()(window).width()
        }))), b <= o.a.getSettingValue("general.breakpointTablet") && b > o.a.getSettingValue("general.breakpointMobile")
      },
      isiOS: function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
      },
      isSafari: function () {
        return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
      },
      isBackButton: function () {
        return window.performance && window.performance.navigation && 2 == window.performance.navigation.type
      },
      isCartPage: function () {
        return window.location.pathname.indexOf("/cart") > -1
      },
      isProductPage: function () {
        return window.location.pathname.indexOf("/products") > -1
      },
      isCollectionPage: function () {
        return window.location.pathname.includes("/collections")
      },
      isSearchPage: v,
      isVendorPage: function () {
        return window.location.pathname.indexOf("/collections/vendors") > -1
      },
      isTagPage: function () {
        return void 0 !== a.a.currentTags && null !== a.a.currentTags && a.a.currentTags.length > 0
      },
      isTypePage: function () {
        return window.location.pathname.indexOf("/collections/types") > -1
      },
      isGLHMobile: function () {
        return navigator && navigator.userAgent && navigator.userAgent.includes(atob("TGlnaHRob3VzZQ==")) && P.isMobile() && !P.isSearchPage()
      },
      mergeObject: function t(e, n) {
        for (var i in n) try {
          e[i] = n[i].constructor == Object ? t(e[i], n[i]) : n[i]
        } catch (t) {
          e[i] = n[i]
        }
        return e
      },
      optimizeImage: g,
      getFeaturedImage: function (t, e) {
        e = void 0 !== e ? e : "large";
        var n = g(boostPFSConfig.general.no_image_url, e);
        return t.length > 0 && (n = "object" === d(t[0]) ? g(t[0].src, e) : g(t[0], e)), n
      },
      slugify: function (t) {
        if (null == t || "object" == d(t)) return "";
        if ("string" != typeof t) {
          if ("function" != typeof t.toString) return "";
          t = t.toString()
        }
        t = t.toLowerCase();
        for (var e = "àáäâãèéëêẽìíïîĩòóöôõùúüûũñç·/_,:;", n = 0, i = e.length; n < i; n++) t = t.replace(new RegExp(e.charAt(n), "g"), "aaaaaeeeeeiiiiiooooouuuuunc--_---".charAt(n));
        for (var r = "ÁáÄäČčĎďÉéěÍíŇňÓóÖöŘřŠšŤťÚúůÝýŽž".length, o = 0; o < r; o++) t = t.replace(new RegExp("ÁáÄäČčĎďÉéěÍíŇňÓóÖöŘřŠšŤťÚúůÝýŽž".charAt(o), "g"), "AaAaCcDdEeeIiNnOoOoRrSsTtUuuYyZz".charAt(o));
        for (var a = ["AE", "ae", "O", "o", "A", "a"], l = "ÆæØøÅå".length, s = 0; s < l; s++) t = t.replace(new RegExp("ÆæØøÅå".charAt(s), "g"), a[s]);
        return (t = t.replace(/'/g, "").replace(/"/g, "")).replace(/[\s\/]+/g, "-").replace(/[`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/g, "-").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
      },
      capitalize: function (t, e, n) {
        n = void 0 !== n && n;
        return (e = void 0 !== e && e) && (t = t.toLowerCase()), n ? t.charAt(0).toUpperCase() + t.slice(1) : t.replace(/(?:^|\s)\S/g, (function (t) {
          return t.toUpperCase()
        }))
      },
      textify: function (t, e) {
        e = void 0 !== e ? e : "-";
        for (var n = t.split(e), i = "", r = 0; r < n.length; r++) i += n[r].charAt(0).toUpperCase() + n[r].slice(1), r < n.length - 1 && (i += " ");
        return i
      },
      stripHtml: T,
      stripScriptTag: function (t) {
        if (t) return t.replace(/<script[^>]*>.*?<\/script>/gi, "")
      },
      truncateByWord: function (t, e, n) {
        return void 0 === n && (n = "..."), t = t.split(" ").length > e ? t.split(" ").splice(0, e).join(" ") + n : t.split(" ").splice(0, e).join(" ")
      },
      removeDecimal: function (t, e) {
        e = void 0 !== e ? e : o.a.getSettingValue("general.decimalDelimiter");
        var n = new RegExp("(\\" + e + "\\d+)+", "gi");
        return t.replace(n, "")
      },
      formatMoney: function (t, e, n) {
        if (void 0 === e && (e = a.a.moneyFormat), ("money_with_currency" == e || o.a.getSettingValue("general.moneyFormatWithCurrency")) && (e = a.a.moneyFormatWithCurrency), void 0 === n) n = !1;
        "string" == typeof t && (t = t.replace(".", ""));
        var i = "", r = /\{\{\s*(\w+)\s*\}\}/, l = e || "${{amount}}";

        function s(t, e) {
          return void 0 === t ? e : t
        }

        function c(t, e, i, r) {
          if (e = s(e, 2), i = s(i, ","), r = s(r, "."), isNaN(t) || null == t) return 0;
          var o = (t = parseFloat(t).toFixed(e)).split("."), a = o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i),
            l = o[1] ? r + o[1] : "";
          return 1 == n ? (a + l).replace(/((\,00)|(\.00))$/g, "") : a + l
        }

        switch (l.match(r)[1]) {
          case"amount":
            i = c(t, 2);
            break;
          case"amount_no_decimals":
            i = c(t, 0);
            break;
          case"amount_with_comma_separator":
            i = c(t, 2, ".", ",");
            break;
          case"amount_no_decimals_with_comma_separator":
            i = c(t, 0, ".", ",");
            break;
          case"amount_with_space_separator_no_comma":
          default:
            i = c(t, 2)
        }
        return l = l.replace(r, i), o.a.getSettingValue("general.enable3rdCurrencySupport") ? P.moneyWrapper(l) : l
      },
      moneyWrapper: function (t) {
        return '<span class="money">{{money}}</span>'.replace(/{{money}}/g, T(t))
      },
      formatNumberWithSeparator: function (t, e, n, i, r) {
        isNaN(t) && (t = 0), isNaN(e) && (e = 0), i || (i = "." == n ? "," : ".");
        var o = (t = parseFloat(t).toFixed(e)).toString().split("."), a = o[0], l = o[1] ? o[1] : "";
        return n && (a = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n)), i && l && (l = r && /0+/.test(l) ? "" : i + l), a + l
      },
      getCurrency: m,
      removeCurrencySymbol: function (t) {
        t = r()("<p>" + t + "</p>").text();
        for (var e = m().split(" "), n = 0; n < e.length; n++) t = t.replace(e[n].trim(), "");
        return t.trim()
      },
      isShopifyActiveCurrency: function () {
        return "undefined" != typeof Shopify && Shopify.hasOwnProperty("currency") && Shopify.currency.hasOwnProperty("rate") && 1 != Shopify.currency.rate
      },
      isEnableShopifyMultipleCurrencies: function () {
        return o.a.hasOwnProperty("general") && o.a.general.hasOwnProperty("currencies") && o.a.general.currencies.length > 1 && P.isShopifyActiveCurrency()
      },
      isConvertCurrenciesOnFrontEnd: function () {
        var t = o.a.getSettingValue("currencyRoundingRules");
        return t && "object" == d(t)
      },
      roundedPrice: function (t) {
        t = parseFloat(t).toFixed(2);
        var e = boostPFSAppConfig.general.current_currency.toLowerCase().trim(),
          n = o.a.getSettingValue("currencyRoundingRules"), i = n && e && n.hasOwnProperty(e) ? n[e] : 0,
          r = P.getRoundingRange(!0);
        if (r) {
          var a = parseFloat(i);
          t /= r, 1 == (a /= r) && (a = 0);
          var l = Math.floor(t);
          t = (t - l).toFixed(2) > a ? l + 1 : l, t *= r, 0 == a && (i = 0), t += parseFloat(i)
        }
        return t
      },
      getRoundingRange: function (t) {
        void 0 === t && (t = !1);
        var e = boostPFSAppConfig.general.current_currency.toLowerCase().trim(),
          n = o.a.getSettingValue("currencyRoundingRules"), i = n && e && n.hasOwnProperty(e) ? parseFloat(n[e]) : 0,
          r = !1;
        return i > 0 && -1 != [.25, .5, .75, .9, .95, .99, 1, 25, 50, 75, 90, 95, 99, 100, 250, 500, 750, 900, 950, 999, 1e3].indexOf(i) && (r = .99, i > 100 ? r = 999 : i > 10 ? r = 99 : i > 1 && (r = 9), t && (r = i > 1 ? r + 1 : r + .01)), r
      },
      convertPriceBasedOnActiveCurrency: function (t, e) {
        if (void 0 === e && (e = !0), !t || 0 == t) return t;
        if (P.isEnableShopifyMultipleCurrencies()) {
          var n = t * Shopify.currency.rate;
          t = e ? P.roundedPrice(n) : n
        }
        return parseFloat(t)
      },
      convertPriceBasedOnPresentmentPrice: function (t) {
        var e = o.a.getSettingValue("general.currencies");
        if (void 0 !== e && e.length > 1) {
          var n = o.a.getSettingValue("general.current_currency").toLowerCase().trim();
          ["price_min", "price_max", "compare_at_price_min", "compare_at_price_max"].forEach((function (e) {
            var i = e + "_" + n;
            void 0 !== t[i] && (t[e] = t[i])
          }))
        }
      },
      revertPriceToDefaultCurrency: function (t, e) {
        if (!t || 0 == t) return t;
        if (P.isEnableShopifyMultipleCurrencies()) {
          if (t = P.roundedPrice(t), e) {
            var n = P.getRoundingRange();
            n && (t -= n)
          }
          return (t /= Shopify.currency.rate).toFixed(8)
        }
        return t
      },
      reBuildUrlBaseOnLocale: function (t) {
        if (t = t.replace("https://", "").replace("http://", ""), Shopify && Shopify.routes && Shopify.routes.root && "/" != Shopify.routes.root) return Shopify.routes.root.replace(/\/$/, "") + t;
        var e = o.a.getSettingValue("general.current_locale"), n = o.a.getSettingValue("general.published_locales"),
          i = Object.keys(n);
        if (i.indexOf(e) < 0 || 1 == n[e]) return t;
        var r = t.split("/");
        return r.length > 1 && i.length && e.length && (i.indexOf(r[1]) > -1 ? r[1] = e : r.splice(1, 0, e)), r.join("/")
      },
      getWindowLocation: function () {
        for (var t = window.location.href.replace(/%3C/g, "&lt;").replace(/%3E/g, "&gt;"), e = [], n = 0; n < t.length; n++) e.push(t.charAt(n));
        var i = e.join("").split("&lt;").join("%3C").split("&gt;").join("%3E"), r = "", o = i.replace(/#.*$/, "");
        return o.split("?").length > 1 && (r = o.split("?")[1]).length > 0 && (r = "?" + r), {
          pathname: window.location.pathname,
          href: i,
          search: r
        }
      },
      setWindowLocation: function (t) {
        window.location.href = t
      },
      isBadUrl: function (t) {
        try {
          t || (t = P.getWindowLocation().search);
          var e = decodeURIComponent(t).split("&"), n = !1;
          if (e.length > 0) for (var i = 0; i < e.length; i++) {
            var r = e[i], o = (r.match(/</g) || []).length, a = (r.match(/>/g) || []).length,
              l = (r.match(/alert\(/g) || []).length, s = (r.match(/execCommand/g) || []).length;
            if (o > 0 && a > 0 || o > 1 || a > 1 || l || s) {
              n = !0;
              break
            }
          }
          return n
        } catch (t) {
          return !0
        }
      },
      InstantSearch: l,
      isFullWidthMobile: l.isFullWidthMobile,
      isStyle2: l.isStyle2,
      isStyle3: l.isStyle3,
      FilterTree: s,
      checkExistFilterOptionParam: s.checkExistFilterOptionParam,
      encodeURIParamValue: s.encodeURIParamValue,
      FilterResult: y,
      buildProductItemUrl: y.buildProductItemUrl,
      buildProductItemVendorUrl: y.buildProductItemVendorUrl,
      removePageParamFromUrl: y.removePageParamFromUrl,
      removeCollectionScopeParamFromUrl: y.removeCollectionScopeParamFromUrl,
      buildToolbarLink: y.buildToolbarLink,
      isDefaultPaginationType: y.isDefaultPaginationType,
      isLoadMorePaginationType: y.isLoadMorePaginationType,
      isInfiniteLoadingPaginationType: y.isInfiniteLoadingPaginationType,
      isLoadPreviousPagePaginationType: y.isLoadPreviousPagePaginationType,
      getSortingList: y.getSortingList,
      getDefaultSorting: y.getDefaultSorting,
      getProductMetafield: y.getProductMetafield,
      isNoFilterResult: y.isNoFilterResult,
      compileShopifyProductVariables: y.compileShopifyProductVariables,
      compileShopifyProductMetafield: y.compileShopifyProductMetafield
    }, w = e.a = P
  }, 114: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(26), n(23), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(24), n(12);
    var i = n(0), r = n.n(i), o = n(9), a = n(4), l = n(115), s = n(82), c = n(116), u = n(117), p = n(19), f = n(118),
      h = n(2);

    function y(t) {
      return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function d(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function g(t, e) {
      return !e || "object" !== y(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function m(t) {
      return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function b(t, e) {
      return (b = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var v = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = g(this, m(e).call(this))).type = t.type, n.status = t.status, n.maxSuggesionItems = t.number, n.label = t.label, n.isShow = !1, n.isShowDYM = !1, n.type && n.type === p.a.ResultType.PRODUCTS && (n.blockDym = new f.a), n.settings = {suggesionMaxItems: h.a.getSettingValue("search.suggesionMaxItems")}, n
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && b(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          switch (this.type) {
            case p.a.ResultType.SUGGESTIONS:
            case p.a.ResultType.DEFAULT_SUGGESTIONS:
            case p.a.ResultType.RECENT_SEARCHES:
            case p.a.ResultType.NO_RESULT_SUGGESTIONS:
              this.maxSuggesionItems = this.settings.suggesionMaxItems;
              for (var t = 0; t < this.maxSuggesionItems; t++) this.addComponent(new l.a);
              break;
            case p.a.ResultType.PRODUCTS:
            case p.a.ResultType.DEFAULT_PRODUCTS:
            case p.a.ResultType.NO_RESULT_PRODUCTS:
              for (this.maxSuggesionItems = this.settings.suggesionMaxItems, t = 0; t < this.maxSuggesionItems; t++) this.addComponent(new s.a);
              break;
            case p.a.ResultType.COLLECTIONS:
              for (t = 0; t < this.maxSuggesionItems; t++) this.addComponent(new c.a);
              break;
            case p.a.ResultType.PAGES:
              for (t = 0; t < this.maxSuggesionItems; t++) this.addComponent(new u.a)
          }
        }
      }, {
        key: "getTemplate", value: function (t) {
          switch (t) {
            case"dym":
              return '\n\t\t\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchSuggestion}}-dym" aria-label="Did you mean">{{dymContent}}</li>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t<div class="{{class.searchSuggestionGroup}}" data-group="{{type}}" aria-label="{{label}}">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class="{{class.searchSuggestionHeader}}-{{type}} {{class.searchSuggestionHeader}}" aria-label="{{label}}">{{label}}</li>\n\t\t\t\t\t\t\t{{resultItems}}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim()
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          if (!("active" == this.status && this.isShow || this._isShowDYM())) return "";
          var t;
          switch (this.type) {
            case p.a.ResultType.SUGGESTIONS:
              t = h.a.getSettingValue("label.suggestion.instantSearchSuggestionsLabel");
              break;
            case p.a.ResultType.COLLECTIONS:
              t = h.a.getSettingValue("label.suggestion.instantSearchCollectionsLabel");
              break;
            case p.a.ResultType.PRODUCTS:
              t = h.a.getSettingValue("label.suggestion.instantSearchProductsLabel");
              break;
            case p.a.ResultType.PAGES:
              t = h.a.getSettingValue("label.suggestion.instantSearchPagesLabel");
              break;
            case p.a.ResultType.NO_RESULT_SUGGESTIONS:
              t = h.a.getSettingValue("search.suggestionNoResult.search_terms.label");
              break;
            case p.a.ResultType.NO_RESULT_PRODUCTS:
              t = h.a.getSettingValue("search.suggestionNoResult.products.label");
              break;
            case p.a.ResultType.RECENT_SEARCHES:
              t = h.a.getSettingValue("search.searchBoxOnclick.recentSearch.label");
              break;
            case p.a.ResultType.DEFAULT_SUGGESTIONS:
              t = h.a.getSettingValue("search.searchBoxOnclick.searchTermSuggestion.label");
              break;
            case p.a.ResultType.DEFAULT_PRODUCTS:
              t = h.a.getSettingValue("search.searchBoxOnclick.productSuggestion.label");
              break;
            default:
              t = this.label
          }
          return t || (t = this.label), this.getTemplate().replace(/{{type}}/g, this.type).replace(/{{label}}/g, t).replace(/{{class.searchSuggestionHeader}}/g, a.a.searchSuggestionHeader).replace(/{{class.searchSuggestionGroup}}/g, a.a.searchSuggestionGroup).replace(/{{resultItems}}/g, "")
        }
      }, {
        key: "render", value: function () {
          var t = this;
          this.$element = r()(this.compileTemplate()), this.type && this.type === p.a.ResultType.PRODUCTS && (this.blockDym.render(), this.blockDym.bindEvents(), this.blockDym.$element && (this.$element = r()(this.compileTemplate()), this.$element.find(" ul").append(this.blockDym.$element))), this.children.forEach((function (e) {
            e.$element && t.$element.find(" ul").append(e.$element)
          }))
        }
      }, {
        key: "_isShowDYM", value: function () {
          return this.isShowDYM && this.type == p.a.ResultType.PRODUCTS
        }
      }, {
        key: "setData", value: function (t, e) {
          this.data = t, this.isAllEmpty = e, this.children.forEach((function (e, n) {
            t && t.length > n ? e.setData(t[n]) : e.setData(null)
          })), this.blockDym && (this.blockDym.setData(this.parent.data), this.isShowDYM = this.blockDym.isShow), this.isShow = t && t.length > 0
        }
      }]) && d(n.prototype, i), o && d(n, o), e
    }(o.a);
    e.a = v
  }, 115: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(1), a = n(3), l = n(4), s = n(42), c = n(57), u = n(19);

    function p(t) {
      return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function f(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function h(t, e) {
      return !e || "object" !== p(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function y(t) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function d(t, e) {
      return (d = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var g = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = h(this, y(e).call(this))).data = "", t
      }

      var n, i, c;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && d(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedData}}" role="option">\n\t\t\t\t<a tabindex="-1" href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          if (!this.isShow) return "";
          var t = o.a.escape(a.a.currentTerm), e = this.data;
          return this.parent.type == u.a.ResultType.SUGGESTIONS && (e = this._highlightSuggestionResult(this.data, t)), this.getTemplate().replace(/{{escapedBlockType}}/g, o.a.escape(this.parent.type)).replace(/{{escapedData}}/g, o.a.escape(this.data)).replace(/{{class.searchSuggestionItem}}/g, l.a.searchSuggestionItem).replace(/{{class.searchUiAutocompleteItem}}/g, l.a.searchUiAutocompleteItem).replace(/{{searchLink}}/g, this.searchLink).replace(/{{highlightedSuggestionResult}}/g, e)
        }
      }, {
        key: "checkForRedirectData", value: function () {
          var t = this.parent.parent;
          if (t.hasRedirectData && t.redirectData && t.searchQuery == this.data) return t.redirectData;
          var e = o.a.getValueInObjectArray(u.a.ResultType.SUGGESTIONS_REDIRECT, t.data);
          return e && e[this.data] ? e[this.data] : ""
        }
      }, {
        key: "render", value: function () {
          if (this.data) {
            this.$element = r()(this.compileTemplate());
            var t = o.a.escape(this.data), e = o.a.escape(this.parent.type);
            this.$element.data("ui-autocomplete-item", {label: e + ": " + t, value: t})
          } else this.$element = null
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && !this.redirectLink && this.$element.on("click", this.saveRecentSearch.bind(this))
        }
      }, {
        key: "saveRecentSearch", value: function () {
          s.a.setOnClickRecentSearches(this.data)
        }
      }, {
        key: "setData", value: function (t) {
          this.data = t, this.isShow = !!this.data, this.redirectLink = this.checkForRedirectData(), this.redirectLink ? this.searchLink = this.redirectLink : this.searchLink = o.a.reBuildUrlBaseOnLocale("/search?" + a.a.searchTermKey + "=" + o.a.encodeURIParamValue(this.data))
        }
      }]) && f(n.prototype, i), c && f(n, c), e
    }(c.a);
    e.a = g
  }, 116: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(1), a = n(3), l = n(4);

    function s(t) {
      return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function u(t, e) {
      return !e || "object" !== s(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function p(t) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function f(t, e) {
      return (f = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var h = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = u(this, p(e).call(this))).data = "", t
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && f(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedDataTitle}}" role="option">\n\t\t\t\t<a tabindex="-1" href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          if (!this.isShow) return "";
          this.searchTerm = o.a.escape(a.a.currentTerm);
          var t = o.a.reBuildUrlBaseOnLocale("/collections/" + this.data.handle),
            e = this._highlightSuggestionResult(this.data.title, this.searchTerm);
          return this.getTemplate().replace(/{{escapedBlockType}}/g, o.a.escape(this.parent.type)).replace(/{{escapedDataTitle}}/g, o.a.escape(this.data.title)).replace(/{{escapedDataId}}/g, o.a.escape(this.data.id)).replace(/{{class.searchSuggestionItem}}/g, l.a.searchSuggestionItem).replace(/{{class.searchUiAutocompleteItem}}/g, l.a.searchUiAutocompleteItem).replace(/{{searchLink}}/g, t).replace(/{{highlightedSuggestionResult}}/g, e)
        }
      }, {
        key: "render", value: function () {
          if (this.data) {
            this.$element = r()(this.compileTemplate());
            var t = o.a.escape(this.data.title), e = o.a.escape(this.parent.type) + ": " + t;
            this.$element.data("ui-autocomplete-item", {label: e, value: t})
          } else this.$element = null
        }
      }, {
        key: "setData", value: function (t) {
          this.data = t, this.isShow = !!this.data
        }
      }]) && c(n.prototype, i), s && c(n, s), e
    }(n(57).a);
    e.a = h
  }, 117: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(1), a = n(3), l = n(4);

    function s(t) {
      return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function u(t, e) {
      return !e || "object" !== s(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function p(t) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function f(t, e) {
      return (f = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var h = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = u(this, p(e).call(this))).data = "", t
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && f(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedDataTitle}}" role="option">\n\t\t\t\t<a tabindex="-1" href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          if (!this.isShow) return "";
          var t = o.a.escape(a.a.currentTerm), e = o.a.reBuildUrlBaseOnLocale(this.data.url),
            n = this._highlightSuggestionResult(this.data.title, t);
          return this.getTemplate().replace(/{{escapedBlockType}}/g, o.a.escape(this.parent.type)).replace(/{{escapedDataTitle}}/g, o.a.escape(this.data.title)).replace(/{{class.searchSuggestionItem}}/g, l.a.searchSuggestionItem).replace(/{{class.searchUiAutocompleteItem}}/g, l.a.searchUiAutocompleteItem).replace(/{{searchLink}}/g, e).replace(/{{highlightedSuggestionResult}}/g, n)
        }
      }, {
        key: "render", value: function () {
          if (this.data) {
            this.$element = r()(this.compileTemplate());
            var t = o.a.escape(this.data.title), e = o.a.escape(this.parent.type);
            this.$element.data("ui-autocomplete-item", {label: e + ": " + t, value: t})
          } else this.$element = null
        }
      }, {
        key: "setData", value: function (t) {
          this.data = t, this.isShow = !!this.data
        }
      }]) && c(n.prototype, i), s && c(n, s), e
    }(n(57).a);
    e.a = h
  }, 118: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(26), n(23), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(24), n(12);
    var i = n(0), r = n.n(i), o = n(9), a = n(4), l = n(1), s = n(19), c = n(3), u = n(8), p = n(42);

    function f(t) {
      return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function y(t, e) {
      return !e || "object" !== f(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function d(t) {
      return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function g(t, e) {
      return (g = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var m = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = y(this, d(e).call(this))).data = "", t.$element = null, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && g(t, e)
      }(e, t), n = e, o = [{
        key: "tempType", get: function () {
          return {LINK: "link", SEPARATOR: "separator", STRONG: "strong", P: "p"}
        }
      }], (i = [{
        key: "getTemplate", value: function (t) {
          switch (t) {
            case e.tempType.LINK:
              return '\n\t\t\t\t\t<a class="{{class.searchSuggestion}}-dym-suggest-query" href="{{url}}">{{content}}</a>\n\t\t\t\t'.trim();
            case e.tempType.SEPARATOR:
              return '\n\t\t\t\t\t<span class="{{class.searchSuggestion}}-dym-suggest-query-separator">&nbsp</span>\n\t\t\t\t'.trim();
            case e.tempType.STRONG:
              return "\n\t\t\t\t\t<strong>{{content}}</strong>\n\t\t\t\t".trim();
            case e.tempType.P:
              return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-{{classType}}">{{content}}</p>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t<div class="{{class.searchSuggestionItem}} {{class.searchSuggestion}}-dym" aria-label="Did you mean">{{dymContent}}</div>\n\t\t\t\t'.trim()
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = this;
          if (this.isShow) {
            var n = "";
            "" != this.dymList && this.dymList.length > 0 && this.dymList.forEach((function (i, r) {
              var o = "/search?" + c.a.searchTermKey + "=" + l.a.encodeURIParamValue(i);
              n += t.getTemplate(e.tempType.LINK).replace(/{{url}}/g, o).replace(/{{content}}/g, i), r < t.dymList.length - 1 && (n += t.getTemplate(e.tempType.SEPARATOR))
            }));
            var i = "";
            if (this.suggestQuery != c.a.currentTerm) {
              if (0 == this.totalProduct) {
                var r = this.getTemplate(e.tempType.STRONG).replace(/{{content}}/g, c.a.currentTerm),
                  o = u.a.error.noSuggestionProducts.replace(/{{ terms }}/g, r) + " ";
                i += this.getTemplate(e.tempType.P).replace(/{{content}}/g, o).replace(/{{classType}}/g, "dym-notfound")
              }
              if ("" != this.suggestQuery) {
                var s = this.getTemplate(e.tempType.STRONG).replace(/{{content}}/g, this.suggestQuery),
                  p = this.getTemplate(e.tempType.STRONG).replace(/{{content}}/g, this.totalProductFromSuggestedQuery ? this.totalProductFromSuggestedQuery : ""),
                  f = u.a.suggestion.suggestQuery.replace(/{{ count }}/g, p).replace(/{{ terms }}/g, s);
                i += this.getTemplate(e.tempType.P).replace(/{{content}}/g, f).replace(/{{classType}}/g, "dym-showing-result-for")
              }
              "" != n && (i += this.getTemplate(e.tempType.P).replace(/{{content}}/g, u.a.suggestion.didYouMean.replace(/{{ terms }}/g, n)).replace(/{{classType}}/g, "dym-suggest-query-list"))
            }
            return this.getTemplate().replace(/{{dymContent}}/g, i).replace(/{{class.searchSuggestion}}/g, a.a.searchSuggestion).replace(/{{class.searchSuggestionItem}}/g, a.a.searchSuggestionItem)
          }
          return ""
        }
      }, {
        key: "render", value: function () {
          this.isShow ? this.$element = r()(this.compileTemplate()) : this.$element = null
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.$element.find("a").on("click", this.saveRecentSearch.bind(this))
        }
      }, {
        key: "saveRecentSearch", value: function (t) {
          if (t && t.target) {
            var e = r()(t.target).text();
            e && p.a.setOnClickRecentSearches(e)
          }
        }
      }, {
        key: "setData", value: function (t) {
          if (this.data = t, this.isShow = !1, t) {
            this.productData = l.a.getValueInObjectArray(s.a.ResultType.PRODUCTS, this.data), this.suggestQuery = l.a.getValueInObjectArray(s.a.ResultType.SUGGEST_QUERY, this.data);
            var e = l.a.getValueInObjectArray(s.a.ResultType.TOTAL_PRODUCT, this.data),
              n = l.a.getValueInObjectArray(s.a.ResultType.PREV_TOTAL_PRODUCT, this.data);
            this.totalProduct = "" !== n && e > 0 ? n : e, this.totalProductFromSuggestedQuery = n, this.dymList = l.a.getValueInObjectArray(s.a.ResultType.DID_YOU_MEAN, this.data), (this.dymList && this.dymList.length > 0 || this.suggestQuery) && (this.isShow = !0), this.totalProductFromSuggestedQuery || (this.isShow = !1)
          } else this.productData = [], this.suggestQuery = "", this.totalProduct = 0, this.prevTotalProduct = "", this.dymList = ""
        }
      }]) && h(n.prototype, i), o && h(n, o), e
    }(o.a);
    e.a = m
  }, 119: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(9), a = n(4), l = n(1), s = n(3), c = n(2), u = n(8), p = n(19), f = n(42);

    function h(t) {
      return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function d(t, e) {
      return !e || "object" !== h(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function g(t) {
      return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function m(t, e) {
      return (m = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var b = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = d(this, g(e).call(this))).data = "", t.$element = null, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && m(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="{{class.searchSuggestionHeader}}-view-all {{class.searchSuggestionHeader}}" data-group="view-all" aria-label="View All">\n\t\t\t\t<a href="{{viewAllUrl}}"><span>{{label.suggestion.viewAll}}</span></a>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = l.a.getValueInObjectArray("total_product", this.data),
            e = l.a.getValueInObjectArray("suggest_total_product", this.data);
          "" !== e && (t = e);
          var n = c.a.getSettingValue("search.suggestionBlocks"),
            i = l.a.getValueInObjectArray("products", n, "type", "number");
          if (0 == t || t <= i) return "";
          this.viewAllTerm = l.a.getValueInObjectArray(p.a.ResultType.SUGGEST_QUERY, this.data), this.viewAllTerm || (this.viewAllTerm = l.a.getValueInObjectArray(p.a.ResultType.QUERY, this.data));
          var r = l.a.reBuildUrlBaseOnLocale("/search?" + s.a.searchTermKey + "=" + l.a.encodeURIParamValue(this.viewAllTerm));
          return this.getTemplate().replace(/{{class.searchSuggestionHeader}}/g, a.a.searchSuggestionHeader).replace(/{{label.suggestion.viewAll}}/g, u.a.suggestion.viewAll).replace(/{{ count }}/g, t).replace(/{{viewAllUrl}}/g, r)
        }
      }, {
        key: "render", value: function () {
          this.$element = r()(this.compileTemplate())
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.$element.on("click", this.saveRecentSearch.bind(this))
        }
      }, {
        key: "saveRecentSearch", value: function (t) {
          this.viewAllTerm && f.a.setOnClickRecentSearches(this.viewAllTerm)
        }
      }, {
        key: "setData", value: function (t) {
          this.data = t || null
        }
      }]) && y(n.prototype, i), o && y(n, o), e
    }(o.a);
    e.a = b
  }, 120: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(9), a = n(4), l = n(2);

    function s(t) {
      return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function u(t, e) {
      return !e || "object" !== s(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function p(t) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function f(t, e) {
      return (f = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var h = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = u(this, p(e).call(this))).$element = null, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && f(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="{{class.searchSuggestionLoading}}">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.searchSuggestionLoading}}/g, a.a.searchSuggestionLoading)
        }
      }, {
        key: "isRender", value: function () {
          return l.a.getSettingValue("search.showSuggestionLoading")
        }
      }, {
        key: "render", value: function () {
          this.$element = r()(this.compileTemplate())
        }
      }]) && c(n.prototype, i), o && c(n, o), e
    }(o.a);
    e.a = h
  }, 121: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(53), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(4), a = n(8), l = n(1), s = n(3), c = n(19), u = n(65);

    function p(t) {
      return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function f(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function h(t, e) {
      return !e || "object" !== p(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function y(t) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function d(t, e) {
      return (d = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var g = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = h(this, y(e).call(this))).$element = null, t
      }

      var n, i, p;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && d(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="{{class.searchSuggestion}}-no-result" data-group="empty" data-label="No Results: {{searchTerm}}" data-value="{{searchTerm}}" aria-label="No Results">\n\t\t\t\t<span>{{noResultLabel}}</span>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = l.a.escape(s.a.currentTerm),
            e = this.isEmptyWithSuggestion ? a.a.search.resultEmptyWithSuggestion : a.a.error.noSuggestionResult;
          return e = e.replace(/{{ terms }}/g, "<strong>" + t + "</strong>"), this.getTemplate().replace(/{{class.searchSuggestion}}/g, o.a.searchSuggestion).replace(/{{class.searchSuggestionItem}}/g, o.a.searchSuggestionItem).replace(/{{searchTerm}}/g, t).replace(/{{noResultLabel}}/g, e)
        }
      }, {
        key: "render", value: function () {
          this.hasRedirect ? this.$element = null : this.$element = r()(this.compileTemplate())
        }
      }, {
        key: "setData", value: function (t) {
          var e = u.a.getNoResultData();
          this.isEmptyWithSuggestion = e && !e.isAllEmpty, t ? (this.data = t, this.hasRedirect = l.a.getValueInObjectArray(c.a.ResultType.REDIRECT, this.data)) : (this.data = null, this.hasRedirect = !1)
        }
      }]) && f(n.prototype, i), p && f(n, p), e
    }(n(9).a);
    e.a = g
  }, 122: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(13), n(12);
    var i = n(0), r = n.n(i), o = n(1), a = n(2), l = n(4);
    n(19);

    function s(t) {
      return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function u(t, e) {
      return !e || "object" !== s(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function p(t) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function f(t, e) {
      return (f = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var h = function (t) {
      function e(t, n) {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), u(this, p(e).call(this, t, n))
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && f(t, e)
      }(e, t), n = e, s = [{
        key: "isActive", value: function () {
          return !o.a.isMobile() && "style2" === a.a.getSettingValue("search.suggestionStyle")
        }
      }], (i = [{
        key: "_applyFilterAutocompleteAppendElement", value: function (t) {
          this.appendToSelector = a.a.getSettingValue("search.suggestionStyle2MainContainerSelector")
        }
      }, {
        key: "_renderWrapper", value: function () {
          var t = o.a.InstantSearch.isFullWidthMobile() ? l.a.searchSuggestionMobile : "";
          "" !== t && this.$wrapper.addClass(t);
          var e = this._setSuggestionPosition();
          e.setSuggetionPosition(), e.setSuggetionPopoverPosition(), r()(window).resize((function () {
            e.setSuggetionPopoverPosition()
          }))
        }
      }]) && c(n.prototype, i), s && c(n, s), e
    }(n(81).a);
    e.a = h
  }, 123: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(26), n(39), n(10), n(17), n(18), n(11), n(45), n(13), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(9), a = n(4), l = n(1), s = n(3), c = n(19), u = n(42);

    function p(t) {
      return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function f(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function h(t, e) {
      return !e || "object" !== p(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function y(t) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function d(t, e) {
      return (d = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var g = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = h(this, y(e).call(this))).id = t, i.$inputElement = n, i.$element = null, i.isOpen = !1, i.keyboardNavIndex = -1, i
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && d(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          this.searchInput = this.parent, this.searchResult = this.parent.instantSearchResult, this.appendTo = this.searchResult.selector.wrapper, this.minLength = Settings.getSettingValue("search.suggestionMinLength"), this.delay = Settings.getSettingValue("search.suggestionDelay");
          var t = Settings.getSettingValue("search.searchBoxOnclick"), e = u.a.getOnClickRecentSearches();
          this.enableOnClickSearchBox = !!(t && t.recentSearch && t.recentSearch.status && e.length > 0 || t.searchTermSuggestion && t.searchTermSuggestion.status && t.searchTermSuggestion.data.length > 0 || t.productSuggestion && t.productSuggestion.status && t.productSuggestion.data.length > 0)
        }
      }, {
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div tabindex="0" class="boost-pfs-search-suggestion" style="display: none;"></div>\n\t\t'.trim()
        }
      }, {
        key: "render", value: function () {
          this.$element || (this.$element = r()(this.getTemplate()), this.searchResult.$instantSearchResult = this.$element)
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.parent.instantSearchResult.$wrapper && this.$inputElement && (this.currentTerm = this.$inputElement.val(), this.searchResult.$wrapper.append(this.$element), this.$inputElement.on("keydown", this._onKeyboardEnter.bind(this)), this.$inputElement.on("keyup", this._onKeyboardNavigation.bind(this)), this.$element.on("focus", this.searchInput.onFocusAutocomplete.bind(this.searchInput)), this.$element.on("click", this.searchInput.onSelectAutocomplete.bind(this.searchInput)), document.addEventListener("click", this._onClose.bind(this), !0), this.$inputElement.on("click", this._onOpen.bind(this)), this.$inputElement.on("keyup", this._onKeyUp.bind(this)))
        }
      }, {
        key: "_onOpen", value: function (t) {
          this.isOpen = !0, this.keyboardNavIndex = -1, this.$keyboardSelectedItem = null, this.currentTerm = this.$inputElement.val(), this.$element.show(), this.searchInput.onOpenAutocomplete(), this._source()
        }
      }, {
        key: "_onClose", value: function (t) {
          var e = !1;
          if (this.isOpen && t && t.target) {
            var n = r()(t.target), i = n.closest("." + a.a.searchSuggestionWrapper).length > 0,
              o = n.closest("#" + this.$inputElement.id).length > 0, l = n.closest(".boost-pfs-search-btn").length > 0;
            i || o || l || (e = !0)
          } else t || (e = !0);
          e && (this.$element.hide(), this.searchInput.onCloseAutocomplete(), this.isOpen = !1, this.keyboardNavIndex = -1, this.$keyboardSelectedItem = null)
        }
      }, {
        key: "_onKeyUp", value: function (t) {
          this.isOpen = !0;
          var e = this.$inputElement.val().trim();
          this.currentTerm != e && (this.currentTerm = e, this.currentEvent = t, this._source())
        }
      }, {
        key: "_onKeyboardNavigation", value: function (t) {
          var e = this;
          if (this.isOpen && this.$element && t && t.key) {
            var n = this.$element.find("." + a.a.searchSuggestionItem);
            if (!(n.length <= 0)) {
              var i = this.$element.find("[data-group=view-all]"), o = n.length + i.length, c = !1;
              t.key.includes("Down") || t.key.includes("Up") ? (c = !0, t.key.includes("Up") ? (this.keyboardNavIndex--, this.keyboardNavIndex < -1 && (this.keyboardNavIndex = o - 1)) : t.key.includes("Down") && (this.keyboardNavIndex++, this.keyboardNavIndex > o - 1 && (this.keyboardNavIndex = -1)), this.$inputElement.focus(), -1 == this.keyboardNavIndex ? (this.$keyboardSelectedItem = null, this.$inputElement.val(s.a.currentTerm), n.removeClass("selected")) : this.keyboardNavIndex > n.length - 1 ? (this.$keyboardSelectedItem = null, this.$inputElement.val(s.a.currentTerm), n.removeClass("selected"), i.addClass("selected")) : n.each((function (t, n) {
                var o = r()(n);
                if (t == e.keyboardNavIndex) {
                  var a = l.a.unescape(o.data("ui-autocomplete-item").value);
                  e.$inputElement.val(a), o.addClass("selected"), i.removeClass("selected"), e.$keyboardSelectedItem = o
                } else o.removeClass("selected")
              }))) : (t.key.includes("Left") || t.key.includes("Right")) && -1 != this.keyboardNavIndex && (c = !0), c && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
            }
          }
        }
      }, {
        key: "_onKeyboardEnter", value: function (t) {
          if (this.isOpen && this.$element && t && t.key) {
            var e = !1;
            if ("Enter" == t.key || "Space" == t.key) {
              if (-1 != this.keyboardNavIndex && this.$keyboardSelectedItem) {
                var n = this.$keyboardSelectedItem.find("a").attr("href");
                n && (e = !0, window.location.href = n)
              }
            } else "Tab" == t.key ? document.activeElement && (document.activeElement.id != this.searchInput.id ? this._onClose() : this._onOpen()) : "Escape" == t.key && this._onClose();
            e && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
          }
        }
      }, {
        key: "_source", value: function () {
          if (this.$element.html(""), this.keyboardNavIndex = -1, this.$keyboardSelectedItem = null, this.currentTerm.length > 0) {
            var t = {term: this.currentTerm}, e = this._response.bind(this);
            this.searchInput._bindAutoCompleteSource(t, e)
          } else this.enableOnClickSearchBox ? this.showOnClickSuggestion() : (this.searchResult.$wrapper.hide(), this.searchInput.$element.attr("aria-expanded", !1))
        }
      }, {
        key: "_response", value: function (t) {
          var e = this.$inputElement.val(), n = l.a.getValueInObjectArray(c.a.ResultType.EVENT_TYPE, t),
            i = l.a.getValueInObjectArray(c.a.ResultType.QUERY, t);
          if ("suggest_dym" == n || "" != e && "" != i && e.includes(i)) {
            this.$element.html(""), this.keyboardNavIndex = -1, this.$keyboardSelectedItem = null, this.searchInput._bindAutoCompleteRenderMenu(this.$element[0], t);
            var r = {content: t};
            this.searchInput._bindAutoCompleteResponse(this.currentEvent, r), this.searchResult.$wrapper.show(), this.searchInput.$element.attr("aria-expanded", !0)
          }
        }
      }, {
        key: "showOnClickSuggestion", value: function () {
          this.$element.html(""), this.keyboardNavIndex = -1, this.$keyboardSelectedItem = null;
          var t = u.a.getOnClickData();
          this.searchResult.setData(this.$element, t, !1), this.searchResult.refresh(), this.searchResult.$wrapper.show(), this.searchInput.$element.attr("aria-expanded", !0), 0 == this.$element.find("." + a.a.searchSuggestionItem).length && (this.searchResult.$wrapper.hide(), this.searchInput.$element.attr("aria-expanded", !1))
        }
      }]) && f(n.prototype, i), o && f(n, o), e
    }(o.a);
    e.a = g
  }, 186: function (t, e, n) {
    var i = n(59).default;
    window.BoostPFSFilterCallback = n(7).default.BoostPFSFilterCallback, window.BoostPFSInstantSearchCallback = n(80).default.BoostPFSInstantSearchCallback, t.exports = i
  }, 19: function (t, e, n) {
    "use strict";
    e.a = {
      ResultType: {
        ALL_EMPTY: "all_empty",
        TOTAL_PRODUCT: "total_product",
        PREV_TOTAL_PRODUCT: "prev_total_product",
        SUGGESTIONS: "suggestions",
        COLLECTIONS: "collections",
        PRODUCTS: "products",
        PAGES: "pages",
        DID_YOU_MEAN: "did_you_mean",
        REDIRECT: "redirect",
        SUGGESTIONS_REDIRECT: "suggestions_redirect",
        QUERY: "query",
        SUGGEST_QUERY: "suggest_query",
        EVENT_TYPE: "event_type",
        RECENT_SEARCHES: "recent_searches",
        DEFAULT_SUGGESTIONS: "default_suggestions",
        DEFAULT_PRODUCTS: "default_products",
        NO_RESULT_PRODUCTS: "no_result_products",
        NO_RESULT_SUGGESTIONS: "no_result_suggestions"
      }, Mobile: {SuggestionType: {FULL_SCREEN: "style1", STYLE_2: "style2"}}
    }
  }, 2: function (t, e, n) {
    "use strict";
    n(30), n(44), n(21), n(38);
    var i = n(1), r = {
      general: {
        enableFilter: !0,
        filterTreeMobileStyle: "style2",
        filterTreeMobileStyleFullWidth: !1,
        filterTreeHorizontalStyle: "1",
        filterHorizontalColumn: "1",
        filterTreeVerticalStyle: "default",
        filterTreeEnableRenderPartially: !0,
        stickyFilterOnDesktop: !1,
        stickyFilterOnMobile: !1,
        showRefineBy: !0,
        separateRefineByFromFilter: !1,
        refineByHorizontalPosition: "bottom",
        changeMobileButtonLabel: !1,
        breakpointMobile: "767",
        breakpointTablet: "1199",
        showLoading: !1,
        showMobileLoading: !1,
        showLoadMoreLoading: !0,
        positionShowInfiniteLoading: 700,
        activeScrollToTop: !1,
        styleScrollToTop: "style1",
        showSingleOption: !0,
        showOutOfStockOption: !1,
        showFilterOptionCount: !0,
        requestInstantly: !1,
        capitalizeFilterOptionValues: !0,
        forceCapitalizeFilterOptionValues: !1,
        capitalizeFirstLetterFilterOptionValues: !1,
        collapseOnPCByDefault: !1,
        collapseOnMobileByDefault: !1,
        keepScrollState: !0,
        keepToggleState: !0,
        keepTabOpenState: !1,
        activeFilterScrollbarPC: !0,
        activeFilterScrollbarMobile: !0,
        scrollFirstLoadLength: 24,
        startViewMore: {list: 5, box: 3, swatch: 10},
        startViewMoreH: {list: 10, box: 20, swatch: 10},
        removePriceDecimal: !0,
        rangeSliderMoneyFormat: "",
        oneValueRangeSlider: !1,
        rangeSlidersStyle3: [],
        rangeSlidersSingleHandle: [],
        advancedRangeSliders: [],
        shortenPipsRange: !1,
        formatPipsRange: [{node: 1e3, symbol: "K", fix: 0, suffix: !1}, {node: 1e6, symbol: "M", fix: 2, suffix: !1}],
        enable3rdCurrencySupport: !1,
        imageExtension: ["jpg", "JPG", "png", "PNG", "jpeg", "JPEG", "gif", "GIF"],
        swatchStyle: "",
        swatchImageVersion: "1111111",
        removePrefixFromSwatchFile: !0,
        enableFilterOptionBoxStyle: !0,
        filterOptionBoxCharWidth: 14,
        openMultiLevelByDefault: [],
        multiLevelCollectionSelectType: "single",
        filterPrefixParam: "pf_",
        limit: 16,
        vendorParam: "pf_v_vendor",
        typeParam: "pf_pt_product_type",
        priceMode: "",
        tagMode: "",
        location: "",
        urlScheme: 1,
        isShortenUrlParam: !1,
        shortenUrlParamList: [],
        productAvailable: !1,
        variantAvailable: !1,
        availableAfterFiltering: !1,
        loadProductFirst: !0,
        loadProductFirstBestSelling: !1,
        addCollectionToProductUrl: !0,
        showVariantImageBasedOnSelectedFilter: "",
        paginationType: "default",
        paginationTypeAdvanced: !0,
        activeLoadPreviousPage: !0,
        loadPreviousType: "load_more",
        sessionStorageCurrentPreviousPage: "boostPFSCurrentPreviousPage",
        sessionStorageCurrentPage: "boostPFSCurrentPage",
        sessionStorageCurrentNextPage: "boostPFSCurrentNextPage",
        sessionStoragePreviousPageEvent: "boostPFSPreviousPageEvent",
        enableKeepScrollbackPosition: !0,
        keepScrollbackPositionType: "sessionStorage",
        sessionStorageScrollbackPosition: "boostPFSScrollbackPostion",
        sortingList: ["relevance", "best-selling", "manual", "price-ascending", "price-descending", "title-ascending", "title-descending", "created-descending", "created-ascending"],
        customSortingList: "",
        extraSortingList: "",
        sortingAvailableFirst: !1,
        showLimitList: "4,8,12,16",
        defaultDisplay: "grid",
        collageNumber: 3,
        showPlaceholderProductList: !1,
        placeholderImageRatio: 1.4,
        placeholderProductGridItemClass: "",
        placeholderProductPerRow: 3,
        loadProductFromLiquid: !1,
        loadProductFromLiquidType: "ajax",
        otpProductItemClass: "",
        enableAjaxCart: !1,
        enableAjaxCartOnProductPage: !1,
        ajaxCartStyle: "slide",
        showAjaxCartOnAdd: !0,
        autoCloseMiniCart: !1,
        autoCloseMiniCartDuration: 2e3,
        selectOptionInProductItem: !1,
        selectOptionContainer: "",
        enableTrackingOrderRevenue: !0,
        filterEverywhereCollectionId: 0,
        filterEverywhereDefaultSorting: "best-selling",
        filterEverywhereUrlScheme: 0,
        enableSeo: !0,
        boostCollection: "boost-all",
        moneyFormatWithCurrency: !1
      }, search: {
        enableSearch: !0,
        enableSuggestion: !0,
        suggestionBlocks: [{
          type: "suggestions",
          label: "Suggestions",
          status: "active",
          number: 3
        }, {type: "collections", label: "Collections", status: "active", number: 2}, {
          type: "pages",
          label: "Pages",
          status: "active",
          number: 2
        }, {type: "products", label: "Products", status: "active", number: 6}],
        suggesionMaxItems: 10,
        suggestionDymLimit: 2,
        suggestionMinLength: 1,
        suggestionPosition: "",
        suggestionDelay: 200,
        suggestionWidth: "auto",
        suggestionTypes: [],
        suggestionStyle: "style2",
        suggestionColumn: "1",
        suggestionProductPosition: "none",
        suggestionProductItemPerRow: "1",
        suggestionProductItemType: "list",
        suggestionMaxHeight: 657,
        suggestionStyle2MainContainerSelector: "body",
        suggestionStyle1ProductItemType: "list",
        suggestionStyle1ProductPosition: "none",
        suggestionStyle1ProductPerRow: "1",
        suggestionStyle2ProductItemType: "list",
        suggestionStyle2ProductPosition: "right",
        suggestionStyle2ProductPerRow: 2,
        suggestionStyle3ProductItemType: "list",
        suggestionStyle3ProductPosition: "right",
        suggestionStyle3ProductPerRow: 3,
        suggestionMobileStyle: "style1",
        showSuggestionLoading: !0,
        showSuggestionProductVendor: !0,
        showSuggestionProductPrice: !0,
        showSuggestionProductSalePrice: !0,
        showSuggestionProductImage: !0,
        showSuggestionProductSku: !1,
        showSearchBtnMobile: !1,
        showSearchBtnStyle3: !0,
        enableDefaultResult: !0,
        enableFuzzy: !0,
        productAvailable: !1,
        removePriceDecimal: !1,
        highlightSuggestionResult: !0,
        openProductNewTab: !1,
        suggestionMode: "prod",
        termKey: "q",
        skipFields: [],
        reduceMinMatch: !1,
        fullMinMatch: !1,
        enablePlusCharacterSearch: !1,
        fontSizeSuggestionHeader: "",
        bgSuggestionHeader: "",
        colorSuggestionHeader: "",
        enableFixHeadTitle: !0,
        searchPanelList: ["products", "collections", "pages"],
        searchPanelDefault: "products",
        searchPanelBlocks: {
          products: {label: "Products", pageSize: 25, active: !0},
          collections: {label: "Collections", pageSize: 25, active: !1},
          pages: {label: "Pages", pageSize: 25, active: !1}
        },
        suggestionNoResult: {
          search_terms: {label: '"Popular suggestions', status: !0, data: []},
          products: {label: "Products", status: !0, data: []}
        },
        searchBoxOnclick: {
          recentSearch: {label: "Recent searches", status: !1, number: 3},
          searchTermSuggestion: {label: "Popular searches", status: !1, data: []},
          productSuggestion: {label: "Trending products", status: !1, data: []}
        }
      }, init: function () {
        var t = r;
        if ("undefined" != typeof boostPFSConfig && boostPFSConfig.hasOwnProperty("settings") && null !== boostPFSConfig.settings && (t = i.a.mergeObject(t, boostPFSConfig.settings)), "undefined" != typeof boostPFSAppConfig && Object.keys(boostPFSAppConfig).length > 0 && (t = i.a.mergeObject(t, boostPFSAppConfig)), "undefined" != typeof boostPFSThemeConfig && Object.keys(boostPFSThemeConfig).length > 0 && (t = i.a.mergeObject(t, boostPFSThemeConfig)), "undefined" != typeof boostPFSFilterConfig && Object.keys(boostPFSFilterConfig).length > 0 && (t = i.a.mergeObject(t, boostPFSFilterConfig)), "undefined" != typeof boostPFSInstantSearchConfig && Object.keys(boostPFSInstantSearchConfig).length > 0 && (t = i.a.mergeObject(t, boostPFSInstantSearchConfig)), "undefined" != typeof Shopify && Shopify.hasOwnProperty("locale") && t.hasOwnProperty("label") && t.hasOwnProperty("labelTranslations") && void 0 !== t.labelTranslations && t.labelTranslations.hasOwnProperty(Shopify.locale)) {
          var e = t.labelTranslations[Shopify.locale];
          t.label = i.a.mergeObject(t.label || {}, e)
        }
        r = t
      }, getSettingValue: function (t) {
        var e = "";
        if (r.hasOwnProperty(t)) return r[t];
        if (t.indexOf(".") > -1) for (var n = t.split("."), i = 0; i < n.length; i++) if ("" == e) {
          if (!r.hasOwnProperty(n[i])) return "";
          e = r[n[i]]
        } else {
          if (!e.hasOwnProperty(n[i])) return "";
          e = e[n[i]]
        }
        return e
      }
    };
    e.a = r
  }, 3: function (t, e, n) {
    "use strict";
    n(96), n(20);
    var i = n(2), r = n(1), o = {
      prefix: "pf",
      queryParams: {},
      instantSearchQueryParams: {},
      internalClick: !1,
      imutableFilterTree: ["page", "sort", "limit", "display", "_", "tab"],
      otherParams: ["page", "sort", "limit", "display", "tab"],
      hasFilterOptionParam: !1,
      scrollData: [],
      shopName: "",
      shopDomain: "",
      fileUrl: "",
      defaultCurrency: "",
      moneyFormat: "",
      moneyFormatWithCurrency: "",
      collectionId: "",
      collectionTags: "",
      currentTags: "",
      defaultSorting: "",
      swatchExtension: "",
      productAvailable: !0,
      variantAvailable: !0,
      loadProductFirst: !1,
      searchTermKey: "q",
      suggestionCache: {},
      currentTerm: "",
      inventoryBaseSelectedLocations: !1,
      init: function () {
        var t = boostPFSConfig.shop, e = boostPFSConfig.general;
        o.shopName = t.name, o.shopDomain = t.domain, o.defaultCurrency = t.currency, o.moneyFormat = t.money_format, o.moneyFormatWithCurrency = t.money_format_with_currency, o.fileUrl = e.file_url, o.collectionId = r.a.isCollectionPage() || r.a.isSearchPage() ? e.collection_id : null, o.collectionTags = e.collection_tags, o.collectionCount = e.collection_count, o.currentTags = e.current_tags, o.defaultSorting = e.default_sort_by.trim(), o.swatchExtension = e.swatch_extension, o.productAvailable = i.a.getSettingValue("general.productAvailable"), o.variantAvailable = i.a.getSettingValue("general.variantAvailable"), i.a.getSettingValue("general.productAndVariantAvailable") && (o.productAvailable = !0, o.variantAvailable = !0), o.loadProductFirst = i.a.getSettingValue("general.loadProductFirst"), o.searchTermKey = i.a.getSettingValue("search.termKey"), o.mobileStyle = i.a.getSettingValue("general.filterTreeMobileStyle"), o.suggestionTypes = i.a.getSettingValue("search.suggestionTypes")
      }
    };
    e.a = o
  }, 33: function (t, e, n) {
    "use strict";
    n(37), n(23), n(39), n(10), n(78), n(56), n(44), n(11), n(21), n(40), n(45), n(13), n(22), n(53), n(38), n(48), n(20), n(24), n(12), n(69);
    var i = n(0), r = n.n(i), o = n(1), a = n(3), l = n(2), s = n(7), c = n(59), u = {}, p = {},
      f = window.location.pathname, h = document.title, y = "", d = new Map, g = new Map, m = {
        init: function () {
          y = o.a.getWindowLocation().href, p = {
            page: 1,
            limit: l.a.getSettingValue("general.limit"),
            sort: o.a.isSearchPage() ? "relevance" : a.a.defaultSorting,
            display: l.a.getSettingValue("general.defaultDisplay"),
            tab: l.a.getSettingValue("general.searchPanelDefault")
          }, window.addEventListener("popstate", m.onPopState), m.initShortenUrl()
        }, initShortenUrl: function () {
          var t = l.a.getSettingValue("general.shortenUrlParamList");
          l.a.getSettingValue("general.isShortenUrlParam") && Array.isArray(t) && t.forEach((function (t) {
            if ("string" == typeof t) {
              var e = t.split(":");
              if (2 == e.length) {
                var n = e[0].trim(), i = e[1].trim();
                n && i && (d.set(n, i), g.set(i, n))
              }
            }
          }))
        }, updateAddressBar: function () {
          if (0 != (o.a.isCollectionPage() || o.a.isSearchPage() ? l.a.getSettingValue("general.urlScheme") : l.a.getSettingValue("general.filterEverywhereUrlScheme")) && window.history && "function" == typeof window.history.pushState) {
            var t = m.buildAddressBarUrl(), e = JSON.parse(JSON.stringify(a.a.queryParams));
            a.a.queryParams = e, history.pushState({param: a.a.queryParams}, h, t), y = t;
            var n = new Event("boost-pfs-change-address-bar");
            window.dispatchEvent(n)
          }
        }, buildAddressBarUrl: function (t) {
          var e = t || a.a.queryParams, n = window.location.protocol + "//" + window.location.hostname + f,
            i = o.a.getWindowLocation().search, r = new URLSearchParams(i), s = !1,
            c = o.a.isCollectionPage() || o.a.isSearchPage() ? l.a.getSettingValue("general.urlScheme") : l.a.getSettingValue("general.filterEverywhereUrlScheme");
          Object.keys(e).forEach((function (t) {
            var n = e[t];
            if (t.startsWith(a.a.prefix)) {
              var i = d.get(t);
              if (i || (i = t), r.delete(i), Array.isArray(n)) {
                switch (c) {
                  case 0:
                    break;
                  case 2:
                    r.set(i, n);
                    break;
                  case 1:
                  default:
                    n.forEach((function (t) {
                      r.append(i, t)
                    }))
                }
                s = !0
              } else null != n && (r.set(i, n), s = !0)
            } else t == a.a.searchTermKey && "string" == typeof n ? o.a.isCollectionPage() && "" === n ? r.delete(t) : r.set(t, n) : a.a.otherParams.includes(t) && (n == p[t] || "sort" == t && n == a.a.defaultSorting ? r.delete(t) : r.set(t, n))
          }));
          var u = [];
          r.forEach((function (t, n) {
            var i = g.get(n);
            i || (i = n), (i.startsWith(a.a.prefix) || a.a.imutableFilterTree.includes(i) || i == a.a.searchTermKey) && (e.hasOwnProperty(i) || u.push(n))
          })), u.forEach((function (t) {
            r.delete(t)
          })), a.a.hasFilterOptionParam = s, r.sort();
          var h = n, y = r.toString();
          return y && (2 == c && (y = y.replace(/%2C/g, ",")), h += "?" + y), h
        }, setAddressBarPathAfterFilter: function (t) {
          f = "string" == typeof t && t.startsWith("/") ? t : window.location.pathname, f = o.a.reBuildUrlBaseOnLocale(f)
        }, setWindowTitleAfterFilter: function (t) {
          h = "string" != typeof t || "" == t || t.includes("undefined") || t.includes("null") ? document.title : t
        }, getHistoryState: function () {
          return u
        }, onPopState: function (t) {
          u = t.state;
          var e = c.default.instance.filter, n = o.a.getWindowLocation().href,
            i = (n.includes("#") || y.includes("#")) && n.split("#")[0] == y;
          e && !i && (o.a.isSearchPage() && r()("." + Class.searchResultPanelItem).length > 0 && r()("." + Class.searchResultPanelItem).first().trigger("click"), e.filterLoadingIcon.setShow(!0), s.default.updateParamsFromUrl(), s.default.getFilterData("history", e.setData.bind(e)))
        }, shortParamsMap: d, longParamMap: g
      };
    e.a = m
  }, 36: function (t, e, n) {
    "use strict";
    n(44), n(20);
    var i = n(1), r = {
      getApiUrl: function (t) {
        var e = boostPFSConfig.api.filterUrl;
        switch (t) {
          case"search":
            e = boostPFSConfig.api.searchUrl;
            break;
          case"suggestion":
            e = boostPFSConfig.api.suggestionUrl;
            break;
          case"analytics":
            e = boostPFSConfig.api.analyticsUrl;
            break;
          case"filter":
            e = boostPFSConfig.api.filterUrl;
            break;
          case"products":
            e = boostPFSConfig.api.productsUrl
        }
        return e
      }, setApiLocaleParams: function (t) {
        return Settings.general.hasOwnProperty("published_locales") && Object.keys(Settings.general.published_locales).length > 1 && void 0 !== Settings.general.current_locale && (t.locale = Settings.getSettingValue("general.current_locale")), t
      }, setShopifyMultiCurrencyParams: function (t) {
        return i.a.isEnableShopifyMultipleCurrencies() && (i.a.isConvertCurrenciesOnFrontEnd() || (boostPFSConfig && boostPFSConfig.general && "string" == typeof boostPFSConfig.general.current_currency && (t.currency = boostPFSConfig.general.current_currency.toLowerCase().trim()), Shopify && Shopify.country && "string" == typeof Shopify.country && (t.country = Shopify.country.toLowerCase().trim()))), t
      }
    };
    e.a = r
  }, 4: function (t, e, n) {
    "use strict";
    e.a = {
      filterTree: "boost-pfs-filter-tree",
      filterTreeVertical: "boost-pfs-filter-tree-v",
      filterTreeHorizontal: "boost-pfs-filter-tree-h",
      filterTreeOpenBody: "boost-pfs-filter-tree-open-body",
      filterTreeMobileButton: "boost-pfs-filter-tree-mobile-button",
      filterTreeMobileOpen: "boost-pfs-filter-tree-mobile-open",
      filterOptionsWrapper: "boost-pfs-filter-options-wrapper",
      filterOption: "boost-pfs-filter-option",
      filterOptionTitle: "boost-pfs-filter-option-title",
      filterOptionContent: "boost-pfs-filter-option-content",
      filterOptionContentInner: "boost-pfs-filter-option-content-inner",
      filterOptionItem: "boost-pfs-filter-option-item",
      filterOptionLabel: "boost-pfs-filter-option-label",
      filterOptionRange: "boost-pfs-filter-option-range",
      filterRefineByWrapper: "boost-pfs-filter-refine-by-wrapper",
      filterRefineBy: "boost-pfs-filter-refine-by",
      filterSelectedItems: "boost-pfs-filter-refine-by-items",
      filterSelectedItemsMobile: "boost-pfs-filter-refine-by-items-mobile",
      filterOptionHidden: "boost-pfs-filter-option-hidden",
      filterOptionOpenList: "boost-pfs-filter-option-open-list",
      filterOptionCloseList: "boost-pfs-filter-option-close-list",
      filterOptionItemList: "boost-pfs-filter-option-item-list",
      filterOptionItemListSingleList: "boost-pfs-filter-option-item-list-single-list",
      filterOptionItemListMultipleList: "boost-pfs-filter-option-item-list-multiple-list",
      filterOptionItemListBox: "boost-pfs-filter-option-item-list-box",
      filterOptionItemListSwatch: "boost-pfs-filter-option-item-list-swatch",
      filterOptionItemListRating: "boost-pfs-filter-option-item-list-rating",
      filterOptionItemListMultiLevelTag: "boost-pfs-filter-option-item-list-multi-level-tag",
      filterOptiontemListMultiLevelCollections: "boost-pfs-filter-option-item-list-multi-level-collections",
      filterOptionItemStar: "boost-pfs-filter-icon-star",
      filterOptionItemStarActive: "boost-pfs-filter-icon-star-active",
      filterHasViewMore: "boost-pfs-filter-has-view-more",
      filterOptionViewMore: "boost-pfs-filter-option-view-more-action",
      filterOptionViewLess: "boost-pfs-filter-option-view-less-action",
      filterOptionViewMoreList: "boost-pfs-filter-view-more-list-action",
      filterHasSearchBox: "boost-pfs-filter-has-searchbox",
      filterOptionShowSearchBox: "boost-pfs-filter-option-show-search-box",
      filterHasScrollbar: "boost-pfs-filter-has-scrollbar",
      filterNoScrollbar: "boost-pfs-filter-no-scrollbar",
      button: "boost-pfs-filter-button",
      clearButton: "boost-pfs-filter-clear",
      clearAllButton: "boost-pfs-filter-clear-all",
      applyButton: "boost-pfs-filter-apply-button",
      applyAllButton: "boost-pfs-filter-apply-all-button",
      closeFilterButton: "boost-pfs-filter-close",
      showResultFilterButton: "boost-pfs-filter-show-result",
      collectionHeader: "boost-pfs-filter-collection-header",
      collectionDescription: "boost-pfs-filter-collection-description",
      collectionImage: "boost-pfs-filter-collection-image",
      collectionHasImage: "boost-pfs-filter-collection-has-image",
      collectionNoImage: "boost-pfs-filter-collection-no-image",
      filterOptionTooltip: "boost-pfs-filter-option-tooltip",
      searchBox: "boost-pfs-search-box",
      searchResultHeader: "boost-pfs-search-result-header",
      searchResultNumber: "boost-pfs-search-result-number",
      searchResultPanels: "boost-pfs-search-result-panel-controls",
      searchResultPanelItem: "boost-pfs-search-result-panel-item",
      searchSuggestion: "boost-pfs-search-suggestion",
      searchSuggestionWrapper: "boost-pfs-search-suggestion-wrapper",
      searchSuggestionHeader: "boost-pfs-search-suggestion-header",
      searchSuggestionGroup: "boost-pfs-search-suggestion-group",
      searchSuggestionItem: "boost-pfs-search-suggestion-item",
      searchSuggestionMobile: "boost-pfs-search-suggestion-mobile",
      searchSuggestionLoading: "boost-pfs-search-suggestion-loading",
      searchSuggestionOpen: "boost-pfs-search-suggestion-open",
      searchSuggestionMobileOpen: "boost-pfs-search-suggestion-mobile-open",
      searchSuggestionStyle3Open: "boost-pfs-search-suggestion-style3-open",
      searchUiAutocompleteItem: "boost-pfs-ui-item",
      searchSuggestionBtnSubmitMobile: "boost-pfs-search-submit-mobile",
      searchSuggestionBtnCloseMobile: "boost-pfs-search-btn-close-suggestion",
      searchSuggestionBtnClearMobile: "boost-pfs-search-btn-clear-suggestion",
      searchSuggestionNoTabIndex: "boost-pfs-search-no-tabindex",
      searchSuggestionBtnSubmitStyle3: "boost-pfs-search-submit-style3",
      searchSuggestionBtnCloseStyle3: "boost-pfs-search-btn-close-suggestion",
      searchSuggestionBtnClearStyle3: "boost-pfs-search-btn-clear-suggestion",
      productLoadMore: "boost-pfs-filter-load-more",
      productWrapLoading: "boost-pfs-filter-product-loading",
      buttonLoadPreviousPageSelector: "boost-pfs-filter-btn-load-previous-page",
      buttonLoadPreviousPageWrapper: "boost-pfs-filter-btn-load-previous-page-wrapper",
      productDisplayType: "boost-pfs-filter-display",
      filterResultItem: "boost-pfs-search-result-list-item",
      filterSkeleton: "boost-pfs-filter-skeleton",
      filterProductSkeleton: "boost-pfs-filter-product-skeleton",
      filterSkeletonText: "boost-pfs-filter-skeleton-text",
      filterSkeletonButton: "boost-pfs-filter-skeleton-button",
      atcForm: "boost-pfs-addtocart-product-form",
      atcAvailable: "boost-pfs-addtocart-available",
      atcSelectOptions: "boost-pfs-addtocart-select-options",
      atcSoldOut: "boost-pfs-addtocart-sold-out",
      adaWrapper: "boost-pfs-ada",
      mobileButtonOpen: "boost-pfs-filter-tree-mobile-button-open",
      mobileDetectiOS: "boost-pfs-filter-mobile-detect-ios",
      hidden: "boost-hidden"
    }
  }, 41: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(26), n(10), n(17), n(44), n(18), n(11), n(21), n(40), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(2), a = n(1), l = n(3), s = n(4), c = n(8), u = n(9), p = n(80), f = n(70),
      h = n(97), y = n(123), d = n(42);

    function g(t) {
      return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function m(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function b(t, e) {
      return !e || "object" !== g(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function v(t) {
      return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function S(t, e) {
      return (S = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var O = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = b(this, v(e).call(this))).id = t, i.autocomplete = null, i.instantSearchResult = null, i.isRendered = !1, i.isBoundEvents = !1, i.$element = n || r()("#" + i.id), i.$searchForm = i.$element.closest("form"), i.$uiMenuElement = null, i
      }

      var n, i, u;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && S(t, e)
      }(e, t), n = e, u = [{
        key: "disableInstantSearch", value: function () {
          T = !0, r()("." + s.a.searchSuggestionWrapper).css({visibility: "hidden", opacity: 0, display: "none"})
        }
      }], (i = [{
        key: "init", value: function () {
          this.instantSearchResult = f.a.instantSearchResult(this.id, this.$element), this.addComponent(this.instantSearchResult), this.searchAutoComplete = new y.a(this.id, this.$element), this.addComponent(this.searchAutoComplete)
        }
      }, {
        key: "isRender", value: function () {
          return !this.isRendered
        }
      }, {
        key: "render", value: function () {
          var t = a.a.getParam(l.a.searchTermKey);
          this.$element.val(t).addClass(s.a.searchBox).attr("autocomplete", "off").attr("id", this.id).attr("data-search-box", this.id).attr("placeholder", c.a.suggestion.searchBoxPlaceholder).attr("aria-label", c.a.ada.searchAutoComplete).attr("data-already-init", !0), this.isRendered = !0
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvents
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element.on("click", this._onClickSearchBox.bind(this)).on("focus", this._onFocusSearchBox.bind(this)).on("keyup", this._onTypeSearchBoxEvent.bind(this)), this.$searchForm.length && this.$searchForm.on("submit", this._onSubmit.bind(this)), this.isBoundEvents = !0
        }
      }, {
        key: "_bindAutoCompleteSource", value: function (t, e) {
          window.suggestionCallback = e, l.a.currentTerm = t.term;
          var n = t.term.trim().replace(/\s+/g, " ");
          if ("" != n) {
            var i = this.searchAutoComplete.$element;
            if (this.instantSearchResult.setData(i, null, !0), this.instantSearchResult.refresh(), l.a.suggestionCache.hasOwnProperty(n)) return void window.suggestionCallback(l.a.suggestionCache[n]);
            n = encodeURIComponent(n), p.default.getSuggestionData(n, 0, "suggest")
          }
        }
      }, {
        key: "_bindAutoCompleteResponse", value: function (t, e) {
          var n = e.content, i = a.a.getValueInObjectArray("query", n), r = a.a.getValueInObjectArray("event_type", n),
            o = a.a.getValueInObjectArray("suggest_query", n), s = a.a.getValueInObjectArray("local_cache", n);
          a.a.getValueInObjectArray("redirect", n), 25 == Object.keys(l.a.suggestionCache).length && (l.a.suggestionCache = {}), l.a.suggestionCache.hasOwnProperty(i) || "suggest_dym" == r || (l.a.suggestionCache[i] = n), "" == o || "suggest" != r || s || p.default.getSuggestionData(o, 0, "suggest_dym", i), h.a.checkForSearchRedirect(this.$element)
        }
      }, {
        key: "_bindAutoCompleteRenderMenu", value: function (t, e) {
          this.instantSearchResult.setData(r()(t), e, !1), this.instantSearchResult.refresh()
        }
      }, {
        key: "_bindAutoCompleteResizeMenu", value: function () {
          this.customizeInstantSearch()
        }
      }, {
        key: "customizeInstantSearch", value: function () {
        }
      }, {
        key: "onFocusAutocomplete", value: function (t, e) {
          return !(!e || !e.item || void 0 === e.item.label)
        }
      }, {
        key: "onOpenAutocomplete", value: function (t) {
          var e = this;
          a.a.isiOS() && r()("." + s.a.searchSuggestionItem + " a").on("touchstart", (function () {
            e.isScrolling = !1
          })).on("touchmove", (function () {
            e.isScrolling = !0
          })).on("touchend", (function (t) {
            e.isScrolling || (window.location = r()(t.currentTarget).attr("href"))
          })), a.a.InstantSearch.isFullWidthMobile() && !r()("body").hasClass(s.a.searchSuggestionMobileOpen) && r()("body").addClass(s.a.searchSuggestionMobileOpen), a.a.InstantSearch.isStyle3() && !r()("body").hasClass(s.a.searchSuggestionStyle3Open) && r()("body").addClass(s.a.searchSuggestionStyle3Open), this.instantSearchResult.$wrapper.addClass(s.a.searchSuggestionOpen)
        }
      }, {
        key: "onCloseAutocomplete", value: function (t, e) {
          this.instantSearchResult && this.instantSearchResult.$instantSearchResult && this.instantSearchResult.$wrapper && ("test" == o.a.getSettingValue("search.suggestionMode") || a.a.InstantSearch.isFullWidthMobile() ? this.instantSearchResult.$instantSearchResult.show() : this.instantSearchResult.$instantSearchResult.siblings().hide(), a.a.isiOS() || this.instantSearchResult.$wrapper.removeClass(s.a.searchSuggestionOpen))
        }
      }, {
        key: "onSelectAutocomplete", value: function (t) {
          if (this.autocomplete) {
            var e = this.autocomplete.$element.find("." + s.a.searchSuggestionItem + ".selected");
            if (e.length) {
              var n = e.find("> a");
              n.length && a.a.setWindowLocation(n.eq(0).attr("href"))
            }
            return !1
          }
        }
      }, {
        key: "_onClickSearchBox", value: function (t) {
        }
      }, {
        key: "_onFocusSearchBox", value: function (t) {
        }
      }, {
        key: "_onTypeSearchBoxEvent", value: function (t) {
          l.a.currentTerm = t.target.value
        }
      }, {
        key: "_onSubmit", value: function (t, e) {
          if (!T && (void 0 === e && (e = this.isChangePage), this.isChangePage = !1, !e)) {
            t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), l.a.currentTerm = this.$element.val(), !l.a.currentTerm && t && t.target && (l.a.searchTerm = t.target.value);
            var n = h.a.getSearchRedirectUrl(), i = l.a.currentTerm.toString().trim(),
              r = l.a.suggestionCache.hasOwnProperty(i);
            d.a.setOnClickRecentSearches(i), r ? n && !a.a.isBadUrl(n) ? a.a.setWindowLocation(n) : (this.isChangePage = !0, this.$searchForm[0].submit()) : l.a.currentTerm ? this.$element.data("search-submit", !0) : (this.isChangePage = !0, this.$searchForm[0].submit())
          }
        }
      }]) && m(n.prototype, i), u && m(n, u), e
    }(u.a), T = !1;
    e.a = O
  }, 42: function (t, e, n) {
    "use strict";
    n(23), n(30), n(10), n(94), n(79), n(11), n(40), n(13), n(20), n(24), n(12), n(69);
    var i = n(0), r = n.n(i), o = n(19), a = n(2), l = n(3), s = n(36), c = n(1), u = "boostPFSRecentSearches",
      p = null, f = {
        getOnClickBlockSettings: function () {
          var t = {
            type: o.a.ResultType.RECENT_SEARCHES,
            label: a.a.getSettingValue("search.searchBoxOnclick.recentSearch.label"),
            status: a.a.getSettingValue("search.searchBoxOnclick.recentSearch.status") ? "active" : "inactive",
            number: a.a.getSettingValue("search.searchBoxOnclick.recentSearch.number")
          }, e = a.a.getSettingValue("search.searchBoxOnclick.searchTermSuggestion.data"), n = {
            type: o.a.ResultType.DEFAULT_SUGGESTIONS,
            label: a.a.getSettingValue("search.searchBoxOnclick.searchTermSuggestion.label"),
            status: a.a.getSettingValue("search.searchBoxOnclick.searchTermSuggestion.status") ? "active" : "inactive",
            number: e && e.length ? e.length : 0
          }, i = a.a.getSettingValue("search.searchBoxOnclick.productSuggestion.data");
          return [t, n, {
            type: o.a.ResultType.DEFAULT_PRODUCTS,
            label: a.a.getSettingValue("search.searchBoxOnclick.productSuggestion.label"),
            status: a.a.getSettingValue("search.searchBoxOnclick.productSuggestion.status") ? "active" : "inactive",
            number: i && i.length ? i.length : 0
          }]
        }, getOnClickData: function () {
          var t = a.a.getSettingValue("search.searchBoxOnclick");
          if (p) return p.recent_searches = f.getOnClickRecentSearches(), p;
          var e = [];
          return a.a.getSettingValue("search.searchBoxOnclick.recentSearch.status") && e.push({
            key: o.a.ResultType.RECENT_SEARCHES,
            values: f.getOnClickRecentSearches()
          }), a.a.getSettingValue("search.searchBoxOnclick.searchTermSuggestion.status") && e.push({
            key: o.a.ResultType.DEFAULT_SUGGESTIONS,
            values: Array.isArray(t.searchTermSuggestion.data) ? t.searchTermSuggestion.data : []
          }), a.a.getSettingValue("search.searchBoxOnclick.productSuggestion.status") && f.getOnClickProducts(t.productSuggestion.data), p = e
        }, getOnClickRecentSearches: function (t) {
          var e;
          try {
            e = JSON.parse(localStorage.getItem(u))
          } catch (t) {
            e = []
          }
          if (Array.isArray(e)) {
            if (!t) {
              var n = a.a.getSettingValue("search.searchBoxOnclick.recentSearch.number");
              n > 0 && (e = e.slice(0, n))
            }
          } else e = [];
          var i = [];
          e.forEach((function (t) {
            "" == t || c.a.isBadUrl(t) || i.push(t)
          }));
          try {
            localStorage.setItem(u, JSON.stringify(i))
          } catch (t) {
          }
          return i
        }, setOnClickRecentSearches: function (t) {
          if ("string" == typeof t && "" != t.trim() && !c.a.isBadUrl(t)) {
            t = t.trim();
            var e = f.getOnClickRecentSearches(!0), n = e.indexOf(t);
            n >= 0 ? (e.splice(n, 1), e.unshift(t)) : (e.unshift(t), e = e.slice(0, 10));
            try {
              localStorage.setItem(u, JSON.stringify(e))
            } catch (t) {
            }
          }
        }, getOnClickProducts: function (t) {
          if (Array.isArray(t) && 0 != t.length) {
            var e = new URLSearchParams;
            e.append("shop", l.a.shopDomain), t.forEach((function (t) {
              return e.append("ids", t)
            }));
            var n = e.toString();
            r.a.ajax({
              method: "GET", url: s.a.getApiUrl("products") + "?" + n, dataType: "json", success: function (t) {
                p.push({key: o.a.ResultType.DEFAULT_PRODUCTS, values: t})
              }
            })
          }
        }, onClickData: p
      };
    e.a = f
  }, 5: function (t, e, n) {
    "use strict";
    e.a = {
      Status: {ACTIVE: "active", DISABLED: "disabled"},
      FilterType: {
        COLLECTION: "collection",
        VENDOR: "vendor",
        PRODUCT_TYPE: "product_type",
        TITLE: "title",
        PRICE: "price",
        VARIANTS_PRICE: "variants_price",
        PERCENT_SALE: "percent_sale",
        REVIEW_RATINGS: "review_ratings",
        WEIGHT: "weight",
        STOCK: "stock",
        TAG: "tag",
        MULTI_LEVEL_TAG: "multi_level_tag",
        LOCATION: "location"
      },
      SelectType: {SINGLE: "single", MULTIPLE: "multiple"},
      DisplayType: {
        LIST: "list",
        BOX: "box",
        RANGE: "range",
        SWATCH: "swatch",
        RATING: "rating",
        SUB_CATEGORY: "sub_category",
        MULTI_LEVEL_COLLECTIONS: "multi_level_collections",
        MULTI_LEVEL_TAG: "multi_level_tag"
      },
      ValueType: {ALL: "all", SPECIFIC: "specific"},
      SortType: {
        KEY_ASCENDING: "key-asc",
        KEY_DESCENDING: "key-desc",
        DOC_COUNT_ASCENDING: "doc_count-asc",
        DOC_COUNT_DESCENDING: "doc_count-desc"
      },
      ShowMoreType: {
        NONE: "none",
        SCROLLBAR: "scrollbar",
        VIEWMORE: "viewmore",
        VIEWMORE_SCROLLBAR: "viewmore_scrollbar"
      }
    }
  }, 57: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(37), n(30), n(10), n(17), n(18), n(11), n(169), n(21), n(40), n(13), n(146), n(22), n(38), n(12);
    var i = n(9), r = n(2);

    function o(t) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function a(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function s(t, e) {
      return !e || "object" !== o(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function c(t) {
      return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function u(t, e) {
      return (u = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var p = function (t) {
      function e() {
        return a(this, e), s(this, c(e).apply(this, arguments))
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && u(t, e)
      }(e, t), n = e, (i = [{
        key: "_highlightSuggestionResult", value: function (t, e) {
          if (r.a.getSettingValue("search.highlightSuggestionResult") && e.length > 1 && t) {
            var n, i = function (t, e) {
              return new RegExp(t.replace(/([\(\)\{\}\[\]\.\+\-\=\\\/])/g, "\\$&"), e ? "g" : "ig")
            }, o = e.split(" "), a = o.length;
            for (n = 0; n < a; n++) {
              var l = i(o[n]), s = t.match(l);
              if (null !== s && s.length > 0) {
                var c, u = (s = s.filter((function (t, e) {
                  return s.indexOf(t) == e && "" != t
                }))).length;
                for (c = 0; c < u; c++) s[c].length > 1 && (l = i(s[c], !0), t = t.replace(l, "<b>" + s[c] + "</b>"))
              }
            }
          }
          return t
        }
      }]) && l(n.prototype, i), o && l(n, o), e
    }(i.a);
    e.a = p
  }, 59: function (t, e, n) {
    "use strict";
    n.r(e);
    n(14), n(15), n(16), n(37), n(10), n(17), n(18), n(11), n(21), n(13), n(53), n(12);
    var i = n(0), r = n.n(i), o = n(2), a = n(8), l = n(3), s = n(6), c = n(33),
      u = (n(111), n(23), n(30), n(96), n(63), n(24), n(1)), p = n(41), f = n(72), h = n(71), y = n(82),
      d = (n(20), n(9)), g = n(83);

    function m(t) {
      return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function b(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function v(t, e) {
      return !e || "object" !== m(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function S(t) {
      return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function O(t, e) {
      return (O = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var T = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = v(this, S(e).call(this))).data = null, t.id = null, t.totalProduct = null, t.$element = null, t.$productList = r()(s.a.products), t.settings = {
          enableKeepScrollbackPosition: o.a.getSettingValue("general.enableKeepScrollbackPosition"),
          keepScrollbackPositionType: o.a.getSettingValue("general.keepScrollbackPositionType"),
          sessionStorageScrollbackPosition: o.a.getSettingValue("general.sessionStorageScrollbackPosition")
        }, t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && O(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          window.BoostOTP && BoostOTP.OTPButtons.init(this)
        }
      }, {
        key: "compileTemplate", value: function () {
          return ""
        }
      }, {
        key: "render", value: function () {
          if (!this.$element || 0 == this.$element.length) if (this.parent.isRender()) {
            var t = this.compileTemplate();
            "function" == typeof u.a.compileShopifyProductVariables && (t = u.a.compileShopifyProductVariables(this.data, t)), "function" == typeof u.a.compileShopifyProductMetafield && (t = u.a.compileShopifyProductMetafield(this.data, t)), (t = g.a.compileTemplate(t, this.data)) && "string" == typeof t && (this.$element = r()(t.trim()))
          } else {
            var e = o.a.getSettingValue("general.otpProductItemClass");
            this.$element = e ? this.$productList.children(e).eq(this.index) : this.$productList.children().eq(this.index)
          }
          if (this.$element) {
            this.$element.attr("data-id", this.id);
            var n = this.$element.attr("data-page"), i = l.a.queryParams.page ? l.a.queryParams.page : 1;
            n || this.$element.attr("data-page", i), window.BoostOTP && BoostOTP.OTPButtons.render(this)
          }
        }
      }, {
        key: "bindEvents", value: function () {
          var t = u.a.isSearchPage() || u.a.isCollectionPage(),
            e = u.a.isiOS() && "default" == o.a.getSettingValue("general.paginationType");
          t && !e && this.settings.enableKeepScrollbackPosition && this._bindKeepScrollbackPositionEvent(), window.BoostOTP && BoostOTP.OTPButtons.bindEvents(this)
        }
      }, {
        key: "_bindKeepScrollbackPositionEvent", value: function () {
          if (this.$element) if (u.a.isMobileDevice()) {
            var t = !1;
            this.$element.on("touchstart", (function () {
              t = !1
            })).on("touchmove", (function () {
              t = !0
            })).on("touchend", this._onClickKeepPositionEvent.bind(this, t))
          } else this.$element.on("click", this._onClickKeepPositionEvent.bind(this, !1))
        }
      }, {
        key: "_onClickKeepPositionEvent", value: function (t, e) {
          if (!t && this.id) {
            var n = JSON.parse(JSON.stringify(l.a.queryParams)), i = this.$element.attr("data-page");
            n.page = i || 1;
            var r = c.a.buildAddressBarUrl(n), o = {
              productId: this.id,
              page: i,
              position: window.pageYOffset,
              offset: this.$element.offset().top - window.pageYOffset,
              url: r
            };
            if ("sessionStorage" == this.settings.keepScrollbackPositionType) sessionStorage.setItem(this.settings.sessionStorageScrollbackPosition, JSON.stringify(o)); else {
              var a = c.a.getHistoryState();
              a && a.param && (o.param = a.param), window.history.replaceState(o, document.title, r)
            }
          }
        }
      }, {
        key: "setData", value: function (t, e) {
          this.data = t, this.id = t.id, this.index = e, this.totalProduct = this.parent.totalProduct
        }
      }]) && b(n.prototype, i), a && b(n, a), e
    }(d.a);

    function P(t) {
      return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function w(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function _(t, e) {
      return !e || "object" !== P(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function C(t) {
      return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function k(t, e) {
      return (k = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var E = function (t) {
      function e() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), _(this, C(e).call(this))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && k(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
          throw Error("Missing buildProductGridItem function in theme lib")
        }
      }]) && w(n.prototype, i), r && w(n, r), e
    }(T);

    function I(t) {
      return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function L(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function A(t, e) {
      return !e || "object" !== I(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function R(t) {
      return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function F(t, e) {
      return (F = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var x = function (t) {
      function e() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), A(this, R(e).call(this))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && F(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
          throw Error("Missing buildProductListItem function in theme lib")
        }
      }]) && L(n.prototype, i), r && L(n, r), e
    }(T);

    function B(t) {
      return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function j(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function $(t, e) {
      return !e || "object" !== B(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function V(t) {
      return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function M(t, e) {
      return (M = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var D = function (t) {
      function e() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), $(this, V(e).call(this))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && M(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
          throw Error("Missing buildProductCollageItem function in theme lib")
        }
      }]) && j(n.prototype, i), r && j(n, r), e
    }(T), N = (n(26), n(39), n(62), n(183), n(78), n(95), n(40), n(45), n(22), n(38), n(48), n(69), n(4));
    n(184);

    function U(t) {
      return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function q(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function H(t, e) {
      return !e || "object" !== U(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function W(t) {
      return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function G(t, e) {
      return (G = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var z = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = H(this, W(e).call(this))).$element = r()(s.a.searchTopPanels), t.data = null, t.panelItems = [], t.eventType = "init", t.selector = {
          products: s.a.products,
          collections: s.a.collections,
          pages: s.a.pages,
          filterTree: s.a.filterTree,
          filterTreeMobileButton: s.a.filterTreeMobileButton,
          pagination: s.a.pagination,
          loadMore: s.a.loadMore,
          btnLoadPreviousPageWrapperSelector: s.a.btnLoadPreviousPageWrapperSelector,
          searchPanelsProductShow: s.a.searchPanelsProductShow,
          searchPanelsCollectionShow: s.a.searchPanelsCollectionShow,
          searchPanelsPageShow: s.a.searchPanelsPageShow
        }, t.settings = {
          searchPanelDefault: o.a.getSettingValue("search.searchPanelDefault"),
          searchPanelList: o.a.getSettingValue("search.searchPanelList"),
          searchPanelBlocks: o.a.getSettingValue("search.searchPanelBlocks")
        }, t.isFetchedFilterData = !1, t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && G(t, e)
      }(e, t), n = e, a = [{
        key: "isPanelActive", value: function (t) {
          return !u.a.isSearchPage() || e.getPanelActive() == t
        }
      }, {
        key: "getPanelActive", value: function () {
          return Globals.hasOwnProperty("searchDisplay") && Object.values(tt.Enum).indexOf(Globals.searchDisplay) > -1 ? Globals.searchDisplay : o.a.getSettingValue("search.searchPanelDefault")
        }
      }], (i = [{
        key: "init", value: function () {
          var t = this;
          this.panelItems = [], this.settings.searchPanelList.forEach((function (e) {
            var n = t.settings.searchPanelBlocks[e], i = new tt(n, e);
            t.addComponent(i), t.panelItems.push(i)
          }))
        }
      }, {
        key: "isRender", value: function () {
          return u.a.isSearchPage() && this.isFetchedFilterData
        }
      }, {
        key: "render", value: function () {
          var t = this, n = 0;
          switch (this.$element.empty(), this.panelItems.forEach((function (e) {
            t.$element.append(e.$element), e.isRendered && n++
          })), e.getPanelActive()) {
            case tt.Enum.COLLECTION:
              this.showPanelCollection();
              break;
            case tt.Enum.PAGE:
              this.showPanelPage();
              break;
            default:
              this.showPanelProduct()
          }
          this.$element.addClass("boost-pfs-search-panel-items-" + n)
        }
      }, {
        key: "hidePanelProduct", value: function () {
          r()(this.selector.products).addClass(N.a.hidden), r()(this.selector.filterTreeMobileButton).addClass(N.a.hidden), r()(this.selector.filterTree).addClass(N.a.hidden), r()(this.selector.pagination).addClass(N.a.hidden), r()(this.selector.loadMore).addClass(N.a.hidden), r()(this.selector.btnLoadPreviousPageWrapperSelector).addClass(N.a.hidden), r()(this.selector.searchPanelsProductShow).addClass(N.a.hidden)
        }
      }, {
        key: "hidePanelCollection", value: function () {
          r()(this.selector.collections).parent().addClass(N.a.hidden), r()(this.selector.searchPanelsCollectionShow).addClass(N.a.hidden)
        }
      }, {
        key: "hidePanelPage", value: function () {
          r()(this.selector.pages).parent().addClass(N.a.hidden), r()(this.selector.searchPanelsPageShow).addClass(N.a.hidden)
        }
      }, {
        key: "showPanelProduct", value: function () {
          this.hidePanelCollection(), this.hidePanelPage(), r()(this.selector.products).removeClass(N.a.hidden), r()(this.selector.filterTree).removeClass(N.a.hidden), r()(this.selector.filterTreeMobileButton).removeClass(N.a.hidden), r()(this.selector.pagination).removeClass(N.a.hidden), r()(this.selector.loadMore).removeClass(N.a.hidden), r()(this.selector.btnLoadPreviousPageWrapperSelector).removeClass(N.a.hidden), r()(this.selector.searchPanelsProductShow).removeClass(N.a.hidden)
        }
      }, {
        key: "showPanelCollection", value: function () {
          this.hidePanelProduct(), this.hidePanelPage(), r()(this.selector.collections).parent().removeClass(N.a.hidden), r()(this.selector.searchPanelsCollectionShow).removeClass(N.a.hidden)
        }
      }, {
        key: "showPanelPage", value: function () {
          this.hidePanelProduct(), this.hidePanelCollection(), r()(this.selector.pages).parent().removeClass(N.a.hidden), r()(this.selector.searchPanelsPageShow).removeClass(N.a.hidden)
        }
      }, {
        key: "setData", value: function (t, e) {
          this.isFetchedFilterData = !0, t && (this.data = t), this.eventType = e, this.panelItems.forEach((function (n) {
            n.setData(t, e)
          }))
        }
      }]) && q(n.prototype, i), a && q(n, a), e
    }(d.a), K = n(7);

    function Y(t) {
      return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Q(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function J(t, e) {
      return !e || "object" !== Y(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Z(t) {
      return (Z = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function X(t, e) {
      return (X = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var tt = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = J(this, Z(e).call(this))).$element = null, i.data = t, i.type = n, i.eventType = "init", i.isRenderPanelContent = !1, i.limit = 25, i.page = 1, i.active = t.active, i.type == e.Enum.PRODUCT ? (i.limit = Settings.getSettingValue("general.limit"), i.page = l.a.queryParams.page) : t.hasOwnProperty("pageSize") && (i.limit = parseInt(t.pageSize)), i
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && X(t, e)
      }(e, t), n = e, o = [{
        key: "Enum", get: function () {
          return {COLLECTION: "collections", PRODUCT: "products", PAGE: "pages"}
        }
      }], (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.searchResultPanelItem}}">\n\t\t\t\t<button>{{panelItemLabel}} ({{panelItemCount}})</button>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{panelItemLabel}}/g, this.data.label).replace(/{{panelItemCount}}/g, this.totalResult).replace(/{{class.searchResultPanelItem}}/g, N.a.searchResultPanelItem)
        }
      }, {
        key: "isActive", value: function () {
          return z.isPanelActive(this.type)
        }
      }, {
        key: "isRender", value: function () {
          return this.type == e.Enum.PRODUCT || this.active && this.totalResult && "init" == this.eventType
        }
      }, {
        key: "render", value: function () {
          this.$element = r()(this.compileTemplate()), this.isActive() && this.$element.addClass("boost-active")
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.$element.on("click", this._onClickPanelItem.bind(this))
        }
      }, {
        key: "setData", value: function (t, n) {
          var i = 0, r = "", o = this.data.hasOwnProperty("label") ? this.data.label : "";
          switch (this.type) {
            case e.Enum.COLLECTION:
              i = t.total_collection, r = a.a.search.searchPanelCollection ? a.a.search.searchPanelCollection : o;
              break;
            case e.Enum.PAGE:
              i = t.total_page, r = a.a.search.searchPanelPage ? a.a.search.searchPanelPage : o;
              break;
            default:
              i = t.total_product, r = a.a.search.searchPanelProduct ? a.a.search.searchPanelProduct : o
          }
          this.eventType = n, this.totalResult = i, this.data.label = r, this.type == e.Enum.PRODUCT && (this.page = l.a.queryParams.page)
        }
      }, {
        key: "_onClickPanelItem", value: function (t) {
          t.preventDefault(), l.a.searchDisplay = this.type, K.default.setParam("limit", this.limit), K.default.setParam("page", this.page);
          var n = this.parent, i = n.parent.searchResultTotal;
          switch (this.isRenderPanelContent || this.type === e.Enum.PRODUCT || K.default.getFilterData("search", this._searchPanelCallback.bind(this)), this.$element.addClass("boost-active"), this.$element.siblings().removeClass("boost-active"), this.type) {
            case e.Enum.COLLECTION:
              n.showPanelCollection();
              break;
            case e.Enum.PAGE:
              n.showPanelPage();
              break;
            default:
              n.showPanelProduct()
          }
          i.setData(this.totalResult, this.type), i.refresh(), this.isRenderPanelContent = !0
        }
      }, {
        key: "_searchPanelCallback", value: function (t) {
          var n = this.parent.parent.collectionList, i = this.parent.parent.collectionListPagination,
            r = !!t.hasOwnProperty("total_collection") && t.total_collection;
          l.a.searchDisplay === e.Enum.PAGE && (n = this.parent.parent.pageList, i = this.parent.parent.pageListPagination, r = !!t.hasOwnProperty("total_page") && t.total_page), n.setData(t), n.refresh(), i.setData(t, r, this.limit, this.page), i.refresh()
        }
      }]) && Q(n.prototype, i), o && Q(n, o), e
    }(d.a);

    function et(t) {
      return (et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function nt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function it(t, e) {
      return !e || "object" !== et(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function rt(t) {
      return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ot(t, e) {
      return (ot = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var at = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = it(this, rt(e).call(this))).data = null, t.totalProduct = null, t.paginationType = "", t.$loadMore = r()(s.a.loadMore), t.settings = {
          limit: o.a.getSettingValue("general.limit"),
          showLoading: o.a.getSettingValue("general.showLoading"),
          showLoadMoreLoading: o.a.getSettingValue("general.showLoadMoreLoading")
        }, (t.settings.limit <= 0 || t.settings.limit > 70) && (t.settings.limit = 24), t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ot(t, e)
      }(e, t), n = e, a = [{
        key: "Type", get: function () {
          return {DEFAULT: "default", LOAD_MORE: "load_more", INFINITE: "infinite"}
        }
      }], (i = [{
        key: "isRender", value: function () {
          return null !== this.data
        }
      }, {
        key: "setData", value: function (t) {
          t && (this.data = t), this.totalProduct = this.parent.totalProduct, this.paginationType = o.a.getSettingValue("general.paginationType")
        }
      }, {
        key: "showLoading", value: function () {
          this.settings.showLoadMoreLoading && !1 === this.settings.showLoading && this.$loadMore.find(s.a.loadMoreLoading).show()
        }
      }, {
        key: "hideLoading", value: function () {
          this.settings.showLoadMoreLoading && this.$loadMore.find(s.a.loadMoreLoading).hide()
        }
      }]) && nt(n.prototype, i), a && nt(n, a), e
    }(d.a);

    function lt(t) {
      return (lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function st(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function ct(t, e) {
      return !e || "object" !== lt(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function ut(t) {
      return (ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function pt(t, e) {
      return (pt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ft = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = ct(this, ut(e).call(this))).data = null, t.totalProduct = null, t.$element = r()(s.a.products), t.settings = {
          loadProductFromLiquid: o.a.getSettingValue("general.loadProductFromLiquid"),
          loadProductFromLiquidType: o.a.getSettingValue("general.loadProductFromLiquidType"),
          sessionStoragePreviousPageEvent: o.a.getSettingValue("general.sessionStoragePreviousPageEvent"),
          themeId: o.a.getSettingValue("general.theme_id"),
          productAndVariantAvailable: o.a.getSettingValue("general.productAndVariantAvailable"),
          sortingAvailableFirst: o.a.getSettingValue("general.sortingAvailableFirst"),
          enableKeepScrollbackPosition: o.a.getSettingValue("general.enableKeepScrollbackPosition"),
          keepScrollbackPositionType: o.a.getSettingValue("general.keepScrollbackPositionType"),
          sessionStorageScrollbackPosition: o.a.getSettingValue("general.sessionStorageScrollbackPosition")
        }, t
      }

      var n, i, c;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && pt(t, e)
      }(e, t), n = e, c = [{
        key: "Enum", get: function () {
          return {
            itemStyle: {GRID: "grid", LIST: "list", COLLAGE: "collage"},
            loadProductType: {JS: "js", AJAX: "ajax", SYNC: "sync"}
          }
        }
      }], (i = [{
        key: "isRender", value: function () {
          var t = u.a.getDefaultSorting();
          return null != this.data && z.isPanelActive(tt.Enum.PRODUCT) && (!l.a.loadProductFirst || !u.a.isCollectionPage() || u.a.isVendorPage() || u.a.isTagPage() || u.a.isTypePage() || "" != t && t != o.a.getSettingValue("general.default_sort_by") || "best-selling" === l.a.defaultSorting && !o.a.getSettingValue("general.loadProductFirstBestSelling") || l.a.defaultSorting.startsWith("extra") || this.settings.productAndVariantAvailable || this.settings.sortingAvailableFirst || l.a.inventoryBaseSelectedLocations || l.a.loadProductFirst && (l.a.hasFilterOptionParam || "init" != this.eventType))
        }
      }, {
        key: "getNoResultTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-message"><p><em>{{content}}</em></p></div>\n\t\t'.trim()
        }
      }, {
        key: "getNoResultSearchTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-message result-empty-search">\n\t\t\t\t<p>{{content}}</p>\n\t\t\t\t<p><a href="{{link}}">{{label.seeAllProducts}}</a></p>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "render", value: function () {
          this._catchError(), this.totalProduct > 0 && ("incollection_search" === l.a.queryParams.event_type && (r()("." + N.a.filterTree).css({display: ""}), r()(".boost-pfs-filter-tree-mobile-button").css({display: ""}), r()(".boost-pfs-filter-left-col").css({display: ""}), r()(".boost-pfs-filter-right-col, .boost-pfs-filter-right").css({width: ""})), this.settings.loadProductFromLiquid ? this.buildProductListDataFromLiquid() : this.buildProductList())
        }
      }, {
        key: "bindEvents", value: function () {
          var t = u.a.isSearchPage() || u.a.isCollectionPage(),
            e = u.a.isiOS() && "default" == o.a.getSettingValue("general.paginationType");
          t && !e && this.settings.enableKeepScrollbackPosition && this._bindKeepScrollbackPositionEvent()
        }
      }, {
        key: "setData", value: function (t) {
          var e = this;
          if (this.data = t, this.totalProduct = this.parent.totalProduct, this.prepareProductData(), this.eventType = this.parent.eventType, this.eventInfo = this.parent.eventInfo, this.children = [], this.productItems = [], this.ajaxPage = 0, this.totalProduct > 0) {
            var n = this._getProductItemClass();
            t.forEach((function (t, i) {
              var r = new n;
              e.addComponent(r), r.setData(t, i), e.productItems.push(r)
            }))
          }
        }
      }, {
        key: "_getProductItemClass", value: function () {
          switch (l.a.queryParams.display) {
            case e.Enum.itemStyle.LIST:
              return x;
            case e.Enum.itemStyle.COLLAGE:
              return D;
            default:
              return E
          }
        }
      }, {
        key: "buildProductListDataFromLiquid", value: function () {
          u.a.isDefaultPaginationType() || "page" != this.eventType || r()(window).off("scroll"), this.settings.loadProductFromLiquidType == e.Enum.loadProductType.SYNC ? this._getProductListHtmlBySync() : this._getProductListHtmlByAjax()
        }
      }, {
        key: "prepareProductData", value: function () {
          var t = this, e = this.data;
          return Array.isArray(e) ? (e.forEach((function (e) {
            var n = [];
            e.options_with_values.forEach((function (t) {
              n.push(t.name)
            })), e.options = n;
            var i = !0;
            if (e.variants && e.variants.length > 0) {
              var r = e.variants[0];
              r.hasOwnProperty("fulfillment_service") && "gift_card" == r.fulfillment_service && (i = !1)
            }
            u.a.isEnableShopifyMultipleCurrencies() && (u.a.isConvertCurrenciesOnFrontEnd() ? (e.price_min = u.a.convertPriceBasedOnActiveCurrency(e.price_min, i), e.price_max = u.a.convertPriceBasedOnActiveCurrency(e.price_max, i), e.compare_at_price_min = u.a.convertPriceBasedOnActiveCurrency(e.compare_at_price_min, i), e.compare_at_price_max = u.a.convertPriceBasedOnActiveCurrency(e.compare_at_price_max, i)) : u.a.convertPriceBasedOnPresentmentPrice(e)), e.variants.forEach((function (t) {
              var e = [], n = t.merged_options;
              if (Array.isArray(n)) {
                for (var r = 0; r < n.length; r++) {
                  var o = n[r].split(":");
                  t["option" + (parseInt(r) + 1)] = o[1], t["option_" + o[0]] = o[1], e.push(o[1])
                }
                t.options = e
              }
              if (null != t.compare_at_price) {
                var a = parseFloat(t.compare_at_price);
                a = u.a.convertPriceBasedOnActiveCurrency(a, i), t.compare_at_price = a
              }
              var l = parseFloat(t.price);
              l = u.a.convertPriceBasedOnActiveCurrency(l, i), t.price = l
            })), e.description = e.body_html, e.featured_image = Array.isArray(e.images) && e.images.length > 0 ? e.images[0] : boostPFSConfig.general.no_image_url, e = t.showVariantImageBasedOnSelectedFilter(e)
          })), e) : []
        }
      }, {
        key: "showVariantImageBasedOnSelectedFilter", value: function (t) {
          var e = o.a.getSettingValue("general.showVariantImageBasedOnSelectedFilter");
          if (e && "string" == typeof e && Array.isArray(t.variants) && t.variants.length > 1 && l.a.queryParams && Array.isArray(l.a.queryParams[e]) && l.a.queryParams[e].length > 0) for (var n = l.a.queryParams[e], i = 0; i < n.length; i++) {
            for (var r = !1, a = e.replace(l.a.prefix + "_opt_", "") + ":" + n[i], s = 0; s < t.variants.length; s++) {
              var c = t.variants[s];
              if (r = Array.isArray(c.merged_options) && c.merged_options.includes(a) && c.image) {
                t.featured_image = c.image, Array.isArray(t.images_info) && t.images_info.sort((function (t, e) {
                  return e.src == c.image ? 1 : -1
                })), Array.isArray(t.images) && t.images.sort((function (t, e) {
                  return e == c.image ? 1 : -1
                }));
                break
              }
            }
            if (r) break
          }
          return t
        }
      }, {
        key: "buildProductList", value: function () {
          var t = this, n = [];
          if (this.productItems.forEach((function (t) {
            n.push(t.$element)
          })), this.$element.removeAttr("data-boost-sort"), (u.a.isDefaultPaginationType() || !u.a.isDefaultPaginationType() && "page" != this.eventType) && (this.$element.html(""), r()(window).off("scroll")), u.a.isLoadPreviousPagePaginationType() && parseInt(window.sessionStorage.getItem(this.settings.sessionStoragePreviousPageEvent))) {
            var i = [];
            n.forEach((function (t) {
              return i.push(t)
            })), i.reverse(), i.forEach((function (e) {
              return t.$element.prepend(e)
            }))
          } else n.forEach((function (e) {
            return t.$element.append(e)
          }));
          g.a.call3rdAppFunction(this.data), this.settings.loadProductFromLiquid && this.settings.loadProductFromLiquidType == e.Enum.loadProductType.AJAX && this.afterRender()
        }
      }, {
        key: "buildExtrasProductListByAjax", value: function (t, e, n, i, o, a) {
          o || (o = 0), a || (a = []), (!i || i > 20) && (i = 20);
          for (var l = i * o, s = Math.min(t.length, i * (o + 1)), c = [], u = l; u < s; u++) c.push(t[u].handle);
          var p = "/collections/all/" + c.join("+") + "?view=" + e;
          r.a.ajax({
            type: "GET", url: p, success: function (r) {
              this._onExtraProductListAjaxSuccess(t, e, n, i, o, r, a)
            }.bind(this)
          })
        }
      }, {
        key: "_getProductListHtmlByAjax", value: function () {
          this.isFetchedAjaxProductData = !1, this.$element.addClass(N.a.productWrapLoading);
          for (var t = 20 * this.ajaxPage, e = Math.min(this.data.length, 20 * (this.ajaxPage + 1)), n = [], i = t; i < e; i++) n.push(this.data[i].handle);
          var o = n.join("+");
          r.a.ajax({
            type: "GET",
            url: "/collections/all/" + o + "?view=boost-pfs-product-item",
            success: this._onProductListAjaxSuccess.bind(this)
          })
        }
      }, {
        key: "_getProductListHtmlBySync", value: function () {
          var t = this.settings.themeId, e = !1;
          this.productItems.forEach((function (n, i) {
            e || (n.data.html && n.data.html.value && t && t == n.data.html.theme_id ? (n.data.html = n.data.html.value, n.refresh()) : e = !0)
          })), e ? this._getProductListHtmlByAjax() : this.buildProductList()
        }
      }, {
        key: "_onProductListAjaxSuccess", value: function (t) {
          var e = this, n = [];
          try {
            /<\!--.*?-->/.test(t) && (t = t.replace(/<\!--.*?-->/g, "")), n = JSON.parse(t).products
          } catch (t) {
            throw new Error("Could not parse json from collection.boost-pfs-product-item.liquid")
          }
          n.forEach((function (t) {
            e.data.forEach((function (e, n) {
              e.id == t.id && (e.html = t.html.value)
            }))
          }));
          for (var i = 20 * this.ajaxPage, r = i; r < i + n.length; r++) this.productItems.forEach((function (t) {
            t.id == e.data[r].id ? (t.setData(e.data[r]), t.refresh()) : e.productItems.forEach((function (t) {
              t.bindEvents()
            }))
          }));
          0 == this.ajaxPage && (u.a.isDefaultPaginationType() || "page" !== this.eventType) && this.$element.html(""), this.buildProductList(), 20 * (this.ajaxPage + 1) < this.data.length ? (this.ajaxPage++, this._getProductListHtmlByAjax()) : (this.isFetchedAjaxProductData = !0, this.parent.pagination.refresh(), this.parent.productPlaceholder.refresh(), this.$element.removeClass(N.a.productWrapLoading))
        }
      }, {
        key: "_onExtraProductListAjaxSuccess", value: function (t, e, n, i, r, o, a) {
          try {
            /<\!--.*?-->/.test(o) && (o = o.replace(/<\!--.*?-->/g, "")), a = a.concat(JSON.parse(o).products)
          } catch (t) {
            throw new Error("Could not parse json from " + e + ": " + t.message)
          }
          i * r < t.length - 1 ? (r++, this.buildExtrasProductListByAjax(t, e, n, i, r, a)) : "function" == typeof n && n(a)
        }
      }, {
        key: "_bindKeepScrollbackPositionEvent", value: function () {
          if ("init" == this.eventType || "history" == this.eventType) {
            history.scrollRestoration = "manual";
            var t = "sessionStorage" == this.settings.keepScrollbackPositionType ? this._getScrollDataFromSessionStorage() : this._getScrollDataFromHistory();
            this._scrollBackToItem(t)
          }
        }
      }, {
        key: "_getScrollDataFromSessionStorage", value: function () {
          var t = {};
          try {
            t = JSON.parse(sessionStorage.getItem(this.settings.sessionStorageScrollbackPosition))
          } catch (t) {
          }
          return "object" != lt(t) && (t = {}), sessionStorage.removeItem(this.settings.sessionStorageScrollbackPosition), t
        }
      }, {
        key: "_getScrollDataFromHistory", value: function () {
          var t = null;
          if (history && history.state && history.state.productId) {
            t = history.state;
            var e = new URL(u.a.getWindowLocation().href);
            setTimeout((function () {
              window.history.replaceState("", document.title, e.toString().replace(/\+/g, "%20"))
            }), 500)
          }
          return t
        }
      }, {
        key: "_scrollBackToItem", value: function (t) {
          if (t && t.page && t.productId && t.position) if (o.a.getSettingValue("general.paginationType") == at.Type.DEFAULT || 1 == t.page) window.scrollTo({
            top: t.position,
            behavior: "smooth"
          }); else {
            var e = this.$element.find('[data-id="' + t.productId + '"]').first();
            if (e.length > 0) {
              var n = e.offset().top - t.offset;
              window.scrollTo({top: n, behavior: "smooth"})
            }
          }
        }
      }, {
        key: "_catchError", value: function () {
          if (u.a.isNoFilterResult(this.totalProduct, this.eventType)) {
            var t = a.a.error.noProducts, e = "";
            u.a.checkExistFilterOptionParam() ? (t = a.a.error.noFilterResult, e = this.getNoResultTemplate().replace(/{{content}}/g, t)) : u.a.isSearchPage() ? (t = a.a.search.resultEmpty.replace(/{{ terms }}/g, "<strong>" + l.a.queryParams.q + "</strong>"), e = this.getNoResultSearchTemplate().replace(/{{content}}/g, t).replace(/{{link}}/g, "/collections/all").replace(/{{label.seeAllProducts}}/g, a.a.search.seeAllProducts)) : l.a.queryParams.incollection_search ? (t = a.a.error.noFilterResult, e = this.getNoResultTemplate().replace(/{{content}}/g, t), r()("." + N.a.filterTree).css({display: "none"}), r()(".boost-pfs-filter-tree-mobile-button").css({display: "none"}), r()(".boost-pfs-filter-left-col").css({display: "none"}), r()(".boost-pfs-filter-right-col, .boost-pfs-filter-right").css({width: "100%"})) : (t = a.a.error.noFilterResult, e = this.getNoResultTemplate().replace(/{{content}}/g, t)), "" != e && this.$element.html(e)
          }
        }
      }]) && st(n.prototype, i), c && st(n, c), e
    }(d.a);

    function ht(t) {
      return (ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function yt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function dt(t, e) {
      return !e || "object" !== ht(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function gt(t) {
      return (gt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function mt(t, e) {
      return (mt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var bt = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = dt(this, gt(e).call(this))).$element = r()(s.a.pagination), t.$buttomElement = r()(s.a.bottomPagination), t.$productList = r()(s.a.products), t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && mt(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
          return ""
        }
      }, {
        key: "isRender", value: function () {
          return null !== this.data
        }
      }, {
        key: "render", value: function () {
          r()(s.a.pagination).html(this.compileTemplate())
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element.show(), this.$element.find("a").off("click"), this.$element.find("a").on("click", this._onClickEvent.bind(this))
        }
      }, {
        key: "_onClickEvent", value: function (t) {
          var e;
          t.preventDefault(), l.a.internalClick = !0;
          try {
            e = new URL(r()(t.currentTarget).attr("href"))
          } catch (n) {
            e = new URL("https://" + boostPFSConfig.shop.domain + r()(t.currentTarget).attr("href"))
          }
          var n = e && e.searchParams ? e.searchParams.get("page") : 1;
          n || (n = 1), K.default.setParam("page", n), K.default.applyFilter("page"), window.scrollTo({
            top: this.$productList.offset().top - 50,
            behavior: "smooth"
          })
        }
      }]) && yt(n.prototype, i), o && yt(n, o), e
    }(at);

    function vt(t) {
      return (vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function St(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ot(t, e) {
      return !e || "object" !== vt(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Tt(t) {
      return (Tt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Pt(t, e) {
      return (Pt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var wt = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Ot(this, Tt(e).call(this))).$element = r()(s.a.topDisplayType), t.selector = {
          productDisplayTypeItem: "." + N.a.productDisplayType + "-item",
          productDisplayTypeGrid: "." + N.a.productDisplayType + "-grid",
          productDisplayTypeList: "." + N.a.productDisplayType + "-list"
        }, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Pt(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
        }
      }, {
        key: "render", value: function () {
          this.$element.html(this.compileTemplate()), this.$element.length && (this.$element.find(this.selector.productDisplayTypeList).removeClass("active"), this.$element.find(this.selector.productDisplayTypeGrid).removeClass("active"), "list" == l.a.queryParams.display ? this.$element.find(this.selector.productDisplayTypeList).addClass("active") : "grid" == l.a.queryParams.display && this.$element.find(this.selector.productDisplayTypeGrid).addClass("active"))
        }
      }, {
        key: "bindEvents", value: function () {
          r()(s.a.topDisplayType + " a").on("click", this._onClickEvent.bind(this))
        }
      }, {
        key: "_onClickEvent", value: function (t) {
          t.preventDefault(), l.a.internalClick = !0;
          var e = r()(t.currentTarget);
          e.siblings().removeClass("active"), e.addClass("active");
          var n = e.data("display");
          (n || (n = new URL(e.attr("href")).searchParams.get("display"))) && K.default.setParam("display", n), K.default.applyFilter("display")
        }
      }]) && St(n.prototype, i), o && St(n, o), e
    }(d.a);

    function _t(t) {
      return (_t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Ct(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function kt(t, e) {
      return !e || "object" !== _t(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Et(t) {
      return (Et = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function It(t, e) {
      return (It = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Lt = function (t) {
      function e() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), kt(this, Et(e).call(this))
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && It(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
        }
      }, {
        key: "render", value: function () {
          r()(s.a.topSorting).html(this.compileTemplate());
          var t = r()(s.a.topSorting + " select");
          t.length && t.val(l.a.queryParams.sort)
        }
      }, {
        key: "bindEvents", value: function () {
          r()(s.a.topSorting + " select").change((function (t) {
            K.default.setParam("sort", r()(this).val()), K.default.setParam("page", 1), K.default.applyFilter("sort")
          }))
        }
      }]) && Ct(n.prototype, i), o && Ct(n, o), e
    }(d.a);

    function At(t) {
      return (At = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Rt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ft(t, e) {
      return !e || "object" !== At(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function xt(t) {
      return (xt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Bt(t, e) {
      return (Bt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var jt = function (t) {
      function e() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Ft(this, xt(e).call(this))
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Bt(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
        }
      }, {
        key: "render", value: function () {
          r()(s.a.topShowLimit).html(this.compileTemplate());
          var t = r()(s.a.topShowLimit + " select");
          t.length && t.val(Globals.queryParams.limit)
        }
      }, {
        key: "bindEvents", value: function () {
          r()(s.a.topShowLimit + " select").change((function (t) {
            K.default.setParam("limit", r()(this).val()), K.default.setParam("page", 1), K.default.applyFilter()
          }))
        }
      }]) && Rt(n.prototype, i), o && Rt(n, o), e
    }(d.a);

    function $t(t) {
      return ($t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Vt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Mt(t, e) {
      return !e || "object" !== $t(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Dt(t) {
      return (Dt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Nt(t, e) {
      return (Nt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ut = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Mt(this, Dt(e).call(this))).searchValue = "", t.selector = {
          clearButton: ".boost-pfs-in-collection-search-clear",
          searchInput: ".boost-pfs-in-collection-search-input",
          searchWrapper: ".boost-pfs-in-collection-search-wrapper"
        }, t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Nt(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n      <div class="boost-pfs-in-collection-search-wrapper">\n        <input aria-label="In-collection Search" class="boost-pfs-in-collection-search-input" type="text" placeholder="{{placeholder}}">\n\t\t\t\t<button type="button" class="boost-pfs-in-collection-search-clear">\n\t\t\t\t\t<svg aria-hidden="true" width="15" height="16" viewBox="0 0 20 20">\n\t\t\t\t\t\t<path d="M11.414 10l6.293-6.293a1 1 0 10-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293A.998.998 0 0018 17a.999.999 0 00-.293-.707L11.414 10z" fill="#222222"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t\t<button type="button" class="boost-pfs-in-collection-search-button">\n\t\t\t\t\t<svg aria-hidden="true" width="15" height="16" viewBox="0 0 15 16" fill="none">\n\t\t\t\t\t\t<path d="M14.4323 14.4001L10.4594 10.4801C12.1215 8.32012 11.9188 5.20012 9.93233 3.24012C7.74314 1.08012 4.17558 1.08012 1.94585 3.24012C-0.243342 5.40012 -0.243342 8.92012 1.94585 11.1201C2.9999 12.1601 4.41882 12.7601 5.91882 12.7601C7.13504 12.7601 8.31071 12.3601 9.28368 11.6401L13.2567 15.5601C13.4188 15.7201 13.6215 15.8001 13.8242 15.8001C14.0269 15.8001 14.2296 15.7201 14.3918 15.5601C14.7567 15.2001 14.7567 14.7201 14.4323 14.4001ZM5.95936 11.1201C4.90531 11.1201 3.89179 10.7201 3.12152 9.96012C1.54044 8.40012 1.54044 5.92012 3.12152 4.36012C3.89179 3.60012 4.94585 3.20012 5.95936 3.20012C6.97287 3.20012 8.02693 3.60012 8.7972 4.36012C10.3783 5.92012 10.3783 8.40012 8.7972 9.96012C8.02693 10.7201 7.01341 11.1201 5.95936 11.1201Z" fill="#222222"/>\n\t\t\t\t\t</svg>\t\n\t\t\t\t</button>\n      </div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = u.a.stripHtml(o.a.getSettingValue("general.collectionSearchLabel"));
          return this.getTemplate().replace(/{{placeholder}}/g, t)
        }
      }, {
        key: "isRender", value: function () {
          return o.a.getSettingValue("general.enableCollectionSearch") && u.a.isCollectionPage()
        }
      }, {
        key: "render", value: function () {
          if (!r()(this.selector.searchWrapper).length) {
            s.a.inCollectionSearch && r()(s.a.inCollectionSearch).length > 0 && r()(s.a.inCollectionSearch).html(this.compileTemplate());
            var t = r()(this.selector.searchInput);
            t.length && (t.val(l.a.queryParams.q || ""), this.searchValue = l.a.queryParams.q || "", this.searchValue && r()(this.selector.clearButton).show())
          }
        }
      }, {
        key: "bindEvents", value: function () {
          r()(this.selector.searchInput).off("input"), r()(this.selector.clearButton).off("click"), r()(this.selector.searchInput).on("input", this.debounce(this.onTypeInCollectionSearch.bind(this), 300)), r()(this.selector.clearButton).on("click", this.onClickClearButton.bind(this))
        }
      }, {
        key: "onTypeInCollectionSearch", value: function (t) {
          this.setSearchValue(t), this.searchValue ? r()(this.selector.clearButton).show() : r()(this.selector.clearButton).hide(), this.applyApi()
        }
      }, {
        key: "setSearchValue", value: function (t) {
          if (t && t.target) {
            var e = t.target.value;
            e = "function" == typeof e.toString ? e.toLowerCase().trim() : "", this.searchValue = e
          } else this.searchValue = ""
        }
      }, {
        key: "onClickClearButton", value: function () {
          r()(this.selector.searchInput).val(""), this.searchValue = "", r()(this.selector.clearButton).hide(), this.applyApi(), this.afterClear()
        }
      }, {
        key: "afterClear", value: function () {
        }
      }, {
        key: "applyApi", value: function () {
          K.default.setParam("q", this.searchValue), K.default.setParam("page", 1), K.default.applyFilter("incollection_search")
        }
      }, {
        key: "debounce", value: function (t, e) {
          var n;
          return function () {
            var i = this, r = arguments, o = function () {
              t.apply(i, r)
            };
            clearTimeout(n), n = setTimeout(o, e)
          }
        }
      }]) && Vt(n.prototype, i), a && Vt(n, a), e
    }(d.a);

    function qt(t) {
      return (qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Ht(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Wt(t, e) {
      return !e || "object" !== qt(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Gt(t) {
      return (Gt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function zt(t, e) {
      return (zt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Kt = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Wt(this, Gt(e).call(this))).data = null, l.a.currentTerm = u.a.getSearchTerm(), t.$searchResultHeader = r()("." + N.a.searchResultHeader), t.$searchResultNumber = r()("." + N.a.searchResultNumber), t
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && zt(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          l.a.currentTerm && (this.searchTerm = u.a.escape(l.a.currentTerm.trim()))
        }
      }, {
        key: "compileSEOTitleTemplate", value: function () {
          var t = this.data.total_product <= 1 ? a.a.search.seoTitleOne : a.a.search.seoTitleOther;
          return t && (t = t.replace(/{{ count }}/g, this.data.total_product).replace(/{{ terms }}/g, this.searchTerm)), t
        }
      }, {
        key: "compileSearchResultHeader", value: function () {
          if (this.searchTerm) var t = a.a.search.resultHeader; else t = a.a.search.generalTitle;
          return t.replace(/{{ terms }}/g, this.searchTerm)
        }
      }, {
        key: "compileSearchResultNumber", value: function () {
          var t = "";
          return this.searchTerm && (t = a.a.search.resultNumber), t.replace(/{{ count }}/g, "<strong>" + this.data.total_product + "</strong>").replace(/{{ terms }}/g, "<strong>" + this.searchTerm + "</strong>")
        }
      }, {
        key: "isRender", value: function () {
          return !!this.data
        }
      }, {
        key: "render", value: function () {
          this._buildSEOTitle(), this._buildSearchResultHeader(), this._buildSearchResultNumber()
        }
      }, {
        key: "setData", value: function (t) {
          t && (this.data = t)
        }
      }, {
        key: "_buildSEOTitle", value: function () {
          if (o.a.getSettingValue("search.enableFixHeadTitle")) {
            var t = this.compileSEOTitleTemplate();
            t && this.searchTerm && "" !== this.searchTerm && (document.title = t.replace(/&quot;/g, '"'))
          }
        }
      }, {
        key: "_buildSearchResultHeader", value: function () {
          var t = this.compileSearchResultHeader();
          this.$searchResultHeader.html(t)
        }
      }, {
        key: "_buildSearchResultNumber", value: function () {
          var t = this.compileSearchResultNumber();
          this.$searchResultNumber.html(t)
        }
      }]) && Ht(n.prototype, i), s && Ht(n, s), e
    }(d.a);

    function Yt(t) {
      return (Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Qt(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Jt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Zt(t, e) {
      return !e || "object" !== Yt(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Xt(t) {
      return (Xt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function te(t, e) {
      return (te = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ee = function (t) {
      function e() {
        return Qt(this, e), Zt(this, Xt(e).apply(this, arguments))
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && te(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
          return ""
        }
      }, {
        key: "buildBreadcrumb", value: function () {
          if (this.collectionData = this.parent.collectionData, this.collectionData && this.collectionData.collection) {
            var t = r()(s.a.breadcrumb);
            t.length && t.html(this.compileTemplate())
          }
        }
      }]) && Jt(n.prototype, i), o && Jt(n, o), e
    }(d.a);

    function ne(t) {
      return (ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ie(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function re(t, e) {
      return !e || "object" !== ne(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function oe(t) {
      return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ae(t, e) {
      return (ae = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var le = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = re(this, oe(e).call(this))).data = null, t.defaultCollectionData = {
          collection: {
            description: "",
            handle: o.a.getSettingValue("general.collection_handle"),
            title: a.a.collectionAll
          }
        }, t.collectionData = {}, t.$collectionHeader = r()("." + N.a.collectionHeader), t.$collectionDescription = r()("." + N.a.collectionDescription), t.$collectionImage = r()("." + N.a.collectionImage), t
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ae(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          this.breadcrumb = new ee, this.addComponent(this.breadcrumb)
        }
      }, {
        key: "isRender", value: function () {
          return !!this.data && ("collection" == this.parent.eventType || "history" == this.parent.eventType)
        }
      }, {
        key: "render", value: function () {
          var t = window.location.pathname;
          if (t && "/" != t) {
            if ("/collections/all" == t) this.collectionData = this.defaultCollectionData; else if (u.a.isVendorPage() || u.a.isTypePage()) this.collectionData = {
              collection: {
                description: "",
                handle: "",
                title: u.a.getSearchTerm()
              }
            }; else if (!u.a.isSearchPage()) {
              var e = u.a.getWindowLocation().href.split("?")[0] + "?view=desc";
              r.a.ajax({
                method: "GET",
                url: e,
                dataType: "json",
                success: this._onGetCollectionDataSuccess.bind(this),
                error: this._onGetCollectionDataError.bind(this)
              })
            }
            this._buildPageInfo()
          }
        }
      }, {
        key: "setData", value: function (t) {
          t && (this.data = t)
        }
      }, {
        key: "_buildPageInfo", value: function () {
          this.breadcrumb && this.breadcrumb.buildBreadcrumb(), this.buildCollectionDetail(), this.buildDocumentInfo()
        }
      }, {
        key: "buildCollectionDetail", value: function () {
          if (void 0 !== this.collectionData && this.collectionData.hasOwnProperty("collection")) {
            var t = this.collectionData.collection, e = t.hasOwnProperty("title") && "" != t.title ? t.title : null,
              n = t.hasOwnProperty("description") && "" != t.description ? t.description : null,
              i = t.hasOwnProperty("image") && t.image && t.image.src ? t.image.src : null;
            e ? this.$collectionHeader.html(e).show() : this.$collectionHeader.hide(), n ? this.$collectionDescription.html(n).show() : this.$collectionDescription.hide(), i ? this.$collectionImage.attr("src", i).css("background-image", "url(" + i + ")").removeClass(N.a.collectionNoImage).addClass(N.a.collectionHasImage) : this.$collectionImage.attr("src", "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==").css("background-image", "none").removeClass(N.a.collectionHasImage).addClass(N.a.collectionNoImage)
          }
        }
      }, {
        key: "buildDocumentInfo", value: function () {
          if (void 0 !== this.collectionData && this.collectionData.hasOwnProperty("collection")) {
            var t = this.collectionData.collection.title + " - " + l.a.shopName;
            document.title = t
          }
        }
      }, {
        key: "_onGetCollectionDataSuccess", value: function (t) {
          this.collectionData = t, this._buildPageInfo()
        }
      }, {
        key: "_onGetCollectionDataError", value: function () {
          this.collectionData = this.defaultCollectionData, this._buildPageInfo()
        }
      }]) && ie(n.prototype, i), s && ie(n, s), e
    }(d.a);

    function se(t) {
      return (se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ce(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function ue(t, e) {
      return !e || "object" !== se(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function pe(t) {
      return (pe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function fe(t, e) {
      return (fe = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var he = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = ue(this, pe(e).call(this))).selecor = {robots: 'meta[content="noindex,nofollow,nosnippet"]'}, t.currentCollection = boostPFSConfig.general.collection_handle, t.settings = {boostCollection: o.a.getSettingValue("general.boostCollection")}, t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && fe(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<meta name="robots" content="noindex,nofollow,nosnippet">\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate()
        }
      }, {
        key: "isRender", value: function () {
          return o.a.getSettingValue("general.enableSeo") && !r()(this.selecor.robots).length && (0 == this.currentCollection.indexOf(this.settings.boostCollection) || u.a.checkExistFilterOptionParam() || l.a.queryParams.q && !u.a.isSearchPage())
        }
      }, {
        key: "render", value: function () {
          r()("head").append(this.compileTemplate())
        }
      }]) && ce(n.prototype, i), a && ce(n, a), e
    }(d.a);

    function ye(t) {
      return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function de(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function ge(t, e) {
      return !e || "object" !== ye(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function me(t) {
      return (me = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function be(t, e) {
      return (be = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ve = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = ge(this, me(e).call(this))).$loadMoreContainer = null, t.$defaultElement = r()(s.a.pagination), t.$element = r()(s.a.loadMore), t.selector = {
          loadMoreButton: "." + N.a.productLoadMore + "-button",
          loadMoreTotal: s.a.loadMore + "-total"
        }, t.settings.sessionStorageCurrentNextPage = o.a.getSettingValue("general.sessionStorageCurrentNextPage"), t.settings.sessionStoragePreviousPageEvent = o.a.getSettingValue("general.sessionStoragePreviousPageEvent"), t
      }

      var n, i, c;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && be(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function (t) {
          switch (t) {
            case"total":
              return '\n\t\t\t\t\t<div class="{{class.productLoadMore}}-total">{{progressLable}}</div>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t{{loadMoreProgress}}\n\t\t\t\t\t<div class="{{class.productLoadMore}}-button-container">\n\t\t\t\t\t\t<button aria-label="{{label.loadMore}}" class="{{class.productLoadMore}}-button">{{label.loadMore}}</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="{{class.productLoadMore}}-loading" style="display: none;">\n\t\t\t\t\t\t<div class="{{class.productLoadMore}}-icon"></div>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim()
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = this.compileTotalTemplate();
          l.a.queryParams.page || (l.a.queryParams.page = 1);
          var e = this.totalProduct - l.a.queryParams.page * l.a.queryParams.limit;
          return e = Math.min(e, l.a.queryParams.limit), this.getTemplate().replace(/{{loadMoreProgress}}/g, t).replace(/{{label.loadMore}}/g, a.a.loadMore).replace(/{{class.productLoadMore}}/g, N.a.productLoadMore).replace(/{{ amountProduct }}/g, e)
        }
      }, {
        key: "compileTotalTemplate", value: function () {
          u.a.isLoadPreviousPagePaginationType() && "page" == this.parent.eventType ? this.nextPage = parseInt(window.sessionStorage.getItem(this.settings.sessionStorageCurrentNextPage)) : this.nextPage = l.a.queryParams.page;
          var t = (this.nextPage - 1) * l.a.queryParams.limit + 1,
            e = r()(s.a.products + " > *:not(script):not(style)").length;
          e && (t -= e - l.a.queryParams.limit), this.fromProduct = t;
          var n = (this.nextPage - 1) * l.a.queryParams.limit + 1 + this.data.products.length - 1;
          return this.toProduct = n, this.getTemplate("total").replace(/{{progressLable}}/g, a.a.loadMoreTotal).replace(/{{ from }}/g, this.fromProduct).replace(/{{ to }}/g, this.toProduct).replace(/{{ total }}/g, this.totalProduct).replace(/{{class.productLoadMore}}/g, N.a.productLoadMore)
        }
      }, {
        key: "render", value: function () {
          this.$defaultElement.empty();
          var t = l.a.queryParams, e = this.compileTemplate();
          if (this.$element.html(e), r()(s.a.loadMoreButtonContainer).length > 0) {
            var n = this.compileTotalTemplate();
            r()(this.selector.loadMoreTotal).replaceWith(n)
          }
          this.$loadMoreContainer = r()(s.a.loadMoreButtonContainer), this.hideLoading();
          var i = Math.ceil(this.totalProduct / t.limit);
          parseInt(t.page) < i && this.toProduct < this.totalProduct ? (this.$element.show(), this.$loadMoreContainer.show()) : this.$element.hide()
        }
      }, {
        key: "bindEvents", value: function () {
          u.a.isLoadPreviousPagePaginationType() ? this.nextPage = parseInt(window.sessionStorage.getItem(this.settings.sessionStorageCurrentNextPage)) : this.nextPage = l.a.queryParams.page, this.$element.find(this.selector.loadMoreButton).off("click").on("click", this._onClickEvent.bind(this))
        }
      }, {
        key: "_onClickEvent", value: function (t) {
          if (t.preventDefault(), this.$loadMoreContainer.hide(), this.showLoading(), this.nextPage++, l.a.internalClick = !0, K.default.setParam("limit", this.settings.limit), K.default.setParam("page", this.nextPage), u.a.FilterResult.isAdvancedPaginationType()) u.a.isLoadPreviousPagePaginationType() && (window.sessionStorage.setItem(this.settings.sessionStorageCurrentNextPage, this.nextPage), window.sessionStorage.setItem(this.settings.sessionStoragePreviousPageEvent, 0)), K.default.applyFilter("page"); else {
            var e = Ns.instance.filter;
            K.default.getFilterData("page", e.setData.bind(e))
          }
        }
      }]) && de(n.prototype, i), c && de(n, c), e
    }(at);

    function Se(t) {
      return (Se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Oe(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Te(t, e) {
      return !e || "object" !== Se(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Pe(t) {
      return (Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function we(t, e) {
      return (we = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var _e = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Te(this, Pe(e).call(this))).$element = r()(s.a.bottomPagination), t.settings.positionShowInfiniteLoading = o.a.getSettingValue("general.positionShowInfiniteLoading"), t.settings.sessionStorageCurrentNextPage = o.a.getSettingValue("general.sessionStorageCurrentNextPage"), t.settings.sessionStoragePreviousPageEvent = o.a.getSettingValue("general.sessionStoragePreviousPageEvent"), t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && we(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="{{class.productLoadMore}}-loading" style="display: none;">\n\t\t\t\t<div class="{{class.productLoadMore}}-icon"></div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.productLoadMore}}/g, N.a.productLoadMore)
        }
      }, {
        key: "isRender", value: function () {
          return null !== this.data && z.isPanelActive(tt.Enum.PRODUCT)
        }
      }, {
        key: "render", value: function () {
          if (this.$element.empty(), this.$element.show(), 0 == this.$loadMore.find(s.a.loadMoreLoading).length) {
            var t = this.compileTemplate();
            this.$loadMore.prepend(t), this.$loadMore.show()
          }
          this.hideLoading()
        }
      }, {
        key: "bindEvents", value: function () {
          u.a.isLoadPreviousPagePaginationType() ? this.nextPage = parseInt(window.sessionStorage.getItem(this.settings.sessionStorageCurrentNextPage)) : this.nextPage = l.a.queryParams.page, this.totalProduct > this.settings.limit * this.nextPage && (this.scrolling = !1, this.scrollToBottom = !1, this.$element.length > 0 && r()(window).on("scroll", this._onScrollEvent.bind(this)))
        }
      }, {
        key: "_onScrollEvent", value: function (t) {
          if (t.preventDefault(), t.stopPropagation(), r()(s.a.products).hasClass(N.a.productWrapLoading) || !z.isPanelActive(tt.Enum.PRODUCT)) return !1;
          this._isScrollToBottom() && this._loadMoreProducts()
        }
      }, {
        key: "_isScrollToBottom", value: function () {
          var t = r()(window).height() * (r()(window).height() / r()(document).outerHeight()),
            e = parseInt(this.$element.offset().top), n = window.pageYOffset,
            i = parseInt(n) + t + parseInt(this.settings.positionShowInfiniteLoading);
          return n + r()(window).height() + t >= r()(document).outerHeight() - 100 && (this.scrollToBottom = !0), !this.scrolling && this.data.products.length > 0 && (i >= e || i < e && this.scrollToBottom)
        }
      }, {
        key: "_loadMoreProducts", value: function () {
          this.showLoading(), this.scrolling = !0, this.nextPage++;
          var t = Math.ceil(this.totalProduct / this.settings.limit);
          if (this.nextPage <= t) if (l.a.internalClick = !0, K.default.setParam("limit", this.settings.limit), K.default.setParam("page", this.nextPage), u.a.FilterResult.isAdvancedPaginationType()) u.a.isLoadPreviousPagePaginationType() && (window.sessionStorage.setItem(this.settings.sessionStorageCurrentNextPage, this.nextPage), window.sessionStorage.setItem(this.settings.sessionStoragePreviousPageEvent, 0)), K.default.applyFilter("page"); else {
            var e = Ns.instance.filter;
            K.default.getFilterData("page", e.setData.bind(e))
          }
        }
      }]) && Oe(n.prototype, i), a && Oe(n, a), e
    }(at);

    function Ce(t) {
      return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ke(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ee(t, e) {
      return !e || "object" !== Ce(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Ie(t) {
      return (Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Le(t, e) {
      return (Le = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ae = function (t) {
      function e() {
        var t;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Ee(this, Ie(e).call(this))).$wrapper = r()(s.a.btnLoadPreviousPageWrapperSelector), t.$element = r()(s.a.btnLoadPreviousPageSelector), t.$productList = r()(s.a.products), t.settings.sessionStorageCurrentPreviousPage = o.a.getSettingValue("general.sessionStorageCurrentPreviousPage"), t.settings.sessionStorageCurrentPage = o.a.getSettingValue("general.sessionStorageCurrentPage"), t.settings.sessionStorageCurrentNextPage = o.a.getSettingValue("general.sessionStorageCurrentNextPage"), t.settings.sessionStoragePreviousPageEvent = o.a.getSettingValue("general.sessionStoragePreviousPageEvent");
        var n = o.a.getSettingValue("general.loadPreviousType");
        return t.settings.loadPreviousType = n || o.a.getSettingValue("general.paginationType"), t.state = {
          isLoading: !1,
          lastScrollPos: window.scrollY
        }, t
      }

      var n, i, c;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Le(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          K.default.addAfterApplyFilter(this.doneLoadPreviousPage.bind(this))
        }
      }, {
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="{{class.buttonLoadPreviousPageSelector}}">\n\t\t\t\t<a href="javascript:void(0)" aria-label="{{label.loadPreviousPage}}" class="js-{{class.buttonLoadPreviousPageSelector}}">{{label.loadPreviousPage}}</a>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "getWrapperTemplate", value: function () {
          return '<div class="{{class.buttonLoadPreviousPageWrapper}}"></div>'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.buttonLoadPreviousPageSelector}}/g, N.a.buttonLoadPreviousPageSelector).replace(/{{label.loadPreviousPage}}/g, a.a.loadPreviousPage)
        }
      }, {
        key: "compileWrapperTemplate", value: function () {
          return this.getWrapperTemplate().replace(/{{class.buttonLoadPreviousPageWrapper}}/g, N.a.buttonLoadPreviousPageWrapper)
        }
      }, {
        key: "isRender", value: function () {
          return this.data && u.a.isLoadPreviousPagePaginationType() && "page" != this.parent.eventType
        }
      }, {
        key: "render", value: function () {
          this.$wrapper.length || (this.$wrapper = r()(this.compileWrapperTemplate()), this.$wrapper.insertBefore(this.$productList)), this.$element.length || (this.$element = r()(this.compileTemplate()), this.$wrapper.append(this.$element));
          var t = Math.ceil(this.totalProduct / l.a.queryParams.limit), e = l.a.queryParams.page, n = t > 1 && e > 1;
          window.sessionStorage.setItem(this.settings.sessionStorageCurrentPreviousPage, e), window.sessionStorage.setItem(this.settings.sessionStorageCurrentPage, e), window.sessionStorage.setItem(this.settings.sessionStorageCurrentNextPage, e), window.sessionStorage.setItem(this.settings.sessionStoragePreviousPageEvent, 1), n && "load_more" == this.settings.loadPreviousType ? this.$wrapper.show() : (this.$wrapper.hide(), u.a.isiOS() && (this.state.isLoading = !1))
        }
      }, {
        key: "isBindEvents", value: function () {
          return u.a.isLoadPreviousPagePaginationType()
        }
      }, {
        key: "bindEvents", value: function () {
          "load_more" == this.settings.loadPreviousType ? (this.$element.off("click"), this.$element.on("click", this._onClickEvent.bind(this))) : "infinite" != this.settings.loadPreviousType || this.isBoundEvent || r()(document).on("scroll", this._onScrollEvent.bind(this))
        }
      }, {
        key: "_onClickEvent", value: function (t) {
          t && t.preventDefault(), this.loadPreviousPage()
        }
      }, {
        key: "_onScrollEvent", value: function (t) {
          if (!this.state.isLoading) {
            var e = window.scrollY, n = this.$productList.offset().top;
            e < this.state.lastScrollPos && e < n + 100 ? (this.state.isLoading = !0, this.loadPreviousPage()) : this.state.lastScrollPos = e
          }
        }
      }, {
        key: "loadPreviousPage", value: function () {
          var t = l.a.queryParams.page;
          if (null !== window.sessionStorage.getItem(this.settings.sessionStorageCurrentPreviousPage) ? this.currentPreviousPage = parseInt(window.sessionStorage.getItem(this.settings.sessionStorageCurrentPreviousPage)) : this.currentPreviousPage = t, this.currentPreviousPage < 2) return this.$wrapper.hide(), !1;
          l.a.internalClick = !0, K.default.setParam("limit", this.settings.limit), this.currentPreviousPage--, window.sessionStorage.setItem(this.settings.sessionStorageCurrentPreviousPage, this.currentPreviousPage), window.sessionStorage.setItem(this.settings.sessionStoragePreviousPageEvent, 1), K.default.setParam("page", this.currentPreviousPage), K.default.applyFilter("page", "previous"), this.currentPreviousPage < 2 && this.$wrapper.hide()
        }
      }, {
        key: "doneLoadPreviousPage", value: function (t, e, n) {
          var i = this;
          "page" == e && "previous" == n && "infinite" == this.settings.loadPreviousType && setTimeout((function () {
            var t = l.a.queryParams.page + 1, e = r()(s.a.products + ' [data-page="' + t + '"]');
            if (e.length > 0) {
              var n = parseInt(e.offset().top - 100);
              window.scrollTo(0, n)
            }
            i.state.isLoading = !1
          }), 200)
        }
      }]) && ke(n.prototype, i), c && ke(n, c), e
    }(at);

    function Re(t) {
      return (Re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Fe(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function xe(t, e) {
      return !e || "object" !== Re(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Be(t) {
      return (Be = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function je(t, e) {
      return (je = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var $e = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), i = xe(this, Be(e).call(this)), t || (t = s.a.searchPagePagination), i.type = n, i.$element = r()(t), i.$productList = r()(s.a.products), i.filterResult = i.parent, i
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && je(t, e)
      }(e, t), n = e, (i = [{
        key: "isRender", value: function () {
          return l.a.hasOwnProperty("searchDisplay") && l.a.searchDisplay === this.type
        }
      }, {
        key: "render", value: function () {
          this.$element.html(this.compileTemplate())
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element.show(), this.$element.find("a").off("click"), this.$element.find("a").on("click", this._onClickEvent.bind(this))
        }
      }, {
        key: "setData", value: function (t, e, n, i) {
          t && (this.data = t);
          var r = this.parent.searchResultPanels.children, o = this.type;
          this.panelItem = r.find((function (t) {
            return t.type == o
          })), this.totalProduct = e, this.limit = n, this.page = i, this.paginationType = Settings.getSettingValue("general.paginationType")
        }
      }, {
        key: "_onClickEvent", value: function (t) {
          t.preventDefault(), l.a.internalClick = !0;
          var e = new URL(r()(t.currentTarget).attr("href")).searchParams.get("page");
          e || (e = 1), K.default.setParam("page", e), K.default.setParam("limit", this.limit), K.default.getFilterData("search", this.panelItem._searchPanelCallback.bind(this.panelItem)), window.scrollTo({
            top: this.$productList.offset().top - 50,
            behavior: "smooth"
          })
        }
      }]) && Fe(n.prototype, i), o && Fe(n, o), e
    }(bt);

    function Ve(t) {
      return (Ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Me(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function De(t, e) {
      return !e || "object" !== Ve(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Ne(t) {
      return (Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ue(t, e) {
      return (Ue = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var qe = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = De(this, Ne(e).call(this))).$productList = r()(s.a.products), t.$element = [], t.isFetchedProductData = !1, t.settings = {
          showPlaceholderProductList: o.a.getSettingValue("general.showPlaceholderProductList"),
          placeholderImageRatio: o.a.getSettingValue("general.placeholderImageRatio"),
          productGridClass: o.a.getSettingValue("custom.product_grid_class"),
          placeholderProductGridItemClass: o.a.getSettingValue("general.placeholderProductGridItemClass"),
          productsPerRow: o.a.getSettingValue("custom.products_per_row"),
          placeholderProductPerRow: o.a.getSettingValue("general.placeholderProductPerRow"),
          sessionStoragePreviousPageEvent: o.a.getSettingValue("general.sessionStoragePreviousPageEvent")
        }, t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ue(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          this.eventType = this.parent.eventType, K.default.addBeforeApplyFilter(this.renderBeforeApplyFilter.bind(this))
        }
      }, {
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="{{wrapperClass}} {{class.filterProductSkeleton}}">\n\t\t\t\t<div class="{{class.filterProductSkeleton}}-image" style="padding-top: {{paddingTop}}%"></div>\n\t\t\t\t<div class="{{class.filterProductSkeleton}}-meta">\n\t\t\t\t\t<span class="{{class.filterSkeletonText}} {{class.filterSkeleton}}"></span>\n\t\t\t\t\t<span class="{{class.filterSkeletonText}} {{class.filterSkeleton}}-width1"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return void 0 !== l.a.queryParams.display && "grid" != l.a.queryParams.display && this.compileTemplateExtra ? this.compileTemplateExtra() : this.compileTemplateGridType()
        }
      }, {
        key: "compileTemplateGridType", value: function () {
          var t = parseFloat(this.settings.placeholderImageRatio), e = t > 0 ? t : 1.4, n = "";
          return "" == (n = this.settings.productGridClass && "" !== this.settings.productGridClass ? this.settings.productGridClass : this.settings.placeholderProductGridItemClass) && (n = this.$productList.children().length > 0 ? this.$productList.children().first().attr("class") : N.a.filterSkeleton + "-def-width"), this.getTemplate().replace(/{{class.filterProductSkeleton}}/g, N.a.filterProductSkeleton).replace(/{{class.filterSkeleton}}/g, N.a.filterSkeleton).replace(/{{class.filterSkeletonText}}/g, N.a.filterSkeletonText).replace(/{{paddingTop}}/g, 100 * e).replace(/{{wrapperClass}}/g, n)
        }
      }, {
        key: "compileTemplateExtra", value: function () {
          return !1
        }
      }, {
        key: "isRender", value: function () {
          var t = u.a.getDefaultSorting();
          return this.settings.showPlaceholderProductList && z.isPanelActive(tt.Enum.PRODUCT) && (!l.a.loadProductFirst || !u.a.isCollectionPage() || u.a.isVendorPage() || u.a.isTagPage() || u.a.isTypePage() || "" != t && t != o.a.getSettingValue("general.default_sort_by") || "best-selling" === l.a.defaultSorting && !o.a.getSettingValue("general.loadProductFirstBestSelling") || l.a.defaultSorting.startsWith("extra") || o.a.getSettingValue("general.productAndVariantAvailable") || o.a.getSettingValue("general.sortingAvailableFirst") || l.a.inventoryBaseSelectedLocations || l.a.loadProductFirst && (l.a.hasFilterOptionParam || "init" != this.eventType))
        }
      }, {
        key: "render", value: function () {
          var t = this.settings.productsPerRow || this.settings.placeholderProductPerRow, e = this.compileTemplate();
          this.$element = [];
          for (var n = 0; n < t; n++) this.$element.push(r()(e));
          var i = this.parent.productList,
            o = i.settings.loadProductFromLiquid && i.settings.loadProductFromLiquidType == ProductList.Enum.loadProductType.AJAX;
          this.isFetchedProductData ? o && !i.isFetchedAjaxProductData || this.setHide() : this.setShow()
        }
      }, {
        key: "renderBeforeApplyFilter", value: function (t) {
          this.eventType = t, this.refresh()
        }
      }, {
        key: "setData", value: function (t) {
          t && this.isRender() && (this.isFetchedProductData = !0)
        }
      }, {
        key: "setShow", value: function () {
          var t = this;
          this.$productList.addClass(N.a.productWrapLoading), this.$productList.css("min-height", this.$productList.height()), (u.a.isDefaultPaginationType() || !u.a.isDefaultPaginationType() && "page" !== this.eventType) && this.$productList.html(""), u.a.isLoadPreviousPagePaginationType() && parseInt(window.sessionStorage.getItem(this.settings.sessionStoragePreviousPageEvent)) ? this.$element.forEach((function (e) {
            return t.$productList.prepend(e)
          })) : this.$element.forEach((function (e) {
            return t.$productList.append(e)
          }))
        }
      }, {
        key: "setHide", value: function () {
          var t = this;
          this.$productList.find("." + N.a.filterProductSkeleton).remove(), setTimeout((function () {
            t.$productList.removeClass(N.a.productWrapLoading), t.$productList.css("min-height", 0)
          })), this.isFetchedProductData = !1
        }
      }]) && Me(n.prototype, i), a && Me(n, a), e
    }(d.a);

    function He(t) {
      return (He = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function We(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ge(t, e) {
      return !e || "object" !== He(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function ze(t) {
      return (ze = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ke(t, e) {
      return (Ke = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ye = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Ge(this, ze(e).call(this))).data = null, t.id = null, t.index = 0, t.$element = null, t.displayImage = !0, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ke(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
          var t = "/collections/" + this.data.handle, e = "", n = "";
          return this.displayImage && (this.data.image && this.data.image.hasOwnProperty("src") && "" !== this.data.image.src && (n = u.a.optimizeImage(this.data.image.src, "200x")), n.length > 0 && (e = this.getTemplate(en.Enum.tempType.IMAGE))), this.getTemplate().replace(/{{itemThumbnail}}/g, e).replace(/{{itemThumbSrc}}/g, n).replace(/{{class.filterResultItem}}/g, N.a.filterResultItem).replace(/{{itemUrl}}/g, t).replace(/{{itemTitle}}/g, u.a.escape(this.data.title))
        }
      }, {
        key: "render", value: function () {
          this.$element = r()(this.compileTemplate())
        }
      }, {
        key: "setData", value: function (t, e) {
          this.data = t, this.id = t.id, this.index = e, this.displayImage = this.parent.panelData.hasOwnProperty("displayImage") && this.parent.panelData.displayImage
        }
      }]) && We(n.prototype, i), o && We(n, o), e
    }(d.a);

    function Qe(t) {
      return (Qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Je(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ze(t, e) {
      return !e || "object" !== Qe(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Xe(t) {
      return (Xe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function tn(t, e) {
      return (tn = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var en = function (t) {
      function e() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Ze(this, Xe(e).call(this))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && tn(t, e)
      }(e, t), n = e, r = [{
        key: "Enum", get: function () {
          return {tempType: {ITEM: "collection_item", IMAGE: "image"}}
        }
      }], (i = [{
        key: "getTemplate", value: function (t) {
          switch (t) {
            case e.Enum.tempType.IMAGE:
              return '\n\t\t\t\t\t<div class="{{class.filterResultItem}}-image">\n\t\t\t\t\t\t<img src="{{itemThumbSrc}}" alt="{{itemTitle}}" />\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t<div class="{{class.filterResultItem}} {{class.filterResultItem}}-collection">\n\t\t\t\t\t\t<a href="{{itemUrl}}" aria-label="{{itemTitle}}" title="{{itemTitle}}">\n\t\t\t\t\t\t\t{{itemThumbnail}}\n\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-content">\n\t\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-title">{{itemTitle}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim()
          }
        }
      }]) && Je(n.prototype, i), r && Je(n, r), e
    }(Ye);

    function nn(t) {
      return (nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function rn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function on(t, e) {
      return !e || "object" !== nn(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function an(t) {
      return (an = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ln(t, e) {
      return (ln = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var sn = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = on(this, an(e).call(this))).$element = r()(s.a.collections), t.data = null, t.totalCollection = 0, t.settings = {searchPanelBlocks: Settings.getSettingValue("search.searchPanelBlocks")}, t.panelData = {}, t.settings.searchPanelBlocks.hasOwnProperty(tt.Enum.COLLECTION) && (t.panelData = t.settings.searchPanelBlocks[tt.Enum.COLLECTION]), t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ln(t, e)
      }(e, t), n = e, (i = [{
        key: "isRender", value: function () {
          return null != this.data && z.isPanelActive(tt.Enum.COLLECTION)
        }
      }, {
        key: "render", value: function () {
          var t = this, e = [];
          this.collectionItems.forEach((function (t) {
            e.push(t.$element)
          })), this.$element.html(""), e.forEach((function (e) {
            return t.$element.append(e)
          }))
        }
      }, {
        key: "setData", value: function (t) {
          var e = this;
          t && t.collections && t.collections.length && (this.data = t.collections, this.totalCollection = t.total_collection ? t.total_collection : 0, this.collectionItems = [], this.data.forEach((function (t, n) {
            var i = new en;
            e.addComponent(i), i.setData(t), e.collectionItems.push(i)
          })))
        }
      }]) && rn(n.prototype, i), o && rn(n, o), e
    }(d.a);

    function cn(t) {
      return (cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function un(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function pn(t, e) {
      return !e || "object" !== cn(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function fn(t) {
      return (fn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function hn(t, e) {
      return (hn = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var yn = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = pn(this, fn(e).call(this))).data = null, t.id = null, t.index = 0, t.$element = null, t.displayImage = !0, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && hn(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
          var t = this.data.hasOwnProperty("url") ? this.data.url : "#", e = "", n = "";
          return this.displayImage && (this.data.image && this.data.image.hasOwnProperty("src") && "" !== this.data.image.src && (n = u.a.optimizeImage(this.data.image.src, "200x")), n.length > 0 && (e = this.getTemplate(Sn.Enum.tempType.IMAGE))), this.getTemplate().replace(/{{itemThumbnail}}/g, e).replace(/{{itemThumbSrc}}/g, n).replace(/{{class.filterResultItem}}/g, N.a.filterResultItem).replace(/{{itemUrl}}/g, t).replace(/{{itemTitle}}/g, u.a.escape(this.data.title))
        }
      }, {
        key: "render", value: function () {
          this.$element = r()(this.compileTemplate())
        }
      }, {
        key: "setData", value: function (t, e) {
          this.data = t, this.id = t.id, this.index = e, this.displayImage = this.parent.panelData.hasOwnProperty("displayImage") && this.parent.panelData.displayImage
        }
      }]) && un(n.prototype, i), o && un(n, o), e
    }(d.a);

    function dn(t) {
      return (dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function gn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function mn(t, e) {
      return !e || "object" !== dn(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function bn(t) {
      return (bn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function vn(t, e) {
      return (vn = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Sn = function (t) {
      function e() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), mn(this, bn(e).call(this))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && vn(t, e)
      }(e, t), n = e, r = [{
        key: "Enum", get: function () {
          return {tempType: {ITEM: "page_item", IMAGE: "image"}}
        }
      }], (i = [{
        key: "getTemplate", value: function (t) {
          switch (t) {
            case e.Enum.tempType.IMAGE:
              return '\n\t\t\t\t\t<div class="{{class.filterResultItem}}-image">\n\t\t\t\t\t\t<img src="{{itemThumbSrc}}" alt="{{itemTitle}}" />\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t<div class="{{class.filterResultItem}} {{class.filterResultItem}}-page">\n\t\t\t\t\t\t<a href="{{itemUrl}}" aria-label="{{itemTitle}}" title="{{itemTitle}}">\n\t\t\t\t\t\t\t{{itemThumbnail}}\n\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-content">\n\t\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-title">{{itemTitle}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim()
          }
        }
      }]) && gn(n.prototype, i), r && gn(n, r), e
    }(yn);

    function On(t) {
      return (On = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Tn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Pn(t, e) {
      return !e || "object" !== On(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function wn(t) {
      return (wn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function _n(t, e) {
      return (_n = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Cn = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Pn(this, wn(e).call(this))).$element = r()(s.a.pages), t.data = null, t.totalPage = 0, t.settings = {searchPanelBlocks: Settings.getSettingValue("search.searchPanelBlocks")}, t.panelData = {}, t.settings.searchPanelBlocks.hasOwnProperty(tt.Enum.PAGE) && (t.panelData = t.settings.searchPanelBlocks[tt.Enum.PAGE]), t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && _n(t, e)
      }(e, t), n = e, (i = [{
        key: "isRender", value: function () {
          return null != this.data && z.isPanelActive(tt.Enum.PAGE)
        }
      }, {
        key: "render", value: function () {
          var t = this;
          this.$element.html(""), this.pageItems.forEach((function (e) {
            t.$element.append(e.$element)
          }))
        }
      }, {
        key: "setData", value: function (t) {
          var e = this;
          t && t.pages && t.pages.length && (this.data = t.pages, this.totalPage = t.total_page ? t.total_page : 0, this.pageItems = [], this.data.forEach((function (t, n) {
            var i = new Sn;
            e.addComponent(i), i.setData(t), e.pageItems.push(i)
          })))
        }
      }]) && Tn(n.prototype, i), o && Tn(n, o), e
    }(d.a);

    function kn(t) {
      return (kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function En(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function In(t, e) {
      return !e || "object" !== kn(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Ln(t) {
      return (Ln = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function An(t, e) {
      return (An = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Rn = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = In(this, Ln(e).call(this))).$element = r()(s.a.searchTotalResult), t.total = 0, t.panalType = tt.Enum.PRODUCT, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && An(t, e)
      }(e, t), n = e, (i = [{
        key: "compileTemplate", value: function () {
          return (this.total > 1 ? a.a.search.searchTotalResults : a.a.search.searchTotalResult).replace(/{{ count }}/g, "<strong>" + this.total + "</strong>")
        }
      }, {
        key: "render", value: function () {
          var t = this.compileTemplate();
          this.$element.html(t)
        }
      }, {
        key: "setData", value: function (t, e) {
          "number" == typeof t && (this.total = t), e && (this.panalType = e)
        }
      }]) && En(n.prototype, i), o && En(n, o), e
    }(d.a);

    function Fn(t) {
      return (Fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function xn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Bn(t, e) {
      return !e || "object" !== Fn(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function jn(t) {
      return (jn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function $n(t, e) {
      return ($n = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Vn = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Bn(this, jn(e).call(this))).productsData = null, t.$element = r()(s.a.products), t
      }

      var n, i, c;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && $n(t, e)
      }(e, t), n = e, (i = [{
        key: "getTitleTemplate", value: function () {
          return '\n\t\t\t<div class="product-list-no-search-result-text">{{label.resultEmpty}}</div>\n\t\t\t<div class="boost-pfs-product-no-search-result-title"><h2>{{noSearchResultTitle}}</h2></div>\n\t\t'.trim()
        }
      }, {
        key: "compileTitleTemplate", value: function () {
          var t = o.a.getSettingValue("search.suggestionNoResult"),
            e = t && t.products && t.products.label ? t.products.label : "", n = a.a.search.resultEmptyWithSuggestion,
            i = o.a.getSettingValue("general.current_locale"),
            r = o.a.getSettingValue("labelTranslations." + i + ".search.resultEmpty");
          return r && (n = r), this.getTitleTemplate().replace(/{{noSearchResultTitle}}/g, e).replace(/{{label.resultEmpty}}/g, n).replace(/{{ terms }}/g, "<b>" + l.a.queryParams.q + "</b>")
        }
      }, {
        key: "isRender", value: function () {
          return u.a.isSearchPage() && z.isPanelActive(tt.Enum.PRODUCT) && 0 == this.parent.totalProduct && "filter" != this.eventType && "collection" != this.eventType
        }
      }, {
        key: "render", value: function () {
          if (null != this.data && this.data.length > 0 && 1 == o.a.getSettingValue("search.suggestionNoResult.products.status") && (this.buildProductList(), this.$element && 0 == this.$element.parent().find(".boost-pfs-product-slider-title").length)) {
            var t = this.compileTitleTemplate();
            r()(s.a.products).before(t)
          }
          "init" == this.eventType && (r()(".boost-pfs-filter-tree-mobile-button").hide(), r()(".boost-pfs-filter-tree").hide(), r()(".boost-pfs-filter-left-col").hide(), r()(".boost-pfs-filter-right-col, .boost-pfs-filter-right").css({width: "100%"}), r()(s.a.filterTree).hide(), r()(s.a.topSorting).hide(), r()(s.a.topShowLimit).hide(), r()(s.a.topDisplayType).hide(), r()(s.a.bottomPagination).hide(), r()(s.a.btnLoadPreviousPageWrapperSelector).hide(), r()(s.a.loadMoreButtonContainer).hide())
        }
      }, {
        key: "isBindEvents", value: function () {
          return !1
        }
      }, {
        key: "getNoSearchResultData", value: function () {
          var t = [];
          if (r()(s.a.searchNoResultJson).length > 0) try {
            var e = JSON.parse(r()(s.a.searchNoResultJson).html());
            Array.isArray(e.products) && e.products.length > 0 && (t = e.products)
          } catch (t) {
          }
          return t
        }
      }, {
        key: "prepareProductData", value: function () {
          this.data.forEach((function (t) {
            if (t.price /= 100, t.price_max /= 100, t.price_min /= 100, t.compare_at_price /= 100, t.compare_at_price_max /= 100, t.compare_at_price_min /= 100, t.variants.forEach((function (t) {
              t.price /= 100, t.compare_at_price /= 100
            })), t.options_with_values = [], Array.isArray(t.options) ? t.options.forEach((function (e, n) {
              t.options_with_values.push({values: [], name: u.a.slugify(e), label: e}), t.options[n] = e.toLowerCase()
            })) : t.options = [], t.options.length > 0 && Array.isArray(t.variants)) {
              var e = [];
              t.variants.forEach((function (n) {
                n.merged_options = [];
                for (var i = 0; i < t.options_with_values.length; i++) {
                  var r = n["option" + (i + 1)];
                  r && !e.includes(r) && (t.options_with_values[i].values.push({
                    image: null,
                    title: r
                  }), e.push(r)), n.merged_options.push(t.options_with_values[i].name + ":" + r), n["option_" + t.options_with_values[i].name] = r
                }
              }))
            } else t.variants = [];
            t.images_info = [], Array.isArray(t.media) && (t.images_info = t.media.filter((function (t) {
              return "image" == t.media_type
            }))), Array.isArray(t.variants) && t.variants.forEach((function (e) {
              e.image = e.featured_image ? e.featured_image.src : null, e.image && Array.isArray(t.options_with_values) && Array.isArray(t.images) && t.options_with_values.forEach((function (n) {
                var i = e["option_" + n.name];
                i && n.values.forEach((function (n) {
                  if (n.title && n.title == i && !n.image) {
                    var r = t.images.indexOf(e.image.replace("https:", ""));
                    r >= 0 && (n.image = r + 1)
                  }
                }))
              }))
            }));
            var n = {};
            if (Array.isArray(t.images)) {
              for (var i = 0; i < t.images.length; i++) {
                var r = t.images[i];
                r.startsWith("//") && (r = "https:" + r), n[i + 1] = r
              }
              t.images = n
            }
            t.media || (t.media = []), t.barcodes || (t.barcodes = []), t.collections || (t.collections = []), t.metafields || (t.metafields = []), t.skus || (t.skus = []), null == t.inventory_quantity && (t.inventory_quantity = t.available ? 99999 : 0), t.body_html || (t.body_html = u.a.stripHtml(t.content))
          }))
        }
      }, {
        key: "setData", value: function () {
          var t = this, e = this.getNoSearchResultData();
          if (this.data = e, this.totalProduct = this.data.length, this.eventType = this.parent.eventType, this.prepareProductData(), this.children = [], this.productItems = [], this.totalProduct > 0) {
            var n = this._getProductItemClass();
            e.forEach((function (e, i) {
              var r = new n;
              t.addComponent(r), r.setData(e, i), t.productItems.push(r)
            }))
          }
        }
      }]) && xn(n.prototype, i), c && xn(n, c), e
    }(ft);

    function Mn(t) {
      return (Mn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Dn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Nn(t, e) {
      return !e || "object" !== Mn(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Un(t) {
      return (Un = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function qn(t, e) {
      return (qn = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Hn = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Nn(this, Un(e).call(this))).data = null, t.productList = null, t.totalProduct = 0, t.pagination = "", t.sorting = "", t.breadcrumbs = "", t.eventType = "", t.displayType = "", t.$element = r()(s.a.products), t.settngs = {paginationType: o.a.getSettingValue("general.paginationType")}, t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && qn(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          this.productPlaceholder = new qe, this.addComponent(this.productPlaceholder), this.productList = new ft, this.addComponent(this.productList);
          var t = this._getProductPaginationClass();
          this.pagination = new t, this.addComponent(this.pagination), u.a.isLoadPreviousPagePaginationType() && (this.loadPrevious = new Ae, this.addComponent(this.loadPrevious)), this.sorting = new Lt, this.addComponent(this.sorting), this.limit = new jt, this.addComponent(this.limit), this.displayType = new wt, this.addComponent(this.displayType);
          var e = this._getPageInfoClass();
          this.pageInfo = new e, this.addComponent(this.pageInfo), this.rebotsMeta = new he, this.addComponent(this.rebotsMeta), u.a.isSearchPage() && (this.searchResultPanels = new z, this.addComponent(this.searchResultPanels), this.collectionList = new sn, this.addComponent(this.collectionList), this.collectionListPagination = new $e(s.a.searchCollectionPagination, tt.Enum.COLLECTION), this.addComponent(this.collectionListPagination), this.pageList = new Cn, this.addComponent(this.pageList), this.pageListPagination = new $e(s.a.searchPagePagination, tt.Enum.PAGE), this.addComponent(this.pageListPagination), this.searchResultTotal = new Rn, this.addComponent(this.searchResultTotal))
        }
      }, {
        key: "isRender", value: function () {
          return this.parent.isFetchedProductData
        }
      }, {
        key: "setData", value: function (t) {
          this.data = t, this.totalProduct = t.total_product, this.eventType = t.event_type, this.productList.setData(t.products), this.pagination.setData(t), this.loadPrevious && this.loadPrevious.setData(t), u.a.isSearchPage() && (this.searchResultPanels.setData(t, this.eventType), this.collectionList.setData(t, this.eventType), this.pageList.setData(t, this.eventType), t.hasOwnProperty("total_product") && this.searchResultTotal.setData(t.total_product), 0 == this.totalProduct && "filter" != this.eventType && "collection" != this.eventType && (this.productList = new Vn, this.addComponent(this.productList), this.productList.setData())), this.productPlaceholder.setData(t), this.pageInfo.setData(t)
        }
      }, {
        key: "_getProductPaginationClass", value: function () {
          switch (o.a.getSettingValue("general.paginationType")) {
            case at.Type.DEFAULT:
              return bt;
            case at.Type.LOAD_MORE:
              return ve;
            default:
              return _e
          }
        }
      }, {
        key: "_getPageInfoClass", value: function () {
          return u.a.isSearchPage() ? Kt : le
        }
      }]) && Dn(n.prototype, i), a && Dn(n, a), e
    }(d.a), Wn = n(5);

    function Gn(t) {
      return (Gn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function zn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Kn(t) {
      return (Kn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Yn(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }

    function Qn(t, e) {
      return (Qn = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Jn = function (t) {
      function e(t) {
        var n, i, r;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), i = this, (n = !(r = Kn(e).call(this)) || "object" !== Gn(r) && "function" != typeof r ? Yn(i) : r).filterTree = t, n.filterTree.mobileButton = Yn(n), n.isCollapsed = !0, n.label = a.a.refineMobile, n.$element = null, n
      }

      var n, i, l;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Qn(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t\t<button type="button" aria-label="{{label}}">{{label}}</button>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{filterTreeMobileButton}}/g, N.a.filterTreeMobileButton).replace(/{{label}}/g, this.label)
        }
      }, {
        key: "render", value: function () {
          this.$element || (this.$element = r()(this.compileTemplate())), this.parent.isFetchedFilterData && (this.filterTree.filterOptions.size > 0 || this.$element.hide())
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.filterTree && this.$element.on("click", this.onClick.bind(this))
        }
      }, {
        key: "onClick", value: function () {
          "function" == typeof this.filterTree.onClickMobileButton ? this.filterTree.onClickMobileButton() : this.toggleFilterTree(), r()("body").toggleClass(N.a.filterTreeOpenBody)
        }
      }, {
        key: "toggleFilterTree", value: function () {
          var t = r()("#" + this.filterTree.id);
          t && !t.hasClass("toggling") && (this.isCollapsed = !this.isCollapsed, o.a.getSettingValue("general.changeMobileButtonLabel") && (this.label = this.isCollapsed ? a.a.refineMobile : a.a.refineMobileCollapse, this.$element.text(this.label)), t.css({
            overflow: "hidden",
            display: "block",
            transition: "max-height 500ms ease-in-out"
          }), this.isCollapsed ? t.css("max-height", 0) : t.css("max-height", "5000px"), this.afterToggleFilterTree())
        }
      }, {
        key: "afterToggleFilterTree", value: function () {
          this.isCollapsed || this.filterTree.filterOptions.forEach((function (t) {
            t.displayType != Wn.a.DisplayType.BOX || t.isCollapsed || t.filterItems.forEach((function (t) {
              t.setBoxItemSize()
            }))
          }))
        }
      }]) && zn(n.prototype, i), l && zn(n, l), e
    }(d.a);

    function Zn(t) {
      return (Zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Xn(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function ti(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function ei(t, e) {
      return !e || "object" !== Zn(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function ni(t) {
      return (ni = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ii(t, e) {
      return (ii = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ri = function (t) {
      function e() {
        return Xn(this, e), ei(this, ni(e).apply(this, arguments))
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ii(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-loading" style="display: none;"><span class="boost-pfs-filter-loading-icon"></span></div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate()
        }
      }, {
        key: "setShow", value: function (t) {
          this.$element || (this.$element = r()(this.compileTemplate()), r()("body").append(this.$element)), this.isEnabled() && (t ? this.$element.show() : this.$element.hide())
        }
      }, {
        key: "isEnabled", value: function () {
          var t = u.a.isMobile();
          return !t && o.a.getSettingValue("general.showLoading") || t && o.a.getSettingValue("general.showMobileLoading")
        }
      }]) && ti(n.prototype, i), a && ti(n, a), e
    }(d.a);

    function oi(t) {
      return (oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ai(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function li(t, e) {
      return !e || "object" !== oi(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function si(t) {
      return (si = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ci(t, e) {
      return (ci = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ui = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = li(this, si(e).call(this))).style = o.a.getSettingValue("general.styleScrollToTop"), t.$element = null, t
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ci(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<a href="javascript:void(0)" aria-label="Back to top" class="boost-pfs-filter-scroll-to-top {{style}}" style="display: inline;"></a>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{style}}/g, this.style)
        }
      }, {
        key: "isRender", value: function () {
          return !this.$element
        }
      }, {
        key: "render", value: function () {
          !this.$element && this.isShow() && (this.$element = r()(this.compileTemplate()), r()("body").append(this.$element))
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && (this.$element.on("click", this.scrollToTop.bind(this)), r()(document).scroll(this.setVisibility.bind(this)))
        }
      }, {
        key: "scrollToTop", value: function () {
          window.scrollTo({top: 0, behavior: "smooth"})
        }
      }, {
        key: "setVisibility", value: function () {
          (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) > 100 ? this.$element.show() : this.$element.hide()
        }
      }, {
        key: "isShow", value: function () {
          return o.a.getSettingValue("general.activeScrollToTop")
        }
      }]) && ai(n.prototype, i), a && ai(n, a), e
    }(d.a), pi = {FilterTreeType: {VERTICAL: "vertical", HORIZONTAL: "horizontal"}};
    n(56), n(49), n(50), n(148), n(79), n(108), n(210), n(44);

    function fi(t) {
      return (fi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function hi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function yi(t, e) {
      return !e || "object" !== fi(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function di(t) {
      return (di = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function gi(t, e) {
      return (gi = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var mi = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = yi(this, di(e).call(this))).filterTreeType = t, i.clearType = n, i.requestInstantly = !0, i.label = i.clearType == e.ClearType.CLEAR_ALL ? a.a.clearAll : a.a.clear, i.filterOptionLabel = "", i.filterValueLabel = "", i
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && gi(t, e)
      }(e, t), n = e, s = [{
        key: "ClearType", get: function () {
          return {
            CLEAR_SINGLE_VALUE: "clear-single-value",
            CLEAR_OPTION_VALUES: "clear-option-values",
            CLEAR_ALL: "clear-all"
          }
        }
      }], (i = [{
        key: "getTemplate", value: function () {
          switch (this.clearType) {
            case e.ClearType.CLEAR_SINGLE_VALUE:
              return '\n\t\t\t\t\t<button aria-label="{{adaLabel}}" class="{{class.button}} {{class.clearButton}}">\n\t\t\t\t\t\t<span class="refine-by-type">\n\t\t\t\t\t\t\t<span class="refine-by-option">{{filterOptionLabel}}</span><span class="refine-by-value">{{filterValueLabel}}</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</button>\n\t\t\t\t'.trim();
            case e.ClearType.CLEAR_OPTION_VALUES:
              return '\n\t\t\t\t\t<button aria-label="{{adaLabel}}" class="{{class.button}} {{class.clearButton}}">{{label}}</button>\n\t\t\t\t'.trim();
            case e.ClearType.CLEAR_ALL:
              return '\n\t\t\t\t\t<button aria-label="{{adaLabel}}" class="{{class.button}} {{class.clearAllButton}}">{{label}}</button>\n\t\t\t\t'.trim();
            default:
              throw Error("Wrong filter clear type")
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.buildLabel(), this.getTemplate().replace(/{{label.clear}}/g, a.a.clear).replace(/{{class.button}}/g, N.a.button).replace(/{{class.clearButton}}/g, N.a.clearButton).replace(/{{class.clearAllButton}}/g, N.a.clearAllButton).replace(/{{adaLabel}}/g, this.adaLabel).replace(/{{label}}/g, this.label).replace(/{{filterOptionLabel}}/g, this.filterOptionLabel).replace(/{{filterValueLabel}}/g, this.filterValueLabel)
        }
      }, {
        key: "render", value: function () {
          this.$element || (this.$element = r()(this.compileTemplate())), this.isVisible() ? this.$element.show() : this.$element.hide()
        }
      }, {
        key: "buildLabel", value: function () {
          switch (this.adaLabel = "", this.clearType) {
            case e.ClearType.CLEAR_SINGLE_VALUE:
              var t = this.parent;
              if (t && t.type && t.label) {
                var n = t.label;
                o.a.getSettingValue("general.enable3rdCurrencySupport") && "Price" == this.parent.type && (n = ""), this.adaLabel = a.a.ada.clearFilterItem.replace(/{{filterOption}}/g, t.type).replace(/{{filterItem}}/g, n), this.filterOptionLabel = t.type && this.filterTreeType == pi.FilterTreeType.VERTICAL ? t.type + ": " : "", this.filterValueLabel = t.label
              }
              break;
            case e.ClearType.CLEAR_OPTION_VALUES:
              var i = this.parent;
              i && i.label && (this.adaLabel = a.a.ada.clearFilterOption.replace(/{{filterOption}}/g, i.label));
              break;
            case e.ClearType.CLEAR_ALL:
              this.adaLabel = a.a.ada.clearAllFilterItems
          }
        }
      }, {
        key: "isVisible", value: function () {
          var t = !0;
          switch (this.clearType) {
            case e.ClearType.CLEAR_OPTION_VALUES:
              var n = this.parent;
              if (n.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS) {
                var i = n.filterOptionId.replace(l.a.prefix + "_c_", l.a.prefix + "_ct_");
                t = l.a.queryParams[n.filterOptionId] || l.a.queryParams[i]
              } else t = l.a.queryParams[n.filterOptionId];
              break;
            case e.ClearType.CLEAR_ALL:
              t = !1, Object.keys(l.a.queryParams).forEach((function (e) {
                if (e.startsWith(l.a.prefix)) {
                  var n = l.a.queryParams[e];
                  !u.a.isCollectionPage() && e.startsWith(l.a.prefix + "_c_") && 0 == n || (t = !0)
                }
              }))
          }
          return !!t
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.$element.on("click", this.onClick.bind(this))
        }
      }, {
        key: "onClick", value: function (t) {
          if (t && t.preventDefault(), this.requestInstantly) switch (this.clearType) {
            case e.ClearType.CLEAR_SINGLE_VALUE:
              this.onClearSingleValue();
              break;
            case e.ClearType.CLEAR_OPTION_VALUES:
              this.onClearOptionValues();
              break;
            case e.ClearType.CLEAR_ALL:
              this.onClearAll()
          } else switch (this.clearType) {
            case e.ClearType.CLEAR_OPTION_VALUES:
              this.onDeselectOptionValues()
          }
        }
      }, {
        key: "onClearSingleValue", value: function () {
          var t = this.parent, e = t.filterOptionId, n = t.filterItemId, i = l.a.queryParams[e];
          if (null != i) {
            Array.isArray(i) || (i = [i]);
            var r = i.indexOf(n), o = [];
            if (r > -1 && (o = i.filter((function (t, e) {
              return e != r
            }))), 0 == o.length ? (K.default.setParam(e, null), K.default.setParam(e + "_and_condition", null), K.default.setParam(e + "_show_exact_rating", null), K.default.setParam(e + "_exclude_from_value", null)) : K.default.setParam(e, o), !u.a.isCollectionPage() && e.startsWith(l.a.prefix + "_ct_")) {
              var a = e.replace(l.a.prefix + "_ct_", l.a.prefix + "_c_");
              K.default.setParam(a, null)
            }
            K.default.setParam("page", 1);
            var s = {filterOptionId: e, filterOptionValue: n};
            K.default.applyFilter("clear", s)
          }
        }
      }, {
        key: "onClearOptionValues", value: function () {
          var t = this.parent;
          t.filterTreeType == pi.FilterTreeType.HORIZONTAL && !o.a.getSettingValue("general.keepTabOpenState") && t.collapse && this.parent.collapse.onToggleHorizontal(), l.a.internalClick = !0;
          var e = t.filterOptionId;
          t.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS && u.a.isCollectionPage() && (e = e.replace(l.a.prefix + "_c_", l.a.prefix + "_ct_"));
          var n = {filterOptionId: e};
          K.default.setParam("page", 1), K.default.setParam(e, null), K.default.setParam(e + "_and_condition", null), K.default.setParam(e + "_show_exact_rating", null), K.default.setParam(e + "_exclude_from_value", null), K.default.applyFilter("clear", n)
        }
      }, {
        key: "onClearAll", value: function () {
          var t = [];
          Object.keys(l.a.queryParams).forEach((function (e) {
            e.startsWith(l.a.prefix) && t.push(e)
          })), t.forEach((function (t) {
            K.default.setParam(t, null)
          })), K.default.setParam("page", 1), K.default.applyFilter("clearAll", {})
        }
      }, {
        key: "onDeselectOptionValues", value: function () {
          this.parent.filterItems && this.parent.filterItems.forEach((function (t) {
            t.$element.removeClass("selected"), t.isSelected = !1
          }))
        }
      }]) && hi(n.prototype, i), s && hi(n, s), e
    }(d.a);

    function bi(t) {
      return (bi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function vi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Si(t, e) {
      return !e || "object" !== bi(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Oi(t) {
      return (Oi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ti(t, e) {
      return (Ti = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Pi = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = Si(this, Oi(e).call(this))).filterTreeType = t || pi.FilterTreeType.HORIZONTAL, i.applyType = n || e.ApplyType.APPLY_OPTION_VALUES, i
      }

      var n, i, l;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ti(t, e)
      }(e, t), n = e, l = [{
        key: "ApplyType", get: function () {
          return {APPLY_OPTION_VALUES: "apply-option-values", APPLY_ALL: "apply-all"}
        }
      }], (i = [{
        key: "init", value: function () {
          this.label = this.filterTreeType == pi.FilterTreeType.HORIZONTAL && o.a.getSettingValue("general.requestInstantly") ? a.a.close : a.a.apply
        }
      }, {
        key: "getTemplate", value: function () {
          return this.applyType == e.ApplyType.APPLY_ALL ? '\n\t\t\t\t<button class="{{class.button}} {{class.applyAllButton}}">{{label.applyAll}}</button>\n\t\t\t'.trim() : '\n\t\t\t\t<button class="{{class.button}} {{class.applyButton}}">{{label.apply}}</button>\n\t\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{label.apply}}/g, this.label).replace(/{{label.applyAll}}/g, a.a.applyAll).replace(/{{class.button}}/g, N.a.button).replace(/{{class.applyButton}}/g, N.a.applyButton).replace(/{{class.applyAllButton}}/g, N.a.applyAllButton)
        }
      }, {
        key: "isRender", value: function () {
          return !(this.parent.filterType == Wn.a.FilterType.COLLECTION)
        }
      }, {
        key: "render", value: function () {
          this.$element || (this.$element = r()(this.compileTemplate()))
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.$element.on("click", this.onClick.bind(this))
        }
      }, {
        key: "onClick", value: function (t) {
          if (t && t.preventDefault(), this.applyType == e.ApplyType.APPLY_ALL) this.onApplyAll(); else {
            if (this.filterTreeType == pi.FilterTreeType.HORIZONTAL) {
              if (!o.a.getSettingValue("general.keepTabOpenState") && this.parent.collapse) return void this.parent.collapse.onToggleHorizontal();
              if (o.a.getSettingValue("general.requestInstantly")) return
            }
            this.onApplyOptionValues()
          }
        }
      }, {
        key: "onApplyOptionValues", value: function () {
          var t = [], e = this.parent.filterOptionId, n = this.parent.filterItems;
          this.parent.displayType == Wn.a.DisplayType.MULTI_LEVEL_TAG && (n = this.parent.allNestedFilterItems), n.forEach((function (e) {
            e.isSelected && t.push(e.value)
          })), K.default.setParam(e, t), K.default.setParam(e + "_and_condition", !!(this.parent.useAndCondition && t.length > 0) || null), K.default.setParam(e + "_show_exact_rating", !!(this.parent.showExactRating && t.length > 0) || null), K.default.setParam(e + "_exclude_from_value", !!(this.parent.excludePriceFromValue && t.length > 0) || null), K.default.setParam("page", 1);
          var i = {filterOptionId: e, filterOptionValue: t};
          K.default.applyFilter("filter", i)
        }
      }, {
        key: "onApplyAll", value: function () {
          this.filterTreeType == pi.FilterTreeType.HORIZONTAL && (this.parent.filterOptions && this.parent.filterOptions.forEach((function (t) {
            t.collapse && !t.collapse.isCollapsed && t.collapse.onToggleHorizontal()
          })), o.a.getSettingValue("general.requestInstantly")) || (this.parent.filterOptions && this.parent.filterOptions.forEach((function (t) {
            var e = [], n = t.filterOptionId;
            (t.displayType == Wn.a.DisplayType.MULTI_LEVEL_TAG ? t.allNestedFilterItems : t.filterItems).forEach((function (t) {
              t.isSelected && e.push(t.value)
            })), K.default.setParam(n, e), K.default.setParam(n + "_and_condition", !!(t.useAndCondition && e.length > 0) || null), K.default.setParam(n + "_show_exact_rating", !!(t.showExactRating && e.length > 0) || null), K.default.setParam(n + "_exclude_from_value", !!(t.excludePriceFromValue && e.length > 0) || null)
          })), K.default.setParam("page", 1), K.default.applyFilter("filter"))
        }
      }]) && vi(n.prototype, i), l && vi(n, l), e
    }(d.a);
    n(167);

    function wi(t) {
      return (wi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function _i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ci(t, e) {
      return !e || "object" !== wi(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function ki(t) {
      return (ki = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ei(t, e) {
      return (Ei = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ii = function (t) {
      function e(t) {
        var n;
        if (function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), n = Ci(this, ki(e).call(this)), !t) throw Error("Pass filterTreeType into FilterOptionItem constructor.");
        return n.requestInstantly = !0, n.filterTreeType = t, n.$element = null, n.settings = {enable3rdCurrencySupport: o.a.getSettingValue("general.enable3rdCurrencySupport")}, n
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ei(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          this.requestInstantly = this.filterTreeType == pi.FilterTreeType.VERTICAL || o.a.getSettingValue("general.requestInstantly")
        }
      }, {
        key: "getTemplate", value: function () {
          throw Error("Override this method")
        }
      }, {
        key: "compileTemplate", value: function () {
          throw Error("Override this method")
        }
      }, {
        key: "isRender", value: function () {
          var t = this.filterOption ? this.filterOption : this.parent,
            e = this.hasOwnProperty("docCount") && (this.docCount > 0 || null === this.docCount),
            n = t.filterType == Wn.a.FilterType.REVIEW_RATINGS && t.showExactRating,
            i = t.filterType == Wn.a.FilterType.COLLECTION && (t.keepValuesStatic || "all" == this.handle),
            r = t.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS && 1 != this.level,
            a = o.a.getSettingValue("general.showOutOfStockOption");
          return n || i || r || e || a
        }
      }, {
        key: "render", value: function () {
          this.$element || (this.$element = r()(this.compileTemplate())), this.isSelected = this.isAppliedFilter(), this.isSelected ? (this.$element.addClass("selected"), this.$element.find("button").attr("aria-checked", !0)) : (this.$element.removeClass("selected"), this.$element.find("button").removeAttr("aria-checked"));
          // var t = this.countLabel ? a.a.ada.productCount.replace(/{{count}}/g, this.countLabel) : "",
          //   e = this.$element.find(".boost-pfs-filter-option-amount");
          // e && e.length > 0 && e.attr("aria-label", t)
        }
      }, {
        key: "buildCount", value: function () {
          var t = "";
          if (o.a.getSettingValue("general.showFilterOptionCount") && "box" != this.parent.displayType) {
            var e = !1;
            (this.docCount > 0 || o.a.getSettingValue("general.showOutOfStockOption") || this.parent.filterType == Wn.a.FilterType.REVIEW_RATINGS && this.parent.showExactRating) && (e = !0);
            var n = "all" == this.handle && 0 == this.docCount;
            !e || this.parent.keepValuesStatic || n || (t = "(" + this.docCount + ")")
          }
          return t
        }
      }, {
        key: "buildLabel", value: function () {
          var t = this.filterOption ? this.filterOption : this.parent, e = this.label, n = t.prefix;
          return "string" != typeof e ? "" : ("string" == typeof n && (n = n.replace(/\\/g, ""), e = e.replace(n, "").trim()), e.indexOf("boost-pfs-filter-icon-star") > -1 ? e : (t.displayAllValuesInUppercaseForm = t.displayAllValuesInUppercaseForm || !1, t.displayAllValuesInUppercaseForm ? e.toUpperCase() : o.a.getSettingValue("general.forceCapitalizeFilterOptionValues") ? u.a.capitalize(e, !0) : o.a.getSettingValue("general.capitalizeFirstLetterFilterOptionValues") ? u.a.capitalize(e, !0, !0) : o.a.getSettingValue("general.capitalizeFilterOptionValues") ? u.a.capitalize(e) : e))
        }
      }, {
        key: "buildPercentSaleLabel", value: function () {
          return this.from ? this.to ? this.from + "% - " + this.to + "%" : a.a.above + " " + this.from + "%" : a.a.under + " " + this.to + "%"
        }
      }, {
        key: "buildPriceListLabel", value: function () {
          return this.from ? this.to ? u.a.formatMoney(this.from, l.a.moneyFormat, !0) + " - " + u.a.formatMoney(this.to, l.a.moneyFormat, !0) : a.a.above + " " + u.a.formatMoney(this.from, l.a.moneyFormat, !0) : a.a.under + " " + u.a.formatMoney(this.to, l.a.moneyFormat, !0)
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.$element.on("click", this.onClick.bind(this))
        }
      }, {
        key: "onClick", value: function (t) {
          t && t.preventDefault(), this.isDisabled() || (this.requestInstantly || this.parent.filterType == Wn.a.FilterType.COLLECTION ? this.onApplyFilter() : this.onSelectFilter())
        }
      }, {
        key: "isDisabled", value: function () {
          return this.parent.filterType == Wn.a.FilterType.COLLECTION ? !this.parent.keepValuesStatic && "all" != this.handle && 0 == this.docCount : 0 == this.docCount
        }
      }, {
        key: "isAppliedFilter", value: function () {
          var t = this.parent.filterOptionId;
          if (this.parent.filterType == Wn.a.FilterType.COLLECTION) {
            if (l.a.queryParams.collection_scope == this.collectionId) return !0
          } else {
            var e = l.a.queryParams[t];
            if (Array.isArray(e) && e.includes(this.value)) return !0
          }
          return !1
        }
      }, {
        key: "onSelectFilter", value: function () {
          var t = this;
          this.isSelected = !this.isSelected, this.$element.toggleClass("selected"), this.isSelected ? this.$element.find("button").attr("aria-checked", !0) : this.$element.find("button").removeAttr("aria-checked"), this.isSelected && this.parent.selectType == Wn.a.SelectType.SINGLE && this.parent.filterItems.forEach((function (e) {
            e != t && (e.$element && (e.$element.removeClass("selected"), t.$element.find("button").removeAttr("aria-checked")), e.isSelected = !1)
          }))
        }
      }, {
        key: "onApplyFilter", value: function () {
          var t = this, e = this.parent.filterType, n = this.parent.displayType, i = this.parent.selectType,
            r = this.parent.filterOptionId,
            o = "all" == this.handle && 0 == this.docCount && e == Wn.a.FilterType.COLLECTION;
          if (this.docCount > 0 || this.parent.keepValuesStatic || n == Wn.a.DisplayType.RANGE || o) {
            l.a.internalClick = !0;
            var a = "";
            if (e == Wn.a.FilterType.COLLECTION) {
              this.isSelected = !0, l.a.collectionId = this.collectionId, K.default.setParam("collection_scope", this.collectionId), u.a.isCollectionPage() ? (c.a.setAddressBarPathAfterFilter("/collections/" + this.handle), c.a.setWindowTitleAfterFilter(this.label + " - " + l.a.shopName), K.default.setParam("sort", this.sortOrder), l.a.defaultSorting = this.sortOrder) : K.default.setParam(r, this.collectionId);
              var s = [];
              Object.keys(l.a.queryParams).forEach((function (t) {
                t.startsWith(l.a.prefix) && !t.startsWith(l.a.prefix + "_c") && s.push(t)
              })), s.forEach((function (t) {
                K.default.setParam(t, null)
              })), a = "collection"
            } else {
              this.isSelected = !this.isSelected;
              var p = null;
              i == Wn.a.SelectType.SINGLE ? p = this.isSelected ? [this.value] : [] : (p = l.a.queryParams[r], Array.isArray(p) || (p = []), this.isSelected ? p.includes(this.value) || p.push(this.value) : p = p.filter((function (e) {
                return e !== t.value
              }))), K.default.setParam(r, p), K.default.setParam(r + "_and_condition", !!(this.parent.useAndCondition && p.length > 0) || null), K.default.setParam(r + "_show_exact_rating", !!(this.parent.showExactRating && p.length > 0) || null), K.default.setParam(r + "_exclude_from_value", !!(this.parent.excludePriceFromValue && p.length > 0) || null), a = "filter"
            }
            K.default.setParam("page", 1);
            var f = {filterOptionId: r, filterValue: this.value};
            K.default.applyFilter(a, f)
          }
        }
      }, {
        key: "setData", value: function (t) {
          switch (this.value = t.key, this.label = t.key, this.docCount = t.doc_count ? t.doc_count : 0, this.isRenderOnScroll = t.isRenderOnScroll, this.parent.filterType) {
            case Wn.a.FilterType.COLLECTION:
              this.collectionId = t.key, this.label = u.a.stripHtml(t.displayName ? t.displayName : t.label), this.handle = t.handle, this.href = u.a.isCollectionPage() ? "/collections/" + this.handle : "javascript:void(0);";
              var e = u.a.getDefaultSorting(this.collectionId);
              this.sortOrder = "" != e ? e : t.sort_order ? t.sort_order : l.a.defaultSorting;
              break;
            case Wn.a.FilterType.REVIEW_RATINGS:
              this.from = parseFloat(t.from).toFixed(), this.value = this.from;
              break;
            case Wn.a.FilterType.STOCK:
              this.value = "in-stock" == t.key ? "true" : "false", this.label = u.a.stripHtml(t.label);
              break;
            case Wn.a.FilterType.PERCENT_SALE:
              this.from = t.from, this.to = t.to, this.label = this.buildPercentSaleLabel(), this.value = (this.from ? this.from : "") + ":" + (this.to ? this.to : "");
              break;
            case Wn.a.FilterType.PRICE:
            case Wn.a.FilterType.VARIANTS_PRICE:
              this.from = t.from, this.to = t.to, this.label = this.buildPriceListLabel(), this.value = (this.from ? this.from : "") + ":" + (this.to ? this.to : "")
          }
          this.label = this.buildLabel(), this.countLabel = this.buildCount(), this.isSelected = this.isAppliedFilter()
        }
      }]) && _i(n.prototype, i), s && _i(n, s), e
    }(d.a);

    function Li(t) {
      return (Li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Ai(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ri(t, e) {
      return !e || "object" !== Li(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Fi(t) {
      return (Fi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function xi(t, e) {
      return (xi = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Bi = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = Ri(this, Fi(e).call(this, t))).$element = null, n
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && xi(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return this.parent.filterType == Wn.a.FilterType.COLLECTION ? '\n\t\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t\t<a class="{{class.button}}" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t'.trim() : '\n\t\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t\t<button class="{{class.button}}">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t</li>\n\t\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem).replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel).replace(/{{class.button}}/g, N.a.button).replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "").replace(/{{label}}/g, this.label).replace(/{{href}}/g, this.href).replace(/{{countLabel}}/g, this.countLabel)
        }
      }]) && Ai(n.prototype, i), r && Ai(n, r), e
    }(Ii);

    function ji(t) {
      return (ji = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function $i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Vi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Mi(t, e) {
      return !e || "object" !== ji(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Di(t, e, n) {
      return (Di = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ni(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function Ni(t) {
      return (Ni = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ui(t, e) {
      return (Ui = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var qi = function (t) {
      function e() {
        return $i(this, e), Mi(this, Ni(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ui(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t<button role="checkbox" class="{{class.button}}">\n\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem).replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel).replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "").replace(/{{class.button}}/g, N.a.button).replace(/{{label}}/g, this.label).replace(/{{countLabel}}/g, this.countLabel)
        }
      }, {
        key: "bindEvents", value: function () {
          Di(Ni(e.prototype), "bindEvents", this).call(this), this.setBoxItemSize()
        }
      }, {
        key: "setBoxItemSize", value: function () {
          this.filterTreeType == pi.FilterTreeType.VERTICAL && this.$element && this.$element.css("width", this.parent.calculateBoxItemSize())
        }
      }]) && Vi(n.prototype, i), r && Vi(n, r), e
    }(Ii);

    function Hi(t) {
      return (Hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Wi(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Gi(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function zi(t, e) {
      return !e || "object" !== Hi(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Ki(t, e, n) {
      return (Ki = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Yi(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function Yi(t) {
      return (Yi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Qi(t, e) {
      return (Qi = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ji = function (t) {
      function e() {
        return Wi(this, e), zi(this, Yi(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Qi(t, e)
      }(e, t), n = e, r = [{
        key: "SwatchType", get: function () {
          return {ONE_COLOR: "one_color", TWO_COLORS: "two_colors", IMAGE: "image"}
        }
      }], (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.filterOptionItem}} {{disabled}} {{swatchBorder}}">\n\t\t\t\t<span class="boost-pfs-filter-option-swatch-image" \n\t\t\t\t\tstyle="background-color: {{backgroundColor}}; \n\t\t\t\t\tbackground-image: {{backgroundImage}};" title="{{label}}">\n\t\t\t\t</span>\n\t\t\t\t<button role="checkbox" class="{{class.button}}">\n\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li> \n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem).replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel).replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "").replace(/{{class.button}}/g, N.a.button).replace(/{{label}}/g, this.label).replace(/{{countLabel}}/g, this.countLabel).replace(/{{backgroundColor}}/g, this.backgroundColor).replace(/{{backgroundImage}}/g, this.backgroundImage).replace(/{{swatchBorder}}/g, this.swatchBorder)
        }
      }, {
        key: "render", value: function () {
          this.buildSwatchSettings() || (this.swatchFileName = this.buildSwatchFileName(), this.swatchFileUrl = u.a.getFilePath(this.swatchFileName, l.a.swatchExtension, o.a.getSettingValue("general.swatchImageVersion")), this.backgroundImage = "url(" + this.swatchFileUrl + ");", this.backgroundColor = this.buildBackgroundColor()), this.swatchBorder = ["white", "#FFFFFF"].includes(this.backgroundColor) ? "has-border" : "", Ki(Yi(e.prototype), "render", this).call(this)
        }
      }, {
        key: "buildSwatchSettings", value: function () {
          var t = this, n = o.a.getSettingValue("swatch_settings"), i = !1;
          if (this.swatchSettingKey = null, this.swatchSetting = null, n) {
            var r = Object.keys(n);
            Array.isArray(r) && r.length > 0 && (this.swatchSettingKey = r.find((function (e) {
              return e.replace("pfs-swatch-", "") == t.value || e.replace("pfs-swatch-", "").toLowerCase() == t.value.toLowerCase()
            })), this.swatchSetting = n[this.swatchSettingKey])
          }
          if (n && this.swatchSetting) switch (this.swatchSetting.type) {
            case e.SwatchType.ONE_COLOR:
              this.swatchSetting.colorCodes.length > 0 && this.swatchSetting.colorCodes[0] && (this.backgroundImage = "none", this.backgroundColor = this.swatchSetting.colorCodes[0], i = !0);
              break;
            case e.SwatchType.TWO_COLORS:
              this.swatchSetting.colorCodes.length > 1 && this.swatchSetting.colorCodes[0] && this.swatchSetting.colorCodes[1] && (this.backgroundImage = "linear-gradient(to top left, " + this.swatchSetting.colorCodes[1] + " 50%, " + this.swatchSetting.colorCodes[0] + " 50%);", this.backgroundColor = "transparent", i = !0);
              break;
            case e.SwatchType.IMAGE:
              this.swatchSetting.imageUrl && (this.swatchFileUrl = this.swatchSetting.imageUrl, this.backgroundImage = "url(" + this.swatchFileUrl + ");", this.backgroundColor = this.buildBackgroundColor(), i = !0)
          }
          return i
        }
      }, {
        key: "buildSwatchFileName", value: function () {
          this.parent.filterOptionId;
          var t = this.parent.prefix, e = this.value;
          this.parent.filterType == Wn.a.FilterType.COLLECTION && (e = this.label);
          var n = this.parent.label.trim().toLowerCase().replace(/ /g, "_");
          if (o.a.getSettingValue("general.removePrefixFromSwatchFile") && t) {
            var i = t.replace(/\\/g, "");
            e = e.replace(i, "")
          }
          return n + "-" + u.a.slugify(e).replace(/\#/g, "")
        }
      }, {
        key: "buildBackgroundColor", value: function () {
          var t = u.a.slugify(this.label).split("-");
          return t[t.length - 1]
        }
      }]) && Gi(n.prototype, i), r && Gi(n, r), e
    }(Ii);

    function Zi(t) {
      return (Zi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Xi(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function tr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function er(t, e) {
      return !e || "object" !== Zi(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function nr(t, e, n) {
      return (nr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ir(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function ir(t) {
      return (ir = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function rr(t, e) {
      return (rr = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var or = function (t) {
      function e() {
        return Xi(this, e), er(this, ir(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && rr(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t<button role="checkbox" class="{{class.button}}" aria-label="{{adaLabel}}">\n\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t<span role="presentation" class="boost-pfs-filter-option-value">\n\t\t\t\t\t\t<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}"></i>\n\t\t\t\t\t\t<span>{{label}}</span>\n\t\t\t\t\t</span>\t\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          for (var t = this.getTemplate(), e = 0; e < this.from; e++) t = t.replace(/{{active}}/, "{{class.filterOptionItemStarActive}}");
          return (t = t.replace(/{{active}}/g, "")).replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem).replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel).replace(/{{class.filterOptionItemStar}}/g, N.a.filterOptionItemStar).replace(/{{class.filterOptionItemStarActive}}/g, N.a.filterOptionItemStarActive).replace(/{{class.button}}/g, N.a.button).replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "").replace(/{{label}}/g, this.label).replace(/{{countLabel}}/g, this.countLabel).replace(/{{adaLabel}}/g, this.adaLabel).replace(/{{starColor}}/g, this.parent.starColor).replace(/{{class.button}}/g, N.a.button).replace(/\r?\n|\r/g, "")
        }
      }, {
        key: "render", value: function () {
          this.label = this.parent.showExactRating ? "" : a.a.ratingUp, this.adaLabel = this.from, 1 == this.from ? this.adaLabel += " " + a.a.ratingStar : this.adaLabel += " " + a.a.ratingStars, this.parent.showExactRating && (this.adaLabel += " " + a.a.ratingUp);
          var t = this.countLabel ? a.a.ada.productCount.replace(/{{count}}/g, this.countLabel) : "";
          this.adaLabel += ". " + t, nr(ir(e.prototype), "render", this).call(this)
        }
      }]) && tr(n.prototype, i), r && tr(n, r), e
    }(Ii);

    function ar(t) {
      return (ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function lr(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function sr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function cr(t, e) {
      return !e || "object" !== ar(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function ur(t, e, n) {
      return (ur = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = pr(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function pr(t) {
      return (pr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function fr(t, e) {
      return (fr = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var hr = function (t) {
      function e() {
        return lr(this, e), cr(this, pr(e).apply(this, arguments))
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && fr(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t<div class="boost-pfs-filter-option-item-parent-category">\n\t\t\t\t\t<span role="button" aria-controls="sub-category-{{value}}" aria-expanded="true" class="sub-icon {{closeClass}}"></span>\n\t\t\t\t\t<a href="javascript:;" class="{{class.filterOptionItem}} {{class.filterOptionLabel}} boost-pfs-filter-option-main-cat">\n\t\t\t\t\t\t{{label}}\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<ul class="boost-pfs-filter-option-item-sub-category-list">\n\t\t\t\t\t{{subItems}}\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "getSubItemTemplate", value: function () {
          return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{selected}} boost-pfs-filter-option-item-sub-category">\n\t\t\t\t<a href="javascript:;">\n\t\t\t\t\t{{subLabel}}\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = this, e = "";
          return Array.isArray(this.tags) && this.tags.forEach((function (n) {
            var i = t.isSubCategorySelected(n);
            e += t.getSubItemTemplate().replace(/{{subLabel}}/g, n).replace(/{{selected}}/g, i ? "selected" : "")
          })), this.getTemplate().replace(/{{subItems}}/g, e).replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem).replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel).replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "").replace(/{{label}}/g, this.label).replace(/{{value}}/g, this.value).replace(/{{countLabel}}/g, this.countLabel)
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element.on("click", this.redirectToCollection.bind(this)), this.$element.find("ul > li").on("click", this.redirectToSubCategory.bind(this))
        }
      }, {
        key: "isSubCategorySelected", value: function (t) {
          if (!u.a.isSearchPage()) {
            var e = decodeURIComponent(window.location.pathname).split("/");
            if (e[e.length - 1] == u.a.slugify(t)) return this.isAnyTagSelected = !0, !0
          }
          return !1
        }
      }, {
        key: "redirectToCollection", value: function (t) {
          t.preventDefault(), t.stopPropagation();
          var e = "/collections/" + this.handle;
          u.a.setWindowLocation(e)
        }
      }, {
        key: "redirectToSubCategory", value: function (t) {
          t.preventDefault(), t.stopPropagation();
          var e = r()(t.currentTarget).find("a").html(), n = u.a.slugify(e),
            i = "/collections/" + this.handle + "/" + n;
          u.a.setWindowLocation(i)
        }
      }, {
        key: "setData", value: function (t) {
          ur(pr(e.prototype), "setData", this).call(this, t), this.tags = t.tags
        }
      }]) && sr(n.prototype, i), o && sr(n, o), e
    }(Ii);

    function yr(t) {
      return (yr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function dr(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function gr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function mr(t, e) {
      return !e || "object" !== yr(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function br(t, e, n) {
      return (br = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = vr(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function vr(t) {
      return (vr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Sr(t, e) {
      return (Sr = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Or = function (t) {
      function e() {
        return dr(this, e), mr(this, vr(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Sr(t, e)
      }(e, t), n = e, (i = [{
        key: "isRender", value: function () {
          return !1
        }
      }, {
        key: "setValue", value: function (t, e) {
          this.value = t + ":" + e, this.isSelected = this.min != t || this.max != e
        }
      }, {
        key: "setData", value: function (t) {
          br(vr(e.prototype), "setData", this).call(this, t), null != t.min && null != t.max && (this.min = t.min, this.max = t.max, this.key = this.parent.filterOptionId, this.value = t.min + ":" + t.max)
        }
      }]) && gr(n.prototype, i), r && gr(n, r), e
    }(Ii);
    n(182), n(94), n(185);

    function Tr(t) {
      return (Tr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Pr(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t
      }(t) || function (t, e) {
        if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
        var n = [], i = !0, r = !1, o = void 0;
        try {
          for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0) ;
        } catch (t) {
          r = !0, o = t
        } finally {
          try {
            i || null == l.return || l.return()
          } finally {
            if (r) throw o
          }
        }
        return n
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }

    function wr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function _r(t, e) {
      return !e || "object" !== Tr(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Cr(t) {
      return (Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function kr(t, e) {
      return (kr = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Er = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = _r(this, Cr(e).call(this))).filterTreeType = t, n.isExpanded = !1, n.label = a.a.viewMore, n.class = N.a.filterOptionViewMore, n.isVisible = !0, n.$element = null, n
      }

      var n, i, l;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && kr(t, e)
      }(e, t), n = e, l = [{
        key: "getViewMoreStateData", value: function (t) {
          return Ir.get(t)
        }
      }, {
        key: "setViewMoreStateData", value: function (t, e) {
          Ir.set(t, e)
        }
      }], (i = [{
        key: "init", value: function () {
          this.numberVisibleItems = this.getNumberVisibleItems()
        }
      }, {
        key: "getTemplate", value: function () {
          switch (this.filterTreeType) {
            case pi.FilterTreeType.VERTICAL:
              return '\n\t\t\t\t\t<div class="{{class.button}} {{class}}"><button>{{label}}</button></div>\n\t\t\t\t'.trim();
            case pi.FilterTreeType.HORIZONTAL:
              return '\n\t\t\t\t\t<div class="{{class.button}} {{class}}"><button aria-label="{{label}}"></button></div>\n\t\t\t\t'.trim();
            default:
              throw Error("Pass a filter tree type into the constructor")
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.button}}/g, N.a.button).replace(/{{class}}/g, this.class).replace(/{{label}}/g, this.label)
        }
      }, {
        key: "isRender", value: function () {
          return this.parent.displayType != Wn.a.DisplayType.RANGE && (this.parent.showMoreType == Wn.a.ShowMoreType.VIEWMORE || this.parent.showMoreType == Wn.a.ShowMoreType.VIEWMORE_SCROLLBAR)
        }
      }, {
        key: "render", value: function () {
          this.$element || (this.$element = r()(this.compileTemplate())), this.setVisibility()
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && (this.isBoundEvent || this.$element.on("click", this.onClick.bind(this)), this.parent.$filterOptionContentElement && this.parent.$filterOptionContentElement.addClass(N.a.filterHasViewMore), !this.isExpanded && e.getViewMoreStateData(this.parent.filterOptionId) ? this.onClick() : this.setFilterItemsVisibility())
        }
      }, {
        key: "onClick", value: function () {
          this.isExpanded = !this.isExpanded, e.setViewMoreStateData(this.parent.filterOptionId, this.isExpanded);
          var t = "";
          this.isExpanded ? (this.label = a.a.viewLess, this.class = N.a.filterOptionViewLess, t = N.a.filterOptionViewMore) : (this.label = a.a.viewMore, this.class = N.a.filterOptionViewMore, t = N.a.filterOptionViewLess), this.filterTreeType == pi.FilterTreeType.VERTICAL ? this.$element.find("button").html(this.label) : this.$element.removeClass(t).addClass(this.class), this.setFilterItemsVisibility()
        }
      }, {
        key: "getNumberVisibleItems", value: function () {
          var t = o.a.getSettingValue("general.startViewMore")[this.parent.displayType];
          if (this.filterTreeType == pi.FilterTreeType.HORIZONTAL) {
            var e = o.a.getSettingValue("general.filterHorizontalColumn");
            Number.isInteger(e) ? t *= e : t = o.a.getSettingValue("general.startViewMoreH")[this.parent.displayType]
          }
          return (!t || t <= 1) && (t = 5), t
        }
      }, {
        key: "setVisibility", value: function () {
          if (this.$element) {
            var t = this.parent.filterItems.size;
            this.parent.keepValuesStatic || o.a.getSettingValue("general.showOutOfStockOption") || (t = Array.from(this.parent.filterItems, (function (t) {
              var e = Pr(t, 2);
              return {key: e[0], value: e[1]}
            })).filter((function (t) {
              return t.value.docCount > 0
            })).length), this.parent.$filterItemsContainerElement && (t = this.parent.$filterItemsContainerElement.find("li").length), this.isVisible = t > this.numberVisibleItems, this.isVisible ? this.$element.show() : this.$element.hide()
          } else this.isVisible = !1
        }
      }, {
        key: "setFilterItemsVisibility", value: function () {
          if (this.parent.$filterItemsContainerElement) {
            var t = this.parent.$filterItemsContainerElement.find("li");
            if (t.show(), !this.isExpanded) {
              var e = this.numberVisibleItems, n = t.length;
              t.slice(e, n).hide()
            }
          }
        }
      }]) && wr(n.prototype, i), l && wr(n, l), e
    }(d.a), Ir = new Map, Lr = Er;

    function Ar(t) {
      return (Ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Rr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Fr(t, e) {
      return !e || "object" !== Ar(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function xr(t) {
      return (xr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Br(t, e) {
      return (Br = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var jr = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Fr(this, xr(e).call(this))).$element = null, t.searchValue = "", t
      }

      var n, i, l;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Br(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="{{class.filterOptionShowSearchBox}}-wrapper">\n\t\t\t\t<input role="textbox" aria-label="Search Options" class="{{class.filterOptionShowSearchBox}}" type="text" autocomplete="on" placeholder="{{label.searchOptions}}" />\n\t\t\t</div>\n        '.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.filterOptionShowSearchBox}}/g, N.a.filterOptionShowSearchBox).replace(/{{label.searchOptions}}/g, a.a.searchOptions)
        }
      }, {
        key: "isRender", value: function () {
          if (this.parent.filterTreeType == pi.FilterTreeType.HORIZONTAL) return !1;
          var t = this.parent.showSearchBoxFilterPC || o.a.getSettingValue("general.showSearchBoxFilterPCByDefault"),
            e = this.parent.showSearchBoxFilterMobile || o.a.getSettingValue("general.showSearchBoxFilterMobileByDefault"),
            n = [Wn.a.FilterType.PRICE, Wn.a.FilterType.PERCENT_SALE, Wn.a.FilterType.STOCK],
            i = [Wn.a.DisplayType.RANGE, Wn.a.DisplayType.MULTI_LEVEL_TAG, Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS],
            r = !n.includes(this.parent.filterType) && !i.includes(this.parent.displayType), a = u.a.isMobile();
          return r && (!a && t || a && e)
        }
      }, {
        key: "render", value: function () {
          this.$element || (this.$element = r()(this.compileTemplate()))
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && (this.$element.find("input").on("keyup", this.onKeyUp.bind(this)), this.parent.$filterOptionContentElement && this.parent.$filterOptionContentElement.addClass(N.a.filterHasSearchBox))
        }
      }, {
        key: "onKeyUp", value: function (t) {
          this.setSearchValue(t), this.setFilterItemsList()
        }
      }, {
        key: "setSearchValue", value: function (t) {
          if (t && t.target) {
            var e = t.target.value;
            e = "function" == typeof e.toString ? e.toLowerCase().trim() : "", this.searchValue = e
          } else this.searchValue = ""
        }
      }, {
        key: "setFilterItemsList", value: function () {
          var t = this;
          if (this.parent.$filterItemsContainerElement) {
            if (this.searchValue) this.parent.filterItems.forEach((function (e) {
              e.$element && (e.label && e.label.toLowerCase().includes(t.searchValue) ? e.$element.appendTo(t.parent.$filterItemsContainerElement) : e.$element.detach())
            })); else {
              var e = 0, n = o.a.getSettingValue("general.scrollFirstLoadLength");
              this.parent.filterItems.forEach((function (i) {
                i.isRenderOnScroll = t.parent.isLoadMoreOnScroll && e >= n, i.$element && (i.isRenderOnScroll ? i.$element.detach() : i.$element.appendTo(t.parent.$filterItemsContainerElement)), e++
              })), this.parent.scrollbar.numberFilterItemsRendered = n
            }
            this.parent.viewMore && this.parent.viewMore.isRender() && (this.parent.viewMore.setVisibility(), this.parent.viewMore.setFilterItemsVisibility())
          }
        }
      }]) && Rr(n.prototype, i), l && Rr(n, l), e
    }(d.a);

    function $r(t) {
      return ($r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Vr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Mr(t, e) {
      return !e || "object" !== $r(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Dr(t) {
      return (Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Nr(t, e) {
      return (Nr = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ur = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = Mr(this, Dr(e).call(this))).tooltipText = "string" == typeof t ? u.a.escape(u.a.stripHtml(t)).trim() : null, n.$element = null, n.$popupElement = null, n
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Nr(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function (t) {
          switch (t) {
            case"popup":
              return '\n\t\t\t\t\t<div class="boost-pfs-filter-tooltip-wrapper">\n\t\t\t\t\t\t<div class="boost-pfs-filter-qtip-content">{{tooltipText}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t<div class="{{class.filterOptionTooltip}}">\n\t\t\t\t\t\t<span class="boost-pfs-filter-tooltip-arrow"></span>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim()
          }
        }
      }, {
        key: "compileTemplate", value: function (t) {
          return this.getTemplate(t).replace(/{{tooltipText}}/g, this.tooltipText).replace(/{{class.filterOptionTooltip}}/g, N.a.filterOptionTooltip)
        }
      }, {
        key: "isRender", value: function () {
          return !!this.tooltipText
        }
      }, {
        key: "render", value: function () {
          this.$element || (this.$element = r()(this.compileTemplate())), this.$popupElement || (this.$popupElement = r()(this.compileTemplate("popup")))
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          this.$element && this.$popupElement && this.$element.on("mouseover", this.showTooltipPopup.bind(this))
        }
      }, {
        key: "showTooltipPopup", value: function () {
          var t = this.$element.position(), e = this.$popupElement.find(".boost-pfs-filter-qtip-content").outerWidth();
          this.$popupElement.css("left", t.left + "px"), e / 2 < t.left ? this.$popupElement.css("margin-left", -(e / 2 - 12) + "px") : e / 2 > t.left && this.$popupElement.css("margin-left", -t.left / 2 + "px")
        }
      }]) && Vr(n.prototype, i), o && Vr(n, o), e
    }(d.a);

    function qr(t) {
      return (qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Hr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Wr(t, e) {
      return !e || "object" !== qr(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Gr(t) {
      return (Gr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function zr(t, e) {
      return (zr = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Kr = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = Wr(this, Gr(e).call(this))).placeHolderHeight = "", t.numberFilterItemsRendered = 0, t.$scrollElement = null, t
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && zr(t, e)
      }(e, t), n = e, r = [{
        key: "getScrollStateData", value: function (t) {
          return Yr.get(t)
        }
      }, {
        key: "setScrollStateData", value: function (t, e) {
          Yr.set(t, e)
        }
      }, {
        key: "isEnabled", value: function (t, e, n) {
          var i = [Wn.a.DisplayType.RANGE],
            r = [Wn.a.FilterType.REVIEW_RATINGS, Wn.a.FilterType.STOCK, Wn.a.FilterType.PERCENT_SALE, Wn.a.FilterType.PRICE, Wn.a.FilterType.VARIANTS_PRICE],
            a = n == Wn.a.ShowMoreType.SCROLLBAR || n == Wn.a.ShowMoreType.VIEWMORE_SCROLLBAR, l = u.a.isMobile(),
            s = l && o.a.getSettingValue("general.activeFilterScrollbarMobile") || !l && o.a.getSettingValue("general.activeFilterScrollbarPC");
          return !i.includes(t) && !r.includes(e) && a && s
        }
      }], (i = [{
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          if (this.parent.$element && e.isEnabled(this.parent.displayType, this.parent.filterType, this.parent.showMoreType)) {
            var t = this.parent.$element.find("." + N.a.filterOptionContentInner);
            if (t.length > 0 && (this.$scrollElement = t, (this.parent.isLoadMoreOnScroll || o.a.getSettingValue("general.keepScrollState")) && this.$scrollElement.on("scroll", this.onScroll.bind(this)), o.a.getSettingValue("general.keepScrollState"))) {
              var n = e.getScrollStateData(this.parent.filterOptionId);
              isNaN(n) || (this.$scrollElement[0].scrollTop = n)
            }
          }
        }
      }, {
        key: "onScroll", value: function () {
          if (o.a.getSettingValue("general.keepScrollState")) {
            var t = this.$scrollElement[0].scrollTop;
            e.setScrollStateData(this.parent.filterOptionId, t)
          }
          this.parent.isLoadMoreOnScroll && this.isScrollToBottom() && (this.parent.searchBox && this.parent.searchBox.searchValue || this.appendFilterItems())
        }
      }, {
        key: "isScrollToBottom", value: function () {
          return !!this.$scrollElement && this.$scrollElement[0].scrollHeight - this.$scrollElement[0].scrollTop - this.$scrollElement.outerHeight() < 1
        }
      }, {
        key: "appendFilterItems", value: function () {
          var t = this;
          if (this.parent.$filterItemsContainerElement) {
            var e = o.a.getSettingValue("general.scrollFirstLoadLength");
            if (0 == this.numberFilterItemsRendered) this.numberFilterItemsRendered = e; else if (this.numberFilterItemsRendered == this.parent.filterItems.size) return;
            this.parent.$element.addClass("boost-pfs-filter-scrollbar-loading");
            var n = 0;
            this.parent.filterItems.forEach((function (i) {
              i.isRenderOnScroll && n < e && (t.parent.$filterItemsContainerElement.append(i.$element), i.isRenderOnScroll = !1, n++, t.numberFilterItemsRendered++)
            })), setTimeout(function () {
              this.parent.$element.removeClass("boost-pfs-filter-scrollbar-loading")
            }.bind(this), 200)
          }
        }
      }]) && Hr(n.prototype, i), r && Hr(n, r), e
    }(d.a), Yr = new Map, Qr = Kr;

    function Jr(t) {
      return (Jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Zr(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Xr(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function to(t, e, n) {
      return e && Xr(t.prototype, e), n && Xr(t, n), t
    }

    function eo(t, e) {
      return !e || "object" !== Jr(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function no(t, e, n) {
      return (no = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = io(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function io(t) {
      return (io = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ro(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && oo(t, e)
    }

    function oo(t, e) {
      return (oo = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ao = function (t) {
      function e(t) {
        var n;
        return Zr(this, e), (n = eo(this, io(e).call(this, t))).$element = null, n.$itemElement = null, n.$childContainerElement = null, n
      }

      return ro(e, t), to(e, [{
        key: "init", value: function () {
          var t = this.filterOption ? this.filterOption.selectType : this.parent.selectType;
          this.requestInstantly = this.filterTreeType == pi.FilterTreeType.VERTICAL || t == Wn.a.SelectType.SINGLE || o.a.getSettingValue("general.requestInstantly")
        }
      }, {
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-first-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-second-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "getArrowTemplate", value: function () {
          return '\n\t\t\t<button class="{{class.button}} {{class.button}}-arrow" data-action="expand-filter-item" aria-label="{{label.ada.toggleMultiLevel}}">\n\t\t\t\t<span class="boost-pfs-arrow"></span>\n\t\t\t</button>\n\t\t'.trim()
        }
      }, {
        key: "compileArrowTemplate", value: function () {
          return 3 != this.level && this.children && this.children.length > 0 ? this.getArrowTemplate().replace(/{{label.ada.toggleMultiLevel}}/g, Labels.ada.toggleMultiLevel.replace(/{{filterItem}}/g, this.label)) : ""
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem).replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel).replace(/{{label}}/g, this.label).replace(/{{href}}/g, this.href).replace(/{{arrow}}/g, this.compileArrowTemplate()).replace(/{{class.button}}/g, N.a.button).replace(/{{childItems}}/g, "")
        }
      }, {
        key: "render", value: function () {
          var t = this;
          if (this.$element || (this.$element = r()(this.compileTemplate()), this.$itemElement = this.$element.find("." + N.a.filterOptionItem), this.$itemClickElement = this.$itemElement.find('[data-action="select-filter-item"]'), this.$toggleClickElement = this.$itemElement.find('[data-action="expand-filter-item"]'), this.$childContainerElement = this.$element.find(".boost-pfs-filter-option-multi-level-list"), this.$childContainerElement && this.children && this.children.length > 0 && this.children.forEach((function (e) {
            e.$element && t.$childContainerElement.append(e.$element)
          }))), this.$itemElement) {
            this.isSelected || this.isSelectedChild ? this.$itemElement.addClass("selected") : this.$itemElement.removeClass("selected");
            var n = e.getLevelOpenStateData(this), i = o.a.getSettingValue("general.openMultiLevelByDefault");
            n || Array.isArray(i) && i.includes(this.level) || null == n && this.isSelectedChild ? (this.$itemElement.addClass("boost-pfs-open"), e.setLevelOpenStateData(this, !0)) : e.setLevelOpenStateData(this, !1)
          }
        }
      }, {
        key: "bindEvents", value: function () {
          this.$itemClickElement && this.$itemClickElement.on("click", this.onClick.bind(this)), this.$toggleClickElement && this.$toggleClickElement.on("click", this.onClickToggle.bind(this))
        }
      }, {
        key: "onClick", value: function (t) {
          t && t.preventDefault(), this.setCollectionParams(), this.clearAllTagParams(), K.default.setParam("page", 1), this.children && this.children.length > 0 && e.setLevelOpenStateData(this, !0), this.requestInstantly && K.default.applyFilter("collection")
        }
      }, {
        key: "onClickToggle", value: function () {
          this.$itemElement.toggleClass("boost-pfs-open"), this.$itemElement.hasClass("boost-pfs-open") ? e.setLevelOpenStateData(this, !0) : e.setLevelOpenStateData(this, !1)
        }
      }, {
        key: "isAppliedFilter", value: function () {
          return l.a.collectionId == this.collectionId
        }
      }, {
        key: "setCollectionParams", value: function () {
          u.a.isCollectionPage() ? (c.a.setAddressBarPathAfterFilter(this.href), c.a.setWindowTitleAfterFilter(this.label + " - " + l.a.shopName), K.default.setParam("sort", this.sortOrder), l.a.defaultSorting = this.sortOrder) : K.default.setParam(this.filterOption.filterOptionId, this.collectionId), l.a.collectionId = this.collectionId, K.default.setParam("collection_scope", this.collectionId)
        }
      }, {
        key: "clearAllTagParams", value: function () {
          var t = this.filterOption.filterOptionId.replace(l.a.prefix + "_c", l.a.prefix + "_ct");
          K.default.setParam(t, null), l.a.collectionTags = [];
          var e = [];
          Object.keys(l.a.queryParams).forEach((function (t) {
            t.startsWith(l.a.prefix) && !t.startsWith(l.a.prefix + "_c") && e.push(t)
          })), e.forEach((function (t) {
            K.default.setParam(t, null)
          }))
        }
      }, {
        key: "setData", value: function (t) {
          var n = this;
          no(io(e.prototype), "setData", this).call(this, t), this.filterOption = this.parent, this.level = 1, this.href = u.a.isCollectionPage() ? u.a.reBuildUrlBaseOnLocale("/collections/" + this.handle) : "javascript:void(0);";
          var i = u.a.getDefaultSorting(this.collectionId);
          this.sortOrder = "" != i ? i : t.sort_order ? t.sort_order : l.a.defaultSorting, this.children = [], Array.isArray(t.tags) && t.tags.forEach((function (t) {
            if (t.tag) {
              var e = new lo(n.filterTreeType);
              n.addComponent(e), e.setData(t)
            }
          })), this.isSelected = this.isAppliedFilter(), this.isSelectedChild = this.children.some((function (t) {
            return t.isSelected || t.isSelectedChild
          })), this.filterOption.allNestedFilterItems.set(this.collectionId, this)
        }
      }], [{
        key: "getLevelOpenStateData", value: function (t) {
          var e = t.filterOption.filterOptionId, n = t.collectionId, i = t.tag, r = e + ":" + n + (i ? ":" + i : "");
          return co.get(r)
        }
      }, {
        key: "setLevelOpenStateData", value: function (t, e) {
          var n = t.filterOption.filterOptionId, i = t.collectionId, r = t.tag, o = n + ":" + i + (r ? ":" + r : "");
          co.set(o, e)
        }
      }]), e
    }(Ii), lo = function (t) {
      function e() {
        return Zr(this, e), eo(this, io(e).apply(this, arguments))
      }

      return ro(e, t), to(e, [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-second-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-third-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "onClick", value: function (t) {
          t && t.preventDefault(), this.collectionId == l.a.collectionId && o.a.getSettingValue("general.multiLevelCollectionSelectType") != Wn.a.SelectType.SINGLE || this.clearAllTagParams(), this.setCollectionParams(), this.setTagParams(), K.default.setParam("page", 1), this.children && this.children.length > 0 && ao.setLevelOpenStateData(this, !0), this.requestInstantly && K.default.applyFilter("collection")
        }
      }, {
        key: "setTagParams", value: function () {
          if (u.a.isCollectionPage() && o.a.getSettingValue("general.multiLevelCollectionSelectType") != Wn.a.SelectType.MULTIPLE) l.a.collectionTags = this.tag, c.a.setAddressBarPathAfterFilter(this.href); else {
            Array.isArray(l.a.collectionTags) || (l.a.collectionTags = []);
            var t = l.a.collectionTags.indexOf(this.tag);
            t > -1 ? l.a.collectionTags.splice(t, 1) : l.a.collectionTags.push(this.tag), o.a.general.tagMode = "2";
            var e = this.filterOption.filterOptionId.replace(l.a.prefix + "_c_", l.a.prefix + "_ct_");
            Array.isArray(l.a.collectionTags) && l.a.collectionTags.length > 0 ? K.default.setParam(e, l.a.collectionTags) : K.default.setParam(e, null)
          }
        }
      }, {
        key: "isAppliedFilter", value: function () {
          var t = Array.isArray(l.a.collectionTags) && l.a.collectionTags.includes(this.tag) || l.a.collectionTags == this.tag;
          return l.a.collectionId == this.collectionId && t
        }
      }, {
        key: "setData", value: function (t) {
          var e = this;
          this.tag = t.tag, this.slugifyTag = u.a.slugify(this.tag), this.label = t.displayName ? t.displayName : t.tag, this.filterOption = this.parent.filterOption, this.requestInstantly = this.parent.requestInstantly, this.collectionId = this.parent.collectionId, this.handle = this.parent.handle, this.level = 2, this.href = u.a.isCollectionPage() && o.a.getSettingValue("general.multiLevelCollectionSelectType") != Wn.a.SelectType.MULTIPLE ? u.a.reBuildUrlBaseOnLocale("/collections/" + this.handle + "/" + this.slugifyTag) : "javascript:void(0);", this.sortOrder = this.parent.sortOrder ? this.parent.sortOrder : l.a.defaultSorting, this.children = [], Array.isArray(t.subTags) && t.subTags.forEach((function (t) {
            if (t.tag) {
              var n = new so(e.filterTreeType);
              e.addComponent(n), n.setData(t)
            }
          })), this.label = this.buildLabel(), this.isSelected = this.isAppliedFilter(), this.isSelectedChild = this.children.some((function (t) {
            return t.isSelected || t.isSelectedChild
          })), this.filterOption.allNestedFilterItems.set(this.collectionId + ":" + this.tag, this)
        }
      }]), e
    }(ao), so = function (t) {
      function e() {
        return Zr(this, e), eo(this, io(e).apply(this, arguments))
      }

      return ro(e, t), to(e, [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-third-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "setData", value: function (t) {
          this.tag = t.tag, this.slugifyTag = u.a.slugify(this.tag), this.label = t.displayName ? t.displayName : t.tag, this.filterOption = this.parent.filterOption, this.requestInstantly = this.parent.requestInstantly, this.collectionId = this.parent.collectionId, this.handle = this.parent.handle, this.level = 3, this.href = u.a.isCollectionPage() && o.a.getSettingValue("general.multiLevelCollectionSelectType") != Wn.a.SelectType.MULTIPLE ? u.a.reBuildUrlBaseOnLocale("/collections/" + this.handle + "/" + this.slugifyTag) : "javascript:void(0);", this.filterOption.allNestedFilterItems.set(this.collectionId + ":" + this.tag, this), this.sortOrder = this.parent.sortOrder ? this.parent.sortOrder : l.a.defaultSorting, this.label = this.buildLabel(), this.isSelected = this.isAppliedFilter()
        }
      }]), e
    }(lo), co = new Map, uo = ao;

    function po(t) {
      return (po = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function fo(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function ho(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function yo(t, e, n) {
      return e && ho(t.prototype, e), n && ho(t, n), t
    }

    function go(t, e) {
      return !e || "object" !== po(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function mo(t) {
      return (mo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function bo(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && vo(t, e)
    }

    function vo(t, e) {
      return (vo = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var So = function (t) {
      function e(t) {
        var n;
        return fo(this, e), (n = go(this, mo(e).call(this, t))).$element = null, n.$itemElement = null, n.$childContainerElement = null, n
      }

      return bo(e, t), yo(e, [{
        key: "init", value: function () {
          this.filterOption ? this.filterOption.selectType : this.parent.selectType;
          this.requestInstantly = this.filterTreeType == pi.FilterTreeType.VERTICAL || o.a.getSettingValue("general.requestInstantly")
        }
      }, {
        key: "getTemplate", value: function () {
          return '\n\t\t\t<li class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-first-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-second-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t'.trim()
        }
      }, {
        key: "getSwatchTemplate", value: function () {
          return '\n\t\t\t<span class="boost-pfs-filter-option-swatch-image" \n\t\t\t\tstyle="background-color: {{backgroundColor}}; \n\t\t\t\tbackground-image: url({{swatchFileUrl}});" title="{{label}}">\n\t\t\t</span>\n\t\t'.trim()
        }
      }, {
        key: "getArrowTemplate", value: function () {
          return '\n\t\t\t<button class="{{class.button}} {{class.button}}-arrow" data-action="expand-filter-item" aria-label="{{label.ada.toggleMultiLevel}}">\n\t\t\t\t<span class="boost-pfs-arrow"></span>\n\t\t\t</button>\n\t\t'.trim()
        }
      }, {
        key: "compileSwatchTemplate", value: function () {
          return this.getSwatchTemplate().replace(/{{backgroundColor}}/g, this.backgroundColor).replace(/{{swatchFileUrl}}/g, this.swatchFileUrl)
        }
      }, {
        key: "compileArrowTemplate", value: function () {
          return 3 != this.level && this.children && this.children.length > 0 ? this.getArrowTemplate().replace(/{{label.ada.toggleMultiLevel}}/g, Labels.ada.toggleMultiLevel.replace(/{{filterItem}}/g, this.label)) : ""
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.filterOptionItem}}/g, N.a.filterOptionItem).replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel).replace(/{{label}}/g, this.label).replace(/{{swatch}}/g, this.filterOption.displayTypeItem == Wn.a.DisplayType.SWATCH ? this.compileSwatchTemplate() : "").replace(/{{arrow}}/g, this.compileArrowTemplate()).replace(/{{class.button}}/g, N.a.button).replace(/{{childItems}}/g, "")
        }
      }, {
        key: "render", value: function () {
          var t = this;
          if (this.$element || (this.$element = r()(this.compileTemplate()), this.$itemElement = this.$element.find("." + N.a.filterOptionItem), this.$itemClickElement = this.$itemElement.find('[data-action="select-filter-item"]'), this.$toggleClickElement = this.$itemElement.find('[data-action="expand-filter-item"]'), this.$childContainerElement = this.$element.find(".boost-pfs-filter-option-multi-level-list"), this.$childContainerElement && this.children && this.children.length > 0 && this.children.forEach((function (e) {
            e.$element && t.$childContainerElement.append(e.$element)
          }))), this.isSelected = this.isAppliedFilter(), this.isSelectedChild = !1, Array.isArray(this.children) && (this.isSelectedChild = this.children.some((function (t) {
            return t.isSelected || t.isSelectedChild
          }))), this.$itemElement) {
            this.isSelected || this.filterOption.selectType == Wn.a.SelectType.SINGLE && this.isSelectedChild ? this.$itemElement.addClass("selected") : this.$itemElement.removeClass("selected");
            var n = e.getLevelOpenStateData(this), i = o.a.getSettingValue("general.openMultiLevelByDefault");
            n || Array.isArray(i) && i.includes(this.level) || null == n && this.isSelectedChild ? (this.$itemElement.addClass("boost-pfs-open"), e.setLevelOpenStateData(this, !0)) : e.setLevelOpenStateData(this, !1)
          }
        }
      }, {
        key: "bindEvents", value: function () {
          this.$itemClickElement && this.$itemClickElement.on("click", this.onClick.bind(this)), this.$toggleClickElement && this.$toggleClickElement.on("click", this.onClickToggle.bind(this))
        }
      }, {
        key: "isAppliedFilter", value: function () {
          var t = l.a.queryParams[this.filterOption.filterOptionId];
          return !(!Array.isArray(t) || !t.includes(this.value))
        }
      }, {
        key: "onSelectFilter", value: function () {
          this.children && this.children.length > 0 && (this.$itemElement.addClass("boost-pfs-open"), e.setLevelOpenStateData(this, !0)), this.filterOption.selectType == Wn.a.SelectType.SINGLE && this.filterOption.allNestedFilterItems.forEach((function (t) {
            t.$itemElement && (t.$itemElement.removeClass("selected"), t.isSelected = !1)
          })), this.filterOption.selectType == Wn.a.SelectType.SINGLE ? (this.isSelected = !0, this.$itemElement.addClass("selected"), this.level > 1 && this.parent.$itemElement.addClass("selected"), this.level > 2 && this.parent.parent.$itemElement.addClass("selected")) : (this.isSelected = !this.isSelected, this.$itemElement.toggleClass("selected"))
        }
      }, {
        key: "onApplyFilter", value: function () {
          var t = this;
          if (this.isSelected && this.filterOption.selectType == Wn.a.SelectType.SINGLE) this.children && this.children.length > 0 && (this.$itemElement.addClass("boost-pfs-open"), e.setLevelOpenStateData(this, !0)); else {
            this.children && this.children.length > 0 && e.setLevelOpenStateData(this, !0);
            var n = this.filterOption.filterOptionId;
            this.isSelected = !this.isSelected;
            var i = null;
            this.filterOption.selectType == Wn.a.SelectType.SINGLE ? i = this.isSelected ? [this.value] : [] : (i = l.a.queryParams[n], Array.isArray(i) || (i = []), this.isSelected ? i.includes(this.value) || i.push(this.value) : i = i.filter((function (e) {
              return e !== t.value
            }))), K.default.setParam(n, i), K.default.setParam(n + "_and_condition", !!(this.filterOption.useAndCondition && i.length > 0) || null), K.default.setParam("page", 1);
            var r = {filterOptionId: n, filterValue: this.value};
            K.default.applyFilter("filter", r)
          }
        }
      }, {
        key: "onClickToggle", value: function () {
          this.$itemElement.toggleClass("boost-pfs-open"), this.$itemElement.hasClass("boost-pfs-open") ? e.setLevelOpenStateData(this, !0) : e.setLevelOpenStateData(this, !1)
        }
      }, {
        key: "setData", value: function (t) {
          var e = this;
          this.value = t.tag, this.label = t.displayName ? t.displayName : t.tag, this.docCount = t.doc_count ? t.doc_count : 0, this.level = 1, this.id = this.value, this.filterOption = this.parent, this.label = this.buildLabel(), this.filterOption.displayTypeItem == Wn.a.DisplayType.SWATCH && this.setSwatchData(), this.children = [], Array.isArray(t.subTags) && t.subTags.forEach((function (t) {
            if (t.tag) {
              var n = new Oo(e.filterTreeType);
              e.addComponent(n), n.setData(t)
            }
          })), this.filterOption.allNestedFilterItems.set(this.value, this)
        }
      }, {
        key: "setSwatchData", value: function () {
          var t = this.filterOption.filterOptionId.replace("pf_t_", "").replace("pf_opt_", "");
          this.swatchFileName = t + "-" + u.a.slugify(this.label).replace(/\#/g, ""), this.swatchFileUrl = u.a.getFilePath(this.swatchFileName, l.a.swatchExtension, o.a.getSettingValue("general.swatchImageVersion"));
          var e = u.a.slugify(this.label).split("-");
          this.backgroundColor = e[e.length - 1]
        }
      }], [{
        key: "getLevelOpenStateData", value: function (t) {
          var e = t.filterOption.filterOptionId + ":" + t.value;
          return Po.get(e)
        }
      }, {
        key: "setLevelOpenStateData", value: function (t, e) {
          var n = t.filterOption.filterOptionId + ":" + t.value;
          Po.set(n, e)
        }
      }]), e
    }(Ii), Oo = function (t) {
      function e() {
        return fo(this, e), go(this, mo(e).apply(this, arguments))
      }

      return bo(e, t), yo(e, [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-second-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-third-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "setData", value: function (t) {
          var e = this;
          this.value = t.tag, this.label = t.displayName ? t.displayName : t.tag, this.docCount = t.doc_count ? t.doc_count : 0, this.level = 2, this.parent && (this.requestInstantly = this.parent.requestInstantly, this.filterOption = this.parent.filterOption), this.label = this.buildLabel(), this.filterOption.displayTypeItem == Wn.a.DisplayType.SWATCH && this.setSwatchData(), this.children = [], Array.isArray(t.subTags) && t.subTags.forEach((function (t) {
            if (t.tag) {
              var n = new To(e.filterTreeType);
              e.addComponent(n), n.setData(t)
            }
          })), this.filterOption.allNestedFilterItems.set(this.value, this)
        }
      }]), e
    }(So), To = function (t) {
      function e() {
        return fo(this, e), go(this, mo(e).apply(this, arguments))
      }

      return bo(e, t), yo(e, [{
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-third-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "setData", value: function (t) {
          this.value = t.tag, this.label = t.displayName ? t.displayName : t.tag, this.docCount = t.doc_count ? t.doc_count : 0, this.level = 3, this.parent && (this.requestInstantly = this.parent.requestInstantly, this.filterOption = this.parent.filterOption), this.label = this.buildLabel(), this.filterOption.displayTypeItem == Wn.a.DisplayType.SWATCH && this.setSwatchData(), this.filterOption.allNestedFilterItems.set(this.value, this)
        }
      }]), e
    }(Oo), Po = new Map, wo = So;

    function _o(t) {
      return (_o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Co(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function ko(t, e) {
      return !e || "object" !== _o(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Eo(t) {
      return (Eo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Io(t, e) {
      return (Io = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Lo = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = ko(this, Eo(e).call(this))).filterTreeType = t, n.$clickElement = null, n.$toggleElement = null, n
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Io(t, e)
      }(e, t), n = e, a = [{
        key: "getCollapsedStateData", value: function (t) {
          return Ro.get(t)
        }
      }, {
        key: "setCollapsedStateData", value: function (t, e) {
          Ro.set(t, e)
        }
      }], (i = [{
        key: "init", value: function () {
          var t;
          if (this.isCollapsed = !1, this.filterTreeType == pi.FilterTreeType.HORIZONTAL) this.isCollapsed = !0; else if (o.a.getSettingValue("general.keepToggleState") && (t = e.getCollapsedStateData(this.parent.filterOptionId)), void 0 === t) {
            var n = u.a.isMobile();
            this.isCollapsed = n && (this.parent.isCollapseMobile || o.a.getSettingValue("general.collapseOnMobileByDefault")) || !n && (this.parent.isCollapsePC || o.a.getSettingValue("general.collapseOnPCByDefault"))
          } else this.isCollapsed = t
        }
      }, {
        key: "isBindEvents", value: function () {
          return !(this.isBoundEvent || !this.parent.$element || !this.parent.$filterOptionContentElement || !this.parent.$filterOptionTitleElement)
        }
      }, {
        key: "bindEvents", value: function () {
          this.$clickElement = this.parent.$filterOptionTitleElement, this.$toggleElement = this.parent.$filterOptionContentElement, this.filterTreeType == pi.FilterTreeType.VERTICAL ? this.$clickElement.on("click", this.onToggleVertical.bind(this)) : (this.$clickElement.on("click", this.onToggleHorizontal.bind(this)), Fo || (Fo = !0, r()("body").on("click", this.onClickOutSideHorizontal.bind(this))), this.parent.filterOptionId == Ao && (Ao = "", this.onToggleHorizontal())), this.$clickElement.attr("aria-expanded", !this.isCollapsed)
        }
      }, {
        key: "onToggleVertical", value: function () {
          this.isCollapsed = !this.isCollapsed, o.a.getSettingValue("general.keepToggleState") && e.setCollapsedStateData(this.parent.filterOptionId, this.isCollapsed), this.parent.$element.toggleClass("boost-pfs-filter-option-collapsed"), this.$clickElement.attr("aria-expanded", !this.isCollapsed), this.isCollapsed ? this.$toggleElement.addClass("toggled") : (this.$toggleElement.show(), this.$toggleElement.removeClass("toggled")), this.afterToggle()
        }
      }, {
        key: "onToggleHorizontal", value: function () {
          var t = !this.isCollapsed;
          this.calculateHorizontalColumn();
          var e = this.closeAllHorizontalTabs();
          t || (e ? Ao = this.parent.filterOptionId : (Ao = "", this.parent.$element.removeClass("boost-pfs-filter-option-collapsed"), this.$clickElement.attr("aria-expanded", !0), this.$toggleElement.show(), this.isCollapsed = !1)), this.afterToggle()
        }
      }, {
        key: "onClickOutSideHorizontal", value: function (t) {
          if (t && t.target) {
            var e = r()(t.target);
            e.closest(s.a.filterTreeHorizontal + " ." + N.a.filterOption).length > 0 || e.closest(s.a.filterTreeHorizontal + " ." + N.a.clearButton).length > 0 || e.closest(s.a.filterTreeHorizontal + " ." + N.a.clearAllButton).length > 0 || this.closeAllHorizontalTabs()
          }
        }
      }, {
        key: "closeAllHorizontalTabs", value: function () {
          var t = this.parent.parent, e = !1;
          return t.filterOptions.forEach((function (t) {
            t.$element && t.collapse && !t.collapse.isCollapsed && (t.$element.addClass("boost-pfs-filter-option-collapsed"), t.$filterOptionTitleElement.attr("aria-expanded", !1), t.collapse.isCollapsed = !0, t.collapse.$toggleElement.hide(), (t.allNestedFilterItems ? t.allNestedFilterItems : t.filterItems).forEach((function (n) {
              e || n.isAppliedFilter() != n.isSelected && (e = t)
            })))
          })), !!e && (e.applyButton.onApplyOptionValues(), !0)
        }
      }, {
        key: "afterToggle", value: function () {
        }
      }, {
        key: "calculateHorizontalColumn", value: function () {
          var t = this.parent.displayColumn, e = "left", n = this.parent.$filterOptionTitleElement.offset();
          if (1 != t && "1" != t || this.parent.displayType != FilterOptionEnum.DisplayType.RANGE || (t = 2), n && n.left) switch (t) {
            case 1:
            case"1":
              n.left + 250 > r()(window).width() && (e = "right");
              break;
            case 2:
            case"2":
              n.left + 532 > r()(window).width() && (e = n.left < 532 ? "center" : "right");
              break;
            case 3:
            case"3":
              n.left + 700 > r()(window).width() && (e = "right")
          }
          "left" == e ? (this.parent.$element.removeClass("boost-pfs-filter-option-right"), this.parent.$element.addClass("boost-pfs-filter-option-left")) : "center" == e ? (this.parent.$element.removeClass("boost-pfs-filter-option-left"), this.parent.$element.removeClass("boost-pfs-filter-option-right"), this.parent.$element.addClass("boost-pfs-filter-option-center")) : (this.parent.$element.removeClass("boost-pfs-filter-option-left"), this.parent.$element.addClass("boost-pfs-filter-option-right"))
        }
      }]) && Co(n.prototype, i), a && Co(n, a), e
    }(d.a), Ao = "", Ro = new Map, Fo = !1, xo = Lo;

    function Bo(t) {
      return (Bo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function jo(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function $o(t, e) {
      return !e || "object" !== Bo(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Vo(t) {
      return (Vo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Mo(t, e) {
      return (Mo = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Do = function (t) {
      function e(t) {
        var n;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = $o(this, Vo(e).call(this))).filterItems = new Map, n.clearButton = null, n.applyButton = null, n.searchBox = null, n.filterTreeType = t, n.$element = null, n.$filterOptionTitleElement = null, n.$filterOptionContentElement = null, n.$filterItemsContainerElement = null;
        var i = n.filterTreeType == pi.FilterTreeType.VERTICAL;
        return n.selector = {
          filterOptionTitle: "." + N.a.filterOptionTitle + " > button",
          filterOptionContent: "." + N.a.filterOptionContent,
          filterItemsContainer: "ul",
          clearButtonContainer: i ? "." + N.a.filterOptionTitle : "." + N.a.filterOptionContent,
          applyButtonContainer: "." + N.a.filterOptionContent,
          viewMoreContainer: "." + N.a.filterOptionContent,
          searchBoxContainer: "." + N.a.filterOptionContent,
          tooltipContainer: "." + N.a.filterOptionTitle + " ." + N.a.filterOptionTitle + "-heading",
          numberFilterItemsContainer: "." + N.a.filterOptionTitle + "-count"
        }, n
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Mo(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          this.collapse = new xo(this.filterTreeType), this.addComponent(this.collapse), this.clearButton = new mi(this.filterTreeType, mi.ClearType.CLEAR_OPTION_VALUES), this.addComponent(this.clearButton), this.applyButton = new Pi(this.filterTreeType, Pi.ApplyType.APPLY_OPTION_VALUES), this.addComponent(this.applyButton), this.viewMore = new Lr(this.filterTreeType), this.addComponent(this.viewMore), this.scrollbar = new Qr, this.addComponent(this.scrollbar), this.searchBox = new jr, this.addComponent(this.searchBox), this.filterTooltip = new Ur(this.tooltip), this.addComponent(this.filterTooltip)
        }
      }, {
        key: "getTemplate", value: function () {
          switch (this.filterTreeType) {
            case"vertical":
              return '\n\t\t\t\t<div class="{{class.filterOption}} {{blockTypeClass}} {{blockId}} {{class.filterScrollbar}} {{displayColumn}}">\n\t\t\t\t\t<div class="{{class.filterOptionTitle}}">\n\t\t\t\t\t\t<button aria-controls="{{ada.filterOptionDomId}}" aria-label="{{ada.filterOptionTitle}}" tabindex="0" class="{{class.button}} {{class.filterOptionTitle}}-heading">\n\t\t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-text">\n\t\t\t\t\t\t\t\t{{blockTitle}}\n\t\t\t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-count">\n\t\t\t\t\t\t\t\t\t{{numberAppliedFilterItems}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{tooltip}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<p class="boost-pfs-filter-selected-items-mobile"></p>\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="{{class.filterOptionContent}}">\n\t\t\t\t\t\t{{searchBox}}\n\t\t\t\t\t\t<div class="{{class.filterOptionContentInner}}">\n\t\t\t\t\t\t\t{{blockContent}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{viewMore}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t'.trim();
            case"horizontal":
              return '\n\t\t\t\t<div class="{{class.filterOption}} {{blockTypeClass}} {{blockId}} {{class.filterScrollbar}} {{displayColumn}}">\n\t\t\t\t\t<div class="{{class.filterOptionTitle}}">\n\t\t\t\t\t\t<button aria-controls="{{ada.filterOptionDomId}}" aria-label="{{ada.filterOptionTitle}}" tabindex="0" class="{{class.button}} {{class.filterOptionTitle}}-heading">\n\t\t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-text">\n\t\t\t\t\t\t\t{{blockTitle}}\n\t\t\t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-count">\n\t\t\t\t\t\t\t\t\t{{numberAppliedFilterItems}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{tooltip}}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="{{class.filterOptionContent}}">\n\t\t\t\t\t\t<div class="{{class.filterOptionContentInner}}">\n\t\t\t\t\t\t\t{{blockContent}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{viewMore}}\n\t\t\t\t\t\t{{applyButton}}\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t'.trim();
            default:
              throw Error("filterTreeType is wrong")
          }
        }
      }, {
        key: "getBlockContentTemplate", value: function () {
          throw Error("Override this method")
        }
      }, {
        key: "compileBlockContentTemplate", value: function () {
          return this.getBlockContentTemplate()
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = u.a.slugify(this.label), e = u.a.slugify(this.displayType.replace(/_/g, "-")),
            n = Qr.isEnabled(this.displayType, this.filterType, this.showMoreType) ? N.a.filterHasScrollbar : N.a.filterNoScrollbar,
            i = "boost-pfs-filter-option-column-" + this.displayColumn;
          return this.getTemplate().replace(/{{blockTitle}}/g, this.label).replace(/{{blockTypeClass}}/g, N.a.filterOption + "-" + e).replace(/{{blockId}}/g, N.a.filterOption + "-" + t).replace(/{{blockContent}}/g, this.compileBlockContentTemplate()).replace(/{{blockContentId}}/g, N.a.filterOptionContent + "-" + t).replace(/{{displayColumn}}/g, i).replace(/{{class.filterOption}}/g, N.a.filterOption).replace(/{{class.filterOptionContent}}/g, N.a.filterOptionContent).replace(/{{class.filterOptionContentInner}}/g, N.a.filterOptionContentInner).replace(/{{class.filterOptionTitle}}/g, N.a.filterOptionTitle).replace(/{{class.filterScrollbar}}/g, n).replace(/{{class.filterOptionItemList}}/g, N.a.filterOptionItemList).replace(/{{class.filterOptionItemListSingleList}}/g, N.a.filterOptionItemListSingleList).replace(/{{class.filterOptionItemListMultipleList}}/g, N.a.filterOptionItemListMultipleList).replace(/{{class.filterOptionItemListBox}}/g, N.a.filterOptionItemListBox).replace(/{{class.filterOptionItemListSwatch}}/g, N.a.filterOptionItemListSwatch).replace(/{{class.filterOptionItemListRating}}/g, N.a.filterOptionItemListRating).replace(/{{class.filterOptionMultiLevelTag}}/g, N.a.filterOptionMultiLevelTag).replace(/{{class.filterOptiontemListMultiLevelCollections}}/g, N.a.filterOptiontemListMultiLevelCollections).replace(/{{class.button}}/g, N.a.button).replace(/{{ada.filterOptionTitle}}/g, a.a.ada.filterOptionTitle.replace("{{filterOption}}", this.label)).replace(/{{ada.filterOptionDomId}}/g, this.parent.id + "-" + this.filterOptionId.replace(/_/g, "-")).replace(/{{tooltip}}/g, "").replace(/{{clearButton}}/g, "").replace(/{{applyButton}}/g, "").replace(/{{searchBox}}/g, "").replace(/{{viewMore}}/g, "").replace(/{{filterItems}}/g, "").replace(/\n/g, "").replace(/\t/g, "")
        }
      }, {
        key: "isRender", value: function () {
          if (this.status == Wn.a.Status.ACTIVE) {
            var t = o.a.getSettingValue("general.showSingleOption"), e = 0,
              n = this.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS || this.displayType == Wn.a.DisplayType.MULTI_LEVEL_TAG;
            return this.filterItems.forEach((function (t) {
              t.$element && t.$element.length && (e++, n && Array.isArray(t.children) && t.children.length > 0 && (e += t.children.length))
            })), t ? e > 1 : e > 0
          }
          return !1
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "render", value: function () {
          var t = this;
          if (!this.$element) {
            this.$element = r()(this.compileTemplate()), this.$filterOptionContentElement = this.$element.find(this.selector.filterOptionContent), this.$filterOptionTitleElement = this.$element.find(this.selector.filterOptionTitle), this.$filterItemsContainerElement = this.$element.find(this.selector.filterItemsContainer).html(""), this.filterItems.forEach((function (e) {
              e.isRenderOnScroll || t.$filterItemsContainerElement.append(e.$element)
            })), this.$element.find(this.selector.searchBoxContainer).prepend(this.searchBox.$element), this.$element.find(this.selector.viewMoreContainer).append(this.viewMore.$element), this.$element.find(this.selector.applyButtonContainer).append(this.applyButton.$element), this.$element.find(this.selector.clearButtonContainer).append(this.clearButton.$element);
            var e = this.$element.find(this.selector.tooltipContainer);
            e.append(this.filterTooltip.$element), e.append(this.filterTooltip.$popupElement), this.collapse.isCollapsed && (this.$element.addClass("boost-pfs-filter-option-collapsed"), this.$filterOptionContentElement.addClass("toggled"), this.$filterOptionContentElement.hide()), this.$filterOptionContentElement.attr("id", this.parent.id + "-" + this.filterOptionId.replace(/_/g, "-"))
          }
          this.numberAppliedFilterItems = this.getNumberAppliedFilterItems(), this.$element.find(this.selector.numberFilterItemsContainer).html(this.numberAppliedFilterItems > 0 ? this.numberAppliedFilterItems : "")
        }
      }, {
        key: "getNumberAppliedFilterItems", value: function () {
          var t = 0,
            e = [Wn.a.DisplayType.LIST, Wn.a.DisplayType.BOX, Wn.a.DisplayType.SWATCH, Wn.a.DisplayType.RATING, Wn.a.DisplayType.MULTI_LEVEL_TAG];
          return this.filterItems && e.includes(this.displayType) && this.filterItems.forEach((function (e) {
            e.isSelected && t++
          })), t
        }
      }, {
        key: "setData", value: function (t) {
          var e = this;
          this.status = t.status, this.position = t.position, this.label = u.a.stripHtml(t.label), this.filterOptionId = t.filterOptionId, this.filterType = t.filterType, this.displayType = t.displayType, this.selectType = t.selectType, this.valueType = t.valueType, this.displayTypeItem = t.displayTypeItem, this.manualValues = t.manualValues ? t.manualValues : [], this.prefix = t.prefix, this.isCollapsePC = t.isCollapsePC, this.isCollapseMobile = t.isCollapseMobile, this.showSearchBoxFilterPC = t.showSearchBoxFilterPC, this.showSearchBoxFilterMobile = t.showSearchBoxFilterMobile, this.keepValuesStatic = t.keepValuesStatic, this.activeCollectionAll = t.activeCollectionAll, this.tooltip = t.tooltip, this.showMoreType = null == t.showMoreType || "" == t.showMoreType ? Wn.a.ShowMoreType.SCROLLBAR : t.showMoreType, this.sortType = t.sortType, this.sortManualValues = t.sortManualValues, this.displayAllValuesInUppercaseForm = t.displayAllValuesInUppercaseForm, this.useAndCondition = t.useAndCondition, this.showExactRating = t.showExactRating, this.excludePriceFromValue = t.excludePriceFromValue, this.starColor = u.a.stripHtml(t.starColor), this.displayColumn = t.displayColumn ? t.displayColumn : o.a.getSettingValue("general.filterHorizontalColumn"), this.swatchStyle = t.swatchStyle, this.shortenPipsRange = t.shortenPipsRange, t.inventoryBaseSelectedLocations && (l.a.inventoryBaseSelectedLocations = t.inventoryBaseSelectedLocations), this.children = [], this.filterItems = new Map;
          var n = [];
          t.values ? n = Array.isArray(t.values) ? t.values : [t.values] : t.manualValues && (n = Array.isArray(t.manualValues) ? t.manualValues : [t.manualValues]), this.isSortValues() && this.sortValues(n), this.modifyValues(n), this.markValuesAsNoRender(n), n.forEach((function (t) {
            var n = null;
            switch (e.displayType) {
              case Wn.a.DisplayType.LIST:
                n = new Bi(e.filterTreeType);
                break;
              case Wn.a.DisplayType.BOX:
                n = new qi(e.filterTreeType);
                break;
              case Wn.a.DisplayType.SWATCH:
                n = new Ji(e.filterTreeType);
                break;
              case Wn.a.DisplayType.RATING:
                n = new or(e.filterTreeType);
                break;
              case Wn.a.DisplayType.RANGE:
                n = new Or(e.filterTreeType);
                break;
              case Wn.a.DisplayType.SUB_CATEGORY:
                n = new hr(e.filterTreeType);
                break;
              case Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
                n = new uo(e.filterTreeType);
                break;
              case Wn.a.DisplayType.MULTI_LEVEL_TAG:
                n = new wo(e.filterTreeType)
            }
            if (n) {
              e.addComponent(n), n.setData(t);
              var i = n.key ? n.key : n.value;
              e.filterItems.set(i, n)
            }
          }))
        }
      }, {
        key: "isSortValues", value: function () {
          if ([Wn.a.FilterType.REVIEW_RATINGS, Wn.a.FilterType.PERCENT_SALE].includes(this.filterType)) return !0;
          var t = [Wn.a.FilterType.STOCK], e = [Wn.a.DisplayType.RANGE, Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS],
            n = this.valueType == Wn.a.ValueType.ALL,
            i = this.valueType != Wn.a.ValueType.ALL && (this.sortManualValues || o.a.getSettingValue("general.sortManualValues")),
            r = this.displayType == Wn.a.DisplayType.RANGE && 0 == this.isNumberRangeSlider;
          return !t.includes(this.filterType) && (!e.includes(this.displayType) || r) && (n || i)
        }
      }, {
        key: "sortValues", value: function (t) {
          var e = this.sortType ? this.sortType : Wn.a.SortType.KEY_ASCENDING, n = e.split("-")[0],
            i = "key" == n ? "doc_count" : "key";
          this.filterType == Wn.a.FilterType.COLLECTION && "key" == n && (n = "label"), t && t.length > 0 && t.sort(function (t, e) {
            var r = -1;
            if (null != t[n] && null != e[n]) {
              var o = t[n].toString().toLowerCase(), a = e[n].toString().toLowerCase();
              if (0 == (r = this.naturalSortFunction(o, a)) && null != t[i] && null != e[i]) {
                var l = t[i].toString().toLowerCase(), s = e[i].toString().toLowerCase();
                r = this.naturalSortFunction(l, s)
              }
            }
            return r
          }.bind(this)), (e.indexOf("desc") > -1 || this.filterType == Wn.a.FilterType.REVIEW_RATINGS || this.filterType == Wn.a.FilterType.PERCENT_SALE) && t.reverse()
        }
      }, {
        key: "naturalSortFunction", value: function (t, e) {
          function n(t) {
            for (var e, n, i = [], r = 0, o = -1, a = 0; e = (n = t.charAt(r++)).charCodeAt(0);) {
              var l = 46 == e || e >= 48 && e <= 57;
              l !== a && (i[++o] = "", a = l), i[o] += n
            }
            return i
          }

          for (var i = n(t), r = n(e), o = 0; i[o] && r[o]; o++) if (i[o] !== r[o]) {
            var a = Number(i[o]), l = Number(r[o]);
            return a == i[o] && l == r[o] ? a - l : i[o] > r[o] ? 1 : -1
          }
          return i.length - r.length
        }
      }, {
        key: "modifyValues", value: function (t) {
          if (this.filterType == Wn.a.FilterType.COLLECTION) {
            if (this.activeCollectionAll && !t.some((function (t) {
              return "all" == t.handle
            }))) {
              var e = {key: "0", label: a.a.collectionAll, handle: "all"};
              t.unshift(e)
            }
            if (t.forEach((function (t) {
              t.sort_order && (t.sort_order.endsWith("-desc") ? t.sort_order = t.sort_order.replace(/-desc$/, "-descending") : t.sort_order.endsWith("-asc") && (t.sort_order = t.sort_order.replace(/-asc$/, "-ascending")), t.sort_order.startsWith("alpha") && (t.sort_order = t.sort_order.replace(/alpha/, "title")))
            })), !this.keepValuesStatic && !o.a.getSettingValue("general.showOutOfStockOption")) for (var n = t.length - 1; n >= 0; n--) 0 == t[n].doc_count && t.splice(n, 1)
          }
        }
      }, {
        key: "markValuesAsNoRender", value: function (t) {
          var e = o.a.getSettingValue("general.scrollFirstLoadLength"),
            n = [Wn.a.DisplayType.LIST, Wn.a.DisplayType.BOX, Wn.a.DisplayType.SWATCH];
          u.a.isMobile() ? n = [Wn.a.DisplayType.LIST, Wn.a.DisplayType.SWATCH] : this.filterTreeType == pi.FilterTreeType.VERTICAL && (n = [Wn.a.DisplayType.LIST, Wn.a.DisplayType.BOX]), Array.isArray(t) && t.length > e && n.includes(this.displayType) && Qr.isEnabled(this.displayType, this.filterType, this.showMoreType) && (this.isLoadMoreOnScroll = !0, t.forEach((function (t, n) {
            t.isRenderOnScroll = n >= e
          })))
        }
      }]) && jo(n.prototype, i), s && jo(n, s), e
    }(d.a);

    function No(t) {
      return (No = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Uo(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function qo(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ho(t, e) {
      return !e || "object" !== No(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Wo(t, e, n) {
      return (Wo = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Go(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function Go(t) {
      return (Go = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function zo(t, e) {
      return (zo = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ko = function (t) {
      function e() {
        return Uo(this, e), Ho(this, Go(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && zo(t, e)
      }(e, t), n = e, (i = [{
        key: "getBlockContentTemplate", value: function () {
          return this.selectType == Wn.a.SelectType.SINGLE ? '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSingleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'.trim() : '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListMultipleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'.trim()
        }
      }, {
        key: "prepareFilterOptionData", value: function (t) {
          if (("price" == t.filterType || "variants_price" == t.filterType) && t.values && Array.isArray(t.values) && u.a.isEnableShopifyMultipleCurrencies() && u.a.isConvertCurrenciesOnFrontEnd()) for (var e = 0; e < t.values.length; e++) {
            var n = !1, i = !1;
            t.values[e].hasOwnProperty("to") && (n = !0, t.values[e].to = u.a.convertPriceBasedOnActiveCurrency(t.values[e].to)), t.values[e].hasOwnProperty("from") && (i = !0, t.values[e].from = u.a.convertPriceBasedOnActiveCurrency(t.values[e].from)), t.values[e].key = n && i ? t.values[e].from + "-" + t.values[e].to : n ? "*-" + t.values[e].to : t.values[e].from + "-*"
          }
          return t
        }
      }, {
        key: "setData", value: function (t) {
          t = this.prepareFilterOptionData(t), Wo(Go(e.prototype), "setData", this).call(this, t)
        }
      }]) && qo(n.prototype, i), r && qo(n, r), e
    }(Do);

    function Yo(t) {
      return (Yo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Qo(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Jo(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Zo(t, e) {
      return !e || "object" !== Yo(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Xo(t) {
      return (Xo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ta(t, e) {
      return (ta = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ea = function (t) {
      function e() {
        return Qo(this, e), Zo(this, Xo(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ta(t, e)
      }(e, t), n = e, (i = [{
        key: "getBlockContentTemplate", value: function () {
          return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListBox}}">{{filterItems}}</ul>\n\t\t'.trim()
        }
      }, {
        key: "calculateBoxItemSize", value: function () {
          if (!o.a.getSettingValue("general.enableFilterOptionBoxStyle")) return "";
          var t = this.$element ? this.$element.width() : 0;
          if (!t || t < 0) return "100%";
          if (!this.boxItemSize) {
            var e = 4, n = o.a.getSettingValue("general.filterOptionBoxCharWidth") || 14;
            this.filterItems.forEach((function (t) {
              var i = t.label.length * n;
              e = Math.max(i, e)
            }));
            var i = 100 / (Math.floor(this.$element.width() / (e + 8)) || 1) - 2;
            i < 1 && (i = 100), this.boxItemSize = i + "%"
          }
          return this.boxItemSize
        }
      }]) && Jo(n.prototype, i), r && Jo(n, r), e
    }(Do);

    function na(t) {
      return (na = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ia(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function ra(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function oa(t, e) {
      return !e || "object" !== na(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function aa(t) {
      return (aa = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function la(t, e) {
      return (la = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var sa = function (t) {
      function e() {
        return ia(this, e), oa(this, aa(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && la(t, e)
      }(e, t), n = e, (i = [{
        key: "getBlockContentTemplate", value: function () {
          return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSwatch}} {{swatchStyle}}">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t'.trim()
        }
      }, {
        key: "compileBlockContentTemplate", value: function () {
          return this.swatchStyle = this.buildSwatchStyle(), this.getBlockContentTemplate().replace(/{{swatchStyle}}/g, this.swatchStyle)
        }
      }, {
        key: "buildSwatchStyle", value: function () {
          var t = this.swatchStyle;
          return t || (this.filterTreeType == pi.FilterTreeType.HORIZONTAL || u.a.isMobile() && "style2" == o.a.getSettingValue("general.filterTreeMobileStyle") ? "circle-list" : "circle-grid")
        }
      }]) && ra(n.prototype, i), r && ra(n, r), e
    }(Do);

    function ca(t) {
      return (ca = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ua(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function pa(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function fa(t, e) {
      return !e || "object" !== ca(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function ha(t) {
      return (ha = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ya(t, e) {
      return (ya = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var da = function (t) {
      function e() {
        return ua(this, e), fa(this, ha(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ya(t, e)
      }(e, t), n = e, (i = [{
        key: "getBlockContentTemplate", value: function () {
          return this.selectType == Wn.a.SelectType.MULTIPLE && this.showExactRating ? '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListRating}} {{class.filterOptionItemListMultipleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'.trim() : '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListRating}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'.trim()
        }
      }]) && pa(n.prototype, i), r && pa(n, r), e
    }(Do);

    function ga(t) {
      return (ga = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ma(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function ba(t, e) {
      return !e || "object" !== ga(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function va(t) {
      return (va = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Sa(t, e) {
      return (Sa = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Oa = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = ba(this, va(e).call(this))).filterTreeType = t, n.$element = null, n
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Sa(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          this.clearButton = new mi(this.filterTreeType, mi.ClearType.CLEAR_SINGLE_VALUE), this.addComponent(this.clearButton)
        }
      }, {
        key: "getTemplate", value: function () {
          switch (this.filterTreeType) {
            case pi.FilterTreeType.VERTICAL:
              return '\n\t\t\t\t\t<div class="refine-by-item {{class.filterOptionLabel}}">\t\t\t\t\t\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            case pi.FilterTreeType.HORIZONTAL:
              return '\n\t\t\t\t\t<div class="refine-by-item">\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            default:
              throw Error("Wrong filterTreeType")
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().trim().replace(/{{class.filterOptionLabel}}/g, N.a.filterOptionLabel).replace(/{{type}}/g, this.type ? this.type + ": " : "").replace(/{{label}}/g, this.label).replace(/{{clearButton}}/g, "")
        }
      }, {
        key: "render", value: function () {
          this.$element = r()(this.compileTemplate()), this.$element.append(this.clearButton.$element)
        }
      }, {
        key: "setData", value: function (t, e, n) {
          this.filterOption = t, this.filterItem = e, this.filterOptionId = t.filterOptionId, this.filterItemId = n, this.type = t.label, this.label = this.buildLabel()
        }
      }, {
        key: "buildLabel", value: function () {
          var t = this.filterItemId;
          if (this.filterOption) switch (this.filterOption.displayType) {
            case Wn.a.DisplayType.RANGE:
              t = this.buildLabelRange();
              break;
            case Wn.a.DisplayType.RATING:
              t = this.buildLabelRating();
              break;
            case Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
            case Wn.a.DisplayType.MULTI_LEVEL_TAG:
              t = this.buildLabelMultiLevel();
              break;
            default:
              if (this.filterItem) t = this.filterItem.label; else {
                var e = new Ii(this.filterOption.filterTreeType);
                e.filterOption = this.filterOption, e.label = this.filterItemId, t = e.buildLabel()
              }
          }
          return t
        }
      }, {
        key: "buildLabelRating", value: function () {
          var t = "";
          if (this.filterItem) {
            var e = this.filterItem.from;
            t = Math.ceil(e) + " ", 1 == Math.ceil(e) ? t += a.a.ratingStar : t += a.a.ratingStars, this.filterOption.showExactRating || (t += " " + a.a.ratingUp)
          }
          return t
        }
      }, {
        key: "buildLabelRange", value: function () {
          var t = "";
          if (this.filterOption) if (this.filterOption.isNumberRangeSlider) (e = this.filterItemId.split(":")) && 2 == e.length && (t = (n = this.filterOption.buildLabel(e[0])) == (i = this.filterOption.buildLabel(e[1])) ? n : n + " - " + i); else {
            var e = this.filterItemId, n = "", i = "";
            if (this.filterOption.currentMax - 1 > 0 && this.filterOption.currentMax - 1 < this.filterOption.valuesData.length ? (n = this.filterOption.valuesData[this.filterOption.currentMin].key, i = this.filterOption.valuesData[this.filterOption.currentMax - 1].key) : Array.isArray(e) && e.length > 0 && (n = e[0], i = e[e.length - 1]), this.filterOption.prefix) {
              var r = this.filterOption.prefix.replace(/\\/g, "");
              n = n.replace(r, "").trim(), i = i.replace(r, "").trim()
            }
            t = n == i ? n : n + " - " + i
          }
          return t
        }
      }, {
        key: "buildLabelMultiLevel", value: function () {
          var t = "";
          if (this.filterOption && this.filterItem && (this.filterOption.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS || this.filterOption.displayType == Wn.a.DisplayType.MULTI_LEVEL_TAG)) switch (this.filterItem.level) {
            case 1:
              this.type = this.filterOption.label, t = this.filterItem.buildLabel();
              break;
            case 2:
            case 3:
              this.filterOptionId = this.filterOptionId.replace(Globals.prefix + "_c_", Globals.prefix + "_ct_"), this.type = this.filterOption.label, t = this.filterItem.buildLabel()
          }
          return t || this.filterItemId
        }
      }]) && ma(n.prototype, i), o && ma(n, o), e
    }(d.a);

    function Ta(t) {
      return (Ta = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Pa(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function wa(t, e) {
      return !e || "object" !== Ta(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function _a(t) {
      return (_a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ca(t, e) {
      return (Ca = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ka = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = wa(this, _a(e).call(this))).refineByItems = [], n.clearAllButton = null, n.filterTreeType = t, n.$element = null, n
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ca(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          Settings.getSettingValue("general.separateRefineByFromFilter") && (r()(s.a.filterRefineByHorizontal).length > 0 ? this.filterTreeType = pi.FilterTreeType.HORIZONTAL : r()(s.a.filterRefineByVertical).length > 0 && (this.filterTreeType = pi.FilterTreeType.VERTICAL)), this.clearAllButton = new mi(this.filterTreeType, mi.ClearType.CLEAR_ALL), this.addComponent(this.clearAllButton)
        }
      }, {
        key: "getTemplate", value: function () {
          switch (this.filterTreeType) {
            case pi.FilterTreeType.VERTICAL:
              return '\n\t\t\t\t\t<div class="{{class.filterRefineBy}}">\n\t\t\t\t\t\t<div class="{{class.filterOptionTitle}}">\n\t\t\t\t\t\t\t<div class="{{class.filterOptionTitle}}-heading" role="heading" aria-level="2"><span>{{label}}</span></div>\n\t\t\t\t\t\t\t{{clearAllButton}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="{{class.filterSelectedItems}}">{{refineByItems}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            case pi.FilterTreeType.HORIZONTAL:
              return '\n\t\t\t\t\t<div class="boost-pfs-filter-pc {{class.filterRefineBy}}">\n\t\t\t\t\t\t<span>{{label}}</span>\n\t\t\t\t\t\t<div class="{{class.filterSelectedItems}}">{{refineByItems}}</div>\n\t\t\t\t\t\t{{clearAllButton}}\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            default:
              throw Error("Wrong filterTreeType")
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{class.filterRefineBy}}/g, N.a.filterRefineBy).replace(/{{class.filterOptionTitle}}/g, N.a.filterOptionTitle).replace(/{{class.filterSelectedItems}}/g, N.a.filterSelectedItems).replace(/{{label}}/g, a.a.refine).replace(/{{refineByItems}}/g, "").replace(/{{clearAllButton}}/g, "")
        }
      }, {
        key: "render", value: function () {
          var t = this;
          this.refineByItems && this.refineByItems.length > 0 ? (this.$element = r()(this.compileTemplate()), this.$refineByItemsContainer = this.$element.find("." + N.a.filterSelectedItems), this.refineByItems.forEach((function (e) {
            t.$refineByItemsContainer.append(e.$element)
          })), this.$clearAllButtonContainer = this.filterTreeType == pi.FilterTreeType.VERTICAL ? this.$element.find("." + N.a.filterOptionTitle) : this.$element, this.$clearAllButtonContainer.append(this.clearAllButton.$element)) : this.$element = null
        }
      }, {
        key: "setData", value: function () {
          var t = this;
          this.refineByItems = [];
          var e = Object.keys(l.a.queryParams).filter((function (t) {
            return t.startsWith(l.a.prefix)
          }));
          e && e.length > 0 && e.forEach((function (e) {
            var n = t.parent.filterOptions.get(e), i = e.startsWith(l.a.prefix + "_ct_");
            i && (n = t.parent.filterOptions.get(e.replace(l.a.prefix + "_ct_", l.a.prefix + "_c_")));
            var r = l.a.queryParams[e], o = e.startsWith(l.a.prefix + "_c_");
            if (o && !Array.isArray(r) && (r = [r]), n && r) {
              var a = n.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS || n.displayType == Wn.a.DisplayType.MULTI_LEVEL_TAG;
              if (n.displayType == Wn.a.DisplayType.RANGE) {
                var s = new Oa(t.filterTreeType), c = "";
                c = n.isNumberRangeSlider ? r[0] : r, s.setData(n, null, c), t.refineByItems.push(s), t.addComponent(s)
              } else if (a) {
                var u = n.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS && Settings.getSettingValue("general.multiLevelCollectionSelectType") == Wn.a.SelectType.SINGLE || n.displayType == Wn.a.DisplayType.MULTI_LEVEL_TAG && n.selectType == Wn.a.SelectType.SINGLE;
                Object.values(r).forEach((function (e) {
                  var r = e;
                  i && (r = l.a.collectionId + ":" + e);
                  var a = n.allNestedFilterItems.get(r);
                  if (!(u && o && a && a.isSelectedChild)) {
                    var s = new Oa(t.filterTreeType);
                    s.setData(n, a, e), t.refineByItems.push(s), t.addComponent(s)
                  }
                }))
              } else Object.values(r).forEach((function (e) {
                var i = n.filterItems.get(e), r = new Oa(t.filterTreeType);
                r.setData(n, i, e), t.refineByItems.push(r), t.addComponent(r)
              }))
            }
          }))
        }
      }]) && Pa(n.prototype, i), o && Pa(n, o), e
    }(d.a);

    function Ea(t) {
      return (Ea = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Ia(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function La(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Aa(t, e) {
      return !e || "object" !== Ea(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Ra(t) {
      return (Ra = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Fa(t, e) {
      return (Fa = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var xa = function (t) {
      function e() {
        return Ia(this, e), Aa(this, Ra(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Fa(t, e)
      }(e, t), n = e, (i = [{
        key: "getBlockContentTemplate", value: function () {
          return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSingleList}}">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t'.trim()
        }
      }]) && La(n.prototype, i), r && La(n, r), e
    }(Do), Ba = (n(93), n(124)), ja = n.n(Ba);

    function $a(t) {
      return ($a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Va(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Ma(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Da(t, e) {
      return !e || "object" !== $a(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Na(t, e, n) {
      return (Na = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ua(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function Ua(t) {
      return (Ua = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function qa(t, e) {
      return (qa = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ha = function (t) {
      function e() {
        return Va(this, e), Da(this, Ua(e).apply(this, arguments))
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && qa(t, e)
      }(e, t), n = e, (i = [{
        key: "init", value: function () {
          Na(Ua(e.prototype), "init", this).call(this), this.requestInstantly = this.filterTreeType == pi.FilterTreeType.VERTICAL || o.a.getSettingValue("general.requestInstantly")
        }
      }, {
        key: "getBlockContentTemplate", value: function () {
          const elementId = 'legend-price-'+ Date.now() + Math.random()

          return this.hideInputElement ? `
              <div>
                  <div class="boost-pfs-filter-option-range-slider"></div>
              </div>
          `.trim() : this.style === "style3" ? `
              <div class="boost-pfs-filter-block-content-inner">
                 <div class="boost-pfs-filter-option-range-slider"></div>
                   <fieldset aria-labelledby="${elementId}">
                   <legend id="${elementId}" class="visually-hidden">Choose Price</legend>
                     <div class="boost-pfs-filter-option-range-amount">
                        <input class="boost-pfs-filter-option-range-amount-min" type="text" role="textbox" readonly />
                        <input class="boost-pfs-filter-option-range-amount-max" type="text" role="textbox" readonly />
                     </div>
                   </fieldset>
              </div>
          `.trim() : `
              <div class="boost-pfs-filter-block-content-inner">
                  <div class="boost-pfs-filter-option-range-amount">
                      <fieldset aria-labelledby="${elementId}">
                          <legend id="${elementId}" class="visually-hidden">Choose Price</legend>
                          <input class="boost-pfs-filter-option-range-amount-min" role="textbox" type="text" />
                          <div class="boost-pfs-filter-option-range-amount-split"> - </div>
                          <input class="boost-pfs-filter-option-range-amount-max" role="textbox" type="text" />
                      </fieldset>
                  </div>
                  <div class="boost-pfs-filter-option-range-slider"></div>
              </div>
          `.trim();
        }
      }, {
        key: "isRender", value: function () {
          if (this.status == Wn.a.Status.ACTIVE) {
            var t = o.a.getSettingValue("general.oneValueRangeSlider");
            return !(this.isNumberRangeSlider ? this.rangeMax == this.rangeMin : this.valuesData.length <= 1) || t
          }
          return !1
        }
      }, {
        key: "render", value: function () {
          Na(Ua(e.prototype), "render", this).call(this), this.$element.addClass("boost-pfs-filter-option-range-" + this.style), this.renderRangeValue(), this.renderInputField()
        }
      }, {
        key: "renderRangeValue", value: function () {
          this.setCurrentValues(), this.noUiSlider && this.noUiSlider.set([this.currentMin, this.currentMax])
        }
      }, {
        key: "renderInputField", value: function () {
          if (this.$element && !this.hideInputElement) {
            this.$minInputElement && this.$maxInputElement || (this.$minInputElement = this.$element.find(".boost-pfs-filter-option-range-amount-min"), this.$maxInputElement = this.$element.find(".boost-pfs-filter-option-range-amount-max"));
            var t = this.buildNumberLabel(this.currentMin), e = this.buildNumberLabel(this.currentMax);
            this.$minInputElement.val(t), this.$maxInputElement.val(e)
          }
        }
      }, {
        key: "renderTextLabelPosition", value: function () {
          var t = this.$element.find(".noUi-value"), e = 100 / (2 * this.valuesData.length);
          t.each((function (t, n) {
            var i = n.style.left;
            if ("string" == typeof i) {
              var r = parseFloat(i.replace("%", "")) + e;
              n.style.left = r + "%"
            }
          }))
        }
      }, {
        key: "bindEvents", value: function () {
          Na(Ua(e.prototype), "bindEvents", this).call(this), this.$element && (this.$rangeSliderElement = this.$element.find(".boost-pfs-filter-option-range-slider"), this.noUiSlider = ja.a.create(this.$rangeSliderElement[0], this.getSliderConfig()), this.noUiSlider.on("slide", this.onDrag.bind(this)), this.noUiSlider.on("change", this.onFinishDragging.bind(this)), this.hideInputElement || (this.$minInputElement.on("change", this.onChangeInput.bind(this, "min")), this.$maxInputElement.on("change", this.onChangeInput.bind(this, "max"))), this.isNumberRangeSlider || this.renderTextLabelPosition(), this.$element.find(".boost-pfs-filter-option-range-amount-min, .noUi-handle-lower").attr("aria-label", a.a.ada.minValue), this.$element.find(".boost-pfs-filter-option-range-amount-max, .noUi-handle-upper").attr("aria-label", a.a.ada.maxValue))
        }
      }, {
        key: "onChangeInput", value: function (t) {
          var e = "min" == t ? this.$minInputElement.val().trim() : this.currentMin.toString(),
            n = "max" == t ? this.$maxInputElement.val().trim() : this.currentMax.toString();
          this.thousandSeparator && (e = e.split(this.thousandSeparator).join(""), n = n.split(this.thousandSeparator).join("")), this.decimalSeparator && "." != this.decimalSeparator && (e = e.replace(this.decimalSeparator, "."), n = n.replace(this.decimalSeparator, ".")), !this.isNumberRangeSlider || null == e || null == n || "" == e || "" == n || isNaN(e) || isNaN(n) || (e = parseFloat(e)) > (n = parseFloat(n)) ? this.renderInputField() : (this.currentMin = Math.max(e, this.rangeMin), this.currentMax = Math.min(n, this.rangeMax), this.noUiSlider && this.noUiSlider.set([this.currentMin, this.currentMax]), this.onFinishDragging())
        }
      }, {
        key: "onDrag", value: function () {
          var t = this.noUiSlider.get();
          if (null != t) if (Array.isArray(t) && 2 == t.length) {
            if (this.isNumberRangeSlider) this.currentMin = t[0], this.currentMax = t[1]; else {
              var e = Math.round(t[0]), n = Math.round(t[1]);
              n <= e ? this.noUiSlider.set([this.currentMin, this.currentMax]) : (this.currentMin = e, this.currentMax = n)
            }
            this.renderInputField()
          } else "string" != typeof t && "number" != typeof t || (this.currentMin = t, this.currentMax = t)
        }
      }, {
        key: "onFinishDragging", value: function () {
          var t = this;
          if (this.isNumberRangeSlider) this.filterItems.forEach((function (e) {
            e.setValue(t.currentMin, t.currentMax)
          })); else {
            var e = [];
            if (this.currentMin != this.rangeMin || this.currentMax != this.rangeMax) for (var n = this.currentMin; n <= this.currentMax - 1; n++) e.push(this.valuesData[n].key);
            this.filterItems.forEach((function (t) {
              t.isSelected = e.includes(t.value)
            }))
          }
          if (this.requestInstantly) {
            var i = [];
            this.filterItems.forEach((function (t) {
              t.isSelected && i.push(t.value)
            })), K.default.setParam(this.filterOptionId, i), K.default.setParam("page", 1);
            var r = {filterOptionId: this.filterOptionId, filterOptionValue: i};
            K.default.applyFilter("filter", r)
          }
        }
      }, {
        key: "getSliderConfig", value: function () {
          var t = {
            start: this.isSingleHandle ? [this.currentMin] : [this.currentMin, this.currentMax],
            step: this.sliderStep,
            connect: !0,
            snap: !this.isNumberRangeSlider,
            animate: !0,
            animationDuration: 300,
            range: this.getSliderRange(),
            pips: this.getSliderPipsConfig()
          };
          if (this.isShowTooltip) {
            var e = {to: this.buildLabel.bind(this)};
            t.tooltips = [e, e]
          }
          return t
        }
      }, {
        key: "getSliderRange", value: function () {
          var t = {min: this.rangeMin, max: this.rangeMax};
          if (!this.isNumberRangeSlider) for (var e = 1; e < this.valuesData.length; e++) t[e * (100 / this.valuesData.length) + "%"] = e;
          return t
        }
      }, {
        key: "getSliderPipsConfig", value: function () {
          var t = this.isNumberRangeSlider ? this.sliderRange + 1 : this.valuesData.length + 1;
          return t < 2 && (t = 2), {
            mode: "count", values: t, filter: function (t, e) {
              return 1 == e ? e : -1
            }, format: {to: this.buildLabel.bind(this)}
          }
        }
      }, {
        key: "buildLabel", value: function (t) {
          var e = "";
          return this.isNumberRangeSlider ? e = this.isPriceFilter ? this.buildMoneyLabel(t) : this.buildNumberLabel(t, !0) : Number.isInteger(t) && t >= 0 && t < this.valuesData.length && (e = this.valuesData[t].key, e = this.buildTextLabel(e)), e
        }
      }, {
        key: "buildMoneyLabel", value: function (t) {
          var e = o.a.getSettingValue("general.enable3rdCurrencySupport"), n = this.buildNumberLabel(t, !0),
            i = this.moneyFormat.replace(/{{\s*(\w+)\s*}}/, n);
          return i = i.replace(/[A-Z][A-Z][A-Z]/, ""), e && (i = u.a.moneyWrapper(i)), i
        }
      }, {
        key: "buildNumberLabel", value: function (t, e) {
          if (this.shortenPipsRange && e) {
            var n = o.a.getSettingValue("general.formatPipsRange");
            if (Array.isArray(n) && n.length > 0) for (var i = 0, r = 0, a = n.length - 1; a >= 0; a--) {
              var l = n[a];
              if (t >= l.node) return i = Math.floor(t / l.node).toString(), (r = (r = Math.round(t % l.node)) > 0 ? r.toString() : "").length > l.fix && (r = r.substring(0, l.fix)), l.suffix ? i + this.decimalSeparator + r + l.symbol : i + l.symbol + r
            }
          }
          var s = !o.a.getSettingValue("general.removePriceDecimal");
          return u.a.formatNumberWithSeparator(t, this.precision, this.thousandSeparator, this.decimalSeparator, s)
        }
      }, {
        key: "buildTextLabel", value: function (t) {
          if (this.prefix) {
            var e = this.prefix.replace(/\\/g, "");
            t = t.replace(e, "").trim()
          }
          return t
        }
      }, {
        key: "setMoneyFormat", value: function () {
          if (this.isPriceFilter) {
            var t = o.a.getSettingValue("general.rangeSliderMoneyFormat");
            this.moneyFormat = t || "{{amount}}"
          }
        }
      }, {
        key: "setCurrentValues", value: function () {
          var t = this, e = this.rangeMin, n = this.rangeMax, i = null;
          if (l.a.queryParams.hasOwnProperty(this.filterOptionId)) if (this.isNumberRangeSlider) (i = l.a.queryParams[this.filterOptionId][0].split(":")) && 2 == i.length && (e = i[0], n = i[1]); else if (i = l.a.queryParams[this.filterOptionId], Array.isArray(i)) {
            var r = this.valuesData.map((function (t) {
              return t.key
            }));
            e = this.rangeMax, n = this.rangeMin, i.forEach((function (i) {
              var o = r.indexOf(i);
              o >= t.rangeMin && o <= t.rangeMax && (o < e && (e = o), o + 1 > n && (n = o + 1))
            }))
          }
          this.currentMin = e, this.currentMax = n
        }
      }, {
        key: "setDisplayStyle", value: function () {
          var t = o.a.getSettingValue("general.rangeSlidersStyle3"),
            e = o.a.getSettingValue("general.rangeSlidersSingleHandle");
          this.isNumberRangeSlider ? Array.isArray(e) && e.includes(this.filterOptionId) ? (this.style = "style4", this.hideInputElement = !0, this.isSingleHandle = !0, this.currentMax = this.currentMin) : Array.isArray(t) && t.includes(this.filterOptionId) ? (this.style = "style3", this.hideInputElement = !1) : this.hideInputElement ? (this.style = "style2", this.isShowTooltip = !0) : this.style = "style1" : (this.style = "style5", this.hideInputElement = !0), o.a.getSettingValue("general.enable3rdCurrencySupport") && ["style1", "style3"].indexOf(this.style) > -1 && (this.style = "style2", this.hideInputElement = !0, this.isShowTooltip = !0)
        }
      }, {
        key: "prepareFilterOptionData", value: function (t) {
          return t.values.max && t.values.min && (t.values.max = Math.ceil(100 * t.values.max) / 100, t.values.min = Math.floor(100 * t.values.min) / 100), "price" != t.filterType && "variants_price" != t.filterType || !t.values || u.a.isEnableShopifyMultipleCurrencies() && u.a.isConvertCurrenciesOnFrontEnd() && (t.values.min = u.a.convertPriceBasedOnActiveCurrency(t.values.min), t.values.max = u.a.convertPriceBasedOnActiveCurrency(t.values.max)), t
        }
      }, {
        key: "setData", value: function (t) {
          if (t = this.prepareFilterOptionData(t), Na(Ua(e.prototype), "setData", this).call(this, t), ("price" == this.filterType || "variants_price" == this.filterType) && !o.a.getSettingValue("general.enable3rdCurrencySupport")) {
            var n = o.a.getSettingValue("general.rangeSliderMoneyFormat");
            n || (n = l.a.moneyFormat);
            var i = n.replace(/<.*?>/g, "").replace(/{{.*?}}/, "");
            1 == i.length && (this.label += " (" + i + ")")
          }
          if (this.isNumberRangeSlider = !Array.isArray(t.values), this.isPriceFilter = t.filterType == Wn.a.FilterType.PRICE || t.filterType == Wn.a.FilterType.VARIANTS_PRICE, this.isPriceFilter && this.setMoneyFormat(), this.isSortValues() && this.sortValues(t.values), this.valuesData = JSON.parse(JSON.stringify(t.values)), this.isNumberRangeSlider && null != t.values.min && null != t.values.max && t.values.min != t.values.max) {
            if (this.hideInputElement = t.hideTextBoxes, this.sliderStep = parseFloat(t.sliderStep), (isNaN(this.sliderStep) || this.sliderStep > t.values.max) && (this.sliderStep = 1), this.sliderRange = parseFloat(t.sliderRange), isNaN(this.sliderRange) && (this.sliderRange = 4), t.values.max - t.values.min < 2 * this.sliderStep && (this.sliderRange = 1), this.precision = 0, Math.floor(this.sliderStep) != this.sliderStep) {
              var r = this.sliderStep.toString().split(".");
              r.length > 1 && (this.precision = r[1].length)
            }
            this.thousandSeparator = t.sliderDelimiter ? t.sliderDelimiter : "", "." == this.thousandSeparator ? this.decimalSeparator = "," : this.decimalSeparator = ".", this.rangeMin = Math.round(100 * parseFloat(t.values.min)) / 100, this.rangeMax = Math.round(100 * parseFloat(t.values.max)) / 100, this.setCurrentValues(), this.setDisplayStyle()
          } else Array.isArray(t.values) && t.values.length > 1 ? (this.hideInputElement = !0, this.sliderStep = 1, this.rangeMin = 0, this.rangeMax = this.valuesData.length, this.setCurrentValues(), this.setDisplayStyle()) : this.status = Wn.a.Status.DISABLED
        }
      }]) && Ma(n.prototype, i), r && Ma(n, r), e
    }(Do);

    function Wa(t) {
      return (Wa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Ga(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function za(t, e) {
      return !e || "object" !== Wa(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Ka(t) {
      return (Ka = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ya(t, e) {
      return (Ya = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Qa = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = za(this, Ka(e).call(this, t))).allNestedFilterItems = new Map, n
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ya(t, e)
      }(e, t), n = e, (i = [{
        key: "getBlockContentTemplate", value: function () {
          return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptiontemListMultiLevelCollections}} {{class.filterOptionItemListSingleList}} boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-first-level-list">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t'.trim()
        }
      }]) && Ga(n.prototype, i), r && Ga(n, r), e
    }(Do);

    function Ja(t) {
      return (Ja = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Za(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Xa(t, e) {
      return !e || "object" !== Ja(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function tl(t) {
      return (tl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function el(t, e) {
      return (el = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var nl = function (t) {
      function e(t) {
        var n;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (n = Xa(this, tl(e).call(this, t))).allNestedFilterItems = new Map, n
      }

      var n, i, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && el(t, e)
      }(e, t), n = e, (i = [{
        key: "getBlockContentTemplate", value: function () {
          return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptiontemListMultiLevelCollections}} {{displayTypeClass}} boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-first-level-list">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t'.trim()
        }
      }, {
        key: "compileBlockContentTemplate", value: function () {
          var t = this.getDisplayTypeClass();
          return this.getBlockContentTemplate().replace(/{{displayTypeClass}}/g, t)
        }
      }, {
        key: "getDisplayTypeClass", value: function () {
          var t = "";
          switch (this.displayTypeItem) {
            case Wn.a.DisplayType.LIST:
              t = this.selectType == Wn.a.SelectType.SINGLE ? N.a.filterOptionItemListSingleList : N.a.filterOptionItemListMultipleList;
              break;
            case Wn.a.DisplayType.BOX:
              t = N.a.filterOptionItemListBox;
              break;
            case Wn.a.DisplayType.SWATCH:
              t = N.a.filterOptionItemListSwatch;
              var e = o.a.getSettingValue("general.swatchStyle");
              t += " " + (e = e ? e.replace("grid", "list") : "circle-list")
          }
          return t
        }
      }]) && Za(n.prototype, i), r && Za(n, r), e
    }(Do);

    function il(t) {
      return (il = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function rl(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function ol(t, e) {
      return !e || "object" !== il(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function al(t) {
      return (al = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function ll(t, e) {
      return (ll = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var sl = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = ol(this, al(e).call(this))).id = t, i.idSelector = "#" + i.id, i.filterTreeType = n, i.isMobileOnly = !1, i.isDesktopOnly = !1, i.isRenderOnDOM = !0, i.collectionId = l.a.collectionId, i.clickedFilterOption = null, i.refineBy = null, i.filterOptions = new Map, i.$element = null, i.selector = {
          refineByWrapper: "." + N.a.filterRefineByWrapper,
          filterOptionsWrapper: "." + N.a.filterOptionsWrapper,
          clearAllButton: ".boost-pfs-filter-mobile-toolbar-bottom ." + N.a.clearAllButton,
          clearAllButtonContainer: ".boost-pfs-filter-mobile-toolbar-bottom",
          applyAllButton: ".boost-pfs-filter-mobile-toolbar-bottom ." + N.a.applyAllFilterOptionButton,
          applyAllButtonContainer: ".boost-pfs-filter-mobile-footer",
          closeFilter: "." + N.a.closeFilterButton + ",." + N.a.showResultFilterButton,
          filterHeader: ".boost-pfs-filter-mobile-toolbar",
          filterHeaderTop: ".boost-pfs-filter-mobile-toolbar .boost-pfs-filter-mobile-toolbar-top",
          filterHeaderBottom: ".boost-pfs-filter-mobile-toolbar .boost-pfs-filter-mobile-toolbar-bottom",
          filterFooter: ".boost-pfs-filter-mobile-footer"
        }, i
      }

      var n, i, c;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ll(t, e)
      }(e, t), n = e, (i = [{
        key: "getTemplate", value: function () {
          switch (this.filterTreeType) {
            case"vertical":
              return '\n\t\t\t\t\t<div class="boost-pfs-filter-tree-content" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            case"horizontal":
              return "top" == o.a.getSettingValue("general.refineByHorizontalPosition") ? '\n\t\t\t\t\t\t<div class="boost-pfs-filter-tree-content" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t'.trim() : '\n\t\t\t\t\t\t<div class="boost-pfs-filter-tree-content" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t'.trim();
            default:
              throw Error("filterTreeType is wrong")
          }
        }
      }, {
        key: "getHeaderTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-mobile-toolbar">\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-top">\n\t\t\t\t\t<a href="javascript:;" class="{{class.closeFilterButton}}"><span>{{label.close}}</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-header">{{label.refineMobile}}</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-bottom">\n\t\t\t\t\t{{clearButton}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "getFooterTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-mobile-footer">\n\t\t\t\t<button class="{{class.showResultFilterButton}}" type="button">{{label.showResult}}</button>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          return this.getTemplate().replace(/{{header}}/g, this.getHeaderTemplate()).replace(/{{footer}}/g, this.getFooterTemplate()).replace(/{{label.productFilter}}/g, a.a.productFilter).replace(/{{label.showResult}}/g, a.a.showResult).replace(/{{label.refineMobile}}/g, a.a.refineMobile).replace(/{{label.apply}}/g, a.a.apply).replace(/{{label.close}}/g, a.a.close).replace(/{{label.back}}/g, a.a.back).replace(/{{class.filterOptionsWrapper}}/g, N.a.filterOptionsWrapper).replace(/{{class.filterRefineByWrapper}}/g, N.a.filterRefineByWrapper).replace(/{{class.closeFilterButton}}/g, N.a.closeFilterButton).replace(/{{class.showResultFilterButton}}/g, N.a.showResultFilterButton).replace(/{{refineBy}}/g, "").replace(/{{clearButton}}/g, "").replace(/{{applyButton}}/g, "").replace(/{{filterOptions}}/g, "")
        }
      }, {
        key: "init", value: function () {
          var t = r()(this.idSelector);
          if (1 == t.length) if (this.isMobileOnly = t[0].hasAttribute("data-is-mobile"), this.isDesktopOnly = t[0].hasAttribute("data-is-desktop"), this.isDesktopOnly && this.isMobileOnly || !this.isMobileOnly && !this.isDesktopOnly) this.isDesktopOnly = !1, this.isMobileOnly = !1; else {
            var e = u.a.isMobile();
            this.isRenderOnDOM = e && this.isMobileOnly || !e && this.isDesktopOnly
          }
          this.clearAllButton = new mi(this.filterTreeType, mi.ClearType.CLEAR_ALL), this.applyAllButton = new FilterApplyButton(this.filterTreeType, FilterApplyButton.ApplyType.APPLY_ALL)
        }
      }, {
        key: "isRender", value: function () {
          return this.parent.isFetchedFilterData && this.isRenderOnDOM && z.isPanelActive(tt.Enum.PRODUCT)
        }
      }, {
        key: "isLoopThroughChild", value: function () {
          return this.isRenderOnDOM && this.parent.isFetchedFilterData
        }
      }, {
        key: "render", value: function () {
          !0 === l.a.queryParams.build_filter_tree && this.filterOptions && (this.isRenderPartially ? this.renderPartially() : this.renderFull(), this.renderRefineBy(), this.renderExtraElements())
        }
      }, {
        key: "renderFull", value: function () {
          var t = this;
          this.$element = r()(this.compileTemplate()), this.$filterOptionsContainerElement = this.$element.find(this.selector.filterOptionsWrapper), this.filterOptions.forEach((function (e) {
            t.$filterOptionsContainerElement.append(e.$element)
          }))
        }
      }, {
        key: "renderPartially", value: function () {
          var t = this;
          this.$filterOptionsContainerElement = this.$element.find(this.selector.filterOptionsWrapper);
          var e = !1;
          this.clickedFilterOption.$element.siblings().remove(), this.filterOptions.forEach((function (n) {
            if (n.$element) {
              if (n == t.clickedFilterOption) return void (e = !0);
              e ? t.$filterOptionsContainerElement.append(n.$element) : n.$element.insertBefore(t.clickedFilterOption.$element)
            }
          }))
        }
      }, {
        key: "renderRefineBy", value: function () {
          o.a.getSettingValue("general.separateRefineByFromFilter") ? this.renderSeparateRefineBy() : this.renderAttachedRefineBy()
        }
      }, {
        key: "renderAttachedRefineBy", value: function () {
          this.refineBy && this.$element && (this.$refineByElementContainer = this.$element.find(this.selector.refineByWrapper), this.$refineByElementContainer.length > 0 && (this.$refineByElementContainer.first().html("").append(this.refineBy.$element), this.$refineByElement = this.refineBy.$element))
        }
      }, {
        key: "renderSeparateRefineBy", value: function () {
          if (this.refineBy) {
            var t = this.refineBy.filterTreeType == pi.FilterTreeType.VERTICAL ? s.a.filterRefineByVertical : s.a.filterRefineByHorizontal;
            r()(t).length > 0 && r()(t).first().html("").append(this.refineBy.$element)
          }
        }
      }, {
        key: "renderExtraElements", value: function () {
          0 == this.$element.find(this.selector.clearAllButton).length && this.$element.find(this.selector.clearAllButtonContainer).append(this.clearAllButton.$element), 0 == this.$element.find(this.selector.applyAllButton).length && this.$element.find(this.selector.applyAllButtonContainer).append(this.applyAllButton.$element)
        }
      }, {
        key: "bindEvents", value: function () {
          (this.isMobileOnly || this.isDesktopOnly) && (this.resizeTimer = null, r()(window).on("resize", function () {
            this.resizeTimer && clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(this.onScreenResize.bind(this), 500)
          }.bind(this))), this.$element && this.$element.find(this.selector.closeFilter).length > 0 && (this.$element.find(this.selector.closeFilter).off("click"), this.$element.find(this.selector.closeFilter).on("click", this.onCloseFilterTree.bind(this)))
        }
      }, {
        key: "onScreenResize", value: function () {
          var t = u.a.isMobile(), e = t && this.isMobileOnly || !t && this.isDesktopOnly;
          this.isRenderOnDOM != e && (this.isRenderOnDOM = e, this.isRenderOnDOM ? (this.isRenderPartially = !1, this.refresh(), r()(this.idSelector).first().html("").append(this.$element)) : this.$element && (this.$element.detach(), this.$element = null))
        }
      }, {
        key: "onCloseFilterTree", value: function () {
          var t = r()(this.idSelector);
          t && (this.mobileButton.isCollapsed = !0, t.removeClass(N.a.filterTreeMobileOpen), r()("body").removeClass(N.a.filterTreeOpenBody).removeClass("boost-pfs-body-no-scroll"), r()("html").removeClass(N.a.filterTreeOpenBody).removeClass("boost-pfs-body-no-scroll"))
        }
      }, {
        key: "setData", value: function (t) {
          var e = this;
          o.a.getSettingValue("general.filterTreeEnableRenderPartially") && this.collectionId == l.a.collectionId ? this.clickedFilterOption = this.filterOptions.get(this.parent.clickedFilterOptionId) : (this.collectionId = l.a.collectionId, this.clickedFilterOption = null), this.isRenderPartially = !!(this.$element && this.clickedFilterOption && this.clickedFilterOption.$element), this.modifyOptionsData(t.options), this.children = [], this.filterOptions = new Map, t.options.forEach((function (t) {
            if (!(t.status != Wn.a.Status.ACTIVE || Array.isArray(t.values) && 0 == t.values.length && Array.isArray(t.manualValues) && 0 == t.manualValues.length)) {
              var n = null;
              if (e.clickedFilterOption && t.filterOptionId == e.clickedFilterOption.filterOptionId && (n = e.clickedFilterOption), null == n) {
                switch (t.displayType) {
                  case Wn.a.DisplayType.LIST:
                    n = new Ko(e.filterTreeType);
                    break;
                  case Wn.a.DisplayType.BOX:
                    n = new ea(e.filterTreeType);
                    break;
                  case Wn.a.DisplayType.RANGE:
                    n = new Ha(e.filterTreeType);
                    break;
                  case Wn.a.DisplayType.SWATCH:
                    n = new sa(e.filterTreeType);
                    break;
                  case Wn.a.DisplayType.RATING:
                    n = new da(e.filterTreeType);
                    break;
                  case Wn.a.DisplayType.SUB_CATEGORY:
                    n = new xa(e.filterTreeType);
                    break;
                  case Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
                    n = new Qa(e.filterTreeType);
                    break;
                  case Wn.a.DisplayType.MULTI_LEVEL_TAG:
                    n = new nl(e.filterTreeType)
                }
                if (!n) return;
                n.setData(t)
              }
              e.addComponent(n), e.filterOptions.set(t.filterOptionId, n)
            }
          })), o.a.getSettingValue("general.showRefineBy") && (this.refineBy = new ka(this.filterTreeType), this.addComponent(this.refineBy), this.refineBy.setData()), this.addComponent(this.clearAllButton), this.addComponent(this.applyAllButton)
        }
      }, {
        key: "modifyOptionsData", value: function (t) {
          var e = o.a.getSettingValue("general.advancedRangeSliders");
          t.forEach((function (t) {
            if (Array.isArray(e) && e.includes(t.filterOptionId) && t.selectType == Wn.a.SelectType.MULTIPLE && (t.displayType = Wn.a.DisplayType.RANGE), t.filterType == Wn.a.FilterType.MULTI_LEVEL_TAG) {
              switch (t.displayType) {
                case Wn.a.DisplayType.LIST:
                  t.displayTypeItem = Wn.a.DisplayType.LIST;
                  break;
                case Wn.a.DisplayType.BOX:
                  t.displayTypeItem = Wn.a.DisplayType.BOX;
                  break;
                case Wn.a.DisplayType.SWATCH:
                  t.displayTypeItem = Wn.a.DisplayType.SWATCH;
                  break;
                default:
                  return
              }
              t.displayType = Wn.a.DisplayType.MULTI_LEVEL_TAG
            }
            (u.a.isVendorPage() && t.filterType == Wn.a.FilterType.VENDOR || u.a.isTypePage() && t.filterType == Wn.a.FilterType.PRODUCT_TYPE) && (t.status = Wn.a.Status.DISABLED), t.displayType == Wn.a.DisplayType.SUB_CATEGORY && (t.status = Wn.a.Status.DISABLED)
          }))
        }
      }]) && rl(n.prototype, i), c && rl(n, c), e
    }(d.a);

    function cl(t) {
      return (cl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ul(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function pl(t, e) {
      return !e || "object" !== cl(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function fl(t, e, n) {
      return (fl = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = hl(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function hl(t) {
      return (hl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function yl(t, e) {
      return (yl = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var dl = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = pl(this, hl(e).call(this, t, n))).style = "style2", i.selector.clearAllButtonContainer = ".boost-pfs-filter-mobile-toolbar-right", i.selector.backButton = ".boost-pfs-filter-back-btn", i.selector.refineByOnTitle = ".boost-pfs-filter-selected-items-mobile", i.selector.headerTitle = ".boost-pfs-filter-mobile-toolbar-middle", i.style2ActiveFilterOption = null, i
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && yl(t, e)
      }(e, t), n = e, s = [{
        key: "isActive", value: function (t) {
          return t == pi.FilterTreeType.VERTICAL && "style2" == o.a.getSettingValue("general.filterTreeMobileStyle")
        }
      }], (i = [{
        key: "init", value: function () {
          fl(hl(e.prototype), "init", this).call(this), r()(this.idSelector).length > 0 && (r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-style2").addClass("boost-pfs-filter-tree-mobile-sticky"), o.a.getSettingValue("general.filterTreeMobileStyleFullWidth") && r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-full-width-style"))
        }
      }, {
        key: "getHeaderTemplate", value: function () {
          return '\n\t\t\t<div class="boost-pfs-filter-mobile-toolbar">\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-top">\n\t\t\t\t\t<a href="javascript:;" class="{{class.closeFilterButton}}"><span>{{label.close}}</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-items">\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-left">\n\t\t\t\t\t\t<a href="javascript:void(0)" class="boost-pfs-filter-back-btn" aria-label="{{label.back}}"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-middle">{{label.refineMobile}}</div>\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-right">\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "render", value: function () {
          var t = this;
          if (fl(hl(e.prototype), "render", this).call(this), this.$element && u.a.isMobile()) {
            var n = null;
            this.filterOptions.forEach((function (e) {
              t.style2ActiveFilterOption && t.style2ActiveFilterOption.filterOptionId == e.filterOptionId && (n = e)
            })), this.style2ActiveFilterOption = n, this.renderFilterTreeHeader(), this.renderFilterTreeFooter(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear(), this.renderRefineByOnTitle()
          }
        }
      }, {
        key: "bindEvents", value: function () {
          var t = this;
          fl(hl(e.prototype), "bindEvents", this).call(this), this.$element && u.a.isMobile() && (this.$element.find(this.selector.backButton).on("click", this.closeFilterOption.bind(this)), this.filterOptions.forEach((function (e) {
            e.$filterOptionTitleElement && (e.$filterOptionTitleElement.off("click"), e.$filterOptionTitleElement.on("click", t.openFilterOption.bind(t, e)))
          }))), this.mathHeightToolbarHeader()
        }
      }, {
        key: "renderFilterTreeHeader", value: function () {
          this.style2ActiveFilterOption ? (this.$element.find(this.selector.headerTitle).html(this.style2ActiveFilterOption.label), this.$element.find(this.selector.backButton).show()) : (this.$element.find(this.selector.headerTitle).html(a.a.refineMobile), this.$element.find(this.selector.backButton).hide()), this.mathHeightToolbarHeader()
        }
      }, {
        key: "renderFilterTreeFooter", value: function () {
          var t = this.parent && this.parent.data ? " (" + this.parent.data.total_product + ")" : "";
          this.$element.find("." + N.a.showResultFilterButton).html(a.a.showResult + t)
        }
      }, {
        key: "renderFilterOptionCollapse", value: function () {
          var t = this;
          this.filterOptions.forEach((function (e) {
            if (e.$filterOptionTitleElement && e.$filterOptionContentElement && e.collapse) {
              e.$element.removeClass("boost-pfs-filter-option-collapsed");
              var n = e.$element.find(".boost-pfs-filter-option-title"), i = e.$filterOptionContentElement;
              t.style2ActiveFilterOption ? e == t.style2ActiveFilterOption ? (n.hide(), i.show()) : (n.hide(), i.hide()) : (n.show(), i.hide())
            }
          }))
        }
      }, {
        key: "renderFilterOptionClear", value: function () {
          var t = this.clearAllButton.$element, e = this.$element.find(this.selector.clearAllButtonContainer);
          e && (t && (null == this.style2ActiveFilterOption && l.a.hasFilterOptionParam ? e.append(t) : t.detach()), this.filterOptions.forEach((function (t) {
            t.clearButton && t.clearButton.$element && t.clearButton.$element.detach()
          })), this.style2ActiveFilterOption && this.style2ActiveFilterOption.clearButton && this.style2ActiveFilterOption.clearButton.$element && e.append(this.style2ActiveFilterOption.clearButton.$element))
        }
      }, {
        key: "renderRefineByOnTitle", value: function () {
          var t = this;
          this.filterOptions.forEach((function (e) {
            if (e.$element) {
              var n = "";
              if (e.filterOptionId.startsWith(l.a.prefix + "_c_")) {
                var i = e.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS ? e.allNestedFilterItems : e.filterItems;
                if (i && i.size > 0) {
                  var r = "", o = [];
                  i.forEach((function (t) {
                    t.isSelected && (2 == t.level || 3 == t.level ? o.push(t.label) : r = t.label)
                  })), n = r && o.length > 0 ? r + ": " + o.join(", ") : r
                }
              } else if (t.refineBy && t.refineBy.refineByItems) {
                var a = [];
                t.refineBy.refineByItems.forEach((function (t) {
                  if (t.filterOptionId == e.filterOptionId) {
                    var n = t.label;
                    n && a.push(n)
                  }
                })), n = a.join(", ")
              }
              var s = n ? "<span>" + n + "</span>" : "";
              e.$element.find(t.selector.refineByOnTitle).html(s)
            }
          }))
        }
      }, {
        key: "openFilterOption", value: function (t) {
          this.style2ActiveFilterOption = t, this.renderFilterTreeHeader(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear(), this.mathHeightToolbarHeader()
        }
      }, {
        key: "closeFilterOption", value: function () {
          this.style2ActiveFilterOption = null, this.renderFilterTreeHeader(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear()
        }
      }, {
        key: "onClickMobileButton", value: function (t) {
          t && (t.stopImmediatePropagation(), t.stopPropagation()), this.style2ActiveFilterOption = null;
          var e = r()(this.idSelector);
          e && (this.mobileButton.isCollapsed = !this.mobileButton.isCollapsed, this.mobileButton.isCollapsed ? (e.removeClass(N.a.filterTreeMobileOpen), r()("body").removeClass("boost-pfs-body-no-scroll"), r()("html").removeClass("boost-pfs-body-no-scroll")) : (this.closeFilterOption(), e.addClass(N.a.filterTreeMobileOpen), r()("body").addClass("boost-pfs-body-no-scroll"), r()("html").addClass("boost-pfs-body-no-scroll"))), this.mobileButton.afterToggleFilterTree(), this.mathHeightToolbarHeader()
        }
      }, {
        key: "mathHeightToolbarHeader", value: function () {
          var t = r()(".boost-pfs-filter-mobile-toolbar").height();
          this.filterTreeType == pi.FilterTreeType.VERTICAL && u.a.isMobile() && r()(".boost-pfs-filter-options-wrapper").css("top", t + "px")
        }
      }]) && ul(n.prototype, i), s && ul(n, s), e
    }(sl);

    function gl(t) {
      return (gl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function ml(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function bl(t, e) {
      return !e || "object" !== gl(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function vl(t, e, n) {
      return (vl = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Sl(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function Sl(t) {
      return (Sl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ol(t, e) {
      return (Ol = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Tl = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = bl(this, Sl(e).call(this, t, n))).style = "style2-fullwidth", i
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ol(t, e)
      }(e, t), n = e, a = [{
        key: "isActive", value: function (t) {
          return t == pi.FilterTreeType.VERTICAL && "style2-fullwidth" == o.a.getSettingValue("general.filterTreeMobileStyle")
        }
      }], (i = [{
        key: "init", value: function () {
          vl(Sl(e.prototype), "init", this).call(this), r()(this.idSelector).length > 0 && (r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-style2").addClass("boost-pfs-filter-tree-mobile-sticky").addClass("boost-pfs-filter-tree-mobile-full-width-style"), o.a.getSettingValue("general.filterTreeMobileStyleFullWidth") && r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-full-width-style"))
        }
      }]) && ml(n.prototype, i), a && ml(n, a), e
    }(dl);

    function Pl(t) {
      return (Pl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function wl(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function _l(t, e) {
      return !e || "object" !== Pl(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Cl(t, e, n) {
      return (Cl = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = kl(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function kl(t) {
      return (kl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function El(t, e) {
      return (El = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Il = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = _l(this, kl(e).call(this, t, n))).style = "style3", i.selector.refineByOnTitle = ".boost-pfs-filter-selected-items-mobile", i
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && El(t, e)
      }(e, t), n = e, a = [{
        key: "isActive", value: function (t) {
          return t == pi.FilterTreeType.VERTICAL && "style3" == o.a.getSettingValue("general.filterTreeMobileStyle")
        }
      }], (i = [{
        key: "init", value: function () {
          Cl(kl(e.prototype), "init", this).call(this), r()(this.idSelector).length > 0 && (r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-style3").addClass("boost-pfs-filter-tree-mobile-sticky"), o.a.getSettingValue("general.filterTreeMobileStyleFullWidth") && r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-full-width-style"))
        }
      }, {
        key: "render", value: function () {
          var t = this;
          Cl(kl(e.prototype), "render", this).call(this), this.$element && u.a.isMobile() && this.filterOptions.forEach((function (e) {
            if (e.$element && t.refineBy && t.refineBy.refineByItems) {
              var n = [];
              t.refineBy.refineByItems.forEach((function (t) {
                if (t.filterOptionId == e.filterOptionId) {
                  var i = t.buildLabel();
                  i && n.push(i)
                }
              })), e.$element.find(t.selector.refineByOnTitle).html(n.join(", "))
            }
          }))
        }
      }, {
        key: "bindEvents", value: function () {
          Cl(kl(e.prototype), "bindEvents", this).call(this), this.mathHeightToolbarHeader()
        }
      }, {
        key: "renderFilterTreeHeader", value: function () {
          this.mathHeightToolbarHeader()
        }
      }, {
        key: "renderFilterTreeFooter", value: function () {
          var t = this.parent && this.parent.data ? " (" + this.parent.data.total_product + ")" : "";
          this.$element.find("." + N.a.showResultFilterButton).html(Labels.showResult + t)
        }
      }, {
        key: "onClickMobileButton", value: function (t) {
          t && (t.stopImmediatePropagation(), t.stopPropagation());
          var e = r()(this.idSelector);
          e && (this.mobileButton.isCollapsed = !this.mobileButton.isCollapsed, this.mobileButton.isCollapsed ? (e.removeClass(N.a.filterTreeMobileOpen), r()("body").removeClass("boost-pfs-body-no-scroll"), r()("html").removeClass("boost-pfs-body-no-scroll")) : (e.addClass(N.a.filterTreeMobileOpen), r()("body").addClass("boost-pfs-body-no-scroll"), r()("html").addClass("boost-pfs-body-no-scroll"))), this.mobileButton.afterToggleFilterTree(), this.mathHeightToolbarHeader()
        }
      }, {
        key: "mathHeightToolbarHeader", value: function () {
          var t = r()(".boost-pfs-filter-mobile-toolbar").height();
          this.filterTreeType == pi.FilterTreeType.VERTICAL && u.a.isMobile() && r()(".boost-pfs-filter-options-wrapper").css("top", t + "px")
        }
      }]) && wl(n.prototype, i), a && wl(n, a), e
    }(sl);

    function Ll(t) {
      return (Ll = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Al(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Rl(t, e) {
      return !e || "object" !== Ll(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Fl(t, e, n) {
      return (Fl = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = xl(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function xl(t) {
      return (xl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Bl(t, e) {
      return (Bl = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var jl = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = Rl(this, xl(e).call(this, t, n))).style = "style3-fullwidth", i
      }

      var n, i, a;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Bl(t, e)
      }(e, t), n = e, a = [{
        key: "isActive", value: function (t) {
          return t == pi.FilterTreeType.VERTICAL && "style3-fullwidth" == o.a.getSettingValue("general.filterTreeMobileStyle")
        }
      }], (i = [{
        key: "init", value: function () {
          Fl(xl(e.prototype), "init", this).call(this), r()(this.idSelector).length > 0 && (r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-style3").addClass("boost-pfs-filter-tree-mobile-sticky").addClass("boost-pfs-filter-tree-mobile-full-width-style"), o.a.getSettingValue("general.filterTreeMobileStyleFullWidth") && r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-full-width-style"))
        }
      }]) && Al(n.prototype, i), a && Al(n, a), e
    }(Il);

    function $l(t) {
      return ($l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Vl(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function Ml(t, e) {
      return !e || "object" !== $l(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Dl(t, e, n) {
      return (Dl = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var i = function (t, e) {
          for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Nl(t));) ;
          return t
        }(t, e);
        if (i) {
          var r = Object.getOwnPropertyDescriptor(i, e);
          return r.get ? r.get.call(n) : r.value
        }
      })(t, e, n || t)
    }

    function Nl(t) {
      return (Nl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Ul(t, e) {
      return (Ul = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var ql = function (t) {
      function e(t, n) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = Ml(this, Nl(e).call(this, t, n))).style = "style4", i.selector.clearAllButtonContainer = ".boost-pfs-filter-mobile-toolbar-right", i.selector.backButton = ".boost-pfs-filter-back-btn", i.selector.refineByOnTitle = ".boost-pfs-filter-selected-items-mobile", i.selector.headerTitle = ".bc-sf-filter-mobile-toolbar-header", i.selector.headerClose = ".boost-pfs-filter-close", i.style4ActiveFilterOption = null, o.a.activeFilterScrollbarMobile = !1, i
      }

      var n, i, s;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ul(t, e)
      }(e, t), n = e, s = [{
        key: "isActive", value: function (t) {
          return t == pi.FilterTreeType.VERTICAL && "style4" == o.a.getSettingValue("general.filterTreeMobileStyle")
        }
      }], (i = [{
        key: "init", value: function () {
          Dl(Nl(e.prototype), "init", this).call(this), r()(this.idSelector).length > 0 && (r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-style4").addClass("boost-pfs-filter-tree-mobile-sticky"), o.a.getSettingValue("general.filterTreeMobileStyleFullWidth") && r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-full-width-style"))
        }
      }, {
        key: "getHeaderTemplate", value: function () {
          return '\n        <div class="boost-pfs-filter-mobile-toolbar">\n            <div class="bc-sf-filter-mobile-toolbar-header">{{label.refineMobile}}</div>\n            <div class="boost-pfs-filter-mobile-toolbar-items">\n                <div class="boost-pfs-filter-mobile-toolbar-left">\n                    <a href="javascript:;" class="{{class.closeFilterButton}}"><span>{{label.close}}</span></a>\n                    <a href="javascript:;" class="boost-pfs-filter-back-btn">{{label.apply}}</a>\n                </div>\n                <div class="boost-pfs-filter-mobile-toolbar-right">\n                    {{clearButton}}\n                </div>\n            </div>\n        </div>\n    '.trim()
        }
      }, {
        key: "render", value: function () {
          var t = this;
          if (Dl(Nl(e.prototype), "render", this).call(this), this.$element && u.a.isMobile()) {
            var n = null;
            this.filterOptions.forEach((function (e) {
              t.style4ActiveFilterOption && t.style4ActiveFilterOption.filterOptionId == e.filterOptionId && (n = e)
            })), this.style4ActiveFilterOption = n, this.renderFilterTreeHeader(), this.renderFilterTreeFooter(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear(), this.renderRefineByOnTitle()
          }
        }
      }, {
        key: "bindEvents", value: function () {
          var t = this;
          Dl(Nl(e.prototype), "bindEvents", this).call(this), this.$element && u.a.isMobile() && (this.$element.find(this.selector.backButton).on("click", this.closeFilterOption.bind(this)), this.filterOptions.forEach((function (e) {
            e.$filterOptionTitleElement && (e.$filterOptionTitleElement.off("click"), e.$filterOptionTitleElement.on("click", t.openFilterOption.bind(t, e)))
          })))
        }
      }, {
        key: "renderFilterTreeHeader", value: function () {
          this.style4ActiveFilterOption ? (this.$element.find(this.selector.headerTitle).html(this.style4ActiveFilterOption.label), this.$element.find(this.selector.backButton).show(), this.$element.find(this.selector.headerClose).hide()) : (this.$element.find(this.selector.headerTitle).html(a.a.refineMobile), this.$element.find(this.selector.backButton).hide(), this.$element.find(this.selector.headerClose).show())
        }
      }, {
        key: "renderFilterTreeFooter", value: function () {
          var t = this.parent && this.parent.data ? " (" + this.parent.data.total_product + ")" : "";
          this.$element.find("." + N.a.showResultFilterButton).html(a.a.showResult + '<span class="boost-pfs-number-result">' + t + "</span>")
        }
      }, {
        key: "renderFilterOptionCollapse", value: function () {
          var t = this;
          this.filterOptions.forEach((function (e) {
            if (e.$filterOptionTitleElement && e.$filterOptionContentElement && e.collapse) {
              e.$element.removeClass("boost-pfs-filter-option-collapsed");
              var n = e.$element.find(".boost-pfs-filter-option-title"), i = e.$filterOptionContentElement;
              t.style4ActiveFilterOption ? e == t.style4ActiveFilterOption ? (n.hide(), i.show()) : (n.hide(), i.hide()) : (n.show(), i.hide())
            }
          }))
        }
      }, {
        key: "renderFilterOptionClear", value: function () {
          var t = this.clearAllButton.$element, e = this.$element.find(this.selector.clearAllButtonContainer);
          e && (t && (null == this.style4ActiveFilterOption && l.a.hasFilterOptionParam ? e.append(t) : t.detach()), this.filterOptions.forEach((function (t) {
            t.clearButton && t.clearButton.$element && t.clearButton.$element.detach()
          })), this.style4ActiveFilterOption && this.style4ActiveFilterOption.clearButton && this.style4ActiveFilterOption.clearButton.$element && e.append(this.style4ActiveFilterOption.clearButton.$element))
        }
      }, {
        key: "renderRefineByOnTitle", value: function () {
          var t = this;
          this.filterOptions.forEach((function (e) {
            if (e.$element) {
              var n = "";
              if (e.filterOptionId.startsWith(l.a.prefix + "_c_")) {
                var i = e.displayType == Wn.a.DisplayType.MULTI_LEVEL_COLLECTIONS ? e.allNestedFilterItems : e.filterItems;
                if (i && i.size > 0) {
                  var r = "", o = [];
                  i.forEach((function (t) {
                    t.isSelected && (2 == t.level || 3 == t.level ? o.push(t.label) : r = t.label)
                  })), n = r && o.length > 0 ? r + ": " + o.join(", ") : r
                }
              } else if (t.refineBy && t.refineBy.refineByItems) {
                var a = [];
                t.refineBy.refineByItems.forEach((function (t) {
                  if (t.filterOptionId == e.filterOptionId) {
                    var n = t.label;
                    n && a.push(n)
                  }
                })), n = a.join(", ")
              }
              var s = n ? "<span>" + n + "</span>" : "";
              e.$element.find(t.selector.refineByOnTitle).html(s)
            }
          }))
        }
      }, {
        key: "openFilterOption", value: function (t) {
          this.style4ActiveFilterOption = t, this.renderFilterTreeHeader(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear();
          var e = r()(".boost-pfs-filter-mobile-toolbar").height();
          r()(".boost-pfs-filter-options-wrapper").css("top", e + "px")
        }
      }, {
        key: "closeFilterOption", value: function () {
          this.style4ActiveFilterOption = null, this.renderFilterTreeHeader(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear()
        }
      }, {
        key: "onClickMobileButton", value: function (t) {
          t && (t.stopImmediatePropagation(), t.stopPropagation()), this.style4ActiveFilterOption = null;
          var e = r()(this.idSelector);
          e && (this.mobileButton.isCollapsed = !this.mobileButton.isCollapsed, this.mobileButton.isCollapsed ? (e.removeClass(N.a.filterTreeMobileOpen), r()("html").removeClass("boost-pfs-body-no-scroll"), r()("body").removeClass("boost-pfs-body-no-scroll")) : (e.addClass(N.a.filterTreeMobileOpen), r()("html").addClass("boost-pfs-body-no-scroll"), r()("body").addClass("boost-pfs-body-no-scroll"))), this.mobileButton.afterToggleFilterTree()
        }
      }]) && Vl(n.prototype, i), s && Vl(n, s), e
    }(sl), Hl = {
      newFilterTree: function (t, e) {
        return Il.isActive(e) ? new Il(t, e) : dl.isActive(e) ? new dl(t, e) : Tl.isActive(e) ? new Tl(t, e) : jl.isActive(e) ? new jl(t, e) : ql.isActive(e) ? new ql(t, e) : new sl(t, e)
      }
    };

    function Wl(t) {
      return (Wl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Gl(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function zl(t, e) {
      return !e || "object" !== Wl(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function Kl(t) {
      return (Kl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function Yl(t, e) {
      return (Yl = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ql = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = zl(this, Kl(e).call(this))).filterTrees = [], t.filterMobileButton = null, t.filterResult = null, t.filterLoadingIcon = null, t.filterScrollToTop = null, t.data = null, t.fromCache = !1, t.eventType = "", t.error = "", t.isFetchedFilterData = !1, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Yl(t, e)
      }(e, t), n = e, (i = [{
        key: "beforeInit", value: function () {
          u.a.isBadUrl() && (this.isInit = !0, u.a.setWindowLocation(window.location.pathname))
        }
      }, {
        key: "init", value: function () {
          this.initInCollectionSearch(), this.initFilterTrees(), this.initFilterMobileButton(), this.filterResult = new Hn, this.addComponent(this.filterResult), this.filterLoadingIcon = new ri, this.addComponent(this.filterLoadingIcon), this.filterScrollToTop = new ui, this.addComponent(this.filterScrollToTop), this.filterLoadingIcon.setShow(!0)
        }
      }, {
        key: "afterInit", value: function () {
          K.default.updateParamsFromUrl(), K.default.getFilterData("init", this.afterGetFilterData.bind(this), this.errorFilterCallback.bind(this))
        }
      }, {
        key: "initFilterTrees", value: function () {
          var t = this;
          r()(s.a.filterTree).each((function (e, n) {
            var i = r()(n), o = "";
            if (i.hasClass(N.a.filterTreeVertical) ? o = pi.FilterTreeType.VERTICAL : i.hasClass(N.a.filterTreeHorizontal) && (o = pi.FilterTreeType.HORIZONTAL), o) {
              var a = N.a.filterTree + (0 == e ? "" : (e + 1).toString());
              i.attr("id", a);
              var l = Hl.newFilterTree(a, o);
              t.addComponent(l), t.filterTrees.push(l)
            }
          }))
        }
      }, {
        key: "initFilterMobileButton", value: function () {
          if (r()(s.a.filterTreeMobileButton).length > 0) {
            var t = r()(s.a.filterTreeMobileButton).first().attr("data-filter-tree-id");
            this.filterMobileButton = null;
            for (var e = this.filterTrees.length, n = 0; n < e; n++) this.filterMobileButton || 0 != r()("#" + this.filterTrees[n].id).not("[data-is-desktop]").length && (t && this.filterTrees[n].id == t || !t && this.filterTrees[n].filterTreeType == pi.FilterTreeType.VERTICAL) && (this.filterMobileButton = new Jn(this.filterTrees[n]), this.addComponent(this.filterMobileButton))
          }
        }
      }, {
        key: "initInCollectionSearch", value: function () {
          var t = new Ut;
          this.addComponent(t)
        }
      }, {
        key: "isRender", value: function () {
          return this.isFetchedFilterData || this.isFetchedProductData
        }
      }, {
        key: "render", value: function () {
          this.isFetchedFilterData && (this.filterTrees.forEach((function (t) {
            r()(t.idSelector).length > 0 && !t.isRenderPartially && r()(t.idSelector).first().html("").append(t.$element)
          })), r()(s.a.filterTreeMobileButton).length > 0 && "init" == this.eventType && this.filterMobileButton && r()(s.a.filterTreeMobileButton).first().html("").append(this.filterMobileButton.$element))
        }
      }, {
        key: "afterGetFilterData", value: function (t, e, n) {
          !t || !Array.isArray(t.products) || 0 != t.products.length || void 0 === boostPFSAppConfig.general.collection_product_count || t.products.length == boostPFSAppConfig.general.collection_product_count || "init" != e || l.a.hasFilterOptionParam || l.a.collectionTags || "function" == typeof K.default.beforeCall || "function" == typeof K.default.beforeCallAsync ? this.setData(t, e, n) : this.errorFilterCallback()
        }
      }, {
        key: "setData", value: function (t, e, n) {
          this.isFetchedFilterData = !1, this.isFetchedProductData = !1, this.data = JSON.parse(JSON.stringify(t)), this.fromCache = t.from_cache, this.error = t.error;
          var i = JSON.parse(JSON.stringify(l.a.queryParams));
          l.a.queryParams = i, void 0 !== l.a.activeCurrencyPrices && r.a.extend(l.a.queryParams, l.a.activeCurrencyPrices), this.eventType = e || t.event_type, this.clickedFilterOptionId = n && n.filterOptionId && "clear" != e ? n.filterOptionId : "", (t = this.modifyData(t)).filter && t.filter.options && -1 == l.a.imutableFilterTree.indexOf(this.eventType) && (this.isFetchedFilterData = !0, this.filterTrees.forEach((function (e) {
            e.setData(t.filter)
          }))), (t.products || t.collections || t.pages) && (this.isFetchedProductData = !0, this.filterResult.setData(t)), this.refresh(), this.filterLoadingIcon.setShow(!1)
        }
      }, {
        key: "modifyData", value: function (t) {
          return t
        }
      }, {
        key: "errorFilterCallback", value: function () {
          if (!u.a.isiOS() && !u.a.isSafari() && !u.a.isBackButton()) {
            var t = u.a.getWindowLocation().href.split("?")[0],
              e = u.a.isSearchPage() && l.a.queryParams.hasOwnProperty("q") ? "&q=" + l.a.queryParams.q : "";
            window.location.href = t + "?view=boost-pfs-original" + e
          }
        }
      }]) && Gl(n.prototype, i), o && Gl(n, o), e
    }(d.a), Jl = [{
      name: "getSettingValue", mapToFunction: function (t, e) {
        return o.a.getSettingValue(t, e)
      }
    }, {
      name: "getSortingList", mapToFunction: function () {
        return u.a.FilterResult.getSortingList()
      }
    }, {
      name: "buildToolbarLink", mapToFunction: function (t, e, n) {
        return u.a.buildToolbarLink(t, e, n)
      }
    }, {
      name: "optimizeImage", mapToFunction: function (t, e) {
        return u.a.optimizeImage(t, e)
      }
    }, {
      name: "buildProductItemUrl", mapToFunction: function (t, e) {
        return u.a.buildProductItemUrl(t, e)
      }
    }, {
      name: "refreshProperties", mapToFunction: function () {
        BoostPFS.prototype.selector = s.a, BoostPFS.prototype.queryParams = l.a.queryParams
      }
    }], Zl = [{
      name: "beforeBuildSearchBox",
      mapToFunction: "beforeBindEvents",
      mapArguments: ["id"],
      component: p.a
    }, {
      name: "afterBuildSearchBox",
      mapToFunction: "afterBindEvents",
      mapArguments: ["id"],
      component: p.a
    }, {
      name: "customizeSuggestion",
      mapToFunction: "customizeAutoCompleteResizeMenu",
      mapArguments: ["$uiMenuElement", "$element", "id"],
      component: p.a
    }, {
      name: "afterShowSearchBoxMobile",
      mapToFunction: "afterShowSearchBoxMobile",
      mapArguments: ["inputMobileId"],
      component: f.a
    }, {
      name: "afterCloseSuggestionMobile",
      mapToFunction: "afterCloseInstantSearchMobile",
      mapArguments: ["inputMobileId", "@0"],
      component: f.a
    }, {
      name: "afterShowSearchBoxStyle3",
      mapToFunction: "afterShowSearchBoxStyle3",
      mapArguments: ["inputStyle3Id"],
      component: h.a
    }, {
      name: "afterCloseInstantSearchStyle3",
      mapToFunction: "afterCloseInstantSearchStyle3",
      mapArguments: ["inputStyle3Id", "@0"],
      component: h.a
    }, {
      name: "customizeSuggetionProductTitle",
      mapToFunction: "customizeProductTitle",
      mapArguments: ["title", "currentTerm", "data"],
      component: y.a
    }, {
      name: "buildProductGridItem",
      mapToFunction: "compileTemplate",
      mapArguments: ["data", "index", "totalProduct"],
      component: E
    }, {
      name: "buildProductListItem",
      mapToFunction: "compileTemplate",
      mapArguments: ["data", "index", "totalProduct"],
      component: x
    }, {
      name: "buildProductCollageItem",
      mapToFunction: "compileTemplate",
      mapArguments: ["data", "index", "totalProduct"],
      component: D
    }, {
      name: "prepareProductData",
      mapToFunction: "prepareProductData",
      mapArguments: ["data"],
      component: ft
    }, {
      name: "buildExtrasProductList",
      mapToFunction: "afterRender",
      mapArguments: ["data", "eventType"],
      component: ft
    }, {
      name: "buildAdditionalElements",
      mapToFunction: "afterRender",
      mapArguments: ["data", "totalProduct", "eventType"],
      component: Ql
    }, {
      name: "buildPagination",
      mapToFunction: "render",
      mapArguments: ["totalProduct", "paginationType"],
      component: bt
    }, {
      name: "buildFilterDisplayType",
      mapToFunction: "render",
      mapArguments: [],
      component: wt
    }, {
      name: "buildFilterSorting",
      mapToFunction: "compileTemplate",
      mapArguments: [],
      component: Lt
    }, {
      name: "buildFilterShowLimit",
      mapToFunction: "compileTemplate",
      mapArguments: [],
      component: jt
    }, {
      name: "buildBreadcrumb",
      mapToFunction: "buildBreadcrumb",
      mapArguments: ["collectionData", "data"],
      component: le
    }], Xl = function (t, e) {
      BoostPFS.prototype.hasOwnProperty(t) || (BoostPFS.prototype[t] = e)
    }, ts = function (t, e, n, i) {
      if (BoostPFS.prototype.hasOwnProperty(t)) {
        i.prototype[e] = function () {
          var e, i = [];
          if (n && n.length > 0) for (var r = 0; r < n.length; r++) {
            var o = n[r];
            if (this.hasOwnProperty(o)) i.push(this[o]); else if (0 == o.indexOf("@")) {
              var a = parseInt(o.substr(1));
              void 0 !== arguments[a] ? i.push(arguments[a]) : i.push(null)
            } else i.push(null)
          }
          return (e = BoostPFS.prototype[t]).call.apply(e, [BoostPFS.instance].concat(i))
        }
      }
    }, es = {
      mapLegacyFunctions: function () {
        Jl.forEach((function (t) {
          Xl(t.name, t.mapToFunction)
        })), Zl.forEach((function (t) {
          ts(t.name, t.mapToFunction, t.mapArguments, t.component)
        }))
      }, mapLegacyFunctionCall: Xl, mapLegacyFunctionOverride: ts
    }, ns = n(64), is = n(36), rs = n(80), os = n(19), as = n(123), ls = n(70);

    function ss(t) {
      return (ss = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function cs(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function us(t, e) {
      return !e || "object" !== ss(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function ps(t) {
      return (ps = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function fs(t, e) {
      return (fs = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var hs = function (t) {
        function e() {
          return function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, e), us(this, ps(e).call(this))
        }

        var n, i, a;
        return function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && fs(t, e)
        }(e, t), n = e, (i = [{
          key: "init", value: function () {
            var t = this;
            if (r()('input[name="' + o.a.getSettingValue("search.termKey") + '"]:not([data-disable-instant-search]):not([data-already-init])').each((function (e, n) {
              var i = "boost-pfs-search-box-" + e, o = new p.a(i, r()(n));
              t.addComponent(o)
            })), u.a.isMobile() && o.a.getSettingValue("search.suggestionMobileStyle") !== os.a.Mobile.SuggestionType.STYLE_2) {
              var e = ls.a.instantSearchMobile();
              this.addComponent(e)
            }
            if (!u.a.isMobile() && "style3" === o.a.getSettingValue("search.suggestionStyle")) {
              var n = ls.a.instantSearchStyle3();
              this.addComponent(n)
            }
          }
        }]) && cs(n.prototype, i), a && cs(n, a), e
      }(d.a), ys = n(81), ds = n(122), gs = n(65), ms = n(42), bs = n(114), vs = n(118), Ss = n(121), Os = n(120),
      Ts = n(119), Ps = n(57), ws = n(116), _s = n(117), Cs = n(115), ks = n(97), Es = {
        inject: function (t) {
          t.jQ = r.a, t.noUiSlider = ja.a, t.Analytics = ns.a, t.Class = N.a, t.Globals = l.a, t.Labels = a.a, t.Navigation = c.a, t.Selector = s.a, t.Settings = o.a, t.Utils = u.a, t.FunctionMapper = es, t.Integration = g.a, t.Api = is.a, t.FilterApi = K.default, t.InstantSearchApi = rs.default, t.FilterTreeEnum = pi, t.FilterOptionEnum = Wn.a, t.InstantSearchEnum = os.a, t.Filter = Ql, t.FilterTree = sl, t.FilterStyle = Hl, t.FilterTreeStyle2 = dl, t.FilterTreeStyle2Fullwidth = Tl, t.FilterTreeStyle3 = Il, t.FilterTreeStyle3Fullwidth = jl, t.FilterTreeStyle4 = ql, t.FilterOption = Do, t.FilterOptionList = Ko, t.FilterOptionBox = ea, t.FilterOptionSwatch = sa, t.FilterOptionMultiLevelCollections = Qa, t.FilterOptionMultiLevelTag = nl, t.FilterOptionRangeSlider = Ha, t.FilterOptionRating = da, t.FilterOptionSubCategory = xa, t.FilterApplyButton = Pi, t.FilterClearButton = mi, t.FilterCollapse = xo, t.FilterScrollbar = Qr, t.FilterSearchBox = jr, t.FilterTooltip = Ur, t.FilterViewMore = Lr, t.FilterOptionItem = Ii, t.FilterOptionItemList = Bi, t.FilterOptionItemBox = qi, t.FilterOptionItemSwatch = Ji, t.FilterOptionItemMultiLevelCollections = uo, t.FilterOptionItemSecondLevelCollections = lo, t.FilterOptionItemThirdLevelCollections = so, t.FilterOptionItemMultiLevelTag = wo, t.FilterOptionItemSecondLevelTag = Oo, t.FilterOptionItemThirdLevelTag = To, t.FilterOptionItemRangeSlider = Or, t.FilterOptionItemRating = or, t.FilterOptionItemSubCategory = hr, t.FilterRefineBy = ka, t.FilterRefineByItem = Oa, t.FilterLoadingIcon = ri, t.FilterMobileButton = Jn, t.FilterScrollToTop = ui, t.FilterResult = Hn, t.ProductList = ft, t.ProductListPlaceholder = qe, t.ProductListSearchNoResult = Vn, t.ProductItem = T, t.ProductGridItem = E, t.ProductListItem = x, t.ProductCollageItem = D, t.Breadcrumb = ee, t.PageInfoCollection = le, t.PageInfoSearch = Kt, t.ProductDisplayType = wt, t.ProductLimit = jt, t.ProductSorting = Lt, t.RobotsMeta = he, t.InCollectionSearch = Ut, t.SearchResultPanels = z, t.SearchResultPanelItem = tt, t.SearchResultTotal = Rn, t.CollectionItem = Ye, t.CollectionItemList = en, t.CollectionList = sn, t.PageItem = yn, t.PageItemList = Sn, t.PageList = Cn, t.ProductPagination = at, t.ProductPaginationDefault = bt, t.ProductPaginationInfinite = _e, t.ProductPaginationLoadMore = ve, t.ProductPaginationLoadPrevious = Ae, t.SearchDisplayPagination = $e, t.SearchInput = p.a, t.InstantSearch = hs, t.InstantSearchMobile = f.a, t.InstantSearchResult = ys.a, t.InstantSearchStyle = ls.a, t.InstantSearchResultStyle2 = ds.a, t.InstantSearchStyle3 = h.a, t.InstantSearchNoResult = gs.a, t.InstantSearchOnclick = ms.a, t.InstantSearchResultBlock = bs.a,t.InstantSearchResultBlockDym = vs.a,t.InstantSearchResultBlockEmpty = Ss.a,t.InstantSearchResultBlockLoading = Os.a,t.InstantSearchResultBlockViewAll = Ts.a,t.InstantSearchResultItem = Ps.a,t.InstantSearchResultItemCollection = ws.a,t.InstantSearchResultItemPage = _s.a,t.InstantSearchResultItemPopular = Cs.a,t.InstantSearchResultItemProduct = y.a,t.InstantSearchResultRedirect = ks.a,t.SearchAutoComplete = as.a
        }
      }, Is = function () {
        r.a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
          r.a.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
          }
        })), r.a.fn.hover = function (t, e) {
          return this.mouseenter(t).mouseleave(e || t)
        }
      }, Ls = function () {
        r.a.ajax = function (t) {
          var e = t.type, n = void 0 === e ? "GET" : e, i = t.url, r = void 0 === i ? "" : i, o = t.data, a = t.dataType,
            l = t.success, s = t.error, c = new XMLHttpRequest, u = "application/json";
          a || (u = "text/html"), c.open(n, r), c.setRequestHeader("Content-Type", "".concat(u, ";charset=UTF-8")), "json" === a && c.setRequestHeader("Accept", "application/json, text/javascript"), c.onload = function () {
            var t;
            t = "json" === a ? JSON.parse(c.responseText) : c.responseText, c.readyState > 3 && (200 == c.status ? "function" == typeof l && l(t) : "function" == typeof s && s(t))
          }, o ? c.send(JSON.stringify(o)) : c.send()
        }
      }, As = function () {
        r.a.fn.serializeArray = function () {
          var t = [], e = this.length > 0 ? this[0] : {};
          return Array.prototype.slice.call(e).forEach((function (e) {
            !e.name || e.disabled || ["file", "reset", "submit", "button"].indexOf(e.type) > -1 || ("select-multiple" !== e.type ? ["checkbox", "radio"].indexOf(e.type) > -1 && !e.checked || t.push({
              name: e.name,
              value: e.value
            }) : Array.prototype.slice.call(e.options).forEach((function (n) {
              n.selected && t.push({name: e.name, value: n.value})
            })))
          })), t
        }
      }, Rs = function () {
        r.a.param = function (t) {
          return Object.keys(t).map((function (e) {
            if (Array.isArray(t[e])) {
              for (var n = [], i = 0; i < t[e].length; i++) n.push(encodeURIComponent(e + "[]") + "=" + encodeURIComponent(t[e][i]));
              return n.join("&")
            }
            return encodeURIComponent(e) + "=" + encodeURIComponent(null === t[e] ? "" : t[e])
          })).join("&")
        }
      }, Fs = {
        init: function () {
          Is(), Ls(), As(), Rs()
        }
      };

    function xs(t) {
      return (xs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function Bs(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function js(t) {
      return (js = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function $s(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }

    function Vs(t, e) {
      return (Vs = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var Ms = function (t) {
      function e() {
        var t, n, i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), n = this, (t = !(i = js(e).call(this)) || "object" !== xs(i) && "function" != typeof i ? $s(n) : i).search = null, t.filter = null, Ds = $s(t), t
      }

      var n, i, f;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Vs(t, e)
      }(e, t), n = e, f = [{
        key: "inject", value: function (t) {
          Es.inject(t)
        }
      }, {
        key: "instance", get: function () {
          return Ds
        }
      }, {
        key: "jQ", get: function () {
          return r.a
        }
      }, {
        key: "Globals", get: function () {
          return l.a
        }
      }, {
        key: "Labels", get: function () {
          return a.a
        }
      }, {
        key: "Selector", get: function () {
          return s.a
        }
      }, {
        key: "Settings", get: function () {
          return o.a
        }
      }, {
        key: "Utils", get: function () {
          return u.a
        }
      }], (i = [{
        key: "init", value: function () {
          Fs.init(), es.mapLegacyFunctions(), o.a.init(), a.a.init(), s.a.init(), l.a.init(), c.a.init(), this.initOTP(), this.initADA()
        }
      }, {
        key: "initSearchBox", value: function (t) {
          if (o.a.getSettingValue("search.enableSuggestion") && !u.a.isGLHMobile()) {
            if (this.search = new hs, this.addComponent(this.search), t) {
              var e = new p.a(t);
              this.search.addComponent(e)
            }
            this.search.refresh()
          }
        }
      }, {
        key: "initFilter", value: function () {
          o.a.getSettingValue("general.enableFilter") && !u.a.isGLHMobile() && (this.filter = new Ql, this.addComponent(this.filter), this.filter.refresh())
        }
      }, {
        key: "initAnalytics", value: function () {
          o.a.getSettingValue("general.enableTrackingOrderRevenue") && !u.a.isGLHMobile() && ns.a.init()
        }
      }, {
        key: "initOTP", value: function () {
          window.BoostOTP && "function" == typeof window.BoostOTP.init && r()(window).on("load", (function () {
            BoostOTP.init()
          }))
        }
      }, {
        key: "initADA", value: function () {
          r()("body").on("keyup", (function (t) {
            t && 9 == t.keyCode && r()("body").addClass(Class.adaWrapper)
          })), r()("body").on("click", (function (t) {
            (!t || !t.originalEvent || t.originalEvent.screenX && t.originalEvent.screenY) && r()("body").removeClass(Class.adaWrapper)
          }))
        }
      }]) && Bs(n.prototype, i), f && Bs(n, f), e
    }(d.a), Ds = null, Ns = e.default = Ms
  }, 6: function (t, e, n) {
    "use strict";
    var i = {
      filterTree: ".boost-pfs-filter-tree",
      filterTreeVertical: ".boost-pfs-filter-tree-v",
      filterTreeHorizontal: ".boost-pfs-filter-tree-h",
      filterTreeMobileButton: ".boost-pfs-filter-tree-mobile-button",
      filterRefineByVertical: ".boost-pfs-filter-refine-by-wrapper-v",
      filterRefineByHorizontal: ".boost-pfs-filter-refine-by-wrapper-h",
      products: ".boost-pfs-filter-products",
      collections: ".boost-pfs-search-result-collections",
      pages: ".boost-pfs-search-result-pages",
      searchBoxMobile: "#boost-pfs-search-box-mobile",
      searchBoxStyle3: "#boost-pfs-search-box-style3",
      searchTopPanels: ".boost-pfs-search-result-panel-controls",
      searchCollectionPagination: ".boost-pfs-search-result-collection-pagination",
      searchPagePagination: ".boost-pfs-search-result-page-pagination",
      searchPanelsProductShow: ".boost-pfs-search-panel-product-show",
      searchPanelsCollectionShow: ".boost-pfs-search-panel-collection-show",
      searchPanelsPageShow: ".boost-pfs-search-panel-page-show",
      searchTotalResult: ".boost-pfs-search-total-result",
      searchNoResultJson: "#boost-pfs-instant-search-products-not-found-json",
      inCollectionSearch: ".boost-pfs-in-collection-search",
      topShowLimit: ".boost-pfs-filter-top-show-limit",
      topSorting: ".boost-pfs-filter-top-sorting",
      topDisplayType: ".boost-pfs-filter-top-display-type",
      pagination: ".boost-pfs-filter-bottom-pagination,.boost-pfs-filter-top-pagination",
      bottomPagination: ".boost-pfs-filter-bottom-pagination",
      loadMore: ".boost-pfs-filter-load-more",
      loadMoreButtonContainer: ".boost-pfs-filter-load-more-button-container",
      btnLoadPreviousPageWrapperSelector: ".boost-pfs-filter-btn-load-previous-page-wrapper",
      btnLoadPreviousPageSelector: ".boost-pfs-filter-btn-load-previous-page",
      loadMoreLoading: ".boost-pfs-filter-load-more-loading",
      topNotification: ".boost-pfs-filter-top-notification",
      breadcrumb: ".boost-pfs-filter-breadcrumb",
      scrollToTop: ".boost-pfs-filter-scroll-to-top",
      otpProductItem: "",
      otpButtons: "",
      otpTopCartLink: 'header a[href="/cart"]',
      otpTopCartCount: "#CartCount",
      otpTopCartSubtotal: "",
      productPageAtcButton: 'form[action="/cart/add"] *[type="submit"], form[action="/cart/add"] *[name="add"]',
      productPageAtcForm: 'form[action="/cart/add"]',
      mostPopular: ".boost-pfs-most-popular",
      recentlyViewed: ".boost-pfs-recently-viewed",
      trackingProduct: ".boost-pfs-filter-products > *",
      trackingQuickView: ".boost-pfs-quickview-btn",
      trackingAddToCart: 'form[action="/cart/add"] *[type="submit"], form[action="/cart/add"] *[name="add"]',
      trackingBuyNow: ".shopify-payment-button, #dynamic-checkout-cart",
      init: function () {
        var t = i;
        "undefined" != typeof boostPFSConfig && boostPFSConfig.hasOwnProperty("selector") && null !== boostPFSConfig.selector && (t = Utils.mergeObject(t, boostPFSConfig.selector)), "undefined" != typeof boostPFSFilterConfig && boostPFSFilterConfig.hasOwnProperty("selector") && null !== boostPFSFilterConfig.selector && (t = Utils.mergeObject(t, boostPFSFilterConfig.selector)), "undefined" != typeof boostPFSInstantSearchConfig && boostPFSInstantSearchConfig.hasOwnProperty("selector") && null !== boostPFSInstantSearchConfig.selector && (t = Utils.mergeObject(t, boostPFSInstantSearchConfig.selector)), i = t
      }
    };
    e.a = i
  }, 64: function (t, e, n) {
    "use strict";
    n(37), n(26), n(23), n(147), n(44), n(11), n(21), n(40), n(22), n(48), n(24);
    var i = n(0), r = n.n(i), o = n(36), a = {
        UserAction: {
          VIEW_PRODUCT: "view_product",
          QUICK_VIEW: "quick_view",
          ADD_TO_CART: "add_to_cart",
          BUY_NOW: "buy_now"
        }, Action: {FILTER: "filter", SEARCH: "search", SUGGEST: "suggest"}
      }, l = n(3), s = n(6), c = n(1), u = n(2), p = n(4), f = "boostPFSAnalytics", h = "", y = "", d = null,
      g = function () {
        u.a.getSettingValue("search.enableSuggestion") && r()("." + p.a.searchSuggestionWrapper).length > 0 && r()("." + p.a.searchSuggestionWrapper).each((function (t, e) {
          e.addEventListener("click", O, !0), document.addEventListener("keydown", O, !0)
        }))
      }, m = function () {
        s.a.trackingProduct && r()(s.a.products).length > 0 && document.addEventListener("click", S, !0)
      }, b = function () {
        var t = C(f);
        Array.isArray(t) && (t.forEach((function (t) {
          E(t), t.pid == boostPFSAppConfig.general.product_id && (d = t)
        })), c.a.isProductPage() && (s.a.trackingAddToCart && r()(s.a.trackingAddToCart).length > 0 && document.addEventListener("click", T, !0), s.a.trackingBuyNow && r()(s.a.trackingBuyNow).length > 0 && document.addEventListener("click", P, !0)))
      }, v = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
          var e = 16 * Math.random() | 0;
          return ("x" == t ? e : 3 & e | 8).toString(16)
        }))
      }, S = function (t) {
        if (t && t.target) {
          var e = r()(t.target), n = c.a.isSearchPage() ? a.Action.SEARCH : a.Action.FILTER,
            i = a.UserAction.VIEW_PRODUCT;
          s.a.trackingQuickView && e.closest(s.a.trackingQuickView).length > 0 && (i = a.UserAction.QUICK_VIEW), s.a.trackingAddToCart && e.closest(s.a.trackingAddToCart).length > 0 && (i = a.UserAction.ADD_TO_CART), s.a.trackingBuyNow && e.closest(s.a.trackingBuyNow).length > 0 && (i = a.UserAction.BUY_NOW);
          var o = "", l = e.closest(s.a.trackingProduct);
          if (l.length > 0 ? o = l.attr("data-id") : d && (i != a.UserAction.ADD_TO_CART && i != a.UserAction.BUY_NOW || (o = d.pid)), o) {
            var u = w(o, i, n);
            _(u), E(u), d = i == a.UserAction.QUICK_VIEW ? u : null
          }
        }
      }, O = function (t) {
        if (t && t.target && ("keydown" != t.type || 13 == t.keyCode)) {
          var e = r()(t.target).closest("." + p.a.searchSuggestionItem + "-product");
          if (e) {
            var n = e.attr("data-id");
            if (n) {
              var i = w(n, a.UserAction.VIEW_PRODUCT, a.Action.SUGGEST);
              _(i)
            }
          }
        }
      }, T = function (t) {
        if (t && t.target && r()(t.target).closest(s.a.trackingAddToCart).length > 0) {
          var e = {
            tid: l.a.shopDomain,
            pid: boostPFSAppConfig.general.product_id.toString(),
            u: a.UserAction.ADD_TO_CART,
            ct: h
          };
          _(e), E(e)
        }
      }, P = function (t) {
        if (t && t.target && r()(t.target).closest(s.a.trackingBuyNow).length > 0) {
          var e = {tid: l.a.shopDomain, pid: boostPFSAppConfig.general.product_id.toString(), u: a.UserAction.BUY_NOW};
          _(e), E(e)
        }
      }, w = function (t, e, n) {
        var i = new Date, r = h, o = e == a.UserAction.QUICK_VIEW ? a.UserAction.VIEW_PRODUCT : e, s = "";
        if (n == a.Action.FILTER ? s += "collection_scope=" + l.a.collectionId : s += "q=" + l.a.currentTerm, n == a.Action.FILTER || n == a.Action.SEARCH) {
          var c = Object.keys(l.a.queryParams).filter((function (t) {
            return t.startsWith(l.a.prefix)
          }));
          c && c.length > 0 && c.forEach((function (t) {
            var e = l.a.queryParams[t];
            Array.isArray(e) ? e.forEach((function (e) {
              s += "&" + t + "=" + encodeURIComponent(e)
            })) : s += "&" + t + "=" + encodeURIComponent(e)
          }))
        }
        return {tid: l.a.shopDomain, ct: r, pid: t, t: i.toISOString(), u: o, a: n, qs: s, r: document.referrer}
      }, _ = function (t) {
        var e = C(f);
        Array.isArray(e) || (e = []);
        var n = e.filter((function (e) {
          return e.pid != t.productId
        }));
        n.push(t), k(f, n)
      }, C = function (t) {
        try {
          return JSON.parse(localStorage.getItem(t))
        } catch (t) {
          return null
        }
      }, k = function (t, e) {
        try {
          null != e ? localStorage.setItem(t, JSON.stringify(e)) : localStorage.setItem(t, "")
        } catch (t) {
        }
      }, E = function (t, e) {
        if (e || t.ct) {
          t.sid = y;
          var n = new XMLHttpRequest;
          n.open("POST", o.a.getApiUrl("analytics")), n.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), n.onload = function () {
            n.readyState > 3 && 200 == n.status && function (t) {
              var e = C(f);
              if (Array.isArray(e)) {
                var n = e.filter((function (e) {
                  return e.pid != t
                }));
                k(f, n)
              }
            }(t.pid)
          }, n.send(JSON.stringify(t))
        } else setTimeout((function () {
          !function (t) {
            var e = new XMLHttpRequest;
            e.open("GET", "/cart.js"), e.onload = function () {
              if (e.readyState > 3 && 200 == e.status) {
                var n = JSON.parse(e.responseText), i = n.item_count <= 0 ? "" : n.token;
                h = i, t && (t.ct = i, E(t, !0))
              }
            }, e.send()
          }(t)
        }), 1e3)
      }, I = {
        init: function () {
          window.XMLHttpRequest && (h = "", (y = C("boostPFSSessionId")) || (y = v(), k("boostPFSSessionId", y)), g(), m(), b())
        }, getSessionId: function () {
          return y || ((y = C("boostPFSSessionId")) || (y = v(), k("boostPFSSessionId", y)), y)
        }
      };
    e.a = I
  }, 65: function (t, e, n) {
    "use strict";
    n(23), n(24);
    var i = n(0), r = n.n(i), o = n(2), a = n(6), l = n(19), s = null, c = {
      getNoResultBlockSettings: function () {
        var t = c.getNoResultData().suggestion, e = {
          type: l.a.ResultType.NO_RESULT_SUGGESTIONS,
          label: o.a.getSettingValue("search.suggestionNoResult.search_terms.label"),
          status: o.a.getSettingValue("search.suggestionNoResult.search_terms.status") ? "active" : "inactive",
          number: t && t.length ? t.length : 0
        }, n = o.a.getSettingValue("search.suggestionNoResult.productSuggestion.data");
        return [e, {
          type: l.a.ResultType.NO_RESULT_PRODUCTS,
          label: o.a.getSettingValue("search.suggestionNoResult.products.label"),
          status: o.a.getSettingValue("search.suggestionNoResult.products.status") ? "active" : "inactive",
          number: n && n.length ? n.length : 0
        }]
      }, getNoResultData: function () {
        if (s) return s;
        var t = {}, e = r()(a.a.searchNoResultJson);
        if (e.length) try {
          t = JSON.parse(e.html())
        } catch (t) {
          console.log("Failed to parse notFoundJson.")
        }
        var n = {isAllEmpty: !0}, i = o.a.getSettingValue("search.suggestionNoResult.search_terms.status");
        t.search_terms && i && (n[l.a.ResultType.NO_RESULT_SUGGESTIONS] = t.search_terms, t.search_terms.length > 0 && (n.isAllEmpty = !1));
        var u = o.a.getSettingValue("search.suggestionNoResult.products.status");
        return t.products && u && (n[l.a.ResultType.NO_RESULT_PRODUCTS] = c.prepareProducts(t.products), t.products.length > 0 && (n.isAllEmpty = !1)), s = n
      }, prepareProducts: function (t) {
        return Array.isArray(t) ? (t.forEach((function (t) {
          var e = [];
          Array.isArray(t.media) || (t.media = []), t.media.forEach((function (t) {
            "image" == t.media_type && e.push({
              id: t.id,
              position: t.position,
              src: t.src,
              width: t.width,
              height: t.height
            })
          })), t.images_info = e, t.price /= 100, t.price_min /= 100, t.price_max /= 100, t.compare_at_price /= 100, t.compare_at_price_min /= 100, t.compare_at_price_max /= 100
        })), t) : []
      }, noResultData: s
    };
    e.a = c
  }, 7: function (t, e, n) {
    "use strict";
    n.r(e);
    n(14), n(15), n(16), n(37), n(23), n(182), n(39), n(30), n(10), n(62), n(93), n(78), n(147), n(44), n(11), n(63), n(21), n(40), n(207), n(45), n(13), n(22), n(53), n(38), n(48), n(24), n(12), n(69);
    var i = n(0), r = n.n(i), o = n(3), a = n(2), l = n(1), s = n(36), c = n(33), u = n(59), p = n(5), f = n(64);

    function h(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    var y = null, d = {eventType: "init", eventInfo: {}}, g = function (t, e, n) {
      if (O(t), v && v.forEach((function (e) {
        "function" == typeof e && e(t)
      })), "function" == typeof k.beforeCall && k.beforeCall(t, d.eventInfo), "function" != typeof k.beforeCallAsync) m(t, e, n); else {
        k.beforeCallAsync((function () {
          m(t, e, n)
        }), t, d.eventInfo)
      }
    }, m = function t(e, n, i, a) {
      a = void 0 !== a ? a : 0, y = n, o.a.queryParams.callback = "BoostPFSFilterCallback", o.a.queryParams.event_type = e;
      var c = s.a.getApiUrl("filter"),
        u = l.a.isCollectionPage() && (o.a.queryParams.q || "relevance" === o.a.queryParams.sort);
      (l.a.isSearchPage() || u) && (c = s.a.getApiUrl("search"), o.a.hasOwnProperty("searchDisplay") && o.a.searchDisplay && "products" !== o.a.searchDisplay && (c += "/" + o.a.searchDisplay));
      var p = document.createElement("script");
      p.type = "text/javascript";
      var f = (new Date).getTime(), h = JSON.parse(JSON.stringify(o.a.queryParams));
      o.a.queryParams = h, p.src = c + "?t=" + f + "&" + r.a.param(o.a.queryParams), p.id = "boost-pfs-filter-script", p.async = !0;
      var d;
      p.addEventListener("error", (function (e) {
        "function" == typeof document.getElementById(p.id).remove ? document.getElementById(p.id).remove() : document.getElementById(p.id).outerHTML = "", a < 2 ? (a++, d && clearTimeout(d), d = setTimeout(t("resend", n, i, a), 2e3)) : "function" == typeof i && i()
      })), document.getElementsByTagName("head")[0].appendChild(p), p.addEventListener("load", (function (t) {
        "function" == typeof document.getElementById(p.id).remove ? document.getElementById(p.id).remove() : document.getElementById(p.id).outerHTML = ""
      }))
    }, b = function (t) {
      S && S.forEach((function (e) {
        "function" == typeof e && e(t, d.eventType, d.eventInfo)
      })), "function" == typeof y && y(t, d.eventType, d.eventInfo)
    }, v = [], S = [], O = function (t) {
      var e = l.a.mergeObject({}, o.a.queryParams);
      e = P(e, t), e = w(e, t), e = s.a.setApiLocaleParams(e), l.a.isEnableShopifyMultipleCurrencies() && (l.a.isConvertCurrenciesOnFrontEnd() ? ((e = T(e, t)).hasOwnProperty("currency") && delete e.currency, e.hasOwnProperty("country") && delete e.country) : e = s.a.setShopifyMultiCurrencyParams(e)), e.sid = f.a.getSessionId(), o.a.queryParams = e
    }, T = function (t, e) {
      var n = Object.keys(t);
      return n = n.filter((function (t) {
        return (0 == t.indexOf("pf_p_") || 0 == t.indexOf("pf_vp_")) && !t.includes("_exclude_from_value")
      })), o.a.activeCurrencyPrices = [], n.length && n.forEach((function (e) {
        var n = [];
        Array.isArray(t[e]) && t[e].forEach((function (t) {
          var e = t.split(":");
          e = e.map((function (t, e) {
            var n = 0 == e;
            return 0 == t.length ? "" : l.a.revertPriceToDefaultCurrency(t, n)
          })), n.push(e.join(":"))
        })), o.a.activeCurrencyPrices[e] = t[e], t[e] = n
      })), t
    }, P = function (t, e) {
      var n = c.a.getHistoryState(), i = 0;
      "history" == e ? i = n && n.param && n.param.hasOwnProperty("collection_scope") ? parseInt(n.param.collection_scope) : parseInt(boostPFSConfig.general.collection_id) : null != o.a.collectionId ? i = parseInt(o.a.collectionId) : boostPFSConfig.general.collection_id ? i = parseInt(boostPFSConfig.general.collection_id) : l.a.isCollectionPage() || l.a.isSearchPage() || (i = a.a.getSettingValue("general.filterEverywhereCollectionId")), o.a.collectionId = i, t.collection_scope = i;
      var r = null;
      ("history" == e ? r = n && n.param && n.param.tag ? n.param.tag : boostPFSConfig.general.collection_tags : o.a.collectionTags ? r = o.a.collectionTags : boostPFSConfig.general.collectionTags && (r = boostPFSConfig.general.collectionTags), o.a.collectionTags = r, t.tag = r, a.a.getSettingValue("general.loadProductFromLiquid") && "sync" == a.a.getSettingValue("general.loadProductFromLiquidType") && a.a.getSettingValue("general.theme_id") && (t.theme_id = a.a.getSettingValue("general.theme_id")), 1 == a.a.getSettingValue("general.availableAfterFiltering") ? (t.product_available = !0 === l.a.checkExistFilterOptionParam() || o.a.productAvailable, t.variant_available = !0 === l.a.checkExistFilterOptionParam() || o.a.variantAvailable) : (t.product_available = o.a.productAvailable, t.variant_available = o.a.variantAvailable), o.a.inventoryBaseSelectedLocations && (t.inventory_base_selected_locations = o.a.inventoryBaseSelectedLocations), a.a.getSettingValue("general.showOutOfStockOption") && (t.zero_options = !0), t.build_filter_tree = !(void 0 !== e && o.a.imutableFilterTree.indexOf(e) > -1), t.check_cache = !(!1 !== l.a.checkExistFilterOptionParam() || 1 != t.page || t.sort != o.a.defaultSorting || t.limit != a.a.getSettingValue("general.limit") || l.a.isSearchPage() || l.a.isVendorPage() || l.a.isTypePage() || t.q), t.incollection_search = !(!l.a.isCollectionPage() || !t.q) || void 0, "" != a.a.getSettingValue("general.priceMode") && (t.price_mode = a.a.getSettingValue("general.priceMode")), "" != a.a.getSettingValue("general.tagMode") && (t.tag_mode = a.a.getSettingValue("general.tagMode")), a.a.getSettingValue("general.sortingAvailableFirst") && (t.sort_first = "available"), l.a.isVendorPage() && t.hasOwnProperty("q")) && (t[a.a.getSettingValue("general.vendorParam")] = [t.q], delete t.q);
      l.a.isTypePage() && t.hasOwnProperty("q") && (t[a.a.getSettingValue("general.typeParam")] = [t.q], delete t.q);
      return t
    }, w = function (t, e) {
      if (l.a.isSearchPage()) {
        t.q = l.a.getSearchTerm(), "q" != o.a.searchTermKey && delete t[o.a.searchTermKey];
        var n = a.a.getSettingValue("search.enableFuzzy");
        !0 !== n && (t.fuzzy = n), !1 !== a.a.getSettingValue("search.reduceMinMatch") && (t.reduce_min_match = a.a.getSettingValue("search.reduceMinMatch")), a.a.getSettingValue("search.fullMinMatch") && (t.full_min_match = !0), a.a.getSettingValue("general.sortingAvailableFirst") && (t.sort_first = "available"), a.a.getSettingValue("search.enablePlusCharacterSearch") && (t.enable_plus_character_search = !0)
      }
      return t
    }, _ = function (t) {
      var e = "";
      e = t ? "string" == typeof t && 2 == t.split("?").length ? t.split("?")[1] : "" : l.a.getWindowLocation().search;
      var n = new URLSearchParams(e), i = {},
        r = l.a.isCollectionPage() || l.a.isSearchPage() ? a.a.getSettingValue("general.urlScheme") : 0;
      return n.forEach((function (t, e) {
        var n = c.a.longParamMap.get(e);
        n || (n = e);
        var s = o.a.imutableFilterTree.includes(n) || n == o.a.searchTermKey || n.startsWith(o.a.prefix) && n.includes("_and_condition") || n.startsWith(o.a.prefix) && n.includes("_show_exact_rating") || n.startsWith(o.a.prefix) && n.includes("_exclude_from_value"),
          u = n.startsWith(o.a.prefix);
        if (s) i[n] = t, o.a.hasFilterOptionParam = !0; else if (u) {
          var f = n.startsWith(o.a.prefix + "_c_"), h = n.startsWith(o.a.prefix + "_ct_");
          n.startsWith(o.a.prefix + "_p_") || n.startsWith(o.a.prefix + "_vp_");
          if (f) {
            if (l.a.isCollectionPage()) return;
            i.collection_scope = t
          } else if (h) {
            var y = a.a.getSettingValue("general.multiLevelCollectionSelectType");
            i.tag_mode = y == p.a.SelectType.MULTIPLE ? "2" : "1", i.hasOwnProperty("tag") ? i.tag.push(t) : i.tag = [t]
          }
          switch (r) {
            case 2:
              i[n] = t.split(",");
              break;
            case 1:
            default:
              i.hasOwnProperty(n) ? i[n].push(t) : i[n] = [t]
          }
          f ? o.a.collectionId = i.collection_scope : h && (o.a.collectionTags = i.tag), o.a.hasFilterOptionParam = !0
        }
      })), i
    }, C = function (t) {
      t._ = o.a.prefix, t.shop = t.hasOwnProperty("shop") ? t.shop : o.a.shopDomain, t.page = t.hasOwnProperty("page") ? parseInt(t.page) : 1;
      var e = a.a.getSettingValue("general.limit");
      (e <= 0 || e > 70) && (e = 24), "default" == a.a.getSettingValue("general.paginationType") || a.a.getSettingValue("general.paginationTypeAdvanced") ? t.limit = t.hasOwnProperty("limit") ? t.limit : e : t.limit = (t.hasOwnProperty("limit") ? t.limit : e) * t.page;
      var n = "";
      l.a.isSearchPage() ? (n = l.a.getDefaultSorting("search"), o.a.defaultSorting = n || "relevance") : l.a.isCollectionPage() ? "" != (n = l.a.getDefaultSorting(boostPFSConfig.general.collection_id)) && (o.a.defaultSorting = n) : o.a.defaultSorting = a.a.getSettingValue("general.filterEverywhereDefaultSorting"), t.sort = t.hasOwnProperty("sort") ? t.sort : o.a.defaultSorting, t.display = t.hasOwnProperty("display") ? t.display : a.a.getSettingValue("general.defaultDisplay"), t = s.a.setShopifyMultiCurrencyParams(t);
      var i = a.a.getSettingValue("general.location");
      return i && "string" == typeof i && (t.location = i), t
    }, k = {
      BoostPFSFilterCallback: function (t) {
        k.setDefaultValueForExcludedFields(t), "function" == typeof k.afterCall && k.afterCall(t, d.eventType, d.eventInfo), "function" != typeof k.afterCallAsync ? b(t) : k.afterCallAsync(t, b, d.eventType, d.eventInfo)
      },
      getFilterData: g,
      updateParamsFromUrl: function (t) {
        var e = _(t);
        e = C(e), l.a.isEnableShopifyMultipleCurrencies() && (e = l.a.isConvertCurrenciesOnFrontEnd() ? function (t) {
          var e = Object.keys(t);
          return (e = e.filter((function (t) {
            return (0 == t.indexOf("pf_p_") || 0 == t.indexOf("pf_vp_")) && !t.includes("_exclude_from_value")
          }))).length && e.forEach((function (e) {
            var n = [];
            Array.isArray(t[e]) && t[e].forEach((function (t) {
              var e = t.split(":");
              e = e.map((function (t, e) {
                return 0 == t.length ? "" : l.a.convertPriceBasedOnActiveCurrency(t)
              })), n.push(e.join(":"))
            })), t[e] = n
          })), t
        }(e) : s.a.setShopifyMultiCurrencyParams(e)), o.a.queryParams = e
      },
      setParam: function (t, e) {
        null == e || Array.isArray(e) && 0 == e.length ? delete o.a.queryParams[t] : Array.isArray(e) ? o.a.queryParams[t] = h(new Set(e)) : o.a.queryParams[t] = e;
        var n = t.startsWith(o.a.prefix + "_c_"), i = t.startsWith(o.a.prefix + "_ct_"), r = o.a.queryParams[t];
        if ((n || "collection_scope" == t) && (o.a.queryParams.collection_scope = r, o.a.collectionId = r, !r)) {
          var a = t.replace(o.a.prefix + "_c_", o.a.prefix + "_ct_");
          delete o.a.queryParams[a], o.a.queryParams.tag = null, o.a.collectionTags = null
        }
        i && (o.a.queryParams.tag = r, o.a.collectionTags = r)
      },
      setDefaultValueForExcludedFields: function (t) {
        if (Array.isArray(t.products)) {
          var e = (new Date).toISOString();
          t.products.forEach((function (t) {
            t.hasOwnProperty("variants") || (t.variants = []), t.hasOwnProperty("images_info") || (t.images_info = []), t.hasOwnProperty("collections") || (t.collections = []), t.hasOwnProperty("tags") || (t.tags = []), t.hasOwnProperty("skus") || (t.skus = []), t.hasOwnProperty("options_with_values") || (t.options_with_values = []), t.hasOwnProperty("barcodes") || (t.barcodes = []), t.hasOwnProperty("created_at") || (t.created_at = e), t.hasOwnProperty("updated_at") || (t.updated_at = e), t.hasOwnProperty("published_at") || (t.published_at = e)
          }))
        }
      },
      addBeforeApplyFilter: function (t) {
        v.push(t)
      },
      addAfterApplyFilter: function (t) {
        S.push(t)
      },
      applyFilter: function (t, e) {
        d.eventType = t, d.eventInfo = e, u.default.instance.filter.filterLoadingIcon.setShow(!0), g(t, u.default.instance.filter.setData.bind(u.default.instance.filter), u.default.instance.filter.errorFilterCallback.bind(u.default.instance.filter)), c.a.updateAddressBar()
      },
      callFilterApi: m,
      callbackFilterApi: b,
      beforeCall: null,
      afterCall: null,
      beforeCallAsync: null,
      afterCallAsync: null
    };
    e.default = k
  }, 70: function (t, e, n) {
    "use strict";
    var i = n(2), r = n(1), o = n(81), a = n(122), l = n(71), s = n(72), c = {
      InstantSearchResult: o.a,
      InstantSearchResultStyle2: a.a,
      InstantSearchStyle3: l.a,
      InstantSearchMobile: s.a
    }, u = {
      instantSearchResult: function (t, e) {
        var n = i.a.getSettingValue("search.suggestionStyle"), o = "InstantSearchResult" + r.a.capitalize(n, !0, !0);
        return c[o] && c[o].isActive() || (o = "InstantSearchResult"), new c[o](t, e)
      }, instantSearchMobile: function () {
        var t = i.a.getSettingValue("search.suggestionMobileStyle");
        "style1" == t && (t = "");
        var e = "InstantSearchMobile" + r.a.capitalize(t, !0, !0);
        return c[e] && c[e].isActive() || (e = "InstantSearchMobile"), new c[e]
      }, instantSearchStyle3: function () {
        i.a.getSettingValue("search.suggestionMobileStyle");
        var t = "InstantSearchStyle3";
        return c[t] && c[t].isActive() || (t = "InstantSearchStyle3"), new c[t]
      }
    };
    e.a = u
  }, 71: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(9), a = n(41), l = n(4), s = n(2), c = n(8), u = n(6), p = n(1), f = n(3);

    function h(t) {
      return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function d(t, e) {
      return !e || "object" !== h(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function g(t) {
      return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function m(t, e) {
      return (m = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var b = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = d(this, g(e).call(this))).data = "", t.isBoundEvents = !1, t.isOpen = !1, t.inputStyle3Id = u.a.searchBoxStyle3.substr(1), t.searchBox = null, t.selector = {
          searchInput: u.a.searchBoxStyle3,
          clearButton: "." + l.a.searchSuggestionBtnClearStyle3,
          closebutton: "." + l.a.searchSuggestionBtnCloseStyle3,
          submitButton: "." + l.a.searchSuggestionBtnSubmitStyle3,
          topPanel: "." + l.a.searchSuggestion + "-style3-top-panel",
          overlay: "." + l.a.searchSuggestion + "-style3-overlay",
          searchInputs: 'input[name="' + s.a.getSettingValue("search.termKey") + '"]'
        }, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && m(t, e)
      }(e, t), n = e, o = [{
        key: "isActive", value: function () {
          return !0
        }
      }, {
        key: "tempType", get: function () {
          return {SEARCH_BTN: "search_btn", DEFAULT: "default"}
        }
      }], (i = [{
        key: "getTemplate", value: function (t) {
          switch (t) {
            case e.tempType.SEARCH_BTN:
              return '\n\t\t\t\t\t<button href="javascript:;" class="{{class.searchSuggestionBtnSubmitStyle3}}" type="submit"><span>Submit</span></button>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-style3-overlay"></div>\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-style3-top-panel">\n\t\t\t\t\t\t<form action="/search" method="get">\n            \t\t\t\t<div class="{{class.searchSuggestion}}-style3-top-panel-input-group">\n            \t\t\t\t\t{{btnSearch}}\n\t\t\t\t\t\t\t\t<input role="textbox" type="text" name="{{searchTermKey}}" placeholder="{{searchBoxPlaceholder}}" id="{{searchId}}" />\n            \t\t\t\t\t<button type="button" class="{{class.searchSuggestionBtnClearStyle3}}"><span>X</span></button>\n            \t\t\t\t</div>\n            \t\t\t\t<button type="button" class="{{class.searchSuggestionBtnCloseStyle3}}"><span><-</span></button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t'.trim()
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = "";
          return s.a.getSettingValue("search.showSearchBtnStyle3") && (t = this.getTemplate(e.tempType.SEARCH_BTN)), this.getTemplate().replace(/{{btnSearch}}/g, t).replace(/{{searchTermKey}}/g, s.a.getSettingValue("search.termKey")).replace(/{{searchBoxPlaceholder}}/g, c.a.suggestion.searchBoxPlaceholder).replace(/{{searchId}}/g, this.inputStyle3Id).replace(/{{class.searchSuggestion}}/g, l.a.searchSuggestion).replace(/{{class.searchSuggestionBtnSubmitStyle3}}/g, l.a.searchSuggestionBtnSubmitStyle3).replace(/{{class.searchSuggestionBtnCloseStyle3}}/g, l.a.searchSuggestionBtnCloseStyle3).replace(/{{class.searchSuggestionBtnClearStyle3}}/g, l.a.searchSuggestionBtnClearStyle3)
        }
      }, {
        key: "render", value: function () {
          r()("body").append(this.compileTemplate())
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvents
        }
      }, {
        key: "bindEvents", value: function () {
          this.$searchInput = r()(this.selector.searchInput), this.$clearButtonElement = r()(this.selector.clearButton), this.$closebuttonElement = r()(this.selector.closebutton), this.$submitButtonElement = r()(this.selector.submitButton), this.$topPanelElement = r()(this.selector.topPanel), this.$overlayElement = r()(this.selector.overlay), this.searchBox = new a.a(this.inputStyle3Id, this.$searchInput), this.searchBox.refresh(), this.$closebuttonElement.on("click", this.closeInstantSearchStyle3.bind(this, !0)), this.$clearButtonElement.on("click", this.clearInstantSearchStyle3.bind(this)), this.$searchInputs = r()(this.selector.searchInputs), this.$searchInputs.on("click", this._onClickSearchBox.bind(this)).on("focus", this._onFocusSearchBox.bind(this)).on("keyup", this._onTypeSearchBoxEvent.bind(this)), this.$searchInput.on("focus", this._onFocusStyle3Input.bind(this)), this.$targetInput = null, this.isBoundEvents = !0
        }
      }, {
        key: "_onClickSearchBox", value: function (t) {
          p.a.InstantSearch.isStyle3() && (this.$targetInput && this.$targetInput.val() && this.$searchInputs.val(this.$targetInput.val()), this.$searchInput && (this.$searchInput.length > 0 && "" != this.$searchInput.val() ? this.openSuggestionStyle3() : this.searchBox && this.searchBox.searchAutoComplete && this.searchBox.searchAutoComplete.enableOnClickSearchBox && (this.openSuggestionStyle3(), this.searchBox.searchAutoComplete.showOnClickSuggestion())))
        }
      }, {
        key: "_onFocusSearchBox", value: function (t) {
          if (p.a.InstantSearch.isStyle3()) {
            var e = t && t.target ? t.target.id : "", n = this.$searchInput ? this.$searchInput.attr("id") : "";
            "" != e && "" != n && e != n && (this.$targetInput = r()("#" + e), this.showSearchBoxStyle3(), this.$searchInput.trigger("click"))
          }
        }
      }, {
        key: "_onFocusStyle3Input", value: function (t) {
          var e = this;
          this.isReFocus ? (t && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault()), this.isReFocus = !1, this._onFocusSearchBox(t)) : setTimeout((function () {
            (document.activeElement && document.activeElement.id ? "#" + document.activeElement.id : "") != u.a.searchBoxStyle3 && (e.isReFocus = !0, e.$searchInput.focus())
          }), 0)
        }
      }, {
        key: "_onTypeSearchBoxEvent", value: function (t) {
          p.a.InstantSearch.isStyle3() && (this.searchBox.instantSearchResult.$wrapper.show(), "" == t.target.value ? (this.searchBox && this.searchBox.searchAutoComplete && this.searchBox.searchAutoComplete.enableOnClickSearchBox ? this.searchBox.searchAutoComplete.showOnClickSuggestion() : this.closeInstantSearchStyle3(), this.$clearButtonElement.hide()) : this.$clearButtonElement.show())
        }
      }, {
        key: "showSearchBoxStyle3", value: function () {
          var t = this;
          this.isOpen = !0, this.onClickOutsideSuggestionStyle3Event(), this.scrollSuggestionStyle3Event(), "" == this.$searchInput.val() ? this.$clearButtonElement.hide() : this.$clearButtonElement.show(), this.$searchInput.is(":focus") || (this.$topPanelElement.show(), this.$overlayElement.show(), r()('[tabindex="-1"]').removeAttr("tabindex").addClass(l.a.searchSuggestionNoTabIndex), p.a.InstantSearch.isStyle3() && r()("[data-open=true]").length > 0 && r()("[data-open=true]").attr("data-open", !1), setTimeout((function () {
            t.$searchInput.focus()
          }), 100), this.afterShowSearchBoxStyle3())
        }
      }, {
        key: "closeInstantSearchStyle3", value: function (t) {
          r()(".js-drawer-close, .search-modal__close-button, .fancybox-close-small, .drawer__close > button").trigger("click"), this.searchBox.instantSearchResult.$wrapper.hide(), (t = void 0 !== t && t) && (this.$topPanelElement.hide(), this.$overlayElement.hide()), this._setValueAllSearchBoxes(), r()("." + l.a.searchSuggestionNoTabIndex).attr("tabindex", -1), r()("body").hasClass(l.a.searchSuggestionStyle3Open) && r()("body").removeClass(l.a.searchSuggestionStyle3Open), this.afterCloseInstantSearchStyle3(t)
        }
      }, {
        key: "clearInstantSearchStyle3", value: function () {
          this.$clearButtonElement.hide(), f.a.currentTerm = "", this._setValueAllSearchBoxes(""), this.searchBox && this.searchBox.searchAutoComplete && this.searchBox.searchAutoComplete.enableOnClickSearchBox ? this.searchBox.searchAutoComplete.showOnClickSuggestion() : this.closeInstantSearchStyle3(), this.$searchInput.focus()
        }
      }, {
        key: "afterCloseInstantSearchStyle3", value: function (t) {
        }
      }, {
        key: "_setValueAllSearchBoxes", value: function (t) {
          void 0 === t && (t = f.a.currentTerm), f.a.currentTerm = t, this.$searchInputs.val(t)
        }
      }, {
        key: "onClickOutsideSuggestionStyle3Event", value: function () {
          var t = this;
          r()(document).on("touchstart", (function (e) {
            if (e.target) {
              var n = r()(e.target), i = n.closest("." + l.a.searchSuggestion + "-style3-top-panel").length > 0,
                o = n.closest("." + l.a.searchSuggestionWrapper + " div").length > 0;
              i || o || t.closeInstantSearchStyle3(!0)
            }
          }))
        }
      }, {
        key: "scrollSuggestionStyle3Event", value: function () {
          var t = this;
          r()(document).on("touchmove", (function (e) {
            t.$searchInput.is(":focus") && t.$searchInput.blur()
          }))
        }
      }, {
        key: "afterShowSearchBoxStyle3", value: function () {
        }
      }, {
        key: "openSuggestionStyle3", value: function () {
          this.beforeOpenSuggestionStyle3(), r()("body").hasClass(l.a.searchSuggestionStyle3Open) || r()("body").addClass(l.a.searchSuggestionStyle3Open), this.showSearchBoxStyle3(), this.searchBox.instantSearchResult.$wrapper.show(), this.afterOpenSuggestionStyle3()
        }
      }, {
        key: "beforeOpenSuggestionStyle3", value: function () {
        }
      }, {
        key: "afterOpenSuggestionStyle3", value: function () {
        }
      }]) && y(n.prototype, i), o && y(n, o), e
    }(o.a);
    e.a = b
  }, 72: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(9), a = n(41), l = n(4), s = n(2), c = n(8), u = n(6), p = n(1), f = n(3);

    function h(t) {
      return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function d(t, e) {
      return !e || "object" !== h(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function g(t) {
      return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function m(t, e) {
      return (m = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var b = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = d(this, g(e).call(this))).data = "", t.isBoundEvents = !1, t.isOpen = !1, t.inputMobileId = u.a.searchBoxMobile.substr(1), t.searchBox = null, t.selector = {
          searchInput: u.a.searchBoxMobile,
          clearButton: "." + l.a.searchSuggestionBtnClearMobile,
          closebutton: "." + l.a.searchSuggestionBtnCloseMobile,
          submitButton: "." + l.a.searchSuggestionBtnSubmitMobile,
          topPanel: "." + l.a.searchSuggestion + "-mobile-top-panel",
          overlay: "." + l.a.searchSuggestion + "-mobile-overlay",
          searchInputs: 'input[name="' + s.a.getSettingValue("search.termKey") + '"]'
        }, t
      }

      var n, i, o;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && m(t, e)
      }(e, t), n = e, o = [{
        key: "isActive", value: function () {
          return !0
        }
      }, {
        key: "tempType", get: function () {
          return {SEARCH_BTN: "search_btn", DEFAULT: "default"}
        }
      }], (i = [{
        key: "getTemplate", value: function (t) {
          switch (t) {
            case e.tempType.SEARCH_BTN:
              return '\n\t\t\t\t\t<a href="javascript:;" class="{{class.searchSuggestionBtnSubmitMobile}}"><span>Submit</span></a>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-mobile-overlay"></div>\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-mobile-top-panel">\n\t\t\t\t\t\t<form action="/search" method="get">\n\t\t\t\t\t\t\t<button type="button" class="{{class.searchSuggestionBtnCloseMobile}}"><-</button>\n\t\t\t\t\t\t\t{{btnSearch}}\n\t\t\t\t\t\t\t<input role="textbox" type="text" name="{{searchTermKey}}" placeholder="{{searchBoxPlaceholder}}" id="{{searchId}}" />\n\t\t\t\t\t\t\t<button role="textbox" type="button" class="{{class.searchSuggestionBtnClearMobile}}">X</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t'.trim()
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = "";
          return s.a.getSettingValue("search.showSearchBtnMobile") && (t = this.getTemplate(e.tempType.SEARCH_BTN)), this.getTemplate().replace(/{{btnSearch}}/g, t).replace(/{{searchTermKey}}/g, s.a.getSettingValue("search.termKey")).replace(/{{searchBoxPlaceholder}}/g, c.a.suggestion.searchBoxPlaceholder).replace(/{{searchId}}/g, this.inputMobileId).replace(/{{class.searchSuggestion}}/g, l.a.searchSuggestion).replace(/{{class.searchSuggestionBtnSubmitMobile}}/g, l.a.searchSuggestionBtnSubmitMobile).replace(/{{class.searchSuggestionBtnCloseMobile}}/g, l.a.searchSuggestionBtnCloseMobile).replace(/{{class.searchSuggestionBtnClearMobile}}/g, l.a.searchSuggestionBtnClearMobile)
        }
      }, {
        key: "render", value: function () {
          r()("body").append(this.compileTemplate())
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvents
        }
      }, {
        key: "bindEvents", value: function () {
          this.$searchInput = r()(this.selector.searchInput), this.$clearButtonElement = r()(this.selector.clearButton), this.$closebuttonElement = r()(this.selector.closebutton), this.$submitButtonElement = r()(this.selector.submitButton), this.$topPanelElement = r()(this.selector.topPanel), this.$overlayElement = r()(this.selector.overlay), this.searchBox = new a.a(this.inputMobileId, this.$searchInput), this.searchBox.refresh(), this.$closebuttonElement.on("click", this.closeInstantSearchMobile.bind(this, !0)), this.$clearButtonElement.on("click", this.clearInstantSearchMobile.bind(this)), this.$searchInputs = r()(this.selector.searchInputs), this.$searchInputs.on("click", this._onClickSearchBox.bind(this)).on("focus", this._onFocusSearchBox.bind(this)).on("keyup", this._onTypeSearchBoxEvent.bind(this)), this.$searchInput.on("focus", this._onFocusMobileInput.bind(this)), this.$targetInput = null, this.isBoundEvents = !0
        }
      }, {
        key: "_onClickSearchBox", value: function (t) {
          p.a.isFullWidthMobile() && (this.$targetInput && this.$targetInput.val() && this.$searchInputs.val(this.$targetInput.val()), this.$searchInput && (this.$searchInput.length > 0 && "" != this.$searchInput.val() ? this.openSuggestionMobile() : this.searchBox && this.searchBox.searchAutoComplete && this.searchBox.searchAutoComplete.enableOnClickSearchBox && (this.openSuggestionMobile(), this.searchBox.searchAutoComplete.showOnClickSuggestion())))
        }
      }, {
        key: "_onFocusSearchBox", value: function (t) {
          if (p.a.isFullWidthMobile()) {
            var e = t && t.target ? t.target.id : "", n = this.$searchInput ? this.$searchInput.attr("id") : "";
            "" != e && "" != n && e != n && (this.$targetInput = r()("#" + e), this.showSearchBoxMobile(), this.$searchInput.trigger("click"))
          }
        }
      }, {
        key: "_onFocusMobileInput", value: function (t) {
          var e = this;
          this.isReFocus ? (t && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault()), this.isReFocus = !1, this._onFocusSearchBox(t)) : setTimeout((function () {
            (document.activeElement && document.activeElement.id ? "#" + document.activeElement.id : "") != u.a.searchBoxMobile && (e.isReFocus = !0, e.$searchInput.focus())
          }), 0)
        }
      }, {
        key: "_onTypeSearchBoxEvent", value: function (t) {
          p.a.InstantSearch.isFullWidthMobile() && (this.searchBox.instantSearchResult.$wrapper.show(), "" == t.target.value ? (this.searchBox && this.searchBox.searchAutoComplete && this.searchBox.searchAutoComplete.enableOnClickSearchBox ? this.searchBox.searchAutoComplete.showOnClickSuggestion() : this.closeInstantSearchMobile(), this.$clearButtonElement.hide()) : this.$clearButtonElement.show())
        }
      }, {
        key: "showSearchBoxMobile", value: function () {
          var t = this;
          this.isOpen = !0, this.onClickOutsideSuggestionMobileEvent(), this.scrollSuggestionMobileEvent(), "" == this.$searchInput.val() ? this.$clearButtonElement.hide() : this.$clearButtonElement.show(), this.$searchInput.is(":focus") || (this.$topPanelElement.show(), this.$overlayElement.show(), r()('[tabindex="-1"]').removeAttr("tabindex").addClass(l.a.searchSuggestionNoTabIndex), p.a.isMobile() && r()("[data-open=true]").length > 0 && r()("[data-open=true]").attr("data-open", !1), setTimeout((function () {
            t.$searchInput.focus()
          }), 100), this.afterShowSearchBoxMobile())
        }
      }, {
        key: "closeInstantSearchMobile", value: function (t) {
          this.searchBox.instantSearchResult.$wrapper.hide(), (t = void 0 !== t && t) && (this.$topPanelElement.hide(), this.$overlayElement.hide()), this._setValueAllSearchBoxes(), r()("." + l.a.searchSuggestionNoTabIndex).attr("tabindex", -1), r()("body").hasClass(l.a.searchSuggestionMobileOpen) && r()("body").removeClass(l.a.searchSuggestionMobileOpen), this.afterCloseInstantSearchMobile(t)
        }
      }, {
        key: "clearInstantSearchMobile", value: function () {
          this.$clearButtonElement.hide(), f.a.currentTerm = "", this._setValueAllSearchBoxes(""), this.searchBox && this.searchBox.searchAutoComplete && this.searchBox.searchAutoComplete.enableOnClickSearchBox ? this.searchBox.searchAutoComplete.showOnClickSuggestion() : this.closeInstantSearchMobile(), this.$searchInput.focus()
        }
      }, {
        key: "afterCloseInstantSearchMobile", value: function (t) {
        }
      }, {
        key: "_setValueAllSearchBoxes", value: function (t) {
          void 0 === t && (t = f.a.currentTerm), f.a.currentTerm = t, this.$searchInputs.val(t)
        }
      }, {
        key: "onClickOutsideSuggestionMobileEvent", value: function () {
          var t = this;
          r()(document).on("touchstart", (function (e) {
            if (e.target) {
              var n = r()(e.target), i = n.closest("." + l.a.searchSuggestion + "-mobile-top-panel").length > 0,
                o = n.closest("." + l.a.searchSuggestionWrapper + " div").length > 0;
              i || o || t.closeInstantSearchMobile(!0)
            }
          }))
        }
      }, {
        key: "scrollSuggestionMobileEvent", value: function () {
          var t = this;
          r()(document).on("touchmove", (function (e) {
            t.$searchInput.is(":focus") && t.$searchInput.blur()
          }))
        }
      }, {
        key: "afterShowSearchBoxMobile", value: function () {
        }
      }, {
        key: "openSuggestionMobile", value: function () {
          this.beforeOpenSuggestionMobile(), r()("body").hasClass(l.a.searchSuggestionMobileOpen) || r()("body").addClass(l.a.searchSuggestionMobileOpen), this.showSearchBoxMobile(), this.searchBox.instantSearchResult.$wrapper.show(), this.afterOpenSuggestionMobile()
        }
      }, {
        key: "beforeOpenSuggestionMobile", value: function () {
        }
      }, {
        key: "afterOpenSuggestionMobile", value: function () {
        }
      }]) && y(n.prototype, i), o && y(n, o), e
    }(o.a);
    e.a = b
  }, 8: function (t, e, n) {
    "use strict";
    var i = n(1), r = n(2), o = function (t, e, n) {
      return boostPFSConfig.hasOwnProperty(t) && boostPFSConfig[t].hasOwnProperty(e) ? boostPFSConfig[t][e] : n
    }, a = {
      productFilter: "Product filter",
      refine: "Refine By",
      refineMobile: "Refine By",
      refineMobileCollapse: "Hide Filter",
      clear: "Clear",
      clearAll: "Clear All",
      apply: "Apply",
      applyAll: "Apply All",
      close: "Close",
      back: "Back",
      loadMore: "Load more {{ amountProduct }} Products",
      loadMoreTotal: "{{ from }} - {{ to }} of {{ total }} Products",
      loadPreviousPage: "Load Previous Page",
      searchOptions: "Search options",
      collectionAll: "All",
      viewMore: "View More",
      viewLess: "View Less",
      under: "Under",
      above: "Above",
      ratingStar: "Star",
      ratingStars: "Stars",
      ratingUp: "& Up",
      showResult: "Show Results",
      showLimit: "Show",
      sortingList: {
        "best-selling": "Best Selling",
        manual: "Featured",
        "price-ascending": "Lowest Price",
        "price-descending": "Highest Price",
        "title-ascending": "Alphabetically, A-Z",
        "title-descending": "Alphabetically, Z-A",
        "created-descending": "Date, New to Old",
        "created-ascending": "Date, Old to New",
        "published-descending": "Date, New to Old",
        "published-ascending": "Date, Old to New",
        "sale-descending": "% Off",
        relevance: "Relevance"
      },
      search: {
        generalTitle: "Search",
        resultHeader: 'Search Results for "{{ terms }}"',
        resultEmpty: 'Sorry, nothing found for "{{ terms }}". Check out other items in our store.',
        resultEmptyWithSuggestion: 'Sorry, nothing found for "{{ terms }}". Check out these items instead?',
        resultNumber: 'Showing {{ count }} results for "{{ terms }}"',
        searchTotalResult: "Showing {{ count }} result",
        searchTotalResults: "Showing {{ count }} results",
        seeAllProducts: "See all products →"
      },
      suggestion: {
        placeholder: "Search",
        popularHeader: "Popular Suggestions",
        productHeader: "Products",
        didYouMeanHeader: "Did you mean",
        viewAll: "View all {{ count }} products",
        suggestQuery: 'Showing {{ count }} results for "{{ terms }}".',
        didYouMean: "Did you mean: {{ terms }}",
        searchBoxPlaceholder: "Search"
      },
      error: {
        noFilterResult: "Sorry, no products matched your selection",
        noSearchResult: "Sorry, no products matched the keyword",
        noProducts: "No products found in this collection",
        noSuggestionProducts: 'Sorry, nothing found for "{{ terms }}".',
        noSuggestionResult: 'Sorry, nothing found for "{{ terms }}".'
      },
      action_list: {
        qvBtnLabel: "Quick View",
        qvAddToCartBtnLabel: "Add To Cart",
        qvSoldOutLabel: "Sold Out",
        qvSaleLabel: "Sale",
        qvQtyLeftLabel: "Hurry, there are only {{item}} item(s) left!",
        qvNotifyMeSuccessfullyLabel: "Thanks! We will notify you when this product becomes available!",
        qvNotifyMeErrorLabel: "Please provide a valid email address.",
        qvNotifyMeMessageLabel: "Notify me when {{item}} becomes available",
        qvNotifyMeFormBodyLabel: "Please notify me when {{item}} becomes available.",
        atcAvailableLabel: "Add To Cart",
        atcSelectOptionsLabel: "Select Options",
        atcSoldOutLabel: "Sold Out",
        atcAddingToCartBtnLabel: "Adding...",
        atcAddedToCartBtnLabel: "Added!",
        atcPopupAddedToCartLabel: "has been added to shopping cart",
        atcPopupSubtotalLabel: "Cart Subtotal",
        atcPopupCheckoutLabel: "Checkout",
        atcPopupGoToCartLabel: "Your Cart",
        atcPopupTotalItemsLabel: "items",
        atcPopupCrossSellHeadingLabel: "Frequently bought with",
        atcMiniCartCountItemLabel: "item",
        atcMiniCartCountItemLabelPlural: "items",
        atcMiniCartTotalItemsLabel: "Total Items",
        atcMiniCartSubtotalLabel: "Subtotal",
        atcMiniCartCheckoutLabel: "Checkout",
        atcMiniCartViewCartLabel: "View cart",
        atcMiniCartEmptyCartLabel: "Your Cart Is Currently Empty",
        atcMiniCartRemoveItemLabel: "Remove This Item",
        atcMiniCartShopingCartLabel: "Your cart"
      },
      mostPopular: {popularProductsHeading: "Popular products"},
      recentlyViewed: {recentProductHeading: "Recently viewed products"},
      ada: {
        searchAutoComplete: "When autocomplete results are available use up and down arrows to review and enter to select",
        toggleMultiLevel: "Expand/Collapse {{filterItem}}",
        filterOption: "Filter by {{filterOption}}",
        clearFilterOption: "Clear filter by {{filterOption}}",
        clearFilterItem: "Clear filter by {{filterOption}} {{filterItem}}",
        clearAllFilterItems: "Clear all filters",
        filterOptionTitle: "Filter by {{filterOption}}",
        minValue: "Min value",
        maxValue: "Max value",
        productCount: "Number of products: {{count}}",
        closeQuickViewSelectOption: "Close select option"
      },
      init: function () {
        var t = {
          refine: o("label", "refine", "Refine By"),
          refineMobile: o("label", "refine_mobile", "Refine By"),
          refineMobileCollapse: o("label", "refine_mobile_collapse", "Hide Filter"),
          clear: o("label", "clear", "Clear"),
          clearAll: o("label", "clear_all", "Clear All"),
          apply: o("label", "apply", "Apply"),
          applyAll: o("label", "apply_all", "Apply All"),
          close: o("label", "close", "Close"),
          loadMore: o("label", "load_more", "Load more {{ amountProduct }} Products"),
          loadMoreTotal: o("label", "load_more_total", "{{ from }} - {{ to }} of {{ total }} Products"),
          loadPreviousPage: o("label", "load_previous_page", "Load Previous Page"),
          searchOptions: "Search options",
          collectionAll: "All",
          viewMore: "View More",
          viewLess: "View Less",
          under: "Under",
          above: "Above",
          ratingStar: "Star",
          ratingStars: "Stars",
          ratingUp: "& Up",
          showResult: "Show Results",
          showLimit: "Show",
          sortingList: {
            "best-selling": o("label", "sorting_best_selling", "Best Selling"),
            manual: o("label", "sorting_featured", "Featured"),
            "price-ascending": o("label", "sorting_price_ascending", "Lowest Price"),
            "price-descending": o("label", "sorting_price_descending", "Highest Price"),
            "title-ascending": o("label", "sorting_title_ascending", "Alphabetically, A-Z"),
            "title-descending": o("label", "sorting_title_descending", "Alphabetically, Z-A"),
            "created-descending": o("label", "sorting_date_descending", "Date, New to Old"),
            "created-ascending": o("label", "sorting_date_ascending", "Date, Old to New"),
            "published-descending": o("label", "sorting_date_descending", "Date, New to Old"),
            "published-ascending": o("label", "sorting_date_ascending", "Date, Old to New"),
            "sale-descending": o("label", "sorting_sale_descending", "% Off"),
            relevance: o("label", "sorting_relevance", "Relevance")
          },
          search: {
            seoTitleOne: o("label", "search_seo_title_one", "Search result: {{ count }} result for &quot;{{ terms }}&quot;"),
            seoTitleOther: o("label", "search_seo_title_other", "Search results: {{ count }} results for &quot;{{ terms }}&quot;"),
            generalTitle: o("label", "search_general_title", "Search"),
            resultHeader: o("label", "search_result_header", 'Search Results for "{{ terms }}"'),
            resultEmpty: o("label", "search_result_empty", 'Sorry, nothing found for "{{ terms }}". Check out other items in our store.'),
            resultNumber: o("label", "search_result_number", 'Showing {{ count }} results for "{{ terms }}"'),
            searchTotalResult: o("label", "search_total_result_one", "Showing {{ count }} result"),
            searchTotalResults: o("label", "search_total_result_other", "Showing {{ count }} results")
          },
          suggestion: {
            placeholder: o("label_suggestion", "suggestion_placeholder", "Search"),
            popularHeader: o("label_suggestion", "suggestion_popular_header", "Popular Suggestions"),
            productHeader: o("label_suggestion", "suggestion_product_header", "Products"),
            didYouMeanHeader: o("label_suggestion", "suggestion_did_you_mean_header", "Did you mean"),
            viewAll: o("label_suggestion", "suggestion_view_all", "View all {{ count }} products"),
            suggestQuery: o("label_suggestion", "suggestion_suggest_query", 'Showing {{ count }} results for "{{ terms }}".'),
            didYouMean: o("label_suggestion", "suggestion_did_you_mean", "Did you mean: {{ terms }}"),
            searchBoxPlaceholder: o("label_suggestion", "suggestion_placeholder", "Search")
          },
          error: {
            noFilterResult: o("label_error", "error_no_filter_result", "Sorry, no products matched your selection"),
            noSearchResult: o("label_error", "error_no_search_result", "Sorry, no products matched the keyword"),
            noProducts: o("label_error", "error_no_products", "No products found in this collection"),
            noSuggestionProducts: 'Sorry, nothing found for "{{ terms }}".',
            noSuggestionResult: 'Sorry, nothing found for "{{ terms }}".'
          }
        }, e = i.a.mergeObject(a, t);
        void 0 !== r.a.label && (e = i.a.mergeObject(e, r.a.label)), a = e
      }
    };
    e.a = a
  }, 80: function (t, e, n) {
    "use strict";
    n.r(e);
    n(23), n(10), n(93), n(94), n(147), n(208), n(44), n(11), n(24), n(12);
    var i = n(0), r = n.n(i), o = n(3), a = n(2), l = n(1), s = n(36), c = n(64), u = n(41),
      p = function t(e, n, i, o) {
        n = void 0 !== n ? n : 0, o = void 0 !== o ? o : "";
        var a = h(e, i);
        a.q && (e = a.q, delete a.q), "" != o && (a.prev_query = o);
        var l = document.createElement("script");
        l.type = "text/javascript", l.src = s.a.getApiUrl("suggestion") + "?q=" + e + "&" + r.a.param(a), l.async = !0, l.addEventListener("error", (function (e) {
          r()(this).remove(), n < 3 ? (n++, t(a.q, i, o, n)) : u.a.disableInstantSearch()
        })), document.getElementsByTagName("head")[0].appendChild(l), l.addEventListener("load", (function (t) {
          r()(this).remove()
        }))
      }, f = function (t) {
        var e = o.a.suggestionCache;
        if (t.hasOwnProperty("prev_query")) {
          var n = t.prev_query;
          if (e.hasOwnProperty(n)) {
            var i, r = e[n], a = ["collections", "did_you_mean", "pages", "suggest_query"], s = a.length;
            for (i = 0; i < s; i++) t[a[i]] = l.a.getValueInObjectArray(a[i], r);
            t.prev_total_product = l.a.getValueInObjectArray("total_product", r), r[l.a.findIndexArray("products", r, "key")].values = t.products, r[l.a.findIndexArray("suggestions", r, "key")].values = t.suggestions, r.push({
              key: "local_cache",
              values: !0
            }), r.push({key: "suggest_total_product", values: t.total_product}), o.a.suggestionCache[n] = r
          }
        }
        window.suggestionCallback(Object.keys(t).map((function (e) {
          return {key: e, values: t[e]}
        })))
      }, h = function (t, e) {
        var n = {};
        n.shop = o.a.shopDomain, n.t = (new Date).getTime(), a.a.getSettingValue("search.enableDefaultResult") || (n.enable_default_result = !1);
        var i = a.a.getSettingValue("search.enableFuzzy");
        !0 !== i && (n.fuzzy = i), a.a.getSettingValue("search.fullMinMatch") && (n.full_min_match = !0), !1 !== a.a.getSettingValue("search.reduceMinMatch") && (n.reduce_min_match = a.a.getSettingValue("search.reduceMinMatch")), a.a.getSettingValue("search.enablePlusCharacterSearch") && (n.enable_plus_character_search = !0), 1 == a.a.getSettingValue("search.productAvailable") && (n.product_available = !0);
        var r, l = a.a.getSettingValue("search.suggestionBlocks"), u = l.length;
        for (r = 0; r < u; r++) {
          n[l[r].type.slice(0, -1) + "_limit"] = l[r].number
        }
        n.dym_limit = a.a.getSettingValue("search.suggestionDymLimit");
        var p = a.a.getSettingValue("search.skipFields");
        p.length > 0 && (param.skipFields = p), n.callback = "BoostPFSInstantSearchCallback", n.event_type = e;
        var f = "suggest_dym" == e ? ["products", "suggestions"] : a.a.getSettingValue("search.suggestionTypes");
        return n.suggest_types = f, n = s.a.setApiLocaleParams(n), (n = s.a.setShopifyMultiCurrencyParams(n)).sid = c.a.getSessionId(), Object.assign(n, o.a.instantSearchQueryParams)
      }, y = {
        BoostPFSInstantSearchCallback: function (t) {
          y.setDefaultValueForExcludedFields(t), "function" == typeof y.afterCall && y.afterCall(t), "function" != typeof y.afterCallAsync ? f(t) : y.afterCallAsync(t, f)
        },
        getSuggestionData: function (t, e, n, i) {
          if ("function" == typeof y.beforeCall && y.beforeCall(t), "function" != typeof y.beforeCallAsync) p(t, 0, n, i); else {
            y.beforeCallAsync(t, (function () {
              p(t, 0, n, i)
            }))
          }
        },
        prepareSuggestionParams: h,
        setDefaultValueForExcludedFields: function (t) {
          if (Array.isArray(t.products)) {
            var e = (new Date).toISOString();
            t.products.forEach((function (t) {
              t.hasOwnProperty("variants") || (t.variant = []), t.hasOwnProperty("images_info") || (t.images_info = []), t.hasOwnProperty("collections") || (t.collections = []), t.hasOwnProperty("tags") || (t.tags = []), t.hasOwnProperty("skus") || (t.skus = []), t.hasOwnProperty("options_with_values") || (t.options_with_values = []), t.hasOwnProperty("barcodes") || (t.barcodes = []), t.hasOwnProperty("created_at") || (t.created_at = e), t.hasOwnProperty("updated_at") || (t.updated_at = e), t.hasOwnProperty("published_at") || (t.published_at = e)
            }))
          }
        },
        callInstantSearchApi: p,
        callbackInstantSearchApi: f,
        beforeCall: null,
        afterCall: null,
        beforeCallAsync: null,
        afterCallAsync: null
      };
    e.default = y
  }, 81: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(111), n(26), n(23), n(39), n(10), n(17), n(18), n(11), n(21), n(45), n(13), n(22), n(20), n(24), n(12);
    var i = n(0), r = n.n(i), o = n(2), a = n(1), l = n(4), s = n(19), c = n(65), u = n(42), p = n(9), f = n(114),
      h = n(119), y = n(120), d = n(121);

    function g(t) {
      return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function m(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function b(t, e) {
      return !e || "object" !== g(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function v(t) {
      return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function S(t, e) {
      return (S = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var O = function (t) {
      function e(t, n) {
        var i;
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = b(this, v(e).call(this))).searchInputId = t, i.isLoading = !1, i.isFirstLoad = !0, i.blocks = [], i.onClickBlocks = [], i.loadingBlock = null;
        var r = "." + l.a.searchSuggestionWrapper + '[data-search-box-id="' + i.searchInputId + '"]';
        return i.selector = {
          wrapper: r,
          popover: r + " ." + l.a.searchSuggestion + "-popover",
          loading: r + " ." + l.a.searchSuggestion + "-loading"
        }, i.$searchInputElement = n, i.$instantSearchResult = null, i.$wrapper = null, i.$popoverElement = null, i.$loadingElement = null, i.suggestionDirection = i._getSuggestionDirection(), i.position = "", i
      }

      var n, i, p;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && S(t, e)
      }(e, t), n = e, p = [{
        key: "isActive", value: function () {
          return !0
        }
      }], (i = [{
        key: "init", value: function () {
          var t = this;
          this.loadingBlock = new y.a, this.addComponent(this.loadingBlock), this.blockSettings = o.a.getSettingValue("search.suggestionBlocks"), this.onClickBlocks = u.a.getOnClickBlockSettings(), this.blockSettings = this.onClickBlocks.concat(this.blockSettings), this.noResultBlocks = c.a.getNoResultBlockSettings(), this.blockSettings = this.blockSettings.concat(this.noResultBlocks), this._applyFilterBlockSettings(), this.blockSettings.forEach((function (e) {
            var n = new f.a(e);
            t.addComponent(n), t.blocks.push(n)
          }));
          var e = new h.a;
          this.addComponent(e), this.blockViewAll = e;
          var n = new d.a;
          this.addComponent(n), this.blockEmpty = n, c.a.getNoResultData(), u.a.getOnClickData()
        }
      }, {
        key: "getTemplate", value: function () {
          return '\n\t\t\t<div class="{{class.searchSuggestionWrapper}}" id="{{searchSuggestionId}}" data-search-box-id="{{searchInputId}}" role="listbox">\n\t\t\t\t<div class="{{class.searchSuggestion}}-popover" data-direction="{{suggestionDirection}}"></div>\n\t\t\t</div>\n\t\t'.trim()
        }
      }, {
        key: "compileTemplate", value: function () {
          var t = "";
          if ("style1" === o.a.getSettingValue("search.suggestionStyle")) {
            var e = "grid" === o.a.getSettingValue("search.suggestionStyle1ProductItemType") ? 3 : 1;
            t = l.a.searchSuggestionWrapper + " " + l.a.searchSuggestion + "-column-1 " + l.a.searchSuggestion + "-product-position-none " + l.a.searchSuggestion + "-product-item-type-" + o.a.getSettingValue("search.suggestionStyle1ProductItemType") + " " + l.a.searchSuggestion + "-products-per-row-" + e
          } else if ("style2" === o.a.getSettingValue("search.suggestionStyle")) {
            var n = "grid" === o.a.getSettingValue("search.suggestionStyle2ProductItemType") ? 3 : o.a.getSettingValue("search.suggestionStyle2ProductPerRow");
            t = l.a.searchSuggestionWrapper + " " + l.a.searchSuggestion + "-column-2-non-fullwidth " + l.a.searchSuggestion + "-product-position-" + o.a.getSettingValue("search.suggestionStyle2ProductPosition") + " " + l.a.searchSuggestion + "-product-item-type-" + o.a.getSettingValue("search.suggestionStyle2ProductItemType") + " " + l.a.searchSuggestion + "-products-per-row-" + n
          } else if ("style3" === o.a.getSettingValue("search.suggestionStyle")) {
            var i = "grid" === o.a.getSettingValue("search.suggestionStyle3ProductItemType") ? 4 : o.a.getSettingValue("search.suggestionStyle3ProductPerRow");
            t = l.a.searchSuggestionWrapper + " " + l.a.searchSuggestion + "-column-2-overlay-fullwidth " + l.a.searchSuggestion + "-product-position-" + o.a.getSettingValue("search.suggestionStyle3ProductPosition") + " " + l.a.searchSuggestion + "-product-item-type-" + o.a.getSettingValue("search.suggestionStyle3ProductItemType") + " " + l.a.searchSuggestion + "-products-per-row-" + i
          } else {
            console.log(o.a.getSettingValue("search.suggestionProductItemType"), "123");
            var r = "grid" === o.a.getSettingValue("search.suggestionProductItemType") ? 3 : o.a.getSettingValue("search.suggestionProductItemPerRow");
            t = l.a.searchSuggestionWrapper + " " + l.a.searchSuggestion + "-column-" + o.a.getSettingValue("search.suggestionColumn") + " " + l.a.searchSuggestion + "-product-position-" + o.a.getSettingValue("search.suggestionProductPosition") + " " + l.a.searchSuggestion + "-product-item-type-" + o.a.getSettingValue("search.suggestionProductItemType") + " " + l.a.searchSuggestion + "-products-per-row-" + r
          }
          return this.getTemplate().replace(/{{searchSuggestionId}}/g, this.searchInputId.replace(l.a.searchBox, l.a.searchSuggestion)).replace(/{{searchInputId}}/g, this.searchInputId).replace(/{{suggestionDirection}}/g, this.suggestionDirection).replace(/{{class.searchSuggestionWrapper}}/g, t).replace(/{{class.searchSuggestion}}/g, l.a.searchSuggestion)
        }
      }, {
        key: "_applyFilterBlockSettings", value: function () {
        }
      }, {
        key: "render", value: function () {
          if (this.isFirstLoad) {
            var t = this.compileTemplate();
            this.appendToSelector = "body", this._applyFilterAutocompleteAppendElement(), r()(this.appendToSelector).append(t), this.$wrapper = r()(this.selector.wrapper), this.$popoverElement = r()(this.selector.popover), this.isFirstLoad = !1
          } else this.$instantSearchResult.siblings().show(), this.isLoading ? (this._renderSuggestionLoading(), this._renderWrapper()) : (this._renderWrapper(), this._renderSuggestion())
        }
      }, {
        key: "isBindEvents", value: function () {
          return !this.isBoundEvent
        }
      }, {
        key: "bindEvents", value: function () {
          window.addEventListener("resize", this._setSuggestionPosition.bind(this))
        }
      }, {
        key: "_applyFilterAutocompleteAppendElement", value: function () {
        }
      }, {
        key: "_renderWrapper", value: function () {
          var t = a.a.InstantSearch.isFullWidthMobile() ? l.a.searchSuggestionMobile : "";
          "" !== t && this.$wrapper.addClass(t);
          var e = this._setSuggestionPosition();
          e.setSuggetionPosition(), e.setSuggetionPopoverPosition();
          var n = "";
          n = "auto" == o.a.getSettingValue("search.suggestionWidth") || a.a.isMobile() ? this.$searchInputElement[0].getBoundingClientRect().width : o.a.getSettingValue("search.suggestionWidth"), this.$wrapper.css({width: n})
        }
      }, {
        key: "_setSuggestionPosition", value: function () {
          var t = this, e = this.$searchInputElement[0].getBoundingClientRect(),
            n = a.a.InstantSearch.isFullWidthMobile() ? e.bottom + window.scrollY : e.bottom + window.scrollY + 12,
            i = "", l = "", s = "", c = o.a.getSettingValue("search.suggestionMaxHeight");
          c + n > r()(window).height() && (c = r()(window).height() - n - 30);
          var u = c + "px";
          if ("left" == this.suggestionDirection) {
            i = n + "px", l = e.left + "px", a.a.isMobile() ? this.$wrapper.css({
              top: i,
              right: "10px",
              left: "10px"
            }) : this.$wrapper.css({top: i, left: l});
            var p = function () {
              t.$instantSearchResult.css({top: "0px", left: "0px", "max-height": u})
            }, f = function () {
              t.$popoverElement.css({top: "-20px", left: "20px"})
            }
          } else i = n + "px", s = window.innerWidth - e.right + "px", a.a.isMobile() ? this.$wrapper.css({
            top: i,
            right: "10px",
            left: "10px"
          }) : this.$wrapper.css({top: i, right: s}), p = function () {
            t.$instantSearchResult.css({top: "0px", right: "0px", "max-height": u})
          }, f = function () {
            t.$popoverElement.css({top: "-20px", right: "20px"})
          };
          return {setSuggetionPosition: p, setSuggetionPopoverPosition: f}
        }
      }, {
        key: "_renderSuggestion", value: function () {
          if (this.$instantSearchResult && this.$instantSearchResult.attr("data-search-box", this.id), this.data) {
            var t = [], e = a.a.getValueInObjectArray(s.a.ResultType.ALL_EMPTY, this.data) && !this.hasRedirectData,
              n = a.a.getValueInObjectArray(s.a.ResultType.SUGGEST_QUERY, this.data),
              i = a.a.getValueInObjectArray(s.a.ResultType.DID_YOU_MEAN, this.data);
            !e || n || i && 0 != i.length ? (this.blocks.forEach((function (e) {
              t.push(e.$element)
            })), t.push(this.blockViewAll.$element)) : this.blockEmpty.$element ? (!a.a.isMobile() && this.blockEmpty.isEmptyWithSuggestion || t.push(this.blockEmpty.$element), this.blocks.forEach((function (e) {
              t.push(e.$element)
            }))) : this.$wrapper.hide();
            var r = "style1" == o.a.getSettingValue("search.suggestionStyle") && "1" != o.a.getSettingValue("search.suggestionColumn"),
              c = "style2" == o.a.getSettingValue("search.suggestionStyle") || "style3" == o.a.getSettingValue("search.suggestionStyle");
            if (a.a.isMobile() || !r && !c ? this._renderSuggestionOneColumn(t) : this._renderSuggestionTwoColumn(t), e && this.blockEmpty.$element && this.blockEmpty.isEmptyWithSuggestion && !a.a.isMobile()) {
              var u = this.$instantSearchResult.find("[data-group=no_result_products]"),
                p = this.$instantSearchResult.find("[data-group=no_result_suggestions]");
              u.length > 0 ? u.find("." + l.a.searchSuggestionHeader).after(this.blockEmpty.$element) : p.length > 0 && p.find("." + l.a.searchSuggestionHeader).after(this.blockEmpty.$element)
            }
          }
        }
      }, {
        key: "_renderSuggestionOneColumn", value: function (t) {
          var e = this;
          t.forEach((function (t) {
            e.$instantSearchResult.append(t)
          }))
        }
      }, {
        key: "_renderSuggestionTwoColumn", value: function (t) {
          var e = this, n = r()('<div class="' + l.a.searchSuggestion + '-groups-pro"></div>'),
            i = r()('<div class="' + l.a.searchSuggestion + '-groups-others"></div>');
          t.forEach((function (t) {
            e.$instantSearchResult.append(i).append(n);
            var r = void 0 !== t.data ? t.data("group") : "";
            void 0 === r && (r = ""), r.includes("products") || "view-all" == r || "empty" == r ? n.append(t) : i.append(t)
          })), "" == n.html().trim() ? i.addClass(l.a.searchSuggestion + "-no-products") : i.removeClass(l.a.searchSuggestion + "-no-products"), "" == i.html().trim() ? n.addClass(l.a.searchSuggestion + "-no-others") : n.removeClass(l.a.searchSuggestion + "-no-others"), this.$instantSearchResult.append(i).append(n)
        }
      }, {
        key: "_renderSuggestionLoading", value: function () {
          this.loadingBlock.$element && !r()(this.selector.loading).length && (this.$instantSearchResult.children().hide(), this.$instantSearchResult.prepend(this.loadingBlock.$element), this.$loadingElement = r()(this.selector.loading), this.$wrapper.addClass(l.a.searchSuggestionOpen), this.$instantSearchResult.show(), this.$loadingElement.show())
        }
      }, {
        key: "_getSuggestionDirection", value: function () {
          var t = o.a.getSettingValue("search.suggestionPosition");
          if ("" != t) return t;
          var e = r()(window).width() / 2;
          return this.$searchInputElement.offset().left < e ? "left" : "right"
        }
      }, {
        key: "setData", value: function (t, e, n) {
          var i = this;
          if (this.$instantSearchResult = t, this.data = e, this.isLoading = n, this.data) {
            this.setRedirectData();
            var r = a.a.getValueInObjectArray(s.a.ResultType.ALL_EMPTY, this.data) && !this.hasRedirectData,
              o = a.a.getValueInObjectArray(s.a.ResultType.SUGGEST_QUERY, this.data),
              l = a.a.getValueInObjectArray(s.a.ResultType.DID_YOU_MEAN, this.data);
            this.blocks.forEach((function (t) {
              var e = a.a.getValueInObjectArray(t.type, i.data);
              if (r && !o && (!l || 0 == l.length)) {
                var n = c.a.getNoResultData()[t.type];
                n && (e = n)
              }
              t.setData(e, r)
            })), this.blockEmpty.setData(this.data), this.blockViewAll.setData(this.data)
          }
        }
      }, {
        key: "setRedirectData", value: function () {
          if (this.redirectData = a.a.getValueInObjectArray(s.a.ResultType.REDIRECT, this.data), this.searchQuery = a.a.getValueInObjectArray(s.a.ResultType.QUERY, this.data), this.hasRedirectData = !1, this.redirectData && this.searchQuery) {
            var t = a.a.getValueInObjectArray(s.a.ResultType.SUGGESTIONS, this.data);
            Array.isArray(t) && (t.includes(this.searchQuery) || t.unshift(this.searchQuery), this.hasRedirectData = !0)
          }
        }
      }]) && m(n.prototype, i), p && m(n, p), e
    }(p.a);
    e.a = O
  }, 82: function (t, e, n) {
    "use strict";
    n(14), n(15), n(16), n(10), n(17), n(18), n(11), n(21), n(13), n(22), n(20), n(12);
    var i = n(0), r = n.n(i), o = n(1), a = n(4), l = n(2), s = n(3);

    function c(t) {
      return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function u(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function p(t, e) {
      return !e || "object" !== c(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function f(t) {
      return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function h(t, e) {
      return (h = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }

    var y = function (t) {
      function e() {
        var t;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (t = p(this, f(e).call(this))).id = "", t.title = "", t.imageUrl = "", t.url = "", t.sku = "", t.label = "", t.vendor = "", t.isShow = !1, t
      }

      var n, i, c;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && h(t, e)
      }(e, t), n = e, c = [{
        key: "tempType", get: function () {
          return {SKU: "sku", VENDOR: "vendor", IMAGE: "thumb", PRICE: "regular_price", PRICE_SALE: "sale_price"}
        }
      }], (i = [{
        key: "getTemplate", value: function (t) {
          switch (t) {
            case e.tempType.IMAGE:
              return '\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-left">\n\t\t\t\t\t\t<img tabindex="-1" src="{{imageUrl}}" alt="{{escapedTitle}}">\n\t\t\t\t\t</div>\n\t\t\t\t'.trim();
            case e.tempType.SKU:
              return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-sku">SKU: {{sku}}</p>\n\t\t\t\t'.trim();
            case e.tempType.VENDOR:
              return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-vendor">{{vendor}}</p>\n\t\t\t\t'.trim();
            case e.tempType.PRICE:
              return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-price">\n\t\t\t\t\t\t<span class="{{class.searchSuggestion}}-product-regular-price">{{regularPrice}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t'.trim();
            case e.tempType.PRICE_SALE:
              return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-price">\n\t\t\t\t\t\t<s>{{compareAtPrice}}</s>&nbsp;\n\t\t\t\t\t\t<span class="{{class.searchSuggestion}}-product-sale-price">{{regularPrice}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t'.trim();
            default:
              return '\n\t\t\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchSuggestionItem}}-product {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedTitle}}" data-id="{{id}}" role="option">\n\t\t\t\t\t\t<a tabindex="-1" href="{{url}}" {{newTabAttribute}}>\n\t\t\t\t\t\t\t{{itemProductImage}}\n\t\t\t\t\t\t\t<div class="{{class.searchSuggestion}}-right">\n\t\t\t\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-title">{{title}}</p>\n\t\t\t\t\t\t\t\t{{itemProductSku}}\n\t\t\t\t\t\t\t\t{{itemProductVendor}}\n\t\t\t\t\t\t\t\t{{itemProductPrice}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t'.trim()
          }
        }
      }, {
        key: "compileTemplate", value: function () {
          if (this.isShow) {
            var t = o.a.escape(s.a.currentTerm), n = "";
            l.a.getSettingValue("search.showSuggestionProductImage") && this.imageUrl.length && (n = (n = this.getTemplate(e.tempType.IMAGE)).replace(/{{imageUrl}}/g, this.imageUrl));
            var i = this.customizeProductTitle();
            i = this._highlightSuggestionResult(i, t);
            var r = "";
            l.a.getSettingValue("search.showSuggestionProductSku") && this.sku.length && (r = (r = this.getTemplate(e.tempType.SKU)).replace(/{{sku}}/g, this.sku));
            var c = "";
            l.a.getSettingValue("search.showSuggestionProductVendor") && this.vendor.length && (c = (c = this.getTemplate(e.tempType.VENDOR)).replace(/{{vendor}}/g, this.vendor));
            var u = this.compileSuggestionProductPrice(),
              p = l.a.getSettingValue("search.openProductNewTab") ? 'target="_blank"' : "";
            return this.getTemplate().replace(/{{id}}/g, this.id).replace(/{{escapedBlockType}}/g, o.a.escape(this.parent.type)).replace(/{{url}}/g, this.url).replace(/{{newTabAttribute}}/g, p).replace(/{{itemProductImage}}/g, n).replace(/{{title}}/g, i).replace(/{{escapedTitle}}/g, o.a.escape(i)).replace(/{{itemProductSku}}/g, r).replace(/{{itemProductVendor}}/g, c).replace(/{{itemProductPrice}}/, u).replace(/{{class.searchSuggestion}}/g, a.a.searchSuggestion).replace(/{{class.searchSuggestionItem}}/g, a.a.searchSuggestionItem).replace(/{{class.searchUiAutocompleteItem}}/g, a.a.searchUiAutocompleteItem)
          }
          return ""
        }
      }, {
        key: "render", value: function () {
          if (this.isShow) {
            this.$element = r()(this.compileTemplate());
            var t = o.a.escape(this.parent.type), e = o.a.escape(this.title);
            this.$element.data("ui-autocomplete-item", {label: t + ": " + e, value: e})
          } else this.$element = null
        }
      }, {
        key: "setData", value: function (t) {
          t ? (this.data = t, this.id = t.id, this.title = t.title, this.imageUrl = t.images_info.length > 0 ? o.a.optimizeImage(t.images_info[0].src, "200x") : boostPFSConfig.general.no_image_url, this.url = o.a.buildProductItemUrl(t, !1), this.sku = t.skus && t.skus.length > 0 ? t.skus[0] : "", this.label = t.label, this.vendor = t.vendor, this.isShow = !0) : (this.data = null, this.id = "", this.title = "", this.imageUrl = "", this.url = "", this.sku = "", this.label = "", this.vendor = "", this.isShow = !1)
        }
      }, {
        key: "compileSuggestionProductPrice", value: function () {
          this.prepareSuggestionProductPriceData();
          var t = this.data.compare_at_price_min > this.data.price_min, n = o.a.formatMoney(this.data.price_min),
            i = "";
          this.data && this.data.compare_at_price_min && (i = o.a.formatMoney(this.data.compare_at_price_min), l.a.getSettingValue("search.removePriceDecimal") && (n = o.a.removeDecimal(n), i = o.a.removeDecimal(i)));
          var r = "";
          return l.a.getSettingValue("search.showSuggestionProductPrice") && (r = t && l.a.getSettingValue("search.showSuggestionProductSalePrice") ? this.getTemplate(e.tempType.PRICE_SALE) : this.getTemplate(e.tempType.PRICE)), r.replace(/{{regularPrice}}/g, n).replace(/{{compareAtPrice}}/g, i)
        }
      }, {
        key: "customizeProductTitle", value: function () {
          return this.title
        }
      }, {
        key: "prepareSuggestionProductPriceData", value: function () {
          var t = this.data;
          o.a.isEnableShopifyMultipleCurrencies() && (o.a.isConvertCurrenciesOnFrontEnd() ? (t.price_min = o.a.convertPriceBasedOnActiveCurrency(t.price_min, !0), t.price_max = o.a.convertPriceBasedOnActiveCurrency(t.price_max, !0), t.compare_at_price_min = o.a.convertPriceBasedOnActiveCurrency(t.compare_at_price_min, !0), t.compare_at_price_max = o.a.convertPriceBasedOnActiveCurrency(t.compare_at_price_max, !0)) : o.a.convertPriceBasedOnPresentmentPrice(t))
        }
      }]) && u(n.prototype, i), c && u(n, c), e
    }(n(57).a);
    e.a = y
  }, 83: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _helpers_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
      _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
      compileTemplate = function compileTemplate(itemHtml, data) {
        if ("undefined" != typeof boostPFSIntegrationTemplate && boostPFSIntegrationTemplate.hasOwnProperty("compileTemplate")) {
          var _compileTemplate = "";
          for (var i in boostPFSIntegrationTemplate.compileTemplate) hascompileTemplate(i, !0) ? _compileTemplate += boostPFSIntegrationCustomTemplate.compileTemplate[i] : _compileTemplate += boostPFSIntegrationTemplate.compileTemplate[i];
          try {
            eval(_compileTemplate)
          } catch (t) {
            console.log("Error when parsing 3rd app template code")
          }
        }
        return itemHtml
      }, call3rdAppFunction = function call3rdAppFunction(data) {
        if ("undefined" != typeof boostPFSIntegrationTemplate && boostPFSIntegrationTemplate.hasOwnProperty("call3rdFunction")) {
          var call3rdFunction = "";
          for (var i in boostPFSIntegrationTemplate.call3rdFunction) hascompileTemplate(i, !0, "call3rdFunction") ? call3rdFunction += boostPFSIntegrationCustomTemplate.call3rdFunction[i] : call3rdFunction += boostPFSIntegrationTemplate.call3rdFunction[i];
          try {
            eval(call3rdFunction)
          } catch (t) {
            console.log("Error when parsing 3rd app integration code")
          }
        }
      }, hascompileTemplate = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compileTemplate", i = {};
        return !(void 0 === (i = e ? "undefined" != typeof boostPFSIntegrationCustomTemplate ? boostPFSIntegrationCustomTemplate : {} : "undefined" != typeof boostPFSIntegrationTemplate ? boostPFSIntegrationTemplate : {}) || !i.hasOwnProperty(n) || !i[n].hasOwnProperty(t) || "" === i[n][t])
      }, Integration = {
        compileTemplate: compileTemplate,
        call3rdAppFunction: call3rdAppFunction,
        hascompileTemplate: hascompileTemplate
      };
    __webpack_exports__.a = Integration
  }, 9: function (t, e, n) {
    "use strict";
    n(23), n(30), n(79), n(24);

    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    var r = function () {
      function t() {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.isInit = !1, this.isRendered = !1, this.isBoundEvent = !1, this.children = [], this.parent = null, this.$element = null
      }

      var e, n, r;
      return e = t, (n = [{
        key: "refresh", value: function () {
          this._callAllInit(), this._callAllRender(), this._callAllBindEvents()
        }
      }, {
        key: "beforeInit", value: function () {
        }
      }, {
        key: "init", value: function () {
        }
      }, {
        key: "afterInit", value: function () {
        }
      }, {
        key: "isLoopThroughChild", value: function () {
          return !0
        }
      }, {
        key: "isRender", value: function () {
          return !0
        }
      }, {
        key: "beforeRender", value: function () {
        }
      }, {
        key: "render", value: function () {
        }
      }, {
        key: "afterRender", value: function () {
        }
      }, {
        key: "isBindEvents", value: function () {
          return !0
        }
      }, {
        key: "beforeBindEvents", value: function () {
        }
      }, {
        key: "bindEvents", value: function () {
        }
      }, {
        key: "afterBindEvents", value: function () {
        }
      }, {
        key: "addComponent", value: function (t) {
          t.parent = this, this.children.push(t)
        }
      }, {
        key: "removeComponent", value: function (t) {
          if (this.children && this.children.length > 0) {
            var e = this.children.indexOf(t);
            -1 !== e && this.children.splice(e, 1)
          }
        }
      }, {
        key: "_callAllInit", value: function () {
          this.isInit || (this.beforeInit(), this.init()), this.children && this.children.length > 0 && this.isLoopThroughChild() && this.children.forEach((function (t) {
            t._callAllInit()
          })), this.isInit || (this.afterInit(), this.isInit = !0)
        }
      }, {
        key: "_callAllRender", value: function () {
          this.isRender() && this.beforeRender(), this.children && this.children.length > 0 && this.isLoopThroughChild() && this.children.forEach((function (t) {
            t._callAllRender()
          })), this.isRender() && (this.render(), this.afterRender(), this.isRendered = !0)
        }
      }, {
        key: "_callAllBindEvents", value: function () {
          this.isBindEvents() && this.beforeBindEvents(), this.children && this.children.length > 0 && this.isLoopThroughChild() && this.children.forEach((function (t) {
            t._callAllBindEvents()
          })), this.isBindEvents() && (this.bindEvents(), this.afterBindEvents(), this.isBoundEvent = !0)
        }
      }]) && i(e.prototype, n), r && i(e, r), t
    }();
    e.a = r
  }, 97: function (t, e, n) {
    "use strict";
    n(23), n(10), n(11), n(21), n(40), n(22), n(20), n(24), n(12);
    var i = n(3), r = n(1), o = function () {
      "string" != typeof i.a.currentTerm && (i.a.currentTerm = i.a.currentTerm.toString()), i.a.currentTerm = i.a.currentTerm.trim();
      var t = "";
      i.a.suggestionCache.hasOwnProperty(i.a.currentTerm) && i.a.suggestionCache[i.a.currentTerm].forEach((function (e) {
        "redirect" == e.key && e.values && (t = (t = (t = e.values).replace("https://" + i.a.shopDomain, "")).replace("http://" + i.a.shopDomain, ""))
      }));
      return t
    }, a = {
      getSearchRedirectUrl: o, checkForSearchRedirect: function (t) {
        if (t.data("search-submit")) {
          t.removeAttr("data-search-submit");
          var e = o();
          e ? r.a.setWindowLocation(e) : t.closest("form").trigger("submit", [!0])
        }
      }
    };
    e.a = a
  }
});
/* Start Boost-P001: 1.6.20-1.6.27 */
!function () {
  BoostPFS.inject(this), Utils.isBadUrl = function (e) {
    try {
      e || (e = Utils.getWindowLocation().search);
      var t = decodeURIComponent(e).split("&"), o = !1,
        a = new RegExp(["onabort", "popstate", "afterprint", "beforeprint", "beforeunload", "blur", "canplay", "canplaythrough", "change", "click", "contextmenu", "copy", "cut", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "ended", "error", "focus", "focusin", "focusout", "fullscreenchange", "fullscreenerror", "hashchange", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "mouseout", "mouseup", "offline", "online", "pagehide", "pageshow", "paste", "pause", "play", "playing", "progress", "ratechange", "resize", "reset", "scroll", "search", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "toggle", "touchcancel", "touchend", "touchmove", "touchstart", "unload", "volumechange", "waiting", "wheel"].join("=|on"));
      if (t.length > 0) for (var n = 0; n < t.length; n++) {
        var r = t[n];
        if ([(r.match(/</g) || []).length, (r.match(/>/g) || []).length, (r.match(/alert\(/g) || []).length, (r.match(/console\.log\(/g) || []).length, (r.match(/execCommand/g) || []).length, (r.match(/document\.cookie/g) || []).length, (r.match(/href="javascript:/g) || []).length, a.test(r)].some(function (e) {
          return e > 0
        })) {
          o = !0;
          break
        }
      }
      return o
    } catch {
      return !0
    }
  }
}();
/* Start Boost-P001: 1.6.20-1.6.27 */
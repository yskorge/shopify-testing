
var onSale = false;
var soldOut = false;
var priceVaries = false;
var images = [];
var firstVariant = {};
// Override Settings
var bcSfFilterSettings = {
    general: {
        limit: bcSfFilterConfig.custom.products_per_page,
        /* Optional */
        loadProductFirst: false,
        numberFilterTree: 2,
    }
};
// Declare Templates
var bcSfFilterTemplate = {
    // Grid Template
    'productGridItemHtml': '<div class="Grid__Cell 1/'+ bcSfFilterConfig.custom.mobile_row + '--phone 1/' + bcSfFilterConfig.custom.tablet_row + '--tablet-and-up 1/' + bcSfFilterConfig.custom.desktop_row + '--' + buildClass() +'">'+
                            '<div class=ProductItem " '+ buildClassHiz() +'">'+
                              '<div class="ProductItem__Wrapper">'+
                                '{{itemImages}}' +
                                '{{itemLabels}}'+
                                '{{itemInfo}}'+
                              '</div>'+
                              buildButtonSecond() +
                             '</div>'+
                            '</div>',

    // Pagination Template
    'previousActiveHtml': '<a class="Pagination__NavItem Link Link--primary" rel="prev" href="{{itemUrl}}"><svg class="{{ icon_class }}" role="presentation" viewBox="0 0 11 18"><path d="M9.5 1.5L1.5 9l8 7.5" stroke-width="2" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square"></path></svg></a>',
    'previousDisabledHtml': '',
    'nextActiveHtml': '<a class="Pagination__NavItem Link Link--primary" rel="next" href="{{itemUrl}}"><svg class="{{ icon_class }}" role="presentation" viewBox="0 0 11 18"><path d="M1.5 1.5l8 7.5-8 7.5" stroke-width="2" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square"></path> </svg></a>',
    'nextDisabledHtml': '',
    'pageItemHtml': '<a class="Pagination__NavItem Link Link--primary" href="{{itemUrl}}">{{itemTitle}}</a>',
    'pageItemSelectedHtml': '<span class="Pagination__NavItem buildPagination">{{itemTitle}}</span>',
    'pageItemRemainHtml': '<span class="Pagination__NavItem">{{itemTitle}}</span>',
    'paginateHtml': ' <div class="Pagination Text--subdued"><div class="Pagination__Nav">{{previous}}{{pageItems}}{{next}}</div></div>',
    // Sorting Template
    'sortingHtml': '{{sortingItems}}',
};

/************************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
function prepareShopifyData(data) {
  // Displaying price base on the policy of Shopify, have to multiple by 100
  soldOut = !data.available; // Check a product is out of stock
  onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Convert images to array
  images = data.images_info;
  // Get First Variant (selected_or_first_available_variant)
  var firstVariant = data['variants'][0];
  if (getParam('variant') !== null && getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  return data;
}
/************************** END CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
/************************** BUILD PRODUCT LIST **************************/
// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
  // Get Template
  var itemHtml = bcSfFilterTemplate.productGridItemHtml;
  // Customize API data to get the Shopify data
  data = prepareShopifyData(data);
  // Add Custom class
  var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
  var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';
  // Add Label
  itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));

  // Add Images
  itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImage(data, images));

  // Add main attribute (Always put at the end of this function)
  itemHtml = itemHtml.replace(/{{itemInfo}}/g, buildInfo(data, index));
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

  var tags = data.tags;
  if (soldOut) {
    if (tags.includes('Discontinued')) {
      return false;
    } else if (tags.includes('Markdown')) {
      return false;
    } else {
      return itemHtml;
    }

  } else {
    return itemHtml;
  }
};

/************************** END BUILD PRODUCT LIST **************************/
/************************** BUILD PRODUCT ITEM ELEMENTS **************************/
function buildClass() {
  return bcSfFilterConfig.custom.filter_position == 'drawer' ? 'lap-and-up' : 'desk';
}

function buildClassHiz() {
  return bcSfFilterConfig.custom.use_horizontal ? 'ProductItem--horizontal' : '';
}

function buildButtonSecond() {
  return bcSfFilterConfig.custom.use_horizontal ? '<a href="{{itemUrl}}" class="ProductItem__ViewButton Button Button--secondary hidden-pocket">' + bcSfFilterConfig.label.view_product + '</a>' : '';
}

function buildImage(data, images) {
  var htmlImg = '';
  if (images.length > 0) {
    htmlImg += '<a href="{{itemUrl}}" class="ProductItem__ImageWrapper';
    var use_natural_size = false;
    var has_alternate_image = false;
    if (bcSfFilterConfig.custom.product_image_size == 'natural' || bcSfFilterConfig.custom.use_horizontal)
      use_natural_size = true;
    if (bcSfFilterConfig.custom.product_show_secondary_image && images.length > 1 && !bcSfFilterConfig.custom.use_horizontal)
      has_alternate_image = true;
    if (has_alternate_image)
      htmlImg += 'ProductItem__ImageWrapper--withAlternateImage';
    htmlImg += '">';
    var max_width = images[0].width;
    if (bcSfFilterConfig.custom.use_horizontal)
      max_width = 125;
    var withCall = use_natural_size ? 'withFallback' : bcSfFilterConfig.custom.product_image_size;
    htmlImg += '<div class="AspectRatio AspectRatio--' + withCall + '" style="max-width: ' + max_width + 'px;';
    var aspect_ratio = images[0].width / images[0].height;
    if (use_natural_size) {
      htmlImg += 'padding-bottom: ' + (100 / aspect_ratio) + '%;';
    }
    htmlImg += ' --aspect-ratio: ' + aspect_ratio + '">';
    if (has_alternate_image && images.length > 1) {
      var sizes = '200,300,400,600,800,900,1000,1200';
      var support_size = imageSize(sizes, images[1]);
      var thumbUrl = bcsffilter.optimizeImage(images[1]['src'], '{width}x');
      htmlImg += '<img class="ProductItem__Image ProductItem__Image--alternate Image--lazyLoad Image--fadeIn" data-src="' + thumbUrl + '" data-widths="[' + support_size + ']" data-sizes="auto" alt="' + data.title + '" data-image-id="' + images[1].id + '">';
    }

    var sizes_main = '200,400,600,700,800,900,1000,1200';
    var support_size = imageSize(sizes_main, images[0]);
    var thumbUrl_main = images.length > 0 ? bcsffilter.optimizeImage(images[0]['src'], '{width}x') : bcSfFilterConfig.general.no_image_url;
    htmlImg += '<img class="ProductItem__Image Image--lazyLoad Image--fadeIn" data-src="' + thumbUrl_main + '" data-widths="[' + support_size + ']" data-sizes="auto" alt="' + data.title + '" data-image-id="' + images[0].id + '">';
    htmlImg += '<span class="Image__Loader"></span>';
    // htmlImg += '<noscript>';
    // htmlImg += '<img class="ProductItem__Image ProductItem__Image--alternate" src="' + bcsffilter.optimizeImage(images[0]['src'], '600x') + '" alt="' + data.title + '">';
    // htmlImg += '<img class="ProductItem__Image" src="' + bcsffilter.optimizeImage(images[0]['src'], '600x') + '" alt="' + data.title + '">';
    // htmlImg += '</noscript>';
    htmlImg += '</div>';
    htmlImg += '</a>';
  }
  return htmlImg;
}

function imageSize(sizes, image) {
  if (image) {
    var desired_sizes = sizes.split(',');
    var supported_sizes = '';
    for (var k = 0; k < desired_sizes.length; k++) {
      var size = desired_sizes[k];
      var size_as_int = size * 1;
      if (image.width < size_as_int) { break; }
      supported_sizes = supported_sizes + size + ',';
    }
    
    if (supported_sizes == '')
      supported_sizes = image.width;

    if(!jQ.isNumeric(supported_sizes)) {
      supported_sizes = supported_sizes.split(',').join(',');
      supported_sizes = supported_sizes.substring(0,supported_sizes.lastIndexOf(','));
    }
    return supported_sizes;
    
  } else {
    return '';
  }
}

function buildPrice(data) {
  var html = '';
  var show_price_on_hover = bcSfFilterConfig.custom.product_show_price_on_hover;
  var classPriceHover = show_price_on_hover ? 'ProductItem__PriceList--showOnHover' : '';
  html += '<div class="ProductItem__PriceList ' + classPriceHover + ' Heading">';
  if (onSale) {
    html += '<span class="ProductItem__Price Price Price--highlight Text--subdued" data-money-convertible>' + bcsffilter.formatMoney(data.price_min) + '</span> ';
    html += '<span class="ProductItem__Price Price Price--compareAt Text--subdued" data-money-convertible>' + bcsffilter.formatMoney(data.compare_at_price_min) + '</span>';
  } else {
    if (priceVaries) {
      html += '<span class="ProductItem__Price Price Text--subdued">' + bcSfFilterConfig.label_basic.from.replace(/{{min_price}}/g, bcsffilter.formatMoney(data.price_min)) + '</span>';
    } else {
      html += '<span class="ProductItem__Price Price Text--subdued" data-money-convertible>' + bcsffilter.formatMoney(data.price_min) + '</span>';
    }
  }
  html += '</div>';
  return html;
}

function buildLabels(data) {
  var product_labels = '';
  var has_labels = false;
  if (bcSfFilterConfig.custom.show_labels) {
    product_labels = '';
    var tags = data.tags;
    for (var k = 0; k < tags.length; k++) {
      var tag = tags[k].toLowerCase().replace(/ /g,'-');
      if (tag.indexOf('__label') != -1) {
        product_labels += '<span class="ProductItem__Label Heading Text--subdued">' + tag.split('__label:')[1] + '</span>';
        break;
      }
    }

    var allProductTags = JSON.stringify(data.tags),
        allProductTagsToLowerCase = allProductTags.toLowerCase().replace(/ /g,'-');

    if (allProductTagsToLowerCase.indexOf('oprahs-favorite') != -1) {
      var badgeLogoUrl = bcSfFilterConfig.custom.oprahs_favorite_badge;
      has_labels = true;
    } else if (allProductTagsToLowerCase.indexOf('new-product') != -1) {
      var badgeLogoUrl = bcSfFilterConfig.custom.new_product_badge;
      has_labels = true;
    } else if (allProductTagsToLowerCase.indexOf('coming-soon') != -1) {
      var badgeLogoUrl = bcSfFilterConfig.custom.coming_soon_badge;
      has_labels = true;
    } else if (allProductTagsToLowerCase.indexOf('limited-time-offer') != -1) {
      var badgeLogoUrl = bcSfFilterConfig.custom.limited_time_badge;
      has_labels = true;
    }
    if (has_labels == true) {
      product_labels += '<img src="' + badgeLogoUrl + '" alt="Badge logo" class="ProductItem__Label-image-small">';
    }

    var markdown = 'Markdown';
    var markdownLowerCase = markdown.toLowerCase();

    if (has_labels == false) {
      if (!soldOut) {
        if (onSale) {
          if (tags.includes(markdownLowerCase)) {
            product_labels += '<span class="ProductItem__Label Heading Text--subdued">' + bcSfFilterConfig.label_basic.clearance + '</span>';
          } else {
            product_labels += ' <span class="ProductItem__Label Heading Text--subdued">' + bcSfFilterConfig.label_basic.sale + '</span>';
          }
        }
      } else {
        product_labels += ' <span class="ProductItem__Label Heading Text--subdued SoldOut-badge">' + bcSfFilterConfig.label_basic.sold_out + '</span>';
      }
    }

    var html = '';
    if (product_labels != '') {
      html += '<div class="ProductItem__LabelList-small">';
      html += product_labels;
      html += '</div>';
    }
  }
  return html;
}

function buildInfo(data, indx) {
  var html = '';
  if (bcSfFilterConfig.custom.show_product_info) {
    var infoClass = (!bcSfFilterConfig.custom.use_horizontal) ? 'ProductItem__Info--' + bcSfFilterConfig.custom.product_info_alignment : '';
    html += '<div class="ProductItem__Info ' + infoClass + ' ">';
    html += '<h2 class="ProductItem__Title Heading">';
    html += '<a href="{{itemUrl}}"><q>' + data.vendor + ' | ' + data.title + '</q></a>';
    html += '</h2>';
    html += '<div class="ProductItem__type">' + data.product_type + '</div>';
    html += buildSwatch(data, bcsffilter, indx);
    html += buildPrice(data);
    html += '</div>';
  }
  return html;
}

function buildSwatch(data, ob, indx) {
  var _this = ob;
  var itemSwatchHtml = '';
  if (bcSfFilterConfig.custom.show_color_swatch) {
    var color_name = bcSfFilterConfig.custom.section_id + '-' + data.id + '-' + indx;
    data.options_with_values.forEach(function(option, index) {
      var option_name = option.name.toLowerCase();
      if (option_name.indexOf('color') != -1 || option_name.indexOf('colour') != -1 || option_name.indexOf('couleur') != -1) {
        var values = '';
        itemSwatchHtml += '<div class="ProductItem__ColorSwatchList">';
        var i = 0;
        data.variants.forEach(function(variant) {
          var temp = variant.merged_options.filter(function(obj) {
            obj = obj.toLowerCase();
            if (obj.indexOf('color') != -1 || obj.indexOf('colour') != -1)
              return obj;
          });
          temp = temp[0].split(':');
          var value = temp[1].toLowerCase();
          if (values.indexOf(value) == -1) {
            values = values + ',' + value;
            values = values.split(',');
            var size = '200,400,600,700,800,900,1000,1200';
            var supported_sizes = imageSize(size, variant.image);
            var color_image = _this.optimizeImage(variant.image);
            var name_color = option_name + "-" + bcsffilter.slugify(value) + ".png?";
            var checked = (i == 0) ? 'is-active' : '';
            var dataImg = (variant.image != null) ? 'data-image-id="" data-image-url="' + variant.image + '" data-image-widths="[' + supported_sizes + ']" data-image-aspect-ratio="1"' : '';
            var url_color = bcSfFilterMainConfig.general.file_url.replace('?', name_color);
            itemSwatchHtml += '<div class="ProductItem__ColorSwatchItem">';
            itemSwatchHtml += '<input class="ColorSwatch__Radio" type="radio" name="' + color_name + '" aria-labelledby="' + color_name + '" value="' + value + '" data-variant-url="' + _this.buildProductItemUrl(data) + '?variant=' + variant.id + '"' + dataImg + '  aria-hidden="true">';
            itemSwatchHtml += '<label class="ColorSwatch ColorSwatch--small '+ checked +'" id="' + color_name + '" style="background-color: ' + value.replace(' ', '').toLowerCase() + '; background-image: url(' + url_color + ')" title="' + value + '" data-tooltip="' + value + '"></label>';
            itemSwatchHtml += '</div>';
            i++;
          }
        });
        itemSwatchHtml += '</div>';
      }
    });
  }
  return itemSwatchHtml;
}
/************************** END BUILD PRODUCT ITEM ELEMENTS **************************/
/************************** BUILD TOOLBAR **************************/
// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
  // Get page info
  var currentPage = parseInt(this.queryParams.page);
  var totalPage = Math.ceil(totalProduct / this.queryParams.limit);
  // If it has only one page, clear Pagination
  if (totalPage == 1) {
    jQ(this.selector.pagination).html('');
    return false;
  }
  if (this.getSettingValue('general.paginationType') == 'default') {
    var paginationHtml = bcSfFilterTemplate.paginateHtml;
    // Build Previous
    var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
    previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
    paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
    // Build Next
    var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml : bcSfFilterTemplate.nextDisabledHtml;
    nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
    paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
    // Create page items array
    var beforeCurrentPageArr = [];
    for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
      beforeCurrentPageArr.unshift(iBefore);
    }
    if (currentPage - 4 > 0) {
      beforeCurrentPageArr.unshift('...');
    }
    if (currentPage - 4 >= 0) {
      beforeCurrentPageArr.unshift(1);
    }
    beforeCurrentPageArr.push(currentPage);
    var afterCurrentPageArr = [];
    for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
      afterCurrentPageArr.push(iAfter);
    }
    if (currentPage + 3 < totalPage) {
      afterCurrentPageArr.push('...');
    }
    if (currentPage + 3 <= totalPage) {
      afterCurrentPageArr.push(totalPage);
    }
    // Build page items
    var pageItemsHtml = '';
    var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
    for (var iPage = 0; iPage < pageArr.length; iPage++) {
      if (pageArr[iPage] == '...') {
        pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
      } else {
        pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
      }
      pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
      pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
    }
    paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
    paginationHtml = jQ.parseHTML(paginationHtml);
    jQ(this.selector.pagination).html(paginationHtml);
  }
};

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
  if (bcSfFilterConfig.custom.show_sorting && bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
    jQ(this.selector.topSorting).html('');
    var sortingArr = this.getSortingList();
    if (sortingArr) {
      // Build content
      var sortingItemsHtml = '';
      for (var k in sortingArr) {
        var classActive = (this.queryParams.sort == k) ? 'is-selected' : '';
        sortingItemsHtml += '<button class="Popover__Value ' + classActive + ' Heading Link Link--primary u-h6" data-value="' + k + '">' + sortingArr[k] + '</button>';
      }
      var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
      html = jQ.parseHTML(html);
      jQ(this.selector.topSorting).html(html);
    }
  }
};

// Build Sorting event
BCSfFilter.prototype.buildSortingEvent = function() {
  var _this = this;
  var topSortingSelector = jQ(this.selector.topSorting);
  topSortingSelector.find('.Popover__Value').click(function(e) {
    onInteractWithToolbar(e, 'sort', _this.queryParams.sort, jQ(this).data('value'));
  })
};

/************************** END BUILD TOOLBAR **************************/

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
  // Get theme script 
//   buildTheme();
  // Fix image not load on Instagram browser - initialize swatch image
  $(".ProductItem__Info .ProductItem__ColorSwatchList .ProductItem__ColorSwatchItem label.ColorSwatch").click(function(e){
    e.preventDefault();
    e.stopPropagation()
    $(this).parent().parent().find('label.ColorSwatch').removeClass('is-active');
    var swatches = $(this).parent().parent().find('.ColorSwatch__Radio')
    swatches.prop( "checked", false );
    $(this).addClass('is-active');
    $(this).parent().find('.ColorSwatch__Radio').prop( "checked", true )
    var parent = $(this).parent();
    var productImage = $(this).parent().parent().parent().parent().find('a.ProductItem__ImageWrapper');
    var variantInfo = parent.find('input.ColorSwatch__Radio');
    productImage.find('.AspectRatio .bc-sf-product-swatch-img').remove();
    productImage.find('.AspectRatio').prepend(jQ.parseHTML('<img class="bc-sf-product-swatch-img" src="' + variantInfo.data('image-url') + '" />'));
    productImage.find('img.ProductItem__Image').hide();
    productImage.attr('href', variantInfo.data('variant-url'));


    // $(this).closest('.ProductItem__Wrapper').find('.ProductItem__PriceList').html(jQ.parseHTML('<span class="ProductItem__Price Price Text--subdued" data-money-convertible>' + bcsffilter.formatMoney(variantInfo.data('variant-price')) + '</span>'));
  })
};
// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {

};


// function buildTheme(){
//   var _createClass=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(i){var n={};function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=i,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=11)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"getSiblings",value:function(e,t){for(var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=[],s=e;s=s.previousElementSibling;)t&&!s.matches(t)||n.push(s);for(i&&n.push(e),s=e;s=s.nextElementSibling;)t&&!s.matches(t)||n.push(s);return n}},{key:"nodeListToArray",value:function(e,t){for(var i=[],n=0;n!==e.length;++n)t&&!e[n].matches(t)||i.push(e[n]);return i}},{key:"outerWidthWithMargin",value:function(e){var t=e.offsetWidth,i=getComputedStyle(e);return t+=parseInt(i.marginLeft)+parseInt(i.marginRight)}}]),e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function t(e){_classCallCheck(this,t),this.element=e,this.delegateElement=new domDelegate.Delegate(this.element),this.delegateElement.on("change",".ColorSwatch__Radio",this._colorChanged.bind(this))}return _createClass(t,[{key:"_colorChanged",value:function(e,t){var i=t.closest(".ProductItem"),n=t.getAttribute("data-variant-url");i.querySelector(".ProductItem__ImageWrapper").setAttribute("href",n),i.querySelector(".ProductItem__Title > a").setAttribute("href",n);var s=i.querySelector(".ProductItem__Image:not(.ProductItem__Image--alternate)");if(t.hasAttribute("data-image-url")&&t.getAttribute("data-image-id")!==s.getAttribute("data-image-id")){var a=document.createElement("img");a.className="ProductItem__Image Image--fadeIn Image--lazyLoad",a.setAttribute("data-image-id",t.getAttribute("data-image-id")),a.setAttribute("data-src",t.getAttribute("data-image-url")),a.setAttribute("data-widths",t.getAttribute("data-image-widths")),a.setAttribute("data-sizes","auto"),s.parentNode.style.paddingBottom=100/t.getAttribute("data-image-aspect-ratio")+"%",s.parentNode.style.setProperty("--aspect-ratio",t.getAttribute("data-image-aspect-ratio")),s.parentNode.replaceChild(a,s)}}}]),t}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"slideUp",value:function(e){e.style.height=e.scrollHeight+"px",e.offsetHeight,e.style.height=0}},{key:"slideDown",value:function(i){if("auto"!==i.style.height){i.style.height=i.firstElementChild.scrollHeight+"px";i.addEventListener("transitionend",function e(t){"height"===t.propertyName&&(i.style.height="auto",i.removeEventListener("transitionend",e))})}}}]),e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(13),s=(i(6),function(){function i(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,i),this.element=e,this.delegateElement=new domDelegate.Delegate(this.element),this.delegateBody=new domDelegate.Delegate(document.body),this.onOpen=t.onOpen||function(){},this.onClose=t.onClose||function(){},this.isOpen=!1,this.direction=this.element.classList.contains("Drawer--fromLeft")?"fromLeft":"fromRight",this.pageOverlayElement=document.querySelector(".PageOverlay"),this._attachListeners()}return _createClass(i,[{key:"destroy",value:function(){this.delegateBody.off("click",'[data-action="open-drawer"][data-drawer-id="'+this.element.id+'"]'),this.delegateBody.off("click",'[data-action="close-drawer"][data-drawer-id="'+this.element.id+'"]'),window.removeEventListener("resize",this._calculateMaxHeightListener)}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(e){if(!this.isOpen)return e&&e.preventDefault(),this.element.setAttribute("aria-hidden","false"),this._calculateMaxHeight(),document.documentElement.classList.add("no-scroll"),disableBodyScroll(!0,"[data-scrollable]"),n.default.trapFocus(this.element,"drawer"),this.pageOverlayElement.classList.add("is-visible"),this.pageOverlayElement.addEventListener("click",this._closeListener),this.isOpen=!0,this.onOpen(),!1}},{key:"close",value:function(e){this.isOpen&&(e&&e.preventDefault(),this.element.setAttribute("aria-hidden","true"),document.documentElement.classList.remove("no-scroll"),disableBodyScroll(!1,"[data-scrollable]"),n.default.removeTrapFocus(this.element,"drawer"),this.pageOverlayElement.classList.remove("is-visible"),this.pageOverlayElement.removeEventListener("click",this._closeListener),this.isOpen=!1,this.onClose())}},{key:"_attachListeners",value:function(){this._openListener=this.open.bind(this),this._closeListener=this.close.bind(this),this._calculateMaxHeightListener=this._calculateMaxHeight.bind(this),this.delegateBody.on("click",'[data-action="open-drawer"][data-drawer-id="'+this.element.id+'"]',this._openListener),this.delegateBody.on("click",'[data-action="close-drawer"][data-drawer-id="'+this.element.id+'"]',this._closeListener),this.element.addEventListener("keyup",this._handleKeyboard.bind(this)),window.addEventListener("resize",this._calculateMaxHeightListener)}},{key:"_calculateMaxHeight",value:function(){this.element.style.maxHeight=window.innerHeight+"px"}},{key:"_handleKeyboard",value:function(e){this.isOpen&&27===e.keyCode&&this.close()}}]),i}());t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(13),s=i(0),a=i(14),o=function(){function i(e,t){_classCallCheck(this,i),this.element=e,this.delegateElement=new domDelegate.Delegate(this.element),this.activator=t.activator||document.querySelector('[aria-controls="'+e.getAttribute("id")+'"]'),this.preferredPosition=t.preferredPosition||"bottom",this.isOpen=!1,this.onValueChanged=t.onValueChanged||function(){},this.onOpen=t.onOpen||function(){},this.onClose=t.onClose||function(){},this.showOverlay=void 0===t.showOverlay||t.showOverlay,this.pageOverlayElement=document.querySelector(".PageOverlay"),this._attachListeners()}return _createClass(i,[{key:"destroy",value:function(){this.element.removeEventListener("keyup",this._handleKeyboardListener),this.delegateElement.off("click"),this.activator.removeEventListener("click",this._toggleListener)}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){this.isOpen||this.activator.getAttribute("aria-controls")!==this.element.id||(this.element.setAttribute("aria-hidden","false"),this.activator.setAttribute("aria-expanded","true"),n.default.trapFocus(this.element,"popover"),disableBodyScroll(!0,"[data-scrollable]"),document.documentElement.classList.add("no-scroll"),a.default.matchesBreakpoint("lap-and-up")?(document.body.addEventListener("click",this._clickOutsideListener),this._position()):(this.element.removeAttribute("style"),this.showOverlay&&(this.pageOverlayElement.classList.add("is-visible"),this.pageOverlayElement.addEventListener("click",this._closeListener))),this.onOpen(this),this.isOpen=!0)}},{key:"close",value:function(){this.isOpen&&(this.element.setAttribute("aria-hidden","true"),this.activator.setAttribute("aria-expanded","false"),n.default.removeTrapFocus(this.element,"popover"),disableBodyScroll(!1,"[data-scrollable]"),document.documentElement.classList.remove("no-scroll"),a.default.matchesBreakpoint("lap-and-up")?document.body.removeEventListener("click",this._clickOutsideListener):this.showOverlay&&(this.pageOverlayElement.classList.remove("is-visible"),this.pageOverlayElement.removeEventListener("click",this._closeListener)),this.onClose(this),this.isOpen=!1)}},{key:"_attachListeners",value:function(){this._handleKeyboardListener=this._handleKeyboard.bind(this),this._clickOutsideListener=this._clickOutside.bind(this),this._closeListener=this.close.bind(this),this._toggleListener=this.toggle.bind(this),this.element.addEventListener("keyup",this._handleKeyboardListener),this.activator.addEventListener("click",this._toggleListener),this.delegateElement.on("click",'[data-action="close-popover"]',this.close.bind(this)),this.delegateElement.on("click",'[data-action="select-value"]',this._valueChanged.bind(this))}},{key:"_valueChanged",value:function(e){s.default.getSiblings(e.target,".is-selected").forEach(function(e){return e.classList.remove("is-selected")}),e.target.classList.add("is-selected"),this.onValueChanged(e.target.getAttribute("data-value"),e.target,this.activator),this.close()}},{key:"_clickOutside",value:function(e){e.target.closest(".Popover")||e.target.closest(".Modal")||e.target===this.activator||this.activator.contains(e.target)||this.close()}},{key:"_position",value:function(){var s=this,a=0,o=0,r="",l="";fastdom.measure(function(){var e=window.innerHeight,t=s.activator.getBoundingClientRect(),i=e/2;if("bottom"===s.preferredPosition)l="right",r=s.element.clientHeight<=e-(t.bottom+20)||e-t.bottom>=i?"bottom":"top";else if("top"===s.preferredPosition)l="right",r=s.element.clientHeight<=t.top-20||t.top>=i?"top":"bottom";else{r="left";var n=s.element.clientHeight/2;l=t.top>=n&&e-t.bottom>=n?"center":e-t.bottom>=n?"bottom":"top"}"top"===r?(a=t.top-s.element.clientHeight-20,o=window.innerWidth-t.right):"bottom"===r?(a=t.bottom+20,o=window.innerWidth-t.right):(o=window.innerWidth-t.left+20,a="center"===l?t.top-s.element.clientHeight/2+s.activator.clientHeight/2:"top"===l?t.bottom-s.element.clientHeight:t.top)}),fastdom.mutate(function(){["Popover--positionBottom","Popover--positionTop","Popover--positionCenter","Popover--alignTop","Popover--alignCenter","Popover--alignBottom"].map(function(e){return s.element.classList.remove(e)}),s.element.classList.add("Popover--position"+(r.charAt(0).toUpperCase()+r.slice(1))),s.element.classList.add("Popover--align"+(l.charAt(0).toUpperCase()+l.slice(1))),s.element.setAttribute("style","top: "+parseInt(a)+"px; right: "+parseInt(o)+"px;")})}},{key:"_handleKeyboard",value:function(e){this.isOpen&&27===e.keyCode&&this.close()}}]),i}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function t(e){_classCallCheck(this,t),e&&(this.element=e,this.lastKnownY=window.scrollY,this.currentTop=0,this.initialTopOffset=parseInt(window.getComputedStyle(this.element).top),this._attachListeners())}return _createClass(t,[{key:"destroy",value:function(){window.removeEventListener("scroll",this._checkPositionListener)}},{key:"_attachListeners",value:function(){this._checkPositionListener=this._checkPosition.bind(this),window.addEventListener("scroll",this._checkPositionListener)}},{key:"_checkPosition",value:function(){var i=this;fastdom.measure(function(){var e=i.element.getBoundingClientRect().top+window.scrollY-i.element.offsetTop+i.initialTopOffset,t=i.element.clientHeight-window.innerHeight;window.scrollY<i.lastKnownY?i.currentTop-=window.scrollY-i.lastKnownY:i.currentTop+=i.lastKnownY-window.scrollY,i.currentTop=Math.min(Math.max(i.currentTop,-t),e,i.initialTopOffset),i.lastKnownY=window.scrollY}),fastdom.mutate(function(){i.element.style.top=i.currentTop+"px"})}}]),t}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function s(e,t,i){var n=this;_classCallCheck(this,s),this.container=e,this.targets=[],this.targetIndices={},this.indicesInViewPort=[],this.observer=new IntersectionObserver(this._onIntersectionChange.bind(this),i),t.forEach(function(e,t){n.targets.push(e),n.targetIndices[e.id]=t,n.observer.observe(e)})}return _createClass(s,[{key:"destroy",value:function(){this.observer.disconnect()}},{key:"_onIntersectionChange",value:function(e){for(var t=this.indicesInViewPort[0]||0,i=e.length-1;0<=i;i--)this._updateIndicesInViewPort(e[i],t);if(this.indicesInViewPort=this.indicesInViewPort.filter(function(e,t,i){return i.indexOf(e)===t}),0!==this.indicesInViewPort.length&&t!==this.indicesInViewPort[0]){var n=new CustomEvent("scrollspy:target:changed",{detail:{newTarget:this.targets[this.indicesInViewPort[0]],oldTarget:this.targets[t]}});this.container.dispatchEvent(n)}}},{key:"_updateIndicesInViewPort",value:function(e,t){var i=this.targetIndices[e.target.id];if(0===e.intersectionRatio){var n=this.indicesInViewPort.indexOf(i);-1!==n&&this.indicesInViewPort.splice(n,1)}else i<t?this.indicesInViewPort.unshift(i):i>this.indicesInViewPort[this.indicesInViewPort.length-1]?this.indicesInViewPort.push(i):(this.indicesInViewPort.push(i),this.indicesInViewPort.sort())}}]),s}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),s=function(){function t(e){_classCallCheck(this,t),this.element=e,this.carousel=new n.default(this.element.querySelector("[data-flickity-config]"))}return _createClass(t,[{key:"onUnload",value:function(){this.carousel.destroy()}},{key:"onBlockSelect",value:function(e){this.carousel.selectCell(e.target.getAttribute("data-slide-index"),!0,!e.detail.load)}},{key:"onBlockDeselect",value:function(){this.carousel.unpausePlayer()}}]),t}();t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(3),a=i(4),o=i(1),l=i(0),r=i(5),n=function(){function n(e){_classCallCheck(this,n),this.element=e,this.delegateElement=new domDelegate.Delegate(this.element),this.toolbarElement=this.element.querySelector(".CollectionToolbar"),this.collectionInnerElement=this.element.querySelector(".CollectionInner__Products"),this.settings=JSON.parse(this.element.getAttribute("data-section-settings")),this.currentTags=this.settings.currentTags,this.currentSortBy=this.settings.sortBy,this.temporaryTags=this.currentTags.slice();var t=document.getElementById("collection-sort-popover");t&&(this.sortPopover=new a.default(t,{onValueChanged:this._sortByChanged.bind(this)}));var i=document.getElementById("collection-filter-drawer");i&&(this.filterDrawer=new s.default(i,{onClose:this._removeUncommittedTags.bind(this)})),"sidebar"===this.settings.filterPosition&&(this.filterInnerSidebarScroller=new r.default(this.element.querySelector(".CollectionInner__Sidebar"))),this.element.querySelector(".PageHeader__ImageWrapper")&&window.matchMedia("(-moz-touch-enabled: 0), (hover: hover)").matches&&(this.parallaxInstance=new Rellax(".PageHeader__ImageWrapper",{speed:-7,center:!1,round:!0})),new o.default(this.element),this.timeline=new TimelineLite({delay:window.theme.showPageTransition?.5:0}),this._setupAnimation(),this._attachListeners()}return _createClass(n,[{key:"onUnload",value:function(){this.delegateElement.off("click"),this.sortPopover&&this.sortPopover.destroy(),this.filterDrawer&&this.filterDrawer.destroy(),this.filterInnerSidebarScroller&&this.filterInnerSidebarScroller.destroy(),this.parallaxInstance&&this.parallaxInstance.destroy(),window.theme.showElementStaggering&&(this.intersectionObserver.disconnect(),this.timeline.kill())}},{key:"_setupAnimation",value:function(){var t=this;window.theme.showElementStaggering&&(this.intersectionObserver&&this.intersectionObserver.disconnect(),this.intersectionObserver=new IntersectionObserver(this._reveal.bind(this),{threshold:.3}),l.default.nodeListToArray(this.element.querySelectorAll(".ProductList .ProductItem")).forEach(function(e){if(jQ(e).attr('style')== undefined){t.intersectionObserver.observe(e)}}))}},{key:"_reveal",value:function(e){var t=this,i=[];e.forEach(function(e){(e.isIntersecting||0<e.intersectionRatio)&&(i.push(e.target),t.intersectionObserver.unobserve(e.target))}),0!==i.length&&this.timeline.staggerFromTo(i,.45,{autoAlpha:0,y:25},{autoAlpha:1,y:0},.2)}},{key:"_changeLayoutMode",value:function(e,t){var n=this,s=t.getAttribute("data-grid-type"),a=parseInt(t.getAttribute("data-count")),i=this.collectionInnerElement.querySelector(".ProductList");if(i){var o=parseInt(i.getAttribute("data-"+s+"-count"));if(o===a)return;i.setAttribute("data-"+s+"-count",a),l.default.nodeListToArray(i.querySelectorAll(".Grid__Cell")).forEach(function(e){if("mobile"===s)e.classList.remove("1/"+o+"--phone"),e.classList.add("1/"+a+"--phone");else{var t=2===o?2:3,i=2===a?2:3;"drawer"===n.settings.filterPosition?(e.classList.remove("1/"+o+"--lap-and-up"),e.classList.add("1/"+a+"--lap-and-up")):(e.classList.remove("1/"+o+"--desk"),e.classList.add("1/"+a+"--desk")),e.classList.remove("1/"+t+"--tablet-and-up"),e.classList.add("1/"+i+"--tablet-and-up")}window.theme.showElementStaggering&&(e.firstElementChild.style.visibility="hidden")}),lazySizes.autoSizer.checkElems()}t.classList.add("is-active"),l.default.getSiblings(t)[0].classList.remove("is-active"),this._setupAnimation();var r=new FormData;r.append("attributes[collection_"+s+"_items_per_row]",a),fetch("/cart/update.js",{credentials:"same-origin",method:"POST",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},body:r})}},{key:"_sortByChanged",value:function(e){this.currentSortBy!==e&&(this.currentSortBy=e,this._reloadProducts())}},{key:"_toggleTag",value:function(e){var t=e.target;if(t.classList.contains("is-active"))this.temporaryTags.splice(this.temporaryTags.indexOf(t.getAttribute("data-tag")),1);else{var i=t.closest(".Collapsible").querySelector(".is-active");i&&this.temporaryTags.splice(this.temporaryTags.indexOf(i.getAttribute("data-tag")),1),this.temporaryTags.push(t.getAttribute("data-tag"))}this._updateActiveTags(),__WEBPACK_IMPORTED_MODULE_4__helper_Responsive__.default.matchesBreakpoint("lap-and-up")&&"sidebar"===this.settings.filterPosition&&this._commit()}},{key:"_removeUncommittedTags",value:function(){this.temporaryTags=this.currentTags.slice(),this._updateActiveTags()}},{key:"_applyTags",value:function(){this._updateActiveTags(),this._commit()}},{key:"_resetTags",value:function(){this.temporaryTags=[],this._applyTags()}},{key:"_updateActiveTags",value:function(){var t=this;l.default.nodeListToArray(this.element.querySelectorAll(".CollectionFilters [data-tag]")).forEach(function(e){t.temporaryTags.includes(e.getAttribute("data-tag"))?(e.classList.add("is-active"),e.parentNode.classList.add("is-selected")):(e.classList.remove("is-active"),e.parentNode.classList.remove("is-selected"))})}},{key:"_commit",value:function(){var t=this;this.currentTags.sort().join(",")!==this.temporaryTags.sort().join(",")&&(this.currentTags=this.temporaryTags.slice(),this._reloadProducts()),this.filterDrawer.isOpen&&this.filterDrawer.close(),l.default.nodeListToArray(this.element.querySelectorAll('[data-action="reset-tags"]')).forEach(function(e){e.style.display=0===t.currentTags.length?"none":"block"})}},{key:"_reloadProducts",value:function(){var n=this;document.dispatchEvent(new CustomEvent("theme:loading:start"));var e=this.toolbarElement.querySelector(".CollectionToolbar__Item--filter");if(e){var t=e.querySelector("span");t&&e.removeChild(t),0===this.currentTags.length?e.classList.add("Text--subdued"):(e.classList.remove("Text--subdued"),e.innerHTML+='<span class="Text--subdued">('+this.currentTags.length+")</span>")}if(history.replaceState){var i=0<this.currentTags.length?this.currentTags.join("+"):"",s=window.location.protocol+"//"+window.location.host+this.settings.collectionUrl+"/"+i+"?sort_by="+this.currentSortBy;window.history.pushState({path:s},"",s)}var a=new FormData;a.append("view","ajax"),a.append("sort_by",this.currentSortBy),fetch(location.pathname+"?view=ajax&sort_by="+this.currentSortBy,{credentials:"same-origin",method:"GET"}).then(function(e){e.text().then(function(e){var t=document.createElement("div");t.innerHTML=e,n.collectionInnerElement.innerHTML=t.querySelector(".shopify-section").innerHTML,document.dispatchEvent(new CustomEvent("theme:loading:end")),n._setupAnimation();var i=n.element.querySelector(".CollectionMain").getBoundingClientRect().top-parseInt(document.documentElement.style.getPropertyValue("--header-height"));__WEBPACK_IMPORTED_MODULE_4__helper_Responsive__.default.matchesBreakpoint("lap-and-up")&&n.toolbarElement&&0===n.toolbarElement.clientHeight&&(i-=50),i<0&&window.scrollBy({top:i,behavior:"smooth"})})})}},{key:"_attachListeners",value:function(){this._toggleTagListener=this._toggleTag.bind(this),this._applyTagsListener=this._applyTags.bind(this),this._resetTagsListener=this._resetTags.bind(this),this._changeLayoutModeListener=this._changeLayoutMode.bind(this),this.delegateElement.on("click",'[data-action="toggle-tag"]',this._toggleTagListener),this.delegateElement.on("click",'[data-action="apply-tags"]',this._applyTagsListener),this.delegateElement.on("click",'[data-action="reset-tags"]',this._resetTagsListener),this.delegateElement.on("click",'[data-action="change-layout-mode"]',this._changeLayoutModeListener),window.addEventListener("popstate",function(e){e.state.path&&(window.location.href=e.state.path)})}}]),n}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),s=function(){function e(){_classCallCheck(this,e),this.constructors=[],this.instances=[],this._attachListeners()}return _createClass(e,[{key:"_attachListeners",value:function(){document.addEventListener("shopify:section:load",this._onSectionLoad.bind(this)),document.addEventListener("shopify:section:unload",this._onSectionUnload.bind(this)),document.addEventListener("shopify:section:select",this._onSelect.bind(this)),document.addEventListener("shopify:section:deselect",this._onDeselect.bind(this)),document.addEventListener("shopify:section:reorder",this._onReorder.bind(this)),document.addEventListener("shopify:block:select",this._onBlockSelect.bind(this)),document.addEventListener("shopify:block:deselect",this._onBlockDeselect.bind(this))}},{key:"register",value:function(e,t){var i=this;this.constructors[e]=t,n.default.nodeListToArray(document.querySelectorAll("[data-section-type="+e+"]")).forEach(function(e){i._createInstance(e,t)})}},{key:"_findInstance",value:function(e,t,i){for(var n=0;n<e.length;n++)if(e[n][t]===i)return e[n]}},{key:"_removeInstance",value:function(e,t,i){for(var n=e.length;n--;)if(e[n][t]===i){e.splice(n,1);break}return e}},{key:"_onSectionLoad",value:function(e){var t=e.target.querySelector("[data-section-id]");t&&this._createInstance(t)}},{key:"_onSectionUnload",value:function(e){var t=this._findInstance(this.instances,"id",e.detail.sectionId);t&&("function"==typeof t.onUnload&&t.onUnload(e),this.instances=this._removeInstance(this.instances,"id",e.detail.sectionId))}},{key:"_onSelect",value:function(e){var t=this._findInstance(this.instances,"id",e.detail.sectionId);t&&"function"==typeof t.onSelect&&t.onSelect(e)}},{key:"_onDeselect",value:function(e){var t=this._findInstance(this.instances,"id",e.detail.sectionId);t&&"function"==typeof t.onDeselect&&t.onDeselect(e)}},{key:"_onReorder",value:function(e){var t=this._findInstance(this.instances,"id",e.detail.sectionId);t&&"function"==typeof t.onReorder&&t.onReorder(e)}},{key:"_onBlockSelect",value:function(e){var t=this._findInstance(this.instances,"id",e.detail.sectionId);t&&"function"==typeof t.onBlockSelect&&t.onBlockSelect(e)}},{key:"_onBlockDeselect",value:function(e){var t=this._findInstance(this.instances,"id",e.detail.sectionId);t&&"function"==typeof t.onBlockDeselect&&t.onBlockDeselect(e)}},{key:"_createInstance",value:function(e,t){var i=e.getAttribute("data-section-id"),n=e.getAttribute("data-section-type");if(void 0!==(t=t||this.constructors[n])){var s=Object.assign(new t(e),{id:i,type:n,container:e});this.instances.push(s)}}}]),e}();t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(7);i.d(t,"CollectionListSection",function(){return n.default});var s=i(8);i.d(t,"CollectionSection",function(){return s.default});var a=i(9);i.d(t,"SectionContainer",function(){return a.default})},function(e,t,i){i(10),e.exports=i(12)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=i(10);(n=new s.SectionContainer).register("collection-list",s.CollectionListSection),n.register("collection",s.CollectionSection)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"trapFocus",value:function(t,e){this.listeners=this.listeners||{};var i=t.querySelector("[autofocus]")||t;t.setAttribute("tabindex","-1"),i.focus(),this.listeners[e]=function(e){t===e.target||t.contains(e.target)||t.focus()},document.addEventListener("focusin",this.listeners[e])}},{key:"removeTrapFocus",value:function(e,t){e&&e.removeAttribute("tabindex"),document.removeEventListener("focusin",this.listeners[t])}},{key:"clearTrapFocus",value:function(){for(var e in this.listeners)this.listeners.hasOwnProperty(e)&&document.removeEventListener("focusin",this.listeners[e]);this.listeners={}}}]),e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function i(){var t=this;_classCallCheck(this,i),this.currentBreakpoint=i.getCurrentBreakpoint(),window.addEventListener("resize",function(){var e=i.getCurrentBreakpoint();t.currentBreakpoint!==e&&(document.dispatchEvent(new CustomEvent("breakpoint:changed",{detail:{previousBreakpoint:t.currentBreakpoint,currentBreakpoint:e}})),t.currentBreakpoint=e)})}return _createClass(i,null,[{key:"matchesBreakpoint",value:function(e){switch(e){case"phone":return window.matchMedia("screen and (max-width: 640px)").matches;case"tablet":return window.matchMedia("screen and (min-width: 641px) and (max-width: 1007px)").matches;case"tablet-and-up":return window.matchMedia("screen and (min-width: 641px)").matches;case"pocket":return window.matchMedia("screen and (max-width: 1007px)").matches;case"lap":return window.matchMedia("screen and (min-width: 1008px) and (max-width: 1279px)").matches;case"lap-and-up":return window.matchMedia("screen and (min-width: 1008px)").matches;case"desk":return window.matchMedia("screen and (min-width: 1280px)").matches;case"widescreen":return window.matchMedia("screen and (min-width: 1600px)").matches}}},{key:"getCurrentBreakpoint",value:function(){return window.matchMedia("screen and (max-width: 640px)").matches?"phone":window.matchMedia("screen and (min-width: 641px) and (max-width: 1007px)").matches?"tablet":window.matchMedia("screen and (min-width: 1008px) and (max-width: 1279px)").matches?"lap":window.matchMedia("screen and (min-width: 1280px)").matches?"desk":void 0}}]),i}();t.default=n}]);
// }


// Build Default layout
BCSfFilter.prototype.buildDefaultElements=function(){var isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,isSafari=/Safari/.test(navigator.userAgent),isBackButton=window.performance&&window.performance.navigation&&2==window.performance.navigation.type;if(!(isiOS&&isSafari&&isBackButton)){var self=this,url=window.location.href.split("?")[0],searchQuery=self.isSearchPage()&&self.queryParams.hasOwnProperty("q")?"&q="+self.queryParams.q:"";window.location.replace(url+"?view=bc-original"+searchQuery)}};

function customizeJsonProductData(data) {for (var i = 0; i < data.variants.length; i++) {var variant = data.variants[i];var featureImage = data.images.filter(function(e) {return e.src == variant.image;});if (featureImage.length > 0) {variant.featured_image = {"id": featureImage[0]['id'],"product_id": data.id,"position": featureImage[0]['position'],"created_at": "","updated_at": "","alt": null,"width": featureImage[0]['width'], "height": featureImage[0]['height'], "src": featureImage[0]['src'], "variant_ids": [variant.id]}} else {variant.featured_image = '';};};var self = bcsffilter;var itemJson = {"id": data.id,"title": data.title,"handle": data.handle,"vendor": data.vendor,"variants": data.variants,"url": self.buildProductItemUrl(data),"options_with_values": data.options_with_values,"images": data.images,"images_info": data.images_info,"available": data.available,"price_min": data.price_min,"price_max": data.price_max,"compare_at_price_min": data.compare_at_price_min,"compare_at_price_max": data.compare_at_price_max};return itemJson;};
BCSfFilter.prototype.prepareProductData=function(data){var self=this;var countData=data.length;for(var k=0;k<countData;k++){data[k]["images"]=data[k]["images_info"];if(data[k]["images"].length>0){data[k]["featured_image"]=data[k]["images"][0]}else{data[k]["featured_image"]={src:bcSfFilterConfig.general.no_image_url,width:"",height:"",aspect_ratio:0}}data[k]["url"]="/products/"+data[k].handle;var optionsArr=[];var countOptionsWithValues=data[k]["options_with_values"].length;for(var i=0;i<countOptionsWithValues;i++){optionsArr.push(data[k]["options_with_values"][i]["name"])}data[k]["options"]=optionsArr;var firstVariant=data[k]["variants"][0];var isRoundedPrice=true;if(firstVariant.hasOwnProperty("fulfillment_service")&&firstVariant.fulfillment_service=="gift_card"){isRoundedPrice=false}if(typeof self.convertPriceBasedOnActiveCurrency!=="undefined"){data[k].price_min=self.convertPriceBasedOnActiveCurrency(data[k].price_min,isRoundedPrice);data[k].price_max=self.convertPriceBasedOnActiveCurrency(data[k].price_max,isRoundedPrice);data[k].compare_at_price_min=self.convertPriceBasedOnActiveCurrency(data[k].compare_at_price_min,isRoundedPrice);data[k].compare_at_price_max=self.convertPriceBasedOnActiveCurrency(data[k].compare_at_price_max,isRoundedPrice)}data[k]["price_min"]*=100,data[k]["price_max"]*=100;if(data[k]["compare_at_price_min"]!=null){data[k]["compare_at_price_min"]*=100}if(data[k]["compare_at_price_max"]!=null){data[k]["compare_at_price_max"]*=100}data[k]["price"]=data[k]["price_min"];data[k]["compare_at_price"]=data[k]["compare_at_price_min"];data[k]["price_varies"]=data[k]["price_min"]!=data[k]["price_max"];if(getParam("variant")!==null&&getParam("variant")!=""){var paramVariant=data[k]["variants"].filter(function(e){return e.id==getParam("variant")});if(typeof paramVariant[0]!=="undefined")firstVariant=paramVariant[0]}else{var countVariants=data[k]["variants"].length;for(var i=0;i<countVariants;i++){if(data[k]["variants"][i].available){firstVariant=data[k]["variants"][i];break}}}data[k]["selected_or_first_available_variant"]=firstVariant;var countVariants=data[k]["variants"].length;for(var i=0;i<countVariants;i++){var variantOptionArr=[];var count=1;var variant=data[k]["variants"][i];var variantOptions=variant["merged_options"];if(Array.isArray(variantOptions)){var countVariantOptions=variantOptions.length;for(var j=0;j<countVariantOptions;j++){var temp=variantOptions[j].split(":");data[k]["variants"][i]["option"+(parseInt(j)+1)]=temp[1];data[k]["variants"][i]["option_"+temp[0]]=temp[1];variantOptionArr.push(temp[1])}data[k]["variants"][i]["options"]=variantOptionArr}if(data[k]["variants"][i]["compare_at_price"]!=null){var variantCompareAtPrice=parseFloat(data[k]["variants"][i]["compare_at_price"]);if(typeof self.convertPriceBasedOnActiveCurrency!=="undefined"){variantCompareAtPrice=self.convertPriceBasedOnActiveCurrency(variantCompareAtPrice,isRoundedPrice)}data[k]["variants"][i]["compare_at_price"]=variantCompareAtPrice*100}var variantPrice=parseFloat(data[k]["variants"][i]["price"]);if(typeof self.convertPriceBasedOnActiveCurrency!=="undefined"){variantPrice=self.convertPriceBasedOnActiveCurrency(variantPrice,isRoundedPrice)}data[k]["variants"][i]["price"]=variantPrice*100}data[k]["description"]=data[k]["content"]=data[k]["body_html"];if(data[k].hasOwnProperty("original_tags")&&data[k]["original_tags"].length>0){data[k]["tags"]=data[k]["original_tags"].slice(0)}data[k]["json"]=customizeJsonProductData(data[k])}return data};
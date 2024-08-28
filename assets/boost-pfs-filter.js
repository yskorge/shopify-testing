
var onSale = false;
var soldOut = false;
var priceVaries = false;
var images = [];
var firstVariant = {};
// Override Settings
var boostPFSFilterConfig = {
	general: {
		limit: boostPFSThemeConfig.custom.products_per_page,
		/* Optional */
		loadProductFirst: false,
		numberFilterTree: 2,
		filterTreeMobileStyle: 'style1'
	},
};

(function() {
	BoostPFS.inject(this);

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
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
			var paramVariant = data.variants.filter(function(e) { return e.id == Utils.getParam('variant'); });
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
	ProductGridItem.prototype.compileTemplate = function(data, index) {
		if (!data) data = this.data;
		if (!index) index = this.index;
		// Get Template
		var itemHtml = boostPFSTemplate.productGridItemHtml;
		// Customize API data to get the Shopify data
		data = prepareShopifyData(data);

		// Add Label
		itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));

		//Add class
		itemHtml = itemHtml.replace(/{{mobileRow}}/g, boostPFSConfig.custom.mobile_row);
		itemHtml = itemHtml.replace(/{{tabletRow}}/g, boostPFSConfig.custom.tablet_row);
		itemHtml = itemHtml.replace(/{{desktopRow}}/g, boostPFSConfig.custom.desktop_row );

		// Add Images
		itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImage(data, images));
		// Add Quick shop
		var itemQuickShopButtonHtml = '';
		if (boostPFSConfig.custom.show_quick_view) {
			itemQuickShopButtonHtml = `<quick-view-opener class="ProductItem__QuickViewOpener" data-url="{{itemUrl}}" data-product-id="${data.id}">` +
				'<button class="ProductItem__QuickViewBtn">' + boostPFSConfig.label.quick_shop + '</button>' +
				'</quick-view-opener>';
		}
		itemHtml = itemHtml.replace(/{{itemQuickView}}/g, itemQuickShopButtonHtml);

		// Add main attribute (Always put at the end of this function)
		itemHtml = itemHtml.replace(/{{itemInfo}}/g, buildInfo(data, index));

		// Add Reviews
		if (typeof Integration === 'undefined' || !Integration.hascompileTemplate('reviews')) {
			itemHtml = itemHtml.replace(/{{itemReviews}}/g, '');
		}
		itemHtml = itemHtml.replace(/{{buildClassHiz}}/g, buildClassHiz());
		itemHtml = itemHtml.replace(/{{buildClass}}/g, buildClass());
		itemHtml = itemHtml.replace(/{{buildButtonSecond}}/g, buildButtonSecond());
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));

		if (typeof Utils.compileShopifyProductVariables == 'function') {
			itemHtml = Utils.compileShopifyProductVariables(data, itemHtml);
		}

		if (typeof Utils.compileShopifyProductMetafield == 'function') {
			itemHtml = Utils.compileShopifyProductMetafield(data, itemHtml);
		}
		return itemHtml;
	};

	/************************** END BUILD PRODUCT LIST **************************/
	/************************** BUILD PRODUCT ITEM ELEMENTS **************************/
	function buildClass() {
		return boostPFSThemeConfig.custom.filter_position == 'drawer' ? 'lap-and-up' : 'desk';
	}

	function buildClassHiz() {
		return boostPFSThemeConfig.custom.use_horizontal ? 'ProductItem--horizontal' : '';
	}

	function buildButtonSecond() {
		return boostPFSThemeConfig.custom.use_horizontal ? '<a href="{{itemUrl}}" class="ProductItem__ViewButton Button Button--secondary hidden-pocket">' + boostPFSThemeConfig.label.view_product + '</a>' : '';
	}

	function buildImage(data, images) {
		var htmlImg = '';
		if (!images) images = [];
		if (images.length == 0){
			images.push({
				src: boostPFSConfig.general.no_image_url,
				id: data.id,
				width: 480,
				height: 480
			});
		}

		if (images.length > 0) {
			htmlImg += '<a href="{{itemUrl}}" class="ProductItem__ImageWrapper ';
			var use_natural_size = false;
			var has_alternate_image = false;
			if (boostPFSThemeConfig.custom.product_image_size == 'natural' || boostPFSThemeConfig.custom.use_horizontal) {
				use_natural_size = true;
			}
			if (boostPFSThemeConfig.custom.product_show_secondary_image && images.length > 1 && !boostPFSThemeConfig.custom.use_horizontal) {
				has_alternate_image = true;
			}
			if (has_alternate_image) {
				htmlImg += 'ProductItem__ImageWrapper--withAlternateImage';
			}
			htmlImg += '">';
			
			var max_width = images[0].width;
			if (boostPFSThemeConfig.custom.use_horizontal) max_width = 125;
			var withCall = use_natural_size ? 'withFallback' : boostPFSThemeConfig.custom.product_image_size;
			htmlImg += '<div class="AspectRatio AspectRatio--' + withCall + '" style="max-width: ' + max_width + 'px;';
			var aspect_ratio = images[0].width / images[0].height;
			if (use_natural_size) {
				htmlImg += 'padding-bottom: ' + (100 / aspect_ratio) + '%;';
			}
			htmlImg += ' --aspect-ratio: ' + aspect_ratio + '">';
			
			if (has_alternate_image && images.length > 1) {
				var sizes = '200,300,400,600,800,900,1000,1200';
				var support_size = imageSize(sizes, images[1]);
				var thumbUrl = Utils.optimizeImage(images[1]['src'], '{width}x');
				htmlImg += '<img class="ProductItem__Image ProductItem__Image--alternate Image--lazyLoad Image--fadeIn" data-src="' + thumbUrl + '" data-widths="[' + support_size + ']" data-sizes="auto" alt="' + data.title + '" data-image-id="' + images[1].id + '">';
			}
			
			var sizes_main = '200,400,600,700,800,900,1000,1200';
			var support_size = imageSize(sizes_main, images[0]);
			var thumbUrl_main = images.length > 0 ? Utils.optimizeImage(images[0]['src'], '{width}x') : boostPFSConfig.general.no_image_url;
			htmlImg += '<img class="ProductItem__Image Image--lazyLoad Image--fadeIn" data-src="' + thumbUrl_main + '" data-widths="[' + support_size + ']" data-sizes="auto" alt="' + data.title + '" data-image-id="' + images[0].id + '">';
			htmlImg += '<span class="Image__Loader"></span>';
			// htmlImg += '<noscript>';
			// htmlImg += '<img class="ProductItem__Image ProductItem__Image--alternate" src="' + Utils.optimizeImage(images[0]['src'], '600x') + '" alt="' + data.title + '">';
			// htmlImg += '<img class="ProductItem__Image" src="' + Utils.optimizeImage(images[0]['src'], '600x') + '" alt="' + data.title + '">';
			// htmlImg += '</noscript>';
			htmlImg += '</div>';
			htmlImg += '<span class="u-visually-hidden">' + data.vendor + '</span></a>';
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
			
			if (supported_sizes == '') supported_sizes = image.width;
			
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
		var show_price_on_hover = boostPFSThemeConfig.custom.product_show_price_on_hover;
		var classPriceHover = show_price_on_hover ? 'ProductItem__PriceList--showOnHover' : '';
		html += '<div class="ProductItem__PriceList ' + classPriceHover + ' Heading">';
		if (onSale) {
			html += '<span class="ProductItem__Price Price Price--highlight Text--subdued" data-money-convertible>' + Utils.formatMoney(data.price_min) + '</span> ';
			html += '<span class="ProductItem__Price Price Price--compareAt Text--subdued" data-money-convertible>' + Utils.formatMoney(data.compare_at_price_min) + '</span>';
		} else {
			if (priceVaries) {
				html += '<span class="ProductItem__Price Price Text--subdued">' + boostPFSThemeConfig.label.from.replace(/{{min_price}}/g, Utils.formatMoney(data.price_min)) + '</span>';
			} else {
				html += '<span class="ProductItem__Price Price Text--subdued" data-money-convertible>' + Utils.formatMoney(data.price_min) + '</span>';
			}
		}
		html += '</div>';
		return html;
	}
  
  	function buildLabels(data) {
        var product_labels = '';
        var has_labels = false;
        if (boostPFSThemeConfig.custom.show_labels) {
            product_labels = '';
            var tags = data.tags;
            for (var k = 0; k < tags.length; k++) {
                var tag = tags[k].toLowerCase().replace(/ /g, '-');
                if (tag.indexOf('__label') != -1) {
                    product_labels += '<span class="ProductItem__Label Heading Text--subdued">' + tag.split('__label:')[1] + '</span>';
                    break;
                }
            }

            var allProductTags = JSON.stringify(data.tags),
                allProductTagsToLowerCase = allProductTags.toLowerCase().replace(/ /g, '-');

            if (allProductTagsToLowerCase.indexOf('oprahs-favorite') != -1) {
                var badgeLogoUrl = boostPFSThemeConfig.custom.oprahs_favorite_badge;
                has_labels = true;
            } else if (allProductTagsToLowerCase.indexOf('new-product') != -1) {
                var badgeLogoUrl = boostPFSThemeConfig.custom.new_product_badge;
                has_labels = true;
            } else if (allProductTagsToLowerCase.indexOf('coming-soon') != -1) {
                var badgeLogoUrl = boostPFSThemeConfig.custom.coming_soon_badge;
                has_labels = true;
            } else if (allProductTagsToLowerCase.indexOf('limited-time-offer') != -1) {
                var badgeLogoUrl = boostPFSThemeConfig.custom.limited_time_badge;
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
                            product_labels += '<span class="ProductItem__Label Heading Text--subdued">' + boostPFSThemeConfig.label.clearance + '</span>';
                        } else {
                            product_labels += ' <span class="ProductItem__Label Heading Text--subdued">' + boostPFSThemeConfig.label.sale + '</span>';
                        }
                    }
                } else {
                    product_labels += ' <span class="ProductItem__Label Heading Text--subdued SoldOut-badge">' + boostPFSThemeConfig.label.sold_out + '</span>';
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

	function buildLabels(data) {
		var html = '';
		var product_labels = '';
		if (boostPFSThemeConfig.custom.show_labels) {
			product_labels = '';
			var tags = data.tags;
			for (var k = 0; k < tags.length; k++) {
				var tag = tags[k];
				if (tag.indexOf('__label') != -1) {
				product_labels += '<span class="ProductItem__Label Heading Text--subdued">' + tag.split('__label:')[1] + '</span>';
				break;
				}
			}
			if (!soldOut) {
				if (onSale)
					product_labels += '<span class="ProductItem__Label Heading Text--subdued">' + boostPFSThemeConfig.label.sale + '</span>';
			} else {
				product_labels += ' <span class="ProductItem__Label Heading Text--subdued">' + boostPFSThemeConfig.label.sold_out + '</span>';
			}
			if (product_labels != '') {
				html += '<div class="ProductItem__LabelList">';
				html += product_labels;
				html += '</div>';
			}
		}
		return html;
	}

	function buildInfo(data, indx) {
		var html = '';
		if (boostPFSThemeConfig.custom.show_product_info) {
			var infoClass = (!boostPFSThemeConfig.custom.use_horizontal) ? 'ProductItem__Info--' + boostPFSThemeConfig.custom.product_info_alignment : '';
			html += '<div class="ProductItem__Info ' + infoClass + ' ">';
			html += '<h2 class="ProductItem__Title Heading">';
			html += '<a href="{{itemUrl}}"><q>' + data.vendor + ' | ' + data.title + '</q></a>';
			html += '</h2>';
			if (boostPFSThemeConfig.custom.show_reviews) {
				html += `<div style="margin-top: 5px; color: red;"><div data-bv-show="inline_rating" data-bv-product-id="${data.id}" data-bv-redirect-url="{{itemUrl}}" data-bv-seo="false"></div></div>`;
			}
			html += '{{itemReviews}}';
			if (boostPFSThemeConfig.custom.show_color_swatch) {
				html += buildSwatch(data, indx);	
			}
			html += buildPrice(data);
			html += '</div>';
		}

		return html;
	}

	function buildSwatch(data, indx) {
		var itemSwatchHtml = '';
		if (boostPFSThemeConfig.custom.show_color_swatch) {
		var color_name = boostPFSThemeConfig.custom.section_id + '-' + data.id + '-' + indx;
		data.options_with_values.forEach(function (option, index) {
			var option_name = option.name.toLowerCase();
			if (option_name.indexOf('color') != -1 || option_name.indexOf('colour') != -1 || option_name.indexOf('couleur') != -1) {
			var values = '';
			itemSwatchHtml += '<div class="ProductItem__ColorSwatchList">';
			var i = 0;
			data.variants.forEach(function (variant) {
				var temp = variant.merged_options.filter(function (obj) {
					obj = obj.toLowerCase();
					if (obj.indexOf('color') != -1 || obj.indexOf('colour') != -1 || obj.indexOf('couleur') != -1)
						return obj;
				});
				temp = temp[0].split(':');

				var value = temp[1].toLowerCase();
				if (values.indexOf(value) == -1) {
					values = values + ',' + value;
					values = values.split(',');
					var size = '200,400,600,700,800,900,1000,1200';
					var supported_sizes = imageSize(size, variant.image);
					var color_image = Utils.optimizeImage(variant.image);
					var name_color = Utils.slugify(value) + '.png';
					var checked = (i == 0) ? 'checked=checked' : '';
					var imageInfo = null;
					var image_aspect_ratio = 1;
					imageInfo = data.images_info.find(function (imageOb) {
						if (imageOb.src == variant.image){
							image_aspect_ratio = imageOb.width / imageOb.height;
						return imageOb;
						} 
					});
					if (!imageInfo){
						if (data.images_info.length > 0){
							imageInfo = data.images_info[0];
						} else {
							imageInfo = {
							src: boostPFSConfig.general.no_image_url,
								id: variant.id,
								width: 480,
								height: 480
							}
						}
						
					}
					var dataImg = (imageInfo != null) ? '" data-image-url="' + imageInfo.src + '" data-image-widths="[' + supported_sizes + ']" data-image-aspect-ratio="1" data-image-id="' + imageInfo.id + '"' : '';
					var color_input_id = color_name + "-" + values.length;
					var variant_price = variant.price ? variant.price : 0;
					var variant_compare_at_price = variant.compare_at_price ? variant.compare_at_price : 0;
					var url_color = Utils.getFilePath(Utils.slugify('color-' + value), Globals.swatchExtension, Settings.getSettingValue('general.swatchImageVersion'));
					itemSwatchHtml += '<div class="ProductItem__ColorSwatchItem">';
					itemSwatchHtml += '<input class="ColorSwatch__Radio" type="radio" ' + checked + ' name="' + color_name + '" aria-labelledby="' + color_input_id + '" value="' + value + '" data-image-aspect-ratio="' + image_aspect_ratio + '" data-variant-price="' + variant_price + '" data-variant-compare-at-price="' + variant_compare_at_price + '" data-variant-url="' + Utils.buildProductItemUrl(data) + '?variant=' + variant.id + '#Image' +  imageInfo.id + '"' + dataImg + '  aria-hidden="true">';
					itemSwatchHtml += '<label class="ColorSwatch ColorSwatch--small" id="' + color_input_id + '"  aria-label="The ' + value + ' color" style="background-color: ' + value.replace(' ', '').toLowerCase() + '; background-image: url(' + url_color + ')" title="' + value + '" data-tooltip="' + value + '"></label>';
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
	ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
		if (!totalProduct) totalProduct = this.totalProduct
		// Get page info
		var currentPage = parseInt(Globals.queryParams.page);
		var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);

		if (totalPage > 1) {
			var paginationHtml = boostPFSTemplate.paginateHtml;
			// Build Previous
			var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
			previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
			paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
			// Build Next
			var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
			nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
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
				pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
				} else {
				pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
				}
				pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
				pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
			}
			paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
			return paginationHtml;
		}

		return '';
	};

	// Build Sorting
	ProductSorting.prototype.compileTemplate = function() {
		var html = '';
		if (boostPFSThemeConfig.custom.show_sorting && boostPFSTemplate.hasOwnProperty('sortingHtml')) {
			var sortingArr = Utils.getSortingList();
			if (sortingArr) {
				// Build content
				var sortingItemsHtml = '';
				for (var k in sortingArr) {
					var classActive = (Globals.queryParams.sort == k) ? 'is-selected' : '';
					sortingItemsHtml += '<button class="Popover__Value ' + classActive + ' Heading Link Link--primary u-h6" data-value="' + k + '">' + sortingArr[k] + '</button>';
				}
				html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
			}
		}
		return html;
	};

	// Build Sorting event
	ProductSorting.prototype.bindEvents = function() {
		var topSortingSelector = jQ(Selector.topSorting);
		topSortingSelector.find('.Popover__Value').click(function(e) {
			FilterApi.setParam('sort', jQ(this).data('value'));
			FilterApi.setParam('page', 1);
			FilterApi.applyFilter('sort');
			jQ('.CollectionToolbar__Item--sort').trigger('click');
		});
	}
	/************************** END BUILD TOOLBAR **************************/

	// Add additional feature for product list, used commonly in customizing product list
	ProductList.prototype.afterRender = function(data, eventType) {
		if (!data) data = this.data;
		if (!eventType) eventType = this.eventType;
		/**
		 *  Call theme function 
		 *  1. Add var bcPrestigeSections; var bcPrestigeSectionContainer; to assets/theme.min.js
		 *  2. In assets/theme.min.js, find var YYY=new XXX.SectionContainer; For example: var e=new o.SectionContainer;
		 *  3. Replace var e=new o.SectionContainer; by var e=new o.SectionContainer; var YYY = new XXX.SectionContainer;  bcPrestigeSections = YYY; bcPrestigeSectionContainer = XXX;
		
		if(typeof bcPrestigeSectionContainer != 'undefined' && typeof bcPrestigeSections != 'undefined'){
		bcPrestigeSections.register("collection", bcPrestigeSectionContainer.CollectionSection);
		bcPrestigeSections.register("search", bcPrestigeSectionContainer.SearchSection);
		}  
		*/

		// Fix image not load on Instagram browser - initialize swatch image
		jQ(".ProductItem__Info .ProductItem__ColorSwatchList .ProductItem__ColorSwatchItem label.ColorSwatch").click(function() {
			jQ(this).parent().parent().find('label.ColorSwatch').removeClass('active');
			jQ(this).addClass('active');
			var parent = jQ(this).parent();
			var productImage = jQ(this).parent().parent().parent().parent().find('a.ProductItem__ImageWrapper');
			var variantInfo = parent.find('input.ColorSwatch__Radio');
			productImage.find('.AspectRatio .bc-sf-product-swatch-img').remove();
			productImage.find('.AspectRatio').prepend('<img class="bc-sf-product-swatch-img" src="' + variantInfo.data('image-url') + '" />');
			productImage.find('img.ProductItem__Image').hide();
			productImage.attr('href', variantInfo.data('variant-url'));
			var variantPrice = '';
			if (variantInfo.data('variant-compare-at-price') > variantInfo.data('variant-price')){
				variantPrice += '<span class="ProductItem__Price Price Price--highlight Text--subdued" data-money-convertible="">' + Utils.formatMoney(variantInfo.data('variant-price')) + '</span>'
				variantPrice += '<span class="ProductItem__Price Price Price--compareAt Text--subdued" data-money-convertible="">' + Utils.formatMoney(variantInfo.data('variant-compare-at-price')) + '</span>';
			} else {
				variantPrice += '<span class="ProductItem__Price Price Text--subdued" data-money-convertible>' + Utils.formatMoney(variantInfo.data('variant-price')) + '</span>';
			}
			jQ(this).closest('.ProductItem__Wrapper').find('.ProductItem__PriceList').html(variantPrice);
		})

		//Change view layout
		var desktopView = jQ('.CollectionToolbar__LayoutSwitch.hidden-phone').find('.is-active').data('count');
		if (desktopView && desktopView != parseInt(boostPFSThemeConfig.custom.desktop_row)) {
			jQ(Selector.products + ' .Grid__Cell').removeClass('1/' + boostPFSThemeConfig.custom.tablet_row + '--tablet-and-up 1/' + boostPFSThemeConfig.custom.desktop_row + '--' + buildClass());
			jQ(Selector.products + ' .Grid__Cell').addClass('1/' + desktopView + '--tablet-and-up 1/' + desktopView + '--' + buildClass());
		}
		var mobileView = jQ('.CollectionToolbar__LayoutSwitch.hidden-tablet-and-up').find('.is-active').data('count');
		if (mobileView && mobileView != parseInt(boostPFSThemeConfig.custom.mobile_row)) {
			jQ(Selector.products + ' .Grid__Cell').removeClass('1/'+ boostPFSThemeConfig.custom.mobile_row + '--phone');
			jQ(Selector.products + ' .Grid__Cell').addClass('1/'+ mobileView + '--phone');
		}
	};

	// Build additional elements
	FilterResult.prototype.afterRender = function(data, eventType) {
		if (!data) data = this.data;
		if (!eventType) eventType = this.eventType;
	};

	// Build Default layout
	Filter.prototype.errorFilterCallback = function(){var isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,isSafari=/Safari/.test(navigator.userAgent),isBackButton=window.performance&&window.performance.navigation&&2==window.performance.navigation.type;if(!(isiOS&&isSafari&&isBackButton)){var self=this,url=window.location.href.split("?")[0],searchQuery=self.isSearchPage()&&self.queryParams.hasOwnProperty("q")?"&q="+self.queryParams.q:"";window.location.replace(url+"?view=bc-original"+searchQuery)}};
})();
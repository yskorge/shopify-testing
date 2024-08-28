// Override Settings
var bcSfSearchSettings = {
	search: {
		suggestionStyle: 'style2',
		suggestionStyle2MainContainerSelector: '#shopify-section-header',
		suggestionMobileStyle: 'style2',
	}
};

// Customize style of Suggestion box
BCSfFilter.prototype.customizeSuggestion = function (suggestionElement, searchElement, searchBoxId) {
};

BCSfFilter.prototype.initSearchBox = function (id) {
	if (this.getSettingValue('search.enableSuggestion')) {

		//Remove theme's instant search
		removeThemeSearchEvent();

		var self = this;
		if (typeof id === 'undefined') {
			jQ('input[name="' + this.searchTermKey + '"]').each(function (i) {
				if (!jQ(this)[0].hasAttribute('data-no-bc-search')) {
					var id = 'bc-sf-search-box-' + i;
					jQ(this).attr('id', id);
					self.buildSearchBox('#' + id)
				}
			});
		} else {
			this.buildSearchBox(id);
		}
		if (this.isMobile()) {
			// Clear cache when going back from another page
			window.onpageshow = function (event) {
				if (event.persisted) {
					window.location.reload();
				}
			};
			// Build Suggestion mobile on top
			if (this.getSettingValue('search.suggestionMobileStyle') == 'style1') {
				this.buildSuggestionMobile();
			}
		}
	}
};

function removeThemeSearchEvent() {
	// Remove all events
	if (jQ('[name="q"]').length > 0) {
		var cloneSearchBar = jQ('[name="q"]:first').clone();
		jQ(cloneSearchBar).removeClass('Form__Input').addClass('Search__Input Heading');
		jQ('[name="q"]:first').replaceWith(cloneSearchBar);
		if (jQ('#Search').length > 0) {
			if (jQ('#Search').hasClass('Modal--fullScreen')) {
				jQ('#Search').attr("style", "height: 0px !important");
			}
			jQ('#Search .Search__Results').attr("style", "display: none !important");
		}
		
		// Rebuild click search icon event
		if (jQ('[data-action="toggle-search"]').length > 0) {
			jQ('[data-action="toggle-search"]').on('click', function () {
				setTimeout(function () {
					jQ('[name="q"]:first').focus();
				}, 500);
			})
		}
	}
}
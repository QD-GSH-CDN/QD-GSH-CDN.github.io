/**
* Funções base
*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E", "\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});
/*! * Javascript Cookie v1.5.1 * https://github.com/js-cookie/js-cookie * * Copyright 2006, 2014 Klaus Hartl * Released under the MIT license */
(function(e){var l;if("function"===typeof define&&define.amd)define(["jquery"],e);else if("object"===typeof exports){try{l=require("jquery")}catch(n){}module.exports=e(l)}else{var m=window.Cookies,h=window.Cookies=e(window.jQuery);h.noConflict=function(){window.Cookies=m;return h}}})(function(e){function l(a){a=c.json?JSON.stringify(a):String(a);return c.raw?a:encodeURIComponent(a)}function n(a,r){var b;if(c.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g, "\\"));try{d=decodeURIComponent(d.replace(p," "));b=c.json?JSON.parse(d):d;break a}catch(e){}b=void 0}return h(r)?r(b):b}function m(){for(var a,c,b=0,d={};b<arguments.length;b++)for(a in c=arguments[b],c)d[a]=c[a];return d}function h(a){return"[object Function]"===Object.prototype.toString.call(a)}var p=/\+/g,c=function(a,e,b){if(1<arguments.length&&!h(e)){b=m(c.defaults,b);if("number"===typeof b.expires){var d=b.expires,k=b.expires=new Date;k.setMilliseconds(k.getMilliseconds()+864E5*d)}return document.cookie= [c.raw?a:encodeURIComponent(a),"=",l(e),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},k=document.cookie?document.cookie.split("; "):[],q=0,p=k.length;q<p;q++){var f=k[q].split("="),g;g=f.shift();g=c.raw?g:decodeURIComponent(g);f=f.join("=");if(a===g){d=n(f,e);break}a||void 0===(f=n(f))||(d[g]=f)}return d};c.get=c.set=c;c.defaults={};c.remove=function(a,e){c(a,"",m(e,{expires:-1})); return!c(a)};e&&(e.cookie=c,e.removeCookie=c.remove);return c});
var $Cookies = Cookies.noConflict();

// Variável para checar o CDN
var _QD_cdn_check = true;

try {
	var Common = {
		run: function() {
			Common.storeUtm();
		},
		init: function() {
			Common.bannersCount();
			Common.amazingMenu();
			Common.bannerResponsive();
			Common.productCaroussel();
			Common.productOwlCarousel();
			Common.sidemenuToggle();
			Common.modalGeneralCallback();
			Common.setBodyClassByUtm();
			Common.flagOff();
			Common.removeSkinNeutral();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		bannersCount: function() {
			$(".box-banner").parent().each(function() {
				var $t = $(this);
				$t.addClass("qdBannerCount-" + $t.find(".box-banner").length);
			});
		},
		amazingMenu:function(){
			$('[class*=main-amazing-menu]').QD_amazingMenu();
		},
		bannerResponsive:function(){
			$(".qd-banner-responsive .box-banner a").each(function(){
				var $t = $(this);
				var cols = [];

				var href = $t.attr("href") || "";
				if(!href.length)
					return;

				$t.attr( "href", href.replace(/(col-)?(xs|sm|md|lg)-[0-9]{1,2},?/ig, function(match){
					var str = match.replace(",", "").toLowerCase();
					cols.push( str.substr(0,4) === "col-" ? str : "col-" + str );
					return "";
				}) );

				$t.parent().addClass( cols.length ? cols.join(" ") : "col-xs-24 col-sm-24" );
			});
		},
		productOwlCarousel:function(){
			if (!$.fn.owlCarousel)
				return;

			$(".qd-shelf-carousel .prateleira").removeClass('row').each(function() {
				$(this).owlCarousel({
					items: 4,
					navigation: true,
					pagination: false
				});
			});
		},
		productCaroussel: function(){
			$(".qd-shelf-carousel .prateleira").each(function(){
				var wrap = $(this);

				wrap.find("h2").addClass('heading-2').insertBefore(wrap);
				wrap.find(".prateleira >ul").addClass("item");
			});
		},
		sidemenuToggle:function(){
			// Amazing Menu Responsivo
			$(".side-menu-toggle").click(function(){
				$("body").toggleClass('qd-sm-on');
			});
			$(".qd-sm-overlay, .close-btn-sidebar").click(function(){
				$("body").removeClass('qd-sm-on');
			});
		},
		modalGeneralCallback: function() {
			$(".modal").on("hidden.bs.modal", function() {
				$(this).attr("class", "modal fade");
			});
		},
		storeUtm: function() {
			try {
				var utm = (location.search.match(/utm_source\=([^&]+)/i) || [""]).pop();

				if(utm.length)
					$Cookies.set("qdUtmSource", utm, {path: "/", expires: 30});
			}
			catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
		},
		setBodyClassByUtm: function() {
			try {
				var utm = $Cookies.get("qdUtmSource");

				if(utm)
					$(document.body).addClass("qd-utmsource-" + utm);
			}
			catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
		},
		flagOff: function() {
			$('.shelf-stamps .saveAmountStamp').each(function() {
				var $t = $(this);

				$t.parent().find("a").append('<div class="off-selo"></div>');
				$t.parent().find(".off-selo").append($t);
			});
		},
		removeSkinNeutral: function() {
			$("#qd-skin-neutral").remove();
		}
	};

	var Home = {
		init: function() {
			Home.brandOwlCarousel();
			Home.productOwlCarousel();
			Home.productCaroussel();
			Home.bannerOrganization();
			Home.mosaicAdjustment();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		brandOwlCarousel:function(){

			var owl = $(".qd-banner-carousel");

			owl.owlCarousel({
				items: 5,
				navigation: true,
				pagination: false,
				navigationText: ["",""]
			});

			// Custom Navigation Events
			$(".owl-next").click(function(){
				owl.trigger('owl.next');
			});
			$(".owl-prev").click(function(){
				owl.trigger('owl.prev');
			});
		},
		productOwlCarousel:function(){
			if (!$.fn.owlCarousel)
				return;

			$(".qd-shelf-carousel-column .prateleira").each(function() {
				$(this).owlCarousel({
					items: 1,
					navigation: true,
					pagination: false
				});
			});
		},
		productCaroussel: function(){
			$(".qd-shelf-carousel-column .prateleira").each(function(){
				var wrap = $(this);

				wrap.find("h2").addClass('heading-2').insertBefore(wrap);
				wrap.find(".prateleira >ul").addClass("item");
			});
		},
		bannerOrganization: function() {
			$(".qd-banner-mosaic .box-banner a").each(function(){
				var $t = $(this);
				var cols = [];

				var href = $t.attr("href") || "";
				if(!href.length)
					return;

				$t.attr( "href", href.replace(/(col-)?(xs|sm|md|lg)-[0-9]{1,2},?/ig, function(match){
					var str = match.replace(",", "").toLowerCase();
					cols.push( str.substr(0,4) === "col-" ? str : "col-" + str );
					return "";
				}) );

				$t.parent().addClass( cols.length ? cols.join(" ") : "col-xs-24 col-sm-24" );
			});
		},
		mosaicAdjustment: function() {
			mosaicAddRow($(".qd-mosaic-wrapper > div:not(.row)"));

			function mosaicAddRow(wrapper) {
				try {
					var firstTop;
					var items = new $;

					if(!wrapper.length)
						return;

					wrapper.each(function(){
						var $t = $(this);
						var offsetTop = $t.offset().top;

						if (!firstTop)
							firstTop = offsetTop;

						if (offsetTop >= firstTop - 10 && offsetTop <= firstTop + 10)
							items = items.add($t);
						else
							return false;
					});

					items.wrapAll('<div class="row"></div>');

					mosaicAddRow($(".qd-mosaic-wrapper > div:not(.row)"));
				}
				catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
			}
		}
	};

	var Departament = {
		init: function() {
			// Chamar antes de todos
			if(location.hostname.search(/aminhalista/i) > -1){
				Search.setSearchPageType();
				Search.searchPageType();

				Search.listQuantityTopBar();
				Search.addToList();
				Search.multiAddToList();
				Search.multiAddToListCount();
				Search.configBuyButton();
				Search.callSmartCart();
			}

			Departament.searchNavigatorToggle();
			Departament.hideExtendedMenu();
			Search.smartQuantity();
			Search.shelfClear();
			Search.hideMosaicDepartaments();
		},
		ajaxStop: function() {
			if(location.hostname.search(/aminhalista/i) > -1){
				Search.multiAddToListCount();
				Search.addToList();
				Search.configBuyButton();
			}
		},
		windowOnload: function() {},
		windowResize: function() {
			Search.shelfClearResize();
		},
		searchNavigatorToggle:function(){
			// Amazing Menu Responsivo
			$(".sn-menu-toggle").click(function(){
				$("body").toggleClass('qd-sn-on');
			});
			$(".qd-sm-overlay, .close-btn-sidebar").click(function(){
				$("body").removeClass('qd-sn-on');
			});
		},
		hideExtendedMenu:function(){
			$(".search-navigator ul").each(function(){
				var t,li,qtt,moreLink,moreLi,click,liHide;

				t=$(this);
				li=t.find(">li");
				qtt=7;

				if(li.length<=qtt) return;

				liHide=li.filter(":gt("+(qtt-1)+")").stop(true,true).hide();
				moreLink=$('<a class="qd-viewMoreMenu">Mostrar mais</a>');
				t.after(moreLink);
				moreLi=$('<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais</a></li>');
				t.append(moreLi);

				click=function(){
					liHide.stop(true,true).slideToggle(function(){
						if(li.filter(":visible").length>qtt){
							moreLink.addClass("minus").text("Mostrar menos");
							moreLi.addClass("minus").find("a").text("Mostrar menos");
						}
						else{
							moreLink.removeClass("minus").text("Mostrar mais");
							moreLi.removeClass("minus").find("a").text("Mostrar mais");
						}
					});
				};
				moreLi.bind("click.qd_viewMore",click);
				moreLink.bind("click.qd_viewMore",click);
			});
		}
	};

	var Search = {
		init: function() {
			// Chamar antes de todos
			if(location.hostname.search(/aminhalista/i) > -1){
				Search.setSearchPageType();
				Search.searchPageType();

				Search.listQuantityTopBar();
				Search.addToList();
				Search.multiAddToList();
				Search.multiAddToListCount();
				Search.configBuyButton();
				Search.callSmartCart();
				List.dropdownmenuToggle();
			}

			Departament.searchNavigatorToggle();
			Search.emptySearch();
			Search.smartQuantity();
			Search.shelfClear();
			Search.hideMosaicDepartaments();
		},
		ajaxStop: function() {
			if(location.hostname.search(/aminhalista/i) > -1){
				Search.multiAddToListCount();
				Search.addToList();
				Search.configBuyButton();
			}
		},
		windowOnload: function() {
			Search.shelfClear();
		},
		windowResize: function() {
			Search.shelfClearResize();
		},
		callSmartCart: function() {
			if($(document.body).is(".qd-giftlist-buy-product"))
				List.callSmartCart();
		},
		emptySearch:function () {
			if ($('.busca-vazio').length>0) {
				$('.no-search-result').show();
				$('.searchTitle').hide();
			};
		},
		configBuyButton: function() {
			if(!$(document.body).is(".qd-giftlist-buy-product"))
				return;

			var btn = $("li[layout] .btn-add-buy-button-asynchronous");

			// Adiciono o id da lista a qual o presente pertence
			btn.each(function() {
				var $t = $(this);
				$t.attr("href", ($t.attr("href") || "").replace(/gr\=[0-9]+\&?/i, "").replace(/sc\=/i, "gr=" + ($(document.body).attr("data-qd-list-id") || "") + "&sc="));
			});

			// Adiciono texto do botão
			if(!btn.find(".buy-gift-this-content").length)
				btn.prepend('<div class="buy-gift-this-content"> <span class="buy-gift-this"><strong>Comprar</strong> Este Presente</span> </div>');
		},
		hideMosaicDepartaments: function() {
			try {
				// Organziando os links de maneira randomica
				var wrapper = $(".giftListNavigation-tab .search-single-navigator");
				wrapper.html(knuthShuffle(wrapper.find("h3")));

				var posTop = -1;
				var lines = 1;
				wrapper.find("h3").each(function() {
					try {
						var $t = $(this);
						var curTop = $t.offset().top;

						if(posTop == -1)
							posTop = curTop;

						if(curTop > (posTop + 50))
							lines = lines + 1;

						if(lines > 3){
							$t.add($t.nextAll()).addClass("hide");
							return false;
						}

						posTop = curTop;
					}
					catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
				});
			}
			catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
		},
		setSearchPageType: function() {
			var utmqd = (location.search.match(/utmqd_source\=([a-z0-9\-_]+)/i) || [""]).pop();

			if(utmqd.toLowerCase().indexOf("list_") > -1)
				$Cookies.set("qdSearchPageType", utmqd, {path: "/", expires: 7});
			else if(utmqd.toLowerCase().indexOf("listadd_") > -1)
				$Cookies.set("qdSearchPageType", utmqd, {path: "/", expires: 7});
			else if(!$Cookies.get("qdSearchPageType"))
				location.pathname = "/";
		},
		searchPageType: function() {
			var cookie = $Cookies.get("qdSearchPageType");

			if(!cookie)
				return;

			if(cookie.toLowerCase().indexOf("list_") > -1){
				$(document.body).addClass('qd-giftlist-add-product').attr("data-qd-list-id", cookie.split("_").pop());

				// Verificando se o usuário esta logado
				$.qdAjax({
					url: "/no-cache/profileSystem/getProfile",
					dataType:  "json",
					success: function(data) {
						if(data.IsUserDefined)
							return;

						vtexid.start();
					},
					clearQueueDelay: null
				});
			}
			else if(cookie.toLowerCase().indexOf("listadd_") > -1)
				$(document.body).addClass('qd-giftlist-buy-product').attr("data-qd-list-id", cookie.split("_").pop());
		},
		smartQuantity: function() {
			$(".shelfAmountInCart").QD_smartQuantity({
				buyButton: null
			});
		},
		listQuantityTopBar: function(onlyUpdate) {
			if(!$(document.body).is(".qd-giftlist-add-product"))
				return;

			// Desabilitando o SimpleCart
			if(!onlyUpdate){
				$(".nav-cart.qd_cart_auto").removeClass('qd_cart_auto');
				$(".cart-link").attr("href", "/giftlist/product?id=" + ($(document.body).attr("data-qd-list-id") || ""));
			}

			$.ajax({
				url: "/giftlist/product?lid=da588ddf-abaa-4fad-bdcd-65200601d81f&id=" + ($(document.body).attr("data-qd-list-id") || ""),
				dataType: "html",
				success: function(data) {
					$(".qd_cart_qtt").text(parseInt($(data).find("td.glstat-table-itens").text()) || 0);
				}

			});
		},
		skuToList: function(items) {
			return $.ajax({
				url: "/no-cache/giftlistv2/skutolist",
				type: "POST",
				dataType: "json",
				contentType: "application/json",
				data:JSON.stringify({
					"GiftListId": $(document.body).attr("data-qd-list-id") || "",
					"CheckedItems": items,
					"AddToQuantity": true
				}),
				success: function() {
					Search.listQuantityTopBar(true);
				},
				error: function() {
					alert("Desculpe não foi possível adicionar seu produto. Por favor tente novamente ou entre em contato com o SAC.");
				}
			});
		},
		addToList: function(){
			$("li[layout]:not(.qd_gl_on)").addClass("qd_gl_on").each(function() {
				var $t = $(this);
				var skuId = $t.find(".insert-sku-checkbox").attr("rel") || "";

				$t.find(".bottomAddShoppingList").click(function() {
					Search.skuToList([skuId + "-" + ($t.find(".qd-sq-quantity").val() || "")]).done(function() {
						$t.addClass('qd-giftlist-item-add');
					});
				});
			});
		},
		multiAddToListCount: function() {
			var count = $(".selected-products-value").text(0);

			$("li[layout]:not(.qd_glm_on)").addClass("qd_glm_on").each(function() {
				var $t = $(this);
				var skuId = $t.find(".insert-sku-checkbox").attr("rel") || "";

				$t.find(".qd-select-product-shelf").change(function() {
					count.text($("li[layout] .qd-select-product-shelf:checked").length);
				});
			});
		},
		multiAddToList: function() {
			$(".btn-add-selected-products").click(function() {
				var items = [];
				var $li = new $;

				$("li[layout]:not(.qd-giftlist-item-add)").each(function() {
					var $t = $(this);
					if(!$t.find(".qd-select-product-shelf").is(":checked"))
						return;
					items.push(($t.find(".insert-sku-checkbox").attr("rel") || "") + "-" + ($t.find(".qd-sq-quantity").val() || ""));
					$li = $li.add($t);
				});

				Search.skuToList(items).done(function() {
					$li.addClass('qd-giftlist-item-add');
					$li.find(".qd-select-product-shelf").removeAttr('checked');
				});
			});
		},
		shelfClearResize: function() {
			var time = 0;
			$(window).resize(function() {
				clearTimeout(time);
				time = setTimeout(function() {
					Search.shelfClear();
				}, 20);
			});
		},
		shelfClear: function() {
			try {
				var posTop = -1;
				$(".qd-shelf-clear").remove();

				$("div.prateleira[class*='colunas'] >ul").each(function() {
					var $t = $(this);
					if(posTop == -1){
						posTop = $t.offset().top;
						return;
					}

					var curTop = $t.offset().top;
					if(curTop > (posTop + 50))
						$t.before('<div class="qd-shelf-clear" style="clear:both"/>');

					posTop = curTop;
				}).length;
			}
			catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
		}
	};

	var Product = {
		run: function() {},
		init: function() {
			Product.forceImageZoom();
			Product.shippingFillingForm();
			Product.shippingFormPlaceholder();
			Product.showShipping();
			Product.openShipping();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		forceImageZoom: function() {
			try {
				var orig = window.ImageControl;
				window.ImageControl = function() {
					$("ul.thumbs a").each(function() {
						var $t = $(this);
						if ($t.attr("zoom"))
							return;
						var rel = $t.attr("rel");
						if (rel)
							$t.attr("zoom", rel.replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1000-1000"));
					});
					orig.apply(this, arguments);
				}
			} catch (e) {
				if (typeof console !== "undefined" && typeof console.info === "function")
					console.info("Ops, algo saiu errado como zoom.", e.message);
			}
		},
		shippingFillingForm:function(){
			var title, msg;
			title=$("#txtTituloResenha");
			if(!title.length) return;
			msg=$("#txtTextoResenha");
			if(!msg.length) return; // os ifs estão separados propositalmente, por questões de performance

			title.val(title.val().trim());
			msg.val(msg.val().trim());

			title.filter(":empty").val("titulo automatico");
			msg.filter(":empty").val("Mensagem automatica");
		},
		shippingFormPlaceholder:function(){
			var input;
			// Place holder
			input=$(".shippingWrapTpl #txtCep");
			if(typeof input.attr("href") != "undefined")
				return;
			input.attr("placeholder","CEP");
		},
		showShipping:function(){
			$(".shipping-value").bind("click.showShipping",function(){
				ShippingValue();
			});
		},
		openShipping: function() {
			if(typeof ShippingValue === "function")
				ShippingValue();
		}
	};

	var List = {
		run: function() {
			List.redirectFormCreate();
			List.insertUtmListViewer();
		},
		init: function() {
			List.setBodyClassCloneList();
			List.callSmartCart();
			List.organizingItems();
			List.organizationReadyLists();
			List.searchHtmlFix();
			List.addThis();
			List.copyUrlList();
			List.managerModals();
			List.giftlistCloneShoppingList();
			List.linkNewListAddProducts();
			List.linkBuyOthersProducts();
			List.autoGenerateListUrl();
			List.searchFieldsValidate();
			List.dropdownmenuToggle();
		},
		ajaxStop: function() {
		},
		windowOnload: function() {},
		dropdownmenuToggle:function(){
			// Amazing Menu Responsivo
			$(".toggle-dropdown").click(function(){
				$(".menu-dropdown-toggle > .navigation").slideToggle();
			});
		},
		searchFieldsValidate: function() {
			if(!$(document.body).is(".giftlistsearch"))
				return;

			$("#giftlistsearchname, #giftlistsearchsurname, #giftlistsearcheventdate").keyup(function() {
				$(this).removeClass("error");
			});

			var orig = window.CheckFields;

			window.CheckFields = function() {
				var result = orig(arguments);

				var name = $("#giftlistsearchname").val() != "" || $("#giftlistsearchsurname").val() != "";
				var date = $("#giftlistsearcheventdate").val() != "";

				if(!name)
					$("#giftlistsearchname").addClass("error");
				else if(!date)
					$("#giftlistsearcheventdate").addClass("error");

				if(result)
					return result && name && date;
				else
					return result;
			}
		},
		organizingItems: function() {
			var wrapper = $('<div class="wrapperGiftListInfoV2"></div>');
			var listUrl = $(".giftlistinfo-link input").val();

			$(".GiftListInfoV2").append(wrapper);

			wrapper.append($(".giftlistinfo-description"));
			wrapper.append('<div class="giftlistinfo-link"><span class="link-title">Compartilhar:</span> <span class="url-share"><a href="' + listUrl + '">' + listUrl + '</a></span><a href="#" class="link-copy">(Copiar)</a></div>');
			wrapper.append('<div class="add-this"></div>');
			wrapper.append($(".giftlistinfo-title"));
			wrapper.append($(".giftlistinfo-type-description"));
			wrapper.append('<div class="giftlistinfo-date"> Data: ' + $(".date").text() + '</div>');
			wrapper.append('<div class="giftlistinfo-event-content"><span class="giftlistinfo-event"> Local: ' + $(".location").text() + ' ' + $(".city.state").text() + ' ' + '</span></div>');
			wrapper.append('<div class="giftlistinfo-message"><p>MENSAGEM: ' + $(".giftlistinfo-message").text() + '</p></div>');
			wrapper.append($(".giftlistinfo-image"));
		},
		autoGenerateListUrl: function() {
			var wrapper = $(".GiftListFormV2Wrapper");
			if(!wrapper.length)
				return;

			var url = ["", "", "", ""];

			wrapper.on("keyup focusout", "#membername1", function() {
				url[0] = ($(this).val() || "").toLowerCase();
				setUrl();
			});

			wrapper.on("keyup focusout", "#membername2", function() {
				url[1] = ($(this).val() || "").toLowerCase();
				setUrl();
			});

			wrapper.on("keyup focusout", "#giftlisteventdate", function() {
				url[2] = ($(this).val() || "").toLowerCase();
				setUrl();
			});

			function setUrl() {
				// $("#giftlisturl").val(url.join(" ")).keyup();
				$("#giftlisturl").val(url.join().replace(/[^a-z0-9]/ig, "")).keyup();
			}

			// Atualizando a informação ao carregar a página para já preencher quando os campos já possuirem informação
			$("#membername1, #membername2, #giftlisteventdate").keyup();

			// Obtendo a UTM via cookie e adicionando o ID da lista
			try {
				var utm = ($.cookie("qdUtmSource") || "").toLowerCase().trim();
				if(utm == "espacosantahelena")
					url[3] = "96";
				else if(utm == "cleusa")
					url[3] = "97";
				else if(utm == "suxxar")
					url[3] = "98";

				setUrl();
			}
			catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
		},
		insertUtmListViewer: function(){
		if (location.pathname.search(/^\/list\/.+/) != 0)
			return;

			var utm = (location.search.match(/utm_source\=([^&]+)/i) || [""]).pop();
			if(utm == "espacosantahelena" || utm == "cleusa" || utm == "suxxar")
				return;

			var id = (location.pathname.match(/[0-9]{2}$/i) || [""]).pop();
			if(id == 96)
				location.search = location.search.replace(/utm_source\=([^&]+)/ig, "") + "&utm_source=espacosantahelena";
			else if(id == 97)
				location.search = location.search.replace(/utm_source\=([^&]+)/ig, "") + "&utm_source=cleusa";
			else if(id == 98)
				location.search = location.search.replace(/utm_source\=([^&]+)/ig, "") + "&utm_source=suxxar";
		},
		linkNewListAddProducts: function() {
			var link = $("a.qd_list_add_products");
			if(!link.length)
				return;

			link.attr("href", "/busca?utmqd_source=list_" + (location.search.match(/new\=[0-9]+/i) || [""])[0].split("=").pop());
		},
		linkBuyOthersProducts: function() {
			var link = $(".btn-buy-other-gifts");

			if(link.length)
				link.attr("href", "/busca?utmqd_source=listadd_" + (($(".action-buy a:first").attr("id") || "").match(/\-([0-9]+)/i) || [""]).pop());
		},
		setBodyClassCloneList: function() {
			if (location.search.search(/utmqd_source\=clone_list/i) > -1)
				$(document.body).addClass("qd-clone-list");
		},
		callSmartCart: function() {
			var smartCart = $.QD_smartCart({
				selector:".qd-sc-wrapper",
				dropDown:{
					texts:{
						linkCart:"",
						linkCheckout: "Fechar Pedido",
						continueShopping: "",
						shippingForm: ""
					},
					updateOnlyHover:false
				}
			});
		},
		redirectFormCreate: function() {
			if (location.pathname.search(/^\/giftlist\/manage/) === 0 && (location.search.match(/new\=([0-9]+)/i) || [""]).pop().length)
				location.href = location.href.replace(location.pathname, "/lista/criada");
			else if(location.pathname.search(/^\/giftlist\/manage/) === 0)
				location.href = location.href.replace(location.pathname, "/lista/gerenciar");
		},
		organizationReadyLists: function() {
			$(".lists-ready .box-banner a").each(function(){
				var $t = $(this);
				var cols = [];

				var href = $t.attr("href") || "";
				if(!href.length)
					return;

				$t.attr( "href", href.replace(/(col-)?(xs|sm|md|lg)-[0-9]{1,2},?/ig, function(match){
					var str = match.replace(",", "").toLowerCase();
					cols.push( str.substr(0,4) === "col-" ? str : "col-" + str );
					return "";
				}) );

				$t.parent().addClass( cols.length ? cols.join(" ") : "col-xs-24 col-sm-24" );

				$t.addClass("qd-on");

				$t.after('<a class="link-list" href="'+ $t.attr("href") +'">' + $t.find("img").attr("alt") + '</a>');
			});
		},
		searchHtmlFix: function() {
			if(!$(document.body).is(".giftlistsearch "))
				return;

			$(".glsearch-result").appendTo(".qd-list-search-result");
		},
		addThis:function(){
			var html,userId,elem;
			window.addthis_config = window.addthis_config || {};

			// Configurações
			userId="ra-537ca76b7f873600";
			window.addthis_config.data_track_addressbar=false;
			elem=$(".add-this");


			if(!elem.length) return;

			html=$('<div class="addthis_toolbox addthis_default_style addthis_16x16_style">\
				<a class="addthis_button_facebook"></a>\
				<a class="addthis_button_twitter"></a>\
				<a class="addthis_button_pinterest_share"></a>\
				<a class="addthis_button_email"></a>\
				<a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a>\
				</div>');
			elem.append(html);

			var addthis_config = {"data_track_addressbar":true};

			$.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid="+userId);
		},
		copyUrlList: function() {
			if(typeof $.fn.zclip !== "function")
				return;

			$(".link-copy").zclip({
				path:'/arquivos/ZeroClipboard.swf',
				copy:$('.url-share').text(),
				afterCopy:function(){
					$(this).addClass("copied").text("(Copiado)");
				}
			});
		},
		managerModals: function() {
			var modal = $(".modal");
			$("a.edit-information, a.edit-delete-products, a.follow-list-balance, a.add-products").click(function() {
				modal.modal();
				modal.addClass("qd-giftlist-" + $(this).attr("class").trim().split(" ").join(" qd-giftlist-"));

				var header = modal.find(".modal-header");
				if(!header.children('h3').length)
					header.append('<h3>SELECIONE A LISTA</h3>');

				var body = modal.find(".modal-body");
				body.html('<center>Carregando... <img src="/arquivos/ajax-loader.gif" /></center>');

				$.qdAjax({
					url: "/no-cache/profileSystem/getProfile",
					dataType:  "json",
					success: function(data) {
						if(data.IsUserDefined){
							$.ajax({
								url: "/giftlist/manage",
								dataType: "html",
								success: function(data) {
									var wrapper = $('<div>');
									var items = $(data).find(".glmanager-type");

									items.each(function() {
										var $t = $(this);
										var type = $t.children("h2").text();

										$t.find(".giftlist-table tbody tr").each(function() {
											var $e = $(this);
											var html = "";

											var listId = (($e.attr("id") || "").match(/\-([0-9]+)/i) || [""]).pop();
											var links = $e.children(".giftlist-body-action").clone();
											links.children("ul").append('<li class="action-balance"><a href="/lista/saldo?id=' + listId + '" title="Saldo">Saldo</a></li>')
												.append('<li class="action-add-products"><a href="/busca?utmqd_source=list_' + listId + '" title="Saldo">Saldo</a></li>');

											html += '<div class="row"> <div class="col-xs-24"> <div class="list-item">';
											html += '<p>' + $e.children(".giftlist-body-name").html() + '</p>';
											html += '<ul> <li>Tipo: ' + type + '</li>';
											html += '<li>Data: ' + $e.children(".giftlist-body-eventdate").text() + '</li> </ul>';
											html += '<span>' + links.html() + '</span>';
											html += '</div> </div> </div>';

											wrapper.append(html);
										});
									});

									if(items.length)
										body.html(wrapper);
									else
										body.html('<p class="qd-giftlist-empty">Você ainda não possui nenhuma lista, <a href="/giftlist/create">crie a sua aqui</a></p>');
								},
								error:  function() {alert("Não foi possível obter suas listas. Por favor entre em contato com o SAC.");}
							});
						}
						else{
							vtexid.start();
						}
					},
					error:  function() {alert("Não foi possível acessar suas listas. Por favor entre em contato com o SAC.");},
					clearQueueDelay: null
				});

				return false;
			});
		},
		giftlistCloneShoppingList: function() {
			$(".link-clone-list").click(function(){
				if ($(".glis-popup-link").length > 0) {
					$(".glis-sku-listtolist .glis-listtolist-checkbox").attr("checked", true).click();
					$(".glis-popup-link").click();
				} else {
					$(window.document.location).attr('href', $(".glis-link.must-login").attr("href"));
				}
			});
		}
	};

	var Institutional = {
		init: function() {
			Departament.searchNavigatorToggle();
		},
		ajaxStop: function() {},
		windowOnload: function() {}
	};

	var Orders = {
		init: function() {
			Orders.bootstrapCssFix();
			Departament.searchNavigatorToggle();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		bootstrapCssFix: function() {
			var styleSheets = document.styleSheets;
			for (var i = 0; i < styleSheets.length; i++) {
				if ((styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css') > -1) {
					styleSheets[i].disabled = true;
					break;
				}
			}
		}
	};
} catch (err) {
	if (typeof console !== "undefined" && typeof console.error === "function" && typeof console.info === "function") {
		console.info("Houve um erro nos objetos, informações abaixo.");
		console.error(err.message);
	}
}

try {
	(function() {
		var body, ajaxStop, windowLoad;

		windowLoad = function() {
			Common.windowOnload();
			if (body.is(".home")) Home.windowOnload();
			else if (body.is(".departamento, .categoria")) Departament.windowOnload();
			else if (body.is(".resultado-busca")) Search.windowOnload();
			else if (body.is(".produto")) Product.windowOnload();
			else if (body.is(".institucional, .Institucional")) Institutional.windowOnload();
			else if (body.is(".orders")) Orders.windowOnload();
			else if (body.is(".listas, .giftlist")) List.windowOnload();
		};

		ajaxStop = function() {
			Common.ajaxStop();
			if (body.is(".home")) Home.ajaxStop();
			else if (body.is(".departamento, .categoria")) Departament.ajaxStop();
			else if (body.is(".resultado-busca")) Search.ajaxStop();
			else if (body.is(".produto")) Product.ajaxStop();
			else if (body.is(".institucional, .Institucional")) Institutional.ajaxStop();
			else if (body.is(".orders")) Orders.ajaxStop();
			else if (body.is(".listas, .giftlist")) List.ajaxStop();
		};

		$(function() {
			body = $("body");
			Common.init();
			if (body.is(".home")) Home.init();
			else if (body.is(".departamento, .categoria")) Departament.init();
			else if (body.is(".resultado-busca")) Search.init();
			else if (body.is(".produto")) Product.init();
			else if (body.is(".institucional, .Institucional")) Institutional.init();
			else if (body.is(".orders")) Orders.init();
			else if (body.is(".listas, .giftlist")) List.init();
			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass('jsFullLoaded');
		});

		Common.run();
		if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p")
			Product.run();
		else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
			List.run();

		// Corrigndo bug do riseze causado pelo jQuery PrettyPhoto
		$(function() {
			var orig = window.bindQuickView;
			window.bindQuickView = function() {
				orig(arguments);

				// Chamo aqui as funções de window.resize (testado em páginas de vitrine)
				Departament.windowResize();
				Search.windowResize();
			};
		});
	})();
} catch (err) {
	if (typeof console !== "undefined" && typeof console.error === "function" && typeof console.info === "function") {
		$("body").addClass('jsFullLoaded jsFullLoadedError');
		console.info("Houve um erro ao iniciar os objetos, informações abaixo.");
		console.error(err);
	}
}

/* $("a").getParent("ul"); // 2.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(b){b.fn.getParent=function(c){var a;a=b(this);if(1>a.length)return a;a=a.parent();return a.is("html")?b(""):a.is(c)?a.filter(c):a.length?a.getParent(c):a}})(jQuery);
/* Automatizador de comments box do Facebook // 1.3 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");if(a.length)if($("#fb-root").length||$("body").append('<div id="fb-root"></div>'),a.attr("data-href",document.location.href.split("#").shift().split("?").shift()),$("script[src*='connect.facebook.net']").filter("[src*='sdk.js']").length)"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse();else{a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||
(b=document.createElement("script"),b.id="facebook-jssdk",b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.0"+(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}});
/* Newslleter customizada para a plataforma VTEX // 4.7 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os Direitos Reservados */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
(function(h){"function"!==typeof h.fn.QD_news&&(h.fn.QD_news=function(p){var g,a,m,e;e=function(a,b){"object"===typeof console&&("undefined"!==typeof b&&"alerta"===b.toLowerCase()?console.warn("[VtexNews] "+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?console.info("[VtexNews] "+a):console.error("[VtexNews] "+a))};g=jQuery(this);if(1>g.length)return g;a=jQuery.extend({defaultName:"Digite seu nome...",defaultEmail:"Digite seu e-mail...",nameField:".qd_news_name",emailField:".qd_news_email",btn:".qd_news_button",
elementError:".nv2_messageError",elementSuccess:".nv2_messageSuccess",validationMethod:"popup",getAttr:"alt",setDefaultName:!0,checkNameExist:!0,validateName:!0,showInPopup:!0,animation:"blink",animateSpeed:100,animateDistance:15,animateRepeat:3,animateFieldSuccess:".qd_news_animate_field_success",timeHideSuccessMsg:3E3,successCallback:function(){},submitCallback:function(a,b){}},p);a.showInPopup||(a.validationMethod="div");null!==a.animation?a.validationMethod="animateField":"animateField"==a.validationMethod&&
(a.animation="leftRight");if("popup"==a.validationMethod&&"function"!==typeof jQuery.fn.vtexPopUp2)return e("O popUp2 n\u00e3o foi encontrado. Adicione o Plugin de PopUp2."),g;m=function(f){var b,d,c;d=0;b=function(){f.animate({left:"-="+a.animateDistance},a.animateSpeed,function(){f.animate({left:"+="+a.animateDistance},a.animateSpeed,function(){d<a.animateRepeat&&b();d++})})};c=function(){f.fadeTo(a.animateSpeed,0.2,function(){f.fadeTo(a.animateSpeed,1,function(){d<a.animateRepeat&&c();d++})})};
f.stop(!0,!0);"leftRight"==a.animation?b():"blink"==a.animation&&c()};g.each(function(){var f,b,d,c,g,k,l;b=jQuery(this);d=b.find(a.nameField);c=b.find(a.emailField);g=b.find(a.btn);k=b.find(a.elementError);l=b.find(a.elementSuccess);1>d.length&&a.checkNameExist&&e("Campo de nome, n\u00e3o encontrado ("+d.selector+"). Ser\u00e1 atribuido um valor padr\u00e3o.","info");if(1>c.length)return e("Campo de e-mail, n\u00e3o encontrado ("+c.selector+")"),b;if(1>g.length)return e("Bot\u00e3o de envio, n\u00e3o encontrado ("+
g.selector+")"),b;if("animateField"!=a.validationMethod&&(1>l.length||1>k.length))return e("A(s) mensagem(ns) de erro e/ou sucesso esta(m) faltando \n ("+l.selector+", "+k.selector+")"),b;a.setDefaultName&&d.is("input[type=text], textarea")&&d.val(a.defaultName);c.val(a.defaultEmail);(function(){var b,c;a.checkNameExist&&(b=d.filter(":visible"),b.length&&(c=b.val(),d.is("input:text, textarea")&&b.bind({focus:function(){b.val()!=c||0!==b.val().search(a.defaultName.substr(0,6))&&!a.setDefaultName||
b.val("")},blur:function(){""===b.val()&&b.val(c)}})))})();(function(){var b;b=c.val();c.bind({focus:function(){c.val()==b&&0===c.val().search(a.defaultEmail.substr(0,6))&&c.val("")},blur:function(){""===c.val()&&c.val(b)}})})();f=function(){var c,d,f,e;d=(c=b.find(a.nameField).filter("input[type=text],select,textarea").val())?c:b.find(a.nameField).filter("input[type=radio], input[type=checkbox]").length?b.find(a.nameField).filter("input[type=radio]:checked, input[type=checkbox]:checked").val()||
"":(c=b.find(a.nameField).attr(a.getAttr))?c:(c=b.find(a.nameField).text())?c:(c=b.find(a.nameField).find(".box-banner img:first").attr("alt"))?c:"Nome_Padrao";c=(b.find(a.emailField).val()||"").trim();f=b.find(a.nameField).is(":visible");f=a.validateName?(1>d.length||0===d.search(a.defaultName.substr(0,6)))&&(a.checkNameExist||f?f:!0):!1;e=0>c.search(/^[a-z0-9\_\-\.\+]+@[a-z0-9\_\-]+(\.[a-z0-9\_\-]{2,})+$/i);f||e?"animateField"==a.validationMethod?(f&&m(b.find(a.nameField)),e&&m(b.find(a.emailField))):
"popup"==a.validationMethod?k.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterError"}):(k.slideDown().bind("click",function(){h(this).slideUp()}),setTimeout(function(){k.slideUp()},1800)):(g.attr("disabled","disabled"),jQuery.ajax({url:"/no-cache/Newsletter.aspx",type:"POST",data:{newsletterClientEmail:c,newsletterClientName:a.defaultName==d?"-":d,newsInternalCampaign:"newsletter:opt-in",newsInternalPage:(document.location.pathname||"/").replace(/\//g,"_"),newsInternalPart:"newsletter"},
success:function(c){var d,f,e;g.removeAttr("disabled");"popup"==a.validationMethod?l.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterSuccess"}):"animateField"!=a.validationMethod&&l.slideDown().bind("click",function(){h(this).slideUp()});e=b.find(a.emailField);a.setDefaultName&&b.find(a.nameField).is("input:text, textarea")&&b.find(a.nameField).val(a.defaultName);d=function(){e.val(a.defaultEmail)};"animateField"==a.validationMethod?(e.val(b.find(a.animateFieldSuccess).val()||"Obrigado!!!"),
e.addClass("vtexNewsSuccess"),f=setTimeout(function(){e.removeClass("vtexNewsSuccess");d();e.unbind("focus.vtexNews")},a.timeHideSuccessMsg),e.bind("focus.vtexNews",function(){e.removeClass("vtexNewsSuccess");clearTimeout(f);h(this).val("");h(this).unbind("focus.vtexNews")})):d();a.successCallback()}}),a.submitCallback(c,d))};g.bind("click",function(){f()});var n=function(a){13==(a.keyCode?a.keyCode:a.which)&&(a.preventDefault(),f())};d.filter("input:text, textarea").bind("keydown",n);c.bind("keydown",
n)});return g},h(function(){h(".qd_news_auto").QD_news()}))})(jQuery);
/* Quatro Digital - jQuery Ajax Queue // 2.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(a){"function"!==typeof a.qdAjax&&(a.qdAjaxQueue={},a.qdAjax=function(d){var c,b;c=a.extend({},{success:function(){},error:function(){},complete:function(){},clearQueueDelay:0},d);b=escape(encodeURIComponent(c.url));a.qdAjaxQueue[b]=a.qdAjaxQueue[b]||{};a.qdAjaxQueue[b].opts=a.qdAjaxQueue[b].opts||[];a.qdAjaxQueue[b].opts.push({success:function(a,b,e){c.success.call(this,a,b,e)},error:function(a,b,e){c.error.call(this,a,b,e)},complete:function(a,b){c.complete.call(this,a,b)}});a.qdAjaxQueue[b].parameters=
a.qdAjaxQueue[b].parameters||{success:{},error:{},complete:{}};a.qdAjaxQueue[b].callbackFns=a.qdAjaxQueue[b].callbackFns||{};a.qdAjaxQueue[b].callbackFns.successPopulated="boolean"===typeof a.qdAjaxQueue[b].callbackFns.successPopulated?a.qdAjaxQueue[b].callbackFns.successPopulated:!1;a.qdAjaxQueue[b].callbackFns.errorPopulated="boolean"===typeof a.qdAjaxQueue[b].callbackFns.errorPopulated?a.qdAjaxQueue[b].callbackFns.errorPopulated:!1;a.qdAjaxQueue[b].callbackFns.completePopulated="boolean"===typeof a.qdAjaxQueue[b].callbackFns.completePopulated?
a.qdAjaxQueue[b].callbackFns.completePopulated:!1;d=a.extend({},c,{success:function(g,f,e){a.qdAjaxQueue[b].parameters.success={data:g,textStatus:f,jqXHR:e};a.qdAjaxQueue[b].callbackFns.successPopulated=!0;for(var c in a.qdAjaxQueue[b].opts)"object"===typeof a.qdAjaxQueue[b].opts[c]&&(a.qdAjaxQueue[b].opts[c].success.call(this,g,f,e),a.qdAjaxQueue[b].opts[c].success=function(){})},error:function(c,f,e){a.qdAjaxQueue[b].parameters.error={errorThrown:e,textStatus:f,jqXHR:c};a.qdAjaxQueue[b].callbackFns.errorPopulated=
!0;for(var d in a.qdAjaxQueue[b].opts)"object"===typeof a.qdAjaxQueue[b].opts[d]&&(a.qdAjaxQueue[b].opts[d].error.call(this,c,f,e),a.qdAjaxQueue[b].opts[d].error=function(){})},complete:function(d,f){a.qdAjaxQueue[b].parameters.complete={textStatus:f,jqXHR:d};a.qdAjaxQueue[b].callbackFns.completePopulated=!0;for(var e in a.qdAjaxQueue[b].opts)"object"===typeof a.qdAjaxQueue[b].opts[e]&&(a.qdAjaxQueue[b].opts[e].complete.call(this,d,f),a.qdAjaxQueue[b].opts[e].complete=function(){});setTimeout(function(){a.qdAjaxQueue[b].jqXHR=
void 0;a.qdAjaxQueue[b].opts=void 0;a.qdAjaxQueue[b].parameters=void 0;a.qdAjaxQueue[b].callbackFns=void 0},c.clearQueueDelay)}});"undefined"===typeof a.qdAjaxQueue[b].jqXHR?a.qdAjaxQueue[b].jqXHR=a.ajax(d):a.qdAjaxQueue[b].jqXHR&&a.qdAjaxQueue[b].jqXHR.readyState&&4==a.qdAjaxQueue[b].jqXHR.readyState&&(a.qdAjaxQueue[b].callbackFns.successPopulated&&d.success(a.qdAjaxQueue[b].parameters.success.data,a.qdAjaxQueue[b].parameters.success.textStatus,a.qdAjaxQueue[b].parameters.success.jqXHR),a.qdAjaxQueue[b].callbackFns.errorPopulated&&
d.error(a.qdAjaxQueue[b].parameters.error.jqXHR,a.qdAjaxQueue[b].parameters.error.textStatus,a.qdAjaxQueue[b].parameters.error.errorThrown),a.qdAjaxQueue[b].callbackFns.completePopulated&&d.complete(a.qdAjaxQueue[b].parameters.complete.jqXHR,a.qdAjaxQueue[b].parameters.complete.textStatus))},a.qdAjax.version="2.0")})(jQuery);
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
/* Quatro Digital jQuery Scroll // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(a){"function"!==typeof a.fn.QD_scroll&&(a.fn.QD_scroll=function(d,b){var c;b=b||100;window.QuatroDigital_scroll=window.QuatroDigital_scroll||{};window.QuatroDigital_scroll.scrollTop=null;window.QuatroDigital_scroll.lastScrollTop=null;a(this).scroll(function(){c=this;window.QuatroDigital_scroll.scrollTop=a(window).scrollTop()});(function(){window.QuatroDigital_scroll.interval=setInterval(function(){window.QuatroDigital_scroll.lastScrollTop!==window.QuatroDigital_scroll.scrollTop&&(null!==
window.QuatroDigital_scroll.scrollTop&&d.call(c,window.QuatroDigital_scroll.scrollTop),window.QuatroDigital_scroll.lastScrollTop=window.QuatroDigital_scroll.scrollTop)},b)})()})})(jQuery);
/* Quatro Digital Amazing Menu // 2.11 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(q(n){x b,h,g,l;b=3d;K("q"!==19 b.1q.14){h={15:"/v-1K-10",1r:q(){}};x k=q(a,b){K("1X"===19 M){x d="1X"===19 a;"22"!==19 b&&"1U"===b.X()?d?M.20("[R S V]\\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):M.20("[R S V]\\n"+a):"22"!==19 b&&"1p"===b.X()?d?M.1p("[R S V]\\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):M.1p("[R S V]\\n"+a):d?M.1n("[R S V]\\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):M.1n("[R S V]\\n"+a)}};b.1q.1t=q(){x a=b(B);a.H(q(a){b(B).C("v-w-J-"+a)});a.1i().C("v-w-1i");a.1H().C("v-w-1H");F a};l=q(a){x c,d;a=a.G(".3H");c=a.1A(".v-w-1k");d=a.1A(".v-w-1z");K(c.I||d.I)c.1c().C("v-w-1k-1y"),d.1c().C("v-w-1z-1y"),b.3Q({15:g.15,3u:"3B",3C:q(a){x m=b(a);c.H(q(){x a,e;e=b(B);a=m.G("3A[3z=\'"+e.1G("1w-1I-1N")+"\']");a.I&&(a.H(q(){b(B).1Z(".3x-1k").1Y().1W(e)}),e.1V())}).C("v-w-1T-1P");d.H(q(){x a={},e;e=b(B);m.G("2d").H(q(){K(b(B).1L().1s().X()==e.1G("1w-1I-1N").1s().X())F a=b(B),!1});a.I&&(a.H(q(){b(B).1Z("[3T*=\'2u\']").1Y().1W(e)}),e.1V())}).C("v-w-1T-1P")},1n:q(){k("N\\21 2t 2v\\2w 2y 2x 2s 23 10. A 15 \'"+g.15+"\' 2r.")},2m:2l})};b.14=q(a){x c=q(a){x b={j:"2k%8%1x%8%i%8%p",2n:"2o%8%i%8%p",2q:"2p%8%U%8%i%8%p",2z:"2A%8%11%8%i%8%p",2K:"2J%8%Y%8%i%8%p",2j:"c-1j%8%U%8%i%8%p",E:"-1j%8%11%8%i%8%p","E-":"1j%8%Y%8%i%8%p","D%8%":"1x%8%U%8%i%8%p","D%8%2":"2L%8%11%8%i%8%p","D%8%25":"2M%8%Y%8%i%8%p","D%8%1b":"2O%8%i%8%p","P%8%2":"2N%8%p","P%8%25":"2I%8%i%8%p","P%8%1b":"2H%8%i%8%p","P%8%1v":"2C%8%i%8%p","E-P%25":"1e%U%8%i%8%p","E-P%2B":"2%11%8%i%8%p","E-P%8":"%Y%8%i%8%p","D%8%1o%":"8%U%8%i%8%p","D%8%1o%2":"2D%11%8%i%8%p","D%8%1o%25":"1e%Y%8%i%8%p","D%8%2E":"n%8%i%8%p","O%8%i":"%8%p","O%8%1Q":"1R%8%i%8%p","O%8%1S":"1O%8%i%8%p","O%8%1l":"1M%8%i%8%p","E-O%8%1b":"2G%8%i%8%p","E-O%8%1v":"2F%8%i%8%p","E-O%8%2P":"2f%8%i%8%p","D%8%1m%8%2":"24%8%i%8%p","D%8%1m%8%25":"27%8%i%8%p","D%8%1m%8%1b":"28%8%i%8%p","D%8%1a%8%":"i%8%p","Q%8%i%8%2":"2g","Q%8%2e":"r%8%i%8%p","Q%8%U":"2a%8%i%8%p","Q%8%2c":"2b%8%i%8%p","E-Q%8%1l":"29%8%i%8%p","E-Q%8%2h":"2i%8%i%8%p","E-Q%8%31":"3y%8%i%8%p","D%8%1a%8%1Q":"1R%8%i%8%p","D%8%1a%8%1S":"1O%8%i%8%p","D%8%1a%8%1l":"1M%8%i%8%p"};F q(a){x d,e,f,c;e=q(a){F a};f=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];a=a["d"+f[16]+"c"+f[17]+"m"+e(f[1])+"n"+f[13]]["l"+f[18]+"c"+f[0]+"3w"+e("o")+"n"];d=q(a){F 3v(3q(a.1f(/\\./g,"\\3p").1f(/[a-3o-Z]/g,q(a){F 3r.3s(("Z">=a?3E:3D)>=(a=a.3S(0)+13)?a:a-26)})))};2Q(x g 3P b){K(d(a[[f[9],e("o"),f[12],f[e(13)]].1B("")])===g+b[g]){c="3R"+f[17]+"e";3O}c="f"+f[0]+"3N"+e(f[1])+""}e=!1;-1<a[[f[12],"e",f[0],"3G",f[9]].1B("")].3F("3I%1D%1C%1F%1g%1h%1g%3J%3M%3L%1e%3K%1e%3t%1g%1h%1D%1C%1F%3m%1h")&&(e=!0);F[c,e]}(a)}(n);K(!3n(c[0]))F c[1]?k("\\30\\32\\1J \\33\\W\\35\\34\\1E\\W\\1E\\1J \\2Z\\W\\2Y\\W \\2T\\2S\\2R\\W L\\2U\\W!"):!1;c=a.G("T[2V]").H(q(){x d,c;d=b(B);K(!d.I)F k(["2X 23 10 n\\21 2W",a],"1U");d.G("J >T").1c().C("v-w-36-T");d.G("J").H(q(){x a=b(B),c;c=a.1d(":37(T)");c.I&&a.C("v-w-3h-"+c.1i().1L().1s().3g().1f(/\\./g,"").1f(/\\s/g,"-").X())});c=d.G(">J").1t();d.C("v-1K-10");c=c.G(">T");c.H(q(){x a=b(B);a.G(">J").1t().C("v-w-3i");a.C("v-w-1u-10");a.1c().C("v-w-1u")});c.C("v-w-1u");x g=0,h=q(a){g+=1;a=a.1d("J").1d("*");a.I&&(a.C("v-w-3j-"+g),h(a))};h(d);d.3l(d.G("T")).H(q(){x a=b(B);a.C("v-w-"+a.1d("J").I+"-J")})});l(c);g.1r.3k(B);b(3f).3e("39.w.1r",a)};b.1q.14=q(a){x c=b(B);K(!c.I)F c;g=b.38({},h,a);c.3a=3b b.14(b(B));F c};b(q(){b(".3c").14()})}})(B);',62,242,'||||||||25C2||||||||||25A8pbz|||||||25A8oe|function|||||qd|am|var||||this|addClass|jjj|qrirybc|return|find|each|length|li|if||console||nzvaunyvfgn|fhkkne|pyrhfncerfragrf|QD|Amazing|ul|25A8igrkpbzzrepr|Menu|u0391|toLowerCase|25A8igrkpbzzreprfgnoyr||menu|25A8igrkpbzzreprorgn|||QD_amazingMenu|url||||typeof|25A8pyrhfncerfragrf|25A|parent|children|C2|replace|D1|82|first|rfcnpbfnagnuryran|banner|25A8igrkpb|25A8nzvaunyvfgn|error|25A8fhkkne|info|fn|callback|trim|qdAmAddNdx|dropdown|25A8|data|25A8rfcnpbfnagnuryran|wrapper|collection|filter|join|B8|E0|u2202|84|attr|last|qdam|u0472|amazing|text|zzreprfgnoyr|value|bzzreprorgn|loaded|25A8igrk|pbzzrepr|25A8igrkp|content|alerta|hide|insertBefore|object|clone|getParent|warn|u00e3o|undefined|do|5A8igrkpbzzrepr|||A8igrkpbzzreprorgn|8igrkpbzzreprfgnoyr|zzrepr|orgn|gnoyr|25A8igrkpbzzreprf|h2|25A8igrkpbzzrep|grkpbzzreprfgnoyr|5A8oe|25A8igrkpbz|zreprorgn|qriryb|jj|3E3|clearQueueDelay|rf|cnpbfnagnuryran|npbfnagnuryran|rfc|falho|dados|foi|colunas|poss|u00edvel|os|obter|rfcn|pbfnagnuryran|25C|igrkpbzzreprfgnoyr|5C2|25A8nzvaunyvfg|igrkpbzzreprorgn|8igrkpbzzrepr|8igrkpbzzreprorgn|A8igrkpbzzrepr|bfnagnuryran|rfcnp|5A8rfcnpbfnagnuryran|A8rfcnpbfnagnuryran|5A8pbz|8fhkkne|25A8i|for|u01ac|u0abd|u0aef|u0472J|itemscope|encontrada|UL|u0ae8|u03a1|u0e17|25A8igrkpbzz|u00c3|u221a|u00a1|u2113|has|not|extend|QuatroDigital|exec|new|qd_amazing_menu_auto|jQuery|trigger|window|replaceSpecialChars|elem|column|level|call|add|C5|eval|zA|u00a8|encodeURIComponent|String|fromCharCode|A1|dataType|escape|ti|box|reprfgnoyr|alt|img|html|success|122|90|indexOf|rc|qd_am_code|qu|8F|A1g|83d|CF|ls|break|in|qdAjax|tr|charCodeAt|class'.split('|'),0,{}));
/* Quatro Digital - Product Thumbs // 1.0 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs()}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return $.extend({},a,new b(a))},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/* Quatro Digital - Scroll Toggle // 1.1 // Carlos Vinicius // Todos os direitos reservados */
(function(){var b=jQuery,d=function(a,c){if("object"===typeof console){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];"undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase()?"undefined"!==typeof c&&"info"===c.toLowerCase()?console.info.apply(console,b):console.error.apply(console,b):console.warn.apply(console,b)}};"function"!==typeof b.QD_scrollToggle&&(b.QD_scrollToggle=function(a){var c=[];if("string"!==typeof a&&"number"!==typeof a||
"auto"===a)if("auto"===a)c.push(b(window).height());else return d("N\u00e3o foi informado o limite de scroll necess\u00e1rio para adicionar o atributo.");else{var e=a.split(","),f;for(f in e)"function"!==typeof e[f]&&(a=parseInt(e[f].trim()),isNaN(a)||c.push(a))}if(!c.length)return d("Aaeeeeeeee irm\u00e3o! N\u00e3o consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"function"!==typeof document.body.setAttribute)return d('"document.body.setAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');
if(!document||!document.body||"function"!==typeof document.body.removeAttribute)return d('"document.body.removeAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"function"!==typeof document.body.getAttribute)return d('"document.body.getAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!b(window).scrollTop||isNaN(parseInt(b(window).scrollTop())))return d('"$(window).scrollTop" n\u00e3o esta retornando um n\u00famero inteiro :(');try{document.body.setAttribute("data-qd-scroll",
1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(g){d("N\u00e3o foi poss\u00edvel fazer o passo a passo de consultar, adicionar e remover um atributo",g.message)}b(window).scroll(function(){for(var a=0;a<c.length;a++)b(window).scrollTop()>c[a]?document.body.getAttribute("data-qd-scroll-"+a)||document.body.setAttribute("data-qd-scroll-"+a,1):document.body.getAttribute("data-qd-scroll-"+a)&&document.body.removeAttribute("data-qd-scroll-"+
a)})},b(function(){var a=b("body[data-qd-scroll-limit]");a.length&&b.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};
/* Quatro Digital - Smart Quantity // 1.4 // Carlos Vinicius // Todos os direitos reservados */
(function(p){var d=jQuery;if("function"!==typeof d.fn.QD_smartQuantity){var g=function(d,c){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var e;"object"===typeof d?(d.unshift("[Quatro Digital - Smart Quantity]\n"),e=d):e=["[Quatro Digital - Smart Quantity]\n"+d];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,
e)}catch(g){console.info(e.join("\n"))}else try{console.error.apply(console,e)}catch(n){console.error(e.join("\n"))}else try{console.warn.apply(console,e)}catch(b){console.warn(e.join("\n"))}}},l={buyButton:".buy-button",qttInput:".qd-sq-quantity",btnMore:".qd-sq-more",btnMinus:".qd-sq-minus",initialValue:1},m=function(h,c){function e(b,f,a){b.val(c.initialValue);b.change(function(){try{var b=d(this),a=parseInt(b.val().replace(/[^0-9-]/gi,""));!isNaN(a)&&a>c.initialValue?b.val(a):b.val(c.initialValue);
b.trigger("QuatroDigital.sq_change",this)}catch(f){g(f.message)}});f.click(function(a){a.preventDefault();b.val((parseInt(b.val())||c.initialValue)+1).change()});a.click(function(a){a.preventDefault();b.val((parseInt(b.val())||c.initialValue+1)-1).change()});b.change()}function l(b,f,a){b.on("QuatroDigital.sq_change",function(){(d(this).val()||0)<=c.initialValue?(a.addClass("qd-sq-inactive"),f.removeClass("qd-sq-inactive")):(f.addClass("qd-sq-inactive"),a.removeClass("qd-sq-inactive"))})}function n(b,
d){b.on("QuatroDigital.sq_change",function(){try{var a=d.attr("href")||"";if(!(0>a.toLowerCase().indexOf("/checkout/cart/add"))){d.attr("href",a.replace(/qty\=[0-9]+/i,"qty="+(parseInt(b.val())||c.initialValue||1)));var e=(d.attr("href").match(/sku\=([0-9]+)/i)||[""]).pop()+"";b.attr("data-sku-id",e);if(e.length&&"object"===typeof skuJson&&!b.attr("data-sku-price"))for(a=0;a<skuJson.skus.length;a++)skuJson.skus[a].sku==e&&b.attr("data-sku-price",skuJson.skus[a].bestPrice)}}catch(k){g(k.message)}})}
h.each(function(){try{var b=d(this),f=b.find(c.buyButton),a=b.find(c.qttInput),h=b.find(c.btnMore),k=b.find(c.btnMinus);if(!f.length&&null!==c.buyButton||!a.length)return g("O plugin parou por aqui! N\u00e3o foram encontrados o bot\u00e3o comprar e o campo de quantidade","alerta");if(a.is(".qd-sq-on"))return g(["Execu\u00e7\u00e3o ignorada pois este input j\u00e1 possui o plugin aplicado. Input: ",a],"info");a.addClass("qd-sq-on");l(a,h,k);null!==c.buyButton&&n(a,f);e(a,h,k);d(window).on("vtex.sku.selected",
function(){a.change()})}catch(m){g(m.message)}})};d.fn.QD_smartQuantity=function(g){var c=d(this);c.qdPlugin=new m(c,d.extend({},l,g));d(window).trigger("QuatroDigital.sq_callback");return c};d(function(){d(".qd_auto_smart_quantity").QD_smartQuantity()})}})(this);
/* Quatro Digital - Smart Buy Button // 1.12 // Carlos Vinicius // Todos os direitos reservados */
(function(u){try{var a=jQuery,d,q=a({}),m=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[Quatro Digital - Buy Button]\n"),b=a):b=["[Quatro Digital - Buy Button]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(g){try{console.info(b.join("\n"))}catch(h){}}else try{console.error.apply(console,
b)}catch(l){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(c){try{console.warn(b.join("\n"))}catch(p){}}}},r={timeRemoveNewItemClass:5E3,isSmartCheckout:!0,buyButton:".productInformationWrapper  a.buy-button",buyQtt:"input.buy-in-page-quantity",selectSkuMsg:"javascript:",productPageCallback:function(d,e,b){a("body").is(".productQuickView")&&("success"===e?alert("Produto adicionado ao carrinho!"):(alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."),
("object"===typeof parent?parent:document).location.href=b))},getProductQttElem:function(a,d){return a.parent().find(d)},isProductPage:function(){return a("body").is("#produto, .produto")},execDefaultAction:function(a){return!1},allowBuyClick:function(){return!0},callback:function(){},asyncCallback:function(){}};a.QD_buyButton=function(f,e){function b(a){d.isSmartCheckout?a.data("qd-bb-click-active")||(a.data("qd-bb-click-active",1),a.on("click.qd_bb_buy_sc",function(a){if(!d.allowBuyClick())return!0;
if(!0!==k.clickBuySmartCheckout.call(this))return a.preventDefault(),!1})):alert("M\u00e9todo descontinuado!")}function g(c){c=c||a(d.buyButton);c.each(function(){var c=a(this);c.data("qd-bb-active")||(c.data("qd-bb-active",1),c.children(".qd-bb-productAdded").length||c.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'),c.is(".buy-in-page-button")&&d.isProductPage()&&l.call(c),b(c))});d.isProductPage()&&!c.length&&m("Oooops!\nAparentemente esta \u00e9 uma p\u00e1gina de produto por\u00e9m n\u00e3o encontrei nenhum bot\u00e3o comprar!\nVerifique se \u00e9 este mesmo o seletor: '"+
c.selector+"'.","info")}var h,l,k;h=a(f);k=this;window._Quatro_Digital_dropDown=window._Quatro_Digital_dropDown||{};window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};k.prodAdd=function(c,p){h.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");a("body").addClass("qd-bb-lightBoxBodyProdAdd");var b=a(d.buyButton).filter("[href='"+(c.attr("href")||"---")+"']").add(c);b.addClass("qd-bb-itemAddBuyButtonWrapper");setTimeout(function(){h.removeClass("qd-bb-itemAddCartWrapper");b.removeClass("qd-bb-itemAddBuyButtonWrapper")},
d.timeRemoveNewItemClass);window._Quatro_Digital_dropDown.getOrderForm=void 0;if("undefined"!==typeof e&&"function"===typeof e.getCartInfoByUrl)return d.isSmartCheckout||(m("fun\u00e7\u00e3o descontinuada"),e.getCartInfoByUrl()),window._QuatroDigital_DropDown.getOrderForm=void 0,e.getCartInfoByUrl(function(c){window._Quatro_Digital_dropDown.getOrderForm=c;a.fn.simpleCart(!0,void 0,!0)},{lastSku:p});window._Quatro_Digital_dropDown.allowUpdate=!0;a.fn.simpleCart(!0)};(function(){if(d.isSmartCheckout){var c=
a(".btn-add-buy-button-asynchronous");c.length&&g(c)}})();l=function(){var c=a(this);"undefined"!==typeof c.data("buyButton")?(c.unbind("click"),b(c)):(c.bind("mouseenter.qd_bb_buy_sc",function(d){var e=a(this);c.unbind("click");b(c);e.unbind(d)}),a(window).load(function(){c.unbind("click");b(c);c.unbind("mouseenter.qd_bb_buy_sc")}))};k.clickBuySmartCheckout=function(){var c=a(this),b=c.attr("href")||"";if(-1<b.indexOf(d.selectSkuMsg))return!0;var b=b.replace(/redirect\=(false|true)/ig,"").replace("?",
"?redirect=false&").replace(/\&\&/ig,"&"),e=d.getProductQttElem(c,d.buyQtt).val()||"";isNaN(e)||""===e||(b=b.replace(/qty\=[0-9]*/i,"qty="+e));if(d.execDefaultAction(c))return c.attr("href",b.replace("redirect=false","redirect=true")),!0;b=b.replace(/http.?:/i,"");q.queue(function(e){a.ajax({url:b,complete:function(a,e){var f=b.match(/sku\=([0-9]+)/ig),g=[],h;if("object"===typeof f&&null!==f)for(var l=f.length-1;0<=l;l--)h=parseInt(f[l].replace(/sku\=/ig,"")),isNaN(h)||g.push(h);d.productPageCallback.call(this,
a,e,b);k.buyButtonClickCallback.call(this,a,e,b,g);k.prodAdd(c,b.split("ku=").pop().split("&").shift());"function"===typeof d.asyncCallback&&d.asyncCallback.call(this)}}).always(function(){e()})})};k.buyButtonClickCallback=function(a,b,d,e){try{"success"===b&&"object"===typeof window.parent&&"function"===typeof window.parent._QuatroDigital_prodBuyCallback&&window.parent._QuatroDigital_prodBuyCallback(a,b,d,e)}catch(f){m("Problemas ao tentar comunicar a p\u00e1gina que o produto foi aicionado ao carrinho.")}};
g();"function"===typeof d.callback?d.callback.call(this):m("Callback n\u00e3o \u00e9 uma fun\u00e7\u00e3o")};var n=a.Callbacks();a.fn.QD_buyButton=function(f,e){var b=a(this);"undefined"!==typeof e||"object"!==typeof f||f instanceof a||(e=f,f=void 0);d=a.extend({},r,e);var g;n.add(function(){b.children(".qd-bb-itemAddWrapper").length||b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');g=new a.QD_buyButton(b,f)});n.fire();a(window).on("QuatroDigital.qd_bb_prod_add",
function(a,b,d){g.prodAdd(b,d)});return a.extend(b,g)};a(document).ajaxStop(function(){n.fire()})}catch(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",t)}})(this);
/* Quatro Digital Simple Cart // 4.12 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var b=jQuery;if("function"!==typeof b.fn.simpleCart)try{window.QuatroDigital_simpleCart=window.QuatroDigital_simpleCart||{};window.QuatroDigital_simpleCart.ajaxStopOn=!1;b.fn.simpleCart=function(c,n,h){var d,k,g,f,l,p,q,r,m;k=function(a,b){if("object"===typeof console){var e="object"===typeof a;"undefined"!==typeof b&&"alerta"===b.toLowerCase()?e?console.warn("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[Simple Cart]\n"+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?
e?console.info("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[Simple Cart]\n"+a):e?console.error("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[Simple Cart]\n"+a)}};d=b(this);"object"===typeof c?n=c:(c=c||!1,d=d.add(b.fn.simpleCart.elements));if(!d.length)return d;b.fn.simpleCart.elements=b.fn.simpleCart.elements.add(d);h="undefined"===typeof h?!1:h;f=b.extend({},{cartQtt:".qd_cart_qtt",cartTotal:".qd_cart_total",itemsText:".qd_items_text",currencySymbol:"R$ ",
showQuantityByItems:!0,smartCheckout:!0,callback:function(){}},n);g=b("");d.each(function(){var a=b(this);a.data("qd_simpleCartOpts")||a.data("qd_simpleCartOpts",f)});m=function(a){window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};for(var b=0,e=0,c=0;c<a.totalizers.length;c++)"Shipping"==a.totalizers[c].id&&(e+=a.totalizers[c].value),b+=a.totalizers[c].value;window._QuatroDigital_CartData.total=f.currencySymbol+qd_number_format(b/100,2,",",".");window._QuatroDigital_CartData.shipping=
f.currencySymbol+qd_number_format(e/100,2,",",".");window._QuatroDigital_CartData.allTotal=f.currencySymbol+qd_number_format((b+e)/100,2,",",".");window._QuatroDigital_CartData.qtt=0;if(f.showQuantityByItems)for(c=0;c<a.items.length;c++)window._QuatroDigital_CartData.qtt+=a.items[c].quantity;else window._QuatroDigital_CartData.qtt=a.items.length||0;try{window._QuatroDigital_CartData.callback&&window._QuatroDigital_CartData.callback.fire&&window._QuatroDigital_CartData.callback.fire()}catch(d){k("Problemas com o callback do Smart Cart")}r(g)};
l=function(a,b){1===a?b.hide().filter(".singular").show():b.hide().filter(".plural").show()};q=function(a){1>a?d.addClass("qd-emptyCart"):d.removeClass("qd-emptyCart")};p=function(a,b){var c;c=parseInt(window._QuatroDigital_CartData.qtt,10);b.$this.show();isNaN(c)&&(k("O valor obtido para calcular o plural/singular n\u00e3o \u00e9 um n\u00famero! O valor ser\u00e1 definido para 0.","alerta"),c=0);b.cartTotalE.html(window._QuatroDigital_CartData.total);b.cartQttE.html(c);l(c,b.itemsTextE);q(c)};r=
function(a){d.each(function(){var d={},e;e=b(this);c&&e.data("qd_simpleCartOpts")&&b.extend(f,e.data("qd_simpleCartOpts"));d.$this=e;d.cartQttE=e.find(f.cartQtt)||g;d.cartTotalE=e.find(f.cartTotal)||g;d.itemsTextE=e.find(f.itemsText)||g;d.emptyElem=e.find(f.emptyCart)||g;p(a,d);e.addClass("qd-sc-populated")})};(function(){if(f.smartCheckout){window._QuatroDigital_DropDown=window._QuatroDigital_DropDown||{};if("undefined"!==typeof window._QuatroDigital_DropDown.getOrderForm&&(h?h:!c))return m(window._QuatroDigital_DropDown.getOrderForm);
if("object"!==typeof window.vtexjs||"undefined"===typeof window.vtexjs.checkout)if("object"===typeof vtex&&"object"===typeof vtex.checkout&&"undefined"!==typeof vtex.checkout.SDK)new vtex.checkout.SDK;else return k("N\u00e3o foi encontrada a biblioteca VTEX.js");b.QD_checkoutQueue(["items","totalizers","shippingData"],{done:function(a){m(a);window._QuatroDigital_DropDown.getOrderForm=a},fail:function(a){k(["N\u00e3o foi poss\u00edvel obter os dados para o carrinho.",a])}})}else alert("Esta \u00e9 uma fun\u00e7\u00e3o descontinuada =/")})();
f.callback();b(window).trigger("simpleCartCallback.quatro_digital");return d};b.fn.simpleCart.elements=b("");b(function(){var c;"function"===typeof window.ajaxRequestbuyButtonAsynchronous&&(c=window.ajaxRequestbuyButtonAsynchronous,window.ajaxRequestbuyButtonAsynchronous=function(l,h,d,k,g){c.call(this,l,h,d,k,function(){"function"===typeof g&&g();b.fn.simpleCart.elements.each(function(){var c;c=b(this);c.simpleCart(c.data("qd_simpleCartOpts"))})})})});var l=window.ReloadItemsCart||void 0;window.ReloadItemsCart=
function(c){b.fn.simpleCart(!0);"function"===typeof l?l.call(this,c):alert(c)};b(function(){var c=b(".qd_cart_auto");c.length&&c.simpleCart()});b(function(){b(window).bind("productAddedToCart minicartUpdated.vtex",function(){b.fn.simpleCart(!0)})})}catch(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",t)}})();
/* Quatro Digital Plus Smart Cart // 6.4 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(8(){1d{i.1s=i.1s||{},i.1s.1R=i.1s.1R||$.5a()}1b(h){"V"!==B Q&&"8"===B Q.19&&Q.19("2B! ",h.34)}})();(8(h){1d{E a=3a,k=8(a,b){W("1q"===B Q&&"V"!==B Q.19&&"V"!==B Q.1I&&"V"!==B Q.2P){E c;"1q"===B a?(a.59("[2E 3g - 2m 36]\\n"),c=a):c=["[2E 3g - 2m 36]\\n"+a];W("V"===B b||"3k"!==b.2L()&&"3Z"!==b.2L())W("V"!==B b&&"1I"===b.2L())1d{Q.1I.2J(Q,c)}1b(k){1d{Q.1I(c.1Z("\\n"))}1b(u){}}1F 1d{Q.19.2J(Q,c)}1b(g){1d{Q.19(c.1Z("\\n"))}1b(d){}}1F 1d{Q.2P.2J(Q,c)}1b(h){1d{Q.2P(c.1Z("\\n"))}1b(v){}}}};i.I=i.I||{};i.I.2q=!0;a.2c=8(){};E p=8(a){E b={j:"5b%7%4h%7%F%7%G",5c:"5e%7%F%7%G",5d:"57%7%1X%7%F%7%G",50:"54%7%1N%7%F%7%G",56:"55%7%1Q%7%F%7%G",5f:"c-38%7%1X%7%F%7%G",1x:"-38%7%1N%7%F%7%G","1x-":"38%7%1Q%7%F%7%G","1i%7%":"4h%7%1X%7%F%7%G","1i%7%2":"5r%7%1N%7%F%7%G","1i%7%25":"5q%7%1Q%7%F%7%G","1i%7%5s":"5v%7%F%7%G",5p:"5l%7%F%7%G",5m:"5w%7%1X%7%F%7%G",4T:"4O%7%1N%7%F%7%G",4L:"n%7%1Q%7%F%7%G","1x-4I":"4c%7%1X%7%F%7%G","1x-4J":"4M%7%1N%7%F%7%G","1x-4S":"4Q%7%1Q%7%F%7%G","1i%7%4R":"4W%7%1X%7%F%7%G","1i%7%4N":"5x%7%1N%7%F%7%G","1i%7%69":"4c%7%1Q%7%F%7%G","1i%7%2i%6j":"2%F%7%G","1G%7%F%7":"%G","1G%7%6t":"6u%7%F%7%G","1G%7%6v":"6r%7%F%7%G","1G%7%6k":"6p%7%F%7%G","1x-1G%7%4k":"63%7%F%7%G","1x-1G%7%5H":"5G%7%F%7%G","1x-1G%7%5I":"5J%7%F%7%G","1i%7%2i%7%5L":"5y%7%F%7%G","1i%7%2i%7%5A":"5B%7%F%7%G","1i%7%2i%7%4k":"5D%7%F%7%G"};U 8(a){E k,e,g,d;e=8(a){U a};g=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];a=a["d"+g[16]+"c"+g[17]+"m"+e(g[1])+"n"+g[13]]["l"+g[18]+"c"+g[0]+"5C"+e("o")+"n"];k=8(a){U 5N(5X(a.1o(/\\./g,"\\61").1o(/[a-60-Z]/g,8(a){U 5P.5O(("Z">=a?5T:5S)>=(a=a.65(0)+13)?a:a-26)})))};28(E h 2A b){W(k(a[[g[9],e("o"),g[12],g[e(13)]].1Z("")])===h+b[h]){d="5R"+g[17]+"e";5Q}d="f"+g[0]+"5U"+e(g[1])+""}e=!1;-1<a[[g[12],"e",g[0],"5V",g[9]].1Z("")].5Z("5Y%3R%3T%84%3d%82%3d%5W%5M%5E%3X%5F%3X%5K%3d%82%3R%3T%84%62%82")&&(e=!0);U[d,e]}(a)}(h);W(!6o(p[0]))U p[1]?k("\\6n\\6m\\48 \\6l\\1L\\6q\\6w\\47\\1L\\47\\48 \\6s\\1L\\6i\\1L \\68\\67\\66\\1L L\\64\\1L!"):!1;a.2c=8(b,h){E c,p,u,g,d,r,v;r=a(b);W(!r.1A)U r;c=a.4n(!0,{},{2a:!0,11:{3O:"6a 37 6b",3H:"6g 6h",1l:"<C><J>4F: #H</J><J>6f: #35</J></C><C><J>6e: #1C</J><J>6c: #2X</J></C>",2z:"6d 1M 6x n\\T 4z 5i 4i.",3K:"4K 4Y",3J:\'<3A 28="4-6-3M">4U 4j: </3A><2b 3Q="4V" 1S="4-6-3M" 4X="3U" />\'},2U:4P,23:!0,3e:8(a){U a.3e||a.5n},1R:8(){},2t:8(){}},h);a("");d=P;W(c.23){E w=!1;"V"===B i.2v&&(k("A 3V 32.1Y n\\T 1k 3W. o 5k 40\\2Q 5h 3c 4Z"),a.5j({5o:"//43.1e.2S.42/1e.1Y/1.0.0/1e.46.1Y",5u:!1,5t:"5g",19:8(){k("N\\T 1k 1z\\1y 2R \'//43.1e.2S.42/1e.1Y/1.0.0/1e.46.1Y\' o 2m n\\T 53\\2Q 51.");w=!0}}));W(w)U k("A 52\\1D\\T 1w 2m 58\\2Q 5z 6z!")}E t;W("1q"===B i.2v&&"V"!==B i.2v.1n)t=i.2v.1n;1F W("1q"===B 1e&&"1q"===B 1e.1n&&"V"!==B 1e.1n.3i)t=4B 1e.1n.3i;1F U k("N\\T 1k 3W a 3V 32.1Y");d.3L=\'<C D="4-6-1u 4-6-2M"><C D="4-6-4g"><C D="3v"></C><C D="4-6-7R"><C D="4-6-2z"><p></p></C><C D="4-6-3S 4-6-7S"><a 1v="#" D="4-6-3E"></a><C D="4-6-2F"> <C D="4-6-2D"></C> </C><J D="4-6-7Q"></J><a 1v="#" D="4-6-3w"></a></C><C D="4-6-3S 4-6-1I"><C D="4-6-1C"></C><C D="4-6-3I"></C><C D="4-6-7P"><a 1v="/1n/#/22" D="4-6-3N"></a><a 1v="#" D="2T"></a><a 1v="/1n/#/7N" D="4-6-1n"></a></C></C></C></C></C>\';p=8(f){a(P).39(f);f.M(".2T, .3v").1W(a(".7O")).1g("1J.2Z",8(){r.Y("4-2C-3C");a(2y.24).Y("4-2C-3D")});a(2y).7T("3f.2Z").7U("3f.2Z",8(f){27==f.7Y&&(r.Y("4-2C-3C"),a(2y.24).Y("4-2C-3D"))});E l=f.M(".4-6-2F");f.M(".4-6-3E").1g("1J.7X",8(){d.2j("-",1f 0,1f 0,l);U!1});f.M(".4-6-3w").1g("1J.7V",8(){d.2j(1f 0,1f 0,1f 0,l);U!1});f.M(".4-6-1C 2b").1a("").1g("3f.7W",8(){d.4D(a(P))});W(c.2a){E b=0;a(P).1g("7M.3G",8(){E f=8(){i.I.2q&&(d.1P(),i.I.2q=!1,a.1r.2r(!0),d.2f())};b=7L(8(){f()},7B);f()});a(P).1g("7C.3G",8(){7A(b)})}};u=8(f){f=a(f);c.11.1l=c.11.1l.1o("#35",\'<J D="4-6-3F"></J>\');c.11.1l=c.11.1l.1o("#H",\'<J D="4-6-3z"></J>\');c.11.1l=c.11.1l.1o("#1C",\'<J D="4-6-3y"></J>\');c.11.1l=c.11.1l.1o("#2X",\'<J D="4-6-3x"></J>\');f.M(".4-6-3N").1h(c.11.3O);f.M(".2T").1h(c.11.3K);f.M(".4-6-1n").1h(c.11.3H);f.M(".4-6-3I").1h(c.11.1l);f.M(".4-6-1C").1h(c.11.3J);f.M(".4-6-2z p").1h(c.11.2z);U f}(P.3L);g=0;r.2e(8(){0<g?p.1j(P,u.7x()):p.1j(P,u);g++});i.1s.1R.1W(8(){a(".4-6-3F").1h(i.1s.2X||"--");a(".4-6-3z").1h(i.1s.1K||"0");a(".4-6-3y").1h(i.1s.1C||"--");a(".4-6-3x").1h(i.1s.7D||"--")});v=8(a,c){W("V"===B a.H)U k("N\\T 1k 1z\\1y 2R 1V H 4A 7E\\1D\\T");d.3P.1j(P,c)};d.1P=8(f,b){E d;a(".4-6-1u").Y("4-6-3B");c.23?(d=8(f){i.I.S=f;v(f,b);"V"!==B i.K&&"8"===B i.K.1E&&i.K.1E.1j(P);a(".4-6-1u").14("4-6-3B")},"V"!==B i.I.S?(d(i.I.S),"8"===B f&&f(i.I.S)):a.7J(["H","30","2h"],{2s:8(a){d.1j(P,a);"8"===B f&&f(a)},2o:8(a){k(["N\\T 1k 1z\\1y 2R 1V 20 1w 1M",a])}})):2V("7K m\\2l 2g 2k!")};d.2f=8(){E f=a(".4-6-1u");f.M(".4-6-2H").1A?f.Y("4-6-2M"):f.14("4-6-2M")};d.3P=8(f){E b=a(".4-6-2D");b.31();b.2e(8(){E b=a(P),l,m,n,e,g=a(""),q;28(q 2A i.I.S.H)"1q"===B i.I.S.H[q]&&(n=i.I.S.H[q],m=a(\'<C D="4-6-2H 7I"><C D="4-6-21 4-6-7H 4-6-7F"><C D="4-6-81"><80 3o="" D="4-6-41" /><J D="4-6-8n"></J></C></C><C D="4-6-21 4-6-8o 4-6-45"></C><C D="4-6-21 4-6-8m 4-6-49"></C><C D="4-6-21 4-6-8l 4-6-8j"><C D="4-6-3m 44"><a 1v="#" D="4-6-2W"></a><2b 3Q="8q" D="4-6-1B" /><a 1v="#" D="4-6-2I"></a><J D="4-6-8k"></J></C></C><C D="4-6-21 4-6-8p 4-6-8h"><C D="4-6-8i 44"><a 1v="#" D="4-6-2d"></a><J D="4-6-88"></J></C></C></C>\'),m.15({"X-10":n.1S,"X-10-1m":q}),m.14(".4-6-"+n.89),m.M(".4-6-45").39(c.3e(n)),m.M(".4-6-49").39(2N(n.2n)?n.2n:0==n.2n?"87\\86":"R$ "+83(n.2n/85,2,",",".")),m.M(".4-6-1B").15({"X-10":n.1S,"X-10-1m":q}).1a(n.1B),m.M(".4-6-2d").15({"X-10":n.1S,"X-10-1m":q}),d.3t(n.1S,m.M(".4-6-41"),n.8a),m.M(".4-6-2I,.4-6-2W").15({"X-10":n.1S,"X-10-1m":q}),m.8b(b),g=g.1W(m));1d{E h=b.4x(".4-6-1u").M(".4-6-1C 2b");h.1A&&""==h.1a()&&h.1a(i.I.S.2h.6y.4v)}1b(x){k("4m 37 40 8e o 3U 2S 8d 7G 20 1w 1n. 4G: "+x.34,"3Z")}d.3l();d.2f();f&&f.3Y&&8(){e=g.6S("[X-10=\'"+f.3Y+"\']");e.1A&&(l=0,g.2e(8(){E f=a(P);W(f.6T(e))U!1;l+=f.6R()}),d.2j(1f 0,1f 0,l,b.1W(b.7w())),g.Y("4-6-4a"),8(a){a.14("4-6-3s");a.14("4-6-4a");3h(8(){a.Y("4-6-3s")},c.2U)}(e))}()});(8(){I.S.H.1A?(a("24").Y("4-6-22-31").14("4-6-22-3r 4-6-3u-1W-3q"),3h(8(){a("24").Y("4-6-3u-1W-3q")},c.2U)):a("24").Y("4-6-22-3r").14("4-6-22-31")})();"8"===B c.2t?c.2t.1j(P):k("2t n\\T \\1O 33 4y\\1D\\T")};d.3t=8(f,b,c){8 d(){b.Y("4-3p").6O(8(){a(P).14("4-3p")}).15("3o",c)}c?d():2N(f)?k("N\\T 1k 6P 33 6U 4H a 6V e 70 3j 2K","3k"):2V("4q\\1D\\T 3b \\1O 3j m\\2l 2k. 6Z o 6W.")};d.3l=8(){E f,b,c,e;f=8(f,b){E c,e,l,g;l=a(f);c=l.15("X-10");g=l.15("X-10-1m");c&&(e=2O(l.1a())||1,d.2p([c,g],e,e+1,8(a){l.1a(a);"8"===B b&&b()}))};c=8(f,b){E c,l,e,g;e=a(f);c=e.15("X-10");g=e.15("X-10-1m");c&&(l=2O(e.1a())||2,d.2p([c,g],l,l-1,8(a){e.1a(a);"8"===B b&&b()}))};e=8(f,b){E c,e,l,g;l=a(f);c=l.15("X-10");g=l.15("X-10-1m");c&&(e=2O(l.1a())||1,d.2p([c,g],1,e,8(a){l.1a(a);"8"===B b&&b()}))};b=a(".4-6-3m:6M(.3n)");b.14("3n").2e(8(){E d=a(P);d.M(".4-6-2I").1g("1J.6E",8(a){a.4C();b.14("4-1t");f(d.M(".4-6-1B"),8(){b.Y("4-1t")})});d.M(".4-6-2W").1g("1J.6B",8(a){a.4C();b.14("4-1t");c(d.M(".4-6-1B"),8(){b.Y("4-1t")})});d.M(".4-6-1B").1g("6A.6F",8(){b.14("4-1t");e(P,8(){b.Y("4-1t")})})});a(".4-6-2H").2e(8(){E b=a(P);b.M(".4-6-2d").1g("1J.6G",8(){b.14("4-1t");d.4b(a(P),8(a){a?b.4o(!0).6L(8(){b.2d();d.2f()}):b.Y("4-1t")});U!1})})};d.4D=8(a){E b=a.1a(),b=b.1o(/[^0-9\\-]/g,""),b=b.1o(/([0-9]{5})\\-?([0-9])([0-9]{2})?/g,"$1-$2$3"),b=b.1o(/(.{9}).*/g,"$1");a.1a(b);9<=b.1A&&(a.X("4w")!=b&&t.71({4v:b,72:"7m"}).2s(8(a){i.I.S=a;d.1P()}).2o(8(a){k(["N\\T 1k 1z\\1y 7n o 4j",a]);7l()}),a.X("4w",b))};d.2p=8(b,e,g,h){8 m(b){b="4d"!==B b?!1:b;d.1P();i.I.2q=!1;d.2f();"V"!==B i.K&&"8"===B i.K.1E&&i.K.1E.1j(P);"8"===B 2u&&2u();a.1r.2r(!0,1f 0,b);"8"===B h&&h(e)}g=g||1;W(1>g)U e;W(c.23){W("V"===B i.I.S.H[b[1]])U k("N\\T 1k 1z\\1y 4e 1V 20 1w 1U. A 4f 4s \\1O 4t 4u 2K: i.I.S.H["+b[1]+"]"),e;i.I.S.H[b[1]].1B=g;i.I.S.H[b[1]].1m=b[1];t.7k([i.I.S.H[b[1]]],["H","30","2h"]).2s(8(a){i.I.S=a;m(!0)}).2o(8(a){k(["N\\T 1k 1z\\1y 4l a 7i 7j 7o 3c 1M",a]);m()})}1F k("7p\\1D\\T 2g m\\2l 2g 2k")};d.4b=8(b,e){8 d(b){b="4d"!==B b?!1:b;"V"!==B i.K&&"8"===B i.K.1E&&i.K.1E.1j(P);"8"===B 2u&&2u();a.1r.2r(!0,1f 0,b);"8"===B e&&e(g)}E g=!1,h=a(b).15("X-10-1m");W(c.23){W("V"===B i.I.S.H[h])U k("N\\T 1k 1z\\1y 4e 1V 20 1w 1U. A 4f 4s \\1O 4t 4u 2K: i.I.S.H["+h+"]"),g;i.I.S.H[h].1m=h;t.7u([i.I.S.H[h]],["H","30","2h"]).2s(8(a){g=!0;i.I.S=a;v(a);d(!0)}).2o(8(a){k(["N\\T 1k 1z\\1y 7t o 1U 1w 1M",a]);d()})}1F 2V("4q\\1D\\T, 3b m\\2l 2g 2k.")};d.2j=8(b,c,e,d){d=d||a(".4-6-2F, .4-6-2D");b=b||"+";c=c||.9*d.7h();d.4o(!0,!0).7g({77:2N(e)?b+"="+c+"78":e})};c.2a||(d.1P(),a.1r.2r(!0));a(i).1g("76 75.1e",8(){1d{i.I.S=1f 0,d.1P()}1b(a){k("4m 37 4l 1V 20 1w 1M a 73 1w 74 4A 32. 4G: "+a.34,"79")}});"8"===B c.1R?c.1R.1j(P):k("7a n\\T \\1O 33 4y\\1D\\T")};a.1r.2c=8(b){E h;h=a(P);h.1r=4B a.2c(P,b);U h}}1b(b){"V"!==B Q&&"8"===B Q.19&&Q.19("2B! ",b)}})(P);(8(h){1d{E a=3a;i.K=i.K||{};i.K.H={};i.K.1T=!1;i.K.7f=!1;i.K.7e=!1;E k=8(){E b,e,h,c;W(i.K.1T){e=!1;h={};i.K.H={};28(c 2A i.I.S.H)"1q"===B i.I.S.H[c]&&(b=i.I.S.H[c],"V"!==B b.1c&&7d!==b.1c&&""!==b.1c&&(i.K.H["1H"+b.1c]=i.K.H["1H"+b.1c]||{},i.K.H["1H"+b.1c].4E=b.1c,h["1H"+b.1c]||(i.K.H["1H"+b.1c].1K=0),i.K.H["1H"+b.1c].1K+=b.1B,e=!0,h["1H"+b.1c]=!0));c=e}1F c=1f 0;i.K.1T&&(a(".4-1p-1u").2d(),a(".4-1p-1U-2G").Y("4-1p-1U-2G"));28(E k 2A i.K.H){b=i.K.H[k];W("1q"!==B b)U;h=a("2b.4-1c[35="+b.4E+"]").4x("7b");W(i.K.1T||!h.M(".4-1p-1u").1A)e=a(\'<J D="4-1p-1u" 7c="4F 3c 1M 4H 3b 4i."><J D="4-1p-4g"><J D="4-1p-1K"></J></J></J>\'),e.M(".4-1p-1K").1h(b.1K),b=h.M(".6Q"),b.1A?b.4r(e).14("4-1p-1U-2G"):h.4r(e)}c&&(i.K.1T=!1)};i.K.1E=8(){i.K.1T=!0;k.1j(P)};a(2y).7r(8(){k.1j(P)})}1b(p){"V"!==B Q&&"8"===B Q.19&&Q.19("2B! ",p)}})(P);(8(){1d{E h=3a,a,k={2x:".7q",29:{},2w:{}};h.7s=8(b){E e={};a=h.4n(!0,{},k,b);b=h(a.2x).2c(a.29);e.2w="V"!==B a.29.2a&&!1===a.29.2a?h(a.2x).4p(b.1r,a.2w):h(a.2x).4p(a.2w);e.29=b;U e};h.1r.2Y=8(){"1q"===B Q&&"8"===B Q.1I&&Q.1I("O 6I 36 n\\T \\1O 6H 6J 6K 6C. A 6D\\T 6N 6X\\6Y 2g 7v 4z 8c\\8f 8g e 8r 1V 7y 7z \\7Z 2E 3g.")};h.2Y=h.1r.2Y}1b(p){"V"!==B Q&&"8"===B Q.19&&Q.19("2B! ",p)}})();',62,524,'||||qd||ddc|25C2|function||||||||||window|||||||||||||||||||typeof|div|class|var|25A8pbz|25A8oe|items|_QuatroDigital_DropDown|span|_QuatroDigital_AmountProduct||find|||this|console||getOrderForm|u00e3o|return|undefined|if|data|removeClass||sku|texts|||addClass|attr||||error|val|catch|productId|try|vtex|void|bind|html|jjj|call|foi|cartTotal|index|checkout|replace|bap|object|fn|_QuatroDigital_CartData|loading|wrapper|href|do|qrirybc|u00edvel|poss|length|quantity|shipping|u00e7|exec|else|fhkkne|prod_|info|click|qtt|u0391|carrinho|25A8igrkpbzzreprorgn|u00e9|getCartInfoByUrl|25A8igrkpbzzreprfgnoyr|callback|id|allowRecalculate|item|os|add|25A8igrkpbzzrepr|js|join|dados|prodCell|cart|smartCheckout|body||||for|dropDown|updateOnlyHover|input|QD_dropDownCart|remove|each|cartIsEmpty|esta|shippingData|25A8fhkkne|scrollCart|descontinuado|u00e9todo|DropDown|sellingPrice|fail|changeQantity|allowUpdate|simpleCart|done|callbackProductsList|adminCart|vtexjs|buyButton|selector|document|emptyCart|in|Oooops|bb|prodWrapper2|Quatro|prodWrapper|added|prodRow|quantityMore|apply|SKU|toLowerCase|noItems|isNaN|parseInt|warn|u00e1|obter|com|qd_ddc_continueShopping|timeRemoveNewItemClass|alert|quantityMinus|total|smartCart|qd_ddc_closeFn|totalizers|empty|VTEX|uma|message|value|Cart|ao|nzvaunyvfgn|append|jQuery|este|no|D1|skuName|keyup|Digital|setTimeout|SDK|um|alerta|actionButtons|prodQttWrapper|qd_on|src|loaded|time|rendered|lastAdded|insertProdImg|product|qd_ddc_lightBoxClose|scrollDown|infoAllTotal|infoTotalShipping|infoTotalItems|label|prodLoaded|lightBoxProdAdd|lightBoxBodyProdAdd|scrollUp|infoTotalValue|qd_ddc_hover|linkCheckout|infoTotal|shippingForm|continueShopping|cartContainer|cep|viewCart|linkCart|renderProductsList|type|E0|row|B8|CEP|biblioteca|encontrada|C2|lastSku|aviso|tentar|image|br|io|clearfix|prodName|min|u2202|u0472|prodPrice|lastAddedFixed|removeProduct|gnuryran|boolean|localizar|chave|wrapper2|25A8nzvaunyvfgn|produto|frete|25A8igrk|atualizar|Problemas|extend|stop|QD_buyButton|Aten|prepend|buscada|composta|pelo|postalCode|qdDdcLastPostalCode|getParent|fun|tem|da|new|preventDefault|shippingCalculate|prodId|Itens|Detalhes|para|rfcnpbfna|rfcnpbfnag|Continuar|rfcnpbfnagnuryra|nuryran|25A8rfcnpbfn|an|5E3|uryran|25A8rfcnpbf|rfcnpbfnagn|rfcnpbfnagnuryr|Calcular|tel|nagnuryran|placeholder|Comprando|CDN|nzva|executado|execu|ser|unyvfgn|nyvfgn|nzvau|aunyvfgn|par|unshift|Callbacks|jj|nz|nzv|vaunyvfgn|qriryb|script|buscar|nenhum|ajax|Script|yran|rfcnpbfnagnury|name|url|rfcnpbfnagnur|A8nzvaunyvfgn|5A8nzvaunyvfgn|25A|dataType|async|8rfcnpbfnagnuryran|ran|agnuryran|rkpbzzrepr|por|25A8igr|kpbzzreprorgn|ti|pbzzreprfgnoyr|83d|A1g|bzzreprorgn|25A8igrkp|25A8igrkpb|zzreprfgnoyr|A1|25A8ig|CF|escape|fromCharCode|String|break|tr|122|90|ls|rc|8F|encodeURIComponent|qu|indexOf|zA|u00a8|C5|pbzzrepr|u0472J|charCodeAt|u01ac|u0abd|u0aef|25A8rfcnpbfna|Ir|Carrinho|Total|Seu|Frete|Subtotal|Finalizar|Compra|u0ae8|25C|25A8igrkpbzzrep|u221a|u00c3|u0e17|eval|rfgnoyr|u2113|prorgn|u03a1|25A8igrkpbzzr|epr|25A8igrkpbzzre|u00a1|ainda|address|aqui|focusout|qd_ddc_minus|forma|vers|qd_ddc_more|qd_ddc_change|qd_ddc_remove|mais|Smart|iniciado|desta|slideUp|not|que|load|informada|qd_bap_wrapper_content|outerHeight|filter|is|URL|imagem|SAC|voc|u00ea|Contacte|nem|calculateShipping|country|partir|eveento|minicartUpdated|productAddedToCart|scrollTop|px|avisso|Callback|li|title|null|quickViewUpdate|buyButtonClicked|animate|height|quantidade|de|updateItems|updateCartData|BRA|calcular|itens|aten|qdDdcContainer|ajaxStop|QD_smartCart|remover|removeItems|executando|parent|clone|direitos|reservados|clearInterval|600|mouseleave|allTotal|requisi|prodImg|nos|column1|qd_ddc_prodRow|QD_checkoutQueue|Este|setInterval|mouseenter|orderform|qd_ddc_lightBoxOverlay|infoBts|prodLoading|wrapper3|products|off|on|qd_ddc_scrollDown|qd_ddc_cep|qd_ddc_scrollUp|keyCode|u00e0|img|prodImgWrapper||qd_number_format||100|u00e1tis|Gr|prodRowLoading|availability|imageUrl|appendTo|licen|base|definir|u00e7a|restrita|prodRemove|removeWrapper|prodQtt|qttLoading|column4|column3|imgLoading|column2|column5|text|todos'.split('|'),0,{}));
/*https://github.com/coolaj86/knuth-shuffle*/
(function(e){e.knuthShuffle=function(a){for(var b=a.length,d,c;0!==b;)c=Math.floor(Math.random()*b),--b,d=a[b],a[b]=a[c],a[c]=d;return a}})("undefined"!==typeof exports&&exports||"undefined"!==typeof window&&window||global);
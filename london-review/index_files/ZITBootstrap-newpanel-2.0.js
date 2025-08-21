/* Build widget for Recommend content */
/* Must not use any third party library here */
/* Browser specific javascript API (e.g. IE's ajax) also must be used with caution */

(function ($, window, undefined) {
    /**
    * Simple localStorage with Cookie Fallback
    * v.1.0.0
    *
    * USAGE:
    * ----------------------------------------
    * Set New / Modify:
    *   store('my_key', 'some_value');
    *
    * Retrieve:
    *   store('my_key');
    *
    * Delete / Remove:
    *   store('my_key', null);
    */
    var store = function store(key, value) {

        var lsSupport = false;
        try {
            // Check for native support
            if (localStorage) {
                lsSupport = true;
            }
        } catch (e) { }

        // If value is detected, set new or modify store
        if (typeof value !== "undefined" && value !== null) {
            // Convert object values to JSON
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            // Set the store
            if (lsSupport) { // Native support
                localStorage.setItem(key, value);
            } else { // Use Cookie
                createCookie(key, value, 30);
            }
        }

        // No value supplied, return value
        if (typeof value === "undefined") {
            // Get value
            if (lsSupport) { // Native support
                data = localStorage.getItem(key);
            } else { // Use cookie 
                data = readCookie(key);
            }

            // Try to parse JSON...
            try {
                data = JSON.parse(data);
            }
            catch (e) {
                data = data;
            }

            return data;

        }

        // Null specified, remove store
        if (value === null) {
            if (lsSupport) { // Native support
                localStorage.removeItem(key);
            } else { // Use cookie
                createCookie(key, '', -1);
            }
        }
    };

    var sessionStore = function (key, value) {
        var lsSupport = false;
        var data;

        try {
            // Check for native support
            if (sessionStorage) {
                lsSupport = true;
            }
        } catch (e) { }

        if (typeof value !== "undefined" && value !== null) {
            if (lsSupport)
                sessionStorage.setItem(key, value);
        }

        // No value supplied, return value
        if (typeof value === "undefined") {
            // Get value
            if (lsSupport) { // Native support
                data = sessionStorage.getItem(key);

                // Try to parse JSON...
                try {
                    data = JSON.parse(data);
                }
                catch (e) {
                    data = data;
                }

                return data;
            }

            return null;
        }

        // Null specified, remove store
        if (value === null) {
            if (lsSupport) { // Native support
                sessionStorage.removeItem(key);
            }
        }
    };
    function createCookie(key, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); //mileseconds
        var expires = "; expires=" + date.toGMTString();
        if (days > 0)
            writeDebug("1 Cookie created " + key + "=" + value + expires + "; path=/; samesite=lax;");
        document.cookie = key + "=" + value + expires + "; path=/; samesite=lax;";
    }
    function createCookieinDetails(key, value, days, hours, minutes, seconds) {
        createCookie(key, '', -1); //expire immediately
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)); //mileseconds
        var expires = "; expires=" + date.toGMTString();
        writeDebug("2 Cookie created " + key + "=" + value + expires + "; path=/;samesite=lax;");
        document.cookie = key + "=" + value + expires + "; path=/;samesite=lax;";
    }
    function readCookie(key) {
        var nameEQ = key + "=";
        var ca = document.cookie.split(';');
        for (var i = 0, max = ca.length; i < max; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function writeDebug(message) {
        var isDebug = readCookie("_sd") || 0;
        if (isDebug == 1)
            console.log(message);
    }
    var isMobile = function () {
        var isMobile = false; //initiate as false
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
        return isMobile;
    };

    var ZIT = {};

    ZIT.Util = {
        isUndefinedOrNull: function (val) {
            return (typeof val === 'undefined' || !val);
        },
        isValidEmail: function (email) {
            if (email && email.length === 0) { return false; }
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    };

    ZIT.DOM = {
        parent: function (tagname, el) {
            if ((el.nodeName || el.tagName).toLowerCase() === tagname.toLowerCase()) {
                return el;
            }
            while (el = el.parentNode) {
                if ((el.nodeName || el.tagName).toLowerCase() === tagname.toLowerCase()) {
                    return el;
                }
            }
            return null;
        },
        findParentByClassName: function (el, cls) {
            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el;
        },
        findParentByAttribute: function (el, attr) {
            while ((el = el.parentElement) && !el.getAttribute(attr));
            return el;
        },
        findElementsByClassName: function (container, className) {
            var elems = null;
            if (container) {
                elems = container.getElementsByClassName(className);
            } else {
                elems = document.getElementsByClassName(className);
            }
            return elems;
        },
        findElementsByAttribute: function (container, attr) {
            var elems = null;
            if (container) {
                elems = container.querySelectorAll(attr);
            } else {
                elems = document.querySelectorAll(attr);
            }
            return elems;
        },
        findElementsBySelector: function (container, selector) {
            var elems = null;
            if (container) {
                elems = container.querySelectorAll(selector);
            } else {
                elems = document.querySelectorAll(selector);
            }
            return elems;
        },
        findById: function (id) {
            return document.getElementById(id) || null;
        },
        hasClassName: function (el, className) {
            if (!el) {
                writeDebug("Unable to find className from empty element " + className);
                return false;
            }
            else
                return el.className && new RegExp("(\\s|^)" + className + "(\\s|$)").test(el.className);
        },
        addClass: function (el, className) {
            if (!this.hasClassName(el, className)) {
                el.className += ' ' + className;
            }
        },
        removeClass: function (el, className) {
            if (document.documentElement.classList) {
                removeClass = function (el, className) {
                    el.classList.remove(className);
                };
            } else {
                removeClass = function (el, className) {
                    if (!el || !el.className) {
                        return false;
                    }
                    var regexp = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
                    el.className = el.className.replace(regexp, "$2");
                };
            }
            if (el) {
                removeClass(el, className);
            }
        },
        removeClassFromSelector: function (container, selector, className) {
            var self = this;
            var elems = self.findElementsBySelector(container, selector);
            [].forEach.call(elems, function (el) {
                self.removeClass(el, className);
            });
        },
        bindEvent: function (el, event, fn) {
            if (window.addEventListener) {
                el.addEventListener(event, fn, false);
            } else {
                el.attachEvent(event, fn);
            }
        },
        unbindEvent: function (el, event, fn) {
            if (window.addEventListener) {
                el.removeEventListener(event, fn);
            } else {
                el.detachEvent(event, fn);
            }
        },
        bindOneEvent: function (el, event, fn) {
            if (window.addEventListener) {
                el.addEventListener(event, function (e) {
                    // remove event
                    e.target.removeEventListener(e.type, arguments.callee);
                    // call handler
                    return fn(e);
                }, false);
            } else {
                el.attachEvent(event, function (e) {
                    // remove event
                    e.target.removeEventListener(e.type, arguments.callee);
                    // call handler
                    return fn(e);
                });
            }
        },
        getDataVal: function (el, dataName) {
            return (el && el.getAttribute('data-' + dataName)) || '';
        },
        getVal: function (el, dataName) {
            return (el && el.getAttribute(dataName)) || '';
        }
    };

    var ISLOCAL = false;
    var $body = document.body;
    var docElem = document.documentElement;

    //Default to show thumbnail
    //var emailClickedId = 0;
    //var initWidgetCount = 0;
    //var totalWidgets = window['ZIT.WidgetConfig'].length;

    var WidgetTypes = {
        'FLOATING': 1,
        'GRID': 2,
        'ROW': 3,
        'FEATURED': 4,
        'FLOATINGCOLUMN': 5,
        'COLUMN': 6,
        'BIGIMAGEGRID': 7,
        'DISPLAYCOVER': 9,
        'DISPLAYCAMPAIGNCOVER': 10,
        'NEWPANEL': 14
    };


    function Widget(container, config) {
        var self = this;
        var isShowThumbnail = true;
        var WidgetContainer = container;
        var WidgetConfig = config;
        //var IFrameHelper = ZIT.iframeHelper;
        var wid = WidgetConfig.wid;
        var CLOSE_FLOATINGCOLUMN_SESSIONS = 'zit.npwcc';
        var CLOSE_FLOATINGCOLUMN_SESSION_KEY = 'zit.npwcc.' + wid;
        var HIDE_FLOATINGCOLUMN_SESSION_KEY = 'zit.npwhc.' + wid;
        var CLOSE_SLIDE_WIDGET_SESSION_KEY = 'zit.npw.slide.close';
        var CLOSE_SLIDE_WIDGET_COOKIE_KEY = 'zit.npw.slide.close';
        var CLOSE_POPUP_WIDGET_SESSION_KEY = 'zit.npw.popup.close';
        var CLOSE_SLIDE_WIDGET_TYPE_COOKIE_KEY = 'zit.npw.slide.type.close';
        var CLOSE_SLIDE_WIDGET_TYPE_SESSION_KEY = 'zit.session.slide.type.close';
        var CLOSE_FLOATINGCOLUMN_POPUP_SESSION_KEY = 'zit.npwcc.popup';
        var DISABLE_POPUP = 'zit.disablepop';

        var actionTracking = function (action) {
            var isDNT = window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || WidgetConfig.doNotTrack;
            var devicetype = window.ZITFunctions.retrieveDeviceType();
            var visitortype = window.ZITFunctions.retrieveVisitorType();
            var url = "";
            if (typeof window.SubxMode != "undefined" && typeof window.SubxMode.getDataTrackingDomain() != "undefined")
                url = window.SubxMode.getDataTrackingDomain();
            else
                url = "https://datatracking.zeddit.com/";
            url = url + "UpdateWidgetPerformance?widgetId=" + WidgetConfig.wid + "&pid=" + WidgetConfig.pid + "&vtype=" + visitortype + "&dtype=" + devicetype + "&actionType=" + action + "&origId=" + WidgetConfig.origId + "&curSession=" + WidgetConfig.curSession + "&host=" + window.location.href;
            JSONP(url, function (data) {
            });
        };
        var SendPopEvent = function (isOpen, sendCloseEvent) {
            if ((typeof window.SubxLimitSlide != "undefined" && window.SubxLimitSlide) || (typeof window.ZITFunctions.SubxLimitSlide != "undefined" && window.ZITFunctions.SubxLimitSlide)) {
                if (isOpen) {
                    if (window.ZITFunctions.SubxLimitSlide)
                        window.ZITFunctions.SubxPopupOpened++;
                    else
                        window.SubxPopupOpened++;
                    window.ZITFunctions.setCanvas(1);
                    window.ZITFunctions.sendtoBlueConic("subx-impression");
                    window.ZITFunctions.sendGAData(0, 'AutoOpenModal', WidgetConfig.wid, 'Canvas', false);
                    writeDebug(" popup opened " + window.SubxPopupOpened + " " + window.ZITFunctions.SubxPopupOpened);
                }
                else {
                    if (window.ZITFunctions.SubxLimitSlide)
                        window.ZITFunctions.SubxPopupClosed++;
                    else
                        window.SubxPopupClosed++;
                    if (sendCloseEvent)
                        window.ZITFunctions.sendGAData(0, 'CloseModal', WidgetConfig.wid, 'Canvas', false);
                    writeDebug(" popup closed " + window.SubxPopupClosed + " " + window.ZITFunctions.SubxPopupClosed);
                }
            }
            else
                writeDebug("limitslide is not enabled.")
        };
        var changePubStyle = function () {
            try {
                if (WidgetConfig && (WidgetConfig.pid == 952 || WidgetConfig.pid == 1014)) {
                    if (WidgetConfig.widgetType == 'canvas-display' && WidgetConfig.variant == 10) {
                        var specialCanvas = ZIT.DOM.findElementsByClassName(null, 'wid-' + WidgetConfig.wid);
                        if (specialCanvas.length > 0) {
                            writeDebug("******Special Canvas found******");
                            var zitWidgetWrapper = specialCanvas[0].closest(".js-zitWidgetWrapper");
                            if (typeof zitWidgetWrapper != 'undefined') {
                                var styleClearNode = document.createElement('style');
                                styleClearNode.innerHTML = ".main.can-animate{ margin-top:revert;}";
                                zitWidgetWrapper.appendChild(styleClearNode);
                            }
                            else
                                writeDebug("js-zitWidgetWrapper class not found")
                        }
                        else
                            writeDebug(" ****** Normal Canvas detected." + WidgetConfig.pid + " " + WidgetConfig.widgetType + " " + WidgetConfig.variant + " " + WidgetConfig.wid);
                    }
                    else
                        writeDebug("No special widget detected:" + WidgetConfig.widgetType + " " + WidgetConfig.variant + " " + WidgetConfig.wid);
                }
                else
                    writeDebug(" ****** Normal Canvas detected." + WidgetConfig.pid + " " + WidgetConfig.widgetType + " " + WidgetConfig.variant + " " + WidgetConfig.wid);
            }
            catch (error) {
                if (window.ZITFunctions)
                    window.ZITFunctions.sendRaygunData(error, "changePubStyle");
            }
        }

        self.processHtmlData = function (callback) {
            try {
                var getScrollPercent = function () {
                    var h = docElem,
                        b = $body,
                        st = 'scrollTop',
                        sh = 'scrollHeight';
                    if (((h[sh] || b[sh]) - h.clientHeight) <= 0)
                        return 100;
                    else
                        return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
                }

                writeDebug("Process " + WidgetConfig.key);

                //start of exit mobile
                var thresh;
                var exitModalSeen = false;
                var backButtonTrigger = false;
                var prevPage = document.referrer;

                //push state into window history for back button trigger to work on popstate event
                //this only works when document referrer is different from current host (i.e. back button leads to another domain)if (prevPage == "" || prevPage.indexOf(window.location.hostname) < 0) {
                try {
                    window.history.pushState({ zephr: "trackExitIntent" }, document.title, window.location);
                }
                catch (error) { }
                var onPopState = function (e) {
                    backButtonTrigger = true;
                    //console.log("Back button clicked ", backButtonTrigger);
                    //console.log("Popstate event: ", e.state);
                    if (exitModalSeen) {
                        writeDebug("Modal seen before, popstate triggering history.back()");
                        history.back();
                        SendPopEvent(false, false);
                    } else {
                        fnOpenPopup(WidgetConfig); //showExitIntentModal();
                    }
                };
                //end of exit mobile

                var checkScrollSpeed = (function (settings) {
                    settings = settings || {};

                    var lastPos, newPos, timer, delta,
                        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

                    function clear() {
                        lastPos = null;
                        delta = 0;
                    }

                    clear();

                    return function () {
                        newPos = window.scrollY;
                        if (lastPos != null) { // && newPos < maxScroll 
                            delta = newPos - lastPos;
                        }
                        lastPos = newPos;
                        clearTimeout(timer);
                        timer = setTimeout(clear, delay);
                        return delta;
                    };
                })();

                var initializeShapEextendedToFullWidth = function (widgetContainer) {
                    try {
                        var intWidth = 0;
                        var intCanvasAlign = "";
                        var modalZeddit = widgetContainer.querySelector('.zit-widget-wrapper--new-panel');
                        if (modalZeddit) {
                            intWidth = modalZeddit.offsetWidth;
                            intCanvasAlign = modalZeddit.getAttribute('data-canvasalign');
                        }

                        var modalShape = widgetContainer.querySelectorAll('.shape-extended-to-fw, .hide-show-text-extended-to-fw');
                        if (modalShape) {
                            for (var i = 0; i < modalShape.length; i++) {
                                var intMarginL = modalShape[i].getAttribute('data-l-margin') || 0;
                                var intMarginR = modalShape[i].getAttribute('data-r-margin') || 0;
                                modalShape[i].style.width = intWidth - (parseFloat(intMarginL) + parseFloat(intMarginR)) + 'px';

                                if (intCanvasAlign && (intCanvasAlign === "0" || intCanvasAlign === "1")) {
                                    modalShape[i].style.left = 'unset';
                                    modalShape[i].style.transform = 'unset';
                                    if (intCanvasAlign === "0") modalShape[i].style.right = intMarginR + 'px';
                                    if (intCanvasAlign === "1") modalShape[i].style.left = intMarginL + 'px';
                                }
                            }
                        }
                    }
                    catch (error) {
                        if (window.ZITFunctions)
                            window.ZITFunctions.sendRaygunData(error, 'initializeShapEextendedToFullWidth');
                    }
                };

                function fnOpenPopup(widget) {
                    try {
                        if (widget !== undefined) {
                            var isClose = false;
                            var isDropoff = false;
                            var isInValid = "false";
                            console.log(CLOSE_FLOATINGCOLUMN_SESSION_KEY + "#" + window.ZITFunctions.sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY));
                            if (window.ZITFunctions) {
                                isDropoff = window.ZITFunctions.retrieveDropoffStage();
                                isClose = window.ZITFunctions.sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY) || false;
                            }
                            var disablePOPUp = window.ZITFunctions.sessionStore(DISABLE_POPUP) || false;
                            if (!isClose && !disablePOPUp && isInValid === "false" && isDropoff == 0) {
                                var container = ZIT.DOM.findElementsByClassName(WidgetContainer, 'exit-intent-popup')[0]; //document.querySelector('.exit-intent-popup');
                                if (container) {
                                    container.addEventListener('click', function (e) {
                                        var modalZeddit = WidgetContainer.querySelector('.zit-widget-wrapper--new-panel');
                                        var isDataWall = 0;
                                        if (modalZeddit) {
                                            isDataWall = modalZeddit.getAttribute('data-iscg');
                                        }
                                        window.ZITUtils.writeDebug("Datawall flag retrieved " + isDataWall);
                                        if (event.target == container && isDataWall == 0) {
                                            container.classList.remove('visible');
                                            SendPopEvent(false, true);
                                        }
                                    });
                                    if (container.classList) {
                                        var isAutoClose = false;
                                        if (typeof window.getAutoCloseWidget !== "undefined") {
                                            isAutoClose = window.getAutoCloseWidget(WidgetConfig.wid);
                                        }
                                        if (!isAutoClose) {
                                            initializeShapEextendedToFullWidth(WidgetContainer);
                                            container.classList.add('visible');

                                            var sequenceNode = WidgetContainer.querySelector('.zit-widget-wrapper--new-panel .sequence-canvas-content .widget-container-new-panel.sequence-canvas-section.step-main');
                                            if (!sequenceNode)
                                                sequenceNode = WidgetContainer.querySelector('.zit-widget-wrapper--new-panel');
                                            var collOnTimerAttribute = sequenceNode && sequenceNode.getAttribute('data-collOnTimer');

                                            var modalZeddit = WidgetContainer.querySelector('.zit-widget-wrapper--new-panel');
                                            if (modalZeddit) {
                                                var collOnTimerTimeout;
                                                if (collOnTimerAttribute) {
                                                    var collOnTimerTime = collOnTimerAttribute * 1000;
                                                    clearTimeout(collOnTimerTimeout);
                                                    collOnTimerTimeout = setTimeout(function () {
                                                        container.classList.remove('visible');
                                                        if (typeof window.setAutoCloseWidget !== "undefined") {
                                                            window.setAutoCloseWidget(WidgetConfig.wid);
                                                        }
                                                    }, collOnTimerTime);
                                                }
                                                if (typeof window.initializeDefaultFocusOnCanvasLoadFunction !== "undefined") {
                                                    window.initializeDefaultFocusOnCanvasLoadFunction(modalZeddit);
                                                }
                                            }

                                            SendPopEvent(true, true);
                                        }
                                    }
                                }
                                try {
                                    if (window.timeIntervalCdTimer) {
                                        var w_id = WidgetConfig.wid;
                                        clearInterval(window.timeIntervalCdTimer[w_id]);
                                        window.initializeCountdownClockNew(WidgetContainer);
                                    }
                                }
                                catch (error) {
                                    if (window.ZITFunctions)
                                        window.ZITFunctions.sendRaygunData(error, 'timeIntervalCdTimer');
                                }
                            }
                            else {
                                writeDebug("Popup not show isClose:" + isClose + " disablePopup:" + disablePOPUp + " invalid:" + isInValid + " isDropoff:" + isDropoff);
                                SendPopEvent(false, false);
                            }
                        }
                    }
                    catch (error) {
                        if (window.ZITFunctions)
                            window.ZITFunctions.sendRaygunData(error, 'fnOpenPopup');
                        writeDebug("Popup not show because of error ");
                        SendPopEvent(false, false);
                    }
                }

                function fnSetIdleTimer(widget, idleTime) {
                    var t;
                    window.onload = resetTimer;
                    window.onmousemove = resetTimer;
                    window.onmousedown = resetTimer;  // catches touchscreen presses as well      
                    window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
                    window.ontouchmove = resetTimer;  // required by some devices 
                    window.onclick = resetTimer;      // catches touchpad clicks as well
                    window.onkeydown = resetTimer;
                    window.addEventListener('scroll', resetTimer, true); // improved; see comments
                    function yourFunction() {
                        fnOpenPopup(widget);
                    }
                    function resetTimer() {
                        clearTimeout(t);
                        t = setTimeout(yourFunction, idleTime);  // time is in milliseconds
                    }
                }

                if (WidgetConfig.layout == WidgetTypes.NEWPANEL && WidgetConfig.isAnimate && !WidgetConfig.isSlide) { //New Panel for Popup
                    try {
                        var lastScrollTopPopup = 0;
                        if (isMobile()) { // mobile
                            if (!WidgetConfig.popupAppearAtScrollPositionMobile) {
                                WidgetConfig.popupAppearAtScrollPositionMobile = "50,80";
                                writeDebug("Default value is used");
                            }
                            var startPositionPopup = parseInt(WidgetConfig.popupAppearAtScrollPositionMobile.split(',')[0], 10),
                                endPositionPopup = parseInt(WidgetConfig.popupAppearAtScrollPositionMobile.split(',')[1], 10);
                            writeDebug("Popup has been initialized for mobile " + WidgetConfig.popupShowOnMobile);
                            if (WidgetConfig.popupShowOnMobile == 1) { //Popup show on Load
                                var popupDelayTimeMobile = WidgetConfig.popupDelayTimeMobile === 0 ? 10 : (WidgetConfig.popupDelayTimeMobile * 1000);
                                window.ZITUtils.writeDebug("Delay time for Mobile " + popupDelayTimeMobile)
                                setTimeout(fnOpenPopup, popupDelayTimeMobile, WidgetConfig);
                            }
                            else if (WidgetConfig.popupShowOnMobile == 3) { //Popup show on Idel
                                var elements2 = WidgetContainer.getElementsByClassName("zit-widget-wrapper--new-panel");
                                var popupAttributeMobile = elements2[0].getAttribute("data-popIdleMobile");
                                window.ZITUtils.writeDebug("popup Attribute Mobile retrieved:" + popupAttributeMobile);
                                var popupIdleTimeMobile = (typeof popupAttributeMobile == "undefined") ? 10 * 1000 : popupAttributeMobile * 1000;
                                try {
                                    if ($ && $(document)) {
                                        $(document).idleTimer(popupIdleTimeMobile);
                                        $(document).bind("idle.idleTimer", function () {
                                            // function you want to fire when the user goes idle
                                            fnOpenPopup(WidgetConfig);
                                        });
                                    } else {
                                        fnSetIdleTimer(WidgetConfig, popupIdleTimeMobile);
                                    }
                                } catch (error) {
                                    fnSetIdleTimer(WidgetConfig, popupIdleTimeMobile);
                                }
                                SendPopEvent(false, false);
                            }
                            else if (WidgetConfig.popupShowOnMobile == 4) { //Popup show on Back button
                                window.addEventListener('popstate', onPopState);
                                SendPopEvent(false, false);
                            }
                            else if (WidgetConfig.popupShowOnMobile == 5) { //Popup show on Fast scroll
                                window.addEventListener("scroll", function () {
                                    if (checkScrollSpeed() < -150) {
                                        fnOpenPopup(WidgetConfig);
                                    }
                                }, false)
                            }
                            else if (WidgetConfig.popupShowOnMobile == 6) { //Popup show on scroll
                                window.addEventListener("scroll", function () {
                                    var percentInt = Math.ceil(getScrollPercent() / 10) * 10;
                                    if (percentInt >= startPositionPopup && percentInt <= endPositionPopup && percentInt >= lastScrollTopPopup) {
                                        fnOpenPopup(WidgetConfig);
                                    }
                                    lastScrollTopPopup = percentInt;
                                }, false)
                            }
                        }
                        else { // Desktop and Tablet
                            if (!WidgetConfig.popupAppearAtScrollPosition) {
                                WidgetConfig.popupAppearAtScrollPosition = "50,80";
                                writeDebug("Default value is used");
                            }
                            var startPositionPopup = parseInt(WidgetConfig.popupAppearAtScrollPosition.split(',')[0], 10),
                                endPositionPopup = parseInt(WidgetConfig.popupAppearAtScrollPosition.split(',')[1], 10);

                            writeDebug("Popup has been initialized for desktop " + WidgetConfig.popupShowOn);
                            if (WidgetConfig.popupShowOn == 1) { //Popup show on Load
                                var popupDelayTime = WidgetConfig.popupDelayTime === 0 ? 10 : (WidgetConfig.popupDelayTime * 1000);
                                window.ZITUtils.writeDebug("Delay time " + popupDelayTime)
                                setTimeout(fnOpenPopup, popupDelayTime, WidgetConfig);
                            }
                            else if (WidgetConfig.popupShowOn == 2) { //Popup show on Exit
                                var timer;
                                var mouseTarget = ZIT.DOM.findElementsBySelector(null, "html");
                                ZIT.DOM.bindEvent(mouseTarget[0], 'mouseleave', function (e) {
                                    timer = setTimeout(fnOpenPopup, 500, WidgetConfig);
                                });
                                ZIT.DOM.bindEvent(mouseTarget[0], 'mouseenter', function (e) {
                                    clearTimeout(timer)
                                });
                                SendPopEvent(false, false);
                                //$("html").mouseleave(function () {
                                //    timer = setTimeout(fnOpenPopup, 500, WidgetConfig);
                                //}).mouseenter(function () {
                                //    clearTimeout(timer);
                                //});
                            }
                            else if (WidgetConfig.popupShowOn == 3) { //Popup show on Idel
                                var elements = WidgetContainer.getElementsByClassName("zit-widget-wrapper--new-panel");
                                var popupAttribute = elements[0].getAttribute("data-popIdle");
                                window.ZITUtils.writeDebug("popup Attribute retrieved:" + popupAttribute);
                                var popupIdleTime = (typeof popupAttribute == "undefined") ? 10 * 1000 : popupAttribute * 1000;
                                try {
                                    if ($ && $(document)) {
                                        //$.idleTimer(10000);
                                        $(document).idleTimer(popupIdleTime);
                                        $(document).bind("idle.idleTimer", function () {
                                            fnOpenPopup(WidgetConfig);
                                        });
                                        window.ZITUtils.writeDebug("Bind with idle idleTimer " + popupIdleTime + " Method 1");
                                    } else {
                                        fnSetIdleTimer(WidgetConfig, popupIdleTime);
                                        window.ZITUtils.writeDebug("Bind with idle idleTimer " + popupIdleTime + " Method 2");
                                    }
                                } catch (error) {
                                    fnSetIdleTimer(WidgetConfig, popupIdleTime);
                                }
                                SendPopEvent(false, false);
                            }
                            else if (WidgetConfig.popupShowOn == 6) { //Popup show on scroll
                                window.addEventListener("scroll", function () {
                                    var percentInt = Math.ceil(getScrollPercent() / 10) * 10;
                                    if (percentInt >= startPositionPopup && percentInt <= endPositionPopup && percentInt >= lastScrollTopPopup) {
                                        fnOpenPopup(WidgetConfig);
                                    }
                                    lastScrollTopPopup = percentInt;
                                }, false)
                            }
                        }
                    }
                    catch (error) {
                        if (window.ZITFunctions)
                            window.ZITFunctions.sendRaygunData(error, 'anishoweventV2-' + config.key);
                    }

                    var $win = window;
                    //var mfp = $.magnificPopup;
                    var closeButton = ZIT.DOM.findElementsByClassName(WidgetContainer, 'animate-close');
                    for (var i = 0; closeButton.length > i; i++) {
                        if (typeof closeButton[i] != 'undefined' && closeButton[i]) {
                            writeDebug('Animation Close Button ' + i + ' attached ' + config.key);
                            ZIT.DOM.bindEvent(closeButton[i], 'click', function (e) {
                                try {
                                    var container = ZIT.DOM.findElementsByClassName(WidgetContainer, 'exit-intent-popup')[0]; //document.querySelector('.exit-intent-popup');
                                    if (container && container.classList) {
                                        container.classList.remove('visible');
                                        SendPopEvent(false, true);
                                        if (window.SubxLimitSlide)
                                            window.SubxPopupOpened--;
                                    }
                                    else {
                                        return;
                                    }
                                    changePubStyle();
                                    writeDebug("Disabled panel for the animate-close ");
                                    sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY, 1);
                                    var sessionStr = sessionStore(CLOSE_FLOATINGCOLUMN_SESSIONS) + ',' + WidgetConfig.wid;
                                    sessionStore(CLOSE_FLOATINGCOLUMN_SESSIONS, sessionStr);
                                    try {
                                        if (window.timeIntervalCdTimer) {
                                            var w_id = WidgetConfig.wid;
                                            clearInterval(window.timeIntervalCdTimer[w_id]);
                                        }
                                    }
                                    catch (error) {
                                        if (window.ZITFunctions)
                                            window.ZITFunctions.sendRaygunData(error, 'timeIntervalCdTimer');
                                    }
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    } else {
                                        e.returnValue = false;
                                    }
                                }
                                catch (error) {
                                    if (window.ZITFunctions)
                                        window.ZITFunctions.sendRaygunData(error, 'AniCloseEvent-' + config.key);
                                }
                            });
                        }
                    }
                }
                else if (WidgetConfig.layout == WidgetTypes.NEWPANEL && WidgetConfig.isAnimate && WidgetConfig.isSlide) { //New Panel for Slide
                    var $win = window;
                    var columnDiv = ZIT.DOM.findElementsByClassName(WidgetContainer, 'zit-widget-wrapper--new-panel')[0];
                    if (columnDiv !== undefined) {
                        var closeButton = ZIT.DOM.findElementsByClassName(WidgetContainer, 'animate-close');
                        var hideshowButton = ZIT.DOM.findElementsByClassName(WidgetContainer, 'animate-hide-show');
                        var hideshowIcon = ZIT.DOM.findElementsByClassName(WidgetContainer, 'i-collapse');
                        var hideshowIconImg = ZIT.DOM.findElementsByClassName(WidgetContainer, 'animate-hide-show-icon-img');
                        var expandCollapseButton = ZIT.DOM.findElementsByClassName(WidgetContainer, 'animate-expand-collapse-button');
                        var divZitSliderOverlay = ZIT.DOM.findElementsByClassName(WidgetContainer, 'zit-slider-overlay')[0];
                        var isSlideShowAtAnyScrollDepth = columnDiv && columnDiv.getAttribute("data-slideShowAtAnyScrollDepth");

                        var sequenceNode = WidgetContainer.querySelector('.zit-widget-wrapper--new-panel .sequence-canvas-content .widget-container-new-panel.sequence-canvas-section.step-main');
                        if (!sequenceNode)
                            sequenceNode = WidgetContainer.querySelector('.zit-widget-wrapper--new-panel');

                        var collOnTimerAttribute = sequenceNode && sequenceNode.getAttribute("data-collOnTimer");
                        var collOnTimerTimeout;

                        if (!WidgetConfig.appearAtScrollPosition) {
                            WidgetConfig.appearAtScrollPosition = "50,80";
                            writeDebug("Default value is used");
                        }
                        var startPosition = parseInt(config.appearAtScrollPosition.split(',')[0], 10),
                            startPosition = startPosition == 0 ? -1 : startPosition;
                        endPosition = parseInt(config.appearAtScrollPosition.split(',')[1], 10);
                        var isClose = (WidgetConfig.pid == 915) ? (sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY) || false) : false;

                        var isFirst = true;
                        var lastScrollTop = 0;

                        initializeShapEextendedToFullWidth(WidgetContainer);

                        var toggleCanvasHideOnTimer = function (mainNode, zitSliderOverlayNode) {
                            try {
                                ZIT.DOM.removeClass(mainNode, 'zit-widget-wrapper--new-panel-show');
                                if (zitSliderOverlayNode) ZIT.DOM.removeClass(zitSliderOverlayNode, 'zit-slider-overlay-show');
                                if (typeof window.setAutoCloseWidget !== "undefined") {
                                    window.setAutoCloseWidget(WidgetConfig.wid);
                                }
                            }
                            catch (error) {
                            }
                        };

                        var toggleColumn = function (e) {
                            var percentInt = Math.ceil(getScrollPercent() / 10) * 10;
                            var percentDec = getScrollPercent();
                            var isHide = sessionStore(HIDE_FLOATINGCOLUMN_SESSION_KEY) || false;
                            var isAutoClose = false;
                            if (typeof window.getAutoCloseWidget !== "undefined") {
                                isAutoClose = window.getAutoCloseWidget(WidgetConfig.wid);
                            }
                            if (isClose || isHide) {
                                writeDebug("The panel is closed or hidden. toggleColumn" + isClose + " " + isHide);
                                return;
                            }
                            else if (isAutoClose) {
                                writeDebug("The panel is auto closed or hidden on timer. toggleColumn " + isAutoClose);
                                return;
                            }

                            if (WidgetConfig.isSlideScrollUpHide) {
                                if (WidgetConfig.isShowTab && percentDec >= lastScrollTop) {
                                    //$(columnDiv).show();
                                    columnDiv.style.display = "block";
                                }
                                else if (!WidgetConfig.isShowTab) {
                                    //$(columnDiv).show();
                                    columnDiv.style.display = "block";
                                }
                                else {
                                    //$(columnDiv).hide();
                                    columnDiv.style.display = "none";
                                }
                            }

                            //if (WidgetConfig.pid == 916)
                            //    console.log(percentInt + " " + startPosition + " " + endPosition);
                            if ((percentInt >= startPosition && percentInt <= endPosition && WidgetConfig.isSlideScrollUpHide && percentDec >= lastScrollTop) ||
                                (percentInt >= startPosition && percentInt <= endPosition && !WidgetConfig.isSlideScrollUpHide)) {
                                if (!ZIT.DOM.hasClassName(columnDiv, 'zit-widget-wrapper--new-panel-show')) {
                                    //initializeShapEextendedToFullWidth(WidgetContainer);
                                    window.ZITFunctions.sendGAData(0, 'AutoOpenSlide', WidgetConfig.wid, 'Canvas', false);
                                    ZIT.DOM.addClass(columnDiv, 'zit-widget-wrapper--new-panel-show');
                                    if (divZitSliderOverlay) ZIT.DOM.addClass(divZitSliderOverlay, 'zit-slider-overlay-show');
                                }
                                if (isFirst) {
                                    for (var i = 0; hideshowIcon.length > i; i++) {
                                        if (typeof hideshowIcon[i] != 'undefined' && hideshowIcon[i]) {
                                            fn_setHideShowIcon(hideshowIcon[i]);
                                        }
                                    }

                                    for (var i = 0; hideshowIconImg.length > i; i++) {
                                        if (typeof hideshowIconImg[i] != 'undefined' && hideshowIconImg[i]) {
                                            fn_setHideShowIconImg(hideshowIconImg[i]);
                                        }
                                    }

                                    if (collOnTimerAttribute) {
                                        var collOnTimerTime = collOnTimerAttribute * 1000;
                                        clearTimeout(collOnTimerTimeout);
                                        collOnTimerTimeout = setTimeout(function () { toggleCanvasHideOnTimer(columnDiv, divZitSliderOverlay) }, collOnTimerTime);
                                    }
                                    if (typeof window.initializeDefaultFocusOnCanvasLoadFunction !== "undefined") {
                                        window.initializeDefaultFocusOnCanvasLoadFunction(columnDiv);
                                    }

                                    if (isSlideShowAtAnyScrollDepth && isSlideShowAtAnyScrollDepth.toLowerCase() === 'true') {
                                        $win.removeEventListener('scroll', toggleColumn, false);
                                        $win.addEventListener('scroll', toggleTrackingOnly, false);
                                    }

                                    isFirst = false;
                                }

                            } else {
                                //initializeShapEextendedToFullWidth(WidgetContainer);
                                ZIT.DOM.removeClass(columnDiv, 'zit-widget-wrapper--new-panel-show');
                                if (divZitSliderOverlay) ZIT.DOM.removeClass(divZitSliderOverlay, 'zit-slider-overlay-show');

                                if (!isFirst) {
                                    for (var i = 0; hideshowIcon.length > i; i++) {
                                        if (typeof hideshowIcon[i] != 'undefined' && hideshowIcon[i]) {
                                            fn_setHideShowIcon(hideshowIcon[i]);
                                        }
                                    }

                                    for (var i = 0; hideshowIconImg.length > i; i++) {
                                        if (typeof hideshowIconImg[i] != 'undefined' && hideshowIconImg[i]) {
                                            fn_setHideShowIconImg(hideshowIconImg[i]);
                                        }
                                    }
                                    isFirst = true;

                                    if (WidgetConfig.animateFrequency == 1 && WidgetConfig.isShowTab) {
                                        if (isFirst) {
                                            sessionStore(HIDE_FLOATINGCOLUMN_SESSION_KEY, WidgetConfig.animateFrequency == 2 ? 0 : 1);
                                            $win.removeEventListener('scroll', toggleColumn, false);
                                            $win.addEventListener('scroll', toggleTrackingOnly, false);
                                        }
                                    }
                                }

                                //IFrameHelper.hideThumbnail();
                                //if (WidgetConfig.isShowTab) {
                                //    if (isFirst) {
                                //        $win.removeEventListener('scroll', toggleColumn, false);
                                //        $win.addEventListener('scroll', toggleTrackingOnly, false);
                                //    }
                                //}
                            }
                            lastScrollTop = percentDec;
                        };

                        var toggleTrackingOnly = function (e) {
                            var percentDec = getScrollPercent();// Math.ceil(getScrollPercent() / 10) * 10;
                            var isHide = sessionStore(HIDE_FLOATINGCOLUMN_SESSION_KEY) || false;
                            if (isClose || isHide) {
                                writeDebug("The panel is closed or hidden. toggleTrackingOnly " + isClose + " " + isHide);
                                return;
                            }

                            if (WidgetConfig.isSlideScrollUpHide) {
                                if (WidgetConfig.isShowTab && percentDec >= lastScrollTop) {
                                    //$(columnDiv).show();
                                    columnDiv.style.display = "block";
                                }
                                else if (!WidgetConfig.isShowTab) {
                                    //$(columnDiv).show();
                                    columnDiv.style.display = "block";
                                }
                                else {
                                    //$(columnDiv).hide();
                                    columnDiv.style.display = "none";
                                }
                            }
                            lastScrollTop = percentDec;
                        };

                        var toggleOpenTimer = function (e) {
                            //initializeShapEextendedToFullWidth(WidgetContainer);
                            var isHide = sessionStore(HIDE_FLOATINGCOLUMN_SESSION_KEY) || false;
                            if (isClose || isHide) {
                                writeDebug("The panel is closed or hidden.toggleOpenTimer " + isClose + " " + isHide);
                                return;
                            }
                            if (!ZIT.DOM.hasClassName(columnDiv, 'zit-widget-wrapper--new-panel-show')) {
                                window.ZITFunctions.sendGAData(0, 'AutoOpenSlide', WidgetConfig.wid, 'Canvas', false);
                                ZIT.DOM.addClass(columnDiv, 'zit-widget-wrapper--new-panel-show');
                                if (divZitSliderOverlay) ZIT.DOM.addClass(divZitSliderOverlay, 'zit-slider-overlay-show');
                            }
                            for (var i = 0; hideshowIcon.length > i; i++) {
                                if (typeof hideshowIcon[i] != 'undefined' && hideshowIcon[i]) {
                                    fn_setHideShowIcon(hideshowIcon[i]);
                                }
                            }
                            for (var i = 0; hideshowIconImg.length > i; i++) {
                                if (typeof hideshowIconImg[i] != 'undefined' && hideshowIconImg[i]) {
                                    fn_setHideShowIconImg(hideshowIconImg[i]);
                                }
                            }
                            if (WidgetConfig.animateFrequency == 1 && WidgetConfig.isShowTab) {
                                sessionStore(HIDE_FLOATINGCOLUMN_SESSION_KEY, WidgetConfig.animateFrequency == 2 ? 0 : 1);
                            }

                            if (collOnTimerAttribute) {
                                collOnTimerTime = collOnTimerAttribute * 1000;
                                clearTimeout(collOnTimerTimeout);
                                collOnTimerTimeout = setTimeout(function () { toggleCanvasHideOnTimer(columnDiv, divZitSliderOverlay) }, collOnTimerTime);
                            }
                            if (typeof window.initializeDefaultFocusOnCanvasLoadFunction !== "undefined") {
                                window.initializeDefaultFocusOnCanvasLoadFunction(columnDiv);
                            }
                        };

                        var toggleTimer = function (e) {
                            var isHide = sessionStore(HIDE_FLOATINGCOLUMN_SESSION_KEY) || false;
                            //if (isClose || isHide) {
                            if (isClose) {
                                writeDebug("The panel is closed or hidden. toggleTimer" + isClose + " " + isHide);
                                return;
                            }
                            //$(columnDiv).show();
                            columnDiv.style.display = "block";
                            if (WidgetConfig.scrollStatus === 2) { //** Inactive Auto open
                                //toggleOpenTimer();
                            }
                            else { //** Active Auto open
                                var time = 1000;
                                if (WidgetConfig.deviceForScrollStatus === 1) { //** Both Device
                                    setTimeout(toggleOpenTimer, time);
                                }
                                else if (WidgetConfig.deviceForScrollStatus === 2) { //** Desktop Device
                                    if (!isMobile()) {
                                        setTimeout(toggleOpenTimer, time);
                                    }
                                }
                                else if (WidgetConfig.deviceForScrollStatus === 3) { //** Mobile & Tablet Device
                                    if (isMobile()) {
                                        setTimeout(toggleOpenTimer, time);
                                    }
                                }
                            }
                        };

                        var toggleCanvasCollapseOnScroll = function (mainNode, collOnScrollAttribute) {
                            try {
                                scrollpos = window.scrollY;
                                if (scrollpos > collOnScrollAttribute) {
                                    var timerExpCol;
                                    var expColNode = mainNode.querySelector(".expand-collapse-canvas-content");
                                    var expNode = mainNode.querySelector(".expanded-canvas-section");
                                    var colNode = mainNode.querySelector(".collapsed-canvas-section");
                                    var height = colNode.getAttribute("data-height");
                                    var w_id = WidgetConfig.wid;

                                    expNode.style.height = 0;
                                    colNode.style.height = height + 'px';

                                    expNode.style.opacity = "0";
                                    colNode.style.opacity = "1";

                                    expColNode.style.height = height + 'px';
                                    expColNode.classList.add('collapsed-canvas');
                                    expColNode.classList.remove('expanded-canvas');

                                    clearTimeout(timerExpCol);
                                    timerExpCol = setTimeout(function () {
                                        mainNode.closest(".zit-widget-wrapper--new-panel").style.backgroundImage = "var(--bg-img-collapse-wid-" + w_id + ")";
                                    }, 500);
                                }
                            }
                            catch (error) {
                            }
                        };

                        var elementsZIT = WidgetContainer.querySelector(".zit-widget-wrapper--new-panel");
                        var collOnScrollAttribute = elementsZIT.getAttribute("data-collOnScroll");
                        if (collOnScrollAttribute) {
                            $win.addEventListener('scroll', function () {
                                toggleCanvasCollapseOnScroll(elementsZIT, parseInt(collOnScrollAttribute));
                            })
                        }

                        var isOverlayEffectOnLoad = divZitSliderOverlay && divZitSliderOverlay.getAttribute("data-isOverlayShowOnLoad");
                        if (typeof isOverlayEffectOnLoad != "undefined" && isOverlayEffectOnLoad == "True") {
                            if (!ZIT.DOM.hasClassName(columnDiv, 'zit-widget-wrapper--new-panel-show')) {
                                ZIT.DOM.addClass(columnDiv, 'zit-widget-wrapper--new-panel-show');
                                //if (divZitSliderOverlay) ZIT.DOM.addClass(divZitSliderOverlay, 'zit-slider-overlay-show');

                                if (collOnTimerAttribute) {
                                    collOnTimerTime = collOnTimerAttribute * 1000;
                                    clearTimeout(collOnTimerTimeout);
                                    collOnTimerTimeout = setTimeout(function () { toggleCanvasHideOnTimer(columnDiv, divZitSliderOverlay) }, collOnTimerTime);
                                }
                                if (typeof window.initializeDefaultFocusOnCanvasLoadFunction !== "undefined") {
                                    window.initializeDefaultFocusOnCanvasLoadFunction(columnDiv);
                                }
                            }
                        }
                        else {
                            if (WidgetConfig.slideShowOn === 2) {  //** slide Show on Timer

                                var time = (WidgetConfig.slideTimerTime * 1000);
                                if (WidgetConfig.isShowTab) {
                                    //$(columnDiv).hide();
                                    columnDiv.style.display = "none";
                                    setTimeout(toggleTimer, time);
                                }
                                else {
                                    setTimeout(toggleOpenTimer, time);
                                }
                            }
                            else { //** slide Show on Scroll
                                var isSlideShowOnPageLoad = columnDiv.getAttribute("data-isSlideonPageLoad");
                                window.ZITUtils.writeDebug("Slide PageLoad attribute retrieved:" + isSlideShowOnPageLoad);
                                if (typeof isSlideShowOnPageLoad != "undefined" && isSlideShowOnPageLoad == "True") {
                                    /*columnDiv.style.display = "block";*/
                                    if (!ZIT.DOM.hasClassName(columnDiv, 'zit-widget-wrapper--new-panel-show')) {
                                        //initializeShapEextendedToFullWidth(WidgetContainer);
                                        window.ZITFunctions.sendGAData(0, 'AutoOpenSlide', WidgetConfig.wid, 'Canvas', false);
                                        ZIT.DOM.addClass(columnDiv, 'zit-widget-wrapper--new-panel-show');
                                        if (divZitSliderOverlay) ZIT.DOM.addClass(divZitSliderOverlay, 'zit-slider-overlay-show');
                                    }
                                    if (isFirst) {
                                        for (var i = 0; hideshowIcon.length > i; i++) {
                                            if (typeof hideshowIcon[i] != 'undefined' && hideshowIcon[i]) {
                                                fn_setHideShowIcon(hideshowIcon[i]);
                                            }
                                        }

                                        for (var i = 0; hideshowIconImg.length > i; i++) {
                                            if (typeof hideshowIconImg[i] != 'undefined' && hideshowIconImg[i]) {
                                                fn_setHideShowIconImg(hideshowIconImg[i]);
                                            }
                                        }
                                        isFirst = false;
                                    }

                                    if (collOnTimerAttribute) {
                                        collOnTimerTime = collOnTimerAttribute * 1000;
                                        clearTimeout(collOnTimerTimeout);
                                        collOnTimerTimeout = setTimeout(function () { toggleCanvasHideOnTimer(columnDiv, divZitSliderOverlay) }, collOnTimerTime);
                                    }
                                    if (typeof window.initializeDefaultFocusOnCanvasLoadFunction !== "undefined") {
                                        window.initializeDefaultFocusOnCanvasLoadFunction(columnDiv);
                                    }
                                }

                                if (WidgetConfig.isShowTab) {
                                    if (WidgetConfig.scrollStatus === 2) { //** Inactive Scroll
                                        if ($win.addEventListener) {
                                            $win.addEventListener('scroll', toggleTrackingOnly, false);
                                        } else {
                                            $win.attachEvent("scroll", toggleTrackingOnly);
                                        }
                                    }
                                    else { //** Active Scroll
                                        if (WidgetConfig.deviceForScrollStatus === 1) { //** Both Device
                                            if ($win.addEventListener) {
                                                $win.addEventListener('scroll', toggleColumn, false);
                                            } else {
                                                $win.attachEvent("scroll", toggleColumn);
                                            }
                                        }
                                        else if (WidgetConfig.deviceForScrollStatus === 2) { //** Desktop Device
                                            if (!isMobile()) {
                                                if ($win.addEventListener) {
                                                    $win.addEventListener('scroll', toggleColumn, false);
                                                } else {
                                                    $win.attachEvent("scroll", toggleColumn);
                                                }
                                            }
                                            else {
                                                if ($win.addEventListener) {
                                                    $win.addEventListener('scroll', toggleTrackingOnly, false);
                                                } else {
                                                    $win.attachEvent("scroll", toggleTrackingOnly);
                                                }
                                            }
                                        }
                                        else if (WidgetConfig.deviceForScrollStatus === 3) { //** Mobile & Tablet Device
                                            if (isMobile()) {
                                                if ($win.addEventListener) {
                                                    $win.addEventListener('scroll', toggleColumn, false);
                                                } else {
                                                    $win.attachEvent("scroll", toggleColumn);
                                                }
                                            }
                                            else {
                                                if ($win.addEventListener) {
                                                    $win.addEventListener('scroll', toggleTrackingOnly, false);
                                                } else {
                                                    $win.attachEvent("scroll", toggleTrackingOnly);
                                                }
                                            }
                                        }
                                    }
                                }
                                else {
                                    if ($win.addEventListener) {
                                        $win.addEventListener('scroll', toggleColumn, false);
                                    } else {
                                        $win.attachEvent("scroll", toggleColumn);
                                    }
                                }
                            }
                        }

                        for (var i = 0; closeButton.length > i; i++) {
                            if (typeof closeButton[i] != 'undefined' && closeButton[i]) {
                                if (!WidgetConfig.isAnimate || WidgetConfig.isSlide) {
                                    writeDebug('Close Button ' + i + ' initialized ' + config.key);
                                    ZIT.DOM.bindEvent(closeButton[i], 'click', function (e) {
                                        try {
                                            writeDebug('Close Button Clicked ' + config.key);
                                            isClose = true;
                                            window.ZITFunctions.sendGAData(0, 'CloseSlide', WidgetConfig.wid, 'Canvas', false);
                                            ZIT.DOM.removeClass(columnDiv, 'zit-widget-wrapper--new-panel-show');
                                            if (divZitSliderOverlay) ZIT.DOM.removeClass(divZitSliderOverlay, 'zit-slider-overlay-show');

                                            //$(columnDiv).hide();
                                            columnDiv.style.display = "none";
                                            //IFrameHelper.hideThumbnail();
                                            changePubStyle();
                                            writeDebug("Disabled panel for the column close");
                                            if (WidgetConfig.isActivateX) {
                                                if (WidgetConfig.activateX_AnimType === 1) {

                                                    var existingObject = readCookie('_sxo');
                                                    if (existingObject) {
                                                        var trackingDataNew = JSON.parse(existingObject);
                                                        trackingDataNew["isSlideClose"] = 1;

                                                        if (trackingDataNew.firstClickX === 0 || trackingDataNew.firstClickX === undefined) {
                                                            trackingDataNew["firstClickX"] = 1;
                                                            createCookieinDetails(CLOSE_SLIDE_WIDGET_COOKIE_KEY, 1, 0, 0, WidgetConfig.activateX_MaxMinutes, 0);
                                                        }
                                                        else if (trackingDataNew.firstClickX === 1) {
                                                            trackingDataNew["firstClickX"] = 2;
                                                            createCookieinDetails(CLOSE_SLIDE_WIDGET_COOKIE_KEY, 1, 0, 0, WidgetConfig.activateX_SecondClick_MaxMinutes, 0);
                                                        }
                                                        else if (trackingDataNew.firstClickX === 2) {
                                                            trackingDataNew["firstClickX"] = 0;
                                                            createCookieinDetails(CLOSE_SLIDE_WIDGET_COOKIE_KEY, 1, 0, 0, WidgetConfig.activateX_ThirdClick_MaxMinutes, 0);
                                                        }
                                                        createCookieinDetails('_sxo', JSON.stringify(trackingDataNew), 365, 0, 0, 0);
                                                    }
                                                }
                                                else {
                                                    sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY, 1);
                                                }
                                            }
                                            else if (WidgetConfig.isActivateXAlternate) {
                                                var existingObject = readCookie('_sxo');
                                                if (existingObject) {
                                                    var trackingDataNew = JSON.parse(existingObject);
                                                    trackingDataNew["isSlideCloseAlt"] = 1;
                                                    createCookieinDetails('_sxo', JSON.stringify(trackingDataNew), 365, 0, 0, 0);
                                                    sessionStore(CLOSE_SLIDE_WIDGET_SESSION_KEY, 1);
                                                }
                                            }
                                            else {
                                                sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY, 1);
                                                var sessionStr = sessionStore(CLOSE_FLOATINGCOLUMN_SESSIONS) + ',' + WidgetConfig.wid;
                                                sessionStore(CLOSE_FLOATINGCOLUMN_SESSIONS, sessionStr);
                                                var $caller;
                                                //if ($(e)[0].target.id === "hide-show-close-img") {
                                                //    $caller = $(e)[0].target.parentNode.parentNode.parentNode;
                                                //} else {
                                                //    $caller = $(e)[0].target.parentNode.parentNode;
                                                //}
                                                if (e.target.id === "hide-show-close-img") {
                                                    $caller = e.target.parentNode.parentNode.parentNode;
                                                } else {
                                                    $caller = e.target.parentNode.parentNode;
                                                }
                                                var canvasType = $caller.attributes['data-canvastype'] == undefined ? '' : $caller.attributes['data-canvastype'].nodeValue;
                                                createCookieinDetails(CLOSE_SLIDE_WIDGET_TYPE_SESSION_KEY, canvasType, 0, 0, 20, 0);
                                            }

                                            if (e && e.target && e.target.parentNode && e.target.parentNode.parentNode &&
                                                WidgetConfig.isAnimate && WidgetConfig.isSlide) {
                                                var $caller;
                                                if (e.target.id === "hide-show-close-img") {
                                                    $caller = e.target.parentNode.parentNode.parentNode;
                                                } else {
                                                    $caller = e.target.parentNode.parentNode;
                                                }
                                                var canvasType = $caller.attributes['data-canvastype'] == undefined ? '' : $caller.attributes['data-canvastype'].nodeValue;
                                                createCookieinDetails(CLOSE_SLIDE_WIDGET_TYPE_COOKIE_KEY, canvasType, 365, 0, 0, 0);
                                            }
                                            try {
                                                if (window.timeIntervalCdTimer) {
                                                    var w_id = WidgetConfig.wid;
                                                    clearInterval(window.timeIntervalCdTimer[w_id]);
                                                }
                                            }
                                            catch (error) {
                                                if (window.ZITFunctions)
                                                    window.ZITFunctions.sendRaygunData(error, 'timeIntervalCdTimer');
                                            }
                                            if (e.preventDefault) {
                                                e.preventDefault();
                                            } else {
                                                e.returnValue = false;
                                            }
                                        }
                                        catch (error) {
                                            if (window.ZITFunctions)
                                                window.ZITFunctions.sendRaygunData(error, 'ColCloseEvent-Slide-' + config.key);
                                        }
                                    });
                                }
                            }
                        }

                        for (var i = 0; hideshowButton.length > i; i++) {
                            if (typeof hideshowButton[i] != 'undefined' && hideshowButton[i]) {
                                writeDebug('Hide Show Button ' + i + ' Initialized ' + config.key);
                                ZIT.DOM.bindEvent(hideshowButton[i], 'click', function (e) {
                                    try {
                                        writeDebug('Hide Show Button Clicked ' + config.key);
                                        //isClose = true;
                                        if (!ZIT.DOM.hasClassName(columnDiv, 'zit-widget-wrapper--new-panel-show'))
                                            window.ZITFunctions.sendGAData(0, 'OpenSlide', WidgetConfig.wid, 'Canvas', false);
                                        columnDiv.classList.toggle("zit-widget-wrapper--new-panel-show");
                                        //$(columnDiv).toggleClass('zit-widget-wrapper--new-panel-show');
                                        for (var i = 0; hideshowIcon.length > i; i++) {
                                            if (typeof hideshowIcon[i] != 'undefined' && hideshowIcon[i]) {
                                                if (hideshowIcon[i].className.includes("fa-chevron-up") || hideshowIcon[i].className.includes("fa-chevron-down")) {
                                                    //$(hideshowIcon[i]).toggleClass('fa-chevron-down');
                                                    //$(hideshowIcon[i]).toggleClass('fa-chevron-up');
                                                    hideshowIcon[i].classList.toggle('fa-chevron-down');
                                                    hideshowIcon[i].classList.toggle('fa-chevron-up');
                                                }
                                                else if (hideshowIcon[i].className.includes("fa-chevron-left") || hideshowIcon[i].className.includes("fa-chevron-right")) {
                                                    //$(hideshowIcon[i]).toggleClass('fa-chevron-left');
                                                    //$(hideshowIcon[i]).toggleClass('fa-chevron-right');
                                                    hideshowIcon[i].classList.toggle('fa-chevron-left');
                                                    hideshowIcon[i].classList.toggle('fa-chevron-right');
                                                }
                                            }
                                        }

                                        for (var i = 0; hideshowIconImg.length > i; i++) {
                                            if (typeof hideshowIconImg[i] != 'undefined' && hideshowIconImg[i]) {
                                                fn_setHideShowIconImg(hideshowIconImg[i]);
                                            }
                                        }

                                        actionTracking(100);
                                        //IFrameHelper.hideThumbnail();
                                        if (WidgetConfig.isShowTab && WidgetConfig.animateFrequency != 2) {
                                            sessionStore(HIDE_FLOATINGCOLUMN_SESSION_KEY, 1);
                                        }
                                        if (e.preventDefault) {
                                            e.preventDefault();
                                        } else {
                                            e.returnValue = false;
                                        }
                                    }
                                    catch (error) {
                                        writeDebug(error);
                                        if (window.ZITFunctions)
                                            window.ZITFunctions.sendRaygunData(error, 'HideShowCloseEvent-' + config.key);
                                    }
                                });
                            }
                        }

                        for (var i = 0; expandCollapseButton.length > i; i++) {
                            if (typeof expandCollapseButton[i] != 'undefined' && expandCollapseButton[i]) {
                                writeDebug('Hide Show Button ' + i + ' Initialized ' + config.key);
                                var timerExpCol;
                                ZIT.DOM.bindEvent(expandCollapseButton[i], 'click', function (e) {
                                    try {
                                        writeDebug('Expand Collapse Button Clicked ' + config.key);
                                        var btnNode = this;
                                        var btnPrtNode = $(btnNode).closest('.widget-container-new-panel');
                                        var btnPrtPrtNode = $(btnNode).closest('.expand-collapse-canvas-content');

                                        var height = btnPrtNode.siblings().attr('data-height');
                                        var w_id = WidgetConfig.wid;

                                        btnPrtNode.height(0);
                                        btnPrtNode.siblings().height(height);
                                        btnPrtNode.css({ 'opacity': 0 });
                                        btnPrtNode.siblings().css({ 'opacity': 1 });

                                        if (btnPrtNode.attr('data-expandable-type') === 'collapse') {
                                            btnPrtPrtNode.height(height);
                                            btnPrtPrtNode.addClass('expanded-canvas');
                                            btnPrtPrtNode.removeClass('collapsed-canvas');

                                            btnNode.closest(".zit-widget-wrapper--new-panel").style.backgroundImage = "var(--bg-img-expand-wid-" + w_id + ")";
                                            window.ZITFunctions.sendGAData(0, 'OpenSlide', w_id, 'Placement', false);
                                        }

                                        if (btnPrtNode.attr('data-expandable-type') === 'expand') {
                                            btnPrtPrtNode.height(height);
                                            btnPrtPrtNode.addClass('collapsed-canvas');
                                            btnPrtPrtNode.removeClass('expanded-canvas');

                                            //this.closest(".zit-widget-wrapper--new-panel").style.backgroundImage = "var(--bg-img-collapse-wid-" + w_id + ")";
                                            clearTimeout(timerExpCol);
                                            timerExpCol = setTimeout(function () {
                                                btnNode.closest(".zit-widget-wrapper--new-panel").style.backgroundImage = "var(--bg-img-collapse-wid-" + w_id + ")";
                                            }, 500);
                                            window.ZITFunctions.sendGAData(0, 'CloseModel', w_id, 'Placement', false);
                                        }

                                        if (e.preventDefault) {
                                            e.preventDefault();
                                        } else {
                                            e.returnValue = false;
                                        }
                                    }
                                    catch (error) {
                                        writeDebug(error);
                                        if (window.ZITFunctions)
                                            window.ZITFunctions.sendRaygunData(error, 'ExpandCollapseEvent-' + config.key);
                                    }
                                });
                            }
                        }
                    }
                }
                else if (WidgetConfig.layout == WidgetTypes.NEWPANEL) { //New Panel for Fixed
                    var $win = window;
                    initializeShapEextendedToFullWidth(WidgetContainer);

                    var columnDiv = ZIT.DOM.findElementsByClassName(WidgetContainer, 'zit-widget-wrapper--new-panel')[0];
                    if (columnDiv !== undefined) {

                        var sequenceNode = WidgetContainer.querySelector('.zit-widget-wrapper--new-panel .sequence-canvas-content .widget-container-new-panel.sequence-canvas-section.step-main');
                        if (!sequenceNode)
                            sequenceNode = WidgetContainer.querySelector('.zit-widget-wrapper--new-panel');

                        var collOnTimerAttribute = sequenceNode && sequenceNode.getAttribute("data-collOnTimer");
                        var collOnTimerTimeout;
                        if (collOnTimerAttribute) {
                            var collOnTimerTime = collOnTimerAttribute * 1000;
                            clearTimeout(collOnTimerTimeout);
                            collOnTimerTimeout = setTimeout(function () {
                                columnDiv.style.display = "none";
                            }, collOnTimerTime);
                        }
                        if (typeof window.initializeDefaultFocusOnCanvasLoadFunction !== "undefined") {
                            window.initializeDefaultFocusOnCanvasLoadFunction(columnDiv);
                        }

                        var closeButton = ZIT.DOM.findElementsByClassName(WidgetContainer, 'animate-close');
                        var isClose;

                        for (var i = 0; closeButton.length > i; i++) {
                            if (typeof closeButton[i] != 'undefined' && closeButton[i]) {
                                if (!WidgetConfig.isAnimate || WidgetConfig.isSlide) {
                                    writeDebug('Close Button ' + i + ' initialized ' + config.key);
                                    ZIT.DOM.bindEvent(closeButton[i], 'click', function (e) {
                                        try {
                                            writeDebug('Close Button Clicked ' + config.key);
                                            isClose = true;
                                            window.ZITFunctions.sendGAData(0, 'CloseSlide', WidgetConfig.wid, 'Canvas', false);
                                            ZIT.DOM.removeClass(columnDiv, 'zit-widget-wrapper--new-panel-show');
                                            if (divZitSliderOverlay) ZIT.DOM.removeClass(divZitSliderOverlay, 'zit-slider-overlay-show');

                                            //$(columnDiv).hide();
                                            columnDiv.style.display = "none";
                                            //IFrameHelper.hideThumbnail();
                                            changePubStyle();
                                            writeDebug("Disabled fixed panel for the column close");

                                            sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY, 1);
                                            var sessionStr = sessionStore(CLOSE_FLOATINGCOLUMN_SESSIONS) + ',' + WidgetConfig.wid;
                                            sessionStore(CLOSE_FLOATINGCOLUMN_SESSIONS, sessionStr);
                                            try {
                                                if (window.timeIntervalCdTimer) {
                                                    var w_id = WidgetConfig.wid;
                                                    clearInterval(window.timeIntervalCdTimer[w_id]);
                                                }
                                            }
                                            catch (error) {
                                                if (window.ZITFunctions)
                                                    window.ZITFunctions.sendRaygunData(error, 'timeIntervalCdTimer');
                                            }
                                            if (e.preventDefault) {
                                                e.preventDefault();
                                            } else {
                                                e.returnValue = false;
                                            }
                                        }
                                        catch (error) {
                                            if (window.ZITFunctions)
                                                window.ZITFunctions.sendRaygunData(error, 'ColCloseEvent-Fixed-' + config.key);
                                        }
                                    });
                                }
                            }
                        }
                    }
                }

                callback();

                function fn_setHideShowIcon(hideshowIcon) {
                    if (typeof hideshowIcon != 'undefined' && hideshowIcon) {
                        if (hideshowIcon.className.includes("fa-chevron-up")) {
                            ZIT.DOM.addClass(hideshowIcon, 'fa-chevron-down');
                            ZIT.DOM.removeClass(hideshowIcon, 'fa-chevron-up');
                        }
                        else if (hideshowIcon.className.includes("fa-chevron-down")) {
                            ZIT.DOM.addClass(hideshowIcon, 'fa-chevron-up');
                            ZIT.DOM.removeClass(hideshowIcon, 'fa-chevron-down');
                        }
                        else if (hideshowIcon.className.includes("fa-chevron-left")) {
                            ZIT.DOM.addClass(hideshowIcon, 'fa-chevron-right');
                            ZIT.DOM.removeClass(hideshowIcon, 'fa-chevron-left');
                        }
                        else if (hideshowIcon.className.includes("fa-chevron-right")) {
                            ZIT.DOM.addClass(hideshowIcon, 'fa-chevron-left');
                            ZIT.DOM.removeClass(hideshowIcon, 'fa-chevron-right');
                        }
                    }
                }

                function fn_setHideShowIconImg(hideshowIconImg) {
                    if (typeof hideshowIconImg != 'undefined' && hideshowIconImg) {
                        var rotate = hideshowIconImg.dataset.rotate;
                        var angle = hideshowIconImg.dataset.angle;
                        rotate = parseFloat(rotate) + (rotate === angle ? 180 : 0);
                        hideshowIconImg.dataset.angle = rotate;
                        //$(hideshowIconImg).css("transform", "rotate(" + rotate + "deg)");
                        hideshowIconImg.style.transform = "rotate(" + rotate + "deg)";
                    }
                }
            }
            catch (error) {
                if (window.ZITFunctions)
                    window.ZITFunctions.sendRaygunData(error, 'processHtmlData');
            }
        }

        self.init = function (isNew) {
            if (WidgetConfig.animateFrequency == 2 || !WidgetConfig.isShowTab) {
                sessionStore(HIDE_FLOATINGCOLUMN_SESSION_KEY, 0)
            }
            var isClose = sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY) || 0;

            var closeCanvasType = readCookie(CLOSE_SLIDE_WIDGET_TYPE_COOKIE_KEY) || '';
            if (WidgetConfig.isAnimate && WidgetConfig.isSlide && isClose == 1 && closeCanvasType === WidgetConfig.canvasType) {
                changePubStyle();
                writeDebug("widget has already been closed:" + CLOSE_SLIDE_WIDGET_TYPE_COOKIE_KEY + " " + isClose + " " + closeCanvasType);
                return;
            }
            else if (WidgetConfig.isAnimate && !WidgetConfig.isSlide && isClose == 1) {
                changePubStyle();
                SendPopEvent(false, false);
                writeDebug("widget has already been closed:" + CLOSE_FLOATINGCOLUMN_SESSION_KEY);
                return;
            }
            else if (!WidgetConfig.isAnimate && isClose == 1) {
                changePubStyle();
                writeDebug("widget " + wid + " has already been closed: " + CLOSE_FLOATINGCOLUMN_SESSION_KEY);
                return;
            }
            else
                writeDebug("going to initialize " + isNew + " " + CLOSE_SLIDE_WIDGET_TYPE_COOKIE_KEY + " " + CLOSE_FLOATINGCOLUMN_SESSION_KEY + " " + sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY) + " " + WidgetConfig.key);
            //sessionStore(CLOSE_FLOATINGCOLUMN_POPUP_SESSION_KEY, 0);
            mainContainerRect = WidgetContainer.getBoundingClientRect();
            WidgetConfig.brandUrl = WidgetContainer.getAttribute('data-brandurl');
            WidgetContainer.setAttribute('id', WidgetConfig.key);
            if (!ZIT.DOM.hasClassName(WidgetContainer, 'loaded') || isNew) {
                if (window.ZITFunctions && window.ZITFunctions.dataLayer && window.ZITFunctions.dataLayer == 1) {
                    window.ZITFunctions.sendDataLayer("subx-impression", WidgetConfig.wid, WidgetConfig.widgetName);
                    if (WidgetConfig.canvasType != 'display') {
                        window.ZITFunctions.setCanvas(1);
                        window.ZITFunctions.sendtoBlueConic("subx-impression");
                        writeDebug(" Widget Type " + WidgetConfig.canvasType);
                    }
                    else
                        window.ZITFunctions.setCanvas(0);
                }
                else
                    writeDebug("Data Layer not enabled don't send Data events");
                isShowThumbnail = (WidgetConfig.showThumbnail && !isMobile());
                //if (WidgetConfig.isDisplayWidget) {
                //    self.processDisplayWidgetHtmlData();
                //} else {
                self.processHtmlData(function () {
                    ZIT.DOM.addClass(WidgetContainer, 'loaded');
                    //}
                    //Pre-load iframe after page loaded brandUrl + 
                    if (ISLOCAL) {
                        brandUrl = '';
                    }
                    ///////////////////Data need to be sent after processing HTML //////////////////
                    //window.initializeTogglePassword(WidgetContainer);
                    if (typeof window.initializeCanvasMethods != "undefined") {
                        if (WidgetConfig.layout == WidgetTypes.NEWPANEL && ((WidgetConfig.isAnimate && WidgetConfig.isSlide) || !WidgetConfig.isAnimate)) {
                            window.initializeCanvasMethods(WidgetContainer);
                        } else {
                            window.initializeCanvasMethods(WidgetContainer, 'popup');
                        }
                    }
                    if (WidgetConfig.widgetType == 'canvas-email' || WidgetConfig.widgetType == 'canvas-hybrid' || WidgetConfig.widgetType == 'canvas-display') {
                        (function ($) {
                            if (window.LoadCanvasFormValidate) {
                                if ($.validator) {
                                    console.log("validator has been loaded 1");
                                    window.LoadCanvasFormValidate(WidgetConfig.isReCaptchaOn, WidgetConfig.reCaptchaSiteKey, WidgetConfig.reCaptchaSecretKey);
                                }
                                else {
                                    console.log("validator has not been loaded, wait for 3 seconds 1");
                                    setTimeout(window.LoadCanvasFormValidate(WidgetConfig.isReCaptchaOn, WidgetConfig.reCaptchaSiteKey, WidgetConfig.reCaptchaSecretKey), 3000);
                                }
                            }
                        })(jQuery);
                    }
                    else {
                        writeDebug("Ignore canvas Type " + WidgetConfig.widgetType);
                    }
                    //if (!WidgetConfig.isAnimate) { //Removed because animate canvas also needs the event
                    var elements = WidgetContainer.getElementsByClassName("zit-widget-wrapper--new-panel");
                    if (elements != null && elements.length > 0) {
                        var attribute = elements[0].getAttribute("data-canvastype").replace(" ", "");
                        var dataiscg = elements[0].getAttribute("data-iscg");
                        var dataism = elements[0].getAttribute("data-ism");
                        var actionType = elements[0].getAttribute("data-actiontype");
                        writeDebug("attribute " + attribute + " " + dataiscg + " " + dataism + " " + actionType);
                        if (dataism == 1)
                            window.ZITFunctions.sendGAData(51, 'Canvas Display', config.wid, 'Canvas', false);
                        else if (dataiscg == 1)
                            window.ZITFunctions.sendGAData(44, 'Canvas Display', config.wid, 'Canvas', false);
                        else if (attribute == "display") {
                            if (actionType)
                                window.ZITFunctions.sendGAData(actionType, 'Canvas Display', config.wid, 'Canvas', false);
                            else
                                window.ZITFunctions.sendGAData(41, 'Canvas Display', config.wid, 'Canvas', false);
                        }
                        else
                            window.ZITFunctions.sendGAData(attribute == "get" ? 41 : 42, 'Canvas Display', config.wid, 'Canvas', false);
                    }
                    else
                        writeDebug("No content found ");
                    //}
                    writeDebug("Widget initialized:" + WidgetConfig.wid + "#" + WidgetConfig.key + "#" + WidgetConfig.isAnimate);
                });

                //var readyInterval = (isShowThumbnail && emailClickedId == 0) ? 300 : 0;
                //var readyInit = function () {
                //    if (document.readyState === 'complete') {
                //        startSliding = true;
                //    } else {
                //        setTimeout(readyInit, readyInterval);
                //    }
                //};
                //setTimeout(readyInit, readyInterval);
            }
            else
                writeDebug('widget has already been loaded ' + WidgetConfig.key);
        }
    }
    ZIT.WidgetCtrl = {
        widgets: [],
        containers: [],
        isMobile: function () {
            var isMobile = false; //initiate as false
            // device detection
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
                isMobile = true;
            }
            return isMobile;
        },
        size: function () {
            return this.widgets.length;
        },
        updateAllButtons: function () {
            var len = this.size();
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    this.widgets[i].w.notifyButtonUpdate();
                }
            }
        },
        findWidget: function (key) {
            var foundWidget = null,
                len = this.size();
            if (len > 0) {
                if (len === 1) {
                    return this.widgets[0].w;
                } else {
                    for (var i = 0; i < len; i++) {
                        if (this.widgets[i].key === key) {
                            foundWidget = this.widgets[i].w;
                            break;
                        }
                    }
                }
            }
            return foundWidget;
        },
        findWidgetObject: function (key) {
            var foundWidget = null,
                len = this.size();
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    if (this.widgets[i].key === key) {
                        foundWidget = this.widgets[i];
                        break;
                    }
                }
            }
            return foundWidget;
        },
        init: function (container, config) {
            var self = this;
            // self.wireEvent();

            config.key = ZIT.DOM.getVal(container, 'id');
            writeDebug("id retrieved " + config.key + " " + config.widgetType);

            if (config.widgetType == "canvas-disclaimer") {
                config.key = 'zitContainer_disclaimer';
            }
            else if (!config.key || config.key == '') {
                var curDate = new Date();
                config.key = 'zitContainer_' + config.wid + "_" + curDate.getMilliseconds();
                writeDebug("new id generated " + config.key);
            }
            else if (config.key && config.key.indexOf('zitContainer_' + config.wid, 0) < 0) {
                var curDate = new Date();
                var oldvalue = config.key;
                config.key = 'zitContainer_' + config.wid + "_" + curDate.getMilliseconds();
                writeDebug("id changed from " + oldvalue + " to " + config.key);
            }
            //var clickedId = parseInt(ZIT.DOM.getDataVal(container, 'clickedid'), 10);

            //if (clickedId > 0) {
            //emailClickedId = clickedId;
            //clickedContainer = container;
            //}
            var widgetid = config.key;
            var curwidget = self.findWidgetObject(widgetid);
            if (curwidget) {
                if (curwidget.p && curwidget.p != window.location.href) {
                    writeDebug("Going to hide " + widgetid + "#" + curwidget.p);
                    var curwidgetContainer = document.getElementById(widgetid);
                    curwidgetContainer.className = curwidgetContainer.className.replace(" loaded", "");
                }
                else {
                    writeDebug("Going to initialize existing " + widgetid);
                    var widget = new Widget(container, config);
                    if (typeof window.initializeCanvasMethods != "undefined") {
                        widget.init(false);
                    }
                    else
                        setTimeout(widget.init, 500, false);
                }
            }
            else {
                writeDebug("Going to initialize new widget " + widgetid + " #" + config.wid + " #" + window.location.href);
                var widget = new Widget(container, config);
                if (typeof window.initializeCanvasMethods != "undefined") {
                    widget.init(true);
                    self.widgets.push({ 'key': config.key, 'w': widget, 'p': window.location.href });
                }
                else
                    setTimeout(widget.init, 500, true);
                //self.containers.push(container);
                //initWidgetCount++;
            }
            //if (totalWidgets === initWidgetCount && emailClickedId > 0) {
            //    widget.autoOpenViewer();
            //}
        }
    };

    window['ZIT.WidgetCtrl'] = ZIT.WidgetCtrl;

})(jQuery, window);
(function ($, zit) {

    //$(document).ready(function () {
    //$(".animate-close").click(function () {
    //    $(".zit-widget-wrapper--new-panel").hide();
    //});
    //$(".animate-hide-show").click(function () {
    //    $(".zit-widget-wrapper--new-panel").toggleClass('zit-widget-wrapper--new-panel-show');
    //    $(".i-collapse").toggleClass('fa-chevron-down');
    //    $(".i-collapse").toggleClass('fa-chevron-up');
    //});
    //});

    var url = (window.location != window.parent.location)
        ? document.referrer
        : document.location.href
    var isSandbox = url.toLowerCase().indexOf('widgetdemo') > -1;

    var canvasSectionDivsArray = ['.main-canvas-section',
        '.expanded-canvas-section',
        '.collapsed-canvas-section',
        '.success-msg-canvas-section',
        '.sequence-canvas-section.step-main',
        '.sequence-canvas-section.step-one',
        '.sequence-canvas-section.step-two'];

    var openUrlInModalWindow = function (url, widgetId, target, e, isSignIn) {
        var left = (screen.width / 2) - (1150 / 2);
        var top = (screen.height / 2) - (700 / 2);

        if (target && target == '_blank') {
            if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                url = url + window.SubxClientEvents.appendEndString();
            window.open(url, '_blank');
        } else if (target && target == '_parent') {
            if (isSignIn) {
                if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                    url = url + window.SubxClientEvents.appendEndString();
                if (window.parent)
                    window.parent.location.href = url
                else
                    location.href = url
            }
            else {
                if (window.parent)
                    url = url + "&ReturnUrl=" + encodeURIComponent(window.parent.location.href);
                else
                    url = url + "&ReturnUrl=" + encodeURIComponent(location.href);
                if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                    url = url + window.SubxClientEvents.appendEndString();
                if (window.parent) {
                    window.parent.location.href = url;
                }
                else
                    location.href = url;
            }
        }
        else if (target && target == '_overlay') {
            var container = e.closest('.zeddit-rcm');
            if (container) {
                var containerId = container.id;
                console.log("container retrieved " + containerId);
                var widgetContainer = document.getElementById(containerId);
                if (widgetContainer && widgetContainer.classList && widgetContainer.classList.contains("loaded")) {
                    widgetContainer.classList.remove("loaded");
                }
            }
            else {
                var container = document.querySelector('.exit-intent-popup');
                if (container && container.classList)
                    container.classList.remove('visible');
                var CLOSE_FLOATINGCOLUMN_SESSION_KEY = "zit.npwcc." + widgetId;
                if (window.ZITFunctions)
                    window.ZITFunctions.sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY, 1);
                else {
                    console.log("No pop up found");
                }
                //var mfp = $.magnificPopup;
                //if (mfp) {
                //    mfp.close();
                //    var CLOSE_FLOATINGCOLUMN_SESSION_KEY = "zit.npwcc." + widgetId;
                //    if (window.ZITFunctions)
                //        window.ZITFunctions.sessionStore(CLOSE_FLOATINGCOLUMN_SESSION_KEY, 1);
                //}
                //else
                //    console.log("No pop up found");
            }
            //var progressBarHtml = '<div class="spinner-loader show" id="'+ containerId +'_spinner"><div class="loading-progress-holder" style="' +
            //                 'position: absolute;left: 50%;top: 40%;-ms-transform: translateX(-50%);-moz-transform: translateX(-50%);-webkit-transform: translateX(-50%);transform: translateX(-50%);border-radius: 5px;">' +
            //                '<div class="loading spinner small" style="position: relative;width:20px;height:20px;display:block;"><img src="//cdn-static.zeddit.co/Images/spinner.gif" width="30" /></div></div></div>';
            var progressBarHtml = '<div class="spinner-loader show" id="' + containerId + '_spinner"><div class="loading-progress-holder" style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);">' +
                '<div class="caloader" style="position: relative;display:block;"></div></div>';
            var progressBar = document.createElement('div');
            progressBar.className = 'widget-code-modal';
            progressBar.innerHTML = progressBarHtml;
            progressBar.style.cssText = 'width: 100%;height:100%;overflow: visible;position:absolute;top:0;color:rgba(0,0,0,0.8);';

            var head = document.getElementsByTagName('head')[0],
                style = document.createElement('style'),
                rules = document.createTextNode('.caloader{' +
                    'border: 8px solid #f3f3f3;' +
                    'border-radius: 50%;' +
                    'border-top: 8px solid #a1a1a1;' +
                    'width: 30px;' +
                    'height: 30px;' +
                    '-webkit-animation: spin 1s linear infinite; /* Safari */' +
                    'animation: spin 1s linear infinite;}' +
                    '@-webkit-keyframes spin {' +
                    '0% { -webkit-transform: rotate(0deg); }' +
                    '100% { -webkit-transform: rotate(360deg); }' +
                    '}' +
                    '@keyframes spin {' +
                    '0% { transform: rotate(0deg); }' +
                    '100% { transform: rotate(360deg); }}');
            // append style element
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = rules.nodeValue;
            } else {
                style.appendChild(rules);
            }
            head.appendChild(style);
            var iframe = document.createElement('iframe');
            iframe.id = 'paymentOverlayFrame';
            if (window.parent)
                url = url + "&ReturnUrl=" + encodeURIComponent(window.parent.location.href);
            else
                url = url + "&ReturnUrl=" + encodeURIComponent(location.href);
            if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                url = url + window.SubxClientEvents.appendEndString();
            iframe.src = url;
            iframe.setAttribute('frameborder', 0);
            iframe.setAttribute('allowtransparency', 'true');
            iframe.setAttribute('scrolling', 'auto');
            iframe.setAttribute('tabindex', 0);
            iframe.setAttribute('width', '100%');
            var overlay = document.createElement('section');
            overlay.id = 'subscribeOverlay_' + containerId;
            overlay.appendChild(progressBar);
            overlay.appendChild(iframe);
            overlay.setAttribute('style', 'display: flex; position: fixed; width: 100%; height: 100%; left: 0px; top: 0px; opacity:1; z-index:99999999; -webkit-overflow-scrolling:touch; overflow-y: scroll;');
            document.body.appendChild(overlay);
            window.addEventListener('closepaymentOverlayFrame', function () {
                window.location.reload();
            }, false);
            if (window.dataLayer) {
                window.addEventListener('message', e => {
                    ;
                    if (e.data.id == 'sendDataLayer4') {
                        console.log('PsendDataLayer4 ' + JSON.stringify(e.data.content));
                        if (window.dataLayer) {
                            window.dataLayer.push(e.data.content);
                            console.log("data layer data sent.");
                        }
                        else {
                            console.log("No data layer detected.");
                        }
                    }
                    else if (e.data.id == 'sendDataLayer3') {
                        var txtemail = e.data.content;
                        console.log('PsendDataLayer3 ' + txtemail);
                        var data = {
                            'subxCustomer': txtemail,
                            'event': 'subx-delivery-details-complete'
                        };
                        if (window.dataLayer) {
                            window.dataLayer.push(data);
                            console.log("data layer data sent.");
                        }
                        else {
                            console.log("No data layer detected.");
                        }
                    }
                    else if (e.data.id == 'sendDataLayer2') {
                        var data = {
                            'event': 'subx-billing-details-complete'
                        };
                        if (window.dataLayer) {
                            window.dataLayer.push(data);
                            console.log("data layer data sent.");
                        }
                        else {
                            console.log("No data layer detected.");
                        }
                    }
                    else if (e.data.id == 'sendDataLayer1') {
                        var data = {
                            'event': 'subx-subscription-complete'
                        };
                        if (window.dataLayer) {
                            window.dataLayer.push(data);
                            console.log("data layer data sent.");
                        }
                        else {
                            console.log("No data layer detected.");
                        }
                    }
                }, false);
            };
            document.getElementById('paymentOverlayFrame').onload = function () {
                var spinner = document.getElementById(containerId + '_spinner');
                var spinnercontainer = spinner.closest('.widget-code-modal');
                if (spinnercontainer.style.cssText.indexOf('display:none;') === -1)
                    spinnercontainer.style.cssText += 'display:none;';
            };
        }
        else if (target && target == '_self') {
            if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                url = url + window.SubxClientEvents.appendEndString();
            window.open(url, '_self');
        }
        else {
            if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                url = url + window.SubxClientEvents.appendEndString();
            window.open(url, '', 'toolbar=no,titlebar=no,menubar=no,scrollbars=1,height=680,width=1150,top=' + top + ', left=' + left);
        }
    };
    window.handleClickDataTracking = function (e, action, wId, extLink, referral) {
        try {
            if (window.ZITFunctions) {
                var eventsent = false;
                try {
                    var apiKey = e.attributes["data-apikey"].nodeValue;
                    var pId = e.attributes["data-pid"].nodeValue;
                    var dtId = window.ZITFunctions.retrieveOrigSession();
                    var curId = window.ZITFunctions.retrieveCurSession();
                    var actionType = 0;
                    if (typeof window.ZITFunctions.saveCanvasClickUrlToCookie != "undefined") {
                        var tactionType = window.ZITFunctions.saveCanvasClickUrlToCookie(wId, extLink);
                        if (typeof tactionType != "undefined")
                            actionType = tactionType;
                    }
                    else { //for legacy
                        try {
                            var iscg = document.getElementsByClassName('wid-' + wId)[0].attributes['data-iscg'] == undefined ? 0 : document.getElementsByClassName('wid-' + wId)[0].attributes['data-iscg'].nodeValue;
                            var ism = document.getElementsByClassName('wid-' + wId)[0].attributes['data-ism'] == undefined ? 0 : document.getElementsByClassName('wid-' + wId)[0].attributes['data-ism'].nodeValue;
                            actionType = document.getElementsByClassName('wid-' + wId)[0].attributes['data-actiontype'] == undefined ? 0 : document.getElementsByClassName('wid-' + wId)[0].attributes['data-actiontype'].nodeValue;
                            if (ism == 1)
                                actionType = 51;
                            else if (iscg == 1)
                                actionType = 44;
                            if (actionType <= 0) {
                                var canvasType = document.getElementsByClassName('wid-' + wId)[0].attributes['data-canvastype'] == undefined ? 0 : document.getElementsByClassName('wid-' + wId)[0].attributes['data-canvastype'].nodeValue;
                                if (canvasType == 'get')
                                    actionType = 41;
                                else if (canvasType == 'post')
                                    actionType = 42;
                                else
                                    actionType = 41;
                            }
                            console.log("Retrieved " + iscg + " " + ism + " " + actionType);
                        }
                        catch(error) {
                            window.ZITUtils.writeDebug(JSON.stringify(error));
                        }
                    }
                    if (typeof window.SubxClientEvents != "undefined" && (typeof window.SubxClientEvents.retrieveJAMEventName != "undefined" || window.SubxClientEvents.scriptGroup == "VoxUS")) {
                        window.ZITUtils.writeDebug(e.innerHTML);
                        if (e.innerText) {
                            if (action > 0)
                                window.ZITFunctions.sendGAData(action, 'Action ' + e.innerText, wId, 'Membership', false, extLink);
                            eventsent = true;
                        }
                    }
                    else
                        writeDebug("SubxClientEvents retrieveJAMEventName is not enabled");

                }
                catch (error) {
                    window.ZITUtils.writeDebug(JSON.stringify(error));
                }
                if (!eventsent) {
                    if (action == 111)
                        window.ZITFunctions.sendGAData(action, 'Click Find Out More', wId, 'Membership', false, extLink);
                    else if (action > 0) //ext link do not track
                        window.ZITFunctions.sendGAData(action, 'Action ' + action, wId, 'Membership', false, extLink);
                    else
                        writeDebug("No data will be sent for action " + action);
                }
                else
                    writeDebug("Data tracking has been sent");
                window.ZITFunctions.sendCWPClickData(apiKey, action, dtId, curId, pId, actionType, wId, referral, extLink);
            }
            else
                writeDebug("Data tracking is not enabled");
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'handleClickDataTracking');
        }
    };
    window.handleExternalLink = function (e) {
        var wId = 0;
        try {
            var action = e.attributes["data-cwp-id"] && e.attributes["data-cwp-id"].nodeValue;
            var _target = '';
            var dtId = window.ZITFunctions.retrieveOrigSession();
            var curId = window.ZITFunctions.retrieveCurSession();
            var referral = encodeURIComponent(window.location.href);
            wId = e.attributes["data-wid"].nodeValue;
            var extLink = e.attributes["data-ext-link"] && e.attributes["data-ext-link"].nodeValue;
            if (!extLink || extLink == "")
                extLink = e.attributes["data-link"] && e.attributes["data-link"].nodeValue;

            try {
                _target = e.attributes["data-target"] === undefined ? '' : e.attributes["data-target"].nodeValue;
            }
            catch { }
            window.ZITUtils.writeDebug("processlink " + extLink);
            if (typeof extLink != "undefined" && extLink.length > 0) {
                if (typeof window.SubxClientEvents != "undefined" && (typeof window.SubxClientEvents.processExtLinks != "undefined" || typeof window.SubxClientEvents.processExtLinksV2 != "undefined")) {
                    if (extLink.indexOf("{current_url}") > 0)
                        extLink = extLink.replace("{current_url}", referral);
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                    if (_target == "")
                        _target = "_self";
                    if (window.SubxClientEvents && typeof window.SubxClientEvents.processExtLinksV3 != "undefined")
                        window.SubxClientEvents.processExtLinksV3(e.innerHTML, extLink, e, action, wId, extLink, referral, _target);
                    else if (window.SubxClientEvents && typeof window.SubxClientEvents.processExtLinksV2 != "undefined")
                        window.SubxClientEvents.processExtLinksV2(e.innerHTML, extLink, e, action, wId, extLink, referral, _target);
                    else {
                        var curLink = window.SubxClientEvents.processExtLinks(e.innerHTML, extLink);
                        if (curLink != "") {
                            console.log(curLink);
                            extLink = curLink;
                        }
                        window.handleClickDataTracking(e, action, wId, extLink, referral);
                        if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                            extLink = extLink + window.SubxClientEvents.appendEndString();
                        window.open(extLink, _target);
                    }
                    return;
                }
                else
                    writeDebug("SubxClientEvents processExtLinks is not enabled")
                if (extLink.indexOf("https://www.mylo.id/login") >= 0) {
                    const config = {
                        clientId: '35hrtv401vr6kfniu4r980hkda',
                        redirectUri: 'https://www.popularmechanics.com/auth/login',
                        logoutUri: 'https://www.popularmechanics.com/auth/logout',
                        myloApiBaseUrl: 'https://ciam-auth.kubestage.hearstapps.net',
                        myloUiBaseUrl: 'https://www.mylo.id/login',
                        pkce: false,
                    };
                    var myloUrl = 'https://www.mylo.id/login?client_id=' + config.clientId + '&state=' + encodeURIComponent(dtId) + '&redirect_uri=' + config.redirectUri;
                    if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.generateLoginLink != "undefined")
                        myloUrl = window.SubxClientEvents.generateLoginLink();
                    //const mylo = new Mylo(config);
                    console.log("going to trace mylo auth event " + myloUrl);
                    window.addEventListener('mylo-auth-complete', function (event) {
                        console.log("Mylo auth completed:" + window.ZITUtils.readCookie('_sue'));
                        console.log(event.detail.data.code);
                        console.log(event.detail.data.tokens);
                    });
                    _target = '_parent';
                    window.handleClickDataTracking(e, action, wId, myloUrl, referral);
                    if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                        myloUrl = myloUrl + window.SubxClientEvents.appendEndString();
                    openUrlInModalWindow(myloUrl, wId, _target, e, true);
                }
                else {
                    if (!extLink.startsWith("//") && !extLink.startsWith("http")) {
                        extLink = "//" + extLink;
                    }
                    var referral = encodeURIComponent(window.location.href);
                    if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.referralReferral != "undefined")
                        referral = window.SubxClientEvents.referralReferral();
                    if (extLink.indexOf("?") > 0)
                        extLink = extLink + "&wId=" + wId;
                    else
                        extLink = extLink + "?wId=" + wId;
                    if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.formCustomizedClickString != "undefined")
                        extLink = extLink + window.SubxClientEvents.formCustomizedClickString(wId);
                    else
                        window.ZITUtils.writeDebug("No Customized Click query detected.");
                    if (extLink.indexOf("{current_url}") > 0)
                        extLink = extLink.replace("{current_url}", referral);
                    else if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.referralFields != "undefined")
                        extLink = extLink + "&" + window.SubxClientEvents.referralFields + "=" + referral;
                    else
                        extLink = extLink + "&refer=" + referral;
                    extLink = extLink + '&src=is_subx&dtId=' + encodeURIComponent(dtId) + '&iss=' + curId
                    //window.open(extLink, '_blank');
                    try {
                        var isMac = window.navigator.platform.indexOf('Mac') > -1;
                        var isWin = window.navigator.platform.indexOf('Win') > -1;
                        if ((isMac && window.event.metaKey) || (isWin && window.event.ctrlKey)) {
                            _target = '_blank';
                        }
                    } catch (error) {
                        if (window.event.metaKey || window.event.ctrlKey) {
                            _target = '_blank';
                        }
                    }
                    window.handleClickDataTracking(e, action, wId, extLink, referral);
                    if (window.SubxClientEvents && typeof window.SubxClientEvents.appendEndString != "undefined")
                        extLink = extLink + window.SubxClientEvents.appendEndString();
                    window.open(extLink, _target ? _target : '_self');
                }
            }
            else
                writeDebug("No link retrieved ");
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'handleExternalLink');
        }
    };

    window.handleButtonClick = function (e, DialogTarget) {
        var url = '',
            cId = 0,
            openviewer = false,
            isnew = false,
            articleId = 0,
            _target = DialogTarget, //'_parent',
            dtId = '',
            toexclude = 0,
            pId = 0,
            isexternal = 0,
            apiKey = '',
            dataevent = 0,
            wId = 0,
            widgetName = '';
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            wId = e.attributes["data-wid"].nodeValue;
            url = e.attributes["data-link"].nodeValue;
            cId = e.attributes["data-cid"].nodeValue;
            pId = e.attributes["data-pid"].nodeValue;
            try {
                widgetName = e.attributes["data-name"].nodeValue;
            }
            catch { }
            try {
                _target = e.attributes["data-target"] === undefined ? DialogTarget : e.attributes["data-target"].nodeValue;
            }
            catch { }

            var curId = "";
            var action = 11;
            var referral = encodeURIComponent(window.location.href);
            if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.referralReferral != "undefined")
                referral = window.SubxClientEvents.referralReferral();
            if (window.ZITFunctions) {
                dtId = window.ZITFunctions.retrieveOrigSession();
                curId = window.ZITFunctions.retrieveCurSession();
                ext = e.attributes["data-ext"].nodeValue;
                if (ext != "1") {
                    action = 12;
                }
                else {
                    apiKey = e.attributes["data-apikey"].nodeValue;
                }
            }
            if (url.indexOf("https://www.mylo.id/login") >= 0) {
                var config = {
                    clientId: '35hrtv401vr6kfniu4r980hkda',
                    redirectUri: 'https://www.popularmechanics.com/auth/login',
                    logoutUri: 'https://www.popularmechanics.com/auth/logout',
                    myloApiBaseUrl: 'https://ciam-auth.kubestage.hearstapps.net',
                    myloUiBaseUrl: 'https://www.mylo.id/login',
                    pkce: false,
                };
                if (window.ZITFunctions.host() == "naturetrails.xyz") {
                    config = {
                        clientId: '5rdu2nf0ctu99aef5qcvb083h3',
                        redirectUri: 'https://www.naturetrails.xyz',
                        logoutUri: 'https://www.naturetrails.xyz/auth/logout',
                        myloApiBaseUrl: 'https://cspi.login-stage.resin.com/login',
                        myloUiBaseUrl: 'https://cspi.login-stage.resin.com/login',
                        pkce: false,
                    };
                }
                window.ZITUtils.writeDebug(JSON.stringify(config));
                var myloUrl = config.myloApiBaseUrl + '?client_id=' + config.clientId + '&state=' + encodeURIComponent(dtId) + '&redirect_uri=' + config.redirectUri;
                if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.generateLoginLink != "undefined")
                    myloUrl = window.SubxClientEvents.generateLoginLink();
                //const mylo = new Mylo(config);
                console.log("going to trace mylo auth event " + myloUrl);
                window.addEventListener('mylo-auth-complete', function (event) {
                    console.log("Mylo auth completed:" + window.ZITUtils.readCookie('_sue'));
                    console.log(event.detail.data.code);
                    console.log(event.detail.data.tokens);
                });
                _target = '_parent';
                window.handleClickDataTracking(e, action, wId, myloUrl, referral);
                openUrlInModalWindow(myloUrl, wId, _target, e, true);
            }
            else {
                if (url.indexOf("?") > 0)
                    url = url + "&wId=" + wId;
                else
                    url = url + "?wId=" + wId;
                if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.formCustomizedClickString != "undefined")
                    url = url + window.SubxClientEvents.formCustomizedClickString(wId);
                else
                    window.ZITUtils.writeDebug("No Customized Click query detected.");
                if (url.indexOf("{current_url}") > 0)
                    url = url.replace("{current_url}", referral);
                else if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.referralFields != "undefined")
                    url = url + "&" + window.SubxClientEvents.referralFields + "=" + referral;
                else
                    url = url + "&refer=" + referral;
                try {
                    var isMac = window.navigator.platform.indexOf('Mac') > -1;
                    var isWin = window.navigator.platform.indexOf('Win') > -1;
                    if ((isMac && window.event.metaKey) || (isWin && window.event.ctrlKey)) {
                        _target = '_blank';
                    }
                } catch (error) {
                    if (window.event.metaKey || window.event.ctrlKey) {
                        _target = '_blank';
                    }
                }
                window.handleClickDataTracking(e, action, wId, url, referral);
                openUrlInModalWindow(url + (isSandbox ? '&sandbox=1' : '') + '&src=is_subx&dtId=' + encodeURIComponent(dtId) + '&iss=' + curId, wId, _target, e, false);
            }
            if (window.ZITFunctions && window.ZITFunctions.sendDataLayer)
                window.ZITFunctions.sendDataLayer("subx-completion", wId, widgetName);
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'handleButtonClick-' + wId);
        }
    };

    var arrAutoClose = [];
    window.setAutoCloseWidget = function (wid) {
        var result = arrAutoClose.filter(function (item) {
            return item === wid;
        });
        if (result.length <= 0)
            arrAutoClose.push(wid);
    };

    window.getAutoCloseWidget = function (wid) {
        var isExists = false;
        var result = arrAutoClose.filter(function (item) {
            return item === wid;
        });
        if (result.length > 0)
            isExists = true;
        return isExists;
    };

    window.handleOpenNextScreenButtonClick = function (e) {
        var _currentStep = '';
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }

            var toggleCanvasHideOnTimer = function (mainNode, zitSliderOverlayNode, wid) {
                try {
                    var newPanelNode = mainNode.querySelector('.zit-widget-wrapper--new-panel');
                    if (newPanelNode.classList.contains('zit-widget-wrapper--new-panel-no-anim')) {
                        newPanelNode.style.display = "none";
                        if (typeof window.setAutoCloseWidget !== "undefined") {
                            window.setAutoCloseWidget(wid);
                        }
                    }
                    else if (newPanelNode.classList.contains('zit-widget-wrapper--new-panel-anim-popup')) {
                        var container = mainNode.querySelector('.exit-intent-popup');
                        if (container) {
                            container.classList.remove('visible');
                            if (typeof window.setAutoCloseWidget !== "undefined") {
                                window.setAutoCloseWidget(wid);
                            }
                        }
                    }
                    else {
                        newPanelNode.classList.remove('zit-widget-wrapper--new-panel-show');
                        if (zitSliderOverlayNode) zitSliderOverlayNode.classList.remove('zit-slider-overlay-show'); //ZIT.DOM.removeClass(zitSliderOverlayNode, 'zit-slider-overlay-show');
                        if (typeof window.setAutoCloseWidget !== "undefined") {
                            window.setAutoCloseWidget(wid);
                        }
                    }
                }
                catch (error) {
                }
            };

            _currentStep = e.attributes["data-step"] && e.attributes["data-step"].nodeValue;
            if (_currentStep === 'main' || _currentStep === 'one') {
                var mainContent = e.closest('.sequence-canvas-content');
                if (mainContent) {
                    var collOnTimerAttribute,
                        collOnTimerTimeout;

                    //hide all sections
                    var inputNode = mainContent.querySelectorAll('.widget-container-new-panel.sequence-canvas-section');
                    if (inputNode) {
                        for (var j = 0; j < inputNode.length; j++) {
                            inputNode[j].style.display = 'none';
                        }
                    }

                    //show next section
                    if (_currentStep === 'main') {
                        var inputNode = mainContent.querySelector('.widget-container-new-panel.sequence-canvas-section.step-one');
                        if (inputNode) inputNode.style.display = 'block';

                        collOnTimerAttribute = inputNode && inputNode.getAttribute("data-collOnTimer");
                        try {
                            var w_id = e.closest(".zit-widget-wrapper--new-panel").attributes["data-wid"] && e.closest(".zit-widget-wrapper--new-panel").attributes["data-wid"].nodeValue;
                            e.closest(".zit-widget-wrapper--new-panel").style.backgroundImage = "var(--bg-img-step-one-wid-" + w_id + ")";
                        } catch (e) { }
                    }
                    else if (_currentStep === 'one') {
                        var inputNode = mainContent.querySelector('.widget-container-new-panel.sequence-canvas-section.step-two');
                        if (inputNode) inputNode.style.display = 'block';

                        collOnTimerAttribute = inputNode && inputNode.getAttribute("data-collOnTimer");
                        try {
                            var w_id = e.closest(".zit-widget-wrapper--new-panel").attributes["data-wid"] && e.closest(".zit-widget-wrapper--new-panel").attributes["data-wid"].nodeValue;
                            e.closest(".zit-widget-wrapper--new-panel").style.backgroundImage = "var(--bg-img-step-two-wid-" + w_id + ")";
                        } catch (e) { }
                    }

                    if (collOnTimerAttribute) {
                        var divZitSliderOverlay = e.closest(".zit-slider-overlay");
                        var collOnTimerTime = collOnTimerAttribute * 1000;
                        clearTimeout(collOnTimerTimeout);
                        collOnTimerTimeout = setTimeout(function () { toggleCanvasHideOnTimer(e.closest(".zeddit-rcm .js-zitWidgetWrapper"), divZitSliderOverlay, w_id) }, collOnTimerTime);
                    }
                    if (typeof window.initializeDefaultFocusOnCanvasLoadFunction !== "undefined") {
                        window.initializeDefaultFocusOnCanvasLoadFunction(e.closest(".zit-widget-wrapper--new-panel"));
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'handleOpenNextScreenButtonClick-' + _currentStep);
        }
    };

    window.handleCodebleButtonClick = function (e) {
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }

            var spanContext = $(e).children().closest('span')
            if (spanContext.length > 0) {
                if (spanContext[0]) {
                    var wId = spanContext[0].attributes["data-wid"] === undefined ? '' : spanContext[0].attributes["data-wid"].nodeValue;
                    var pId = spanContext[0].attributes["data-pid"] === undefined ? '' : spanContext[0].attributes["data-pid"].nodeValue;
                    var cId = spanContext[0].attributes["data-cid"] === undefined ? '' : spanContext[0].attributes["data-cid"].nodeValue;
                    var url = spanContext[0].attributes["data-codeblelink"] === undefined ? '' : spanContext[0].attributes["data-codeblelink"].nodeValue;
                    var ext = spanContext[0].attributes["data-ext"] === undefined ? '' : spanContext[0].attributes["data-ext"].nodeValue;
                    var apiKey = spanContext[0].attributes["data-apikey"] === undefined ? '' : spanContext[0].attributes["data-apikey"].nodeValue;
                    var dialogTarget = spanContext[0].attributes["data-dialogtarget"] === undefined ? '_parent' : spanContext[0].attributes["data-dialogtarget"].nodeValue;

                    var mainDiv = $(e).parent().closest('div')[0];
                    if (mainDiv) {
                        var actionButton = $(mainDiv).find('#buttonGroup');
                        if (actionButton) {
                            $(actionButton[0]).attr("data-wid", wId);
                            $(actionButton[0]).attr("data-pid", pId);
                            $(actionButton[0]).attr("data-cid", cId);
                            $(actionButton[0]).attr("data-ext", ext);
                            $(actionButton[0]).attr("data-link", url);
                            if (ext != "1") {
                                $(actionButton[0]).removeAttr("data-apikey");
                            }
                            else {
                                $(actionButton[0]).attr("data-apikey", apiKey);
                            }
                            $(actionButton[0]).attr("onclick", "handleButtonClick(this, '" + dialogTarget + "');");
                        }

                        var btnCodeble = $(mainDiv).find('.btn-codeble');
                        if (btnCodeble) {
                            $(btnCodeble).removeClass("codeble-focus-plan");
                            $(btnCodeble).addClass("codeble-plain-plan");
                        }
                        $(e).addClass("codeble-focus-plan");
                        $(e).removeClass("codeble-plain-plan");
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'handleCodebleButtonClick-' + wId);
        }
    };

    window.handleSelectButtonClick = function (e) {
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }

            var mainDiv = $(e).parent().closest('div')[0];
            if (mainDiv) {
                var btnCodeble = $(mainDiv).find('.btn-select-button');
                if (btnCodeble) {
                    $(btnCodeble).removeClass("select-button-focus-plan");
                    $(btnCodeble).addClass("select-button-plain-plan");
                }
                $(e).addClass("select-button-focus-plan");
                $(e).removeClass("select-button-plain-plan");
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'handleSelectButtonClick-' + wId);
        }
    };

    window.handleAlertTextClick = function (e, targetLink) {
        var widgetId = 0;
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            //var eleTags = $(e).siblings();
            //$.each(eleTags, function (key, value) {
            //    if (value.id === "title" || value.id === "sub-title" || value.id === "body" || value.id === "body2" || value.id === "body3" || value.id === "disclaimer_text" || value.id === "alert_text_1" || value.id === "alert_text_2" ||
            //        value.id === "disclaimer" || value.id === "splash" ||
            //        value.id === 'close_icon' ||
            //        value.id === "line") {
            //        $(value).hide();
            //    }
            //});
            //$(e).hide();
            //$("#" + targetLink).show();
            if (window.ZITFunctions) {
                var $button = $(e).closest(".zit-widget-wrapper--new-panel");
                widgetId = $button[0].attributes['data-wid'].nodeValue;
                window.ZITFunctions.sendGAData(80, 'Why Register', widgetId, false);
            }
            $("#" + targetLink).css({ "visibility": "visible", "opacity": "1", "transition-delay": "0s" });
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'OpenWhyRegister-' + widgetId);
        }
    };

    window.handleAlertTextCloseClick = function (e, targetLink) {
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            //var pTags = $(e).siblings().parent().siblings();
            //$.each(pTags, function (key, value) {
            //    if (value.id !== "divsuccessMsgContainer" && value.id !== "divAlertMsgContainer1" && value.id !== "divAlertMsgContainer2") {
            //        var eleTags = $(value).children();
            //        $.each(eleTags, function (key, value1) {
            //                $(value1).show();
            //        });
            //    }
            //});
            //$("#" + targetLink).hide();
            $("#" + targetLink).css({ "visibility": "hidden", "opacity": "0", "transition": "visibility 0s linear 0.33s, opacity 0.33s linear" });
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'CloseWhyRegister-' + targetLink);
        }
    };

    window.handleHideTextClick = function (e, targetLink) {
        var text = '';
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }

            // e.parentNode.parentElement.parentElement.parentElement.parentElement.attributes['data-wid'].value = "1694";

            if ($(e).context === undefined && $(e).context.attributes === undefined &&
                $(e).context.attributes['data-firstclick'] === undefined && $(e).context.attributes['data-text'] === undefined && $(e).context.attributes['data-reversetext'] === undefined) {
                return;
            }

            var firstclick = $(e).context.attributes['data-firstclick'].value;
            text = $(e).context.attributes['data-text'].value;
            var reversetext = $(e).context.attributes['data-reversetext'].value;
            var eleTags = $(e).siblings();

            if (firstclick === 'false') {
                $(e).text(reversetext);
                $(e).context.attributes['data-firstclick'].value = 'true';
                $.each(eleTags, function (key, value) {
                    if (value.id === 'firstName' || value.id === 'surName' || value.id === 'fullName') {
                        $(value).css({ "visibility": "hidden", "opacity": "0", "transition": "visibility 0s linear 0.33s, opacity 0.33s linear" });
                        var eleTagsChildren = $(value).children();
                        $.each(eleTagsChildren, function (key, value1) {
                            if (value1.type === 'text') {
                                $(value1).val('null');
                            }
                        });
                        //$(value).hide();
                    }
                    if (value.id === 'checkbox' || value.id === 'revers_checkbox') {
                        $(value).css({ "visibility": "hidden", "opacity": "0", "transition": "visibility 0s linear 0.33s, opacity 0.33s linear" });
                        $(value).prop('checked', false);
                    }
                });
            }
            else {
                $(e).text(text);
                $(e).context.attributes['data-firstclick'].value = 'false';
                $.each(eleTags, function (key, value) {
                    if (value.id === 'firstName' || value.id === 'surName' || value.id === 'fullName') {
                        var eleTagsChildren = $(value).children();
                        $.each(eleTagsChildren, function (key, value1) {
                            if (value1.type === 'text') {
                                $(value1).val('');
                            }
                        });
                        //$(value).show();
                        $(value).css({ "visibility": "visible", "opacity": "1", "transition-delay": "0s" });
                    }
                    if (value.id === 'checkbox' || value.id === 'revers_checkbox') {
                        $(value).css({ "visibility": "visible", "opacity": "1", "transition-delay": "0s" });
                    }
                });
            }

            //$.each(eleTags, function (key, value) {
            //    if (value.id === 'firstName' || value.id === 'surName' || value.id === 'fullName') {
            //        var eleTagsChildren = $(value).children();
            //        $.each(eleTagsChildren, function (key, value1) {
            //            if (value1.type === 'text') {
            //                $(value1).val('null');
            //            }
            //        });
            //        $(value).hide();
            //    }
            //});
            //$("#" + targetLink).hide();
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'HideText-' + text);
        }
    };

    window.handleLogOut = function (e) {
        if (window.SubxClientEvents && typeof window.SubxClientEvents.handleLogOut != "undefined")
            window.SubxClientEvents.handleLogOut();
        else {
            var pid = 0;
            var reversewid = 0;
            try {
                if (window.ZITFunctions) {
                    window.ZITFunctions.setLogOut();
                    console.log('Log Out Successfully');
                }
                else
                    console.log('Failed to Log Out');
                window.location.reload();
            }
            catch (error) {
                if (window.ZITFunctions)
                    window.ZITFunctions.sendRaygunData(error, 'LogOut-' + reversewid);
            }
        }
    };

    window.handleHideShowLinkClick = function (e) {
        var reversewid = 0;
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }

            var buttonLoader = {};
            var buttonControl = false;
            var isTransitionEffect = "true";
            var isDNT = 0;
            if (window.ZITFunctions)
                isDNT = window.ZITFunctions.isDNT || 0;
            var apiUrl = "";
            var brandUrl = "";
            var pid = 0;

            if ($(e).context !== undefined && $(e).context.attributes !== undefined) {
                pid = $(e).context.attributes['data-pid'].nodeValue;
                reversewid = $(e).context.attributes['data-reversewid'].nodeValue || 0;
                try {
                    isTransitionEffect = $(e).context.attributes['data-transition'] == undefined ? "true" : $(e).context.attributes['data-transition'].nodeValue;
                }
                catch (error) {
                    isTransitionEffect = "true";
                    console.log("subx: transaction context attr set to 1");
                }
            }
            else if ($(e)[0] !== undefined && $(e)[0].attributes !== undefined) {
                pid = $(e)[0].attributes['data-pid'].nodeValue;
                reversewid = $(e)[0].attributes['data-reversewid'].nodeValue || 0;
                try {
                    isTransitionEffect = $(e)[0].attributes['data-transition'] == undefined ? "true" : $(e)[0].attributes['data-transition'].nodeValue;
                }
                catch (error) {
                    isTransitionEffect = "true";
                    console.log("subx: transaction attr set to 1");
                }
            }
            else {
                return;
            }
            //var pid = $(e).context.attributes['data-pid'].nodeValue;
            //reversewid = $(e).context.attributes['data-reversewid'].nodeValue || 0;
            if (reversewid <= 0) {
                if (window.ZITFunctions)
                    window.ZITFunctions.sendRaygunData(new Error("reversewid is 0 "), 'handleHideShowLinkClick-' + pid);
                return;
            };

            var divZedditRCM = $(e).parent().closest('div.zeddit-rcm'); //$(e).parent().closest('div').parent().closest('div').parent().closest('div').parent().closest('div');
            var wrapperHtml = $(e).parent().closest('div.js-zitWidgetWrapper'); //$(e).parent().closest('div').parent().closest('div').parent().closest('div');

            try {
                buttonLoader = new getCanvasButtonLoader($(e));
                buttonControl = true;
                buttonLoader.show();
            }
            catch (error) { }

            var isContentGate = 0;
            function showCanvas(strRCMHtml, method) {
                window.ZITUtils.writeDebug("Going to execute showCanvas " + method);
                window.ZITUtils.writeDebug(strRCMHtml);
                $(wrapperHtml).html('');
                $(wrapperHtml).html(strRCMHtml);
                if (isTransitionEffect === "true") {
                    $(wrapperHtml).css({ "visibility": "visible", "opacity": "1", "transition-delay": "0s" });
                }
                var popupHtml = $(wrapperHtml).find('.exit-intent-popup');
                if (popupHtml.length > 0) {
                    $(popupHtml).addClass('visible');
                }
                if ($(divZedditRCM)[0].attributes['data-wid'])
                    $(divZedditRCM)[0].attributes['data-wid'].value = reversewid;
                else
                    $(divZedditRCM)[0].setAttribute('data-wid', reversewid);
                if (window.SubxClientEvents && typeof window.SubxClientEvents.executeSpecialCanvasLogic != "undefined") {
                    window.SubxClientEvents.executeSpecialCanvasLogic(reversewid, $(divZedditRCM));
                }
                if (method == "post") {
                    if (typeof window.LoadCanvasFormValidate !== "undefined") {
                        if ($.validator) {
                            console.log("new validator has been loaded");
                            window.LoadCanvasFormValidate();
                        }
                        else {
                            console.log("new validator has not been loaded");
                            window.ZITloader.initScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js").then(function () {
                                console.log("new validator has been loaded");
                                if ($.validator) {
                                    window.LoadCanvasFormValidate();
                                }
                            });
                        }
                    }
                    else {
                        console.log("LoadCanvasFormValidate is not defined.");
                        window.ZITloader.initScript("https://d2ip7iv1l4ergv.cloudfront.net/embed/widget/ZITNewCanvasPost.js").then(function () {
                            if ($.validator) {
                                console.log("new validator has been loaded");
                                window.LoadCanvasFormValidate();
                            }
                            else {
                                console.log("new validator has not been loaded");
                                window.ZITloader.initScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js").then(function () {
                                    console.log("new validator has been loaded");
                                    if ($.validator) {
                                        window.LoadCanvasFormValidate();
                                    }
                                });
                            }
                        });
                    }
                }
                else
                    window.ZITUtils.writeDebug("Not a post canvas.");
                var columnDiv = $(wrapperHtml).find(".zit-widget-wrapper--new-panel");
                if (columnDiv) {
                    columnDiv.addClass('zit-widget-wrapper--new-panel-show');

                    var divZitSliderOverlay = $(wrapperHtml).find('.zit-slider-overlay');
                    if (divZitSliderOverlay) divZitSliderOverlay.addClass('zit-slider-overlay-show');

                    if (columnDiv[0]) {
                        var collOnTimerAttribute = columnDiv[0].getAttribute("data-collOnTimer");
                        var collOnTimerTimeout;
                        if (collOnTimerAttribute) {
                            collOnTimerTime = collOnTimerAttribute * 1000;
                            clearTimeout(collOnTimerTimeout);
                            collOnTimerTimeout = setTimeout(function () { toggleCanvasHideOnTimer(columnDiv, divZitSliderOverlay) }, collOnTimerTime);
                        }
                    }
                    if (typeof window.initializeDefaultFocusOnCanvasLoadFunction !== "undefined") {
                        window.initializeDefaultFocusOnCanvasLoadFunction($(wrapperHtml)[0]);
                    }

                    var toggleCanvasHideOnTimer = function (mainNode, zitSliderOverlayNode) {
                        try {
                            mainNode.removeClass('zit-widget-wrapper--new-panel-show');
                            if (zitSliderOverlayNode) zitSliderOverlayNode.removeClass('zit-slider-overlay-show');
                        }
                        catch (error) {
                        }
                    };
                }
                var isResponsiveCanvas = columnDiv && columnDiv[0] && columnDiv[0].getAttribute("data-isResponsiveCanvas") === 'True' ? true : false;

                //**** password toggle
                if (typeof window.initializeCanvasMethods !== "undefined") {
                    window.initializeCanvasMethods($(wrapperHtml)[0]);
                }

                //**** close button
                var closeButton = $(wrapperHtml).find(".animate-close");
                for (var i = 0; closeButton.length > i; i++) {
                    if (typeof closeButton[i] != 'undefined' && closeButton[i]) {
                        bindEvent(closeButton[i], 'click', function (e) {
                            if (columnDiv) {
                                columnDiv.removeClass('zit-widget-wrapper--new-panel-show');

                                var divZitSliderOverlay = $(wrapperHtml).find('.zit-slider-overlay');
                                if (divZitSliderOverlay) divZitSliderOverlay.removeClass('zit-slider-overlay-show');

                                $(columnDiv).hide();
                            }
                            if (popupHtml) {
                                popupHtml.removeClass('visible');
                            }
                        });
                    }
                }
                
                //**** hide/show button
                var hideshowButton = $(wrapperHtml).find(".animate-hide-show");
                var hideshowIcon = $(wrapperHtml).find(".i-collapse");
                var hideshowIconImg = $(wrapperHtml).find(".animate-hide-show-icon-img");

                for (var i = 0; hideshowButton.length > i; i++) {
                    if (typeof hideshowButton[i] != 'undefined' && hideshowButton[i]) {
                        bindEvent(hideshowButton[i], 'click', function (e) {
                            $(columnDiv).toggleClass('zit-widget-wrapper--new-panel-show');
                            for (var i = 0; hideshowIcon.length > i; i++) {
                                if (typeof hideshowIcon[i] != 'undefined' && hideshowIcon[i]) {
                                    if (hideshowIcon[i].className.includes("fa-chevron-up") || hideshowIcon[i].className.includes("fa-chevron-down")) {
                                        $(hideshowIcon[i]).toggleClass('fa-chevron-down');
                                        $(hideshowIcon[i]).toggleClass('fa-chevron-up');
                                    }
                                    else if (hideshowIcon[i].className.includes("fa-chevron-left") || hideshowIcon[i].className.includes("fa-chevron-right")) {
                                        $(hideshowIcon[i]).toggleClass('fa-chevron-left');
                                        $(hideshowIcon[i]).toggleClass('fa-chevron-right');
                                    }
                                }
                            }
                            for (var i = 0; hideshowIconImg.length > i; i++) {
                                if (typeof hideshowIconImg[i] != 'undefined' && hideshowIconImg[i]) {
                                    fn_setHideShowIconImg(hideshowIconImg[i]);
                                }
                            }
                        });
                    }
                }

                //**** expand/collapse button
                var expandCollapseButton = $(wrapperHtml).find('.animate-expand-collapse-button');
                for (var i = 0; expandCollapseButton.length > i; i++) {
                    if (typeof expandCollapseButton[i] != 'undefined' && expandCollapseButton[i]) {
                        //writeDebug('Hide Show Button ' + i + ' Initialized ' + config.key);
                        var timerExpCol;

                        if (isResponsiveCanvas) {
                            function setHeightOnResizeScreen() {
                                try {
                                    if (columnDiv && columnDiv[0]) {
                                        var btnPrtPrtNode = columnDiv[0].querySelector('.expand-collapse-canvas-content');
                                        if (btnPrtPrtNode) {
                                            var btnPrtNode;
                                            if (btnPrtPrtNode.className.includes('collapsed-canvas'))
                                                btnPrtNode = btnPrtPrtNode.querySelector('.widget-container-new-panel.collapsed-canvas-section');
                                            else
                                                btnPrtNode = btnPrtPrtNode.querySelector('.widget-container-new-panel.expanded-canvas-section');

                                            if (btnPrtNode) {
                                                btnPrtNode.style.height = 'auto';
                                                var heightNew = btnPrtNode.clientHeight; //$(btnPrtNode).height();

                                                btnPrtNode.style.height = heightNew + 'px';
                                                btnPrtPrtNode.style.height = heightNew + 'px';
                                            }
                                        }
                                    }
                                } catch (error) { }
                            }

                            if (i == 0) setHeightOnResizeScreen();

                            window.addEventListener('resize', function (event) {
                                setHeightOnResizeScreen();
                            }, false);
                        }


                        bindEvent(expandCollapseButton[i], 'click', function (e) {
                            try {
                                writeDebug('Expand Collapse Button Clicked '/* + config.key*/);
                                var btnNode = this;
                                var btnPrtNode = $(btnNode).closest('.widget-container-new-panel');
                                var btnPrtPrtNode = $(btnNode).closest('.expand-collapse-canvas-content');
                                var height = btnPrtNode.siblings().attr('data-height');
                                var w_id = reversewid;//WidgetConfig.wid;

                                if (isResponsiveCanvas) {
                                    btnPrtNode.css({ 'opacity': 0, 'height': '0px', 'min-height': '0px' });
                                    btnPrtNode.siblings().css({ 'opacity': 1, 'height': 'auto', 'min-height': height + 'px' });
                                    var heightNew = btnPrtNode.siblings().height();
                                    btnPrtNode.siblings().css({ 'height': heightNew + 'px' });
                                    btnPrtPrtNode.css({ 'height': heightNew + 'px', 'min-height': height + 'px' });
                                }
                                else {
                                    btnPrtNode.css({ 'opacity': 0, 'height': '0px' });
                                    btnPrtNode.siblings().css({ 'opacity': 1, 'height': height + 'px' });
                                    btnPrtPrtNode.css({ 'height': height + 'px' });
                                }

                                if (btnPrtNode.attr('data-expandable-type') === 'collapse') {
                                    btnPrtPrtNode.addClass('expanded-canvas');
                                    btnPrtPrtNode.removeClass('collapsed-canvas');

                                    btnNode.closest(".zit-widget-wrapper--new-panel").style.backgroundImage = "var(--bg-img-expand-wid-" + w_id + ")";
                                }
                                if (btnPrtNode.attr('data-expandable-type') === 'expand') {
                                    btnPrtPrtNode.addClass('collapsed-canvas');
                                    btnPrtPrtNode.removeClass('expanded-canvas');

                                    clearTimeout(timerExpCol);
                                    timerExpCol = setTimeout(function () {
                                        btnNode.closest(".zit-widget-wrapper--new-panel").style.backgroundImage = "var(--bg-img-collapse-wid-" + w_id + ")";
                                    }, 500);
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
                                    window.ZITFunctions.sendRaygunData(error, 'ExpandCollapseEvent-' /*+ config.key*/);
                            }
                        });
                    }
                }
            }
            if ($(divZedditRCM)[0] && $(divZedditRCM)[0].attributes['data-iscg'])
                isContentGate = $(divZedditRCM)[0].attributes['data-iscg'].value;
            if (window.SubxClientEvents && typeof window.SubxClientEvents.getLinkedCanvas != "undefined") {
                var html = "";
                var method = "";
                if (window.SubxExtCanvas && window.SubxExtCanvas != null && window.SubxExtCanvas.length > 0) {
                    window.SubxExtCanvas.forEach(function (curcanvas) {
                        if (curcanvas.widgetId == reversewid) {
                            window.ZITUtils.writeDebug("Canvas " + reversewid + " found!");
                            html = curcanvas.rcmHtml;
                            method = curcanvas.method;
                        }
                    });
                }
                if (html != "")
                    showCanvas(html, method);
                else
                    window.ZITUtils.writeDebug("Canvas " + reversewid + " not found!");
                try {
                    var containerWrapper = $(e).parent().closest('div.zit-widget-wrapper--new-panel');
                    if ($(containerWrapper) && $(containerWrapper)[0]) {
                        var wId = $(containerWrapper)[0].attributes['data-wid'].value;
                        window.ZITUtils.writeDebug("Going to record click " + wId + " " + e.innerText);
                        window.ZITFunctions.sendGAData(11, 'Action ' + e.innerText, wId, 'Membership', true, "Show canvas " + reversewid);
                    }
                    else
                        window.ZITUtils.writeDebug("containerWrapper not found!");
                }
                catch (error) {
                    if (window.ZITFunctions)
                        window.ZITFunctions.sendRaygunData(error, 'HideShowLinkClick-SendData' + reversewid);
                }
            }
            else {
                var accessBaseUrl = 'https://entrytest.zeddit.com';
                //if (isContentGate == 1)
                //    accessBaseUrl = 'https://accesscanvas.zeddit.com';
                apiUrl = accessBaseUrl + '/Widget/GetCustomWidget' + ((isDNT == 1) ? 'DNT' : '') + '?p_id=' + pid + '&wid=' + reversewid + '&isContentGate=' + isContentGate + '&host=' + window.location.href; //'&lc=1'

                $.ajax({
                    type: "GET",
                    url: apiUrl, //chkId,
                    processdata: false,
                    async: true,
                    dataType: "json",
                    success: function (result) {
                        if (buttonControl)
                            buttonLoader.hide();

                        if (isTransitionEffect === "true") {
                            $(wrapperHtml).css({ "visibility": "hidden", "opacity": "0", "transition": "visibility 0s linear 0.33s, opacity 0.33s linear" });
                            setTimeout(showCanvas, 1000, result.response.rcmHtml, result.response.method);
                        } else {
                            showCanvas(result.response.rcmHtml, result.response.method);
                        }
                    },
                    error: function (err) {
                        if (buttonControl)
                            buttonLoader.hide();
                    }
                });
            }
        }
        catch (error) {
            if (buttonControl)
                buttonLoader.hide();
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'HideShowLinkClick-' + reversewid);
        }
    };

    function fn_setHideShowIconImg(hideshowIconImg) {
        if (typeof hideshowIconImg != 'undefined' && hideshowIconImg) {
            var rotate = hideshowIconImg.dataset.rotate;
            var angle = hideshowIconImg.dataset.angle;
            rotate = parseFloat(rotate) + (rotate === angle ? 180 : 0);
            hideshowIconImg.dataset.angle = rotate;
            $(hideshowIconImg).css("transform", "rotate(" + rotate + "deg)");
        }
    }

    window.handleHideShowPopupLinkClick = function (e) {
        var reversewid = 0;
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            var buttonLoader = {};
            var buttonControl = false;

            var apiUrl = "";
            var brandUrl = "";
            var pid = 0;
            var isDNT = 0;
            if (window.ZITFunctions)
                isDNT = window.ZITFunctions.isDNT || 0;
            if ($(e).context !== undefined && $(e).context.attributes !== undefined) {
                pid = $(e).context.attributes['data-pid'].nodeValue;
                reversewid = $(e).context.attributes['data-reversewid'].nodeValue || 0;
            }
            else if ($(e)[0] !== undefined && $(e)[0].attributes !== undefined) {
                pid = $(e)[0].attributes['data-pid'].nodeValue;
                reversewid = $(e)[0].attributes['data-reversewid'].nodeValue || 0;
            }
            else {
                return;
            }
            //var pid = $(e).context.attributes['data-pid'].nodeValue;
            //reversewid = $(e).context.attributes['data-reversewid'].nodeValue || 0;
            if (reversewid <= 0) {
                if (window.ZITFunctions)
                    window.ZITFunctions.sendRaygunData(new Error("reversewid is 0"), 'HideShowPopupLinkClick-' + pid);
                return;
            };

            var divZedditRCM = $(e).parent().closest('div.zeddit-rcm'); //$(e).parent().closest('div').parent().closest('div').parent().closest('div').parent().closest('div');
            var wrapperHtml = $(e).parent().closest('div.js-zitWidgetWrapper'); //$(e).parent().closest('div').parent().closest('div').parent().closest('div');

            try {
                buttonLoader = new getCanvasButtonLoader($(e));
                buttonControl = true;
                buttonLoader.show();
            }
            catch (error) { }

            var isContentGate = 0;
            if ($(divZedditRCM)[0] && $(divZedditRCM)[0].attributes['data-iscg'])
                isContentGate = $(divZedditRCM)[0].attributes['data-iscg'].value;
            var accessBaseUrl = 'https://entrytest.zeddit.com';
            //if (isContentGate == 1)
            //    accessBaseUrl = 'https://accesscanvas.zeddit.com';
            apiUrl = accessBaseUrl + '/Widget/GetCustomWidget' + ((isDNT == 1) ? 'DNT' : '') + '?p_id=' + pid + '&wid=' + reversewid + '&isContentGate=' + isContentGate + '&host=' + window.location.href;
            $.ajax({
                type: "GET",
                url: apiUrl, //chkId,
                processdata: false,
                async: true,
                dataType: "json",
                success: function (result) {
                    if (buttonControl)
                        buttonLoader.hide();

                    var strRCMHtml = result.response.rcmHtml;
                    var wrapper1Html = $(divZedditRCM).find(".zitWidgetWrapper1");
                    if (wrapper1Html.length <= 0) {
                        $(divZedditRCM).append('<div class="js-zitWidgetWrapper zitWidgetWrapper1">' + strRCMHtml + '</div>');
                        wrapper1Html = $(divZedditRCM).find(".zitWidgetWrapper1");
                    } else {
                        $(wrapper1Html).html('');
                        $(wrapper1Html).html(strRCMHtml);
                    }
                    if (typeof window.LoadCanvasFormValidate !== "undefined") {
                        window.LoadCanvasFormValidate();
                    };
                    if (window.ZITFunctions) {
                        window.ZITFunctions.sendGAData(80, 'Why Register', reversewid, false);
                    }
                    //var mfp = $.magnificPopup;
                    //var closeButton = $(wrapper1Html).find(".animate-close");
                    //for (var i = 0; closeButton.length > i; i++) {
                    //    if (typeof closeButton[i] != 'undefined' && closeButton[i]) {
                    //        bindEvent(closeButton[i], 'click', function (e) {
                    //            mfp.close();
                    //        });
                    //    }
                    //}
                    //mfp.open({
                    //    items: {
                    //        src: '#inline-popup'
                    //    },
                    //    type: 'inline',
                    //    removalDelay: 500,
                    //    midClick: false,
                    //    closeOnBgClick: false,
                    //    showCloseBtn: false
                    //});

                    var container = document.querySelector('.exit-intent-popup');
                    var closeButton = $(wrapper1Html).find(".animate-close");
                    for (var i = 0; closeButton.length > i; i++) {
                        if (typeof closeButton[i] != 'undefined' && closeButton[i]) {
                            bindEvent(closeButton[i], 'click', function (e) {
                                if (container && container.classList) {
                                    if (container.classList.contains('visible')) {
                                        container.classList.remove('visible');
                                        window.ZITFunctions.sendGAData(0, 'CloseModal', reversewid, 'Canvas', false);
                                    }
                                }
                            });
                        }
                    }

                    if (container && container.classList) {
                        container.classList.add('visible');
                    }

                    window.initializeCanvasMethods($(wrapper1Html)[0]);
                },
                error: function (error) {
                    if (buttonControl)
                        buttonLoader.hide();
                    if (window.ZITFunctions)
                        window.ZITFunctions.sendRaygunData(error, 'GetCustomWidget-' + reversewid);
                }
            });
        }
        catch (error) {
            if (buttonControl)
                buttonLoader.hide();
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'HideShowPopupLinkClick-' + reversewid);
        }
    };

    //window.subxNewsletter = [];
    //var subxNewsletterWidgetIdExistsCheck = function (widgetId) {
    //    var widList = window.subxNewsletter.filter(function (wid) {
    //        return wid === widgetId;
    //    });
    //    if (widList.length <= 0) {
    //        window.subxNewsletter.push(widgetId);
    //    }
    //};

    window.handleTextCheckboxChange = function (e) {
        var widgetId = 0;
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            try { widgetId = e.attributes["data-wid"] === undefined ? '' : e.attributes["data-wid"].nodeValue; }
            catch { }

            //subxNewsletterWidgetIdExistsCheck(widgetId);
            //var clsTextCheckboxAndWId = [];
            //if (window.subxNewsletter) {
            //    window.subxNewsletter.forEach(wid => {
            //        clsTextCheckboxAndWId.push('.cls-text-checkbox.wid-' + wid);
            //    })
            //} else {
            //    clsTextCheckboxAndWId.push('.cls-text-checkbox.wid-' + widgetId);
            //}
            ////var checkboxeList = document.querySelectorAll('.cls-text-checkbox.wid-' + widgetId);
            //var checkboxeList = document.querySelectorAll(clsTextCheckboxAndWId);
            var checkboxeList = document.querySelectorAll('.cls-text-checkbox');
            var checkedCount = [];
            if (checkboxeList && checkboxeList.length > 0) {
                checkedCount = Array.from(checkboxeList).filter(function (checkbox) {
                    return checkbox.checked;
                });
            }

            var textNods = document.querySelectorAll('#checkbox_count');
            if (textNods && textNods.length > 0) {
                textNods.forEach(text => {
                    text.innerHTML = checkedCount.length;
                })
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'HideShowLinkClick-' + widgetId);
        }
    };

    window.handleTextTitleCheckboxChange = function (e) {
        var widgetId = 0;
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            try { widgetId = e.attributes["data-wid"] === undefined ? '' : e.attributes["data-wid"].nodeValue; }
            catch { }

            var mainDivNods = e.closest(canvasSectionDivsArray);
            window.initializeUpdateButtonTextWhenCheckboxCheckedFunction(mainDivNods);
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'TextTitleCheckboxChange-' + widgetId);
        }
    };

    window.handleSelectAllCheckboxClick = function (e) {
        var widgetId = 0;
        try {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            try { widgetId = e.attributes["data-wid"] === undefined ? '' : e.attributes["data-wid"].nodeValue; }
            catch { }

            var checkboxeList = document.querySelectorAll('.cls-text-checkbox.wid-' + widgetId);
            var checkedCount = [];
            if (checkboxeList && checkboxeList.length > 0) {
                checkedCount = Array.from(checkboxeList).filter(function (checkbox) {
                    return checkbox.checked;
                });

                if (checkedCount.length == checkboxeList.length) {
                    checkboxeList.forEach(function (checkbox) {
                        checkbox.checked = false;
                    });
                } else {
                    checkboxeList.forEach(function (checkbox) {
                        checkbox.checked = true;
                    });
                }

                //checkedCount = Array.from(checkboxeList).filter(function (checkbox) {
                //    return checkbox.checked;
                //});
            }

            //subxNewsletterWidgetIdExistsCheck(widgetId);
            //var clsTextCheckboxAndWId = [];
            //if (window.subxNewsletter) {
            //    window.subxNewsletter.forEach(wid => {
            //        clsTextCheckboxAndWId.push('.cls-text-checkbox.wid-' + wid);
            //    })
            //} else {
            //    clsTextCheckboxAndWId.push('.cls-text-checkbox.wid-' + widgetId);
            //}
            //checkboxeList = document.querySelectorAll(clsTextCheckboxAndWId);
            checkboxeList = document.querySelectorAll('.cls-text-checkbox');
            if (checkboxeList && checkboxeList.length > 0) {
                checkedCount = Array.from(checkboxeList).filter(function (checkbox) {
                    return checkbox.checked;
                });
            }

            var textNods = document.querySelectorAll('#checkbox_count');
            if (textNods && textNods.length > 0) {
                textNods.forEach(text => {
                    text.innerHTML = checkedCount.length;
                })
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'handleSelectAllCheckboxClick-' + widgetId);
        }
    };

    //for loader buttton
    var getCanvasButtonLoader = function (caller) {
        return new CanvasButtonLoader(caller);
    };

    var CanvasButtonLoader = function (caller) {
        var self = this, c = caller, p = c.parent();
        self.show = function () {
            try {
                if (c.hasClass('canvas-loading-btn')) {
                    c.attr('data-loading', '');
                    c.attr('disabled', '');
                } else {//Simple fallback
                    if (p.hasClass('canvas-loading-btn')) {
                        p.attr('data-loading', '');
                        p.attr('disabled', '');
                    }
                }
            }
            catch (error) {

            }
        };
        self.hide = function () {
            if (c.hasClass('canvas-loading-btn')) {
                c.removeAttr('data-loading', '');
                c.removeAttr('disabled', '');
            } else {//Simple fallback
                if (p.hasClass('canvas-loading-btn')) {
                    p.removeAttr('data-loading', '');
                    p.removeAttr('disabled', '');
                }
            }
        };
    };

    var bindEvent = function (el, event, fn) {
        if (window.addEventListener) {
            el.addEventListener(event, fn, false);
        } else {
            el.attachEvent(event, fn);
        }
    };

    ////****countdown time commnet
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    ////****countdown time commnet
    window.initializeCountdownClock = function (widgetContainer) {
        try {
            var timeinterval;
            //const clock = document.getElementsByClassName(id);
            (function ($) {
                const clock = widgetContainer.querySelectorAll('.countdown-timediv');
                $(clock).each(function () {

                    const daysSpan = this.querySelector('.countdown-days');
                    const colon1Span = this.querySelector('.countdown-colon-1');
                    const hoursSpan = this.querySelector('.countdown-hours');
                    const colon2Span = this.querySelector('.countdown-colon-2');
                    const minutesSpan = this.querySelector('.countdown-minutes');
                    //const secondsSpan = clock.querySelector('.countdown-seconds');

                    //var endtime = $($(this)).context.attributes['data-enddate'].nodeValue;
                    var endtime = this.attributes["data-enddate"].nodeValue;
                    if (endtime !== "" && endtime !== null && endtime !== undefined) {

                        function updateClock() {
                            const t = getTimeRemaining(endtime);
                            daysSpan.innerHTML = t.days < 1 ? '' : t.days + (t.days > 1 ? ' DAYS' : ' DAY');
                            colon1Span.innerHTML = t.days < 1 ? '' : ', ';
                            hoursSpan.innerHTML = t.hours < 1 ? '' : t.hours + (t.hours > 1 ? ' HOURS' : ' HOUR');
                            colon2Span.innerHTML = t.hours < 1 ? '' : ', ';
                            minutesSpan.innerHTML = t.minutes + (t.minutes > 1 ? ' MINS' : ' MIN');
                            //secondsSpan.innerHTML = ('0' + t.seconds).slice(-2) + t.seconds > 1 ? ' seconds' : ' second';
                            if (t.total <= 0) {
                                clearInterval(timeinterval);
                                daysSpan.innerHTML = '';
                                colon1Span.innerHTML = '';
                                hoursSpan.innerHTML = '';
                                colon2Span.innerHTML = '';
                                minutesSpan.innerHTML = '0 MIN';
                            }

                            $(daysSpan).css("display", "inline");
                            $(colon1Span).css("display", "inline");
                            $(hoursSpan).css("display", "inline");
                            $(colon2Span).css("display", "inline");

                            if (daysSpan.innerHTML === '') {
                                $(daysSpan).css("display", "none");
                            }
                            if (colon1Span.innerHTML === '') {
                                $(colon1Span).css("display", "none");
                            }
                            if (hoursSpan.innerHTML === '') {
                                $(hoursSpan).css("display", "none");
                            }
                            if (colon2Span.innerHTML === '') {
                                $(colon2Span).css("display", "none");
                            }
                        }
                        updateClock();
                        timeinterval = setInterval(updateClock, 1000);
                    }
                });
            })(jQuery);
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeCountdownClock');
        }
    };

    ////****countdown time commnet
    window.timeIntervalCdTimer = window.timeIntervalCdTimer ? window.timeIntervalCdTimer : {};
    window.initializeCountdownClockNew = function (widgetContainer) {
        try {
            (function ($) {
                const clock = widgetContainer.querySelectorAll('.countdown-timer-main-div');
                //const clock = document.getElementsByClassName(id);
                $(clock).each(function () {

                    const daysDiv = this.querySelector('.countdown-timer-div.days-div');
                    const hoursDiv = this.querySelector('.countdown-timer-div.hours-div');
                    const minutesDiv = this.querySelector('.countdown-timer-div.minutes-div');
                    const secondsDiv = this.querySelector('.countdown-timer-div.seconds-div');

                    const daysTextDiv = this.querySelector('.countdown-timer-text.days-text');
                    const hoursTextDiv = this.querySelector('.countdown-timer-text.hours-text');
                    const minutesTextDiv = this.querySelector('.countdown-timer-text.minutes-text');
                    const secondsTextDiv = this.querySelector('.countdown-timer-text.seconds-text');

                    const daysValDiv = this.querySelector('.countdown-timer-val.days-val');
                    const hoursValDiv = this.querySelector('.countdown-timer-val.hours-val');
                    const minutesValDiv = this.querySelector('.countdown-timer-val.minutes-val');
                    const secondsValDiv = this.querySelector('.countdown-timer-val.seconds-val');

                    const daysColon = this.querySelector('.countdown-timer-colon.days-colon');
                    const hoursColon = this.querySelector('.countdown-timer-colon.hours-colon');
                    const minutesColon = this.querySelector('.countdown-timer-colon.minutes-colon');

                    var version = "";
                    var totalSeconds = 0;
                    var endtime = "";
                    var w_id = 0;
                    if (this.attributes && this.attributes["data-wid"]) {
                        w_id = this.attributes["data-wid"].nodeValue;
                    }
                    var cookieTimerName = "countdown.v3.timer." + w_id;

                    if (this.attributes && this.attributes["data-version"]) {
                        version = this.attributes["data-version"].nodeValue;
                    }

                    if (version == "3") {
                        if (this.attributes && this.attributes["data-totalseconds"]) {
                            totalSeconds = this.attributes["data-totalseconds"].nodeValue;
                        }

                        //var cookieTimerSeconds = readCookie(cookieTimerName) || 0;
                        //if (parseInt(cookieTimerSeconds) > 0) {
                        //    totalSeconds = cookieTimerSeconds;
                        //}
                        //var newDate = new Date();
                        //newDate.setTime(newDate.getTime() + (totalSeconds * 1000)); //mileseconds
                        //createCookieinDetails(cookieTimerName, (parseInt(totalSeconds)), 365, 0, 0, 0);
                        //endtime = newDate;

                        var cookieTimerSeconds = readCookie(cookieTimerName) || 0;
                        if (parseInt(cookieTimerSeconds) > 0 && parseInt(totalSeconds) > parseInt(cookieTimerSeconds)) {
                            totalSeconds = totalSeconds - cookieTimerSeconds;
                        }
                        else if (parseInt(totalSeconds) <= parseInt(cookieTimerSeconds)) {
                            createCookieinDetails(cookieTimerName, 0, 365, 0, 0, 0);
                        }
                        var newDate = new Date();
                        newDate.setTime(newDate.getTime() + (totalSeconds * 1000)); //mileseconds
                        endtime = newDate;
                    }
                    else {
                        endtime = this.attributes["data-enddate"].nodeValue;
                    }

                    if (endtime !== "" && endtime !== null && endtime !== undefined) {
                        function updateClock() {

                            const t = getTimeRemaining(endtime);

                            if (t.days < 1) {
                                daysTextDiv.innerHTML = "";
                                daysValDiv.innerHTML = "";
                                $(daysDiv).css("display", "none");
                                if (daysColon) $(daysColon).css("display", "none");
                            }
                            else {
                                daysTextDiv.innerHTML = t.days > 1 ? ' Days' : ' Day';
                                daysValDiv.innerHTML = (t.days < 10 ? '0' : '') + t.days;
                                $(daysDiv).css("display", "inline");
                                if (daysColon) $(daysColon).css("display", "inline");
                            }

                            if (t.days < 1 && t.hours < 1) {
                                hoursTextDiv.innerHTML = "";
                                hoursValDiv.innerHTML = "";
                                $(hoursDiv).css("display", "none");
                                if (hoursColon) $(hoursColon).css("display", "none");
                            }
                            else {
                                hoursTextDiv.innerHTML = t.hours > 1 ? ' Hours' : ' Hour';
                                hoursValDiv.innerHTML = (t.hours < 10 ? '0' : '') + t.hours;
                                $(hoursDiv).css("display", "inline");
                                if (hoursColon) $(hoursColon).css("display", "inline");
                            }

                            if (t.days < 1 && t.hours < 1 && t.minutes < 1) {
                                minutesTextDiv.innerHTML = "";
                                minutesValDiv.innerHTML = "";
                                $(minutesDiv).css("display", "none");
                                if (minutesColon) $(minutesColon).css("display", "none");
                            }
                            else {
                                minutesTextDiv.innerHTML = t.minutes > 1 ? ' Mins' : ' Min';
                                minutesValDiv.innerHTML = (t.minutes < 10 ? '0' : '') + t.minutes;
                                $(minutesDiv).css("display", "inline");
                                if (minutesColon) $(minutesColon).css("display", "inline");
                            }

                            if (t.seconds < 1) {
                                secondsTextDiv.innerHTML = "Sec";
                                secondsValDiv.innerHTML = "00";
                                $(secondsDiv).css("display", "inline");
                            }
                            else {
                                secondsTextDiv.innerHTML = t.seconds > 1 ? ' Secs' : ' Sec';
                                secondsValDiv.innerHTML = (t.seconds < 10 ? '0' : '') + t.seconds;
                                $(secondsDiv).css("display", "inline");
                            }

                            if (t.total <= 0) {
                                clearInterval(window.timeIntervalCdTimer[w_id]);
                                if (version == "3") {
                                    createCookieinDetails(cookieTimerName, 0, 365, 0, 0, 0);
                                }
                            }
                            else {
                                if (version == "3") {
                                    var cookieTimerSeconds = readCookie(cookieTimerName) || 0;
                                    if (parseInt(cookieTimerSeconds) >= 0) {
                                        cookieTimerSeconds = parseInt(cookieTimerSeconds) + 1;
                                        createCookieinDetails(cookieTimerName, parseInt(cookieTimerSeconds), 365, 0, 0, 0);
                                    }
                                }
                            }
                        }
                        updateClock();
                        window.timeIntervalCdTimer[w_id] = setInterval(updateClock, 1000);
                    }
                });
            })(jQuery);
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeCountdownClockNew');
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

    function checkStrength(passwordDiv) {
        const txtPassword = passwordDiv.querySelector('#txtpassword');
        var clsLowCase = passwordDiv.querySelector('.canvas-low-case');
        var clsLowCaseI = passwordDiv.querySelector('.canvas-low-case i');
        var clsUpperCase = passwordDiv.querySelector('.canvas-upper-case');
        var clsUpperCaseI = passwordDiv.querySelector('.canvas-upper-case i');
        var clsOneNumber = passwordDiv.querySelector('.canvas-one-number');
        var clsOneNumberI = passwordDiv.querySelector('.canvas-one-number i');
        var clsOneSpecialChar = passwordDiv.querySelector('.canvas-one-special-char');
        var clsOneSpecialCharI = passwordDiv.querySelector('.canvas-one-special-char i');
        var clsEightCharacter = passwordDiv.querySelector('.canvas-eight-character');
        var clsEightCharacterI = passwordDiv.querySelector('.canvas-eight-character i');
        var divResult = passwordDiv.querySelector('#canvas-result');
        var divPasswordStrength = passwordDiv.querySelector('#canvas-password-strength');
        var divPopoverPassword = passwordDiv.querySelector('#canvas-popover-password');
        var divPopoverTipsPassword = passwordDiv.querySelector('#canvas-popover-password-tips');
        var divCanvasListUnstyled = passwordDiv.querySelector('.canvas-list-unstyled');

        var password = txtPassword.value;
        var strength = 0;

        try {
            var validationTipsType = txtPassword && txtPassword.attributes && txtPassword.attributes["data-tips-type"] && txtPassword.attributes["data-tips-type"].nodeValue;
        } catch (e) { }

        if (divPopoverPassword && validationTipsType !== 'VT') {
            $(divPopoverPassword).css('display', password === "" ? 'none' : 'block');
        }
        if (divPopoverTipsPassword && validationTipsType !== 'VT') {
            $(divPopoverTipsPassword).css('display', password === "" ? 'none' : 'block');
        }
        //If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/[a-z]/)) { //(/([a-z].*[A-Z])|([A-Z].*[a-z])/)
            strength += 1;
            if (clsLowCase && clsLowCaseI) {
                $(clsLowCase).addClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsLowCaseI).removeClass('fa-plus').addClass('fa-check');
                //$('#popover-password-top').addClass('hide');
            }
        } else {
            if (clsLowCase && clsLowCaseI) {
                $(clsLowCase).removeClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsLowCaseI).addClass('fa-plus').removeClass('fa-check');
                //$('#popover-password-top').removeClass('hide');
            }
        }

        //If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/[A-Z]/)) {
            strength += 1;
            if (clsUpperCase && clsUpperCaseI) {
                $(clsUpperCase).addClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsUpperCaseI).removeClass('fa-plus').addClass('fa-check');
                //$('#popover-password-top').addClass('hide');
            }
        } else {
            if (clsUpperCase && clsUpperCaseI) {
                $(clsUpperCase).removeClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsUpperCaseI).addClass('fa-plus').removeClass('fa-check');
                //$('#popover-password-top').removeClass('hide');
            }
        }

        //If it has numbers and characters, increase strength value.
        if (password.match(/([0-9])/)) { //password.match(/([a-zA-Z])/) && 
            strength += 1;
            if (clsOneNumber && clsOneNumberI) {
                $(clsOneNumber).addClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsOneNumberI).removeClass('fa-plus').addClass('fa-check');
                //$('#popover-password-top').addClass('hide');
            }
        } else {
            if (clsOneNumber && clsOneNumberI) {
                $(clsOneNumber).removeClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsOneNumberI).addClass('fa-plus').removeClass('fa-check');
                //$('#popover-password-top').removeClass('hide');
            }
        }

        //If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            strength += 1;
            if (clsOneSpecialChar && clsOneSpecialCharI) {
                $(clsOneSpecialChar).addClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsOneSpecialCharI).removeClass('fa-plus').addClass('fa-check');
                //$('#popover-password-top').addClass('hide');
            }
        } else {
            if (clsOneSpecialChar && clsOneSpecialCharI) {
                $(clsOneSpecialChar).removeClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsOneSpecialCharI).addClass('fa-plus').removeClass('fa-check');
                //$('#popover-password-top').removeClass('hide');
            }
        }

        if (password.length > 7) {
            strength += 1;
            if (clsEightCharacter && clsEightCharacterI) {
                $(clsEightCharacter).addClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsEightCharacterI).removeClass('fa-plus').addClass('fa-check');
                //$('#popover-password-top').addClass('hide');
            }
        } else {
            if (clsEightCharacter && clsEightCharacterI) {
                $(clsEightCharacter).removeClass('canvas-text-success');
                if (validationTipsType !== 'VT') $(clsEightCharacterI).addClass('fa-plus').removeClass('fa-check');
                //$('#popover-password-top').removeClass('hide');
            }
        }

        if (divResult && divPasswordStrength && validationTipsType !== 'VT') {
            if (divCanvasListUnstyled) {
                $(divCanvasListUnstyled).css('display', 'block');
            }
            // If value is less than 3
            if (strength < 3) {
                $(divResult).removeClass()
                $(divPasswordStrength).removeClass('canvas-progress-bar-success');
                $(divPasswordStrength).removeClass('canvas-progress-bar-warning');
                $(divPasswordStrength).addClass('canvas-progress-bar-danger');

                $(divResult).addClass('canvas-text-danger').text('Weak');
                $(divPasswordStrength).css('width', '10%');
            } else if (strength == 3) {
                $(divResult).addClass('canvas-good');
                $(divPasswordStrength).removeClass('canvas-progress-bar-danger');
                $(divPasswordStrength).removeClass('canvas-progress-bar-success');
                $(divPasswordStrength).addClass('canvas-progress-bar-warning');

                $(divResult).addClass('canvas-text-warning').text('Medium')
                $(divPasswordStrength).css('width', '60%');
                return 'Medium'
            } else if (strength == 5) {
                $(divResult).removeClass()
                $(divResult).addClass('canvas-strong');
                $(divPasswordStrength).removeClass('canvas-progress-bar-danger');
                $(divPasswordStrength).removeClass('canvas-progress-bar-warning');
                $(divPasswordStrength).addClass('canvas-progress-bar-success');

                $(divResult).addClass('canvas-text-success').text('Strong');
                $(divPasswordStrength).css('width', '100%');

                if (divCanvasListUnstyled) {
                    $(divCanvasListUnstyled).css('display', 'none');
                }
                return 'Strong'
            }
        }
    }

    window.initializeTogglePassword = function (widgetContainer) {
        const passwordDiv = widgetContainer.querySelector('#password');
        try {
            if (passwordDiv) {
                $(passwordDiv).each(function () {
                    const password = this.querySelector('#txtpassword');
                    const togglePassword = this.querySelector('#togglePassword');
                    if (togglePassword) {
                        togglePassword.addEventListener('click', function (e) {
                            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                            password.setAttribute('type', type);
                            this.classList.toggle('fa-eye-slash');
                        });
                    }
                    if (password) {
                        password.addEventListener('keyup', function (e) {
                            if (checkStrength(passwordDiv) == false) {
                                // $('#sign-up').attr('disabled', true);
                            }
                        });
                    }
                });
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeTogglePassword');
        }
    };

    window.initializeCanvasDropDown = function (widgetContainer) {
        try {
            var container = widgetContainer.querySelectorAll(".canvas-custom-select-wrapper");
            if (container) {
                $(container).each(function () {
                    this.addEventListener('click', function () {
                        this.querySelector('.canvas-custom-select').classList.toggle('canvas-open');
                    })
                });
            }

            var container2 = widgetContainer.querySelectorAll(".canvas-custom-option");
            if (container2) {
                $(container2).each(function () {
                    this.addEventListener('click', function () {
                        if (!this.classList.contains('canvas-selected')) {
                            this.parentNode.querySelector('.canvas-custom-option.canvas-selected').classList.remove('canvas-selected');
                            this.classList.add('canvas-selected');
                            this.closest('.canvas-custom-select').querySelector('.canvas-custom-select__trigger span').textContent = this.textContent;
                        }
                    })
                });
            }
            window.addEventListener('click', function (e) {
                var container3 = widgetContainer.querySelectorAll('.canvas-custom-select');
                if (container3) {
                    $(container3).each(function () {
                        if (!this.contains(e.target)) {
                            this.classList.remove('canvas-open');
                        }
                    });
                }
            });
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeCanvasDropDown');
        }
    };

    window.initializeCanvasInputValidation = function (widgetContainer) {
        try {
            var containers1 = widgetContainer.querySelectorAll("#txtfullName, #txtfirstName");
            if (containers1) {
                $(containers1).each(function () {
                    this.addEventListener('keypress', function (evt) {
                        var keyCode = (evt.which) ? evt.which : evt.keyCode
                        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32) {
                            evt.preventDefault();
                            return false;
                        }
                        return true;
                    });
                });
            }
            var containers2 = widgetContainer.querySelectorAll("#txtsurName");
            if (containers2) {
                $(containers2).each(function () {
                    this.addEventListener('keypress', function (evt) {
                        var keyCode = (evt.which) ? evt.which : evt.keyCode
                        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32 && keyCode != 45) {
                            evt.preventDefault();
                            return false;
                        }
                        return true;
                    });
                });
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeCanvasInputValidation');
        }
    };

    window.initializeCommonFunction = function (widgetContainer) {
        try {
            //add version in Image tag
            var imgNods = widgetContainer.querySelectorAll('img');
            if (imgNods) {
                for (var i = 0; i < imgNods.length; i++) {
                    if (imgNods[i].attributes && imgNods[i].attributes['src']) {
                        imgNods[i].attributes['src'].nodeValue += "?" + Date.parse(new Date());// Math.random();
                    }
                }
            }

            var btnPostNods = widgetContainer.querySelectorAll('#buttonGroupPost');
            if (btnPostNods) {
                for (var i = 0; i < btnPostNods.length; i++) {
                    btnPostNods[i].addEventListener('click', function (e) {
                        try {
                            //e.preventDefault();
                            //var eleForm = this.closest("#formCanvas");
                            //$(eleForm).submit();
                            var eleForm = this.closest(".widget-container-new-panel");
                            if (eleForm != null && eleForm.length > 0)
                                eleForm[0].getElementById("formCanvas").submit();
                        } catch (error) { window.ZITFunctions.sendRaygunData(error, 'PostButtonError'); }
                    })
                }
            }

            ////enable get button
            //$getbutton = $(widgetContainer).find("#buttonGroup, button[data-id='actionButton']");
            //$getbutton.removeClass('canvas-btn-disabled');

            ////enable logout button
            //$loginbutton = $(widgetContainer).find("#buttonGroupLogout, button[data-id='actionButtonLogout']");
            //$loginbutton.removeClass('canvas-btn-disabled');

            ////enable logout button
            //$externalbutton = $(widgetContainer).find("#buttonGroupExternalLink, .btn-group-external-link");
            //$externalbutton.removeClass('canvas-btn-disabled');
            var enableButtons = "#buttonGroup, button[data-id='actionButton'], #buttonGroupLogout, button[data-id='actionButtonLogout'], #buttonGroupExternalLink, button[data-id='actionExternalLinkButton'], .btn-group-external-link";
            try {
                var $getbutton = widgetContainer.querySelectorAll(enableButtons);
                if ($getbutton && $getbutton.length > 0) {
                    $getbutton.forEach(x => {
                        x.classList.remove('canvas-btn-disabled');
                    });
                }
            } catch (e) {
                $getbutton = $(widgetContainer).find(enableButtons);
                $getbutton.removeClass('canvas-btn-disabled');
            }

            // initialise plugin
            var telInput = $(widgetContainer).find("#txtphoneNumber");
            if (telInput && typeof telInput.intlTelInput == "function") {
                telInput.intlTelInput({
                    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
                });
            }
            else
                window.ZITUtils.writeDebug("No telInput control founds");
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeCommonFunction');
        }
    };

    var textObjects = ['#title', '#title_2', '#title_3', '#title_4', '#title_5', '#title_6', '#title_7', '#title_8', '#title_9', '#title_10',
        '#title11', '#title_12', '#title_13', '#title_14', '#title_15', '#title_16', '#title_17', '#title_18', '#title_19', '#title_20',
        '#sub-title', '#sub-title_2', '#sub-title_3', '#sub-title_4', '#sub-title_5', '#sub-title_6', '#sub-title_7', '#sub-title_8', '#sub-title_9', '#sub-title_10',
        '#sub-title11', '#sub-title_12', '#sub-title_13', '#sub-title_14', '#sub-title_15', '#sub-title_16', '#sub-title_17', '#sub-title_18', '#sub-title_19', '#sub-title_20',
        '#body', '#body2', '#body3', '#body4', '#body5', '#body6', '#body7', '#body8', '#body9', '#body10',
        '#body11', '#body12', '#body13', '#body14', '#body15', '#body16', '#body17', '#body18', '#body19', '#body20',
        '#buttonGroup', '#splash'];

    window.initializeReplacePageNumberFunction = function (widgetContainer) {
        try {
            var pageNumberCookies = '';
            var cookieSXO = readCookie("_sxo") || '';
            if (cookieSXO) {
                var jsonData = JSON.parse(cookieSXO);
                if (jsonData && jsonData.RA) {
                    pageNumberCookies = jsonData.RA;
                }
                else
                    pageNumberCookies = '0';
            }

            var textNods = widgetContainer.querySelectorAll(textObjects);
            if (textNods) {
                for (var i = 0; i < textNods.length; i++) {
                    //var defaultText = '';
                    //if (textNods[i].attributes && textNods[i].attributes['data-defaulttext']) {
                    //    defaultText = textNods[i].attributes['data-defaulttext'].nodeValue;
                    //}
                    if (pageNumberCookies) {
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{{p}}', pageNumberCookies);
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{p}', pageNumberCookies);
                    }
                    //else {
                    //    textNods[i].innerHTML = textNods[i].innerHTML.replace('{{p}}', defaultText);
                    //}
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeReplacePageNumberFunction');
        }
    };

    window.initializeReplacePriceFunction = function (widgetContainer) {
        try {
            var priceCookies = '';
            //var cookieSXO = readCookie("_sxo") || '';
            //if (cookieSXO) {
            //    var jsonData = JSON.parse(cookieSXO);
            //    if (jsonData && jsonData.RA) {
            //        priceCookies = jsonData.RA;
            //    }
            //    else
            //        priceCookies = 0;
            //}

            var textNods = widgetContainer.querySelectorAll(textObjects);
            if (textNods) {
                for (var i = 0; i < textNods.length; i++) {
                    if (priceCookies) {
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{{v}}', priceCookies);
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{v}', priceCookies);
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeReplacePriceFunction');
        }
    };

    window.initializeReplacePrice1Function = function (widgetContainer) {
        try {
            var priceCookies = '';
            var textNods = widgetContainer.querySelectorAll(textObjects);
            if (textNods) {
                for (var i = 0; i < textNods.length; i++) {
                    if (priceCookies) {
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{{v1}}', priceCookies);
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{v1}', priceCookies);
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeReplacePrice1Function');
        }
    };

    window.initializeReplaceDiscountFunction = function (widgetContainer) {
        try {
            var discountCookies = '';
            //var cookieSXO = readCookie("_sxo") || '';
            //if (cookieSXO) {
            //    var jsonData = JSON.parse(cookieSXO);
            //    if (jsonData && jsonData.RA) {
            //        discountCookies = jsonData.RA;
            //    }
            //    else
            //        discountCookies = 0;
            //}

            var textNods = widgetContainer.querySelectorAll(textObjects);
            if (textNods) {
                for (var i = 0; i < textNods.length; i++) {
                    if (discountCookies) {
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{{d}}', discountCookies);
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{d}', discountCookies);
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeReplaceDiscountFunction');
        }
    };

    window.initializeReplaceArticleNameFunction = function (widgetContainer) {
        try {
            window.ZITUtils.writeDebug("calling initializeReplaceArticleNameFunction ");
            var textNods = widgetContainer.querySelectorAll(textObjects);
            if (textNods) {
                for (var i = 0; i < textNods.length; i++) {
                    var promoText = '';
                    if (textNods[i].attributes && textNods[i].attributes['data-vxa-defaulttext']) {
                        promoText = textNods[i].attributes['data-vxa-defaulttext'].nodeValue;
                    }
                    var articleName = getPromoTextWithArticleHeadline(promoText);
                    if (articleName) {
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{{vxA}}', articleName);
                        textNods[i].innerHTML = textNods[i].innerHTML.replace('{vxA}', articleName);
                    }
                }
            }
            var element = widgetContainer.querySelectorAll(".zit-widget-wrapper--new-panel");
            if (element != null && element.length > 0) {
                var curCanvas = element[0].attributes['data-wid'];
                if (curCanvas && window.ZITFunctions && typeof window.ZITFunctions.retrieveCanvasDataFrmCookie != "undefined") {
                    var canvasId = curCanvas.nodeValue;
                    var canvasData = window.ZITFunctions.retrieveCanvasDataFrmCookie(canvasId);
                    if (canvasData != null) {
                        if (window.ZITFunctions && typeof window.ZITFunctions.updateCanvasTitleToCookie != "undefined")
                            window.ZITFunctions.updateCanvasTitleToCookie(canvasData, widgetContainer);
                    }
                    else
                        window.ZITUtils.writeDebug("No canvas retrieved." + canvasId);
                }
                else
                    window.ZITUtils.writeDebug("No widgetId retrieved." + widgetContainer.outerHTML);
            }
            else
                window.ZITUtils.writeDebug("No widget container retrieved." + widgetContainer.outerHTML);

            function getPromoTextWithArticleHeadline(promoText) {
                var headline = '';
                for (let j = 0; j < window.dataLayer.length; j++) {
                    if (window.dataLayer[j].pageDetails && window.dataLayer[j].pageDetails.headline) {
                        headline = window.dataLayer[j].pageDetails.headline;
                        break;
                    }
                }

                if (headline) { //(window.dataLayer && window.dataLayer[0] && window.dataLayer[0].pageDetails && window.dataLayer[0].pageDetails.headline)
                    //var headline = window.dataLayer[0].pageDetails.headline;

                    // If the entire headline is quoted text, we want to remove the quotes from the beginning and end
                    // since it looks funny to have three quotes in a row.
                    // But if there is quoted text included in a headline but the headline is not fully within quotes,
                    // we leave the headline as is.
                    const entireHeadlineIsQuoted = /^'.*'$/.test(headline);
                    const sanitizedHeadline = entireHeadlineIsQuoted ? headline.replaceAll(/^(')|(')$/g, '') : headline;
                    const text = '“' + sanitizedHeadline + '”';

                    // If the article headline is under 70 characters, return the text that incorporates the article headline
                    // If not, the headline won't be used for the promo message so just return the original promo text message
                    if (sanitizedHeadline.replace(/(<([^>]+)>)/gi, '').length <= 70) {
                        return text;
                    }
                }
                return promoText;
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeReplaceArticleNameFunctionV3');
        }
    };

    window.initializeTextCheckboxCountFunction = function (widgetContainer) {
        try {
            var textChk = widgetContainer.querySelectorAll('.cls-text-checkbox').length;
            var textNods = widgetContainer.querySelectorAll('#buttonGroupChkSelectAll span');
            if (textNods) {
                for (var i = 0; i < textNods.length; i++) {
                    textNods[i].innerHTML += ' (' + textChk + ')';
                }
            }

            var mainDivNods = widgetContainer.querySelectorAll(canvasSectionDivsArray);
            if (mainDivNods) {
                for (var j = 0; j < mainDivNods.length; j++) {
                    window.initializeUpdateButtonTextWhenCheckboxCheckedFunction(mainDivNods[j]);
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeTextCheckboxCountFunction');
        }
    };

    window.initializeTextBoxPlaceholderImage = function (widgetContainer) {
        try {
            var inputNode = widgetContainer.querySelectorAll('.form-group-valiation input');
            if (inputNode && inputNode.length > 0) {
                for (var i = 0; i < inputNode.length; i++) {
                    var curNode = inputNode[i];
                    if (curNode && curNode !== undefined) {

                        curNode.addEventListener('focus', function (e) {
                            this.closest('.form-group-valiation').classList.add('active');
                            var intMarginL = this.getAttribute('data-padding-left');
                            var intMarginR = this.getAttribute('data-padding-right');
                            if (this.id === 'txtphoneNumber') {
                                //this.style.paddingLeft = '48px';
                                if (intMarginL) this.style.paddingLeft = '48px';
                                if (intMarginR) this.style.paddingRight = '15px';
                            }
                            else if (this.id === 'txtpassword') {
                                if (intMarginL) this.style.paddingLeft = '15px';
                                if (intMarginR) this.style.paddingRight = '35px';
                            }
                            else {
                                //this.style.paddingLeft = '15px';
                                if (intMarginL) this.style.paddingLeft = '15px';
                                if (intMarginR) this.style.paddingRight = '15px';
                            }

                            //****START show disclaimer text on focus
                            if (this.id === 'txtemail') {
                                var intShowDisclaimertext = this.getAttribute('data-show-disclaimertext') || 'false';
                                if (intShowDisclaimertext === 'true') {
                                    var inputDisTextNode = this.closest('.widget-container-new-panel').querySelector('#disclaimer_text');
                                    if (inputDisTextNode) {
                                        var strDisclaimerTextDisplayType = curNode.getAttribute('data-disclaimertext-stylevisibility') || 'false';
                                        if (strDisclaimerTextDisplayType === 'true')
                                            inputDisTextNode.style.visibility = 'visible';
                                        else
                                            inputDisTextNode.style.display = 'block';
                                    }
                                }
                            }
                            //****END show disclaimer text on focus
                        });

                        curNode.addEventListener('blur', function (e) {
                            if (this.value.length <= 0) {
                                this.closest('.form-group-valiation').classList.remove('active');
                                var intMarginL = this.getAttribute('data-padding-left');
                                var intMarginR = this.getAttribute('data-padding-right');
                                if (intMarginL) this.style.paddingLeft = intMarginL + 'px';
                                if (intMarginR) this.style.paddingRight = intMarginR + 'px';
                            }
                            else {
                                this.closest('.form-group-valiation').classList.add('active');
                            }

                            try {
                                var inputTextNode = widgetContainer.querySelectorAll('#' + this.id);
                                if (inputTextNode) {
                                    for (var r = 0; r < inputTextNode.length; r++) {
                                        inputTextNode[r].value = this.value;
                                    }
                                }
                            } catch (error) { }
                        });

                        if (curNode.id === 'txtemail') {
                            //****START hide disclaimer text on load
                            var intShowDisclaimertext = curNode.getAttribute('data-show-disclaimertext') || 'false';
                            if (intShowDisclaimertext === 'true') {
                                var inputDisTextNode = curNode.closest('.widget-container-new-panel').querySelector('#disclaimer_text');
                                if (inputDisTextNode) {
                                    var strDisclaimerTextDisplayType = curNode.getAttribute('data-disclaimertext-stylevisibility') || 'false';
                                    if (strDisclaimerTextDisplayType === 'true')
                                        inputDisTextNode.style.visibility = 'hidden';
                                    else
                                        inputDisTextNode.style.display = 'none';
                                }
                            }
                            //****END hide disclaimer text on load

                            //****START hide post button on load
                            var inputSubmitBtn = curNode.closest('.widget-container-new-panel').querySelector('#buttonGroupPost');
                            var intActiveSubmitBtnEmail = curNode.getAttribute('data-active-submitbtn') || 'false';
                            if (intActiveSubmitBtnEmail === 'true') {
                                if (inputSubmitBtn) inputSubmitBtn.classList.add('canvas-btn-disabled');

                                curNode.addEventListener('input', function () {
                                    checkInputValidation(this);
                                });
                            }
                            else {
                                var inputPswdNode = curNode.closest('.widget-container-new-panel').querySelector('.form-group-valiation input#txtpassword');
                                if (inputPswdNode)
                                    var intActiveSubmitBtn1Pswd = inputPswdNode.getAttribute('data-active-submitbtn') || 'false';

                                if (intActiveSubmitBtn1Pswd === 'false') {
                                    if (inputSubmitBtn) inputSubmitBtn.classList.remove('canvas-btn-disabled');
                                }
                            }
                            //****END hide post button on load
                        }

                        if (curNode.id === 'txtpassword') {
                            //****START hide post button on load
                            var inputSubmitBtn = curNode.closest('.widget-container-new-panel').querySelector('#buttonGroupPost');
                            var intActiveSubmitBtnPswd = curNode.getAttribute('data-active-submitbtn') || 'false';
                            if (intActiveSubmitBtnPswd === 'true') {
                                if (inputSubmitBtn) inputSubmitBtn.classList.add('canvas-btn-disabled');

                                curNode.addEventListener('input', function () {
                                    checkInputValidation(this);
                                });
                            }
                            else {
                                var inputEmailNode = curNode.closest('.widget-container-new-panel').querySelector('.form-group-valiation input#txtemail');
                                if (inputEmailNode)
                                    var intActiveSubmitBtn1Email = inputEmailNode.getAttribute('data-active-submitbtn') || 'false';

                                if (intActiveSubmitBtn1Email === 'false') {
                                    if (inputSubmitBtn) inputSubmitBtn.classList.remove('canvas-btn-disabled');
                                }
                            }
                            //****END hide post button on load
                        }
                    }
                }
            }

            var inputNodeSvg = widgetContainer.querySelectorAll('.form-group-valiation svg');
            if (inputNodeSvg) {
                for (var s = 0; s < inputNodeSvg.length; s++) {
                    inputNodeSvg[s].addEventListener('click', function (e) {
                        this.parentNode.getElementsByTagName('input')[0].focus();
                    });
                }
            }

            function checkInputValidation(curNode) {
                var isEmail = false,
                    isPswd = false;

                var inputEmailNodeF = curNode.closest('.widget-container-new-panel').querySelector('.form-group-valiation input#txtemail');
                if (inputEmailNodeF) {
                    var intActiveSubmitBtnE = inputEmailNodeF.getAttribute('data-active-submitbtn') || 'false';
                    if (intActiveSubmitBtnE === 'true') {
                        var emailVal = inputEmailNodeF.value;
                        if (/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailVal)) {
                            isEmail = true;
                        }
                    } else {
                        isEmail = true;
                    }
                } else {
                    isEmail = true;
                }

                var inputPswdNodeF = curNode.closest('.widget-container-new-panel').querySelector('.form-group-valiation input#txtpassword');
                if (inputPswdNodeF) {
                    var intActiveSubmitBtnP = inputPswdNodeF.getAttribute('data-active-submitbtn') || 'false';
                    if (intActiveSubmitBtnP === 'true') {
                        var passwordVal = inputPswdNodeF.value;
                        if (passwordVal.length > 7 && passwordVal.match(/[a-z]/) && passwordVal.match(/[A-Z]/) && passwordVal.match(/([0-9])/) && passwordVal.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
                            isPswd = true;
                        }
                    } else {
                        isPswd = true;
                    }
                } else {
                    isPswd = true;
                }

                var inputSubmitBtnF = curNode.closest('.widget-container-new-panel').querySelector('#buttonGroupPost');
                if (inputSubmitBtnF) {
                    if (isEmail && isPswd) {
                        inputSubmitBtnF.classList.remove('canvas-btn-disabled');
                        window.ZITUtils.writeDebug("Data is valid." + isEmail + " " + isPswd);
                    }
                    else {
                        inputSubmitBtnF.classList.add('canvas-btn-disabled');
                        window.ZITUtils.writeDebug("Data still not valid." + isEmail + " " + isPswd);
                    }
                }
                else
                    window.ZITUtils.writeDebug("Submit Button not found.");
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeTextBoxPlaceholderImageV4');
        }
    };

    window.initializeTextBoxPlaceholderImageOld = function (widgetContainer) {
        var length = 0;
        var index = 0;
        try {
            window.ZITUtils.writeDebug("initializeTextBoxPlaceholderImage is called ");
            var inputNode = widgetContainer.querySelectorAll('.form-group-valiation input');
            if (inputNode && inputNode.length > 0) {
                length = inputNode.length;
                for (var i = 0; i < inputNode.length; i++) {
                    index = i;
                    var curNode = inputNode[i];
                    if (curNode && curNode !== undefined) {
                        if (curNode.id === 'txtemail') {
                            //****START hide disclaimer text on load
                            var intShowDisclaimertext = curNode.getAttribute('data-show-disclaimertext') || false;
                            if (intShowDisclaimertext === 'true') {
                                var inputDisTextNode = curNode.parentNode.parentNode.querySelectorAll('#disclaimer_text');
                                if (inputDisTextNode) {
                                    for (var j = 0; j < inputDisTextNode.length; j++) {
                                        inputDisTextNode[j].style.display = 'none';
                                    }
                                }
                            }
                            //****END hide disclaimer text on load

                            //****START hide post button on load
                            var intActiveSubmitBtn = curNode.getAttribute('data-active-submitbtn') || false;
                            if (intActiveSubmitBtn === 'true') {
                                window.ZITUtils.writeDebug("Not invalidate the button because of intActiveSubmitBtn");
                                var inputSubmitBtn = curNode.parentNode.parentNode.querySelectorAll('#buttonGroupPost');
                                if (inputSubmitBtn) {
                                    for (var k = 0; k < inputSubmitBtn.length; k++) {
                                        inputSubmitBtn[k].classList.add('canvas-btn-disabled');
                                    }
                                }

                                curNode.addEventListener('input', function (evt) {
                                    var inputSubmitBtn = this.parentNode.parentNode.querySelectorAll('#buttonGroupPost');
                                    if (inputSubmitBtn) {
                                        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(evt.target.value)) {
                                            window.ZITUtils.writeDebug("email is valid #" + evt.target.value + "#");
                                            for (var l = 0; l < inputSubmitBtn.length; l++) {
                                                inputSubmitBtn[l].classList.remove('canvas-btn-disabled');
                                            }
                                            return true;
                                        }
                                        for (var m = 0; m < inputSubmitBtn.length; m++) {
                                            inputSubmitBtn[m].classList.add('canvas-btn-disabled');
                                        }
                                        return false;
                                    }
                                });
                            }
                            else {
                                window.ZITUtils.writeDebug("Invalidate the button because of not intActiveSubmitBtn");
                                var btnPostNods = widgetContainer.querySelectorAll('#buttonGroupPost');
                                if (btnPostNods) {
                                    for (var n = 0; n < btnPostNods.length; n++) {
                                        btnPostNods[n].classList.remove('canvas-btn-disabled');
                                    }
                                }
                            }
                            //****END hide post button on load
                        }

                        if (curNode !== undefined) {
                            curNode.addEventListener('focus', function (e) {
                                if (this.id === 'txtphoneNumber') {
                                    this.parentNode.parentNode.classList.add('active');
                                    //this.style.paddingLeft = '48px';
                                    var intMarginL = this.getAttribute('data-padding-left');
                                    var intMarginR = this.getAttribute('data-padding-right');

                                    if (intMarginL) this.style.paddingLeft = '48px';
                                    if (intMarginR) this.style.paddingRight = '15px';

                                }
                                else if (this.id === 'txtpassword') {
                                    this.parentNode.classList.add('active');

                                    var intMarginL = this.getAttribute('data-padding-left');
                                    var intMarginR = this.getAttribute('data-padding-right');

                                    if (intMarginL) this.style.paddingLeft = '15px';
                                    if (intMarginR) this.style.paddingRight = '35px';

                                }
                                else {
                                    this.parentNode.classList.add('active');
                                    //this.style.paddingLeft = '15px';
                                    var intMarginL = this.getAttribute('data-padding-left');
                                    var intMarginR = this.getAttribute('data-padding-right');

                                    if (intMarginL) this.style.paddingLeft = '15px';
                                    if (intMarginR) this.style.paddingRight = '15px';
                                }

                                //****START show disclaimer text on focus
                                if (this.id === 'txtemail') {
                                    var intShowDisclaimertext = this.getAttribute('data-show-disclaimertext') || false;
                                    if (intShowDisclaimertext === 'true') {
                                        var inputDisTextNode = this.parentNode.parentNode.querySelectorAll('#disclaimer_text');
                                        if (inputDisTextNode) {
                                            for (var q = 0; q < inputDisTextNode.length; q++) {
                                                inputDisTextNode[q].style.display = 'block';
                                            }
                                        }
                                    }
                                }
                                //****END show disclaimer text on focus
                            });
                        }
                        else
                            window.ZITUtils.writeDebug("Node " + index + "/" + length + " not defined.");

                        if (curNode !== undefined) {
                            curNode.addEventListener('blur', function (e) {
                                if (this.value.length <= 0) {
                                    if (this.id === 'txtphoneNumber') {
                                        this.parentNode.parentNode.classList.remove('active');
                                    } else {
                                        this.parentNode.classList.remove('active');
                                    }
                                    var intMarginL = this.getAttribute('data-padding-left');
                                    if (intMarginL) this.style.paddingLeft = intMarginL + 'px';

                                    var intMarginR = this.getAttribute('data-padding-right');
                                    if (intMarginR) this.style.paddingRight = intMarginR + 'px';
                                }
                                else {
                                    if (this.id === 'txtphoneNumber') {
                                        this.parentNode.parentNode.classList.add('active');
                                    } else {
                                        this.parentNode.classList.add('active');
                                    }
                                }

                                try {
                                    var inputTextNode = widgetContainer.querySelectorAll('#' + this.id);
                                    if (inputTextNode) {
                                        for (var r = 0; r < inputTextNode.length; r++) {
                                            inputTextNode[r].value = this.value;
                                        }
                                    }
                                } catch (error) { }
                            });
                        }
                        else
                            window.ZITUtils.writeDebug("Node " + index + "/" + length + " not defined. " + typeof (curNode));
                    }
                    else
                        window.ZITUtils.writeDebug("NO form-group-valiation input control found");
                }
            }
            else
                window.ZITUtils.writeDebug("initializeTextBoxPlaceholderImage is called");

            var inputNodeSvg = widgetContainer.querySelectorAll('.form-group-valiation svg');
            if (inputNodeSvg) {
                for (var s = 0; s < inputNodeSvg.length; s++) {
                    inputNodeSvg[s].addEventListener('click', function (e) {
                        this.parentNode.getElementsByTagName('input')[0].focus();
                    });
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeTextBoxPlaceholderImageV4');
        }
    };

    window.initializePopupCloseOutsideContentClick = function () {
        try {
            window.addEventListener('load', setup());

            function setup() {
                var modalRoot = document.querySelectorAll('.exit-intent-popup');
                if (modalRoot) {
                    for (var i = 0; i < modalRoot.length; i++) {
                        var modal = modalRoot[i].querySelector('.inner-exit-intent-popup');
                        modalRoot[i].addEventListener('click', function () {
                            this.classList.remove('visible');
                        });

                        modal.addEventListener('click', function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            return false;
                        });
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializePopupCloseOutsideContentClick');
        }
    };

    window.initializeShapEextendedToFullWidth = function (widgetContainer) {
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

    window.initializeUpdateButtonTextWhenCheckboxCheckedFunction = function (mainDivNods) {
        try {
            if (mainDivNods) {
                var chkCheckedText = '',
                    chkUncheckedText = '',
                    postBtnNods = mainDivNods.querySelector('#buttonGroupPost');
                if (postBtnNods) {
                    if (postBtnNods.attributes && postBtnNods.attributes['data-chk-checked']) {
                        chkCheckedText = postBtnNods.attributes['data-chk-checked'].nodeValue;
                    }
                    if (postBtnNods.attributes && postBtnNods.attributes['data-chk-unchecked']) {
                        chkUncheckedText = postBtnNods.attributes['data-chk-unchecked'].nodeValue;
                    }
                }

                if (chkCheckedText && chkUncheckedText) {
                    var isChecked = false;
                    var chkNodes = mainDivNods.querySelectorAll('.cls-text-title-checkbox');
                    if (chkNodes) {
                        for (var j = 0; j < chkNodes.length; j++) {
                            if (chkNodes[j]) {
                                if (chkNodes[j].checked === true) isChecked = true;
                            }
                        }

                        if (isChecked)
                            postBtnNods.querySelector('span.label').innerHTML = chkCheckedText;
                        else
                            postBtnNods.querySelector('span.label').innerHTML = chkUncheckedText;
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeReplaceDiscountFunction');
        }
    };

    window.initializeDefaultFocusOnCanvasLoadFunction = function (widgetContainer) {
        try {
            var inputNode = widgetContainer.querySelectorAll('.form-group-valiation input#txtemail');
            if (inputNode && inputNode.length > 0) {
                for (var i = 0; i < inputNode.length; i++) {
                    var intShowDisclaimertext = inputNode[i].getAttribute('data-focus-onload') || false;
                    if (intShowDisclaimertext === 'true') {
                        var emailNode = inputNode[i];
                        setTimeout(function () {
                            emailNode.focus();
                        }, 500);
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeDefaultFocusOnCanvasLoadFunction');
        }
    };

    window.initializeHideMessageOnReTypeEmailFunction = function (widgetContainer) {
        try {
            var inputNode = widgetContainer.querySelectorAll('.form-group-valiation input#txtemail');
            if (inputNode && inputNode.length > 0) {
                for (var i = 0; i < inputNode.length; i++) {
                    var bolSSMsg = inputNode[i].getAttribute('data-hide-ssmsg-ontyping') || 'false';
                    if (bolSSMsg === 'true') {
                        inputNode[i].addEventListener('input', function () {
                            var lblErrorHandler = this.closest('#email.form-group-valiation').querySelector('.lbl-error-handler');
                            if (lblErrorHandler) lblErrorHandler.innerHTML = '';
                        });
                    }

                    var bolCSMsg = inputNode[i].getAttribute('data-hide-csmsg-ontyping') || 'false';
                    if (bolCSMsg === 'true') {
                        inputNode[i].addEventListener('input', function () {
                            var lblEmailErrorMsg = this.closest('#email.form-group-valiation').querySelector('#txtemail-error');
                            if (lblEmailErrorMsg) {
                                lblEmailErrorMsg.remove();
                                this.closest("#email").classList.remove('has-error');
                                if (this.closest("#formCanvas")) $(this.closest("#formCanvas")).validate().settings.ignore = "*";
                            }
                        });
                        inputNode[i].addEventListener('change', function () {
                            if (this.closest("#formCanvas")) $(this.closest("#formCanvas")).validate().settings.ignore = "";
                        });
                    }
                }
            }
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'initializeHideMessageOnReTypeEmailFunction');
        }
    };

    window.initializeCanvasMethods = function (widgetContainer, animateType) {
        window.initializeReplacePageNumberFunction(widgetContainer);
        window.initializeReplacePriceFunction(widgetContainer);
        window.initializeReplacePrice1Function(widgetContainer);
        window.initializeReplaceDiscountFunction(widgetContainer);
        window.initializeReplaceArticleNameFunction(widgetContainer);
        window.initializeCommonFunction(widgetContainer);
        window.initializeCanvasDropDown(widgetContainer);
        window.initializeTogglePassword(widgetContainer);
        window.initializeCanvasInputValidation(widgetContainer);
        window.initializeCountdownClock(widgetContainer);
        window.initializeTextCheckboxCountFunction(widgetContainer);
        if (animateType !== 'popup') {
            window.initializeCountdownClockNew(widgetContainer);
        }
        if (window.SubxClientEvents && window.SubxClientEvents.formButtonDynamic && window.SubxClientEvents.formButtonDynamic == 1)
            window.initializeTextBoxPlaceholderImage(widgetContainer);
        else
            window.ZITUtils.writeDebug("formButtonWillNotBeUpdated");
        window.initializeShapEextendedToFullWidth(widgetContainer);
        window.initializeHideMessageOnReTypeEmailFunction(widgetContainer);
        //window.initializeDefaultFocusOnCanvasLoadFunction(widgetContainer);
        //window.initializePopupCloseOutsideContentClick();
    };

    //window.initializePasswordValidation = function () {
    //    const passwordDiv = document.querySelector('#password');
    //    $(passwordDiv).each(function () {
    //        const dd = this;
    //        const password = this.querySelector('#txtpassword');
    //        if (password) {
    //            password.addEventListener('keyup', function (e) {
    //                if (checkStrength(dd) == false) {
    //                    // $('#sign-up').attr('disabled', true);
    //                }
    //            });
    //        }
    //    });
    //};

    ////****countdown time commnet
    jQuery(document).ready(function ($) {
        //initializeCountdownClock('countdown-timediv');
        //initializeCountdownClockNew('countdown-timer-main-div');
        //initializeTogglePassword();
        //initializePasswordValidation();
        $("#buttonGroup, button[data-id='actionButton']").removeClass('canvas-btn-disabled');
    });

}(jQuery, window));
(function ($, zit) {

    window.LoadCanvasFormValidate = function (isReCaptchaOn, reCaptchaSiteKey, reCaptchaSecretKey) {
        try {
            (function ($) {
                if ($.validator) {
                    $.validator.addMethod("emailcheck", function (value) {
                        var email = value;
                        if (/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                            console.log("The email is valid.");
                            return true;
                        }
                        console.log("The email is invalid.");
                        return false;
                    });
                    $.validator.addMethod("pwcheck", function (value) {
                        var flag = false;
                        flag = /[ `!@#$%^&*()_+=\-\[\]{};':"\\|,.<>\/?~]/.test(value); // consists of only these
                        if (!flag) {
                            console.log("Not Contain a special character.");
                            return flag;
                        }
                        flag = flag && /[a-zA-Z]/.test(value); // has a lowercase letter
                        if (!flag) {
                            console.log("Not Contain a alpha.");
                            return flag;
                        }
                        flag = flag && /\d/.test(value); // has a digit
                        if (!flag)
                            console.log("Not Contain a digit.");
                        return flag;
                    });
                    $.validator.addMethod("phonenocheck", function (value) {
                        var flag = false;
                        var phone = value;
                        var phoneNum = phone.replace(/[^\d]/g, '');
                        flag = (phoneNum.length > 6 && phoneNum.length < 11)
                        if (!flag) {
                            console.log("Telephone number not valid.");
                            return flag;
                        }
                        return flag;
                    });
                }
                else {
                    console.log("validator script is not loaded.");
                }
                $('form').each(function () {
                    if ($(this).attr('id') && $(this).attr('id') == 'formCanvas') {

                        var typePassword = '';
                        var msgPassword = [];
                        var rulesPassword = [];

                        var $callerPassword = $(this).find("#txtpassword");
                        if ($callerPassword.length > 0) {
                            typePassword = $callerPassword["0"].attributes['data-type'] == undefined ? '' : $callerPassword["0"].attributes['data-type'].nodeValue;
                        }

                        if (typePassword == 'login') {
                            msgPassword = {
                                required: "Password is required",
                            };
                            rulesPassword = {
                                required: true,
                            };
                        } else {
                            msgPassword = {
                                required: "Password is required",
                                pwcheck: "Password is not strong enough",
                                minlength: "Must be at least 8 characters"
                            };
                            rulesPassword = {
                                required: true,
                                pwcheck: true,
                                minlength: 8
                            };
                        }
                        if ($.validator) {
                            $(this).validate({
                                errorElement: 'span', //default input error message container
                                errorClass: 'help-block', // default input error message class
                                focusInvalid: false, // do not focus the last invalid input
                                ignore: "", // validate all fields including form hidden input
                                messages: {
                                    txtfullName: "Full name is required",
                                    txtfirstName: "First name is required",
                                    txtsurName: "Surname is required",
                                    txtemail: {
                                        required: "Email is required",
                                        emailcheck: "Email must be a valid email address"
                                    },
                                    txtusername: "Customer number is required",
                                    txtpassword: msgPassword,
                                    txtfree_text: {
                                        required: "Password hint is required",
                                    },
                                    txtphoneNumber: {
                                        required: "Telephone number is required",
                                        phonenocheck: "Telephone number must be a valid"
                                    }
                                },
                                rules: {
                                    txtfullName: {
                                        required: true
                                    },
                                    txtfirstName: {
                                        required: true
                                    },
                                    txtsurName: {
                                        required: true
                                    },
                                    txtemail: {
                                        required: true,
                                        emailcheck: true
                                    },
                                    txtusername: {
                                        required: true
                                    },
                                    txtpassword: rulesPassword,
                                    txtfree_text: {
                                        required: true,
                                    },
                                    txtphoneNumber: {
                                        required: true,
                                        phonenocheck: true
                                    },
                                },
                                highlight: function (label) {
                                    $(label).closest('.form-group-valiation').removeClass('has-success').addClass('has-error');
                                    $(label).removeAttr('placeholder');
                                    //if (label.id === "txtpassword") {
                                    //    $(label).css({ "border-color": "#dc3545", "padding": "10px 30px 0 15px" });
                                    //}
                                    //else if (label.id === "txtphoneNumber") {
                                    //    $(label).css({ "border-color": "#dc3545", "padding": "10px 15px 0 48px" });
                                    //    $(label).siblings('.flag-container').css({ "padding": "10px 0 1px 0" });
                                    //}
                                    //else {
                                    //    $(label).css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });
                                    //}
                                    $(label).css({ "border-color": "#dc3545" });
                                    $(label.form).find("#txtemail-success").remove();
                                    $(label).closest('.form-group-valiation').find('.help-block-success').removeClass('help-block-success');
                                    $(label).closest('.form-group-valiation').find('svg').hide();
                                },
                                success: function (label, element) {
                                    $(label).closest('.form-group-valiation').removeClass('has-error');
                                    label.remove();
                                    var borderColor = element.getAttribute('tag');
                                    //if (element.id === "txtpassword") {
                                    //    $(element).css({ "border-color": borderColor, "padding": "0 30px 0 15px" });
                                    //}
                                    //else if (element.id === "txtphoneNumber") {
                                    //    $(element).css({ "border-color": borderColor, "padding": "0 15px 0 48px" });
                                    //    $(element).siblings('.flag-container').css({ "padding": "1px" });
                                    //}
                                    //else {
                                    //    $(element).css({ "border-color": borderColor, "padding": "0px 15px" });
                                    //}
                                    $(element).css({ "border-color": borderColor });
                                    $(element.form).find("#txtemail-success").remove();
                                },
                                errorPlacement: function (error, element) {
                                    var placement = element.closest('.input-group-valiation');
                                    var hrClass = '', vrClass = '';
                                    if (placement[0] && placement[0].attributes['data-vm-hrclass'])
                                        hrClass = placement[0].attributes['data-vm-hrclass'].value;

                                    if (placement[0] && placement[0].attributes['data-vm-vrclass'])
                                        vrClass = placement[0].attributes['data-vm-vrclass'].value;

                                    if (hrClass && vrClass) {
                                        error.addClass('block-' + hrClass);
                                        error.addClass(vrClass);
                                        if (hrClass === 'top') {
                                            var elmHeight = element[0].clientHeight;
                                            if (elmHeight) error.css('bottom', elmHeight);
                                        }
                                    }

                                    if (!placement.get(0)) {
                                        placement = element;
                                    }
                                    if (error.text() !== '') {
                                        if (hrClass === 'top')
                                            placement.before(error);
                                        else
                                            placement.after(error);
                                    }
                                },
                                invalidHandler: function (event, validator) {
                                    var errors = validator.numberOfInvalids();
                                    window.ZITUtils.writeDebug("Number of errors:" + errors);
                                    if (errors) {
                                        var invalidElements = validator.errorList;
                                        window.ZITUtils.writeDebug("Total invalids:" + invalidElements.length);
                                        window.ZITUtils.writeDebug(JSON.stringify(invalidElements[0]));
                                    }
                                    validator.focusInvalid();
                                },
                                submitHandler: async function (form, e) {
                                    console.log("Call submit Handler");
                                    var buttonLoader = {};
                                    var buttonControl = false;
                                    var recaptToken = '';
                                    var isDNT = 0;
                                    if (window.ZITFunctions)
                                        isDNT = window.ZITFunctions.isDNT || 0;
                                    e.preventDefault();

                                    var toggleOpenTimer = function () {
                                        console.log("Entering post logic");
                                        var lblErrorHandler;
                                        try {
                                            e.preventDefault();
                                            var $caller = $(form).find("#buttonGroupPost"); //($(form).hasClass('canvas-loading-btn') ? $(form) : $(form).parent());
                                            var $callerBrandUrl = $(form).find(".zit-widget-wrapper.zit-widget-wrapper--new-panel"); //form.offsetParent.dataset.brandurl;
                                            if (!$caller || !$caller["0"])
                                                return false;
                                            var wdgetId = $callerBrandUrl["0"].attributes['data-wid'].nodeValue;
                                            var btnDataType = $caller["0"].attributes['data-type'].nodeValue;
                                            var brandId = $caller["0"].attributes['data-pid'] == undefined ? 0 : $caller["0"].attributes['data-pid'].nodeValue;
                                            var reversewid = $caller["0"].attributes['data-reversewid'] == undefined ? '' : $caller["0"].attributes['data-reversewid'].nodeValue;
                                            var isTransitionEffect = $caller["0"].attributes['data-transition'] == undefined ? "true" : $caller["0"].attributes['data-transition'].nodeValue;

                                            var brandUrl = $callerBrandUrl["0"].attributes['data-brandurl'].nodeValue;
                                            var wFormId = $callerBrandUrl["0"].attributes['data-wform'] == undefined ? '' : $callerBrandUrl["0"].attributes['data-wform'].nodeValue;
                                            var bFormId = $callerBrandUrl["0"].attributes['data-bform'] == undefined ? '' : $callerBrandUrl["0"].attributes['data-bform'].nodeValue;
                                            var dataToken = $callerBrandUrl["0"].attributes['data-token'] == undefined ? '' : $callerBrandUrl["0"].attributes['data-token'].nodeValue;
                                            var canvasSequence = $callerBrandUrl["0"].attributes['data-sequence'] == undefined ? '' : $callerBrandUrl["0"].attributes['data-sequence'].nodeValue;
                                            var isEmailCanvas = $callerBrandUrl["0"].attributes['data-emailcanvas'] == undefined ? '' : $callerBrandUrl["0"].attributes['data-emailcanvas'].nodeValue;
                                            var isAbandon = $callerBrandUrl["0"].attributes['data-isAbandon'].nodeValue;
                                            var isContentGate = $callerBrandUrl["0"].attributes['data-iscg'].nodeValue;
                                            var isUpdateReg = $callerBrandUrl["0"].attributes['data-updReg'] == undefined ? 0 : $callerBrandUrl["0"].attributes['data-updReg'].nodeValue;
                                            var isMembership = $callerBrandUrl["0"].attributes['data-ism'] == undefined ? 0 : $callerBrandUrl["0"].attributes['data-ism'].nodeValue;

                                            var widgetName = '';
                                            try {
                                                widgetName = $callerBrandUrl["0"].attributes['data-name'].nodeValue;
                                            }
                                            catch { }
                                            var canvasVersionId = $callerBrandUrl["0"].attributes['data-canvasversionid'] == undefined ? 1 : parseInt($callerBrandUrl["0"].attributes['data-canvasversionid'].nodeValue);

                                            lblErrorHandler = $(form).find(".error_handler-wid-" + wdgetId); //$(form).find("#error_handler");
                                            if (lblErrorHandler.length > 0) {
                                                lblErrorHandler.html('');
                                            }

                                            var cpId = 0;
                                            if (btnDataType === "get") {
                                                console.log("GET Button detected:" + btnDataType);
                                            }
                                            else {
                                                if ($caller.attr('disabled') == 'disabled') {
                                                    console.log("Button disabled"); return;
                                                }
                                                try {
                                                    buttonLoader = new getCanvasButtonLoader($caller);
                                                    buttonControl = true;
                                                    buttonLoader.show();
                                                }
                                                catch (error) { }

                                                var formElement = form.elements;
                                                var emailAddress = '';
                                                var firstName = '';
                                                var surName = '';
                                                var fullName = '';
                                                var phoneNumber = '';
                                                var userName = '';
                                                var password = '';
                                                var passwordHint = '';
                                                //var chkId = '';
                                                var chkStatus = 0;
                                                var chkType = '';

                                                var reversChkExists = 0;
                                                var reversChkStatus = 0;
                                                var reversChkType = '';

                                                var chkStatus2 = 0;
                                                var chkType2 = '';

                                                var reversChkExists2 = 0;
                                                var reversChkStatus2 = 0;
                                                var reversChkType2 = '';
                                                var usechkType2 = false;
                                                var chkStatus3 = 0;
                                                var chkType3 = '';

                                                var reversChkExists3 = 0;
                                                var reversChkStatus3 = 0;
                                                var reversChkType3 = '';
                                                var usechkType3 = false;
                                                var isSuccess = false;
                                                var chkFormIds = [];

                                                if (window.SubxClientEvents && window.SubxClientEvents.scriptGroup == "VoxUS" && window.ZITUtils.readCookie("_sem") && window.ZITUtils.readCookie("_sem") != "" && canvasSequence != "EntryCanvas") {
                                                    emailAddress = window.ZITUtils.readCookie("_sem");
                                                }
                                                else if (form.elements.txtemail === undefined || form.elements.txtemail === null || form.elements.txtemail === '') {

                                                    if (form.elements.txtphoneNumber === undefined || form.elements.txtphoneNumber === null || form.elements.txtphoneNumber === '') {
                                                        if (buttonControl)
                                                            buttonLoader.hide();
                                                        console.log("No email or number. Button disabled");
                                                        return false;
                                                    }
                                                }
                                                else {
                                                    emailAddress = form.elements.txtemail.value.trim();
                                                }
                                                if (form.elements.txtfirstName === undefined || form.elements.txtfirstName === null || form.elements.txtfirstName === '') {
                                                    firstName = null;
                                                }
                                                else {
                                                    firstName = form.elements.txtfirstName.value.trim();
                                                }

                                                if (form.elements.txtsurName === undefined || form.elements.txtsurName === null || form.elements.txtsurName === '') {
                                                    surName = null;
                                                }
                                                else {
                                                    surName = form.elements.txtsurName.value.trim();
                                                }

                                                if (form.elements.txtfullName === undefined || form.elements.txtfullName === null || form.elements.txtfullName === '') {
                                                    fullName = null;
                                                }
                                                else {
                                                    fullName = form.elements.txtfullName.value.trim();
                                                }

                                                if (form.elements.txtphoneNumber === undefined || form.elements.txtphoneNumber === null || form.elements.txtphoneNumber === '') {
                                                    phoneNumber = null;
                                                }
                                                else {
                                                    //phoneNumber = form.elements.txtphoneNumber.value.trim();
                                                    try {
                                                        //phoneNumber = window.ZITFunctions.telControl.getNumber(intlTelInputUtils.numberFormat.E164);
                                                        phoneNumber = "+" + $(form).find(".country-list li.active").attr('data-dial-code');
                                                        phoneNumber += form.elements.txtphoneNumber.value.trim();
                                                        window.ZITUtils.writeDebug('Phone Number retrieved:' + phoneNumber);
                                                    }
                                                    catch (error) {
                                                        console.error("Error in retrieve phoneNumber " + error);
                                                        phoneNumber = "+1" + form.elements.txtphoneNumber.value.trim();
                                                    }
                                                }

                                                if (form.elements.txtusername === undefined || form.elements.txtusername === null || form.elements.txtusername === '') {
                                                    userName = null;
                                                }
                                                else {
                                                    userName = form.elements.txtusername.value.trim();
                                                }

                                                if (form.elements.txtpassword === undefined || form.elements.txtpassword === null || form.elements.txtpassword === '') {
                                                    password = null;
                                                }
                                                else {
                                                    if (window.ZITFunctions)
                                                        password = window.ZITFunctions.encrypt(form.elements.txtpassword.value.trim());
                                                    else
                                                        password = form.elements.txtpassword.value.trim();
                                                }
                                                if (form.elements.txtfree_text === undefined || form.elements.txtfree_text === null || form.elements.txtfree_text === '') {
                                                    passwordHint = null;
                                                }
                                                else {
                                                    passwordHint = form.elements.txtfree_text.value;
                                                }
                                                var disclaimerContainer = form.querySelectorAll('.cls-checkbox');
                                                if (disclaimerContainer && disclaimerContainer.length > 0) {
                                                    for (var i = 0; i < disclaimerContainer.length; i++) {
                                                        var item = disclaimerContainer[i];
                                                        var checkDataType = item.getAttribute('data-partytype');
                                                        if (typeof checkDataType != "undefined" && checkDataType != "" && checkDataType == "second") {
                                                            chkStatus2 = item.checked ? 1 : 0;
                                                            chkType2 = item.getAttribute('data-name');
                                                            usechkType2 = true;
                                                        }
                                                        else if (typeof checkDataType != "undefined" && checkDataType != "" && checkDataType == "third") {
                                                            chkStatus3 = item.checked ? 1 : 0;
                                                            chkType3 = item.getAttribute('data-name');
                                                            usechkType3 = true;
                                                        }
                                                        else {
                                                            chkStatus = item.checked ? 1 : 0;
                                                            chkType = item.getAttribute('data-name');
                                                            usechkType = true;
                                                        }
                                                    };
                                                }
                                                var reversChkContainer = form.querySelectorAll('.cls-revers-checkbox');
                                                if (reversChkContainer && reversChkContainer.length > 0) {
                                                    for (var i = 0; i < reversChkContainer.length; i++) {
                                                        var checkDataType = reversChkContainer[i].getAttribute('data-partytype');
                                                        if (typeof checkDataType != "undefined" && checkDataType != "" && checkDataType == "second") {
                                                            reversChkExists2 = 1;
                                                            reversChkStatus2 = reversChkContainer[i].checked ? 0 : 1;
                                                            reversChkType2 = reversChkContainer[i].getAttribute('data-name');
                                                            usechkType2 = true;
                                                        }
                                                        else if (typeof checkDataType != "undefined" && checkDataType != "" && checkDataType == "third") {
                                                            reversChkExists3 = 1;
                                                            reversChkStatus3 = reversChkContainer[i].checked ? 0 : 1;
                                                            reversChkType3 = reversChkContainer[i].getAttribute('data-name');
                                                            usechkType3 = true;
                                                        }
                                                        else {
                                                            reversChkExists = 1;
                                                            reversChkStatus = reversChkContainer[i].checked ? 0 : 1;
                                                            reversChkType = reversChkContainer[i].getAttribute('data-name');
                                                            usechkType = true;
                                                        }
                                                    };
                                                }

                                                try {
                                                    //var _wid = wdgetId ? '.wid-' + wdgetId : '';
                                                    //var clsTextCheckboxAndWId = [];
                                                    //if (window.subxNewsletter) {
                                                    //    window.subxNewsletter.forEach(wid => {
                                                    //        clsTextCheckboxAndWId.push('.cls-text-checkbox.wid-' + wid);
                                                    //    })
                                                    //} else {
                                                    //    clsTextCheckboxAndWId.push('.cls-text-checkbox.wid-' + _wid);
                                                    //}
                                                    //var checkboxesList = document.querySelectorAll(clsTextCheckboxAndWId);
                                                    var checkboxesList = document.querySelectorAll('.cls-text-checkbox');
                                                    if (checkboxesList && checkboxesList.length > 0) {
                                                        checkboxesList.forEach(checkbox => {
                                                            if (checkbox.checked) chkFormIds.push(checkbox.value);
                                                        })
                                                    }
                                                } catch (error) { }

                                                //if (chkId != '')
                                                //    chkId = "&optIn=" + encodeURIComponent(chkId);
                                                var devicetype = window.ZITFunctions.retrieveDeviceType();
                                                var iss = '';
                                                var origId = '';
                                                var host = '';
                                                if (window.ZITFunctions) {
                                                    origId = window.ZITFunctions.retrieveOrigSession();
                                                    iss = window.ZITFunctions.retrieveCurSession();
                                                    host = window.ZITFunctions.host();
                                                }
                                                else
                                                    origId = $callerBrandUrl["0"].attributes['data-origId'].nodeValue;
                                                var apiUrl = "";

                                                if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.scriptGroup != "undefined" && (window.SubxClientEvents.scriptGroup == "VoxUS" || window.SubxClientEvents.scriptGroup == "FutureUK")) {
                                                    if (window.SubxClientEvents.scriptGroup.indexOf("UK") >= 0)
                                                        apiUrl = 'https://produk.zeddit.com/';
                                                    else
                                                        apiUrl = 'https://prod.zeddit.com/';
                                                    apiUrl = apiUrl + window.location.hostname + '/GetZerobounceAndHMACApiUrlsV2';
                                                    if (apiUrl.indexOf("?") >= 0)
                                                        apiUrl = apiUrl + '&';
                                                    else
                                                        apiUrl = apiUrl + '?';
                                                    if ($callerBrandUrl["0"].attributes['canvasidentifier'] != undefined)
                                                        apiUrl = apiUrl + 'canvasidentifier=' + $caller["0"].attributes['canvasidentifier'].nodeValue;
                                                    else
                                                        apiUrl = apiUrl + 'canvasidentifier=';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + '&email=' + emailAddress + '&uem=' + window.ZITUtils.readCookie('_sem') + "&";
                                                    if (typeof window.SubxClientEvents.emailExtraField != "undefined")
                                                        apiUrl = apiUrl + window.SubxClientEvents.emailExtraField();
                                                    apiUrl = apiUrl + 'reverseId=' + reversewid + '&wForm=' + wFormId + "&bForm=" + bFormId + '&dataToken=' + dataToken + '&recapToken=' + recaptToken;
                                                    apiUrl = apiUrl + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;

                                                }
                                                else if (window.location.href.indexOf("hearstmagazines.co.uk/checkout/cart") >= 0) {
                                                    if (window.location.href.indexOf("www.hearstmagazines.co.uk") >= 0) {
                                                        apiUrl = 'https://produk.zeddit.com/';
                                                    } else {
                                                        apiUrl = 'https://coreuk.zeddit.com/';
                                                    }
                                                    apiUrl = apiUrl + window.location.hostname + '/GetZerobounceAndHMACApiUrlsV2?email=' + emailAddress + '&host=' + host + "&";
                                                    if (typeof window.SubxClientEvents.emailExtraField != "undefined")
                                                        apiUrl = apiUrl + window.SubxClientEvents.emailExtraField();
                                                    apiUrl = apiUrl + 'reverseId=' + reversewid + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                }
                                                else if ((isContentGate == 1) || (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.scriptGroup != "undefined" && window.SubxClientEvents.scriptGroup == "HearstUK" )) {
                                                    if (window.location.hostname.indexOf("next-fre") >= 0) {
                                                        apiUrl = 'https://coreuk.zeddit.com/' + window.location.hostname + '/GetZerobounceAndHMACApiUrlsV2?email=' + emailAddress + '&host=' + host + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                    }
                                                    else {
                                                        apiUrl = 'https://produk.zeddit.com/' + window.location.hostname + '/GetZerobounceAndHMACApiUrlsV2?email=' + emailAddress + '&host=' + host + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                    }
                                                    if (window.location.href.toLowerCase().indexOf("debugwid") >= 0)
                                                        apiUrl = apiUrl + '&debug=true';
                                                    else
                                                        console.log("Not debug wid");
                                                    if (isContentGate == 0) {
                                                        apiUrl = apiUrl + '&wForm=' + wFormId + "&bForm=" + bFormId;
                                                    }
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT;
                                                }
                                                else if (brandId == 952 || brandId == 1014) {
                                                    apiUrl = 'https://timeemail.zeddit.com/GetZerobounceAndHMACApiUrlsV2?';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + 'email=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                    apiUrl = apiUrl + '&wForm=' + wFormId + "&bForm=" + bFormId;
                                                }
                                                else if (brandId == 1012) {
                                                    apiUrl = 'https://testpayment.zeddit.com/GetZerobounceAndHMACApiUrlsV2?';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + 'email=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                }
                                                else if (brandId == 1029 || brandId == 1024 || brandId == 898 || brandId == 1054 || brandId == 1026) {
                                                    if (phoneNumber && phoneNumber != '') {
                                                        apiUrl = 'https://emaillead.zeddit.com/SubscribePhoneNumberApiUrls?';
                                                        if (isDNT == 1)
                                                            apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                        apiUrl = apiUrl + 'phoneNumber=' + phoneNumber + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                    }
                                                    else {
                                                        if (brandId == 1029)
                                                            apiUrl = 'https://testpayment.zeddit.com/GetZerobounceAndHMACApiUrlsV2?';
                                                        else if (brandId == 898 || brandId == 1054 || wdgetId == 13527 || wdgetId == 13533) // || window.ZITFunctions.host() == "www.hola.com" || window.ZITFunctions.host() == "mx.hola.com"
                                                            apiUrl = 'https://hellopayment.zeddit.com/GetZerobounceAndHMACApiUrlsV2?';
                                                        else if (brandId == 1026)
                                                            apiUrl = 'https://hellopayment.zeddit.com/GetZerobounceAndHMACApiUrls?';
                                                        else
                                                            apiUrl = 'https://emaillead.zeddit.com/GetZerobounceAndHMACApiUrls?';
                                                        if (isDNT == 1)
                                                            apiUrl = apiUrl + '&DNT=' + isDNT + '&';

                                                        if (brandId == 1029)
                                                            apiUrl = apiUrl + 'email=' + encodeURIComponent(emailAddress);
                                                        else if (brandId == 898 || window.ZITFunctions.host() == "www.hola.com" || window.ZITFunctions.host() == "mx.hola.com")
                                                            apiUrl = apiUrl + 'wForm=' + wFormId + "&bForm=" + bFormId + '&email=' + emailAddress + '&dataToken=' + dataToken + '&recapToken=' + recaptToken;
                                                        else
                                                            apiUrl = apiUrl + 'email=' + emailAddress;
                                                        apiUrl = apiUrl + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                    }
                                                }
                                                else if (brandId == 957 || brandId == 959 || brandId == 965) {
                                                    apiUrl = 'https://app.zeddit.com/Widget/GetZerobounceAndHMACApiUrls?';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + 'email=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                }
                                                else if (brandId == 999 || brandId == 1000 || brandId == 998 || brandId == 996) {
                                                    apiUrl = 'https://app.zeddit.com/Widget/GetZerobounceAndPubSApiUrls?';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + 'email=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                }
                                                else if (brandId == 953) {
                                                    apiUrl = 'https://app.zeddit.com/Widget/GetZerobounceAndHMACApiUrls?';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + 'email=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                }
                                                else if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.scriptGroup != "undefined" && window.SubxClientEvents.scriptGroup == "HearstUS") {
                                                    apiUrl = 'https://testpayment.zeddit.com/GetZerobounceAndHMACApiUrlsV2?';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + 'email=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                    apiUrl = apiUrl + '&wName=' + widgetName;
                                                    console.log("Hearst US Logic Applied");
                                                }
                                                else if (brandId == 1045) {
                                                    apiUrl = 'https://testpayment.zeddit.com/GetZerobounceAndHMACApiUrlsV2?';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + 'wForm=' + wFormId + '&';
                                                    apiUrl = apiUrl + 'email=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                }
                                                else {
                                                    apiUrl = 'https://emaillead.zeddit.com/GetZerobounceAndHMACApiUrls?';
                                                    if (isDNT == 1)
                                                        apiUrl = apiUrl + '&DNT=' + isDNT + '&';
                                                    apiUrl = apiUrl + 'email=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&origId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&pid=' + brandId + '&isContentGate=' + isContentGate + '&iss=' + iss + '&dType=' + devicetype;
                                                }
                                                apiUrl = apiUrl + '&chkStatus=' + chkStatus + '&chkType=' + chkType + '&reversChkExists=' + reversChkExists + '&reversChkStatus=' + reversChkStatus + '&reversChkType=' + reversChkType;
                                                if (usechkType2)
                                                    apiUrl = apiUrl + '&chkStatus2=' + chkStatus2 + '&chkType2=' + chkType2 + '&reversChkExists2=' + reversChkExists2 + '&reversChkStatus2=' + reversChkStatus2 + '&reversChkType2=' + reversChkType2;
                                                if (usechkType3)
                                                    apiUrl = apiUrl + '&chkStatus3=' + chkStatus3 + '&chkType3=' + chkType3 + '&reversChkExists3=' + reversChkExists3 + '&reversChkStatus3=' + reversChkStatus3 + '&reversChkType3=' + reversChkType3;
                                                if (chkFormIds.length > 0)
                                                    apiUrl = apiUrl + '&formIds=' + chkFormIds.join(',');
                                                var trackingData = window.ZITFunctions.retrieveTrackingData();
                                                var aNba = window.ZITUtils.readCookie('_sanba');
                                                apiUrl = apiUrl + "&ANba=" + aNba;
                                                apiUrl = apiUrl + "&nba=" + trackingData.Nba;
                                                apiUrl = apiUrl + "&eCanvas=" + isEmailCanvas;
                                                apiUrl = apiUrl + "&gd=" + trackingData.emailId;
                                                apiUrl = apiUrl + '&ra=' + trackingData.RA + '&ML=' + encodeURIComponent(trackingData.ML) + '&requestUrl=' + encodeURIComponent(window.location.href);
                                                if (isAbandon && isAbandon == 1) {
                                                    if (window.ZITFunctions)
                                                        cpId = window.ZITFunctions.retieveQueryString('cpId');
                                                    apiUrl = 'https://app.zeddit.com/Account/SendOfferLink?ue=' + emailAddress + '&firstName=' + firstName + '&surName=' + surName + '&fullName=' + fullName + '&userName=' + userName + '&password=' + password + '&dtId=' + encodeURIComponent(origId) + '&wid=' + wdgetId + '&cpId=' + cpId + '&pid=' + brandId + '&chkStatus=' + chkStatus + '&chkType=' + chkType + '&reversChkExists=' + reversChkExists + '&reversChkStatus=' + reversChkStatus + '&reversChkType=' + reversChkType + '&isContentGate=' + isContentGate + '&requestUrl=' + encodeURIComponent(window.location.href);
                                                }
                                                if (window.ZITFunctions) {
                                                    if (window.ZITFunctions.sendDataLayer)
                                                        window.ZITFunctions.sendDataLayer("subx-completion", wdgetId, widgetName);
                                                    if (isMembership && isMembership == 1) {
                                                        if (firstName && firstName != '')
                                                            window.ZITFunctions.sendGAData(81, 'Click to Create Member Account', wdgetId, 'Membership', false);
                                                        else
                                                            window.ZITFunctions.sendGAData(89, 'Click to Log In', wdgetId, 'Membership', false);
                                                    }
                                                    else if (isContentGate && isContentGate == 1) {
                                                        if (firstName && firstName != '')
                                                            window.ZITFunctions.sendGAData(70, 'Click to register', wdgetId, 'Registration', false);
                                                        else
                                                            window.ZITFunctions.sendGAData(91, 'Click to sign in', wdgetId, 'Registration', false);
                                                    }
                                                }

                                                //var lblErrorHandler = $(form).find(".error_handler-wid-" + wdgetId); //$(form).find("#error_handler");
                                                //if (lblErrorHandler.length > 0) {
                                                //    lblErrorHandler.html('');
                                                //}

                                                window.ZITUtils.writeDebug("Going to call " + apiUrl);
                                                $.ajax({
                                                    type: "GET",
                                                    url: apiUrl, //chkId,
                                                    processdata: false,
                                                    async: true,
                                                    dataType: "json",
                                                    success: function (result) {
                                                        if (result.Message === "success" || result.Status === "success") {
                                                            var isEmailCanvasSuccessShow = result.IsEmailCanvasSuccessShow;
                                                            if (isEmailCanvas != "") {
                                                                isEmailCanvasSuccessShow = (isEmailCanvas == "True");
                                                                window.ZITUtils.writeDebug("isEmailCanvasSuccessShow retrieved from code:" + isEmailCanvasSuccessShow + " " + isEmailCanvas);
                                                            }
                                                            var isMem = result.IsMembership;
                                                            var inStep = 0;
                                                            if (result.InStep && result.InStep == 1)
                                                                inStep = 1;
                                                            //console.log(JSON.stringify(result));
                                                            //console.log(JSON.stringify(isMem));
                                                            if (buttonControl)
                                                                buttonLoader.hide();
                                                            if (window.ZITFunctions && (!isContentGate || isContentGate == 0) && inStep == 0) {
                                                                window.ZITFunctions.setEmailAud();
                                                            }
                                                            //if (!isEmailCanvasSuccessShow) {
                                                            //    var spanCtrl = "<span id=\"txtemail-success\" class=\"help-block help-block-success\">" + result.Message + "</span>";
                                                            //}
                                                            try {
                                                                //$(form).find("#email").append(spanCtrl);

                                                                if (!isEmailCanvasSuccessShow) {
                                                                    var placement = $(form).find(".form-group-valiation#email #txtemail");
                                                                    for (var i = 0; i < placement.length; i++) {
                                                                        var hrClass = '', vrClass = '';
                                                                        if (placement[i] && placement[i].attributes['data-vm-hrclass'])
                                                                            hrClass = placement[i].attributes['data-vm-hrclass'].value;

                                                                        if (placement[i] && placement[i].attributes['data-vm-vrclass'])
                                                                            vrClass = placement[i].attributes['data-vm-vrclass'].value;

                                                                        var iNodeText = document.createElement('span');
                                                                        iNodeText.innerHTML = result.Message;
                                                                        iNodeText.setAttribute("id", "txtemail-error");

                                                                        if (hrClass && vrClass) {
                                                                            iNodeText.setAttribute("class", "help-block help-block-success block-" + hrClass + " " + vrClass);
                                                                            if (hrClass === 'top') {
                                                                                var elmHeight = placement[i].clientHeight;
                                                                                iNodeText.style.bottom = elmHeight + 'px';
                                                                                placement[i].before(iNodeText);
                                                                            } else {
                                                                                placement[i].after(iNodeText);
                                                                            }
                                                                        }
                                                                        else {
                                                                            iNodeText.setAttribute("class", "help-block help-block-success");
                                                                            placement[i].after(iNodeText);
                                                                        }

                                                                        var intMarginL = placement[i].getAttribute('data-padding-left');
                                                                        var intMarginR = placement[i].getAttribute('data-padding-right');

                                                                        if (intMarginL) placement[i].style.paddingLeft = intMarginL + 'px';
                                                                        if (intMarginR) placement[i].style.paddingRight = intMarginR + 'px';

                                                                        placement[i].parentNode.classList.add('has-error');
                                                                    }
                                                                }

                                                                //$(form).find(".form-group-valiation#email").append(spanCtrl);
                                                                $(form).find(".form-group-valiation#email svg").show();
                                                                $(form).find(".form-group-valiation#email").removeClass('active');
                                                                $(form).trigger("reset");
                                                                $.each(formElement, function (key, value) {
                                                                    if (value.id !== "buttonGroupPost") {
                                                                        var dataPlaceholder = value.getAttribute('data-placeholder');
                                                                        $(value).attr('placeholder', dataPlaceholder);

                                                                        var borderColor = value.getAttribute('tag');
                                                                        $(value).css({ "border-color": borderColor });
                                                                        //if (value.id === "txtpassword") {
                                                                        //    $(value).css({ "border-color": borderColor, "padding": "0 30px 0 15px" });
                                                                        //}
                                                                        //else if (value.id === "txtphoneNumber") {
                                                                        //    $(value).css({ "border-color": borderColor, "padding": "10px 30px 0 48px" });
                                                                        //}
                                                                        //else {
                                                                        //    $(value).css({ "border-color": borderColor, "padding": "10px 15px 0px" });
                                                                        //}
                                                                        //$(value).closest('.form-group-valiation').find('svg').css('margin-top', '4px');
                                                                    }
                                                                    if (isEmailCanvasSuccessShow) {
                                                                        $(value).hide();
                                                                        $(value).closest('.form-group-valiation').find('svg').hide();
                                                                    }
                                                                });
                                                            }
                                                            catch (error) {
                                                                if (window.ZITFunctions) {
                                                                    window.ZITFunctions.sendRaygunData(error, "EPPlaceholderUpdate");
                                                                }
                                                            }

                                                            //#region  -- Success Canvas Show
                                                            try {
                                                                //**** START canvas success show *****//
                                                                if (isEmailCanvasSuccessShow) {
                                                                    let divSucMsg = $(form).find(".success-msg-canvas-content").length;
                                                                    if (divSucMsg > 0) {
                                                                        $(form).find(".zit-widget-wrapper--new-panel").css('background-image', 'var(--bg-img-success-wid-' + wdgetId + ')');
                                                                        $(form).find(".success-msg-canvas-content .main-canvas-section, .success-msg-canvas-content .expand-collapse-canvas-content").hide();
                                                                        $(form).find(".success-msg-canvas-content .success-msg-canvas-section").show();

                                                                        var textNods = $(form).find(".success-msg-canvas-content .success-msg-canvas-section")[0].childNodes;
                                                                        if (textNods) {
                                                                            for (var i = 0; i < textNods.length; i++) {
                                                                                if (emailAddress) {
                                                                                    textNods[i].innerHTML = textNods[i].innerHTML.replace('{{user’s email}}', emailAddress);
                                                                                    textNods[i].innerHTML = textNods[i].innerHTML.replace('{user’s email}', emailAddress);
                                                                                }
                                                                            }
                                                                        }
                                                                    } else {
                                                                        $(form).find(".success-msg-container").show();
                                                                        $(form).find('.success-msg-container').html($(form).find('.success-msg-container').html().replace('@Email', emailAddress));
                                                                        $(form).find('.success-msg-container').html($(form).find('.success-msg-container').html().replace('{{user’s email}}', emailAddress));
                                                                        $(form).find('.success-msg-container').html($(form).find('.success-msg-container').html().replace('{user’s email}', emailAddress));

                                                                        var pTags = $(form).find("p");
                                                                        $.each(pTags, function (key, value) {
                                                                            if (value.id === "title" || value.id === "title_2" || value.id === "title_3" || value.id === "title_4" || value.id === "title_5" ||
                                                                                value.id === "sub-title" || value.id === "sub-title_2" || value.id === "sub-title_3" || value.id === "sub-title_4" || value.id === "sub-title_5" ||
                                                                                value.id === "body" || value.id === "body2" || value.id === "body3" || value.id === "body4" || value.id === "body5" ||
                                                                                value.id === "disclaimer_text" || value.id === "alert_text_1" || value.id === "alert_text_2" ||
                                                                                value.id === "hide_text" || value.id === 'hide_show_link' || value.id === 'hide_show_popup_link'
                                                                                ////****countdown time commnet
                                                                                || value.id === "countdown_time" || value.id === "error_handler"
                                                                            ) {
                                                                                $(value).hide();
                                                                            }
                                                                        });

                                                                        var aTages = $(form).find("a");
                                                                        $.each(aTages, function (key, value) {
                                                                            if (value.classList && value.classList.contains("btn-group-external-link")) {
                                                                                $(value).hide();
                                                                            }
                                                                        });

                                                                        var pDivs = $(form).find("div");
                                                                        $.each(pDivs, function (key, value) {
                                                                            if (value.id === "disclaimer" || value.id === "splash") {
                                                                                $(value).hide();
                                                                            }
                                                                        });

                                                                        var pImgs = $(form).find("img");
                                                                        $.each(pImgs, function (key, value) {
                                                                            if (value.id !== 'hide_show_icon' && value.id !== 'close_icon' && value.id !== 'close_icon_fw') {
                                                                                $(value).hide();
                                                                            }
                                                                        });

                                                                        var pHrs = $(form).find("hr");
                                                                        $.each(pHrs, function (key, value) {
                                                                            if (value.id === "line") {
                                                                                $(value).hide();
                                                                            }
                                                                        });
                                                                    }
                                                                }
                                                                //**** END canvas success show *****//
                                                            }
                                                            catch (error) {
                                                                if (window.ZITFunctions) {
                                                                    window.ZITFunctions.sendRaygunData(error, "EPEmailPostSuccessShow");
                                                                }
                                                            }
                                                            //#endregion -- Success Canvas Show

                                                            if (window.ZITFunctions) {
                                                                if (inStep == 0) {
                                                                    if ((isContentGate == 1 || (isMem && isMem == 1)) && result.userName && result.userName != "") {
                                                                        if (isMem && isMem == 1) {
                                                                            console.log("Membership Detected");
                                                                            window.ZITFunctions.setMembership();
                                                                            createCookieinDetails('_isFirst', 1, 365, 0, 0, 0);
                                                                            if ((window.ZITFunctions.getCookieValue('_sxMD') || '') == '' && result.RegisterSession && result.RegisterSession != '' && result.RegisterSession != '0')
                                                                                createCookieinDetails('_sxMD', result.RegisterSession, 365, 0, 0, 0);
                                                                        }
                                                                        else if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.scriptGroup != "undefined" && window.SubxClientEvents.scriptGroup == "VoxUS") {
                                                                            console.log("Vox Register Aud Detected");
                                                                            window.ZITFunctions.setEmailAud();
                                                                        }
                                                                        else{
                                                                            console.log("Register Aud Detected");
                                                                            window.ZITFunctions.setRegAud();
                                                                            if (typeof window.ZITUtils != "undefined" && typeof window.ZITUtils.localStorageStore != "undefined" ) {
                                                                                window.ZITUtils.localStorageStore('zit.pass', result.userName)
                                                                            }
                                                                            if ((window.ZITFunctions.getCookieValue('_sxRD') || '') == '' && result.RegisterSession && result.RegisterSession != '' && result.RegisterSession != '0')
                                                                                createCookieinDetails('_sxRD', result.RegisterSession, 365, 0, 0, 0);
                                                                        }
                                                                        window.ZITFunctions.setUserName(decodeURIComponent(result.userName));
                                                                        if (result.OrigSession && result.OrigSession != "")
                                                                            window.ZITFunctions.updateOrigSession(result.OrigSession);

                                                                        var cookieName = "zit.canvas-disclaimer.none.0";
                                                                        window.ZITUtils.createCookie(cookieName, '', -1);
                                                                        if (isMembership && isMembership == 1) {
                                                                            if (firstName && firstName != '')
                                                                                window.ZITFunctions.sendGAData(82, 'Create Member Account Successful', wdgetId, 'Membership', false, result.userCode);
                                                                            else if (userName && userName != '')
                                                                                window.ZITFunctions.sendGAData(84, 'Reset Password Click Successful', wdgetId, 'Membership', false, result.userCode);
                                                                            else
                                                                                window.ZITFunctions.sendGAData(83, 'Log in Click Successful', wdgetId, 'Membership', false, result.userCode);
                                                                        }
                                                                        else {
                                                                            var buttonText = "";
                                                                            try {
                                                                                buttonText = $callerBrandUrl["0"].getElementsByTagName('button')[0].innerText;
                                                                            }
                                                                            catch(e) { console.error(e); }
                                                                            if (buttonText && buttonText != '' && buttonText.toUpperCase().indexOf("SIGN ME UP") >= 0) {
                                                                                window.ZITFunctions.sendGAData(71, 'Registration Click Successful', wdgetId + " " + result.userName, 'Registration', false, result.userCode);
                                                                            }
                                                                            else if (firstName && firstName != '')
                                                                                window.ZITFunctions.sendGAData(71, 'Registration Click Successful', wdgetId + " " + result.userName, 'Registration', false, result.userCode);
                                                                            else
                                                                                window.ZITFunctions.sendGAData(72, 'Sign in Click Successful', wdgetId, 'Registration', false, result.userCode);
                                                                        }
                                                                        var url = window.location.href.replace("https://", "");
                                                                        var ucomponents = url.split('/');
                                                                        if (window.SubxClientEvents && typeof window.SubxClientEvents.customizepostSignUp != "undefined") {
                                                                            window.SubxClientEvents.customizepostSignUp(result, recaptToken);
                                                                        }
                                                                        else if (ucomponents && ucomponents.length > 3) {
                                                                            if (typeof window.SubxClientEvents != "undefined" && window.SubxClientEvents.scriptGroup == "HearstUK" && typeof window.SubxClientEvents.newcustomizeMasking != "undefined") {
                                                                                var container = window.document.getElementsByClassName('zeddit-rcm is-cg')[0];
                                                                                //hide the canvas
                                                                                container.classList.remove('loaded');
                                                                                container.style.height = 0;
                                                                                window.SubxClientEvents.unblockContent();
                                                                                var trackingData = window.ZITFunctions.retrieveTrackingData();
                                                                                if (trackingData && trackingData.isEmailAud == 1) {
                                                                                    console.log("Signed up/in successfully!");
                                                                                }
                                                                                else {
                                                                                    window.ZITFunctions.sendRaygunData(new Error("Reg Flag not updated " + origId + " " + result.userName + " " + JSON.stringify(trackingData) + document.cookie, "EPRegSignUp"));
                                                                                }
                                                                                return;
                                                                            }
                                                                            else {
                                                                                var trackingData = window.ZITFunctions.retrieveTrackingData();
                                                                                if (trackingData && trackingData.isEmailAud == 1) {
                                                                                    console.log("Signed up/in successfully!");
                                                                                    location.reload();
                                                                                }
                                                                                else {
                                                                                    if (typeof window.ZITUtils != "undefined" && typeof window.ZITUtils.localStorageStore != "undefined" && window.ZITUtils.localStorageStore('zit.pass') != null && window.ZITUtils.localStorageStore('zit.pass') != "") {
                                                                                        location.reload();
                                                                                    }
                                                                                    else {
                                                                                        window.ZITFunctions.sendRaygunData(new Error("Reg Flag not updated " + origId + " " + result.userName + " " + JSON.stringify(trackingData) + " " + document.cookie, "EPRegSignUp"));
                                                                                        setTimeout(function () {
                                                                                            location.reload();
                                                                                        }, 1000);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        else
                                                                            console.log("Not an article no refresh required.");
                                                                    }
                                                                    else {
                                                                        console.log("Non Content Gate ");
                                                                        window.ZITFunctions.sendGAData(47, (widgetName && widgetName != "") ? widgetName : "News Letter Signup Successful", wdgetId, 'News Letter', false, result.userCode);
                                                                        if (result.userName && result.userName != "" && typeof window.ZITFunctions.setEmailId != "undefined")
                                                                            window.ZITFunctions.setEmailId(result.userName);
                                                                        if (isUpdateReg == 1)
                                                                            window.ZITFunctions.setRegAud();
                                                                        if (window.SubxClientEvents && typeof window.SubxClientEvents.postSignUpNewsletter != "undefined") {
                                                                            window.SubxClientEvents.postSignUpNewsletter(result);
                                                                        }
                                                                    }
                                                                    if (isMembership == 1) {
                                                                        window.ZITFunctions.sendGAData(88, 'Member logged in', wdgetId, 'Membership', false, result.userCode);
                                                                    }
                                                                } //in the middle of steps
                                                                else {
                                                                    if (result.userName != "")
                                                                        window.ZITFunctions.setUserName(decodeURIComponent(result.userName));
                                                                    window.ZITUtils.writeDebug("In the middle of registration,no identify should be updated.");
                                                                }
                                                                if (!isEmailCanvasSuccessShow) {
                                                                    var popupHtml = document.getElementsByClassName('exit-intent-popup');
                                                                    if (popupHtml && popupHtml.length > 0) {
                                                                        window.ZITUtils.writeDebug(JSON.stringify(popupHtml[0].classList));
                                                                        if (popupHtml[0].classList.contains('visible')) {
                                                                            popupHtml[0].classList.remove('visible');
                                                                            window.ZITFunctions.sendGAData(0, 'CloseModal', wdgetId, 'Canvas', false);
                                                                            window.ZITUtils.writeDebug("Popup Closed.");
                                                                            try {
                                                                                $(document).unbind("idle.idleTimer");
                                                                            }
                                                                            catch (error) {
                                                                                if (window.ZITFunctions)
                                                                                    window.ZITFunctions.sendRaygunData(error, 'UnbindIdleTimer');
                                                                            }
                                                                        }
                                                                    }
                                                                    else {
                                                                        window.ZITUtils.writeDebug("Popup not found.");
                                                                    }
                                                                }
                                                            }
                                                            else
                                                                console.log("window.ZITFunctions not found");
                                                            isSuccess = true;
                                                        } //success
                                                        else {
                                                            if (buttonControl)
                                                                buttonLoader.hide();

                                                            if (lblErrorHandler.length > 0) {
                                                                lblErrorHandler.html(result.Message);
                                                            } else {
                                                                console.log(result.Message);
                                                            }

                                                            if (canvasVersionId >= 2) {
                                                                //*** START - Show incorrect password error message
                                                                var elmPswd = $(form).find("#password .form-group-valiation #txtpassword");
                                                                for (var i = 0; i < elmPswd.length; i++) {
                                                                    if (elmPswd[i] && elmPswd[i].attributes['data-show-errormsg'].value === 'true') {
                                                                        var hrClass = '', vrClass = '';
                                                                        if (elmPswd[i] && elmPswd[i].attributes['data-vm-hrclass'])
                                                                            hrClass = elmPswd[i].attributes['data-vm-hrclass'].value;

                                                                        if (elmPswd[i] && elmPswd[i].attributes['data-vm-vrclass'])
                                                                            vrClass = elmPswd[i].attributes['data-vm-vrclass'].value;

                                                                        var iNodeText = document.createElement('span');
                                                                        iNodeText.innerHTML = result.Message;
                                                                        iNodeText.setAttribute("id", "txtpassword-error");

                                                                        if (hrClass && vrClass) {
                                                                            iNodeText.setAttribute("class", "help-block block-" + hrClass + " " + vrClass);
                                                                            if (hrClass === 'top') {
                                                                                var elmHeight = elmPswd[i].clientHeight;
                                                                                iNodeText.style.bottom = elmHeight + 'px';
                                                                                elmPswd[i].before(iNodeText);
                                                                            } else {
                                                                                elmPswd[i].after(iNodeText);
                                                                            }
                                                                        }
                                                                        else {
                                                                            iNodeText.setAttribute("class", "help-block");
                                                                            elmPswd[i].after(iNodeText);
                                                                        }

                                                                        var intMarginL = elmPswd[i].getAttribute('data-padding-left');
                                                                        var intMarginR = elmPswd[i].getAttribute('data-padding-right');

                                                                        if (intMarginL) elmPswd[i].style.paddingLeft = intMarginL + 'px';
                                                                        if (intMarginR) elmPswd[i].style.paddingRight = intMarginR + 'px';

                                                                        elmPswd[i].parentNode.classList.add('has-error');
                                                                    }
                                                                }
                                                                //*** END - Show incorrect password error message
                                                            }
                                                            if (inStep == 0) {
                                                                if (isContentGate == 1 && window.ZITFunctions) {
                                                                    if (isMembership && isMembership == 1 && firstName && firstName != "")
                                                                        window.ZITFunctions.sendGAData(85, 'Create Member Account Unsuccessful', wdgetId, 'Membership', false);
                                                                    else if (isMembership && isMembership == 1 && ((!firstName) || firstName == ""))
                                                                        window.ZITFunctions.sendGAData(86, 'Log in Click Unsuccessful ', wdgetId, 'Membership', false);
                                                                    else if (firstName && firstName != "")
                                                                        window.ZITFunctions.sendGAData(73, 'Registration Click Unsuccessful', wdgetId, 'Registration', false);
                                                                    else
                                                                        window.ZITFunctions.sendGAData(74, 'Sign in Click Unsuccessful', wdgetId, 'Registration', false);
                                                                }
                                                                else
                                                                    console.log("window.ZITFunctions not found");
                                                            }
                                                            else {
                                                                window.ZITFunctions.sendGAData(92, 'Submit Email Unsuccessful', wdgetId, 'Registration', false);
                                                                window.ZITUtils.writeDebug("In the middle of registration,no event should be sent.");
                                                            }
                                                            isSuccess = false;
                                                            //$(form).find("#txtemail").css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });

                                                            //var spanCtrl = "<span id=\"txtemail-error\" class=\"help-block\">" + result.Message + "</span>";
                                                            //$(form).find("#email").append(spanCtrl);
                                                            //$(form).find("#txtemail").css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });
                                                        }

                                                        //#region -- Function to Show Canvas
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
                                                            if (typeof window.SubxClientEvents.executeSpecialCanvasLogic != "undefined") {
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
                                                            else {
                                                                window.ZITUtils.writeDebug("Not a post canvas.");
                                                            }
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

                                                            //#region -- Section to Password Toggle
                                                            if (typeof window.initializeCanvasMethods !== "undefined") {
                                                                window.initializeCanvasMethods($(wrapperHtml)[0]);
                                                            }
                                                            //#endregion -- Section to Password Toggle

                                                            //#region -- Section to Close Button
                                                            var closeButton = $(wrapperHtml).find(".animate-close");
                                                            for (var i = 0; closeButton.length > i; i++) {
                                                                if (typeof closeButton[i] != 'undefined' && closeButton[i]) {
                                                                    bindEvent(closeButton[i], 'click', function (e) {
                                                                        if (columnDiv) {
                                                                            columnDiv.removeClass('zit-widget-wrapper--new-panel-show');
                                                                            $(columnDiv).hide();
                                                                        }
                                                                        if (popupHtml) {
                                                                            popupHtml.removeClass('visible');
                                                                        }
                                                                    });
                                                                }
                                                            }
                                                            //#endregion -- Section to Close Button

                                                            //#region -- Section to Hide/Show Button
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
                                                            //#endregion -- Section to Hide/Show Button

                                                            //#region -- Section to Expand/Collapse Button
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
                                                            //#endregion -- Section to Expand/Collapse Button
                                                        }
                                                        //#endregion -- Function to Show Canvas

                                                        if (isSuccess) {
                                                            var wrapperHtml = $(form).parent().closest('div.js-zitWidgetWrapper'); //$(form).parent().closest('div')
                                                            var divZedditRCM = $(form).parent().closest('div.zeddit-rcm'); //$(form).parent().closest('div').parent().closest('div')
                                                            var isChildGate = 0;
                                                            if ($(divZedditRCM)[0] && $(divZedditRCM)[0].attributes['data-iscg'])
                                                                isChildGate = $(divZedditRCM)[0].attributes['data-iscg'].value;
                                                            if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.unblockContent != "undefined") {
                                                                window.SubxClientEvents.unblockContent();
                                                            }
                                                            else {
                                                                window.ZITUtils.writeDebug('Unblockcontent not found.');
                                                            }
                                                            try {
                                                                if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.getLinkedCanvas != "undefined" && result.reverseWid && result.reverseWid>0) {
                                                                    reversewid = result.reverseWid;
                                                                    showCanvas(result.rcmHtml, result.method);
                                                                    if (result.CachedCanvas && result.CachedCanvas != null && result.CachedCanvas.length > 0)
                                                                    {
                                                                        window.SubxExtCanvas = result.CachedCanvas;
                                                                    }
                                                                    else
                                                                        window.SubxExtCanvas = null;
                                                                    if (typeof window.SubxClientEvents != "undefined" && typeof window.SubxClientEvents.sendDataEvent != "undefined") {
                                                                        if (result.SignInType == 3) {
                                                                            window.SubxClientEvents.SailthruId = result.EncodedAuthUId
                                                                            window.ZITFunctions.sendGAData(42, 'Reverse Canvas', wdgetId, 'Registration', false);
                                                                        }
                                                                        else
                                                                            window.ZITFunctions.sendGAData(44, 'Reverse Canvas', reversewid, 'Registration', false);
                                                                    }
                                                                }
                                                                else {
                                                                    var accessBaseUrl = 'https://entrytest.zeddit.com';
                                                                    //if (isChildGate == 1)
                                                                    //   accessBaseUrl = 'https://accesscanvas.zeddit.com';
                                                                    apiUrl = accessBaseUrl + '/Widget/GetCustomWidget' + (isDNT == 1 ? 'DNT' : '') + '?p_id=' + brandId + '&wid=' + reversewid + '&isContentGate=' + isChildGate + '&host=' + window.location.href; //'&lc=1'
                                                                    //**** START reverse canvas *****//
                                                                    if (reversewid !== undefined && reversewid !== null && reversewid !== '' && parseInt(reversewid) > 0) {
                                                                        $.ajax({
                                                                            type: "GET",
                                                                            url: apiUrl, //chkId,
                                                                            processdata: false,
                                                                            async: true,
                                                                            dataType: "json",
                                                                            success: function (result) {
                                                                                if (isTransitionEffect === "true") {
                                                                                    $(wrapperHtml).css({ "visibility": "hidden", "opacity": "0", "transition": "visibility 0s linear 0.33s, opacity 0.33s linear" });
                                                                                    setTimeout(showCanvas, 1000, result.response.rcmHtml, result.response.method);
                                                                                } else {
                                                                                    showCanvas(result.response.rcmHtml, result.response.method);
                                                                                }
                                                                            },
                                                                            error: function (err) {
                                                                            }
                                                                        });
                                                                    }
                                                                    //**** END reverse canvas *****//
                                                                }
                                                            }
                                                            catch (error) {
                                                                if (window.ZITFunctions) {
                                                                    window.ZITFunctions.sendRaygunData(error, "EPReverseEmail");
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            window.ZITUtils.writeDebug("Not successful!");
                                                        }
                                                    },
                                                    error: function (errorData) {
                                                        if (buttonControl)
                                                            buttonLoader.hide();
                                                        //var spanCtrl = "<span id=\"txtemail-error\" class=\"help-block\"> Sorry, there was an issue. Try again or contact us.</span>";
                                                        //$(form).find(".form-group-valiation#email").append(spanCtrl);
                                                        //$(form).find(".form-group-valiation #txtemail").css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });

                                                        if (lblErrorHandler.length > 0) {
                                                            lblErrorHandler.html('Sorry, there was an issue. Try again or contact us.');
                                                        } else {
                                                            console.log('Sorry, there was an issue. Try again or contact us.');
                                                        }
                                                        $(form).find(".form-group-valiation #txtemail").css({ "border-color": "#dc3545" });

                                                        if (errorData)
                                                            window.ZITFunctions.sendRaygunData(new Error(JSON.stringify(errorData)), 'EmailPostingError');
                                                        else
                                                            window.ZITFunctions.sendRaygunData("Error in posting to " + wdgetId, 'EmailPostingError');
                                                    }
                                                });

                                            }
                                            return false;
                                        }
                                        catch (error) {
                                            e.preventDefault();
                                            window.ZITFunctions.sendRaygunData(error, 'EmailSubmitHandler');
                                            if (buttonControl)
                                                buttonLoader.hide();
                                            //var spanCtrl = "<span id=\"txtemail-error\" class=\"help-block\"> Sorry, there was an issue. Try again or contact us.</span>";
                                            //$(form).find(".form-group-valiation#email").append(spanCtrl);
                                            //$(form).find(".form-group-valiation #txtemail").css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });

                                            if (lblErrorHandler.length > 0) {
                                                lblErrorHandler.html('Sorry, there was an issue. Try again or contact us.');
                                            } else {
                                                console.log('Sorry, there was an issue. Try again or contact us.');
                                            }
                                            $(form).find(".form-group-valiation #txtemail").css({ "border-color": "#dc3545" });
                                        }
                                    };
                                    if (typeof isReCaptchaOn == "undefined" || isReCaptchaOn == null) {
                                        if (typeof window.SubxSetting != "undefined") {
                                            isReCaptchaOn = window.SubxSetting.isReCaptchaOn;
                                            reCaptchaSiteKey = window.SubxSetting.reCaptchaSiteKey;
                                        }
                                        else {
                                            var trackingData = window.ZITFunctions.retrieveTrackingData();
                                            isReCaptchaOn = trackingData.isReCaptchaOn;
                                            reCaptchaSiteKey = trackingData.reCaptchaSiteKey;
                                        }
                                    }
                                    else
                                        window.ZITUtils.writeDebug("No need to retrieve recaptcha info.");
                                    window.ZITUtils.writeDebug("isReCaptchaOn:" + isReCaptchaOn);
                                    if (isReCaptchaOn) {
                                        if (window.SubxClientEvents && window.SubxClientEvents.recapV3 && window.SubxClientEvents.recapV3 == 1) {
                                            window.ZITUtils.writeDebug("Go to grecaptchaV3 " + isReCaptchaOn + " " + window.ZITFunctions.host() + " " + reCaptchaSiteKey);
                                            grecaptcha.ready(function () {
                                                grecaptcha.execute(reCaptchaSiteKey, { action: 'newsletterSubmit' }).then(function (token) {
                                                    recaptToken = token;
                                                    toggleOpenTimer();
                                                });
                                            });
                                        }
                                        else {
                                            grecaptcha.enterprise.ready(function () {
                                                window.ZITUtils.writeDebug("Go to grecaptcha enterprice " + isReCaptchaOn + " " + window.ZITFunctions.host() + " " + reCaptchaSiteKey);
                                                grecaptcha.enterprise.execute(reCaptchaSiteKey, { action: 'submit' }).then(function (token) {
                                                    recaptToken = token;
                                                    toggleOpenTimer();
                                                });
                                            });
                                        }
                                    }
                                    else {
                                        toggleOpenTimer();
                                    }

                                }
                            });
                        }
                        else
                            console.log("Form validator is disabled");
                        var $txtFirstName = $(this).find(".form-group-valiation #txtfirstName");
                        if ($txtFirstName) {
                            $txtFirstName.one('input', function () {
                                var widgetId = 0;
                                try {
                                    var $button = $(this).closest(".zit-widget-wrapper--new-panel");
                                    widgetId = $button[0].attributes['data-wid'].nodeValue;
                                    if (window.ZITFunctions) {
                                        window.ZITFunctions.sendGAData(54, 'Enter First Name Field', widgetId, 'Registration', false);
                                    }
                                }
                                catch (error) {
                                    if (window.ZITFunctions)
                                        window.ZITFunctions.sendRaygunData(error, '$txtFirstName-' + widgetId);
                                }
                            });
                        }
                        var $txtSurName = $(this).find(".form-group-valiation #txtsurName");
                        if ($txtSurName) {
                            $txtSurName.one('input', function () {
                                var widgetId = 0;
                                try {
                                    var $button = $(this).closest(".zit-widget-wrapper--new-panel");
                                    widgetId = $button[0].attributes['data-wid'].nodeValue;
                                    if (window.ZITFunctions) {
                                        window.ZITFunctions.sendGAData(52, 'Enter Surname Field', widgetId, 'Registration', false);
                                    }
                                }
                                catch (error) {
                                    if (window.ZITFunctions)
                                        window.ZITFunctions.sendRaygunData(error, '$txtSurName-' + widgetId);
                                }
                            });
                        }
                        var $txtemail = $(this).find(".form-group-valiation #txtemail");
                        if ($txtemail) {
                            if (window.SubxClientEvents && window.SubxClientEvents.scriptGroup == "VoxUS" && window.ZITUtils.readCookie("_sem") && window.ZITUtils.readCookie("_sem") != "") {
                                var canvasSequenceItem = $(this).find(".zit-widget-wrapper.zit-widget-wrapper--new-panel")[0].attributes['data-sequence'];
                                if (typeof canvasSequenceItem == "undefined") {
                                    $txtemail.val(window.subxEmail);
                                    window.ZITUtils.writeDebug("Email has been initialized to " + $txtemail.val());
                                }
                                else
                                    window.ZITUtils.writeDebug("New email canvas type");
                            }
                            $txtemail.one('input', function () {
                                var widgetId = 0;
                                try {
                                    var $button = $(this).closest(".zit-widget-wrapper--new-panel");
                                    widgetId = $button[0].attributes['data-wid'].nodeValue;
                                    if (window.ZITFunctions) {
                                        window.ZITFunctions.sendGAData(53, 'Enter Email Field', widgetId, 'Registration', false);
                                    }
                                }
                                catch (error) {
                                    if (window.ZITFunctions)
                                        window.ZITFunctions.sendRaygunData(error, '$txtemail-' + widgetId);
                                }
                            });
                        }
                        var $txtfreetxt = $(this).find(".form-group-valiation #txtfree_text");
                        if ($txtfreetxt) {
                            $txtfreetxt.one('input', function () {
                                var widgetId = 0;
                                try {
                                    var $button = $(this).closest(".zit-widget-wrapper--new-panel");
                                    widgetId = $button[0].attributes['data-wid'].nodeValue;
                                    if (window.ZITFunctions) {
                                        window.ZITFunctions.sendGAData(54, 'Enter Password Hint Field', widgetId, 'Registration', false);
                                    }
                                }
                                catch (error) {
                                    if (window.ZITFunctions)
                                        window.ZITFunctions.sendRaygunData(error, 'txtfree_text-' + widgetId);
                                }
                            });
                        }
                        var $txtphoneNumber = $(this).find(".form-group-valiation #txtphoneNumber");
                        if ($txtphoneNumber) {
                            $txtphoneNumber.one('input', function () {
                                var widgetId = 0;
                                try {
                                    var $button = $(this).closest(".zit-widget-wrapper--new-panel");
                                    widgetId = $button[0].attributes['data-wid'].nodeValue;
                                    if (window.ZITFunctions) {
                                        window.ZITFunctions.sendGAData(55, 'Enter Phone Number Field', widgetId, 'Registration', false);
                                    }
                                }
                                catch (error) {
                                    if (window.ZITFunctions)
                                        window.ZITFunctions.sendRaygunData(error, 'phonenumber-' + widgetId);
                                }
                            });
                        }
                        var $reversbox = $(this).find(".cls-checkbox");
                        if ($reversbox) {
                            $reversbox.change(function () {
                                var widgetId = 0;
                                try {
                                    if (this.checked) {
                                        widgetId = this.attributes['data-wid'].nodeValue;
                                        if (window.ZITFunctions) {
                                            window.ZITFunctions.sendGAData(90, 'Newsletter Opt Out Click', widgetId, 'Registration', false);
                                        }
                                    }
                                }
                                catch (error) {
                                    if (window.ZITFunctions)
                                        window.ZITFunctions.sendRaygunData(error, '$reversbox-' + widgetId);
                                }
                            });
                        }
                        console.log("Subxtech: Form Canvas has been loaded.");
                        //enable post buttonvar 
                        if (window.SubxClientEvents && window.SubxClientEvents.formButtonDynamic && window.SubxClientEvents.formButtonDynamic == 1) {
                            console.log("Subxtech: Form button will be dynamic enabled.");
                        }
                        else {
                            console.log("Subxtech: Form button will be enabled.");
                            //enable post buttonvar 
                            $postbutton = $(this).find("#buttonGroupPost, button[data-id='actionButtonPost']");
                            if (typeof $postbutton != "undefined")
                                $postbutton.removeClass('canvas-btn-disabled');
                        }

                        $getbutton = $(this).find("#buttonGroup, button[data-id='actionButton']");
                        if (typeof $getbutton != "undefined")
                            $getbutton.removeClass('canvas-btn-disabled');

                        $logoutbutton = $(this).find("#buttonGroupLogout, button[data-id='actionButtonLogout']")
                        if (typeof $logoutbutton != "undefined")
                            $logoutbutton.removeClass('canvas-btn-disabled');

                        $externalbutton = $(this).find("#buttonGroupExternalLink, .btn-group-external-link")
                        if (typeof $externalbutton != "undefined")
                            $externalbutton.removeClass('canvas-btn-disabled');
                        console.log("Subxtech: Form button has been enabled.");
                    }
                    else if (!$(this).attr('id')) {
                        console.log("No id for the form");
                    }
                    else {
                        console.log($(this).attr('id'));
                    }
                });

            })(jQuery);
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'LoadCanvasFormValidateV2');
        }
    };

    var bindEvent = function (el, event, fn) {
        if (window.addEventListener) {
            el.addEventListener(event, fn, false);
        } else {
            el.attachEvent(event, fn);
        }
    };

    function createCookieinDetails(key, value, days, hours, minutes, seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)); //mileseconds
        var expires = "; expires=" + date.toGMTString();
        console.log("2 Cookie created " + key + "=" + value + expires + "; path=/;samesite=lax;");
        document.cookie = key + "=" + value + expires + "; path=/;samesite=lax;";
    };

    //$(document).ready(function () {
    //    if ($.validator) {
    //        console.log("validator has been loaded");
    //        LoadCanvasFormValidate();
    //    }
    //    else {
    //        console.log("validator has not been loaded, wait for 2 seconds");
    //        setTimeout(LoadCanvasFormValidate, 2000);
    //    }
    //});

    //function loadCanvasFormValidateOld() {
    //    $('form').each(function () {
    //        $(this).validate({
    //            errorElement: 'span', //default input error message container
    //            errorClass: 'help-block', // default input error message class
    //            focusInvalid: false, // do not focus the last invalid input
    //            ignore: "", // validate all fields including form hidden input
    //            messages:
    //                {
    //                    txtfullName: "Full name is required",
    //                    txtfirstName: "First name is required",
    //                    txtsurName: "Surname is required",
    //                    txtemail: {
    //                        required: "Email is required",
    //                        email: "Email must be a valid email address"
    //                    }
    //                },
    //            rules: {
    //                txtfullName: {
    //                    required: true
    //                },
    //                txtfirstName: {
    //                    required: true
    //                },
    //                txtsurName: {
    //                    required: true
    //                },
    //                txtemail: {
    //                    required: true,
    //                    email: true
    //                }
    //            },
    //            highlight: function (label) {
    //                $(label).closest('.form-group-valiation').removeClass('has-success').addClass('has-error');
    //                $(label).removeAttr('placeholder');
    //                $(label).css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });
    //                $(label.form).find("#txtemail-success").remove();
    //            },
    //            success: function (label, element) {
    //                $(label).closest('.form-group-valiation').removeClass('has-error');
    //                label.remove();
    //                var borderColor = element.getAttribute('tag');
    //                $(element).css({ "border-color": borderColor, "padding": "0px 15px" });
    //                $(element.form).find("#txtemail-success").remove();
    //            },
    //            errorPlacement: function (error, element) {
    //                var placement = element.closest('.input-group-valiation');
    //                if (!placement.get(0)) {
    //                    placement = element;
    //                }
    //                if (error.text() !== '') {
    //                    placement.after(error);
    //                }
    //            },
    //            submitHandler: async function (form, e) {
    //                var $caller = $(form).find("#buttonGroupPost"); //($(form).hasClass('canvas-loading-btn') ? $(form) : $(form).parent());
    //                var $callerBrandUrl = $(form).find(".zit-widget-wrapper.zit-widget-wrapper--new-panel"); //form.offsetParent.dataset.brandurl;

    //                var btnDataType = $caller["0"].attributes['data-type'].nodeValue;
    //                var brandUrl = $callerBrandUrl["0"].attributes['data-brandurl'].nodeValue;
    //                //const proxyurl = "https://cors-anywhere.herokuapp.com/";

    //                e.preventDefault();
    //                if (btnDataType === "get") {
    //                }
    //                else {
    //                    var buttonLoader = new zit.getCanvasButtonLoader($caller);

    //                    if ($caller.attr('disabled') == 'disabled') { return; }
    //                    buttonLoader.show();

    //                    var formElement = form.elements;
    //                    var emailAddress = '';
    //                    if (form.elements.txtemail === undefined || form.elements.txtemail === null || form.elements.txtemail === '') {
    //                        buttonLoader.hide();
    //                        return false;
    //                    }
    //                    else {
    //                        emailAddress = form.elements.txtemail.value;
    //                    }

    //                    var chkId = '';
    //                    $(form).find(".cls-checkbox").each(function () {
    //                        debugger;
    //                        var checkbox = $(this).context;
    //                        var status = checkbox.checked ? 1 : 0;
    //                        var type = checkbox.dataset.type;
    //                        var brandId = checkbox.dataset.pid;
    //                        var wid = checkbox.dataset.wid;
    //                        chkId += status + "_" + type + "_" + brandId + "_" + wid + ",";
    //                    });
    //                    if (chkId != '')
    //                        chkId = "&optIn=" + encodeURIComponent(chkId);

    //                    // **START Get Get Zerobounce And HMAC Api Urls From Config
    //                    $.ajax({
    //                        type: "GET",
    //                        url: /*brandUrl +*/ '/Widget/GetZerobounceAndHMACApiUrls?email=' + emailAddress + chkId,
    //                        processdata: false,
    //                        async: true,
    //                        //contentType: "application/json; charset=utf-8",
    //                        dataType: "json",
    //                        success: function (resultApiUrls) {


    //                            var url = resultApiUrls.ZerobounceValidateBaseUrl + "?api_key=" + resultApiUrls.ZerobounceValidateApiKey + "&email=" + emailAddress + "&ip_address=";
    //                            $.ajax({
    //                                type: "GET",
    //                                url: url,
    //                                processdata: false,
    //                                async: true,
    //                                dataType: 'json',
    //                                success: function (result) {
    //                                    if (result.status === "invalid") {
    //                                        var spanCtrl = "<span id=\"txtemail-error\" class=\"help-block\">Email is not valid</span>";
    //                                        $(form).find("#email").append(spanCtrl);
    //                                        $(form).find("#txtemail").css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });
    //                                        buttonLoader.hide();
    //                                    }
    //                                    else {
    //                                        //** START Search HMAC API
    //                                        debugger;
    //                                        var hearstSearchUrl = resultApiUrls.HMACApiBaseUrl + "/data/search";
    //                                        var accesstoken = getHMACAccesstoken('POST', hearstSearchUrl, resultApiUrls.HMACApiSecret, resultApiUrls.HMACApiUsername);
    //                                        var jsonData = '{"fields": ["id", "mail", "created_dt", "modified_dt"],"filter": {"and": [{"MAIL": "' + emailAddress + '","op": "="}]}}';
    //                                        $.ajax({
    //                                            type: "POST",
    //                                            url: hearstSearchUrl, /*proxyurl +*/
    //                                            async: true,
    //                                            headers: {
    //                                                "Content-Type": "application/json",
    //                                                "Authorization": accesstoken,
    //                                            },
    //                                            dataType: 'json',
    //                                            data: jsonData,
    //                                            success: function (result) {
    //                                                if (result.total > 0) {
    //                                                    var spanCtrl = "<span id=\"txtemail-error\" class=\"help-block\">Email already added</span>";
    //                                                    $(form).find("#email").append(spanCtrl);
    //                                                    $(form).find("#txtemail").css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });
    //                                                    buttonLoader.hide();
    //                                                }
    //                                                else {
    //                                                    //** START Save HMAC API
    //                                                    var hearstSaveUrl = resultApiUrls.HMACApiBaseUrl + "/profiles";
    //                                                    var accesstoken = getHMACAccesstoken('POST', hearstSaveUrl, resultApiUrls.HMACApiSecret, resultApiUrls.HMACApiUsername);
    //                                                    var jsonSaveData = '{"MAIL": "' + emailAddress + '"}';
    //                                                    $.ajax({
    //                                                        type: "POST",
    //                                                        url: hearstSaveUrl, /*proxyurl +*/
    //                                                        async: true,
    //                                                        headers: {
    //                                                            "Content-Type": "application/json",
    //                                                            "Authorization": accesstoken,
    //                                                        },
    //                                                        dataType: 'json',
    //                                                        data: jsonSaveData,
    //                                                        success: function (result) {
    //                                                            if (result.Id > 0) {

    //                                                                //** Save Canvas Disclaimer Opt In
    //                                                                var chkId = '';
    //                                                                $(form).find(".cls-checkbox").each(function () {
    //                                                                    debugger;
    //                                                                    var checkbox = $(this).context;
    //                                                                    var status = checkbox.checked ? 1 : 0;
    //                                                                    var type = checkbox.dataset.type;
    //                                                                    var brandId = checkbox.dataset.pid;
    //                                                                    var wid = checkbox.dataset.wid;
    //                                                                    chkId += status + "_" + type + "_" + brandId + "_" + wid + ",";
    //                                                                });
    //                                                                if (chkId != '')
    //                                                                    chkId = "&optIn=" + encodeURIComponent(chkId);
    //                                                                $.ajax({
    //                                                                    type: "POST",
    //                                                                    url: brandUrl + '/Campaign/RecordCanvasDisclaimerOptIn?email=' + $(form).find("#txtemail").val() + chkId,
    //                                                                    contentType: "application/json; charset=utf-8",
    //                                                                    dataType: "json"
    //                                                                }).then(function () {
    //                                                                });
    //                                                                //** END Save Canvas Disclaimer Opt In

    //                                                                buttonLoader.hide();
    //                                                                var spanCtrl = "<span id=\"txtemail-success\" class=\"help-block help-block-success\">Your email was successfully added</span>";
    //                                                                $(form).find("#email").append(spanCtrl);

    //                                                                $(form).trigger("reset");
    //                                                                $.each(formElement, function (key, value) {
    //                                                                    if (value.id !== "buttonGroupPost") {
    //                                                                        var dataPlaceholder = value.getAttribute('data-placeholder');
    //                                                                        $(value).attr('placeholder', dataPlaceholder);

    //                                                                        var borderColor = value.getAttribute('tag');
    //                                                                        $(value).css({ "border-color": borderColor, "padding": "10px 15px 0px" });
    //                                                                    }
    //                                                                });
    //                                                            }
    //                                                            else {
    //                                                                buttonLoader.hide();
    //                                                                var spanCtrl = "<span id=\"txtemail-error\" class=\"help-block\">Your email failed to add</span>";
    //                                                                $(form).find("#email").append(spanCtrl);
    //                                                                $(form).find("#txtemail").css({ "border-color": "#dc3545", "padding": "10px 15px 0px" });
    //                                                            }
    //                                                        },
    //                                                        error: function (xhr, status, error) {
    //                                                            buttonLoader.hide();
    //                                                        }
    //                                                    });
    //                                                    //** END Save HMAC API
    //                                                }
    //                                            },
    //                                            error: function (xhr, status, error) {
    //                                                buttonLoader.hide();
    //                                            }
    //                                        });
    //                                        // **END Search HMAC API
    //                                    }
    //                                },
    //                                error: function (xhr, status, error) {
    //                                    buttonLoader.hide();
    //                                }
    //                            });
    //                        },
    //                        error: function (e) {
    //                            buttonLoader.hide();
    //                        }
    //                    });
    //                    // **END Get Get Zerobounce And HMAC Api Urls From Config
    //                }
    //                return false;
    //            }
    //        });
    //    });
    //};

    //function getHMACAccesstoken(method, url, secret, username) {
    //    debugger;
    //    var timestamp = Math.round((new Date()).getTime() / 1000);
    //    var timestampsdf = (new Date()).getTime();
    //    var method = method;
    //    var path = url.replace(/^.*\/\/[^\/]+/, '');
    //    var prehash = timestamp + '-' + method + '-' + path;
    //    var hash = CryptoJS.HmacSHA256(prehash, secret);
    //    var accesstoken = 'hmac ' + username + ':' + String(hash).toUpperCase() + ':' + timestamp;
    //    return accesstoken;
    //}

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

    var recordDisclaimerOptIn = function (form) {
        var wid = 0;
        try {
            var chkId = '';
            $(form).find(".cls-checkbox").each(function () {
                var checkbox = $(this).context;
                var status = checkbox.checked ? 1 : 0;
                var type = checkbox.dataset.type;
                var brandId = checkbox.dataset.pid;
                wid = checkbox.dataset.wid;
                chkId += status + "_" + type + "_" + brandId + "_" + wid + ",";
            });

            if (chkId != '')
                chkId = "&optIn=" + encodeURIComponent(chkId);
            $.ajax({
                type: "POST",
                url: '/Campaign/RecordCanvasDisclaimerOptIn?email=' + $(form).find("#txtemail").val() + chkId,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(function () {
                //localStorage.setItem('zit.deliverydisclaimer.checked', 1);
                //$('.js-successMessage').html('Great, thanks for letting us know.').show();
                //$('.js-optionSection').hide();
            });
        }
        catch (error) {
            if (window.ZITFunctions)
                window.ZITFunctions.sendRaygunData(error, 'recordDisclaimerOptIn-' + wid);
        }
    };

})(jQuery, window);
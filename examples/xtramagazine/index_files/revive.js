(function ($) {
    // console.clear();
    // sessionStorage.clear();

    var insArr = document.getElementsByTagName('ins'),
        i = 0,
        viewportSize = 768,
        viewport = window.innerWidth < viewportSize ? 'small' : 'large';
    
    if (typeof( insArr ) != 'undefined' && insArr != null){
    
        insArr = Object.values(insArr).filter(item => item);

        window.addEventListener('resize', responsiveAdUpdates);

        mutationObservers();
        responsiveAdUpdates();

        function responsiveAdUpdates(){
            viewportCompare = window.innerWidth < viewportSize ? 'small' : 'large';
            viewportReverse = window.innerWidth >= viewportSize ? 'small' : 'large';

            if ( viewport != viewportCompare){
                viewport = window.innerWidth < viewportSize ? 'small' : 'large';
                updateClientMarkup();
            }   
        }
    }


    /**
     * Meant to save data to session storage, deactivated for now
     * TODO fix this
     * @param {*} element 
     */
    function saveSessionCache( element ){
        if (typeof(element) != 'undefined' && element != null){       
            if ( element.innerHTML != "" ){
                // console.log( element.id + '-' + viewport + '-' + i, element.innerHTML );
                // sessionStorage.setItem(viewport+'-'+i, element.innerHTML);
                sessionStorage.setItem( element.id + '-' + viewport + '-' + i, element.innerHTML );

            }
        }
    }
    
    function mutationObservers (){
        if (typeof(insArr) != 'undefined' && insArr != null){
            [].forEach.call( insArr, function(ins) {
                if (ins.attributes['data-zone-'+viewport].value != ins.attributes['data-revive-zoneid']) {

                    ins.setAttribute( 'data-revive-zoneid', ins.attributes['data-zone-'+viewport].value);    
                    setUpMutationObserver( ins );
                    
                }
            });
        }
    }



    function updateClientMarkup (){
        i = 0;
        doUpdate = false;
        if (typeof(insArr) != 'undefined' && insArr != null){
            [].forEach.call( insArr, function(ins) {
                if (ins.attributes['data-zone-'+viewport].value != ins.attributes['data-revive-zoneid']) {

                    ins.setAttribute( 'data-revive-zoneid', ins.attributes['data-zone-'+viewport].value);            
                    if (typeof ins.attributes['data-revive-loaded'] != 'undefined'){ 
                        if ( !ins.hasAttribute( 'data-revive-'+viewport+'-loaded') ) {
                            ins.setAttribute( 'data-revive-'+viewport+'-loaded', 'true' );
                            ins.removeAttribute('data-revive-loaded');
                        }
                    }



                    if (typeof ins.attributes['data-revive-'+viewport+'-loaded'] == 'undefined'){ 
                        doUpdate = true;
                    }else{
                        ins.innerHTML = '';

                        let data = sessionStorage.getItem(viewport+'-'+i);
                        // Get saved data from sessionStorage
                    
                        if ( data) {
                            ins.insertAdjacentHTML( 'afterbegin', data );
                        }
                    }
                }
                    /*
                    if (typeof ins.attributes['data-revive-'+viewport+'-loaded'] != 'undefined'){ 
                            ins.innerHTML = '';

                            let data = sessionStorage.getItem(viewport+'-'+i);
                            // Get saved data from sessionStorage
                        
                            if ( data) {
                                ins.insertAdjacentHTML( 'afterbegin', data );
                            }
                        }else{
                            doUpdate = true;
                        }
                    }*/

                i++;
            });

            if(doUpdate){
                reviveAsync[ insArr[0].attributes['data-revive-id' ].value ].refresh();
            }
        }
    }



    function setUpMutationObserver( element ){

        var adElement = element;

        var observer = new MutationObserver(function(mutations) {
            if (mutations){
                const result = mutations.filter(function(mutation){ 
                    return mutation.attributeName === "data-revive-loaded"; 
                });

                if (result.length > 0){
                    var  elementThing = document.getElementById( element.id );
                    
                    elementThing.addEventListener("readystatechange", (event) => {
                        // console.log('readystatechange fully loaded and parsed:', event);
                        // console.log('beep');
                    });

                }
            } else {
                // console.log ( adElement );
            }
        });

        observer.observe(adElement, {
            // childList: true,
            // subtree: true,
            attributes: true //configure it to listen to attribute changes
        });
    }    
})(jQuery);
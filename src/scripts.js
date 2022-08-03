// Service Worker

if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('./src/sw.js').then(function(registration){
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err){
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
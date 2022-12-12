/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

const channel = Echo.channel('websocket-channel');


window.Echo.channel('websocket-channel')
    .listen('.NewMessage', e => {
        console.log('event',e);
        console.log('messaage',e.message);
    });

$message = null;
channel.listen('.NewMessage', e => {
    console.log(e);
    console.log('messaage',e.message);
    console.log('messaage',e);
    $message = e.message;
}).subscribed(()=>{
    console.log('subscribed!')
});

/**
* Next, we will create a fresh React component instance and attach it to
* the page. Then, you may begin adding MainComponents to this application
* or customize the JavaScript scaffolding to fit your unique needs.
*/
// $page_no2 = `{{<?php echo unserialize(${document.currentScript.getAttribute('supportedLocales')}); ?>}}`;
// $supportedLocales = document.currentScript.getAttribute('supportedLocales');
require('./App/App');


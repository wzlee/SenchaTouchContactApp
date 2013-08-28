Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'PersonModel'
    ],
    stores: [
        'PersonsStore',
        'SinglePersonStore'
    ],
    views: [
        'MainView',
        'FirstView',
        'FormView',
        'ContactView'
    ],
    name: 'ContactApp',
    controllers: [
        'MainController'
    ],

    launch: function() {

        Ext.create('ContactApp.view.MainView', {fullscreen: true});
    }

});

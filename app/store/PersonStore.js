Ext.define('ContactApp.store.PersonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'ContactApp.model.PersonModel'
    ],

    config: {
        autoLoad: true,
        model: 'ContactApp.model.PersonModel',
        storeId: 'PersonStore'
    }
});
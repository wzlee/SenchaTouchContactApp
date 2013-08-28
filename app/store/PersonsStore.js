Ext.define('ContactApp.store.PersonsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'ContactApp.model.PersonModel'
    ],

    config: {
        autoLoad: true,
        model: 'ContactApp.model.PersonModel',
        storeId: 'PersonsStore'
    }
});
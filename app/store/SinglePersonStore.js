Ext.define('ContactApp.store.SinglePersonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'ContactApp.model.PersonModel'
    ],

    config: {
        model: 'ContactApp.model.PersonModel',
        storeId: 'SinglePersonStore'
    }
});
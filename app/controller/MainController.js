Ext.define('ContactApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
    },

    launch: function() {
        Ext.getCmp('cardView').setActiveItem(0);
        var storex = Ext.data.StoreManager.lookup('PersonsStore');
        storex.load(function (store){
        });
        if(storex.getCount( ) == 0){
            var list = Ext.getCmp('cardView').child('#firstView').child('#contactList');
            var e = Ext.getCmp('cardView').child('#firstView');
            Ext.defer(function(){
                list.setHtml('No hay contactos'); 
                list.refresh();

            }, 110, list);
        }
    }

});
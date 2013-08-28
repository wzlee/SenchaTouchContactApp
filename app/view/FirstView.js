Ext.define('ContactApp.view.FirstView', {
    extend: 'Ext.Container',
    alias: 'widget.firstview',

    config: {
        height: '100%',
        id: 'firstView',
        items: [
            {
                xtype: 'list',
                height: '100%',
                id: 'contactList',
                itemTpl: [
                    '<div>{name} {lastName} </div>'
                ],
                store: 'PersonsStore'
            }
        ],
        listeners: [
            {
                fn: 'onContactListItemTap',
                event: 'itemtap',
                delegate: '#contactList'
            }
        ]
    },

    onContactListItemTap: function(dataview, index, target, record, e, options) {

        Ext.getCmp('contactView').setData(record.data[0]);

        var storex = Ext.data.StoreManager.lookup('SinglePersonStore');
        storex.removeAll();
        storex.add(record);


        Ext.getCmp('cardView').setActiveItem(2);

    }

});
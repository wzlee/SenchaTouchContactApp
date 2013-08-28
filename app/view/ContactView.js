Ext.define('ContactApp.view.ContactView', {
    extend: 'Ext.Container',
    alias: 'widget.contactview',

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'dataview',
                flex: 4,
                id: 'contactDataView',
                itemTpl: [
                    'Información de contacto:',
                    '<center>',
                    '    {name}<br/>',
                    '    {lastName}<br/>',
                    '    {birthDate}<br/>',
                    '    {phone}<br/>',
                    '    {email}<br/>',
                    '    ',
                    '',
                    '',
                    '</center>'
                ],
                store: 'SinglePersonStore'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'deleteButton',
                        ui: 'decline',
                        iconCls: 'delete',
                        iconMask: true
                    },
                    {
                        xtype: 'button',
                        itemId: 'editButton',
                        ui: 'action',
                        iconCls: 'settings',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onDeleteTap',
                event: 'tap',
                delegate: '#deleteButton'
            },
            {
                fn: 'onEditTap',
                event: 'tap',
                delegate: '#editButton'
            }
        ]
    },

    onDeleteTap: function(button, e, options) {
        var sps = Ext.data.StoreManager.lookup('SinglePersonStore');
        var record = sps.getData().items[0];

        var ps = Ext.data.StoreManager.lookup('PersonsStore');
        ps.remove(record);
        ps.sync();
        Ext.Msg.alert('Mensaje', 'Contacto borrado satisfactoriamente.', function(){Ext.getCmp('cardView').setActiveItem(0);});


    },

    onEditTap: function(button, e, options) {
        var sps = Ext.data.StoreManager.lookup('SinglePersonStore');
        var record = sps.getData().items[0];

        var form = Ext.getCmp('cardView').child('#formView').child('#personForm');

        form.setRecord(record);
        Ext.getCmp('cardView').setActiveItem(1);

        /* var storex = Ext.data.StoreManager.lookup('PersonsStore');
        storex.remove(record);
        storex.sync();
        */
    }

});
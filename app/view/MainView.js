Ext.define('ContactApp.view.MainView', {
    extend: 'Ext.Container',

    requires: [
        'ContactApp.view.FirstView',
        'ContactApp.view.FormView',
        'ContactApp.view.ContactView'
    ],

    config: {
        height: '100%',
        id: 'mainView',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'mainToolbar',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'homeButton',
                        ui: 'action',
                        iconCls: 'home',
                        iconMask: true
                    },
                    {
                        xtype: 'button',
                        itemId: 'addButton',
                        ui: 'action',
                        iconCls: 'add',
                        iconMask: true
                    }
                ]
            },
            {
                xtype: 'container',
                height: '100%',
                id: 'cardView',
                layout: {
                    type: 'card'
                },
                items: [
                    {
                        xtype: 'firstview'
                    },
                    {
                        xtype: 'formview',
                        id: 'formView'
                    },
                    {
                        xtype: 'contactview',
                        id: 'contactView'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onHomeButtonTap',
                event: 'tap',
                delegate: '#homeButton'
            },
            {
                fn: 'onAddButtonTap',
                event: 'tap',
                delegate: '#addButton'
            }
        ]
    },

    onHomeButtonTap: function(button, e, options) {
        Ext.getCmp('contactList').refresh();
        Ext.getCmp('cardView').setActiveItem(0);
    },

    onAddButtonTap: function(button, e, options) {
        Ext.getCmp('cardView').setActiveItem(1);


        var form = Ext.getCmp('cardView').child('#formView').child('#personForm');

        form.reset();
    }

});
Ext.define('ContactApp.view.FormView', {
    extend: 'Ext.Container',
    alias: 'widget.formview',

    config: {
        items: [
            {
                xtype: 'formpanel',
                height: '100%',
                id: 'personForm',
                items: [
                    {
                        xtype: 'fieldset',
                        id: 'contactFormFieldSet',
                        title: 'Añadir Contacto',
                        items: [
                            {
                                xtype: 'hiddenfield',
                                name: 'id'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Nombre',
                                name: 'name'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Apellidos',
                                name: 'lastName'
                            },
                            {
                                xtype: 'datepickerfield',
                                label: 'F. Nacimiento',
                                name: 'birthDate',
                                placeHolder: 'mm/dd/yyyy',
                                picker: {
                                    dayText: 'Día',
                                    monthText: 'Mes',
                                    yearFrom: 1940,
                                    yearText: 'año'
                                }
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Teléfono',
                                name: 'phone',
                                placeHolder: '55555555'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                name: 'email',
                                placeHolder: 'email@example.com'
                            },
                            {
                                xtype: 'button',
                                itemId: 'saveButton',
                                ui: 'confirm-round',
                                text: 'Guardar'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onSaveButtonTap',
                event: 'tap',
                delegate: '#saveButton'
            }
        ]
    },

    onSaveButtonTap: function(button, e, options) {
        var form = Ext.getCmp('cardView').child('#formView').child('#personForm');



        var person = Ext.create('ContactApp.model.PersonModel',form.getValues());

        var errors = person.validate();
        var message = "";
        if(errors.isValid()){

            var storex = Ext.data.StoreManager.lookup('PersonsStore');
            var existent = storex.findRecord('id',person.id);
            /*  if(existent){
            console.log('smarter than i thought');
            //storex.remove(existent);
            //storex.sync();
        }
        */
        person.save();
        storex.add(person);
        storex.sync();



        Ext.Msg.alert('Mensaje', 'Contacto añadido satisfactoriamente.', function(){Ext.getCmp('contactList').refresh();Ext.getCmp('cardView').setActiveItem(0);});

    } else {

        Ext.Msg.alert("Validación", "Ingresa datos validos", function(){});

    }


    }

});
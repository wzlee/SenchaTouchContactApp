Ext.define('ContactApp.model.PersonModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'name'
            },
            {
                name: 'lastName'
            },
            {
                name: 'birthDate'
            },
            {
                name: 'phone'
            },
            {
                name: 'email'
            }
        ],
        validations: [
            {
                type: 'email',
                field: 'email'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'PersonModelProxy'
        }
    }
});
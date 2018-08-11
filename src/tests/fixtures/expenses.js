import moment from 'moment';

export default [{
    id: '1', 
    description: 'Gum',
    note: 'abababado',
    amount: 195,
    createdAt: 0
},
{
    id: '2', 
    description: 'Rent',
    note: 'abababado',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3', 
    description: 'Credit Card',
    note: 'abababado;lskdjf',
    amount: 4095,
    createdAt: 1000
},
]
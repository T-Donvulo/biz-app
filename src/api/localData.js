import {v4 as createId} from 'uuid'

const getAllShoots = () => {
    const shootString = window.localStorage.getItem('shoots');
    if (!shootString) return [];
    
    return JSON.parse(shootString);
};


const getSingleShoot = (id) => {
    const shootString = window.localStorage.getItem('shoots');
    if (!shootString) return null;

    const shootsData = JSON.parse(shootString);
    return shootsData.find(savedShoot => savedShoot.id === id)


};


const addShoot = (props) => {
    const {name, surname, date, location, price, expenses} = props;
    const shootString = window.localStorage.getItem('shoots');

    if(!shootString){
        const newShoots = [        
            {
                id: createId(),
                name, 
                surname, 
                date, 
                location, 
                price, 
                expenses,
        },
    ];
    window.localStorage.setItem("shoots", JSON.stringify(newShoots));
        return newShoots;
}

const shootsData = JSON.parse(shootString);

const newShoots = [
    {
    id: createId(),
    name, 
    surname, 
    date, 
    location, 
    price, 
    expenses,
    },
    ...shootsData, 
];

window.localStorage.setItem("shoots", JSON.stringify(newShoots));
return newShoots;

}


const removeShoot = (id) => {
    const shootString = window.localStorage.getItem('shoots');
    if (!shootString) return false;

    const shootsData = JSON.parse(shootString);
    const newShoots = shootsData.filter((savedShoot) => savedShoot.id !== id);

    window.localStorage.setItem(
        "shoots", 
        JSON.stringify(newShoots)
    );

    return newShoots;
};

const updateShoot = (id, property, newValue) => {
    const shootString = window.localStorage.getItem('shoots');
    if (!shootString) return false;

    const shootsData = JSON.parse(shootString);
    const newShoots = shootsData.map((savedShoot) => {
        if (savedShoot.id !== id) return savedShoot;
        return{
            ...savedShoot,
            [property]: newValue,
        };
    });

    window.localStorage.setItem(
        "shoots",
        JSON.stringify(newShoots)
    );

    return newShoots;
};

export default{
    getAllShoots,
    getSingleShoot,
    addShoot,
    removeShoot,
    updateShoot
}
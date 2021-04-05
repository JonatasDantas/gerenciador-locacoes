const loadItens = (items) => {
    return {
        type: "LOAD_ITENS",
        items
    }
}

const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        item
    }
};

export {loadItens, addItem};
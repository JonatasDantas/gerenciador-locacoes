import _ from "lodash";

const groupItems = (data) => {
    return _(data)
        .groupBy(item => item.name[0].toUpperCase())
        .map((items, letter) => ({letter, items}))
        .value();
}

export default inventory = (state = [], action) => {
    switch(action.type) {
        case "LOAD_ITENS":
            return groupItems(action.items);

        case "ADD_ITEM":
            return groupItems([action.item, ...state])

        default:
            return state;
    }
}

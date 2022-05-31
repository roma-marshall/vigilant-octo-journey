import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            list: []
        }
    }

    updateInput(key, value) {
        // update react state
        this.setState({
            [key]: value
        });
    }

    addItem() {
        // create item with unique id
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        // copy of current list of items
        const list = [...this.state.list];

        // add new item to list
        list.push(newItem);

        // update state with new list and reset newItem input
        this.setState({
            list,
            newItem: ''
        });
    }

    deleteItem(id) {
        // copy current list of items
        const list = [...this.state.list];

        // filter out item being deleted
        const updatedList = list.filter(item => item.id !== id);

        this.setState({list: updatedList});
    }

    render() {
        return (
            <div className={App}>
                <div className="flex items-center justify-between w-1/2 border-gray-900/20">
                    <div className="flex flex-col w-1/2 m-10">
                    <span className="text-xl mb-5 p-2">Add an Item</span>
                        <div className="">
                            <input
                                className="border p-2 rounded-xl"
                                type="text"
                                placeholder="type here..."
                                value={this.state.newItem}
                                onChange={e => this.updateInput("newItem", e.target.value)}
                            />
                            <button
                                className="font-bold ml-3 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
                                onClick={() => this.addItem()}
                            >
                                Add
                            </button>
                        </div>
                        <div className="mt-5">
                            {this.state.list.map(item => {
                                return (
                                    <div
                                        className="flex justify-between border-b color-gray-900/20 mb-2 pb-2"
                                        key={item.id}>
                                        <span className="mr-10 pt-1">{item.value ? 0 : 'null'}</span>
                                        <button
                                            className="font-bold py-1 px-3 rounded bg-red-500 text-white hover:bg-red-700"
                                            onClick={() => this.deleteItem(item.id)}
                                        >
                                            X
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
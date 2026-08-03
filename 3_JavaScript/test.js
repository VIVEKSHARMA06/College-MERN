let obj = {
    name: "John",
    return() {
        console.log(this.name);
    },
};

let fn = obj.greet();

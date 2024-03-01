class ProductManager {
    static ultId = 0;
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {
        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(item => item.code === code)) {
            console.log("El código no debe repetirse, tiene que ser único.");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            console.log("No se encontró el producto");
        } else {
            console.log("Este es el producto: ", product);
        }

    }
}

//Testeo:

const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);
manager.addProduct("mouse", "mouse inalambrico", 300, "sin imagen", "abc124", 30);
manager.addProduct("teclado", "teclado mecanico", 500, "sin imagen", "abc125", 25);
manager.addProduct("parlante", "parlante jbl", 700, "sin imagen", "abc125", 27);

console.log(manager.getProducts());

//Testeo del getProductById

manager.getProductById(2);
manager.getProductById(8);
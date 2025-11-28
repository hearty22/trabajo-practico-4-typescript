### Glosario de Conceptos Clave de TypeScript

**1. TypeScript (TS)**
*   **Definición:** Un superconjunto de JavaScript que añade tipado estático opcional. Esto significa que puedes definir los tipos de tus variables, parámetros de funciones y retornos, lo que ayuda a detectar errores en tiempo de desarrollo en lugar de en tiempo de ejecución. El código TypeScript se transpila a JavaScript plano para ser ejecutado en cualquier entorno.
*   **Ejemplo:**
    ```typescript
    // archivo: greeter.ts
    function greet(person: string) {
        return "Hello, " + person;
    }

    let user = "Jane User";
    console.log(greet(user));

    // Intentar pasar un número causaría un error en tiempo de compilación:
    // console.log(greet(123)); // Argument of type 'number' is not assignable to parameter of type 'string'.
    ```

**2. Tipado Estático**
*   **Definición:** Un sistema de tipos donde los tipos de las variables son conocidos y verificados en tiempo de compilación (antes de que el código se ejecute). Esto contrasta con el tipado dinámico de JavaScript, donde los tipos se verifican en tiempo de ejecución. El tipado estático mejora la legibilidad, mantenibilidad y ayuda a prevenir errores.
*   **Ejemplo:**
    ```typescript
    let age: number = 30; // 'age' está tipada como número
    let name: string = "Alice"; // 'name' está tipada como cadena

    // age = "treinta"; // Error: Type 'string' is not assignable to type 'number'.
    // name = 123;    // Error: Type 'number' is not assignable to type 'string'.
    ```

**3. Tipos de Datos (Básicos)**
*   **Definición:** Representaciones fundamentales de valores que una variable puede contener. TypeScript incluye tipos básicos como `number` (para números enteros y flotantes), `string` (para texto), `boolean` (para valores verdadero/falso), `any` (para cualquier tipo, desactiva la verificación de tipos), `void` (para funciones que no devuelven nada), `null` y `undefined`.
*   **Ejemplo:**
    ```typescript
    let isDone: boolean = false;
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let color: string = "blue";
    let list: number[] = [1, 2, 3]; // Array de números
    let notSure: any = 4; // Puede ser cualquier cosa
    notSure = "maybe a string instead";
    notSure = false;

    function warnUser(): void {
        console.log("This is my warning message");
    }
    ```

**4. Interfaces**
*   **Definición:** Una forma poderosa de definir "contratos" para la forma de los objetos. Una interfaz especifica qué propiedades y métodos debe tener un objeto, y sus respectivos tipos. No generan código JavaScript en tiempo de ejecución, solo se usan para la verificación de tipos en tiempo de compilación.
*   **Ejemplo:**
    ```typescript
    interface User {
        firstName: string;
        lastName: string;
        age?: number; // Propiedad opcional
    }

    function printUser(user: User) {
        console.log(`Name: ${user.firstName} ${user.lastName}`);
        if (user.age) {
            console.log(`Age: ${user.age}`);
        }
    }

    let myUser = { firstName: "John", lastName: "Doe", age: 30 };
    printUser(myUser);

    let anotherUser = { firstName: "Jane", lastName: "Smith" };
    printUser(anotherUser);

    // let invalidUser = { firstName: "Peter" }; // Error: Property 'lastName' is missing
    ```

**5. Clases**
*   **Definición:** Un concepto fundamental de la programación orientada a objetos. En TypeScript, las clases permiten definir planos para crear objetos, encapsulando datos (propiedades) y comportamiento (métodos). Soportan herencia, modificadores de acceso (public, private, protected) y constructores.
*   **Ejemplo:**
    ```typescript
    class Animal {
        name: string;

        constructor(theName: string) {
            this.name = theName;
        }

        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log("Slinky...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    sam.move(); // Slinky... Sammy the Python moved 5m.
    ```

**6. Funciones (con tipado)**
*   **Definición:** Bloques de código reutilizables que realizan una tarea específica. En TypeScript, las funciones pueden tener tipos definidos para sus parámetros y para el valor que devuelven, lo que asegura que se utilicen correctamente y que los datos que manejan sean consistentes.
*   **Ejemplo:**
    ```typescript
    function add(x: number, y: number): number {
        return x + y;
    }

    let myAdd = function(x: number, y: number): number {
        return x + y;
    };

    console.log(add(5, 3)); // 8
    console.log(myAdd(10, 2)); // 12

    // console.log(add(5, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
    ```

**7. Uniones (Unions)**
*   **Definición:** Permiten que una variable o parámetro pueda tener uno de varios tipos posibles. Se definen usando el operador `|` (barra vertical). Son útiles cuando un valor puede ser de diferentes formas, pero se conoce el conjunto limitado de esas formas.
*   **Ejemplo:**
    ```typescript
    function printId(id: number | string) {
        if (typeof id === "string") {
            console.log("Your ID is: " + id.toUpperCase());
        } else {
            console.log("Your ID is: " + id);
        }
    }

    printId(101);    // Your ID is: 101
    printId("202");  // Your ID is: 202
    // printId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
    ```

**8. Intersecciones (Intersections)**
*   **Definición:** Permiten combinar múltiples tipos en uno solo, creando un nuevo tipo que tiene todas las propiedades de los tipos combinados. Se definen usando el operador `&` (ampersand). Son útiles para mezclar funcionalidades de diferentes tipos existentes.
*   **Ejemplo:**
    ```typescript
    interface Draggable {
        drag(): void;
    }

    interface Resizable {
        resize(): void;
    }

    type UIWidget = Draggable & Resizable;

    let widget: UIWidget = {
        drag: () => console.log("Dragging..."),
        resize: () => console.log("Resizing...")
    };

    widget.drag();   // Dragging...
    widget.resize(); // Resizing...
    ```

**9. Alias de Tipo (Type Aliases)**
*   **Definición:** Permiten crear un nuevo nombre para un tipo existente. Esto puede ser un tipo primitivo, una unión, una tupla o cualquier otro tipo. Mejoran la legibilidad del código y facilitan la refactorización. Se definen con la palabra clave `type`.
*   **Ejemplo:**
    ```typescript
    type Point = {
        x: number;
        y: number;
    };

    type ID = number | string;

    function printCoord(pt: Point) {
        console.log("The coordinate's x value is " + pt.x);
        console.log("The coordinate's y value is " + pt.y);
    }

    function printUserId(id: ID) {
        console.log("User ID: " + id);
    }

    printCoord({ x: 100, y: 200 });
    printUserId("abc-123");
    ```

**10. Enums**
*   **Definición:** Una característica que permite definir un conjunto de constantes con nombre. Los enums hacen que sea más fácil trabajar con un conjunto de valores relacionados y pueden ser numéricos o de cadena.
*   **Ejemplo:**
    ```typescript
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right,
    }

    let go: Direction = Direction.Up;
    console.log(go); // 1
    console.log(Direction.Down); // 2

    enum StatusCode {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
    }

    console.log(StatusCode.NotFound); // 404
    ```

**11. Generics**
*   **Definición:** Permiten escribir componentes que funcionan con cualquier tipo de datos, en lugar de un tipo específico. Proporcionan una forma de crear componentes reutilizables que pueden manejar diferentes tipos de datos sin perder la seguridad de tipos.
*   **Ejemplo:**
    ```typescript
    function identity<T>(arg: T): T {
        return arg;
    }

    let output1 = identity<string>("myString"); // type of output1 is string
    let output2 = identity<number>(100);     // type of output2 is number

    console.log(output1); // myString
    console.log(output2); // 100
    ```

**12. Compilador de TypeScript (tsc)**
*   **Definición:** La herramienta principal de TypeScript que toma el código fuente escrito en TypeScript (`.ts` o `.tsx`) y lo transforma en código JavaScript plano (`.js`) que puede ser ejecutado por navegadores o entornos de ejecución como Node.js. También es responsable de realizar la verificación de tipos.
*   **Ejemplo:**
    ```typescript
    // Supongamos que tienes un archivo llamado 'hello.ts':
    // function sayHello(name: string) {
    //     console.log(`Hello, ${name}!`);
    // }
    // sayHello("World");

    // Para compilarlo, ejecutarías en la terminal:
    // tsc hello.ts

    // Esto generaría un archivo 'hello.js' con el siguiente contenido:
    // function sayHello(name) {
    //     console.log("Hello, ".concat(name, "!"));
    // }
    // sayHello("World");
    ```
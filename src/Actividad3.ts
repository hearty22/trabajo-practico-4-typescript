// inicio
// 3. Tipos Literales y Enums
// Aplicar tipos que restringen los posibles valores:
// ● a. Tipos Literales:
// ○ Crea una variable orderStatus que solo pueda tener uno de los siguientes
// valores exactos: "pending", "shipped", o "delivered".
// ○ Asigna uno de estos valores a "orderStatus”.

let orderStatus: 'pending' | 'shipped' | 'delivered';
orderStatus: 'pending'

// ● b. Enum:
// ○ Declara un enum llamado LogLevel con los valores: "Info", "Warning", y
// "Error".
// ○ Crea una función llamada logMessage que tome un arg
// umento level de tipo
// LogLevel y un argumento message de tipo string. La función debe imprimir un
// mensaje que incluya el nivel y el mensaje.

enum LogLevel {
    Info = "Info", Warning = "Warning", Error = "Error"
};
function logMessage(level: LogLevel, message: string): void {
    console.log("ACTIVIDAD 3: Nivel de log:", level, "Mensaje:", message);
}
logMessage(LogLevel.Info, "Mensaje informativo");
logMessage(LogLevel.Warning, "Mensaje de advertencia");
logMessage(LogLevel.Error, "Mensaje de error");
const path = require('path');
module.exports = {
    entry: './users.ts', //точка входа, обходит все импорты рекурсивно
    module: { //задаются настройки для модуля, определяем расширение ля файла
        rules: [
            {
                test: /\.tsx?$/,//расширение
                use: 'ts-loader',// расширение, заходит в конфигурационный тип tsx
                exclude: /node_modules/,// добавляем разделы с исключением, в node modules не заходит
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],// расширения, которые обрабатывает weppack
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),//опреедляет выходной файл, вызваем resolve (текущая директория,название)
    },
};//для сборки нажать webpack
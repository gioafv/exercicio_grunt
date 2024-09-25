module.exports = function (grunt) {
    // Carregue as tarefas necessárias
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Configurações das tarefas
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                },
                files: {
                    "css/style.css": "less/style.less", // Caminho do arquivo LESS de entrada e saída
                },
            },
        },
        uglify: {
            my_target: {
                files: {
                    "js/app.min.js": ["js/app.js"], // Caminho do arquivo JS de entrada e saída
                },
            },
        },
    });

    // Registre as tarefas padrão
    grunt.registerTask("default", ["less", "uglify"]);
};

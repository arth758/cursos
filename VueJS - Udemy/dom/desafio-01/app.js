new Vue({
    el: "#desafio",
    data: {
        nome: "arthur",
        idade: 19,
        linkImagem: "https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/index.php/imagens/1-galeria-de-imagens-01/detail/3-imagem-3-titulo-com-ate-45-caracteres?tmpl=component",
    },
    methods: {
        idadeMultiplicada: function() {
            return this.idade * 3
        },
        randomizer: function() {
            return Math.random()
        },
    },
})
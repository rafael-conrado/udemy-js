   function criarElemento() {
       const container = document.querySelector('#container');
       const div = document.createElement('div');
      

       const elementos = [{
               tag: 'div',
               texto: 'Criando uma DIV'
           },
           {
               tag: 'p',
               texto: 'Criando um PARÁGRAFO'
           },
           {
               tag: 'section',
               texto: 'Criando uma SECTION'
           },
           {
               tag: 'footer',
               texto: 'Criando um FOOTER'
           },
       ]
       //desestruturação
       for (let i = 0; i < elementos.length; i++) {
           let {
               tag,
               texto
           } = elementos[i];
           let e = document.createElement(tag);
           e.innerHTML = texto;
           div.appendChild(e);
           console.log(tag, texto)
           /* 
           let tagCriada = document.createElement(tag)
           let textoCriado = documentTextNode(texto)
           tagCriada.appendChild(textoCriado)
           div.appendChild(tagCriada)
           */
       }
       div.setAttribute('id','criado')
       container.appendChild(div)
       
   }
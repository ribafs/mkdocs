# Sites estáticos práticos com MkDocs

Gosto muito de estar criando conteúdo, artigos/tutoriais e projetos com aplicativos e de divulgar isso.

Minha ferramenta preferida de criação de sites para produção de conteúdo até recentemente era o CMS Joomla, que oferece uma forma muito confortável de produzir conteúdo.

Então conheci o Github que me mostrou o markdown e me ofereceu a oportunidade de criar sites em HTML estático gratuitamente (github pages). De 8 anos para cá eu tenho criado diversos sites (Github pages) e repositórios usando markdown, que é muito prático para os respositórios (https://github.com/ribafs).

Para criar sites com Joomla preciso de um servidor com backend, PHP, MySQL, etc  e em geral preciso pagar por isso e como não monetizo meus sites fico procurando alternativas free para meu site. Atualmente meu domínio ribamar.net.br está no linode e meu site está usando Joomla, mas já estou migrando para o Github (https://ribafs.github.io/).

Há algum tempo descobri o MkDocs, que é uma exceclente ferramenta para criação de sites de documentação (https://ribafs.github.io/laravel-acl/). Mas pesquisando com calma percebi que posso criar sites ricos, semelhantes aos que crio com o Joomla.

Então criei a estrutura do meu site contendo toda a estrutura que pretendo divulgar. Comecei a migrar meu site para o Github e logo estarei mudando o ribamar.net.br para cá, mas veja que muitas seções ainda não tem conteúdo.

A descoberta de tempaltes para o MkDocs que suportam bootstrap e menus dropdown multinível e a facilidade de criar conteúdo com ele aliado ao editor SunEditor, no qual produzo conteúdo como se estivesse no Joomla. Isso fez com que me decidisse a trocar o Linode pelo Github.

## URL deste repositório

https://github.com/ribafs/mkdocs-ribafs

## Dicas sobre MkDocs

- No mkdocs.yml

Usar no nav somente espaços, 4 espaços não usar tab

- Nos links

Não usar makkdown para criar os links, mas sim HTML pois podemos usar target="_blank". Aqui nos README.md o link em HTML com target não funciona.

## Uso do MkDocs

Sei que não atende a todas as necessidades de  criação de sites, mas dê uma olhada com calma pois pode ser útil para algum certo site.

Confira em https://ribafs.github.io

- Introdução
- Recursos
- Instalação
    Linux
    Windows
- Estrutura de arquivos
- Instala do template
- Configurações
    mkdocs.yml
- Criando páginas e adicionando ao mkdocs.yml
- Rodando o site
- Overrides
- Gerando o site em HTML com o build
- Fazendo o deploy para o servidor com Git
- Debugando
- Produção de conteúdo
- Favicon
- Site de exemplo

## Introdução

https://mkdocs.org

O MkDocs é um gerador de site estático rápido e simples, voltado para a construção de documentação de projetos. Os arquivos de origem da documentação são escritos em Markdown e configurados com um único arquivo de configuração YAML.

Usando um bom template podemos criar um site genérico e não somente para documentação, como mostrarei neste tutorial.

Com certeza n


## Alguns recursos que encontrei

- Facilidade na criação do site e na alimentação e manutenção do conteúdo. A estrutura básica do site é criada com apenas um comando.
- Tem suporte ao markdown, que facilita muito a criação de conteúdo
- Também suporta boa parte do HTML, CSS, Javascript e Bootstrap
- Criação do menu dropdown com multinível extremamente facilitada, como veremos
- Menu fixo no topo
- Podemos usar um bom editor HTML WysiWyg para criar confortavelmente o conteúdo, formatar, inserir imagens, áudio e vídeo. Visualizar o código fonte, copiar e colar no arquivo do MkDocs
- Busca por todo o site usando autocompletar que já vem pronta
- Highlight de código fonte (podendo numerar as linhas)
- Menu hanburger nativo para mobile  que já vem implementado
- Podemos abrigar gratuitamente em hospedagens como Github, Gitlab e outras
- Podemos usar o Git para sincronizar o repositório local com o remoto, enviando o site inteiro via terminal
- Segurança, também por conta de ser estático
- Responsivo, sendo visualizado inclusive em dispositivos mobile
- Consideravelmente rápido
- ...

## Instalação

Ele é um software em python, por isso tem como requisito o Python 3.8.2.

https://www.mkdocs.org/user-guide/installation/

### Linux Debian e derivadas
```bash
sudo apt update

sudo apt install python3-pip -y

pip3 install --upgrade pip

sudo pip3 install mkdocs

pip install pymdown-extensions
```

### Windows

Instalar o python

https://www.python.org/

Adicione ao path
```bash
pip install mkdocs
```

## Criação de um site

```bash
mkdocs new novo_site
```

## Estrutura de arquivos e pastas

Cria a pasta docs e dentro dela o arquivo index.md.
Fora da pasta e no mesmo nível dela, o arquivo de configuração mkdocs.yml, como abaixo:

```bash
novo_site
    docs
        index.md
    mkdocs.yml
```

### Conteúdo do docs/index.md

```md
# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
```

Veja que a sintaxe é markdown. Geralmente criar eu prefiro criar o conteúdo usando markdown, mas algumas vezes recorro ao HTML, ao CSS e ao Bootstrap.


## Conteúdo do mkdocs.yml

site_name: My Docs

Apenas o nome do site.


### Sintaxe do mkdocs.yml

site_name: RibaFS Portal
theme:
    name: darkly #flatly
    custom_dir: docs/overrides

Os espaços antes de name: e de custom_dir: são criados com tabulação (tecla tab) ou então usando dois espaços

Boa referência:

https://github.com/mkdocs/mkdocs/blob/master/mkdocs.yml

https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html

https://yaml.org/

Dica: sempre que adicionar algo ao mkdocs.yml e tiver algumas dúvida sobre a sintaxe, verifique o terminal e veja as mensagens, então corrija se for o caso.


## Instalação de um tempalte com bootstrap

Minha preferência é por temas que usam bootstrap, pois me oferecem maior flexibilidade, mas existem outros templates sem bootstrap até mais populares. Fique a vontade.

Aqui encontramos vários screenshot das opções de template que podemos usar se isntalarmos o mkdocs-bootswatch:

http://mkdocs.github.io/mkdocs-bootswatch/

```bash
sudo pip3 install mkdocs-bootswatch
```

Agora selecione o que mais gosta nos screenshots

E indique no mkdocs.yml, tudo em minúsculas, assim:

site_name: RibaFS Portal
theme:
  name: darkly


## Configurações

As configurações do mkdocs são feitas no arquivo do raiz, mkdocs.yml

Detalhes em:

https://www.mkdocs.org/user-guide/configuration/


## Criando páginas e adicionando ao mkdocs.yml

Gosto de criar dentro da pasta docs, uma estrutura de pastas correspondente a estrutura do menu que crio no mkdocs.yml.

Pastas e arquivos:
```
backend
    php
        index.md
        controle.md
    pdo
        index.md
    phpoo
        index.md
        mvc
            index.md
```
mkdocs.yml:
```
    - Back-end:
        - PHP: 
            - Introdução: backend/php/index.md
            - Estruturas de controle: backend/php/controle.md
        - PDO: 
            - Introdução: backend/pdo/index.md
        - PHP-OO: 
            - Introdução: backend/phpoo/index.md
            - MVC: 
                - Introdução: backend/phpoo/mvc/index.md
```

https://www.mkdocs.org/user-guide/writing-your-docs/#writing-with-markdown


### Conteúdo

Criar o conteúdo de cada arquivo usando markdown ou HTML.

Acesse

https://ribafs.github.io/editor.html

Veja que eu mantenho um editor HTML no servidor, para facilitar que eu mexa no conteúdo onde estiver.

Eu crio ou altero o conteúdo com o conforto de um editor HTML WysiWyg, formatando o texto, inserindo imagens, vídeos, etc. Ao concluir clico no botão que mostra o código fonte, seleciono o texto, copio e colo no novo arquivo .md.

https://github.com/JiHong88/SunEditor


## Executando o site

O comando abaixo, servidor web interno do mkdocs, deixará o site disponível em http://127.0.0.1:8000

Podemos executar em outra porta

mkdocs serve --dev-addr 127.0.0.1:8001


## Overrides

O mkdocs tem seu código fonte em python, mas podemos sobrescrever muita coisa, sem precisar editar os fontes.

Veja abaixo algumas dicas para sobrescrever alguns elementos das páginas.

Override do footer
```
├─ overrides/
│  └─ partials/
│     └─ footer.html
│      main.html
└─ mkdocs.yml
```

### Remover next e previous da barra de navegação

Criar o arquivo

docs/override/main.html

Contendo

{% extends "base.html" %}

{% block next_prev %}{% endblock %}


E adicionar ao mkdocs.yml:
```
theme:
  custom_dir: docs/overrides
```


### CSS Extra

Para adicionar um css extra, criar a apsta

docs/assets/css/extra.css

E indicar no mkdocs.yml
```
extra_css:
    - assets/css/extra.css
    - 'https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=IBM+Plex+Sans&display=swap'
```

#### Como ocultar o rodapé default:

"Documentation built with MkDocs"

Adicionar ao extra.css:
```
footer{display: none}
```

#### Ocultar o painel lateral esquerdo

No extra.css assim:
```
.bs-sidebar{
    display: none;
}
```
#### Ocultar search e Edit on Github

Adicionar ao extra.css
```
.nav-item{
    display: none;
}
```

### Javascript Extra

Para adicionar um css extra, criar a apsta

docs/assets/js/extra.js

E indicar no mkdocs.yml
```
extra_javascript:
    - assets/s/extra.js
    - 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML'
```

## Gerando o site em HTML

O comando mkdocs build gera o site em HTML para enviar para o servidor
```
mkdocs build

mkdocs build --clean
```
Cria a pasta site contendo todo o site que se encontra em docs no formato HTML
```
mkdocs build --help
```
Após executar o comando mkdocs build a estrutura do site será criada em HTML na pasta site
```
blog/docs
    index.md
blog/site
        /css
        /fonts
        /img
        /js
        /search
        404.html
        index.html
        sitemap.xml
        sitemap.xml.gz
blog/mkdocs.yml

mkdocs gh-deploy
```

## Debugando

Após executar o comando
```
mkdocs serve
```
Ele acusará qualquer erro fatal, parando e não exibindo a página

Também mostrará avisos importantes:

- Quando inserimos um link em mkdocs.yml nav e não adicionamos o respectivo arquivo
- Quando fazemos o contrário, adicionamos um arquivo e não linkamos no nav
- Quando inserimos uma entrada indevida no mkdocs.yml
- Etc

As vezes erramos porque usamos uma extenç

É importante ficar de olhos nas mensagens para ir corrigindo e efetuar o build somente quando não houver qualquer erro ou warning

Idealmente não deve haver nenhum warning no terminal/prompt. Inclusive assim ele roda muito mais rápido.


## Produção de conteúdo

Algumas alternativas para a produção de conteúdo

- Criar os artigos usando o markdown, que é bem prático e é o default do mkdocs
- Também podemos usar um editor HTML Wysiwig. Criamos com conforto, formatando, inserindo imagens e vídeos, como se num processador de textos como Word ou LibreOffice
- Ou podemos criar diretamente em HTML

Markdown suportado

https://www.markdownguide.org/tools/mkdocs/

https://daringfireball.net/projects/markdown/syntax#html

Lembrando que:

Basta incluir o HTML em seu documento Markdown. O MkDocs não documenta isso porque esse é o comportamento padrão do Markdown. Na verdade, as regras do Markdown afirmam:

- Para qualquer marcação que não seja coberta pela sintaxe do Markdown, basta usar o próprio HTML. Não há necessidade de prefaciá-lo ou delimitá-lo para indicar que você está mudando de Markdown para HTML; basta usar as tags.

- As únicas restrições são que os elementos HTML em nível de bloco 
```
— por exemplo, <div>, <table>, <pre>, <p>, etc. — 
```
devem ser separados do conteúdo circundante por linhas em branco, e as tags de início e fim do bloco não devem ser recuadas com tabulações ou espaços. Markdown é inteligente o suficiente para não adicionar tags <p> extras (indesejadas) em torno de tags de nível de bloco HTML.

Observe que a sintaxe de formatação Markdown não é processada em tags HTML de nível de bloco. Por exemplo, você não pode usar *ênfase* no estilo Markdown dentro de um bloco HTML.

https://www.mkdocs.org/user-guide/writing-your-docs/

Markdown é um superset de HTML então você pode justamente usar HTML nos arquivos *.md. Mas não pode criar a página inteira em HTML, apenas uma parte do body.


## Favicon

O favicon.ico somente aparecerá no site em produção, na pasta site.

Copie o arquivo favicon.ico para a pasta

docs/img

Apenas isso, mas somente quando gerar o build ele aparecerá.

Podemos criar favicon partindo de uma foto ou de uma logo da empresa. Sugestão:

https://www.favicon-generator.org/

No mkdocs.yml
```
theme:
    favicon: img/favicon.ico
```
Ou 
```
favicon: https://www.apache.org/logos/res/sedona/sedona.png
```

## Site de exemplo

### Estrutura simplificada de arquivos e pastas:
```bash
/docs/assets
        /css/extra.css
        /img
        /js/extra.css
/docs/backend
        /ajax
            index.md
        /ambiente
            /linux/index.md
            /windows/index.md
        /api/index.md
        /cms
            /joomla
                index.md
            /afternoom/index.md
        /framework
            /laravel/index.md
            /ci/index.md
        /pdo
            index.md
        /php
            index.md
        /phpoo
            /mvc/index.md
        /sgbd
            /mysql/index.md
            /postgres/index.md
            /sqlite/index.md
/docs/devops
        /docker/index.md
        /git/index.md
        /github/index.md
        /heroku/index.md
/docs/down
/docs/ferramentas
    /html-live/index.html
    /mkdocs/index.md
/docs/frontend
        /bs/index.md
        /css/index.md
        /html/index.md
        /indexeddb/index.md
        /js/index.md
        /localstorage/index.md
        /react/index.md
        /websql/index.md
/docs/img
    favocon.ico
/docs/linux
        /desktop/index.md
        /scripts/index.md
/docs/overrides
        /partials
        main.html
/docs/contato.md
/docs/index.md
/docs/mapa.md
```

### Menu criado no mkdocs.yml, na seção nav

```bash
site_name: RibaFS Portal
site_url: https://ribafs.github.io
site_description: Portal do Ribamar FS
site_author: Ribamar FS
site_dir: site/

repo_url: https://github.com/ribafs/portal

docs_dir: docs/

extra_css:
    - assets/css/extra.css
extra_javascript:
#    - assets/js/script.js

theme:
    name: darkly #flatly
    custom_dir: docs/overrides

markdown_extensions:
    - toc:
        permalink: true
        toc_depth: 5
    - pymdownx.highlight:
        guess_lang: false
        linenums: true

plugins:
    - search:
        indexing: full

nav:
    - index.md
    - Front-end:
        - HTML:
            - Introdução: frontend/html/index.md
            - TAGs: frontend/html/tags.md
        - CSS:
            - Introdução: frontend/css/index.md
        - JavaScript:
            - Introdução: frontend/js/index.md
        - Bootstrap:
            - Introdução: frontend/bs/index.md
        - React:
            - Introdução: frontend/react/index.md
        - LocalStorage:
            - Introdução: frontend/localstorage/index.md
        - IndexedDb:
            - Introdução: frontend/indexeddb/index.md
        - WebSQL:
            - Introdução: frontend/websql/index.md

    - Back-end:
        - Ambiente: 
            - Introdução: backend/ambiente/index.md
            - Windows: backend/ambiente/windows/index.md
            - Linux: backend/ambiente/linux/index.md
        - AJAX: 
            - Introdução: backend/ajax/index.md
        - API: 
            - Introdução: backend/api/index.md
        - PHP: 
            - Introdução: backend/php/index.md
        - PDO: 
            - Introdução: backend/pdo/index.md
        - PHP-OO: 
            - Introdução: backend/phpoo/index.md
            - MVC: 
                - Introdução: backend/phpoo/mvc/index.md
        - SGBD: 
            - Introdução: backend/php/index.md
            - MySQL: 
                - Introdução: backend/sgbd/mysql/index.md
            - PostgreSQL: 
                - Introdução: backend/sgbd/postgres/index.md
            - SQLite: 
                - Introdução: backend/sgbd/sqlite/index.md
        - CMS:
            - Joomla: 
                - Introdução: backend/cms/joomla/index.md
            - Afternoom: 
                - Introdução: backend/cms/afternoom/index.md
        - Framework:
            - Laravel: 
                - Introdução: backend/framework/laravel/index.md
            - Codeigniter: 
                - Introdução: backend/framework/ci/index.md

    - DevOps:
        - Git: 
            - Introdução: devops/git/index.md
        - GitHub: 
            - Introdução: devops/github/index.md
        - Docker: 
            - Introdução: devops/docker/index.md
        - Heroku: 
            - Introdução: devops/heroku/index.md

    - Linux:
        - Desktop: 
            - Introdução: linux/desktop/index.md
        - Scripts: 
            - Introdução: linux/scripts/index.md

    - Ferramentas:
        - HTML Live: ferramentas/html-live/index.html
        - MkDocs: 
            - Introdução: ferramentas/mkdocs/index.md

    - Mapa do site: mapa.md

    - Contato: contato.md
```

Esta estrutura acima está na Github page abaixo:

https://ribafs.github.io

## Os fontes

Os fontes do site criado com este tutorial estão neste repositótio na pasta fontes:

https://github.com/ribafs/mkdocs-ribafs/fontes


## Dicas Extras

```bash
docs/
    /assets/audio/arquivo.mp3
    /assets/video/arquivo.mp4
```
### Áudio
```html
 <audio controls>
  <source src="Telefone.mp3" type="audio/mpeg">
  Seu navegador não suporta este áudio.
</audio> 
```

### Vídeo
```html
<video width="400"  controls>
  <source src="assets/video/arquivo.mp4" type="video/mp4">
</video>
```

### Alerta para tempaltes

Ao pesquisar sobre o MkDocs, especialmente sobre templates, fique atento pois existem grandes diferenças entre eles. Alguns suportam bootstrap outros não; alguns suportam a mudança de paleta de cores outros não suportam e assim por diante. Uma boa ideia é testar e verificar as mensagens do mkdocs no terminal e caso não apareça nada verifique então se acontece o efeito esperado no site. Caso não seja compatível remova os comandos adicionados.


## Resumo do Markdown

### Títulos

```md
# Título 1
## Título 2
### Título 3
#### Título 4
##### Título 5
###### Título 6
```

### Efeitos de texto
```md
**negrito**
*itálico*
~~riscado~~
```

### Hishlight de código

```html
<h1>Título 1</h1>
```
Linagens suportadas - http://pygments.org/languages/


### Link interno
```
[Texto do link](#link-interno)
```

### Link externo
```
[GitHub](https://github.com)
```

### Lista ordenada

```md
1. Item 1
2. Item 2
3. Item 3
```

### Lista não ordenada

```md
* Item 1
* Item 2
* Item 3
```

### Imagens
```
![](assets/img/imagem.png)
```
ou
```
![Alt ou Title da imagem](assets/img/imagem.png)
```

### Tabelas em markdown

```md
First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell


| First Header | Second Header | Third Header |
| ------------ | ------------- | ------------ |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |


First Header | Second Header | Third Header
:----------- |:-------------:| -----------:
Left         | Center        | Right
Left         | Center        | Right
```

Alinhamento usando os dois pontos
```
- : esquerda
- direita :
- : centro :
```

### Referências

- https://www.code2bits.com/cheat-sheet-markdown/ 
- https://www.cheatography.com/lucbpz/cheat-sheets/the-ultimate-markdown/ 


## Referências

### Diversas

https://mkdocs.org

https://github.com/mkdocs/mkdocs/wiki

https://www.mkdocs.org/user-guide/configuration/

https://github.com/mkdocs/mkdocs/discussions

https://gitter.im/mkdocs/community

https://github.com/mkdocs/mkdocs/issues

https://mkdocs-alabaster.ale.sh/guide/

https://docs.readthedocs.io/en/stable/intro/getting-started-with-mkdocs.html

https://www.mkdocs.org/getting-started/

https://www.mkdocs.org/user-guide/

https://github.com/mkdocs/mkdocs

https://sempreupdate.com.br/como-criar-documentacao-com-mkdocs/

https://www.markdownguide.org/tools/mkdocs/

https://markdown.net.br/ferramentas/mkdocs/

https://ajuda.gitlab.io/guia-rapido/markdown/mkdocs/

https://www.markdownguide.org/tools/mkdocs/

https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open

https://pypi.org/project/mkdocs-awesome-pages-plugin/

https://mkdocs.readthedocs.io/en/0.15.2/user-guide/styling-your-docs/

https://github.com/mkdocs/mkdocs

https://sempreupdate.com.br/como-criar-documentacao-com-mkdocs/

https://www.mkdocs.org/dev-guide/


### Templates

http://mkdocs.github.io/mkdocs-bootswatch/

https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes

http://mkdocs.github.io/mkdocs-bootstrap/

https://squidfunk.github.io/mkdocs-material/

https://www.wheelodex.org/entry-points/mkdocs.themes/

https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/

https://mkdocs.readthedocs.io/en/0.15.2/user-guide/custom-themes/

https://www.pjjk.net/mdmkdocs/themes/

http://mkdocs.github.io/mkdocs-bootstrap/

http://mkdocs.github.io/mkdocs-bootswatch/

https://squidfunk.github.io/mkdocs-material/


### Plugins

https://github.com/mkdocs/mkdocs/wiki/MkDocs-Plugins

https://morioh.com/p/5419588297f4

https://github.com/oprypin/mkdocs-gen-files

https://oprypin.github.io/mkdocs-gen-files/

https://github.com/axiros/docutools

https://github.com/oprypin/mkdocs-literate-nav

https://github.com/aklajnert/mkdocs-simple-hooks

https://github.com/mondeja/mkdocs-include-markdown-plugin


### Outros

https://github.com/pawamoy/best-of-mkdocs

https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

https://github.com/bwmarrin/MkDocsPlus

https://github.com/peaceiris/actions-gh-pages

https://github.com/dongweiming/wechat-admin

https://github.com/mkdocstrings/mkdocstrings

https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin

https://github.com/zhaoterryy/mkdocs-pdf-export-plugin

https://github.com/backstage/mkdocs-monorepo-plugin

https://github.com/fralau/mkdocs_macros_plugin

https://github.com/danielfrg/mkdocs-jupyter

https://github.com/ultrabug/mkdocs-static-i18n

https://github.com/rosscdh/mkdocs-markdownextradata-plugin

https://github.com/timvink/mkdocs-print-site-plugin

https://github.com/midnightprioriem/mkdocs-autolinks-plugin

https://github.com/pawamoy/best-of-mkdocs

https://github.com/Guts/mkdocs-rss-plugin

https://github.com/oprypin/mkdocs-gen-files

https://github.com/squidfunk/mkdocs-material/discussions/3221

https://www.javieranto.com/kb/GNU-Linux/Software/mkDocs/setup/adding-a-comment-system/

https://cactus.chat/docs/integrations/mkdocs-material/

https://www.mkdocs.org/dev-guide/plugins/

https://squidfunk.github.io/mkdocs-material/reference/#built-in-meta-plugin


### Roadmap

https://github.com/mkdocs/mkdocs/wiki/Project-roadmap



import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className="App">

      <Header content="{ meus _ conteúdos _  favoritos }"/>

      <Bio
        subtitle="Oi, eu sou Gabi Cruz, prazer!"
        text="Atualmente trabalho na área de Marketing de uma escola no Perú. Comecei meus estudos de programação em março deste ano e estou feliz com tudo que estou aprendendo até agora."
        link="https://avatars.githubusercontent.com/u/103441177?v=4"      
      />
    <div className="container">
      <Cards className="cards"
        subtitle="HTML semântico"
        text="O HTML semântico tem como objetivo descrever o significado do conteúdo presente em documentos HTML, tornando-o mais claro tanto para programadores quanto para browsers e outras engines que processam essa informação."
        link="https://bit.ly/3NWAZDp"/>
      
      <Cards className="cards"
        subtitle="FlexBox ou CSS Grid?"
        text="Dependendo da necessidade, um pode ser uma opção mais viável, mas não é errado usar o outro. Conforme você for obtendo mais intimidade com FlexBox e CSS Grid, a escolha pelo melhor para a sua necessidade ficará cada vez mais intuitiva."
        link="https://bit.ly/3NNPB7W"/>
      
      <Cards className="cards"
        subtitle="JavaScript"
        text="JavaScript é uma linguagem interpretada, de alto nível e multi-paradigma (orientado a objeto, funcional, imperativo e, protótipos). Com ela, é possível desenvolver desde páginas dinâmicas, aplicativos para smartphones, sistemas complexos e até jogos eletrônicos."
        link="https://bit.ly/3TjuR9r"/>

      <Cards className="cards"
        subtitle="React"
        text="React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros."
        link="https://bit.ly/3DPBhaI"/>
</div>
      <Footer content="{ feito com amor ♡ por Gabi Cruz - Reprograma 2022 }"/>

    </div>
  )
}

export default App

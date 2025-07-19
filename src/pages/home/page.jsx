import dog from '../../../public/dog.jpg';
import gato from '../../../public/gato.jpg';
 
 export default function Home(){
    return(
        <>
        <h2>Home</h2>


        <div>
        <h2>1. O que fazemos?</h2>

        <h4>No nosso Pet Shop, cuidamos do seu pet com carinho,
        atenção e profossionalismo. Oferecemos serviços pensados no bem-estar
        e na saúde do seu amigo:</h4>
      <ul>

        <li>Banho- Utilizamos produtos de qualidade,
            adaptamos para cada tipo de pele e pelagem,
            garamtindo higiene, maciez e um cheirinho irresistível.
        </li>

        <li>Tosa - Tosa higiênica, na tesoura ou na máquina,
            sempre respeitando o estilo do seu pet e as orientações
            do tutor.
        </li>

        <li>Hidratação - Tratamentos especiais para deixar
            a pelagem mais saudável, macia e brilhante.
        </li>

        <li>Corte de Unhas - Realizado por profissionais
            capacitados para garantir a segurança e o 
            conforto do animal.
        </li>

        <li>Limpeza de Ouvidos - Essencial para evitar infecções
            e manter a saúde do seu pet.
        </li>

      </ul>
      </div>
      <nav>
         <div>
             <h2>2. Seção:</h2>
             <h3>Cães:</h3>
             <img scr={dog} alt="Cão"/>
             <br />

             Oferecemos serviços completos para o seu cão:
             banho, tosa, hidratação, segurança e atenção 
             para deixar seu amigo limpo, bonito e saudável.
            </div>


            <div>
                <h2>3. Seção:</h2>
                <h3>Gatos</h3>
                <img scr={gato} alt="Gato"/>
                <br />

             Cuidamos do seu gato com todo o cuidado e paciência
             que ele merece. Banho, tosa higiênica, cuidados especiais
             com unhas e pelagem. Sempre priorizando o bem-estar 
             e o conforto do seu felino.
         </div>
      </nav>



        </>

       
          
       
    )
 }
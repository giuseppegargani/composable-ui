/* PAGINA CON UNA LISTA DI COMPONENTI

    livello 1 - Header con video

    livello 2 - Cloudinary

    livello 3 - Streaming con youtube

    livello 4 - Coding 

*/

/* DA FARE:

    Devono essere divisi per categorie e si deve indicare il codice, tutorial e come modificare lo stile!!!!!!!!!!!!!!!!

    - SI DEVONO ANCHE METTERE I PRINCIPI GENERALI, FOGLI DI STILE FIGMA

*/

export default function Lista() {
  return (
    <main>
      <h2>Lista dei componenti</h2>
      <p>
        Si devono mettere sia i componenti che tutorials, che customizzazione.
      </p>
      <p>
        E si devono mettere anche gli altri elementi che fanno parte del foglio
        di stile in figma
      </p>
      <p>Si possono anche mettere playgrounds</p>
      <p>DOVREBBE ESSERE DIVISO PER CATEGORIE</p>
      <p>Forse si può fare anche testing!!!</p>
      <div>
        <h2>Video Header</h2>
      </div>
      <p>Lista di componenti</p>
      {/*<video src={require('../../../public/videoexample.mp4')} />*/}
      {/*<video src={require('./videoexample.mp4')} style={{ width: '300' }} autoPlay  muted loop />*/}
      <div>
        <h2>Eccomi qui</h2>
      </div>
      <video controls width="1000" loop muted>
        <source src="/videoexample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/*<video controls src="./videoexample.mp4" style={{ width: '300' }} autoPlay  muted loop>
      Your browser does not support the video tag.
  </video>*/}
    </main>
  )
}

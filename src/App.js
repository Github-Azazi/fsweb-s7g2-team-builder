//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form';



function App() {

const [memberList,setMemberList]= useState([]);
const addMember = (memberData) => {
  setMemberList([...memberList,memberData]);
};
  return (
    <div className="App">
      {memberList.map((member)=> (
        <div class="mr-5 ml-5 border-4"> 
        <div class= "flex flex-wrap items-center justify-center text-gray-900 dark:text-white">İsim: {member.name}</div>
        <div class= "flex flex-wrap items-center justify-center text-gray-900 dark:text-white">Email: {member.email}</div>
        <div class= "flex flex-wrap items-center justify-center text-gray-900 dark:text-white">Rol: {member.role}</div>
        
        </div>
      ))}
      <hr />
      <Form addMember={addMember}/>
    </div>
  )
  // const [duzenlenecekUye, setDuzenlenecekUye] = useState(null);

  // // Üyeyi listeye ekle
  // const uyeEkle = (uye) => {
  //   // Üyeye benzersiz bir id ata
  //   uye.id = Date.now();
  //   // Üyeyi takım listesine ekle
  //   setTakim([...takim, uye]);
  // };

  // // Üyeyi listeyi güncelle
  // const uyeGuncelle = (uye) => {
  //   // Üyenin id'sine göre takım listesini güncelle
  //   setTakim(
  //     takim.map((item) => (item.id === uye.id ? { ...uye } : item))
  //   );
  //   // Düzenlenecek üyeyi sıfırla
  //   setDuzenlenecekUye(null);
  // };

  // // Düzenlenecek üyeyi belirle
  // const uyeDuzenle = (uye) => {
  //   setDuzenlenecekUye(uye);
  // };

  // return (
  //   <div className="App">
  //     <h1>Takım Üyeleri</h1>
  //     <ul>
  //       {takim.map((uye) => ( <li key={uye.id}>
  //           <p>{uye.isim}</p>
  //           <p>{uye.email}</p>
  //           <p>{uye.rol}</p>
  //           <button onClick={() => uyeDuzenle(uye)}>Düzenle</button>
  //         </li>
  //       ))}
  //     </ul>
  //     <Form
  //       uyeEkle={uyeEkle}
  //       uyeGuncelle={uyeGuncelle}
  //       duzenlenecekUye={duzenlenecekUye}
  //     />
  //   </div>
  // );
}

export default App;

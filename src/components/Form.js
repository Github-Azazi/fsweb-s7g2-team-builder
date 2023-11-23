import { useState } from "react";

const Form = ({ addMember }) => {
  const [memberData, setMemberdata] = useState({
    name: "",
    email: "",
    role: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    addMember(memberData);

    setMemberdata({
      name:"",
      email:"",
      role:"",
    });

  };

  

  return (
    <form onSubmit={submitHandler}>
      <div class="ml-5 box-content h-250 w-80 p-4 border-4">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Üye Adı:
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="İsim"
            value={memberData.name}
            onChange={(e) =>
              setMemberdata({ ...memberData, name: e.target.value })
            }
          />
        </label>
       
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Üye Email:
          <input
            type="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            value={memberData.email}
            onChange={(e) =>
              setMemberdata({ ...memberData, email: e.target.value })
            }
          />
        </label>
    
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Üye Rolü:
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Rol"
            value={memberData.role}
            onChange={(e) =>
              setMemberdata({ ...memberData, role: e.target.value })
            }
          />
        </label>
        <br/>
        <div class="flex justify-center">
        <button
        type ="submit"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Gönder
      </button>
      </div>
      </div>
      
      
    </form>
  );
};

export default Form;


// function Form(props) {
//   // Formun state'ini tanımla
//   const [uye, setUye] = useState({
//     isim: "",
//     email: "",
//     rol: "",
//   });

//   // Formun state'ini props.duzenlenecekUye ile uyumlu tutmak için bir effect yaz
//   useEffect(() => {
//     if (props.duzenlenecekUye) {
//       setUye(props.duzenlenecekUye);
//     }
//   }, [props.duzenlenecekUye]);

//   // Inputlarda değişiklik olduğunda state'i güncelle
//   const handleChange = (e) => {
//     setUye({
//       ...uye,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Form gönderildiğinde callback fonksiyonunu çağır
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (props.duzenlenecekUye) {
//       // Üyeyi güncelle
//       props.uyeGuncelle(uye);
//     } else {
//       // Üyeyi ekle
//       props.uyeEkle(uye);
//     }
//     // Formu sıfırla
//     setUye({
//       isim: "",
//       email: "",
//       rol: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="isim">İsim:</label>
//       <input
//         type="text"
//         id="isim"
//         name="isim"
//         value={uye.isim}
//         onChange={handleChange}
//         required
//       />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={uye.email}
//         onChange={handleChange}
//         required
//       />
//       <label htmlFor="rol">Rol:</label>
//       <input
//         type="text"
//         id="rol"
//         name="rol"
//         value={uye.rol}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">
//         {props.duzenlenecekUye ? "Güncelle" : "Ekle"}
//       </button>
//     </form>
//   );
// }

// export default Form;

// import { useState } from "react";

// export const GradeMedico = () => {
//   const horarios = [
//     "08:00", "09:00", "10:00", "11:00",
//     "12:00", "13:00", "14:00", "15:00"
//   ];

//   const [mostrarAgenda, setMostrarAgenda] = useState(false);
//   const [agenda, setAgenda] = useState([
//     { nome: "DR. FULANO", horas: [false, true, false, false, false, true, false, false] },
//     { nome: "DR. CICLANO", horas: [true, true, true, false, false, false, true, true] },
//     { nome: "DRA. FULANA", horas: [false, false, true, true, true, false, false, false] },
//   ]);

//   function toggle(iMedico, iHora) {
//     const novaAgenda = [...agenda];
//     novaAgenda[iMedico].horas[iHora] = !novaAgenda[iMedico].horas[iHora];
//     setAgenda(novaAgenda);
//   }

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f8fafc",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         padding: "2rem",
//         gap: "2rem",
//       }}
//     >
//       {!mostrarAgenda ? (
//         <>
//           <h1 style={{ fontSize: "2rem", color: "#1e40af" }}>Agenda Médica</h1>
//           <button
//             onClick={() => setMostrarAgenda(true)}
//             style={{
//               background: "#2563eb",
//               color: "white",
//               border: "none",
//               padding: "0.75rem 1.5rem",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//               transition: "0.3s",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
//             onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
//           >
//             Entrar na Agenda
//           </button>
//         </>
//       ) : (
//         <>
//           <button
//             onClick={() => setMostrarAgenda(false)}
//             style={{
//               background: "#2563eb",
//               color: "white",
//               border: "none",
//               padding: "0.5rem 1rem",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//               transition: "0.3s",
//               marginBottom: "1rem",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
//             onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
//           >
//             ← Voltar
//           </button>

//           <div
//             style={{
//               width: "100%",
//               maxWidth: "900px",
//               overflowX: "auto",
//               borderRadius: "0.75rem",
//               boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//               backgroundColor: "white",
//             }}
//           >
//             <table
//               style={{
//                 borderCollapse: "collapse",
//                 width: "100%",
//                 minWidth: "800px",
//               }}
//             >
//               <thead>
//                 <tr style={{ backgroundColor: "#2563eb" }}>
//                   <th style={estiloCabecalho}>Médico</th>
//                   {horarios.map((h, i) => (
//                     <th key={i} style={estiloCabecalho}>
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {agenda.map((medico, i) => (
//                   <tr
//                     key={i}
//                     style={{
//                       borderBottom: "1px solid #e2e8f0",
//                       transition: "all 0.2s ease",
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.backgroundColor = "#f1f5f9")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.backgroundColor = "white")
//                     }
//                   >
//                     <td style={estiloMedico}>{medico.nome}</td>
//                     {medico.horas.map((h, j) => (
//                       <td
//                         key={j}
//                         onClick={() => toggle(i, j)}
//                         style={{
//                           ...estiloCelula,
//                           cursor: "pointer",
//                           backgroundColor: h ? "#dcfce7" : "#fee2e2",
//                           color: h ? "#166534" : "#991b1b",
//                           fontWeight: "600",
//                           transition: "all 0.2s ease",
//                           position: "relative",
//                         }}
//                         title={h ? "Disponível" : "Indisponível"}
//                       >
//                         <span
//                           style={{
//                             position: "absolute",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)",
//                             whiteSpace: "nowrap",
//                           }}
//                         >
//                           {h ? "✔️ Disponível" : "❌ Indisponível"}
//                         </span>
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // Estilos
// const estiloCabecalho = {
//   padding: "1rem 1.5rem",
//   textAlign: "center",
//   fontSize: "1rem",
//   fontWeight: "600",
//   color: "white",
//   letterSpacing: "0.025em",
// };

// const estiloMedico = {
//   padding: "1rem 1.5rem",
//   textAlign: "center",
//   fontWeight: "500",
//   color: "#1e293b",
//   whiteSpace: "nowrap",
// };

// const estiloCelula = {
//   padding: "1.5rem",
//   textAlign: "center",
//   position: "relative",
//   height: "60px",
//   minWidth: "120px",
// };



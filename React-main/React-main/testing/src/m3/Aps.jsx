

// function Childcomponent({ title, description }) {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <p>{description}</p>
//         </div>
//     )
// }

// function image({ src, alt, size }) {
//     return (
//         <>
//         <img src={src} alt={alt} width={size} height={size} />
//         </>
//     );
// }

// export default function Parentcomponent() {
//     return (
//         <>
//         <Childcomponent
//         title="Title"
//         description="Description"
//         age={16}
//         src="../../public/cobaReact.png"
//         alt="cobaReact"
//         size="100px"
//         />
//         </>
//     )
// }

// function Children({ Children }) {
//     return <div>{Children}</div>;
// }

function Children({ Children }) {
    return <div style={{backgroundColor: "red"}}>{Children}</div>;
}

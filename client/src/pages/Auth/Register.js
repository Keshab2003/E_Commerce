import React, { useState } from 'react'
import Layout from './../../components/layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
// import { toast } from 'react-toastify';

// import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import "../../styles/AuthStyles.css";


const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // toast.success("Successfully Registered!")
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, password, phone, address }),
    // };

    // try {
    //   const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth/register`, requestOptions);
    //   if (response.ok) {
    //     const data = await response.json();
    //     // Handle the response data here
    //     toast.success(data.message);
    //     navigate('/Login');
    //   }
    // }
    // catch (error) {
    //   // Handle fetch or other errors
    //   console.error(error);
    //   toast.error('Something went wrong!');
    // }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address });
      // const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address });
      // const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/Auth/Register`, { name, email, password, phone, address });
      if (res.data.success) {
        toast.success(res.data.message)
        toast.success("Registration Successfull");
        navigate('/Login');
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!")
    }

  }
  // console.log(process.env.REACT_APP_API);

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address });
//     toast.success(res.data && res.data.message); // Use toast from react-toastify
//     navigate('/Login');
//   } catch (error) {
//     console.log(error);
//     toast.error("Something went wrong!"); // Use toast from react-toastify

//   }
// }


// console.log(process.env.REACT_APP_API)
//   return (
//     <Layout title="Register E_commerce">
//       <div className='form-container register'>
//         <h1 className='title'>Register page</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="col-md-6 hi">
//             {/* <label htmlFor="exampleInputUserName" className="form-label">User Name</label> */}
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputUserName" placeholder='Enter your Name!' required />

//           </div>
//           <div className="col-md-6 hi">
//             {/* <label htmlFor="exampleInputEmail" className="form-label">Email</label> */}
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter your Email id!' required />

//           </div>
//           <div className="col-md-6 hi">
//             {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter password!' required />
//           </div>
//           <div className="col-md-6 hi">
//             {/* <label htmlFor="exampleInputPhoneNumber" className="form-label">Phone Number</label> */}
//             <input type="Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhoneNumber" placeholder='Enter your Phone Number!' required />

//           </div>
//           <div className="col-md-6 hi">
//             {/* <label htmlFor="exampleInputAddress" className="form-label">Address</label> */}
//             <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Enter your Permanent Address here!' required />

//           </div>
//           {/* <div className="mb-3 form-checkbox">
//             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//             <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//           </div> */}



//           <button type="submit" className="btn btn-primary">Register</button>
//         </form>

//       </div>

//     </Layout>
//   )
// }

export default Register;

// import React, { useState } from "react";
// import Layout from "./../../components/layout/Layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
// // import Register from './Register';
// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/v1/auth/register", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//       });
//       // const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address });
//       // if (res && res.data.success) {
//       toast.success(res.data && res.data.message);
//       navigate("/Login");
//       // } else {
//       // toast.error(res.data.message);
//       // }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <Layout title="Register - Ecommer App">
//       <div className="form-container ">
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">REGISTER FORM</h4>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Name"
//               required
//               autoFocus
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Email "
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Phone"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Address"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             REGISTER
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;
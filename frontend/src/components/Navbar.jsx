


// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, loading, logout } = useAuth();
//   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/login');
// //   };

//   return (
//     <nav style={{ 
//       padding: '15px',
//       background: '#f8f9fa',
//       borderBottom: '1px solid #dee2e6',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center'
//     }}>
//       <div style={{ display: 'flex', gap: '20px' }}>
//         <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
//         <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
//         <Link to="/chat" style={{ textDecoration: 'none', color: '#333' }}>AI Chat</Link>
//         {/* {loading ? (
//           <span>Loading...</span>  // ✅ Show this while checking authentication
//         ) : (
//           <>
//             {user && <Link to="/chat" style={{ textDecoration: 'none', color: '#333' }}>AI Chat</Link>}
//           </>
//         )} */}
//       </div>

//       {/* <div>
//         {loading ? (
//           <span>Loading...</span>  // ✅ Show this while checking authentication
//         ) : user ? (
//           <button onClick={handleLogout} style={{ 
//             padding: '5px 15px',
//             background: '#dc3545',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}>
//             Logout
//           </button>
//         ) : (
//           <div style={{ display: 'flex', gap: '10px' }}>
//             <Link to="/login" style={{ textDecoration: 'none', color: '#333' }}>Login</Link>
//             <Link to="/signup" style={{ textDecoration: 'none', color: '#333' }}>Signup</Link>
//           </div>
//         )}
//       </div> */}
//     </nav>
//   );
// };

// export default Navbar;




import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0,             
      left: 0,            
      width: '97%',      
      padding: '10px 20px',
      backgroundColor:'orange', 
      borderBottom: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      zIndex: 1000, 
      
    }}>
      <h2 
        onClick={handleLogoClick} 
        style={{
          cursor: 'pointer',
          color: '#333',
          margin: 0,
          fontSize: '24px',
          fontWeight: '600',
          transition: 'color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.color = 'white'}  
        onMouseOut={(e) => e.target.style.color = '#333'}   
      >
        Fitness Health
      </h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '16px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#333'}>
          Home
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontSize: '16px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#333'}>
          Contact
        </Link>
        <Link to="/chat" style={{ textDecoration: 'none', color: '#333', fontSize: '16px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#007bff'} onMouseOut={(e) => e.target.style.color = '#333'}>
          AI Chat
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


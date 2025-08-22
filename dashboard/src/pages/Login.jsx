import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Método que puedes cambiar fácilmente entre mock y API real
  const authenticateUser = async (username, password) => {
    // ⚡️ COMENTA ESTA LÍNEA CUANDO QUIERAS USAR LA API REAL ⚡️
    return await mockAuthentication(username, password);
    
    // ⚡️ DESCOMENTA ESTA LÍNEA PARA USAR LA API REAL ⚡️
    // return await realApiAuthentication(username, password);
  };

  // Método mock para desarrollo y pruebas
  const mockAuthentication = async (username, password) => {
    // Simulamos un delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Usuarios de prueba
    const testUsers = [
      { username: 'admin', password: 'admin123', name: 'Administrador' },
      { username: 'panadero', password: 'pan123', name: 'Panadero Principal' },
      { username: 'vendedor', password: 'ventas123', name: 'Vendedor' },
      { username: 'demo', password: 'demo123', name: 'Usuario Demo' }
    ];

    const user = testUsers.find(u => 
      u.username === username && u.password === password
    );

    return {
      success: !!user,
      user: user || null,
      token: user ? 'mock-token-' + Date.now() : null,
      message: user ? 'Login exitoso' : 'Credenciales incorrectas'
    };
  };

  // Método para la API real (listo para cuando la necesites)
  const realApiAuthentication = async (username, password) => {
    try {
      const response = await fetch('https://tu-api.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        message: 'Error de conexión con el servidor'
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validación básica
    if (!username.trim() || !password.trim()) {
      setError('Por favor, complete todos los campos');
      setLoading(false);
      return;
    }

    try {
      const result = await authenticateUser(username, password);
      
      if (result.success) {
        // Guardar datos de usuario (en localStorage o context)
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('authToken', result.token);
        
        // Redirigir al dashboard
        navigate('/dashboard');
      } else {
        setError(result.message || 'Error en la autenticación');
      }
    } catch (error) {
      setError('Error inesperado. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (  
    <div className='login-container'>
      <header className="pyme-header">
        <div className="nombre-pyme">
          <span>Panaderia El Sol</span>
          <h1>Dashboard de Producción</h1>
        </div>
      </header>

      <div className='menuLogin'>
        <form onSubmit={handleSubmit}>
          <div className='tituloMenu'>
            <h2>Iniciar Sesión</h2>
            <p>Por favor, ingrese sus credenciales para acceder al sistema.</p>
            <p className='demo-info'>
              💡 Demo: admin/admin123 | panadero/pan123 | vendedor/ventas123
            </p>
          </div>

          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}

          <div className='camposMenu'>
            <div className='campoUsuario'>
              <label htmlFor='usuario'>Usuario</label>
              <input 
                type='text' 
                id='usuario' 
                name='usuario' 
                placeholder='Ingrese su usuario'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className='campoContraseña'>
              <label htmlFor='contraseña'>Contraseña</label>
              <input 
                type='password' 
                id='contraseña' 
                name='contraseña' 
                placeholder='Ingrese su contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className='botonIngresar'>
            <button 
              type='submit' 
              className='btnIngresar'
              disabled={loading}
            >
              {loading ? 'Verificando...' : 'Ingresar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
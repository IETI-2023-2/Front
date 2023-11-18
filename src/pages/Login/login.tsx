import React, { useState } from "react";
import { loginAccess } from "../../services/login/loginAccess";
import { FormEvent } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../../services/login/getUserRole";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginAccess(formData);
      localStorage.setItem("username", formData.username);
      localStorage.setItem("token", response.data.jwtToken);

      console.log("Respuesta del servidor:", response);

      const userRole = await getUserRole(formData.username);
      localStorage.setItem("role", userRole.data);

      switch (userRole.data) {
        case "ADMIN":
          navigate("/admin-home");
          break;
        case "USER":
          navigate("/user-home");
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={{ width: "350px" }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ width: "350px" }}
                required
              />
            </div>
            <button type="submit" style={{ backgroundColor: "#1d2c59" }}>
              Ingresar
            </button>
          </form>
        </div>
        <div className="image-container">
        
        </div>
      </div>
    </div>
  );
}

export default Login;

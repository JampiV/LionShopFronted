package com.lionusers.infrastracture.repositories;

import com.lionusers.domain.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Usuario findUsuarioByCorreoUsuarioAndContrasenaUsuario(String correoUsuario, String contrasenaUsuario);

}

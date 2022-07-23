package com.shoppingservice.application.dto;

import com.shoppingservice.domain.entities.Rol;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
@Getter
@Setter
@ToString
public class UsuarioExt {

     Integer idUsuario;
     String nombreUsuario;
     String contrasenaUsuario;
     String correoUsuario;
     String direccionUsuario;
     Rol rol;

}

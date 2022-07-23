package com.shoppingservice.application.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.shoppingservice.domain.entities.Usuario;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class RespuestaUsuario extends Respuesta {
    @JsonProperty("datillos")
    List<Usuario> data;
}
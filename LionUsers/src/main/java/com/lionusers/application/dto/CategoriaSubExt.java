package com.lionusers.application.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "category")
public class CategoriaSubExt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCategory;

    @NotNull
    @Column(name="category_name", nullable = false)
    private String nombre_categoria;

    @NotNull
    @Size(min = 1,max = 200, message = "La descripción no puede exceder los 200 caracteres")
    @Column(name = "category_description", nullable = false, length = 200)
    private String descripcion_categoria;

    @JsonBackReference
    @OneToMany(mappedBy ="category")
    private List<ProductoExt> productoExt;

    public Integer getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(Integer idCategory) {
        this.idCategory = idCategory;
    }

    public String getNombre_categoria() {
        return nombre_categoria;
    }

    public void setNombre_categoria(String nombre_categoria) {
        this.nombre_categoria = nombre_categoria;
    }

    public String getDescripcion_categoria() {
        return descripcion_categoria;
    }

    public void setDescripcion_categoria(String descripcion_categoria) {
        this.descripcion_categoria = descripcion_categoria;
    }

    public List<ProductoExt> getProductoExt() {
        return productoExt;
    }

    public void setProductoExt(List<ProductoExt> productoExt) {
        this.productoExt = productoExt;
    }
}
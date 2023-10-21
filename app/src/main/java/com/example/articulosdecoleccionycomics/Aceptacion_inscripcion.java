package com.example.articulosdecoleccionycomics;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;


public class Aceptacion_inscripcion extends AppCompatActivity {

    private TextView txt_view_nombre;
    private TextView txt_view_correo;
    private TextView txt_view_telefono;
    private TextView txt_view_sexo;

    private Button btn_si;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_aceptacion_inscripcion);

        txt_view_nombre = findViewById(R.id.txtViewNombre);
        txt_view_correo = findViewById(R.id.txtViewCorreo);
        txt_view_telefono = findViewById(R.id.txtViewTelefono);

        String nombre = getIntent().getExtras().getString("nombre_enviado");
        String correo = getIntent().getExtras().getString("correo_enviado");
        String telefono = getIntent().getExtras().getString("telefono_enviado");
        //String sexo = getIntent().getExtras().getString("sexo_enviado");

        txt_view_nombre.setText(nombre);
        txt_view_correo.setText(correo);
        txt_view_telefono.setText(telefono);
        //txt_view_sexo.setText(sexo);

        btn_si = findViewById(R.id.btnSi);
        btn_si.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "Registro Exitoso", Toast.LENGTH_SHORT).show();
                Intent i = new Intent(Aceptacion_inscripcion.this, MainActivity.class);
                startActivity(i);
            }
        });

    }

    public void abrirVentanaRegistro (View view) {
        Intent i = new Intent(this, Registro.class);
        startActivity(i);
    }
}
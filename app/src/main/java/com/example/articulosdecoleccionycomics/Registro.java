package com.example.articulosdecoleccionycomics;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.TextView;

public class Registro extends AppCompatActivity {

    private Button btn_registrar;
    private EditText txt_nombre;
    private EditText txt_correo;
    private EditText txt_telefono;
    private EditText txt_sexo;

    private RadioButton radio_btn_masculino;
    private RadioButton radio_btn_femenino;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registro);

        txt_nombre = findViewById(R.id.txtNombre);
        txt_correo = findViewById(R.id.txtCorreo);
        txt_telefono = findViewById(R.id.txtTelefono);
        txt_sexo = findViewById(R.id.txtSexo);

        radio_btn_masculino = findViewById(R.id.radioBtnMasculino);
        radio_btn_femenino = findViewById(R.id.radioBtnFemenino);

        btn_registrar = findViewById(R.id.btnRegistrar);
        btn_registrar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Registro.this, Aceptacion_inscripcion.class);
                i.putExtra("nombre_enviado", txt_nombre.getText().toString());
                i.putExtra("correo_enviado", txt_correo.getText().toString());
                i.putExtra("telefono_enviado", txt_telefono.getText().toString());
                i.putExtra("sexo_enviado", txt_sexo.getText().toString());
                startActivity(i);
            }
        });

    }

    public void abrirVentanaPrincipal (View view) {
        Intent i = new Intent(this, MainActivity.class);
        startActivity(i);
    }

    public void mostrarRadioButtonSeleccionado (View view) {
        String masculino = radio_btn_masculino.getText().toString();
        String femenino = radio_btn_femenino.getText().toString();

        if (radio_btn_masculino.isChecked()) {
            txt_sexo.setText(masculino);
        }
        if (radio_btn_femenino.isChecked()) {
            txt_sexo.setText(femenino);
        }
    }

}
from distutils.log import debug
from flask import   render_template, request, flash
import psycopg2                                        
import psycopg2.extras

from app import *

DB_HOST = "localhost"
DB_NAME = "RegistroDeHorario"
DB_USER = "postgres"
DB_PASS = "arminVAN2014"

conexion=psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)

@app.route('/empleados',methods=["POST"])
def index():
    return render_template('usuarios.html')

from app import *
@app.route('/reg', methods=['POST'])
def insertar(): 
    dato=conexion.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
    if request.method == 'POST': 
        pname= request.form           ['pname']
        sname = request.form          ['sname']
        paname = request.form         ['paname']
        saname = request.form         ['saname']
        sexo = request.form           ['sexo']
        rol = request.form            ['rol']
        email = request.form          ['email']
        telf = request.form           ['telf']
        cedula= request.form          ['cedula']     
        
        dato.execute("INSERT INTO trabajadores (cedula, nombres1, nombres2, apellido1, apellido2, sexo, rol, correo, telfm ) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s )",
                     (pname, sname, paname, saname, sexo, rol, email, telf, cedula))
        
        conexion.commit()
        flash('final')
        return 'datos registrados'
    
   
        
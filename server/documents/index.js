module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
   </head>
   <style>
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
  
  .factura{
    display: inline-block;
    background-color: white;
    width: 595px;
    height: 842px;
    white-space: normal;
  }
  
  .factura__data{
      display: block;
      margin: 10px;
      border: 1px solid #000;
  }

  .factura__data2{
    display: block;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid #000;
}

.factura__data3{
    display: block;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid #000;
    border-top: none;
}

  
  .factura__image{
      display: inline-flexbox;
      width: 30%;
      margin: 10px;
      position: relative;
  bottom: 15px;
  }
  
  .factura__1{
      display: inline-block;
    width: 40%;
    position: relative;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
  .factura__2{
      display: inline-block;
      position: relative;
      bottom: 25px;
      left: 20px;
  }
  
  .factura__3{
    display: inline-block;
    position: relative;
    border-right: 1px solid #000;
  }
  
  .factura__4{
      display: inline-block;
      position: relative;
  }
  
  .factura__5{
      display: inline-block;
      margin-left: 10px;
      border: 1px solid #000;
      width: 100px;
  }
  
  .factura__6{
      display: inline-block;
      border: 1px solid #000;
      width: 100px;
      border-left: none;
      margin: none;
  }
  
  .factura__7{
      display: inline-block;
      border: 1px solid #000;
      border-left: none;
      width: 125px;
  }
  .factura__8{
      display: inline-block;
      border: 1px solid #000;
      border-left: none;
      width: 240px;
  }
  
  .factura__5-2{
      display: inline-block;
      margin-left: 10px;
      border: 1px solid #000;
      border-top: none;
      width: 100px;
  }
  
  .factura__6-2{
      display: inline-block;
      border: 1px solid #000;
      border-top: none;
      width: 100px;
      border-left: none;
  }
  
  .factura__7-2{
      display: inline-block;
      border: 1px solid #000;
      border-top: none;
      border-left: none;
      width: 125px;
  }
  .factura__8-2{
      display: inline-block;
      border: 1px solid #000;
      border-top: none;
      border-left: none;
      width: 240px;
  }
  
  .factura__9{
      display: inline-block;
      margin-left: 10px;
      border: 1px solid #000;
      border-top: none;
      width: 287.5px;
  }
  
  .factura__10{
      display: inline-block;
      border: 1px solid #000;
      border-top: none;
      width: 287.5px;
      border-left: none;
  }
  
  .factura__11{
      display: inline-block;
      margin-left: 10px;
      margin-top: 10px;
      border: 1px solid #000;
      width: 225px;
  }
  
  .factura__12{
      display: inline-block;
      margin-top: 10px;
      border: 1px solid #000;
      width: 150px;
      border-left: none;
  }
  
  .factura__13{
      display: inline-block;
      margin-top: 10px;
      border: 1px solid #000;
      width: 200px;
      border-left: none;
  }
  
  .factura__14{
      display: inline-block;
      margin-left: 10px;
      border: 1px solid #000;
      width: 90px;
  }
  
  .factura__15{
      display: inline-block;
      border: 1px solid #000;
      border-left: none;
      width: 80px;
  }
  
  .factura__16{
      display: inline-block;
      border: 1px solid #000;
      border-left: none;
      width: 85px;
  }
  
  .factura__17{
      display: inline-block;
      border: 1px solid #000;
      margin-left: 10px;
      width: 165px;
  }
  
  .factura__18{
      display: inline-block;
      border: 1px solid #000;
      border-left: none;
      width: 155px;
  }
  
  
  .factura__19{
      display: inline-block;
      border: 1px solid #000;
      border-left: none;
      width: 100px;
  }
  
  .factura__20{
      display: inline-block;
      margin-left: 10px;
      margin-top: 10px;
      border: 1px solid #000;
      width: 287.5px;
  }
  
  .factura__21{
      display: inline-block;
      border: 1px solid #000;
      margin-top: 10px;
      width: 287.5px;
      border-left: none;
  }
  
  .factura__condiciones{
      display: inline-block;
      border: 1px solid #000;
      margin: 10px;
      width: 575px;
      height: 800px;
  }
  
  .factura__2 >p{
      padding-left: 17px;
  }
  
  p{
      padding: 5px;
      font-size: 10px;
  }
  
  #p2{
      font-weight: bold;
      font-size: 12px;
      display: inline-block;

  }
  #p3{
      font-size: 10px;
      display: inline-block;
  }
  #p4{
      font-size: 10px;
      display: block;
  }
  #p5{
      font-size: 10px;
      display: inline;
  }
  
  #p6{
      font-size: 10px;
      text-align: center;
      margin: 10px;
      font-weight: bold;
  }
  
  #p7{
      font-size: 12px;
      text-align: center;
      margin: 10px;
      font-weight: bold;
  }
  
  #p8{
      font-size: 11px;
      text-align: justify;
      margin: 10px;
  }
  strong{
      padding-top: 25px;
      padding-bottom: 25px;
      padding-left: 25px;
      font-size: 20px;
  }
  
  h2{
      text-align: center;
      font-size: 20px;
  }
  
  h3{
      margin: 10px;
      font-size: 14px;
  }

  #p13{
    font-size: 10px;
    display: block;
}

.factura__33{
    display: inline-block;
    position: relative;
    width: 100px;
    border-right: 1px solid #000;
  }
  .factura__34{
    display: inline-block;
    position: relative;
    width: 140px;
    border-right: 1px solid #000;
  }

  .factura__35{
    display: inline-block;
    position: relative;
    width: 100px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
  }
  .factura__36{
    display: inline-block;
    position: relative;
    width: 125px;
    border-top: 1px solid #000;
  }

  .factura__37{
    display: inline-block;
    position: relative;
    width: 287.5px;
    border-right: 1px solid #000;
  }
  
   </style>   
   <body>
    <div class='factura'>
        <div class='factura__data'>
        <img src="http://orbislogistics.com.mx/wp-content/uploads/2020/10/LOGO3-266x63.png" class="factura__image"/>
        <div class='factura__1'>
            <p>ORBIS LOGISTICS SOLUTIONS, S.A. DE C.V.</p>
            <p>RFC: OLS140228RA6</p>
            <p>AV. LUDWIG VAN BEETHOVEN No. 5113, INTERIOR 4
                COL. RESIDENCIAL LA ESTANCIA, ZAPOPAN, JALISCO
                CP 45030</p>
            <p>SERVICIO PÚBLICO FEDERAL</p>
        </div>
        <div class='factura__2'>
        <p class='p' >CARTA PORTE</p>
        <strong>LD15</strong>
        <p>IMPORTACIÓN</p>
        </div>
        </div>
        <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Lugar de Expedición:</p>
                <p id='p3'>Guadalajara</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Fecha de Expedición:</p>
                <p id='p3'>22-10-2222</p>
            </div>
        </div>
       <div class='factura__data2'>
        <div class='factura__33'>
            <p id='p2'>Origen:</p>
            <p id='p13'>Nuevo Laredo</p>
        </div>
        <div class='factura__33'>
            <p id='p2'>Remitente:</p>
            <p id='p13'>Orbis Logistics</p>
        </div>
        <div class='factura__34'>
            <p id='p2'>RFC Remitente:</p>
            <p id='p13'>345546456</p>
        </div>
        <div class='factura__4'>
            <p id='p2'>Domicilio:</p>
            <p id='p3'>Lopez</p>
            <p id='p4'>588</p>
        </div>
       </div>
   <div class='factura__data3'>
    <div class='factura__33'>
        <p id='p2'>Destino:</p>
        <p id='p13'>Villaguay</p>
    </div>
    <div class='factura__33'>
        <p id='p2'>Remitente:</p>
        <p id='p13'>Pedro Saborido</p>
    </div>
    <div class='factura__34'>
        <p id='p2'>RFC Destinatario:</p>
        <p id='p13'>214232321</p>
    </div>
    <div class='factura__4'>
        <p id='p2'>Patio Destino:</p>
        <p id='p3'>Villaguay</p>
        <p id='p4'>Villaguay</p>
    </div>
   </div>
   <div class='factura__data3'>
    <div class='factura__37'>
        <p id='p2'>Se recoge en:</p>
        <p id='p5'>Patio</p>
    </div>
    <div class='factura__4'>
        <p id='p2'>Se entrega en:</p>
        <p id='p3'>Patio</p>
    </div>
   </div>
   <div class='factura__data'>
    <div class='factura__3'>
        <p id='p2'>Valor Unitario por cuota o fracción:</p>
        <p id='p4'>Cuota convenida</p>
    </div>
    <div class='factura__3'>
        <p id='p2'>Valor Declarado:</p>
        <p id='p4'>No declarado</p>
    </div>
    <div class='factura__4'>
        <p id='p2'>Peso Declarado:</p>
        <p id='p4'>1</p>
    </div>
</div>
       
            
            
    
            <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Cantidad:</p>
                <p id='p3'>150</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Contenido:</p>
                <p id='p3'>Rollos de papel</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Peso Declarado:</p>
                <p id='p3'>1</p>
            </div>
        </div>
        <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Total Flete:</p>
                <p id='p4'>$1.00</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Seguro:</p>
                <p id='p4'>$0.00</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Otros:</p>
                <p id='p4'>$0.00</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Importe:</p>
                <p id='p4'>$1.00</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>IVA 16%:</p>
                <p id='p4'>$0.16</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Ret. IVA 4%:</p>
                <p id='p4'>$0.04</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Neto:</p>
                <p id='p4'>$1.12</p>
            </div>
        </div>
        

        <div class='factura__data'>
            <div class='factura__4'>
                <p id='p2'>Cantidad en letras:</p>
                <p id='p3'>Un Peso 12/100</p>
            </div>
        </div>
        <h2>DOCUMENTO SIN VALOR FISCAL</h2>
        <span></span>
        <h3>OBSERVACIONES:</h3> 
        <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Contacto:</p>
                <p id='p4'>Pedro Carlochos</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Cita (fecha y hora):</p>
                <p id='p4'>16-06-2020 11:30</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Impo/Expo:</p>
                <p id='p4'>1545</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Agencia Aduanal:</p>
                <p id='p4'>4458552</p>
            </div>
        </div>
        <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Pedimento:</p>
                <p id='p3'>45454</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Referencia:</p>
                <p id='p3'>3265</p>
            </div>
        </div>
            <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Unidad:</p>
                <p id='p3'>DGFR141</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Operador:</p>
                <p id='p3'>Carlos capussotto</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Placas Tractor:</p>
                <p id='p3'>TYF444</p>
            </div>
        </div>
        <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Remolque:</p>
                <p id='p3'>5547</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Placas Remolque:</p>
                <p id='p3'>RER444</p>
            </div>
        </div>
            <p id='p6'>
            ESTA MERCANCÍA VIAJA POR CUENTA Y RIESGO DEL DESTINATARIO Y LIBRE DE MANIOBRAS PARA EL OPERADOR.
            </p>
    </div>
    <div class='factura'>
        <div class='factura__condiciones'>
            <p id='p7'>
            CONDICIONES DEL CONTRATO DE TRANSPORTE QUE AMPARA ESTA CARTA DE PORTE
            </p>
            <p id='p8'>
            PRIMERA.- Para los efectos del presente contrato de transporte se denomina "Porteador" al transportista y
"Remitente" al usuario que contrate el servicio.
SEGUNDA.- El "Remitente" es responsable de que la información proporcionada al "Porteador" sea veraz y que
la documentación que entregue para efectos del transporte sea la correcta.
TERCERA.- El "Remitente" debe declarar al "Porteador" el tipo de mercancía o efectos de que se trate, peso,
medidas y/o número de la carga que entrega para su transporte y, en su caso, el valor de la misma. La carga
que se entregue a granel será pesada por el "Porteador" en el primer punto donde haya báscula apropiada o,
en su defecto, aforada en metros cúbicos con la conformidad del "Remitente".
CUARTA.- Para efectos del transporte, el "Remitente" deberá entregar al "Porteador" los documentos que las
leyes y reglamentos exijan para llevar a cabo el servicio, en caso de no cumplirse con estos requisitos el
"Porteador" está obligado a rehusar el transporte de las mercancías.
QUINTA.- Si por sospecha de falsedad en la declaración del contenido de un bulto el "Porteador" deseare
proceder a su reconocimiento, podrá hacerlo ante testigos y con asistencia del "Remitente" o del
consignatario. Si este último no concurriere, se solicitará la presencia de un inspector de la Secretaría de
Comunicaciones y Transportes, y se levantará el acta correspondiente. El porteador tendrá en todo caso la
obligación de dejar los bultos en el estado en que se encontraban antes del reconocimiento.
SEXTA.- El "Porteador" deberá recoger y entregar la carga precisamente en los domicilios que señale el
"Remitente", ajustándose a los términos y condiciones convenidos. El "Porteador" sólo está obligado a llevar
la carga al domicilio del consignatario para su entrega una sola vez. Si ésta no fuera recibida, se dejará aviso
de que la mercancía queda a disposición del interesado en las bodegas que indique el "Porteador"
SEPTIMA.- Si la carga no fuere retirada dentro de los 30 días siguientes a aquél en que hubiere sido puesta a
disposición del consignatario, el "Porteador" podrá solicitar la venta en pública subasta con arreglo a lo que
dispone el Código de Comercio.
OCTAVA.- El "Porteador" y el "Remitente" negociarán libremente el precio del servicio, tomando en cuenta su
tipo, característica de los embarques, volumen, regularidad, clase de carga y sistema de pago.
NOVENA.- Si el "Remitente" desea que el "Porteador" asuma la responsabilidad por el valor de las mercancías
o efectos que él declare y que cubra toda clase de riesgos, inclusive los derivados de caso fortuito o de fuerza
mayor, las partes deberán convenir un cargo adicional, equivalente al valor de la prima del seguro que se
contrate, el cual se deberá expresar en la carta de porte.
DECIMA.- Cuando el importe del flete no incluya el cargo adicional, la responsabilidad del "Porteador" queda
expresamente limitada a la cantidad equivalente a 15 días del salario mínimo vigente en el Distrito Federal
por tonelada o cuando se trate de embarques cuyo peso sea mayor de 200 kg. pero menor de 1000 kg; y a 4
días de salario mínimo por remesa cuando se trate de embarques con peso hasta de 200 kg.
DECIMA PRIMERA.- El precio del transporte deberá pagarse en origen, salvo convenio entre las partes de pago
en destino. Cuando el transporte se hubiere concertado "Flete por Cobrar", la entrega de las mercancías o
efectos se hará contra el pago del flete y el "Porteador" tendrá derecho a retenerlos mientras no se le cubra el
precio convenido.
DECIMA SEGUNDA.- Si al momento de la entrega resultare algún faltante o avería, el consignatario deberá
hacerla constar en ese acto en la carta de porte y formular su reclamación por escrito al "Porteador", dentro
de las 24 horas siguientes.
DECIMA TERCERA.- El "Porteador" queda eximido de la obligación de recibir mercancías o efectos para su
transporte, en los siguientes casos:
a) Cuando se trate de carga que por su naturaleza, peso, volumen, embalaje, defectuoso o cualquier otra
circunstancia no pueda transportarse sin destruirse o sin causar daño a los demás artículos o al material
rodante, salvo que la empresa de que se trate tenga el equipo adecuado.
b) Las mercancías cuyo transporte haya sido prohibido por disposiciones legales o reglamentarias. Cuando
tales disposiciones no prohiban precisamente el transporte de determinadas mercancías, pero sí ordenen la
presentación de ciertos documentos para que puedan ser transportadas, el "Remitente" estará obligado a
entregar al "Porteador" los documentos correspondientes.
            </p>
        </div>
    </div>
   </body>
</html>
    `;
};
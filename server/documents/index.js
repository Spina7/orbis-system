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
      bottom: 15px;
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
      padding-left: 15px;
  }
  
  p{
      padding: 5px;
      font-size: 10px;
  }
  
  #p2{
      font-weight: bold;
      font-size: 13px;
      display: inline-block;
  }
  #p3{
      font-size: 13px;
      display: inline-block;
  }
  #p4{
      font-size: 13px;
      display: block;
  }
  #p5{
      font-size: 13px;
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
      font-size: 12px;
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
  }
  
  h3{
      margin: 10px;
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
                <p id='p2'>Lugar de Expedición : </p>
                <p id='p3'>Guadalajara</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Fecha de Expedición :</p>
                <p id='p3'>22-10-2222</p>
            </div>
        </div>
        <div class='factura__5'>
                <p id='p2'>Origen : </p>
                <p id='p4'>Nuevo Laredo</p>
            </div>
            <div class='factura__6'>
                <p id='p2'>Remitente : </p>
                <p id='p4'>Orbis Logistics</p>
            </div>
            <div class='factura__7'>
                <p id='p2'>RFC Remitente : </p>
                <p id='p4'>345546456</p>
            </div>
            <div class='factura__8'>
                <p id='p2'>Domicilio : </p>
                <p id='p5'>Lopez 588</p>
                <p id='p4'>Lopez 588</p>
            </div>
            <div class='factura__5-2'>
                <p id='p2'>Destino :</p>
                <p id='p4'>Villaguay</p>
            </div>
            <div class='factura__6-2'>
                <p id='p2'>Destinatario :</p>
                <p id='p4'>Pedro Saborido</p>
            </div>
            <div class='factura__7-2'>
                <p id='p2'>RFC Destinatario :</p>
                <p id='p4'>214232321</p>
            </div>
            <div class='factura__8-2'>
                <p id='p2'>Patio Destino :</p>
                <p id='p5'>Lopez 588</p>
                <p id='p4'>Lopez 588</p>
            </div>
            <div class='factura__9'>
                <p id='p2'>Se recoge en : </p>
                <p id='p5'>Patio</p>
            </div>
            <div class='factura__10'>
                <p id='p2'>Se entrega en : </p>
                <p id='p5'>Patio</p>
            </div>
            <div class='factura__11'>
                <p id='p2'>Valor Unitario por cuota o fracción: </p>
                <p id='p4'>Cuota convenida</p>
            </div>
            <div class='factura__12'>
                <p id='p2'>Valor Declarado: </p>
                <p id='p4'>No declarado</p>
            </div>
            <div class='factura__13'>
                <p id='p2'>Peso Declarado: </p>
                <p id='p4'>1</p>
            </div>
            <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Cantidad: </p>
                <p id='p3'>150</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Contenido: </p>
                <p id='p3'>Rollos de papel</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Peso Declarado:</p>
                <p id='p3'>1</p>
            </div>
        </div>

        <div class='factura__14'>
        <p id='p2'>Total Flete:</p>
                <p id='p5'>$1.00</p>
        </div>
        <div class='factura__15'>
        <p id='p2'>Seguro: </p>
                <p id='p5'>$0.00</p>
        </div>
        <div class='factura__15'>
        <p id='p2'>Otros: </p>
                <p id='p5'>$0.00</p>
        </div>
        <div class='factura__15'>
        <p id='p2'>Importe: </p>
                <p id='p5'>$1.00</p>
        </div>
        <div class='factura__15'>
        <p id='p2'>IVA 16%: </p>
                <p id='p5'>$0.16</p>
        </div>
        <div class='factura__16'>
        <p id='p2'>Ret. IVA 4%:</p>
                <p id='p5'>$0.04</p>
        </div>
        <div class='factura__15'>
        <p id='p2'>Neto: </p>
                <p id='p5'>$1.12</p>
        </div>
        <div class='factura__data'>
            <div class='factura__4'>
                <p id='p2'>Cantidad en letras: </p>
                <p id='p3'>Un Peso 12/100</p>
            </div>
        </div>
        <h2>DOCUMENTO SIN VALOR FISCAL</h2>
        <span></span>
        <h3>OBSERVACIONES:</h3> 
        <div class='factura__17'>
        <p id='p2'>Contacto: </p>
            <p id='p5'>Pedro Carlochos</p>
        </div>
        <div class='factura__18'>
        <p id='p2'>Cita (fecha y hora): </p>
                <p id='p5'>06-2020 11:30</p>
        </div>
        <div class='factura__19'>
        <p id='p2'>Impo/Expo: </p>
                <p id='p5'>1545</p>
        </div>
        <div class='factura__18'>
        <p id='p2'>Agencia Aduanal:</p>
                <p id='p5'>4458552</p>
        </div>
        <div class='factura__20'>
                <p id='p2'>Pedimento: </p>
                <p id='p5'>45454</p>
            </div>
            <div class='factura__21'>
                <p id='p2'>Referencia: </p>
                <p id='p5'>3265</p>
            </div>
            <div class='factura__data'>
            <div class='factura__3'>
                <p id='p2'>Unidad: </p>
                <p id='p3'>DGFR141</p>
            </div>
            <div class='factura__3'>
                <p id='p2'>Operador: </p>
                <p id='p3'>Carlos capussotto</p>
            </div>
            <div class='factura__4'>
                <p id='p2'>Placas Tractor: </p>
                <p id='p3'>TYF444</p>
            </div>
        </div>
        <div class='factura__20'>
                <p id='p2'>Pedimento: </p>
                <p id='p5'>45454</p>
            </div>
            <div class='factura__21'>
                <p id='p2'>Referencia: </p>
                <p id='p5'>3265</p>
            </div>
            <p id='p6'>
            ESTA MERCANCÍA VIAJA POR CUENTA Y RIESGO DEL DESTINATARIO Y LIBRE DE MANIOBRAS PARA EL OPERADOR.
            </p>
    </div>
   </body>
</html>
    `;
};
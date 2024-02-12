export interface InvoiceIncome {
    id: number;
    rncCedulaPasaporte: string | null;
    tipoIdentificacion: number | null;
    numeroComprobanteFiscal: string | null;
    numeroComprobanteFiscalModificado: string | null;
    tipoIngreso: number | null;
    fechaComprobante: string | null;
    fechaRetencion: string | null;
    montoFacturado: number | null;
    itbisFacturado: number | null;
    itbisRetenidoporTerceros: number | null;
    itbisPercibido: number | null;
    retencionRentaporTerceros: number | null;
    isrPercibido: number | null;
    impuestoSelectivoalConsumo: number | null;
    otrosImpuestos_Tasas: number | null;
    montoPropinaLegal: number | null;
    efectivo: number | null;
    cheque_Transferencia_Deposito: number | null;
    tarjetaDebito_Credito: number | null;
    ventaACredito: number | null;
    bonosOCertificadosRegalo: number | null;
    permuta: number | null;
    otrasFormasVentas: number | null;
    companyID: number;
}
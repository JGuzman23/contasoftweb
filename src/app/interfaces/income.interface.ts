export interface InvoiceIncome {
    id: number;
    rNCCedulaPasaporte: string | null;
    tipoIdentificación: string | null;
    numeroComprobanteFiscal: string | null;
    numeroComprobanteFiscalModificado: string | null;
    tipoIngreso: string | null;
    fechaComprobante: string | null;
    fechaRetención: string | null;
    montoFacturado: string | null;
    iTBISFacturado: string | null;
    iTBISRetenidoporTerceros: string | null;
    iTBISPercibido: string | null;
    retenciónRentaporTerceros: string | null;
    iSRPercibido: string | null;
    impuestoSelectivoalConsumo: string | null;
    otrosImpuestos_Tasas: string | null;
    montoPropinaLegal: string | null;
    efectivo: string | null;
    cheque_Transferencia_Depósito: string | null;
    tarjetaDébito_Crédito: string | null;
    ventaACrédito: string | null;
    bonosOCertificadosRegalo: string | null;
    permuta: string | null;
    otrasFormasVentas: string | null;
    companyID: number;
}
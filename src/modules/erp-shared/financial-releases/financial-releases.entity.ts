import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'PCLANC',
})
export class financialReleasesEntity {
  @PrimaryColumn({ name: 'RECNUM', type: 'numeric' })
  recNum: number;

  @Column({ name: 'DTLANC', type: 'date' })
  releaseDate: Date;

  @Column({ name: 'HISTORICO', type: 'varchar2', length: 500, nullable: true })
  historical: string;

  @Column({ name: 'DUPLIC', type: 'number', nullable: true })
  duplicate: number;

  @Column({
    name: 'LOCALIZACAO',
    type: 'varchar2',
    length: 100,
    nullable: true,
  })
  location: string;

  @Column({ name: 'CODFILIAL', type: 'number', nullable: true })
  codBranch: number;

  @Column({ name: 'INDICE', type: 'varchar2', length: 1, nullable: true })
  indexCorrection: string;

  @Column({ name: 'NUMCHEQUE', type: 'varchar2', length: 20, nullable: true })
  paycheckNumber: string;

  @Column({ name: 'TIPOLANC', type: 'varchar2', length: 1, nullable: true })
  releaseType: string;

  @Column({ name: 'TIPOPARCEIRO', type: 'varchar2', length: 1, nullable: true })
  partnerType: string;

  @Column({ name: 'NOMEFUNC', type: 'varchar2', length: 100, nullable: true })
  employeeName: string;

  @Column({ name: 'ASSINATURA', type: 'varchar2', length: 100, nullable: true })
  signature: string;

  @Column({ name: 'TIPOPAGTO', type: 'varchar2', length: 10, nullable: true })
  typePayment: string;

  @Column({
    name: 'NUMDVDESTDOC',
    type: 'varchar2',
    length: 20,
    nullable: true,
  })
  checkDigitDocumentDestination: string;

  @Column({
    name: 'NUMCODBARRA',
    type: 'varchar2',
    length: 100,
    nullable: true,
  })
  barcodeNumber: string;

  @Column({ name: 'HISTORICO2', type: 'varchar2', length: 500, nullable: true })
  historical2: string;

  @Column({ name: 'MOEDA', type: 'varchar2', length: 1, default: 'R' })
  currency: string;

  @Column({ name: 'DVAG', type: 'varchar2', length: 10, nullable: true })
  checkDigitAgency: string;

  @Column({
    name: 'PORTADORCHEQUE',
    type: 'varchar2',
    length: 100,
    nullable: true,
  })
  checkHouse: string;

  @Column({ name: 'NUMDIIMPORTACAO', type: 'number', nullable: true })
  importDeclarationNumber: number;

  @Column({ name: 'ADIANTAMENTO', type: 'varchar2', length: 1, nullable: true })
  advancePayment: string;

  @Column({ name: 'NFSERVICO', type: 'varchar2', length: 1, default: 'N' })
  serviceInvoice: string;

  @Column({ name: 'PREST', type: 'varchar2', length: 10, nullable: true })
  provision: string;

  @Column({ name: 'BOLETO', type: 'varchar2', length: 1, nullable: true })
  ticket: string;

  @Column({
    name: 'PAGTONOMEDOCLIENTE',
    type: 'varchar2',
    length: 1,
    nullable: true,
  })
  paymentNameClient: string;

  @Column({ name: 'OBSBLOQ', type: 'varchar2', length: 500, nullable: true })
  blockingObservation: string;

  @Column({ name: 'AGENDAMENTO', type: 'varchar2', length: 1, nullable: true })
  scheduling: string;

  @Column({ name: 'NUMCONTRATOCAMBIO', type: 'number', nullable: true })
  contractNumberExchange: number;

  @Column({ name: 'IDCONTROLEEMBARQUE', type: 'number', nullable: true })
  idBoardingControl: number;

  @Column({ name: 'FORMAPGTO', type: 'number', nullable: true })
  paymentMethod: number;

  @Column({
    name: 'CODROTINACAD',
    type: 'varchar2',
    length: 50,
    nullable: true,
  })
  routineCodeRegistration: string;

  @Column({ name: 'DTMOEDA', type: 'date', nullable: true })
  dateCurrency: Date;

  @Column({
    name: 'CODROTINAALT',
    type: 'varchar2',
    length: 50,
    nullable: true,
  })
  routineCodeChange: string;

  @Column({ name: 'PARCELA', type: 'number', nullable: true })
  installment: number;

  @Column({ name: 'NUMNOTA', type: 'varchar2', length: 50, nullable: true })
  invoiceNumber: string;

  @Column({ name: 'CODFORNEC', type: 'number', nullable: true })
  supplierCode: number;

  @Column({ name: 'VLRUTILIZADOADIANTFORNEC', type: 'number', default: 0 })
  amountUsedAdvancePaymentSupplier: number;

  @Column({ name: 'TIPOSERVICO', type: 'number', nullable: true })
  serviceTypeCode: number;

  @Column({
    name: 'IDENTIFICADORFGTS',
    type: 'varchar2',
    length: 50,
    nullable: true,
  })
  identifierFgts: string;

  @Column({ name: 'LACREDIGCONECSOCIAL', type: 'number', default: 0 })
  digitalSealSocialConnectivity: number;

  @Column({ name: 'OPCAOPAGAMENTOIPVA', type: 'number', default: 0 })
  paymentOptionIPVA: number;

  @Column({
    name: 'UTILIZOURATEIOCONTA',
    type: 'varchar2',
    length: 1,
    default: 'N',
  })
  usedAccountAllocation: string;

  @Column({ name: 'PRCRATEIOUTILIZADO', type: 'number', default: 100 })
  percentageAllocationUsed: number;

  @Column({ name: 'VALOR', type: 'number' })
  value: number;

  @Column({ name: 'CODCONTA', type: 'number', nullable: true })
  accountingAccountCode: number;

  @Column({ name: 'RECNUMPRINC', type: 'number', nullable: true })
  recNumMain: number;

  @Column({ name: 'DTVENC', type: 'date' })
  titleDueDate: Date;

  @Column({ name: 'DTEMISSAO', type: 'date' })
  titleIssueDate: Date;

  @Column({ name: 'DTCOTACAO', type: 'date', nullable: true })
  quotationDate: Date;

  @Column({ name: 'DTCOMPETENCIA', type: 'date' })
  competencyDate: Date;

  @Column({ name: 'DTAGENDAMENTO', type: 'date', nullable: true })
  schedulingDate: Date;

  @Column({
    name: 'REINFEVENTOR4040',
    type: 'varchar2',
    length: 1,
    default: 'N',
  })
  reinfEventR4040: string;
}
